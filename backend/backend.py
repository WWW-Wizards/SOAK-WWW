"""
Simple backend for routing schedule data from dust app
"""
from flask import Flask, Response, send_from_directory
from requests import get
from uuid import uuid4

app = Flask(__name__)

@app.route('/<path:path>')
def return_app(path):
    return send_from_directory('dist', path)

@app.route('/')
def index():
    return send_from_directory('dist', 'index.html')

@app.route("/schedule.json", methods=["GET"])
def schedule() -> Response:
    return send_from_directory('.', 'cached_data.json')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
