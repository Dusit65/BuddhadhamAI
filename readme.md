DATABASE_URL = "sqlserver://localhost:1433;initial catalog=DBNAME;user=ROOT;password=PASSW0RD;trustServerCertificate=true;charset=utf8mb4"
sqlcmd -S <ServerIP> -U <Username> -P <Password>
npx prisma migrate dev --name init

python buddhamAI_cli.py ""

pip install faiss-cpu
pip install numpy
pip install ollama