# Base Image
FROM python:3.13.7-slim

# working directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files to Image
COPY . .

# Run on container startup
CMD ["python", "main.py"]