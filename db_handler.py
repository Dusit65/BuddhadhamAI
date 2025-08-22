import os
from sqlalchemy import create_engine, text
from debugger import log
from dotenv import load_dotenv

# โหลด .env
load_dotenv()  # จะอ่านไฟล์ .env ใน directory เดียวกับ script

def get_engine():
    # อ่านค่าจาก env
    conn_str = os.getenv("conn_str")
    if not conn_str:
        raise ValueError("conn_str ไม่ถูกตั้งค่าใน .env")
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
            "bookName": r.bookName,
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
        q1 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM book_tb")).scalar()
        q2 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM chapter_tb")).scalar()

    last_update = max(q1 or "1970-01-01", q2 or "1970-01-01")
    return str(last_update)