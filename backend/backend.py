"""
Simple backend for routing schedule data from dust app
"""
from flask import Flask, Response, send_from_directory
from requests import get
from uuid import uuid4

app = Flask(__name__)

CAMP_LOCATIONS = {
 'u-1607': {'name': 'Neon Dreams', 'neighborhood': 'Around'},
 'u-1608': {'name': 'Yellow Bikes', 'neighborhood': 'Main Field'},
 'u-1610': {'name': 'Wish (vol 1)', 'neighborhood': 'Lower Bowl'},
 'u-1611': {'name': 'Virror 2.0', 'neighborhood': 'Main Field'},
 'u-1612': {'name': 'Vanity', 'neighborhood': 'Riverside'},
 'u-1613': {'name': 'Trifecta 2.0', 'neighborhood': 'Main Field'},
 'u-1614': {'name': 'Time in the Forest', 'neighborhood': 'Forest Entry'},
 'u-1615': {'name': 'The Wandering Wardrobe', 'neighborhood': 'Mobile Art'},
 'u-1616': {'name': 'The Valkyrie and Finley', 'neighborhood': 'Mezzanine'},
 'u-1617': {'name': 'The Twilight Room', 'neighborhood': 'The Meadow'},
 'u-1618': {'name': 'The Rainbow Experiment', 'neighborhood': 'Forest Entry'},
 'u-1619': {'name': 'The Geode-Home', 'neighborhood': 'Mezzanine'},
 'u-1620': {'name': "The Fool's Journey", 'neighborhood': 'Around'},
 'u-1621': {'name': 'The Curiosity', 'neighborhood': 'Mobile Art'},
 'u-1622': {'name': "The Coven's Cauldron", 'neighborhood': 'The Meadow'},
 'u-1623': {'name': 'The Bananiverse', 'neighborhood': 'Main Field'},
 'u-1624': {'name': "That's Bright Bob!", 'neighborhood': 'Riverside'},
 'u-1625': {'name': 'Synthia Light & Music Instrument',
            'neighborhood': 'Around'},
 'u-1626': {'name': 'Swinging Cock Pendulum Wave',
            'neighborhood': 'Upper Bowl'},
 'u-1627': {'name': 'G String', 'neighborhood': 'Upper Bowl'},
 'u-1628': {'name': 'Stoicheia [ELEMENTS]', 'neighborhood': 'Riverside'},
 'u-1629': {'name': 'Stoicheia Predator', 'neighborhood': 'Around'},
 'u-1631': {'name': 'Soak Welcomes You', 'neighborhood': 'Around'},
 'u-1632': {'name': 'Snack Attack', 'neighborhood': 'Upper Bowl'},
 'u-1633': {'name': 'Slow Camera Photobooth', 'neighborhood': 'Main Field'},
 'u-1634': {'name': 'Sideshow - The travelling clown bar',
            'neighborhood': 'Mobile Art'},
 'u-1635': {'name': 'Shattered Time', 'neighborhood': 'Forest Entry'},
 'u-1636': {'name': 'Serpentine', 'neighborhood': 'Upper Bowl'},
 'u-1637': {'name': 'Sapphic Suckubus', 'neighborhood': 'Upper Bowl'},
 'u-1638': {'name': 'SOAKs Dirty Secrets', 'neighborhood': 'Forest Entry'},
 'u-1639': {'name': 'SOAKinole', 'neighborhood': 'Main Field'},
 'u-1640': {'name': 'SOAK POST', 'neighborhood': 'Main Field'},
 'u-1641': {'name': 'Rx Burn', 'neighborhood': 'Main Field'},
 'u-1642': {'name': 'Pyrobox', 'neighborhood': 'Upper Bowl'},
 'u-1643': {'name': 'Pyramid of Levitation', 'neighborhood': 'Main Field'},
 'u-1644': {'name': 'Portals of Paradox', 'neighborhood': 'Main Field'},
 'u-1646': {'name': 'Perspective Perception', 'neighborhood': 'Forest Entry'},
 'u-1647': {'name': 'Perspective', 'neighborhood': 'Lower Bowl'},
 'u-1648': {'name': 'Pathways of Process', 'neighborhood': 'The Meadow'},
 'u-1649': {'name': 'Moon Tent', 'neighborhood': 'Main Field'},
 'u-1650': {'name': 'Monster Mirrors', 'neighborhood': 'Various - See Notes'},
 'u-1651': {'name': 'Meditation In Circles', 'neighborhood': 'Main Field'},
 'u-1652': {'name': 'Mars Rover', 'neighborhood': 'Main Field'},
 'u-1653': {'name': 'MAGIC?!', 'neighborhood': 'The Meadow'},
 'u-1654': {'name': 'Live LED Art', 'neighborhood': 'Mezzanine'},
 'u-1655': {'name': 'LED Icosidome', 'neighborhood': 'Lower Bowl'},
 'u-1656': {'name': 'Kaleidophoria', 'neighborhood': 'Mezzanine'},
 'u-1657': {'name': 'How Rude R U?', 'neighborhood': 'Riverside'},
 'u-1658': {'name': 'HonkDawg', 'neighborhood': 'The Meadow'},
 'u-1659': {'name': 'Fountain and Flame Apothecary',
            'neighborhood': 'Main Field'},
 'u-1660': {'name': 'Forward Unto Dawn', 'neighborhood': 'Upper Bowl'},
 'u-1661': {'name': 'Family Can Be Murder', 'neighborhood': 'Upper Bowl'},
 'u-1662': {'name': 'Face Infinity', 'neighborhood': 'Lower Bowl'},
 'u-1663': {'name': 'Disco Porto', 'neighborhood': 'The Meadow'},
 'u-1664': {'name': 'Dancing Serpent', 'neighborhood': 'Upper Bowl'},
 'u-1665': {'name': 'Cymatic Magic Waters', 'neighborhood': 'Around'},
 'u-1666': {'name': 'Crystallography', 'neighborhood': 'Mezzanine'},
 'u-1667': {'name': 'Cosmic Ducky', 'neighborhood': 'Mobile Art'},
 'u-1668': {'name': 'Church of Softer Space', 'neighborhood': 'Mezzanine'},
 'u-1669': {'name': 'Burnerphone', 'neighborhood': 'Upper Bowl'},
 'u-1670': {'name': 'Burn With Me', 'neighborhood': 'Forest Entry'},
 'u-1671': {'name': 'Black Rock Observatory', 'neighborhood': 'The Meadow'},
 'u-1672': {'name': 'BibliothÄ“ca IdiÅ\x8dmatis', 'neighborhood': 'Around'},
 'u-1673': {'name': 'Bewitching Brews Bicycle', 'neighborhood': 'Mobile Art'},
 'u-1674': {'name': 'Banana Phone Booth', 'neighborhood': 'Main Field'},
 'u-1675': {'name': 'Baba Yaga House', 'neighborhood': 'Upper Bowl'},
 'u-1676': {'name': 'Aura Flora', 'neighborhood': 'Mezzanine'},
 'u-1680': {'name': 'Attunement', 'neighborhood': 'Around'},
 'u-1767': {'name': 'We Must Imagine Ourselves Happy',
            'neighborhood': 'Around'},
 'u-1768': {'name': 'Temple of Renewal', 'neighborhood': 'Around'},
 'u-1769': {'name': 'Main Burnable Structure', 'neighborhood': 'Around'},
 'u-3376': {'name': 'Central Services', 'neighborhood': 'Main Field'},
 'u-3642': {'name': 'Cats in Space!', 'neighborhood': 'Mezzanine'},
 'u-3643': {'name': 'Caffeinated Catalyst', 'neighborhood': 'Main Field'},
 'u-3644': {'name': 'Baggage Check', 'neighborhood': 'The Meadow'},
 'u-3647': {'name': 'Weevilicious Puppets', 'neighborhood': 'Around'},
 'u-3648': {'name': 'Watt-Woh!', 'neighborhood': 'Main Field'},
 'u-3649': {'name': 'Warm Snuggles', 'neighborhood': 'Mezzanine'},
 'u-3650': {'name': 'W.E.T.', 'neighborhood': 'Upper Bowl'},
 'u-3651': {'name': 'V', 'neighborhood': 'Around'},
 'u-3652': {'name': 'Twilight Tarot', 'neighborhood': 'Forest Entry'},
 'u-3653': {'name': 'Tiny Tramp Espresso-Tinis',
            'neighborhood': 'Forest Entry'},
 'u-3654': {'name': 'There U Glow', 'neighborhood': 'Main Field'},
 'u-3655': {'name': 'The man cave', 'neighborhood': 'Forest Entry'},
 'u-3656': {'name': 'The Twilight Lounge (brought to you by The Bunny Ranch)',
            'neighborhood': 'Around'},
 'u-3657': {'name': 'The Teenie Weenie Art Tent', 'neighborhood': 'Riverside'},
 'u-3658': {'name': 'The Shrubbery', 'neighborhood': 'Forest Entry'},
 'u-3659': {'name': 'The Secret of Mems', 'neighborhood': 'The Meadow'},
 'u-3660': {'name': 'The Horny Unicorn', 'neighborhood': 'Riverside'},
 'u-3661': {'name': 'The Glory Hole - A Spectacular Boutique',
            'neighborhood': 'Upper Bowl'},
 'u-3662': {'name': 'The Gas Station', 'neighborhood': 'Riverside'},
 'u-3663': {'name': 'The Garden of Otherworldly Delights',
            'neighborhood': 'Forest Entry'},
 'u-3664': {'name': 'The Coven', 'neighborhood': 'The Meadow'},
 'u-3665': {'name': "The Adventurer's Respite", 'neighborhood': 'The Meadow'},
 'u-3666': {'name': 'Synthesthesia', 'neighborhood': 'Main Field'},
 'u-3667': {'name': "Strip 'n Taters", 'neighborhood': 'Mezzanine'},
 'u-3668': {'name': 'Stoop', 'neighborhood': 'Mezzanine'},
 'u-3669': {'name': 'Spam Camp', 'neighborhood': 'Riverside'},
 'u-3670': {'name': 'Softer Space', 'neighborhood': 'Riverside'},
 'u-3671': {'name': 'Snacks N Snuggles', 'neighborhood': 'Main Field'},
 'u-3672': {'name': 'Snack Shack', 'neighborhood': 'Upper Bowl'},
 'u-3673': {'name': 'Sex Positivity Camp - Fucking Magic',
            'neighborhood': 'Upper Bowl'},
 'u-3674': {'name': 'Second Rodeo', 'neighborhood': 'Riverside'},
 'u-3675': {'name': 'SPF Patrol', 'neighborhood': 'The Meadow'},
 'u-3676': {'name': 'S*M*A*S*H', 'neighborhood': 'Riverside'},
 'u-3677': {'name': 'Reading Rainbow', 'neighborhood': 'Forest Entry'},
 'u-3678': {'name': 'Quest Cult', 'neighborhood': 'Riverside'},
 'u-3679': {'name': 'Puppet Camp', 'neighborhood': 'Forest Entry'},
 'u-3680': {'name': 'Prismatic Forest', 'neighborhood': 'Upper Bowl'},
 'u-3681': {'name': 'Possitopia', 'neighborhood': 'Main Field'},
 'u-3682': {'name': 'Plunderground', 'neighborhood': 'Main Field'},
 'u-3683': {'name': 'Pickleodeon', 'neighborhood': 'Main Field'},
 'u-3684': {'name': 'Penguins Bubble Bar', 'neighborhood': 'Lower Bowl'},
 'u-3685': {'name': 'Pampered Camper', 'neighborhood': 'The Meadow'},
 'u-3686': {'name': 'POTTY PEOPLE', 'neighborhood': 'Upper Bowl'},
 'u-3687': {'name': "Over Fuckin' Rated", 'neighborhood': 'Around'},
 'u-3688': {'name': 'Ourburritoroom', 'neighborhood': 'Upper Bowl'},
 'u-3689': {'name': 'Oregon Snail Trail', 'neighborhood': 'Riverside'},
 'u-3690': {'name': 'OnlyFeet', 'neighborhood': 'Upper Bowl'},
 'u-3691': {'name': 'Northwest Mist', 'neighborhood': 'Main Field'},
 'u-3692': {'name': 'Nom Village', 'neighborhood': 'Upper Bowl'},
 'u-3693': {'name': 'Neon Jungle', 'neighborhood': 'Mezzanine'},
 'u-3694': {'name': 'Mushroom Mystics', 'neighborhood': 'Around'},
 'u-3695': {'name': 'Moonrock', 'neighborhood': 'Upper Bowl'},
 'u-3696': {'name': 'Meadowtations', 'neighborhood': 'The Meadow'},
 'u-3697': {'name': "Mad Hatter's HIGH Tea", 'neighborhood': 'The Meadow'},
 'u-3698': {'name': 'MOIST', 'neighborhood': 'Upper Bowl'},
 'u-3699': {'name': 'MBS Support Camp', 'neighborhood': 'Upper Bowl'},
 'u-3700': {'name': 'Low Bar', 'neighborhood': 'Riverside'},
 'u-3701': {'name': 'Lingerie Lounge', 'neighborhood': 'Main Field'},
 'u-3702': {'name': 'Limbo Lounge', 'neighborhood': 'Forest Entry'},
 'u-3703': {'name': "Lil' Hell Bake", 'neighborhood': 'Forest Entry'},
 'u-3704': {'name': 'Krampusberg', 'neighborhood': 'Forest Entry'},
 'u-3705': {'name': 'Kinky Fucking Camp', 'neighborhood': 'Riverside'},
 'u-3706': {'name': 'KID BAR', 'neighborhood': 'Main Field'},
 'u-3707': {'name': 'KBUTT 101.3FM', 'neighborhood': 'Upper Bowl'},
 'u-3708': {'name': "It's All Downhill From Here",
            'neighborhood': 'Upper Bowl'},
 'u-3709': {'name': 'Hotel Charley', 'neighborhood': 'The Meadow'},
 'u-3710': {'name': 'Hex Marks the Spot', 'neighborhood': 'Lower Bowl'},
 'u-3711': {'name': 'Heart Tree', 'neighborhood': 'North Point Forest'},
 'u-3712': {'name': 'Haus Anima', 'neighborhood': 'The Meadow'},
 'u-3714': {'name': 'HYSS', 'neighborhood': 'Mezzanine'},
 'u-3715': {'name': 'Gypsy Monkey Carnival', 'neighborhood': 'Mezzanine'},
 'u-3716': {'name': 'Gothicorn Meadows', 'neighborhood': 'Upper Bowl'},
 'u-3717': {'name': 'Glowdeo Drive', 'neighborhood': 'Main Field'},
 'u-3718': {'name': 'Glow Up!', 'neighborhood': 'Riverside'},
 'u-3719': {'name': 'Get Toasted', 'neighborhood': 'Main Field'},
 'u-3720': {'name': 'FryGuy', 'neighborhood': 'Around'},
 'u-3721': {'name': 'Frizz', 'neighborhood': 'Mezzanine'},
 'u-3722': {'name': 'Frisky Brisket', 'neighborhood': 'North Point Forest'},
 'u-3723': {'name': 'Fresh Hot Noods', 'neighborhood': 'Forest Entry'},
 'u-3724': {'name': 'Fortunia', 'neighborhood': 'Main Field'},
 'u-3725': {'name': 'Flower Bower', 'neighborhood': 'The Meadow'},
 'u-3726': {'name': 'FireFlow Studios', 'neighborhood': 'Upper Bowl'},
 'u-3727': {'name': 'Fire Whiskey Circus: Sideshow',
            'neighborhood': 'Upper Bowl'},
 'u-3728': {'name': 'Fire Safety Support Camp', 'neighborhood': 'Main Field'},
 'u-3729': {'name': 'Embassy', 'neighborhood': 'Around'},
 'u-3730': {'name': 'Elation Station', 'neighborhood': 'Mezzanine'},
 'u-3731': {'name': 'EX-FILES', 'neighborhood': 'Forest Entry'},
 'u-3732': {'name': 'Dusty Bunnies', 'neighborhood': 'Riverside'},
 'u-3733': {'name': "Dr. Bev's Clinic", 'neighborhood': 'The Meadow'},
 'u-3734': {'name': 'Cult of the Peach', 'neighborhood': 'Main Field'},
 'u-3735': {'name': 'CrÃªpiphany', 'neighborhood': 'Around'},
 'u-3736': {'name': 'Creature Corner', 'neighborhood': 'Riverside'},
 'u-3737': {'name': 'Cracked Pot', 'neighborhood': 'Forest Entry'},
 'u-3738': {'name': 'Cosmic Chai', 'neighborhood': 'Main Field'},
 'u-3739': {'name': 'Citadel of the Eternal Pastry',
            'neighborhood': 'Upper Bowl'},
 'u-3740': {'name': 'Cirque De Licious', 'neighborhood': 'Upper Bowl'},
 'u-3741': {'name': 'Church of Party', 'neighborhood': 'Mezzanine'},
 'u-3742': {'name': 'Chrono Chroma', 'neighborhood': 'The Meadow'},
 'u-3743': {'name': 'Camp-Misbehaving', 'neighborhood': 'The Meadow'},
 'u-3744': {'name': 'Camp Monkey Business', 'neighborhood': 'Main Field'},
 'u-3745': {'name': 'Camp FYFA', 'neighborhood': 'Main Field'},
 'u-3746': {'name': 'Camp DSF', 'neighborhood': 'Main Field'},
 'u-3747': {'name': 'Camp Clusterfuck', 'neighborhood': 'Mezzanine'},
 'u-3748': {'name': 'CBGB Camp Biscuits', 'neighborhood': 'Around'},
 'u-3749': {'name': 'Bobablivion', 'neighborhood': 'Main Field'},
 'u-3750': {'name': 'Bean Here Now', 'neighborhood': 'Main Field'},
 'u-3751': {'name': 'Baby Behead & Breakfast', 'neighborhood': 'Upper Bowl'},
 'u-3752': {'name': 'Babble-On', 'neighborhood': 'Main Field'},
 'u-3753': {'name': 'BILY Camp', 'neighborhood': 'Riverside'},
 'u-3754': {'name': 'Aucupouri Teahouse', 'neighborhood': 'Upper Bowl'},
 'u-3755': {'name': 'Astro Shack JaVa JoINt', 'neighborhood': 'The Meadow'},
 'u-3756': {'name': 'Art of Doing Nothing', 'neighborhood': 'The Meadow'},
 'u-3757': {'name': 'Acid Drip', 'neighborhood': 'Lower Bowl'},
 'u-3758': {'name': 'Absinthe Minded', 'neighborhood': 'Riverside'},
 'u-3759': {'name': 'ASMR Apothecary', 'neighborhood': 'Forest Entry'},
 'u-3761': {'name': 'Oracle', 'neighborhood': 'Main Field'},
 'u-3762': {'name': 'Interdimensional Snack Station',
            'neighborhood': 'Main Field'},
 'u-3763': {'name': 'Hoppy Endings Social Club',
            'neighborhood': 'Forest Entry'},
 'u-3764': {'name': 'C.O.C.K.(Camp of Cool Kids)', 'neighborhood': 'Mezzanine'},
 'u-3766': {'name': 'Woo the Day', 'neighborhood': 'Main Field'},
 'u-3767': {'name': 'Universal Eggsperience', 'neighborhood': 'Upper Bowl'},
 'u-3769': {'name': 'NJ', 'neighborhood': 'Around'},
 'u-3771': {'name': 'mycelium mystics', 'neighborhood': 'The Meadow'},
 'u-3772': {'name': 'Hang Loose Camp', 'neighborhood': 'Lower Bowl'},
 'u-3773': {'name': 'The Twilight Lounge', 'neighborhood': 'Forest Entry'},
 'u-3774': {'name': "OvÉ˜á´™ Fuckin' Rated", 'neighborhood': 'Around'},
 'u-3776': {'name': 'FryGuy Kitchen', 'neighborhood': 'Mezzanine'},
 'u-4160': {'name': 'Sour Puss', 'neighborhood': 'The Meadow'},
 'u-4162': {'name': 'Placement HQ', 'neighborhood': 'Around'},
 'u-4197': {'name': 'Coast Guard', 'neighborhood': 'Riverside'}
 }

@app.route('/<path:path>')
def return_app(path):
    return send_from_directory('dist', path)

@app.route('/')
def index():
    return send_from_directory('dist', 'index.html')

@app.route("/schedule.json", methods=["GET"])
def schedule() -> Response:
    response = get("https://data.dust.events/soak-2025/schedule.json", timeout=120)
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
