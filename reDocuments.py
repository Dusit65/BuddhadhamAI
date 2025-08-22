import os
import pickle
import ollama
import json
import numpy as np
from debugger import log
from db_handler import get_last_update_time, fetch_documents

def clear_screen():
    if os.name == 'nt':  # Windows
        os.system('cls')
    else:  # Unix/Linux/Mac
        os.system('clear')

# ใช้งาน
clear_screen()

# พาธไฟล์ที่ต้องจัดการ
EMB_PATH = "embeddings.npy"
META_PATH = "metadata.pkl"

DOCS_PY_FOLDER = "./documents/documentsPython"
DOCS_PY_PREFIX = "documents_raw_"

DOCS_PKL_FOLDER = "./documents/documentsPkl"
DOCUMENTS_ALL_PKL = os.path.join(DOCS_PKL_FOLDER, "documents_all.pkl")

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

def save_last_embed_time(ts):
        with open(STATUS_FILE, "w", encoding="utf-8") as f:
            json.dump({"last_embed_time": ts}, f, ensure_ascii=False, indent=2)

def save_documents_as_pkl(documents, output_path=DOCUMENTS_ALL_PKL):
    with open(output_path, "wb") as f:
        pickle.dump(documents, f)
    log(f"บันทึกเอกสารรวมเป็นไฟล์: {output_path}")

def reDocuments():
    log("เริ่ม regenerate embeddings และ metadata ใหม่จาก DB...")
    documents = fetch_documents()
    create_and_save_embeddings_and_metadata(documents)
    ts = get_last_update_time()
    save_last_embed_time(ts)
    log("สร้าง embeddings ใหม่เรียบร้อย")