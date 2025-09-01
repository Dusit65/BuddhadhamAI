# main.py
import socketio
import os
import time
from multiprocessing import Process, Manager
import threading
from fastapi import FastAPI, Request
from debugger import log
import uvicorn
import dotenv
import sys
import BuddhamAI_cli

dotenv.load_dotenv()

app = FastAPI()

log_file = "buddhamAI_cli.log"
if not os.path.exists(log_file):
    open(log_file, "w").close()
with open(log_file, "r+") as f:
    f.truncate(0)

socket = socketio.Client()
socket.connect(f"http://{os.getenv('API_SERVER')}:{os.getenv('API_SERVER_PORT')}")

def socket_emit(event, data):
    try:
        socket.emit(event, data)
    except Exception as e:
        log(f"[Socket] Emit error: {e}")

# ---------- Task Manager ----------
class TaskManager:
    def __init__(self, max_process=1):
        manager = Manager()
        self.queue = []  # list ของ dict {taskId, args}
        self.running_tasks = {}  # taskId -> {"process": Process, "args": args}
        self.max_process = max_process
        self.results = manager.dict()
        self.status = manager.dict()
        self._stop = False

        # start background thread
        threading.Thread(target=self._background_loop, daemon=True).start()

    def _background_loop(self):
        while not self._stop:
            # log(self.queue)
            if self.queue:
                log("queue: ", self.queue)
                # log("status: ", self.status)
                task = self.queue.pop(0)
                taskId, args = task["taskId"], task["args"]
                self._run_task(taskId, args)
            time.sleep(1)

    def stop(self):
        self._stop = True

    def add_task(self, taskId, args):
        self.queue.append({"taskId": taskId, "args": args})
        self.status[taskId] = "queued"

    def _run_task(self, taskId, args):
        try:
            sys.argv = ["BuddhamAI_cli.py"] + args
            self.status[taskId] = "running"
            result = BuddhamAI_cli.ask_cli(args)
            self.results[taskId] = {"status": "done", "data": result}
            self.status[taskId] = "done"
            log(f"[TaskManager] Task {taskId} done")
            socket_emit("message", result['data']['answer'])
        except Exception as e:
            self.results[taskId] = {"status": "error", "error": str(e)}
            self.status[taskId] = "error"
            log(f"[TaskManager] Job {taskId} error: {e}")
        finally:
            if taskId in self.running_tasks:
                del self.running_tasks[taskId]
                
    def get_status(self, taskId):
        return self.status.get(taskId, "pending")

    def get_result(self, taskId):
        return self.results.get(taskId)

    def cancel_task(self, taskId):
        # ถ้า task กำลังรันอยู่ → terminate
        if taskId in self.running_tasks:
            p = self.running_tasks[taskId]["process"]
            args = self.running_tasks[taskId]["args"]
            log(f"[TaskManager] Terminate running task {taskId} with args: {args}")
            p.terminate()
            p.join()
            self.status[taskId] = "cancelled"
            del self.running_tasks[taskId]
            return args

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
    log(f"[TaskManager] Cancel task {taskId} with args: {args}, status: {status}")
    return {"taskId": taskId, "args": args, "status": status}

@app.get("/status/{taskId}")
async def status(taskId: str):
    args = app.task_manager.get_result(taskId)
    res = app.task_manager.get_result(taskId)
    status = app.task_manager.get_status(taskId)
    if res:
        return res
    return {"taskId": taskId, "args": args, "status": status}

# ---------- Main ----------
if __name__ == "__main__":
    process_count = int(os.getenv("processes", 1))
    app.task_manager = TaskManager(max_process=process_count)
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("AI_SERVER_PORT", 8000)))