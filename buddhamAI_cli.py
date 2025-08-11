# buddhamAI_cli
import sys
import os
import pickle
import numpy as np
import faiss
import ollama
import time
import traceback
import datetime
from reDocuments import reDocuments
from debugger import format_duration, log

def clear_screen():
    if os.name == 'nt':  # Windows
        os.system('cls')
    else:  # Unix/Linux/Mac
        os.system('clear')

EMB_PATH = "embeddings.npy"
META_PATH = "metadata.pkl"
DOCS_ALL_PATH = "documents/documentsPkl/documents_all.pkl"
start = None
end = None


def load_all_documents_pickle(path=DOCS_ALL_PATH):
    if not os.path.isfile(path):
        log(f"ไม่พบไฟล์ {path} รัน reDocuments() แทน")
        reDocuments()
        import time
        time.sleep(2)  # รอไฟล์ถูกเขียนและระบบไฟล์อัปเดต
    try:
        with open(path, "rb") as f:
            docs = pickle.load(f)
        log(f"โหลดเอกสารทั้งหมดจาก {path} จำนวน {len(docs)} รายการ")
        return docs
    except Exception as e:
        log(f"เกิดข้อผิดพลาดขณะโหลดไฟล์ {path}: {e}")
        log("รัน reDocuments() แทน")
        reDocuments()
        time.sleep(2)
        # พยายามโหลดใหม่
        with open(path, "rb") as f:
            docs = pickle.load(f)
        return docs

def flatten_docs(raw):
    docs = []
    for book_key, chapters in raw.items():
        for chapter_key, pages in chapters.items():
            for page_key, content in pages.items():
                book_num = int(book_key.replace("เล่มที่ ", ""))
                chapter_num = int(chapter_key.replace("บทที่ ", ""))
                page_num = int(page_key.replace("หน้า ", ""))
                docs.append({
                    "เล่ม": book_num,
                    "บท": chapter_num,
                    "หน้า": page_num,
                    "เนื้อหา": content
                })
    return docs

def create_and_save_embeddings_and_metadata(docs):
    embeddings = []
    for doc in docs:
        content = doc.get("เนื้อหา", "")
        if not content:
            continue
        emb = ollama.embeddings(model='nomic-embed-text', prompt=content)['embedding']
        embeddings.append(emb)
    embeddings = np.array(embeddings, dtype='float32')
    np.save(EMB_PATH, embeddings)
    with open(META_PATH, 'wb') as f:
        pickle.dump(docs, f)

def load_embeddings_and_metadata():
    embeddings = np.load(EMB_PATH)
    with open(META_PATH, 'rb') as f:
        metadata = pickle.load(f)
    return embeddings, metadata

def search(query, index, metadata, top_k=3):
    q_emb = ollama.embeddings(model='nomic-embed-text', prompt=query)['embedding']
    q_emb = np.array([q_emb], dtype='float32')
    distances, ids = index.search(q_emb, top_k)
    results = []
    for i, idx in enumerate(ids[0]):
        if idx < len(metadata):
            results.append((metadata[idx], distances[0][i]))
    return results

def short_references(metadata):
    sorted_docs = sorted(metadata, key=lambda d: (d['เล่ม'], d['บท'], d['หน้า']))
    return "\n".join([f"เล่ม {d['เล่ม']} > บท {d['บท']} > หน้า {d['หน้า']}" for d in sorted_docs])

def check_rejection_message(text: str) -> bool:
    rejection_phrases = [
        "ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้ เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น",
        "ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้...."
    ]
    return any(phrase in text for phrase in rejection_phrases)

def ask(query, index, metadata, top_k=3):
    start = time.perf_counter()
    results = search(query, index, metadata, top_k=top_k)
    if not results:
        return {"rejected": False, "answer": "ไม่มีข้อมูล", "references": "", "duration": format_duration(time.perf_counter() - start)}

    contexts = [
        f"เล่ม {doc['เล่ม']} บท {doc['บท']} หน้า {doc['หน้า']}:\n{doc['เนื้อหา']}"
        for doc, _ in results
    ]
    full_context = "\n\n---\n\n".join(contexts)
    prompt = f"""ข้อมูลอ้างอิง:\n{full_context}\n\nคำถาม: {query}"""
    response = ollama.chat(
        model='gpt-oss:20b',
        messages=[
            {"role": "system", "content": "คุณคือผู้ช่วยที่ใช้ข้อมูลอ้างอิงจากเอกสารหลายแหล่ง ซึ่งจะช่วยตอบคำถามเกี่ยวกับพระพทธรรมเท่านั้นถ้าได้รับคำถามนอกเหนือจากนี้ให้ตอบว่า ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้....เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น"},
            {"role": "user", "content": prompt}
        ]
    )
    answer = response['message']['content']
    ref_text = short_references([doc for doc, _ in results])
    end = time.perf_counter()
    return {
        "rejected": check_rejection_message(answer),
        "answer": answer,
        "references": ref_text,
        "duration": format_duration(end - start)
    }
    
def init_bot():
    documents_raw = load_all_documents_pickle()
    documents = flatten_docs(documents_raw)
    if not (os.path.exists(EMB_PATH) and os.path.exists(META_PATH)):
        create_and_save_embeddings_and_metadata(documents)
    embeddings, metadata = load_embeddings_and_metadata()
    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)
    return index, metadata

def ask_cli():
    import json
    if len(sys.argv[1].strip()) == 0:
        result = {"rejected": True, "answer": "กรุณาถามคำถาม", "references": "ไม่มี", "duration": 0}
        data = {"data": result}
        json_str = json.dumps(data)
        log(json_str)
        print(json_str)
        sys.exit(0)
        
    message = sys.argv[1]
    index, metadata = init_bot()
    result = ask(message, index, metadata)
    data = {"data": result}
    json_str = json.dumps(data)
    log(json_str)
    print(json_str)
    sys.exit(0)

if __name__ == "__main__":
    ask_cli()