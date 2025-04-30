# To test build (from repo root):  docker build -t soak-www .
# To test run: docker run -e PORT=5000 -p 5000:5000 --rm soak-www
# based on tutorials at urls listed below
# https://cloud.google.com/run/docs/quickstarts/build-and-deploy/python
FROM node:20-slim AS build

WORKDIR /app
COPY . /app/
RUN yarn add --dev parcel
RUN yarn build

# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.13-slim

# Allow statements and log messages to immediately appear in the Knative logs
ENV PYTHONUNBUFFERED True

# Copy local code to the container image.
RUN useradd -ms /bin/bash web
USER web
WORKDIR /home/web
ENV PATH="/home/web/.local/bin:${PATH}"
COPY --chown=web:web backend /home/web/
RUN mkdir -p /home/web/dist
COPY --from=build --chown=web:web /app/dist /home/web/dist/

# Install production dependencies.
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
# Timeout is set to 0 to disable the timeouts of the workers to allow Cloud Run to handle instance scaling.
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 backend:app
