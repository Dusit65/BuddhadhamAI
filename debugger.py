# debugger.py
from datetime import datetime
import os
from urllib.parse import quote_plus
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from log_model import Base, Log
from dotenv import load_dotenv

# loading .env
load_dotenv()

# read values from env
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_SERVER = os.getenv("DB_SERVER")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_DRIVER = os.getenv("DB_DRIVER")
DB_DRIVER_ENCODED = quote_plus(DB_DRIVER)

conn_str = (
    f"mssql+pyodbc://{DB_USER}:{DB_PASSWORD}"
    f"@{DB_SERVER}:{DB_PORT}/{DB_NAME}"
    f"?driver={DB_DRIVER_ENCODED}&TrustServerCertificate=yes&charset=utf8"
)

engine = create_engine(conn_str, pool_pre_ping=True)
Session = sessionmaker(bind=engine, autoflush=False, autocommit=False)

# create table if not exists
Base.metadata.create_all(engine)

def log(*args):
    log_to_file(*args)
    message_text = " ".join(str(a) for a in args)
    createdAt = datetime.now()
    entry_text = f"{message_text}"

    session = Session()
    try:
        log_entry = Log(message=entry_text, createdAt=createdAt)
        session.add(log_entry)
        session.commit()
    except SQLAlchemyError as e:
        print(f"Error logging message: {e}")
        session.rollback()
    finally:
        session.close()

def log_to_file(*args):
    log_message = " ".join(str(a) for a in args)
    log_file = "buddhamAI_cli.log"
    timestamp = datetime.now().strftime("%H:%M:%S %d-%m-%Y")
    new_entry = f"[{timestamp}] {log_message}".encode("utf-8")  # encode to bytes

    if os.path.exists(log_file):
        with open(log_file, "rb+") as f:
            f.seek(0, os.SEEK_END)
            size = f.tell()
            if size > 0:
                # check last byte
                f.seek(-1, os.SEEK_END)
                last_char = f.read(1)
                if last_char != b"\n":
                    f.write(b"\n")
            f.write(new_entry)
    else:
        with open(log_file, "wb") as f:
            f.write(new_entry)

def format_duration(seconds: float) -> str:
    year = 365 * 24 * 3600
    month = 30 * 24 * 3600
    day = 24 * 3600
    hour = 3600
    minute = 60
    millisecond = 1e-3
    microsecond = 1e-6

    parts = []

    if seconds >= year:
        y = int(seconds // year)
        seconds %= year
        parts.append(f"{y} ปี")
    if seconds >= month:
        m = int(seconds // month)
        seconds %= month
        parts.append(f"{m} เดือน")
    if seconds >= day:
        d = int(seconds // day)
        seconds %= day
        parts.append(f"{d} วัน")
    if seconds >= hour:
        h = int(seconds // hour)
        seconds %= hour
        parts.append(f"{h} ชม.")
    if seconds >= minute:
        mi = int(seconds // minute)
        seconds %= minute
        parts.append(f"{mi} นาที")
    if seconds >= 1:
        s = int(seconds)
        seconds %= 1
        parts.append(f"{s} วินาที")
    if seconds >= millisecond:
        ms = int(seconds // millisecond)
        seconds %= millisecond
        parts.append(f"{ms} มิลลิวินาที")
    if seconds >= microsecond:
        us = int(seconds // microsecond)
        seconds %= microsecond
        parts.append(f"{us} ไมโครวินาที")

    return " ".join(parts) if parts else "0 ไมโครวินาที"
