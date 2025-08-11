# buddhamAI_cli
import sys
import os
import pickle
import json
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

with open("buddhamAI_cli.log", "r+") as f:
    f.truncate(0)

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
        log("กำลัง reDocuments()")
        reDocuments()
        time.sleep(2)
        with open(path, "rb") as f:
            docs = pickle.load(f)
        return docs

def flatten_docs(raw):
    docs = []
    for book_name, chapters in raw.items():
        for chapter_key, pages in chapters.items():
            for page_key, content in pages.items():
                chapter_num = int(chapter_key.replace("chapter ", ""))
                page_num = int(page_key.replace("page ", ""))
                docs.append({
                    "bookname": book_name,
                    "chapter": chapter_num,
                    "page": page_num,
                    "content": content
                })
    return docs

def create_and_save_embeddings_and_metadata(docs):
    embeddings = []
    for doc in docs:
        content = doc.get("content", "")
        if not content:
            continue
        emb = ollama.embeddings(model='nomic-embed-text', prompt=content)['embedding']
        embeddings.append(emb)
    embeddings = np.array(embeddings, dtype='float32')
    log(f"กำลังสร้าง {EMB_PATH}")
    np.save(EMB_PATH, embeddings)
    with open(META_PATH, 'wb') as f:
        pickle.dump(docs, f)

def load_embeddings_and_metadata():
    log(f"โหลด {EMB_PATH} และ {META_PATH}")
    embeddings = np.load(EMB_PATH)
    with open(META_PATH, 'rb') as f:
        metadata = pickle.load(f)
    return embeddings, metadata

def search(query, index, metadata, top_k, max_distance):
    log(f"กำลังค้นหาข้อมูลอ้างอิงสำหรับ: {query} ด้วย top_k={top_k} และ max_distance={max_distance}")
    q_emb = ollama.embeddings(model='nomic-embed-text', prompt=query)['embedding']
    q_emb = np.array([q_emb], dtype='float32')
    distances, ids = index.search(q_emb, top_k)
    log(f"ค้นหา nearest neighbors เจอ {len(ids[0])} รายการ")
    results = []
    for i, idx in enumerate(ids[0]):
        if idx < len(metadata):
            dist = distances[0][i]
            if max_distance is None or dist <= max_distance:
                results.append((metadata[idx], dist))
                log(f"เพิ่มผลลัพธ์: index={idx}, distance={dist:.4f}")
            else:
                log(f"ตัดผลลัพธ์: index={idx}, distance={dist:.4f} เพราะเกิน max_distance={max_distance}")
    log(f"ค้นหาข้อมูลอ้างอิง ได้ผลลัพธ์ {len(results)} รายการ ได้แก่ {short_references([doc for doc, _ in results])}")
    return results

def short_references(metadata):
    sorted_docs = sorted(metadata, key=lambda d: (d['bookname'], d['chapter'], d['page']))
    return ", ".join([
        f"{d['bookname']} บท {d['chapter']} หน้า {d['page']}"
        for d in sorted_docs
    ])

def check_rejection_message(text: str) -> bool:
    rejection_phrases = [
        "ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้ เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น",
        "ขออภัยครับ…ผมไม่สามารถตอบคำถามนี้ได้… เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น",
        "ขออภัยครับ…ผมไม่สามารถตอบคำถามนี้ได้ เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น",
        "ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้....",
        "ผมไม่สามารถตอบคำถามนี้ได้",
        "ไม่สามารถตอบคำถาม"
    ]
    return any(phrase in text for phrase in rejection_phrases)

def ask(query, index, metadata, top_k=None, max_distance=None):
    top_k=len(query) if top_k is None else top_k
    global start
    results = search(query, index, metadata, top_k, max_distance=max_distance)

    contexts = [
        f"{doc['content']}"
        for doc, _ in results
    ]
    full_context = "\n".join(contexts)
    prompt = f"""ข้อมูลอ้างอิง:\n{full_context}\nคำถาม: {query}"""
    model = 'gpt-oss:20b'
    log(f"กำลังถามโมเดล: \"{model}\" ด้วย prompt:\n{prompt}")
    start = time.perf_counter()
    response = ollama.chat(
        model=model,
        messages=[
            {"role": "system", "content": "คุณคือผู้ช่วยที่ใช้ข้อมูลอ้างอิงจากเอกสารหลายแหล่ง ซึ่งจะช่วยตอบคำถามเกี่ยวกับพระพทธรรมเท่านั้นถ้าได้รับคำถามนอกเหนือจากนี้ให้ตอบว่า ขออภัยครับ...ผมไม่สามารถตอบคำถามนี้ได้....เนื่องจากผมถูกออกแบบมาเพื่อให้ตอบคำถามเกี่ยวกับพระพุทธธรรมเท่านั้น"},
            {"role": "user", "content": prompt}
        ]
    )
    answer = response['message']['content']
    ref_text = short_references([doc for doc, _ in results])
    end = time.perf_counter()
    processing_time = format_duration(end - start)
    log(f"ถามโมเดล \"{model}\" เสร็จสิ้น ใช้เวลา {processing_time}")
    if not check_rejection_message(answer):
        return {
            "answer": answer,
            "references": ref_text,
            "duration": processing_time
        }
    else:
        return {
            "answer": answer,
            "references": "",
            "duration": 0
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
    log("เริ่มต้น BuddhamAI")
    # ดึงคำถาม (argument แรกที่ไม่ใช่ flag)
    message = None
    top_k = None
    max_distance = None

    # วนอ่าน argv ตั้งแต่ sys.argv[1]
    args = sys.argv[1:]
    i = 0
    while i < len(args):
        arg = args[i]
        if arg == '-k' and i + 1 < len(args):
            try:
                top_k = int(args[i+1])
            except ValueError:
                top_k = None
            i += 2
        elif arg == '-d' and i + 1 < len(args):
            try:
                max_distance = float(args[i+1])
            except ValueError:
                max_distance = None
            i += 2
        elif not arg.startswith('-') and message is None:
            message = arg
            i += 1
        else:
            i += 1

    if message is None or message.strip() == "":
        result = {"rejected": True, "answer": "กรุณาถามคำถาม", "references": "ไม่มี", "duration": 0}
        data = {"data": result}
        json_str = json.dumps(data, ensure_ascii=False)
        log(json_str)
        print(json_str)
        sys.exit(0)

    # if top_k is None or top_k <= 0:
    #     top_k = 3  # default

    index, metadata = init_bot()
    result = ask(message, index, metadata, top_k=top_k, max_distance=max_distance)

    data = {"data": result}
    json_str = json.dumps(data, ensure_ascii=False)
    log(json_str)
    print(json_str)
    sys.exit(0)

if __name__ == "__main__":
    ask_cli()