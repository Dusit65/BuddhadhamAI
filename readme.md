DATABASE_URL = "sqlserver://localhost:1433;initial catalog=DBNAME;user=ROOT;password=PASSW0RD;trustServerCertificate=true;charset=utf8mb4"
conn_str = "mssql+pyodbc://username:passw0rd@localhost:1234/DBName?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"
sqlcmd -S <ServerIP> -U <Username> -P <Password>
npx prisma migrate reset --force
npx prisma migrate dev --name init

git rm --cached config.json

python buddhamAI_cli.py ""

pip install faiss-cpu
pip install numpy
pip install ollama

#note
- เช็ค Update และทำไฟล์ใหม่
- embed_tb
- รวมไฟล์ config