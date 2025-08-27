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
        self.queue = []  # list ของ dict {jobId, args}
        self.running_jobs = {}  # jobId -> {"process": Process, "args": args}
        self.max_process = max_process
        self.results = manager.dict()
        self.status = manager.dict()  # queued/running/done/cancelled

    def add_job(self, jobId, args):
        job = {"jobId": jobId, "args": args}
        self.queue.append(job)
        self.status[jobId] = "queued"
        self.try_run_next()

    def try_run_next(self):
        # รัน job จนกว่าจะถึง max_process
        while len(self.running_jobs) < self.max_process and self.queue:
            job = self.queue.pop(0)
            jobId, args = job["jobId"], job["args"]
            p = Process(target=self._run_job, args=(jobId, args))
            p.start()
            self.running_jobs[jobId] = {"process": p, "args": args}
            self.status[jobId] = "running"
            print(f"[JobManager] Start job {jobId} with args: {args}")

    def _run_job(self, jobId, args):
        try:
            sys.argv = ["BuddhamAI_cli.py"] + args
            result = BuddhamAI_cli.ask_cli(args)
            self.results[jobId] = {"status": "done", "data": result}
            self.status[jobId] = "done"
            print(f"[JobManager] Job {jobId} done")
        except Exception as e:
            self.results[jobId] = {"status": "error", "error": str(e)}
            self.status[jobId] = "error"
            print(f"[JobManager] Job {jobId} error: {e}")
        finally:
            if jobId in self.running_jobs:
                del self.running_jobs[jobId]
            self.try_run_next()

    def cancel_job(self, jobId):
        # ถ้า job กำลังรันอยู่ → terminate
        if jobId in self.running_jobs:
            p = self.running_jobs[jobId]["process"]
            args = self.running_jobs[jobId]["args"]
            print(f"[JobManager] Terminate running job {jobId} with args: {args}")
            p.terminate()
            p.join()
            self.status[jobId] = "cancelled"
            del self.running_jobs[jobId]
            self.try_run_next()  # รัน job ต่อจาก queue
            return args

    def get_status(self, jobId):
        return self.status.get(jobId, "pending")

    def get_result(self, jobId):
        return self.results.get(jobId)

# ---------- FastAPI endpoints ----------
@app.post("/ask")
async def ask(request: Request):
    data = await request.json()
    args = data.get("args", [])
    jobId = data.get("jobId") or str(time.time())
    app.job_manager.add_job(jobId, args)
    return {"jobId": jobId, "status": "queued", "args": args}

@app.post("/cancel/{jobId}")
async def cancel(jobId: str):
    args = app.job_manager.cancel_job(jobId)
    status = app.job_manager.get_status(jobId)
    log(f"[JobManager] Cancel job {jobId} with args: {args}, status: {status}")
    return {"jobId": jobId, "args": args, "status": status}

@app.get("/status/{jobId}")
async def status(jobId: str):
    args = app.job_manager.cancel_job(jobId)
    res = app.job_manager.get_result(jobId)
    status = app.job_manager.get_status(jobId)
    if res:
        return res
    return {"jobId": jobId, "args": args, "status": status}

# ---------- Main ----------
if __name__ == "__main__":
    process_count = int(os.getenv("processes", 1))
    app.job_manager = JobManager(max_process=process_count)
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("AI_SERVER_PORT", 8000)))