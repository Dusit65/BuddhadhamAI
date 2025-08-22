import json
import os
from sqlalchemy import create_engine, text
from debugger import log

CONFIG_FILE = "config.json"

def load_config():
    if not os.path.exists(CONFIG_FILE):
        raise FileNotFoundError(f"ไม่พบไฟล์ {CONFIG_FILE}")
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def get_engine():
    with open("config.json", "r", encoding="utf-8") as f:
        cfg = json.load(f)
    conn_str = cfg["database"]["conn_str"]
    return create_engine(conn_str, pool_pre_ping=True)

def fetch_documents():
    """ดึงข้อมูลทั้งหมดจาก DB -> flatten"""
    engine = get_engine()
    with engine.connect() as conn:
        sql = """
        SELECT b.bookId, b.bookName, c.chapterId, c.chapterName, c.chapterText
        FROM book_tb b
        JOIN chapter_tb c ON b.bookId = c.bookId
        """
        rows = conn.execute(text(sql)).fetchall()

    docs = []
    for r in rows:
        docs.append({
            "bookId": r.bookId,
            "bookname": r.bookName,
            "chapter": r.chapterId,
            "chapterName": r.chapterName,
            "content": r.chapterText
        })
    log(f"โหลดเอกสารจาก DB {len(docs)} รายการ")
    return docs

def get_last_update_time():
    log("ดึงเวลาล่าสุดของ book_tb และ chapter_tb")
    engine = get_engine()
    with engine.connect() as conn:
        # ต้องมี field updatedAt ใน DB ถึงจะทำงานได้
        q1 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM book_tb")).scalar()
        q2 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM chapter_tb")).scalar()

    last_update = max(q1 or "1970-01-01", q2 or "1970-01-01")
    return str(last_update)