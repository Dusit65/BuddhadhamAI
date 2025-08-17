import sys
import importlib
import subprocess
from debugger import log

required_packages = {
    "numpy": ("numpy", "np"),
    "ollama": ("ollama", "ollama"),
    "faiss-cpu": ("faiss", "faiss")
}

def check_and_install_packages(required_packages):
    to_install = []

    # ตรวจสอบโมดูล
    for pip_name, (import_name, _) in required_packages.items():
        try:
            importlib.import_module(import_name)
            log(f"โมดูล '{import_name}' มีอยู่แล้ว")
        except ImportError:
            log(f"ไม่พบโมดูล '{import_name}' จะติดตั้ง '{pip_name}'")
            to_install.append(pip_name)

    if to_install:
        log(f"pip install {' '.join(to_install)}")
        result = subprocess.run(
            [sys.executable, "-m", "pip", "install"] + to_install,
            capture_output=True,
            text=True
        )
        log("ผลลัพธ์การติดตั้ง:\n" + result.stdout)
        if result.stderr:
            log("เกิดข้อผิดพลาด:\n" + result.stderr)

    # import โมดูลทั้งหมดตาม import_name และสร้าง alias
    imported_modules = {}
    for pip_name, (import_name, alias) in required_packages.items():
        imported_modules[alias] = importlib.import_module(import_name)

    log("โมดูลทั้งหมดถูกติดตั้งและนำเข้าเรียบร้อยแล้ว")
    return imported_modules