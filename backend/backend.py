"""
Simple backend for routing schedule data from dust app
"""
from flask import Flask, Response, send_from_directory
from pathlib import Path
import json
from requests import get
from uuid import uuid4

app = Flask(__name__)

CAMP_LOCATIONS = {}


def load_camp_locations() -> dict:
    with open("camp_locations.json", 'r', encoding='utf-8') as f:
        return json.load(f)

CAMP_LOCATIONS = load_camp_locations()

@app.route('/<path:path>')
def return_app(path):
    return send_from_directory('dist', path)

@app.route('/')
def index():
    return send_from_directory('dist', 'index.html')

@app.route("/schedule.json", methods=["GET"])
def schedule() -> Response:
    response = get("https://data.dust.events/soak-2026/schedule.json", timeout=120)
    if response.status_code != 200:
        return Response("Error fetching schedule data", status=response.status_code)

    uids = {}

    schedule_data = response.json()
    for event in schedule_data:
        uid = uids.get(event["uid"], 0) + 1
        uids[event["uid"]] = uid
        event["uid"] = f"{event['uid']}-{uid}"
        camp = CAMP_LOCATIONS.get(event["hosted_by_camp"])
        if camp is None:
            art = event.get("located_at_art")
            if art:
                camp = CAMP_LOCATIONS.get(art, { "neighborhood": "Around" })
            else:
                camp = { "neighborhood": "Around" }
        event["neighborhood"] = camp.get("neighborhood", "Around")

        #Workaround for missing location
        if event["location"] == "":
            if event.get("other_location", "") != "":
                event["location"] = event["other_location"]

            elif event.get("camp", "") != "":
                event["location"] = event["camp"]

            elif event.get("art", "") != "":
                event["location"] = event["art"]

            else:
                event["location"] = "Around"

    return schedule_data

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
