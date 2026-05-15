"""
Simple backend for routing schedule data from dust app
"""
from flask import Flask, Response, send_from_directory
from requests import get
from uuid import uuid4

app = Flask(__name__)

CAMP_LOCATIONS = {
 "u-6194": {
  "name": "arrrrrg you kidding me?",
  "neighborhood": "Riverside"
 },
 "u-6196": {
  "name": "Wild Things",
  "neighborhood": "Main Field"
 },
 "u-6200": {
  "name": "Warm Snuggles",
  "neighborhood": "Main Field"
 },
 "u-6202": {
  "name": "V,S,M (iron powder)",
  "neighborhood": "Upper Bowl"
 },
 "u-6204": {
  "name": "Universal Eggsperience",
  "neighborhood": "Upper Bowl"
 },
 "u-6205": {
  "name": "Undisclosed Location",
  "neighborhood": "Riverside"
 },
 "u-6207": {
  "name": "Twilight Lounge",
  "neighborhood": "Forest Entry"
 },
 "u-6208": {
  "name": "Tug McOck's Teeny Tiny Leprechaun Pub",
  "neighborhood": "Forest Entry"
 },
 "u-6210": {
  "name": "There U Glow",
  "neighborhood": "Main Field"
 },
 "u-6211": {
  "name": "The man cave",
  "neighborhood": "Riverside"
 },
 "u-6213": {
  "name": "The Shrubbery",
  "neighborhood": "Forest Entry"
 },
 "u-6214": {
  "name": "The Sensory Sanctuary",
  "neighborhood": "The Meadow"
 },
 "u-6215": {
  "name": "The Pussy Perch",
  "neighborhood": "North Point Forest"
 },
 "u-6216": {
  "name": "The Pampered Pixie",
  "neighborhood": "Riverside"
 },
 "u-6217": {
  "name": "The Horny Unicorn",
  "neighborhood": "Riverside"
 },
 "u-6219": {
  "name": "The Haunt",
  "neighborhood": "Forest Entry"
 },
 "u-6220": {
  "name": "The Glory Hole - A Spectacular Boutique",
  "neighborhood": "Upper Bowl"
 },
 "u-6221": {
  "name": "The Garden of Otherworldly Delights",
  "neighborhood": "Forest Entry"
 },
 "u-6223": {
  "name": "The Adventurer's Respite",
  "neighborhood": "The Meadow"
 },
 "u-6224": {
  "name": "Synthesthesia",
  "neighborhood": "Lower Bowl"
 },
 "u-6225": {
  "name": "Summer Camp Wannakiki",
  "neighborhood": "Riverside"
 },
 "u-6226": {
  "name": "Strip 'N Taters",
  "neighborhood": "Mezzanine"
 },
 "u-6229": {
  "name": "Snacks N Snuggles",
  "neighborhood": "Main Field"
 },
 "u-6230": {
  "name": "Snack Shack",
  "neighborhood": "Upper Bowl"
 },
 "u-6231": {
  "name": "Sex Positivity - SeXy at AnY SiZe",
  "neighborhood": "Upper Bowl"
 },
 "u-6232": {
  "name": "S*M*A*S*H ( Small Matters And Serious Hearings)",
  "neighborhood": "North Point Forest"
 },
 "u-6233": {
  "name": "Recess Industrial Complex",
  "neighborhood": "Main Field"
 },
 "u-6235": {
  "name": "Quest Cult",
  "neighborhood": "Riverside"
 },
 "u-6236": {
  "name": "Puppet Camp",
  "neighborhood": "Main Field"
 },
 "u-6237": {
  "name": "Prismatic Forest",
  "neighborhood": "Upper Bowl"
 },
 "u-6238": {
  "name": "Possitopia",
  "neighborhood": "Main Field"
 },
 "u-6242": {
  "name": "Penguins Bubble Bar",
  "neighborhood": "Mezzanine"
 },
 "u-6243": {
  "name": "Pancake Playhouse",
  "neighborhood": "Forest Entry"
 },
 "u-6244": {
  "name": "Pampered Camper",
  "neighborhood": "The Meadow"
 },
 "u-6245": {
  "name": "OverFuckinRated",
  "neighborhood": "Main Field"
 },
 "u-6246": {
  "name": "Ourburritoroom",
  "neighborhood": "Upper Bowl"
 },
 "u-6248": {
  "name": "OnlyFeet",
  "neighborhood": "Forest Entry"
 },
 "u-6250": {
  "name": "Moonrock",
  "neighborhood": "Upper Bowl"
 },
 "u-6251": {
  "name": "Mad Hatter's HIGH Tea",
  "neighborhood": "The Meadow"
 },
 "u-6252": {
  "name": "MOIST",
  "neighborhood": "Upper Bowl"
 },
 "u-6253": {
  "name": "Luna Pavilion",
  "neighborhood": "Upper Bowl"
 },
 "u-6256": {
  "name": "Krampusberg",
  "neighborhood": "Forest Entry"
 },
 "u-6259": {
  "name": "KBUTT 101.3FM",
  "neighborhood": "Upper Bowl"
 },
 "u-6261": {
  "name": "Interdimensional Snack Station",
  "neighborhood": "The Meadow"
 },
 "u-6262": {
  "name": "Hypnodrome",
  "neighborhood": "Mezzanine"
 },
 "u-6263": {
  "name": "Hippocampe",
  "neighborhood": "Main Field"
 },
 "u-6265": {
  "name": "Hang Loose",
  "neighborhood": "Upper Bowl"
 },
 "u-6267": {
  "name": "Gypsy Nebula Carnival",
  "neighborhood": "Mezzanine"
 },
 "u-6268": {
  "name": "Grappler's Grotto",
  "neighborhood": "The Meadow"
 },
 "u-6269": {
  "name": "Glowdeo Drive",
  "neighborhood": "Main Field"
 },
 "u-6272": {
  "name": "FryGuy Kitchen",
  "neighborhood": "Mezzanine"
 },
 "u-6273": {
  "name": "Frizz",
  "neighborhood": "Main Field"
 },
 "u-6274": {
  "name": "Only Fries",
  "neighborhood": "North Point Forest"
 },
 "u-6276": {
  "name": "Flower Bower",
  "neighborhood": "The Meadow"
 },
 "u-6277": {
  "name": "Fire Safety camp",
  "neighborhood": "Main Field"
 },
 "u-6278": {
  "name": "FIRE STARTERS",
  "neighborhood": "Lower Bowl"
 },
 "u-6280": {
  "name": "EX-FILES",
  "neighborhood": "Forest Entry"
 },
 "u-6281": {
  "name": "Dusty Bunnies",
  "neighborhood": "Lower Bowl"
 },
 "u-6282": {
  "name": "Dr. Bev's Clinic",
  "neighborhood": "Main Field"
 },
 "u-6283": {
  "name": "Disco Jungle (Formerly Neon Jungle)",
  "neighborhood": "Main Field"
 },
 "u-6284": {
  "name": "Dick Shaped Foods",
  "neighborhood": "Forest Entry"
 },
 "u-6287": {
  "name": "Cult of the Peach",
  "neighborhood": "Main Field"
 },
 "u-6288": {
  "name": "Cr\u00eapiphany",
  "neighborhood": "Main Field"
 },
 "u-6289": {
  "name": "Crop Tops & Croissants",
  "neighborhood": "The Meadow"
 },
 "u-6290": {
  "name": "Costco Soulmate Trading Outlet",
  "neighborhood": "Forest Entry"
 },
 "u-6291": {
  "name": "Cosmic Chai",
  "neighborhood": "Upper Bowl"
 },
 "u-6292": {
  "name": "Citadel of the Eternal Pastry",
  "neighborhood": "Upper Bowl"
 },
 "u-6294": {
  "name": "Church of Party",
  "neighborhood": "Mezzanine"
 },
 "u-6295": {
  "name": "Chameleon Camp",
  "neighborhood": "Main Field"
 },
 "u-6296": {
  "name": "Central Services (Rangers, Medical, Radios)",
  "neighborhood": "Main Field"
 },
 "u-6297": {
  "name": "Cats in Space!",
  "neighborhood": "Mezzanine"
 },
 "u-6299": {
  "name": "Camp Monkey Business (CMB)",
  "neighborhood": "Main Field"
 },
 "u-6300": {
  "name": "Camp Miss-Behaving",
  "neighborhood": "The Meadow"
 },
 "u-6301": {
  "name": "Camp FYFA",
  "neighborhood": "Upper Bowl"
 },
 "u-6302": {
  "name": "Camp Clusterfuck",
  "neighborhood": "Mezzanine"
 },
 "u-6303": {
  "name": "Camp Baggage Check",
  "neighborhood": "The Meadow"
 },
 "u-6304": {
  "name": "Caffeinated Catalyst",
  "neighborhood": "Main Field"
 },
 "u-6305": {
  "name": "CBGB Camp Biscuits, Gravy and Bacon",
  "neighborhood": "The Meadow"
 },
 "u-6306": {
  "name": "Bobablivion",
  "neighborhood": "Main Field"
 },
 "u-6307": {
  "name": "Blue Waffle",
  "neighborhood": "Upper Bowl"
 },
 "u-6309": {
  "name": "Bean Here Now",
  "neighborhood": "Main Field"
 },
 "u-6311": {
  "name": "Baby Behead & Breakfast",
  "neighborhood": "Upper Bowl"
 },
 "u-6312": {
  "name": "BILY (Because I Love You) Camp",
  "neighborhood": "Riverside"
 },
 "u-6314": {
  "name": "Absinthe Minded",
  "neighborhood": "Riverside"
 },
 "u-6315": {
  "name": "ART BAR",
  "neighborhood": "Upper Bowl"
 },
 "u-6317": {
  "name": "Teenie Weenie Art Tent",
  "neighborhood": "North Point Forest"
 },
 "u-6504": {
  "name": "Kinky Fucking Camp",
  "neighborhood": "Riverside"
 },
 "u-6707": {
  "name": "Astro Shack Java JoINt",
  "neighborhood": "The Meadow"
 },
 "u-6708": {
  "name": "The Self Care Teddy Bear Lair",
  "neighborhood": "Forest Entry"
 },
 "u-6710": {
  "name": "Black Rock City Retirement Community",
  "neighborhood": "The Meadow"
 },
 "u-6785": {
  "name": "Embassy After Dark",
  "neighborhood": "Riverside"
 }
}

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
        event["uid"] = f"{event["uid"]}-{uid}"
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
