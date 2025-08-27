# main.py
import os
import sys
import time
from multiprocessing import Process, Manager
from fastapi import FastAPI, Request
from debugger import log
import uvicorn
import BuddhamAI_cli
import dotenv

dotenv.load_dotenv()

app = FastAPI()

log_file = "buddhamAI_cli.log"
if not os.path.exists(log_file):
    open(log_file, "w").close()
with open(log_file, "r+") as f:
    f.truncate(0)

# ---------- Job Manager ----------
class JobManager:
    def __init__(self, max_process=2):
        manager = Manager()
        self.queue = []  # list ของ dict {taskId, args}
        self.running_jobs = {}  # taskId -> {"process": Process, "args": args}
        self.max_process = max_process
        self.results = manager.dict()
        self.status = manager.dict()  # queued/running/done/cancelled

    def add_job(self, taskId, args):
        job = {"taskId": taskId, "args": args}
        self.queue.append(job)
        self.status[taskId] = "queued"
        self.try_run_next()

    def try_run_next(self):
        # รัน job จนกว่าจะถึง max_process
        while len(self.running_jobs) < self.max_process and self.queue:
            job = self.queue.pop(0)
            taskId, args = job["taskId"], job["args"]
            p = Process(target=self._run_job, args=(taskId, args))
            p.start()
            self.running_jobs[taskId] = {"process": p, "args": args}
            self.status[taskId] = "running"
            print(f"[JobManager] Start job {taskId} with args: {args}")

    def _run_job(self, taskId, args):
        try:
            sys.argv = ["BuddhamAI_cli.py"] + args
            result = BuddhamAI_cli.ask_cli(args)
            self.results[taskId] = {"status": "done", "data": result}
            self.status[taskId] = "done"
            print(f"[JobManager] Job {taskId} done")
        except Exception as e:
            self.results[taskId] = {"status": "error", "error": str(e)}
            self.status[taskId] = "error"
            print(f"[JobManager] Job {taskId} error: {e}")
        finally:
            if taskId in self.running_jobs:
                del self.running_jobs[taskId]
            self.try_run_next()

    def cancel_job(self, taskId):
        # ถ้า job กำลังรันอยู่ → terminate
        if taskId in self.running_jobs:
            p = self.running_jobs[taskId]["process"]
            args = self.running_jobs[taskId]["args"]
            print(f"[JobManager] Terminate running job {taskId} with args: {args}")
            p.terminate()
            p.join()
            self.status[taskId] = "cancelled"
            del self.running_jobs[taskId]
            self.try_run_next()  # รัน job ต่อจาก queue
            return args

    def get_status(self, taskId):
        return self.status.get(taskId, "pending")

    def get_result(self, taskId):
        return self.results.get(taskId)

# ---------- FastAPI endpoints ----------
@app.post("/ask")
async def ask(request: Request):
    data = await request.json()
    args = data.get("args", [])
    taskId = data.get("taskId") or str(time.time())
    app.job_manager.add_job(taskId, args)
    return {"taskId": taskId, "status": "queued", "args": args}

@app.post("/cancel/{taskId}")
async def cancel(taskId: str):
    args = app.job_manager.cancel_job(taskId)
    status = app.job_manager.get_status(taskId)
    log(f"[JobManager] Cancel job {taskId} with args: {args}, status: {status}")
    return {"taskId": taskId, "args": args, "status": status}

@app.get("/status/{taskId}")
async def status(taskId: str):
    args = app.job_manager.cancel_job(taskId)
    res = app.job_manager.get_result(taskId)
    status = app.job_manager.get_status(taskId)
    if res:
        return res
    return {"taskId": taskId, "args": args, "status": status}

# ---------- Main ----------
if __name__ == "__main__":
    process_count = int(os.getenv("processes", 1))
    app.job_manager = JobManager(max_process=process_count)
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("AI_SERVER_PORT", 8000)))