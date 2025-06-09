FROM python:3.9-slim

WORKDIR /app

# Install system dependencies for OpenCV, mediapipe, and audio
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    ffmpeg \
    libasound2-dev \
    pulseaudio \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for better caching)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Make sure the audiofiles directory exists
RUN mkdir -p audiofiles

# Make the port available outside the container
EXPOSE 8080

# Command to run the application
CMD ["python", "app.py"]