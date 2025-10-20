# db_handler.py
import os
import pickle
import numpy as np
from sqlalchemy import create_engine, text
from debugger import log
from dotenv import load_dotenv

# loading .env
load_dotenv()  # read .env file in the same directory as the script

def get_engine():
    # read values from env
    conn_str = os.getenv("conn_str")
    if not conn_str:
        raise ValueError("conn_str not set in .env")
    return create_engine(conn_str, pool_pre_ping=True)

def fetch_documents():
    """fetch DB -> flatten"""
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
    log(f"Loaded documents from DB {len(docs)} items")
    return docs

def get_last_update_time():
    log("Fetching last update time for book_tb and chapter_tb")
    engine = get_engine()
    with engine.connect() as conn:
        q1 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM book_tb")).scalar()
        q2 = conn.execute(text("SELECT MAX(updatedAt) as last_update FROM chapter_tb")).scalar()

    last_update = max(q1 or "1970-01-01", q2 or "1970-01-01")
    return str(last_update)

def save_embeddings_to_db(embeddings, docs):
    """save embeddings and metadata to DB (dynamic dimension, no timestamp)"""
    engine = get_engine()
    
    # store embedding dimension in metadata
    docs_with_dim = []
    for doc in docs:
        new_doc = dict(doc) if isinstance(doc, dict) else {"content": doc}
        new_doc["dim"] = embeddings.shape[1] if embeddings.ndim > 1 else embeddings.size
        docs_with_dim.append(new_doc)
    
    with engine.begin() as conn:
        conn.execute(text("DELETE FROM embeddings_tb"))  # keep only the latest set
        conn.execute(
            text("INSERT INTO embeddings_tb (embeddings, metadata) VALUES (:emb, :meta)"),
            {
                "emb": embeddings.astype("float32").tobytes(),
                "meta": pickle.dumps(docs_with_dim)
            }
        )
    log("Saved embeddings/metadata to DB successfully")

def load_embeddings_from_db():
    """load embeddings and metadata from DB (dynamic dimension)"""
    engine = get_engine()
    dialect = engine.dialect.name.lower()

    # SQL separated by database
    if dialect == "mysql":
        sql = "SELECT embeddings, metadata FROM embeddings_tb ORDER BY id DESC LIMIT 1"
    else:  # assume using SQL Server
        sql = "SELECT TOP 1 embeddings, metadata FROM embeddings_tb ORDER BY id DESC"

    with engine.connect() as conn:
        row = conn.execute(text(sql)).first()
        if not row:
            return None, None
        
        docs = pickle.loads(row.metadata)
        # read dimension from metadata of first doc
        dim = docs[0]["dim"] if isinstance(docs, list) and "dim" in docs[0] else None
        if dim is None:
            raise ValueError("ไม่พบ dimension ของ embeddings ใน metadata")
        
        embeddings = np.frombuffer(row.embeddings, dtype="float32").reshape(-1, dim)
        return embeddings, docs