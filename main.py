# main.py
import os
import time
from multiprocessing import Process, Manager
from fastapi import FastAPI, Request
from debugger import log
import uvicorn
import dotenv

dotenv.load_dotenv()

app = FastAPI()

log_file = "buddhamAI_cli.log"
if not os.path.exists(log_file):
    open(log_file, "w").close()
with open(log_file, "r+") as f:
    f.truncate(0)

# ---------- Task Manager ----------
import threading
import time
from multiprocessing import Process, Manager

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
            if self.queue:
                log("queue: ", self.queue)
                taskid = self.queue[0]["taskId"]
                args = self.queue[0]["args"]
                self.queue.pop(0)
                self._run_task(taskid, args)
            time.sleep(1)

    def stop(self):
        self._stop = True

    def add_task(self, taskId, args):
        self.queue.append({"taskId": taskId, "args": args})
        self.status[taskId] = "queued"

    def _run_task(self, taskId, args):
        try:
            import sys, BuddhamAI_cli, requests, os
            sys.argv = ["BuddhamAI_cli.py"] + args
            result = BuddhamAI_cli.ask_cli(args)
            self.results[taskId] = {"status": "done", "data": result}
            self.status[taskId] = "done"
            log(f"[TaskManager] task {taskId} done")

            # ส่ง webhook
            webhook_url = f"http://{os.getenv('API_SERVER')}:{os.getenv('API_SERVER_PORT')}/qNa/webhook"
            payload = {
                "taskId": taskId,
                "status": "done",
                "result": result,
                "question": args[0] if args else None
            }
            try:
                resp = requests.post(webhook_url, json=payload, timeout=5)
                log(f"[TaskManager] Webhook sent: {resp.status_code}")
            except Exception as e:
                log(f"[TaskManager] Failed to send webhook: {e}")

        except Exception as e:
            self.results[taskId] = {"status": "error", "error": str(e)}
            self.status[taskId] = "error"
            log(f"[TaskManager] task {taskId} error: {e}")
        finally:
            if taskId in self.running_tasks:
                del self.running_tasks[taskId]

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
    args = app.task_manager.cancel_task(taskId)
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