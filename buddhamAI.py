import numpy as np
import pickle
import os
import faiss
import ollama
import time
from debugger import format_duration
from reDocuments import reDocuments

def clear_screen():
    if os.name == 'nt':  # Windows
        os.system('cls')
    else:  # Unix/Linux/Mac
        os.system('clear')

EMB_PATH = "embeddings.npy"
META_PATH = "metadata.pkl"
DOCS_ALL_PATH = "documents/documentsPkl/documents_all.pkl"

def load_all_documents_pickle(path=DOCS_ALL_PATH):
    if not os.path.isfile(path):
        print(f"ไม่พบไฟล์ {path} รัน reDocuments() แทน")
        reDocuments()
        import time
        time.sleep(2)  # รอไฟล์ถูกเขียนและระบบไฟล์อัปเดต
    try:
        with open(path, "rb") as f:
            docs = pickle.load(f)
        print(f"โหลดเอกสารทั้งหมดจาก {path} จำนวน {len(docs)} รายการ")
        return docs
    except Exception as e:
        print(f"เกิดข้อผิดพลาดขณะโหลดไฟล์ {path}: {e}")
        print("รัน reDocuments() แทน")
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
    for i, doc in enumerate(docs):
        content = doc.get("เนื้อหา", None)
        if not content:
            continue
        emb = ollama.embeddings(model='nomic-embed-text', prompt=content)['embedding']
        embeddings.append(emb)

    if len(embeddings) == 0:
        print("❌ ไม่มี embedding สร้างได้เลย! ตรวจสอบข้อมูลเอกสาร")
        return

    embeddings = np.array(embeddings, dtype='float32')
    np.save(EMB_PATH, embeddings)
    with open(META_PATH, 'wb') as f:
        pickle.dump(docs, f)
    print("บันทึก embeddings และ metadata เรียบร้อย")

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
    refs = [f"เล่ม {d['เล่ม']} > บท {d['บท']} > หน้า {d['หน้า']}" for d in sorted_docs]
    return "\n".join(refs)

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
        return "ไม่มีข้อมูล"

    contexts = []
    for i, (doc, dist) in enumerate(results):
        contexts.append(f"เล่ม {doc['เล่ม']} บท {doc['บท']} หน้า {doc['หน้า']}:\n{doc['เนื้อหา']}")

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
    
    if check_rejection_message(answer):
        end = time.perf_counter()
        print(f"ใช้เวลาในการคิด {format_duration(end - start)}")
        return f"bool ที่ได้ : {check_rejection_message(answer)} | คำตอบ : {answer}"
    else:
        end = time.perf_counter()
        print(f"ใช้เวลาในการคิด {format_duration(end - start)}")
        return f"bool ที่ได้ : {check_rejection_message(answer)} | คำตอบ : {answer}\n\nอ้างอิง:\n{ref_text}"
        # return f"{answer}\n\nอ้างอิง:\n{ref_text}"

def main():
    documents_raw = load_all_documents_pickle()
    documents = flatten_docs(documents_raw)

    if not (os.path.exists(EMB_PATH) and os.path.exists(META_PATH)):
        create_and_save_embeddings_and_metadata(documents)

    embeddings, metadata = load_embeddings_and_metadata()

    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)

    print("พร้อมใช้งาน! พิมพ์ cls เพื่อออก")

    while True:
        q = input(">>> ").strip()
        if q.lower() == "cls" or q.lower() == "แสห":
            print("ลาก่อน!")
            break
        elif q.lower() == "clss" or q.lower() == "แสหห":
            clear_screen()
            break
        else:
            print("BuddhamAI : ", ask(q, index, metadata))

if __name__ == "__main__":
    main()
