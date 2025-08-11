import os
import pickle
import importlib.util
import glob
from debugger import log

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

def delete_pkl_files():
    log("ลบไฟล์ .pkl เก่าในโฟลเดอร์ documentsPkl ยกเว้น documents_all.pkl")
    pkl_files = glob.glob(os.path.join(DOCS_PKL_FOLDER, "*.pkl"))
    for f in pkl_files:
        if os.path.basename(f) != os.path.basename(DOCUMENTS_ALL_PKL):
            os.remove(f)
            log(f"ลบไฟล์ .pkl เก่า: {f}")

def delete_old_files():
    log("ลบ embeddings.npy, metadata.pkl ในโฟลเดอร์โปรเจคหลัก")
    for path in [EMB_PATH, META_PATH]:
        if os.path.exists(path):
            os.remove(path)
            log(f"ลบไฟล์เก่าออก: {path}")

def delete_old_pkl_files():
    # ลบไฟล์ .pkl เก่าในโฟลเดอร์ documentsPkl ก่อนรัน
    pkl_files = glob.glob(os.path.join(DOCS_PKL_FOLDER, "*.pkl"))
    for f in pkl_files:
        os.remove(f)
        log(f"ลบไฟล์ .pkl เก่า: {f}")

def load_all_documents_from_py(folder_path=DOCS_PY_FOLDER, prefix=DOCS_PY_PREFIX):
    all_docs = {}
    files = sorted([f for f in os.listdir(folder_path) if f.startswith(prefix) and f.endswith(".py")])
    log(f"เจอไฟล์ .py ที่จะโหลด {len(files)} ไฟล์:", files)
    for file in files:
        file_path = os.path.join(folder_path, file)
        module_name = file[:-3]  # ตัด .py ออก
        spec = importlib.util.spec_from_file_location(module_name, file_path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        data = getattr(module, "documents_raw", None)
        if data:
            all_docs.update(data)
            log(f"โหลดข้อมูลจาก {file} เรียบร้อย")
        else:
            log(f"ไฟล์ {file} ไม่มีตัวแปร documents_raw")
    return all_docs

def save_documents_as_pkl(documents, output_path=DOCUMENTS_ALL_PKL):
    with open(output_path, "wb") as f:
        pickle.dump(documents, f)
    log(f"บันทึกเอกสารรวมเป็นไฟล์: {output_path}")

def reDocuments():
    log("เริ่มต้นลบไฟล์ embeddings และ metadata เก่า...")
    delete_old_files()

    log("ลบไฟล์ .pkl เก่าในโฟลเดอร์ documentsPkl...")
    delete_old_pkl_files()

    log("โหลดไฟล์เอกสาร .py หลายไฟล์และรวมกัน...")
    documents_raw = load_all_documents_from_py()

    log("บันทึกเอกสารรวมเป็นไฟล์ .pkl ใหม่...")
    save_documents_as_pkl(documents_raw)
    
    delete_pkl_files()

    log("เสร็จสิ้น! พร้อมรันโปรแกรมหลักสร้าง embeddings ใหม่ได้เลย")