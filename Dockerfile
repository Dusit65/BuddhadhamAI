# Base Image
FROM python:3.13-slim-bookworm

WORKDIR /app

# 1️⃣ ติดตั้ง system dependencies + libraries ของ ODBC driver
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    apt-transport-https \
    unixodbc \
    unixodbc-dev \
    g++ \
    libgssapi-krb5-2 \
    libssl3 \
    libc6 \
    && rm -rf /var/lib/apt/lists/*

# 2️⃣ ติดตั้ง Microsoft ODBC Driver 18 + mssql-tools
RUN DEBIAN_VERSION=$(grep VERSION_ID /etc/os-release | cut -d '"' -f 2 | cut -d '.' -f 1) \
    && if ! echo "9 10 11 12" | grep -qw "$DEBIAN_VERSION"; then \
        echo "Debian $DEBIAN_VERSION not supported"; exit 1; \
    fi \
    && curl -sSL -O https://packages.microsoft.com/config/debian/$DEBIAN_VERSION/packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install -y msodbcsql18 mssql-tools18 unixodbc-dev libgssapi-krb5-2 \
    && echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> /etc/profile.d/mssql.sh

# Install Ollama CLI
RUN curl -fsSL https://ollama.com/install.sh | sh

# 3️⃣ Copy & install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4️⃣ Copy project files
COPY . .

# 5️⃣ Run container
CMD ["python", "main.py"]
