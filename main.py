# main.py
import os
import time
import threading
from queue import Queue
from fastapi import FastAPI, Request
import socketio
import dotenv
import sys
import BuddhamAI_cli
from debugger import log
import uvicorn

dotenv.load_dotenv()

app = FastAPI()

log_file = "buddhamAI_cli.log"
if not os.path.exists(log_file):
    open(log_file, "w").close()

socket = socketio.Client()
socket.connect(f"http://{os.getenv('API_SERVER')}:{os.getenv('API_SERVER_PORT')}")

def socket_emit(event, data):
    try:
        socket.emit(event, data)
    except Exception as e:
        log(f"[Socket] Emit error: {e}")

# ---------- Task Manager ----------
class TaskManager:
    def __init__(self, max_thread=1):
        self.queue = []  # list ของ dict {taskId, args}
        self.running_tasks = {}  # taskId -> {"thread": Thread, "args": args, "stop_flag": Event}
        self.max_thread = max_thread
        self.results = {}  # taskId -> result dict
        self.status = {}   # taskId -> status string
        self._stop = False

        self.message_queue = Queue()  # สำหรับส่ง message ไป main thread
        threading.Thread(target=self._background_loop, daemon=True).start()
        threading.Thread(target=self._socket_loop, daemon=True).start()

    def _background_loop(self):
        while not self._stop:
            # start new tasks ถ้ายังไม่เต็ม max_thread
            while self.queue and len(self.running_tasks) < self.max_thread:
                task = self.queue.pop(0)
                taskId, args = task["taskId"], task["args"]
                stop_flag = threading.Event()
                t = threading.Thread(target=self._run_task_thread, args=(taskId, args, stop_flag))
                self.running_tasks[taskId] = {"thread": t, "args": args, "stop_flag": stop_flag}
                self.status[taskId] = "running"
                log(f"[TaskManager] Start task {taskId} with args: {args}")
                t.start()
            time.sleep(1)

    def _socket_loop(self):
        while not self._stop:
            while not self.message_queue.empty():
                msg = self.message_queue.get()
                socket_emit("message", msg)
            time.sleep(0.1)

    def stop(self):
        self._stop = True

    def add_task(self, taskId, args):
        self.queue.append({"taskId": taskId, "args": args})
        self.status[taskId] = "queued"

    def _run_task_thread(self, taskId, args, stop_flag):
        try:
            sys.argv = ["BuddhamAI_cli.py"] + args
            result = BuddhamAI_cli.ask_cli(args)
            if stop_flag.is_set():
                self.status[taskId] = "cancelled"
                log(f"[TaskManager] Task {taskId} was cancelled before finishing")
                return
            self.results[taskId] = {"status": "done", "data": result, "args": args}
            self.status[taskId] = "done"
            log(f"[TaskManager] Task {taskId} done")
            self.message_queue.put(result['data']['answer']+'\n\nใช้เวลา '+ str(result["data"]["duration"]))
        except Exception as e:
            self.results[taskId] = {"status": "error", "error": str(e), "args": args}
            self.status[taskId] = "error"
            log(f"[TaskManager] Task {taskId} error: {e}")
        finally:
            if taskId in self.running_tasks:
                del self.running_tasks[taskId]

    def get_status(self, taskId):
        return self.status.get(taskId, "pending")

    def get_result(self, taskId):
        return self.results.get(taskId)

    def cancel_task(self, taskId):
        # ถ้า task กำลังรันอยู่ → set stop_flag
        if taskId in self.running_tasks:
            stop_flag = self.running_tasks[taskId]["stop_flag"]
            stop_flag.set()
            args = self.running_tasks[taskId]["args"]
            self.status[taskId] = "cancelled"
            log(f"[TaskManager] Cancel running task {taskId} with args: {args}")
            return args
        # ถ้า task อยู่ใน queue → ลบออก
        for i, task in enumerate(self.queue):
            if task["taskId"] == taskId:
                args = task["args"]
                self.queue.pop(i)
                self.status[taskId] = "cancelled"
                log(f"[TaskManager] Cancel queued task {taskId} with args: {args}")
                return args
        return None

# ---------- FastAPI endpoints ----------
@app.post("/ask")
async def ask(request: Request):
    data = await request.json()
    args = data.get("args", [])
    taskId = str(int(time.time() * 1000))
    app.task_manager.add_task(taskId, args)
    return {"args": args, "taskId": taskId, "status": "queued"}

@app.post("/cancel/{taskId}")
async def cancel(taskId: str):
    args = app.task_manager.cancel_task(taskId)
    status = app.task_manager.get_status(taskId)
    return {"taskId": taskId, "args": args, "status": status}

@app.get("/status/{taskId}")
async def status(taskId: str):
    res = app.task_manager.get_result(taskId)
    status_val = app.task_manager.get_status(taskId)
    args = None

    if taskId in app.task_manager.running_tasks:
        args = app.task_manager.running_tasks[taskId]["args"]
    elif res:
        args = res.get("args")
    else:
        for task in app.task_manager.queue:
            if task["taskId"] == taskId:
                args = task["args"]
                break

    return res if res else {"taskId": taskId, "args": args, "status": status_val}

# ---------- Main ----------
if __name__ == "__main__":
    process_count = int(os.getenv("processes", 1))
    app.task_manager = TaskManager(max_thread=process_count)
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("AI_SERVER_PORT", 8000)))