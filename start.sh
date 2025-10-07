#!/bin/sh
# Start Ollama in background
ollama serve &

# Start Python app
python main.py

# Wait for background jobs (optional)
wait