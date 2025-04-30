"""
Simple backend for routing schedule data from dust app
"""
from flask import Flask, Response, send_from_directory
from requests import get

app = Flask(__name__)

CAMP_LOCATIONS = {
    "u-3758": "Riverside",  # Absinthe Minded
    "u-3757": "Lower Bowl",  # Acid Drip
    "u-3756": "The Meadow",  # Art of Doing Nothing
    "u-3755": "The Meadow",  # Artists Paradise
    "u-3759": "Forest Entry",  # ASMR Apothecary
    "u-3754": "The Meadow",  # Astro Shack JaVa JoINt
    "u-3753": "Upper Bowl",  # Aucupouri Teahouse
    "u-3716": "Mezzanine",  # Aura Flora
    "u-3752": "Upper Bowl",  # Baba Yaga House
    "u-3751": "Main Field",  # Babble-On
    "u-3750": "Upper Bowl",  # Baby Behead & Breakfast
    "u-3749": "The Meadow",  # Baggage Check
    "u-3748": "Main Field",  # Banana Phone Booth
    "u-3747": "Main Field",  # Bean Here Now
    "u-3746": "Mobile Art",  # Bewitching Brews Bicycle
    "u-3745": "The Meadow",  # Bibliothēca Idiōmatis
    "u-3744": "Riverside",  # BILY Camp
    "u-3743": "North Point Forest",  # Black Hole West
    "u-3742": "The Meadow",  # Black Rock Observatory
    "u-3741": "The Meadow",  # Black Rock Observatory Art Support
    "u-3740": "Main Field",  # Bobablivion
    "u-3739": "Forest Entry",  # Burn With Me
    "u-3738": "Upper Bowl",  # Burnerphone
    "u-3737": "Mezzanine",  # C.O.C.K.(Camp of Cool Kids)
    "u-3736": "Main Field",  # Caffeinated Catalyst
    "u-3735": "Mezzanine",  # Camp Clusterfuck
    "u-3734": "Main Field",  # Camp DSF
    "u-3733": "Main Field",  # Camp FYFA
    "u-3732": "Main Field",  # Camp Monkey Business
    "u-3731": "The Meadow",  # Camp-Misbehaving
    "u-3730": "Mezzanine",  # Cats in Space!
    "u-3729": "The Meadow",  # CBGB Camp Biscuits, Gravy and Bacon
    "u-3728": "Main Field",  # Central Services
    "u-3727": "The Meadow",  # Chrono Chroma
    "u-3726": "Mezzanine",  # Church of Party
    "u-3725": "Mezzanine",  # Church of Softer Space
    "u-3724": "Upper Bowl",  # Cirque De Licious
    "u-3723": "Upper Bowl",  # Citadel of the Eternal Pastry
    "u-3722": "Riverside",  # Coast Guard
    "u-3721": "Main Field",  # Cosmic Chai
    "u-3720": "Mobile Art",  # Cosmic Ducky
    "u-3719": "Forest Entry",  # Cracked Pot
    "u-3718": "Riverside",  # Creature Corner
    "u-3717": "The Meadow",  # Crêpiphany
    "u-3715": "Mezzanine",  # Crystallography
    "u-3714": "Main Field",  # Cult of the Peach
    "u-3713": "Upper Bowl",  # Dancing Serpent
    "u-3712": "The Meadow",  # Disco Porto
    "u-3711": "The Meadow",  # Dr. Bev's Clinic
    "u-3710": "Riverside",  # Dusty Bunnies
    "u-3709": "Mezzanine",  # Elation Station
    "u-3708": "Forest Entry",  # EX-FILES
    "u-3707": "Lower Bowl",  # Face Infinity
    "u-3706": "Upper Bowl",  # Family Can Be Murder
    "u-3705": "Main Field",  # Fire Safety Support Camp
    "u-3704": "Upper Bowl",  # Fire Whiskey Circus: Sideshow
    "u-3703": "Upper Bowl",  # FireFlow Studios
    "u-3702": "The Meadow",  # Flower Bower
    "u-3701": "Main Field",  # Fortunia
    "u-3700": "Upper Bowl",  # Forward Unto Dawn
    "u-3699": "Main Field",  # Fountain and Flame Apothecary
    "u-3698": "Forest Entry",  # Fresh Hot Noods
    "u-3697": "North Point Forest",  # Frisky Brisket
    "u-3696": "Mezzanine",  # Frizz
    "u-3695": "Mezzanine",  # FryGuy Kitchen
    "u-3694": "Main Field",  # Get Toasted
    "u-3693": "Riverside",  # Glow Up!
    "u-3692": "Main Field",  # Glowdeo Drive
    "u-3691": "Upper Bowl",  # Gothicorn Meadows
    "u-3690": "Mezzanine",  # Gypsy Monkey Carnival
    "u-3689": "Lower Bowl",  # Hang Loose Camp
    "u-3688": "The Meadow",  # Haus Anima
    "u-3687": "North Point Forest",  # Heart Tree
    "u-3686": "Lower Bowl",  # Hex Marks the Spot
    "u-3685": "The Meadow",  # HonkDawg
    "u-3684": "Forest Entry",  # Hoppy Endings Social Club
    "u-3683": "The Meadow",  # Hotel Charley
    "u-3682": "Riverside",  # How Rude R U?
    "u-3681": "Mezzanine",  # HYSS
    "u-3680": "Main Field",  # Interdimensional Snack Station
    "u-3679": "Upper Bowl",  # It's All Downhill From Here
    "u-3678": "Mezzanine",  # Kaleidophoria
    "u-3677": "Upper Bowl",  # KBUTT 101.3FM
    "u-3676": "Main Field",  # KID BAR
    "u-3675": "Riverside",  # Kinky Fucking Camp
    "u-3674": "Forest Entry",  # Krampusberg
    "u-3673": "Lower Bowl",  # LED Icosidome
    "u-3672": "Forest Entry",  # Lil' Hell Bake
    "u-3671": "The Meadow",  # Limbo Lounge
    "u-3670": "Main Field",  # Lingerie Lounge
    "u-3669": "Mezzanine",  # Live LED Art
    "u-3668": "Riverside",  # Low Bar
    "u-3667": "The Meadow",  # Mad Hatter's HIGH Tea
    "u-3666": "The Meadow",  # MAGIC?!
    "u-3665": "Main Field",  # Mars Rover
    "u-3664": "Upper Bowl",  # MBS Support Camp
    "u-3663": "The Meadow",  # Meadowtations
    "u-3662": "Main Field",  # Meditation In Circles
    "u-3661": "Upper Bowl",  # MOIST
    "u-3660": "Around",  # Monster Mirrors
    "u-3659": "Main Field",  # Moon Tent
    "u-3658": "Upper Bowl",  # Moonrock
    "u-3657": "The Meadow",  # mycelium mystics
    "u-3656": "Riverside",  # neon dreams
    "u-3655": "Mezzanine",  # Neon Jungle
    "u-3654": "Upper Bowl",  # Nom Village
    "u-3653": "Main Field",  # Northwest Mist
    "u-3652": "Upper Bowl",  # OnlyFeet
    "u-3651": "Main Field",  # Oracle
    "u-3650": "Riverside",  # Oregon Snail Trail
    "u-3649": "Upper Bowl",  # Ourburritoroom
    "u-3648": "Main Field",  # Ovɘᴙ Fuckin' Rated
    "u-3647": "The Meadow",  # Pampered Camper
    "u-3646": "The Meadow",  # Pathways of Process
    "u-3645": "Lower Bowl",  # Penguins Bubble Bar
    "u-3644": "Lower Bowl",  # Perspective
    "u-3643": "Forest Entry",  # Perspective Perception
    "u-3642": "Main Field",  # Pickleodeon
    "u-3641": "Main Field",  # Plunderground
    "u-3640": "Main Field",  # Portals of Paradox
    "u-3639": "Main Field",  # Possitopia
    "u-3638": "Upper Bowl",  # POTTY PEOPLE
    "u-3637": "Forest Entry",  # PPWP Headquarters
    "u-3636": "Upper Bowl",  # Prismatic Forest
    "u-3635": "Forest Entry",  # Puppet Camp
    "u-3634": "Main Field",  # Pyramid of Levitation
    "u-3633": "Upper Bowl",  # Pyrobox
    "u-3632": "Riverside",  # Quest Cult
    "u-3631": "Forest Entry",  # Reading Rainbow
    "u-3630": "Main Field",  # Rx Burn
    "u-3629": "Riverside",  # S*M*A*S*H
    "u-3628": "Upper Bowl",  # Sapphic Suckubus
    "u-3627": "Riverside",  # Second Rodeo
    "u-3626": "Upper Bowl",  # Serpentine
    "u-3625": "Upper Bowl",  # Sex Positivity Camp - Fucking Magic
    "u-3624": "Forest Entry",  # Shattered Time
    "u-3623": "Mobile Art",  # Sideshow - The travelling clown bar
    "u-3622": "Main Field",  # Slow Camera Photobooth
    "u-3621": "Upper Bowl",  # Snack Attack
    "u-3620": "Upper Bowl",  # Snack Shack
    "u-3619": "Main Field",  # Snacks N Snuggles
    "u-3618": "Main Field",  # SOAK POST
    "u-3617": "The Meadow",  # Soak Welcome Sign
    "u-3616": "Main Field",  # SOAKinole
    "u-3615": "Forest Entry",  # SOAKs Dirty Secrets
    "u-3614": "Riverside",  # Softer Space
    "u-3613": "The Meadow",  # Sour Puss
    "u-3612": "Riverside",  # Spam Camp
    "u-3611": "The Meadow",  # SPF Patrol
    "u-3610": "Riverside",  # Stoicheia [ELEMENTS]
    "u-3609": "Mezzanine",  # Stoop
    "u-3608": "Upper Bowl",  # G String
    "u-3607": "Mezzanine",  # Strip 'n Taters
    "u-3606": "Upper Bowl",  # Swinging Cock Pendulum Wave
    "u-3605": "Main Field",  # Synthesthesia
    "u-3604": "Main Field",  # Synthia
    "u-3603": "Upper Bowl",  # Temple Support Camp
    "u-3602": "Riverside",  # That's Bright Bob!
    "u-3601": "The Meadow",  # The Adventurer's Respite
    "u-3600": "Main Field",  # The Bananiverse
    "u-3599": "The Meadow",  # The Coven
    "u-3598": "The Meadow",  # The Coven's Cauldron
    "u-3597": "Mobile Art",  # The Curiosity
    "u-3596": "Around",  # The Fool's Journey
    "u-3595": "Forest Entry",  # The Garden of Otherworldly Delights
    "u-3594": "Riverside",  # The Gas Station
    "u-3593": "Forest Entry",  # The Geode-Home
    "u-3592": "Upper Bowl",  # The Glory Hole - A Spectacular Boutique
    "u-3591": "Riverside",  # The Horny Unicorn
    "u-3590": "Forest Entry",  # The man cave
    "u-3589": "Forest Entry",  # The Rainbow Experiment
    "u-3588": "The Meadow",  # The Secret of Mems
    "u-3587": "Forest Entry",  # The Shrubbery
    "u-3586": "Riverside",  # The Teenie Weenie Art Tent
    "u-3585": "Forest Entry",  # The Twilight Lounge
    "u-3584": "The Meadow",  # The Twilight Room
    "u-3583": "Mezzanine",  # The Valkyrie and Finley
    "u-3582": "Mobile Art",  # The Wandering Wardrobe
    "u-3581": "Main Field",  # There U Glow
    "u-3580": "Forest Entry",  # Time in the Forest
    "u-3579": "Forest Entry",  # Tiny Tramp Espresso-Tinis
    "u-3578": "Main Field",  # Trifecta 2.0
    "u-3577": "Forest Entry",  # Twilight Tarot
    "u-3576": "Upper Bowl",  # Universal Eggsperience
    "u-3575": "Upper Bowl",  # V, S, M (an agate)
    "u-3574": "Riverside",  # Vanity
    "u-3573": "Main Field",  # Virror 2.0
    "u-3572": "Upper Bowl",  # W.E.T.
    "u-3571": "Mezzanine",  # Warm Snuggles
    "u-3570": "Main Field",  # Watt-Woh!
    "u-3569": "Forest Entry",  # WB MEDICAL
    "u-3568": "Upper Bowl",  # Weevil Weevil Rock You
    "u-3567": "Lower Bowl",  # Wish (vol 1)
    "u-3566": "Main Field",  # Woo the Day
    "u-3565": "Main Field",  # Yellow Bikes
    "u-3564": "Around"  # Zealous Entities
}

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory('dist', path)

@app.route('/')
def index():
    return send_from_directory('dist', 'index.html')

@app.route("/schedule.json", methods=["GET"])
def schedule() -> Response:
    response = get("https://data.dust.events/soak-2025/schedule.json", timeout=120)
    if response.status_code != 200:
        return Response("Error fetching schedule data", status=response.status_code)

    schedule_data = response.json()
    for event in schedule_data:
        neighborhood = CAMP_LOCATIONS.get(event["hosted_by_camp"], "Various - See Map")
        event["neighborhood"] = neighborhood

    return schedule_data

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
