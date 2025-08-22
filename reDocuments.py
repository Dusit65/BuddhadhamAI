# reDocument.py
import os
import pickle
import ollama
import json
import numpy as np
from debugger import log
from db_handler import get_last_update_time, fetch_documents, load_embeddings_from_db, save_embeddings_to_db

EMB_PATH = "embeddings.npy"
META_PATH = "metadata.pkl"
STATUS_FILE = "embed_status.json"

def create_and_save_embeddings_and_metadata(docs):
    embeddings = []
    for doc in docs:
        content = doc.get("content", "")
        if not content:
            continue
        emb = ollama.embeddings(model='nomic-embed-text:v1.5', prompt=content)['embedding']
        embeddings.append(emb)
    embeddings = np.array(embeddings, dtype='float32')
    log(f"กำลังสร้าง {EMB_PATH}")
    np.save(EMB_PATH, embeddings)
    with open(META_PATH, 'wb') as f:
        pickle.dump(docs, f)
    log(f"บันทึก metadata ลง {META_PATH}")

def save_last_embed_time(ts):
    with open(STATUS_FILE, "w", encoding="utf-8") as f:
        json.dump({"last_embed_time": ts}, f, ensure_ascii=False, indent=2)

def load_last_embed_time():
    if not os.path.exists(STATUS_FILE):
        return None
    with open(STATUS_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get("last_embed_time")

def load_embeddings_and_metadata():
    if not os.path.exists(EMB_PATH) or not os.path.exists(META_PATH):
        return None, None
    with open(META_PATH, "rb") as f:
        docs = pickle.load(f)
    embeddings = np.load(EMB_PATH)
    return embeddings, docs

def ensure_embeddings_up_to_date():
    last_update_db = get_last_update_time()
    last_embed_time = load_last_embed_time()

    # ไม่มีไฟล์ -> ลองโหลดจาก DB
    if not os.path.exists(EMB_PATH) or not os.path.exists(META_PATH):
        log("ไฟล์ embeddings/metadata ไม่พบ ลองโหลดจาก DB...")
        emb, docs = load_embeddings_from_db()
        if emb is not None and docs is not None:
            log("โหลด embeddings/metadata จาก DB สำเร็จ")
            np.save(EMB_PATH, emb)
            with open(META_PATH, "wb") as f:
                pickle.dump(docs, f)
            return emb, docs
        log("DB ก็ไม่มี → regenerate ใหม่")
        documents = fetch_documents()
        create_and_save_embeddings_and_metadata(documents)
        save_embeddings_to_db(np.load(EMB_PATH), documents)
        save_last_embed_time(last_update_db)
        return np.load(EMB_PATH), documents

    # ถ้า outdated
    if last_embed_time is None or last_embed_time < last_update_db:
        log("embeddings/metadata outdated → regenerate ใหม่")
        documents = fetch_documents()
        create_and_save_embeddings_and_metadata(documents)
        save_embeddings_to_db(np.load(EMB_PATH), documents)
        save_last_embed_time(last_update_db)
        return np.load(EMB_PATH), documents

    # โหลดจากไฟล์
    embeddings, documents = load_embeddings_and_metadata()
    log("โหลด embeddings/metadata จากไฟล์สำเร็จ")
    return embeddings, documents