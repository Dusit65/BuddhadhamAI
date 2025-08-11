def format_duration(seconds: float) -> str:
    year = 365 * 24 * 3600
    month = 30 * 24 * 3600
    day = 24 * 3600
    hour = 3600
    minute = 60

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

    parts.append(f"{seconds:.6f} วิ.")

    return " ".join(parts)

def log(log_message):
    log_file = "ask_cli.log"
    # timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(log_message)