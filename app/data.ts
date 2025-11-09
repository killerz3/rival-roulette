export const heroData =[
    {
        "id": "1011",
        "name": "Bruce Banner",
        "real_name": "Bruce Banner",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/bruce-banner-headbig-0.webp",
                "name": "Bruce Banner",
                "health": "200",
                "movement_speed": "6m\/s"
            },
            {
                "id": 1,
                "icon": "characters\/bruce-banner-headbig-1.webp",
                "name": "Hero Hulk"
            },
            {
                "id": 2,
                "icon": "characters\/bruce-banner-headbig-2.webp",
                "name": "Monster Hulk"
            },
            {
                "id": 3,
                "icon": "characters\/bruce-banner-headbig-3.webp",
                "name": "Bruce Banner"
            }
        ],
        "en_name": "Banner",
        "description": "Brilliant scientist Dr. Bruce Banner has finally found a way to coexist with his monstrous alter ego, the Hulk. By accumulating gamma energy over transformations, he can become a wise and strong Hero Hulk or a fierce and destructive Monster Hulk – a true force of fury on the battlefield!",
        "slug": "bruce-banner",
        "team": [
            "Avengers"
        ],
        "difficulty": "4",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/bruce-banner-square.webp",
        "image_transverse": "characters\/bruce-banner-transverse.webp",
        "icon": "characters\/bruce-banner-headbig.webp",
        "image": "characters\/bruce-banner-portrait.webp",
        "logo_small": "characters\/bruce-banner-logo.webp",
        "logo": "characters\/bruce-banner-logo-small.webp",
        "skins": [
            "1011001",
            "1011100",
            "1011500",
            "1011501",
            "1011502",
            "1011300"
        ],
        "abilities": [
            {
                "id": 101131,
                "icon": "abilities\/1011\/101131.webp",
                "name": "Puny Banner",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Transform from Bruce Banner into Hero Hulk.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Transformation",
                    "Energy Cost": "600",
                    "Special Effect": "The caster is immobilized during the transformation process and gains Invincibility"
                },
                "transformation_id": 0
            },
            {
                "id": 101111,
                "icon": "abilities\/1011\/101111.webp",
                "name": "Gamma Ray Gun",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire with a Gamma Ray Gun.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "25",
                    "Damage": "16",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Fire Rate": "5 rounds per second",
                    "Critical Hit": "Yes",
                    "Projectile Speed": "80m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101121,
                "icon": "abilities\/1011\/101121.webp",
                "name": "Gamma Grenade",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a Gamma Grenade to inflict damage and <Debuff>Launch Up<\/> enemies.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "3m spherical radius",
                    "Damage": "40",
                    "Casting": "Single-cast projectile with a downward delay that creates a spell field upon impact",
                    "Cooldown": "8s",
                    "Special Effect": "When the caster enters the spell field, it restores 50 gamma energy"
                },
                "transformation_id": 0
            },
            {
                "id": 101196,
                "icon": "abilities\/1011\/101196.webp",
                "name": "Gamma Boost",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Hero Hulk and Monster Hulk gain 100 Max Health"
                },
                "transformation_id": 0
            },
            {
                "id": 101197,
                "icon": "abilities\/1011\/101197.webp",
                "name": "Gamma Fastball",
                "type": "Normal",
                "isCollab": true,
                "description": "Wolverine, Hulk{000003}{105100} can interact with each other. Once both parties confirm, Hulk{000003}{105100} can lift Wolverine and press the key to hurl him forward.",
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Targeted",
                    "Cooldown": "3s when not thrown, 15s when thrown",
                    "Maximum Distance": "20m"
                },
                "transformation_id": 0
            },
            {
                "id": 101132,
                "icon": "abilities\/1011\/101132.webp",
                "name": "Hulk Smash!",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Unleash stored gamma energy, transforming from Hero Hulk into Monster Hulk for a limited time period.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Transformation",
                    "Duration": "12s",
                    "Energy Cost": "3400",
                    "Special Effect": "The caster is immobilized during the transformation process and gains Invincibility"
                },
                "transformation_id": 1
            },
            {
                "id": 101113,
                "icon": "abilities\/1011\/101113.webp",
                "name": "Heavy Blow",
                "type": "Weapon",
                "isCollab": false,
                "description": "Swing fists forward to punch enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "4.5m",
                    "Damage": "40",
                    "Casting": "Single-cast Spell Field",
                    "Attack Interval": "0.467s"
                },
                "transformation_id": 1
            },
            {
                "id": 101191,
                "icon": "abilities\/1011\/101191.webp",
                "name": "Incredible Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Hold {Jump} to perform a charged leap that allows Hero Hulk to <Debuff>Knock Down<\/> flying enemies.",
                "additional_fields": {
                    "Key": "Space",
                    "Casting": "Charged Dash",
                    "Special Effect": "Press Space during the Incredible Leap to cling to the wall you encounter",
                    "Maximum Charge Time": "2s",
                    "Minimum Charge Time": "0.5s",
                    "Speed at Maximum Charge Time": "25m\/s",
                    "Speed at Minimum Charge Time": "19m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101122,
                "icon": "abilities\/1011\/101122.webp",
                "name": "Gamma Burst",
                "type": "Normal",
                "isCollab": false,
                "description": "Emit gamma-ray bursts to inflict damage.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "70",
                    "Casting": "Single-cast projectile that can pierce through enemies",
                    "Cooldown": "8s",
                    "Projectile Speed": "80m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101141,
                "icon": "abilities\/1011\/101141.webp",
                "name": "Indestructible Guard",
                "type": "Normal",
                "isCollab": false,
                "description": "Generate gamma shields for Hero Hulk and nearby allies, absorbing and converting damage into energy for <Orange>HULK SMASH!<\/>",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "5m spherical radius",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Cooldown": "10s",
                    "Special Effect": "When the caster's shield takes damage, 100% of the damage is converted into gamma energy. When an ally's shield takes damage, 10% of the damage is converted into gamma energy",
                    "Ally's Shield Value": "100",
                    "Max Shield Duration": "2.5s",
                    "Caster's Shield Value": "200"
                },
                "transformation_id": 1
            },
            {
                "id": 101151,
                "icon": "abilities\/1011\/101151.webp",
                "name": "Radioactive Lockdown",
                "type": "Normal",
                "isCollab": false,
                "description": "Emit gamma energy to render enemies immobilized and immune to all ability effects. Using <Orange>Heavy Blow<\/> or <Orange>Gamma Burst<\/> will prematurely remove this status.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "5",
                    "Casting": "Single-cast projectile.",
                    "Cooldown": "15s",
                    "Max Duration": "2s",
                    "Special Effect": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status",
                    "Projectile Speed": "100m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101196,
                "icon": "abilities\/1011\/101196.webp",
                "name": "Gamma Boost",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Hero Hulk and Monster Hulk gain 100 Max Health"
                },
                "transformation_id": 1
            },
            {
                "id": 101197,
                "icon": "abilities\/1011\/101197.webp",
                "name": "Gamma Fastball",
                "type": "Normal",
                "isCollab": true,
                "description": "Wolverine, Hulk{000003}{105100} can interact with each other. Once both parties confirm, Hulk{000003}{105100} can lift Wolverine and press the key to hurl him forward.",
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Targeted",
                    "Cooldown": "3s when not thrown, 15s when thrown",
                    "Maximum Distance": "20m"
                },
                "transformation_id": 1
            },
            {
                "id": 101171,
                "icon": "abilities\/1011\/101171.webp",
                "name": "World Breaker",
                "type": "Ultimate",
                "isCollab": false,
                "description": " Grab and smash the enemy in front.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "5m",
                    "Damage": "Delivers 5 hits, each dealing 40 damage",
                    "Casting": "Targeted",
                    "Duration": "5s",
                    "Special Effect": "While performing the smash, Hulk gains a 30% Damage Reduction"
                },
                "transformation_id": 2
            },
            {
                "id": 101114,
                "icon": "abilities\/1011\/101114.webp",
                "name": "Heavy Blow",
                "type": "Normal",
                "isCollab": false,
                "description": "Swing fists forward to punch and <Debuff>launch up<\/> enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "4.5m",
                    "Damage": "40",
                    "Casting": "Single-cast Spell Field",
                    "Attack Interval": "0.467s"
                },
                "transformation_id": 2
            },
            {
                "id": 101193,
                "icon": "abilities\/1011\/101193.webp",
                "name": "Incredible Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Hold {Jump} to perform a charged leap that allows Monster Hulk to <Debuff>Knock Down<\/> flying enemies.",
                "additional_fields": {
                    "Key": "Space",
                    "Casting": "Charged Dash",
                    "Special Effect": "Press Space during the Incredible Leap to cling to the wall you encounter",
                    "Maximum Charge Time": "2s",
                    "Minimum Charge Time": "0.5s",
                    "Speed at Maximum Charge Time": "25m\/s",
                    "Speed at Minimum Charge Time": "19m\/s"
                },
                "transformation_id": 2
            },
            {
                "id": 101123,
                "icon": "abilities\/1011\/101123.webp",
                "name": "Gamma Burst",
                "type": "Normal",
                "isCollab": false,
                "description": "Emit gamma-ray bursts to inflict damage.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "70",
                    "Casting": "Single-cast projectile that can pierce through enemies",
                    "Cooldown": "8s",
                    "Projectile Speed": "80m\/s"
                },
                "transformation_id": 2
            },
            {
                "id": 101152,
                "icon": "abilities\/1011\/101152.webp",
                "name": "Radioactive Lockdown",
                "type": "Normal",
                "isCollab": false,
                "description": "Emit gamma energy to render enemies immobilized and immune to all ability effects. Using <Orange>Heavy Blow<\/> or <Orange>Gamma Burst<\/> will prematurely remove this status.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "5",
                    "Casting": "Single-cast projectile.",
                    "Cooldown": "15s",
                    "Max Duration": "2s",
                    "Special Effect": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status",
                    "Projectile Speed": "100m\/s"
                },
                "transformation_id": 2
            },
            {
                "id": 101196,
                "icon": "abilities\/1011\/101196.webp",
                "name": "Gamma Boost",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Hero Hulk and Monster Hulk gain 100 Max Health"
                },
                "transformation_id": 2
            },
            {
                "id": 101197,
                "icon": "abilities\/1011\/101197.webp",
                "name": "Gamma Fastball",
                "type": "Normal",
                "isCollab": true,
                "description": "Wolverine, Hulk{000003}{105100} can interact with each other. Once both parties confirm, Hulk{000003}{105100} can lift Wolverine and press the key to hurl him forward.",
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Targeted",
                    "Cooldown": "3s when not thrown, 15s when thrown",
                    "Maximum Distance": "20m"
                },
                "transformation_id": 2
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "12.00",
                "mover_shaker": "41.00",
                "rank_calc": "4.10",
                "mover_shaker_calc": "-79.35",
                "ZScore": "-5.61",
                "winrate": "53.09",
                "pickrate": "14.00",
                "banrate": "20.88",
                "usage_trend": "Upward",
                "winrate_prev": "53.27",
                "pickrate_prev": "8.65",
                "banrate_prev": "0.75",
                "winrate_change": "0.00",
                "pickrate_change": "62.00",
                "banrate_change": "2684.00"
            },
            {
                "date": "1755216000",
                "rank": "9.00",
                "mover_shaker": "2.00",
                "rank_calc": "4.14",
                "mover_shaker_calc": "2.31",
                "ZScore": "0.27",
                "winrate": "53.27",
                "pickrate": "8.65",
                "banrate": "0.75",
                "usage_trend": "Downward",
                "winrate_prev": "52.71",
                "pickrate_prev": "14.05",
                "banrate_prev": "17.06",
                "winrate_change": "1.00",
                "pickrate_change": "-38.00",
                "banrate_change": "-96.00"
            }
        ]
    },
    {
        "id": "1014",
        "name": "The Punisher",
        "real_name": "Frank Castle",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/the-punisher-headbig-0.webp",
                "name": "The Punisher",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "The Punisher",
        "description": "Expertly wielding a full arsenal of futuristic weapons, Frank Castle is a formidable one-man army. With a steadfast resolve to deliver justice to his enemies, The Punisher won't cease in his mission until every last round is fired!",
        "slug": "the-punisher",
        "team": [
            "Marvelknights"
        ],
        "difficulty": "1",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/the-punisher-square.webp",
        "image_transverse": "characters\/the-punisher-transverse.webp",
        "icon": "characters\/the-punisher-headbig.webp",
        "image": "characters\/the-punisher-portrait.webp",
        "logo_small": "characters\/the-punisher-logo.webp",
        "logo": "characters\/the-punisher-logo-small.webp",
        "skins": [
            "1014001",
            "1014100",
            "1014500",
            "1014501",
            "1014300",
            "1014800",
            "1014502",
            "ps1014504",
            "ps1014505"
        ],
        "abilities": [
            {
                "id": 101481,
                "icon": "abilities\/1014\/101481.webp",
                "name": "Final Judgement",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Unleash two gatling guns and missiles to attack enemies.",
                "additional_fields": {
                    "Key": "Q",
                    "Ammo": "Infinite",
                    "Damage": "50",
                    "Casting": "Rapid-fire projectiles that hit instantly and have a tracking trajectory",
                    "Duration": "10s",
                    "Fire Rate": "33.33 rounds per second",
                    "Energy Cost": "3700",
                    "Gatling Gun": " ",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 70% at 40m",
                    "Projectile Speed": "60 m\/s",
                    "Slow Rate While Idling": "-10%",
                    "Interval Between Volleys": "3s",
                    "Maximum Locking Distance": "40m",
                    "Slow Rate While Shooting": "-30%",
                    "Interval Between Missiles": "0.3s",
                    "Shoulder-mounted Missiles": " ",
                    "Crosshair Spread Radius (at 10m)": "Start with a spread radius of 0.6m, which reduces to 0.3m after 50 shots, and further decreases to 0.15m after 100 shots",
                    "Maximum Number of Missiles Per Volley": "8",
                    "Maximum Number of Locked-on Missiles Per Target": "3"
                },
                "transformation_id": 0
            },
            {
                "id": 101431,
                "icon": "abilities\/1014\/101431.webp",
                "name": "Adjudication",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire at enemies with Adjudication, his Automatic Rifle.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "40",
                    "Damage": "19 damage per round",
                    "Casting": "Rapid-fire projectile",
                    "Fire Rate": "10 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 70% at 40m",
                    "Crosshair Spread Radius (at 10m)": "Up to a 0.075m radius."
                },
                "transformation_id": 0
            },
            {
                "id": 101441,
                "icon": "abilities\/1014\/101441.webp",
                "name": "Deliverance",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire at enemies with Deliverance, his Shotgun.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "8",
                    "Damage": "10 damage per round",
                    "Casting": "Shotgun projectiles that hit instantly",
                    "Fire Rate": "1.43 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 8m, decreasing to 40% at 15m",
                    "Bullets Fired Each Cast": "14",
                    "Crosshair Spread Radius (at 10m)": "0.6m"
                },
                "transformation_id": 0
            },
            {
                "id": 101433,
                "icon": "abilities\/1014\/101433.webp",
                "name": "Scourge Grenade",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw a smoke grenade forward to <Debuff>Block Enemies' Vision<\/> and leap backward.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "5m spherical radius",
                    "Damage": "45",
                    "Casting": "Projectile with an arced trajectory",
                    "Cooldown": "8s",
                    "Special Effect": "Create a temporary smokescreen that obstructs vision",
                    "Projectile Speed": "40 m\/s",
                    "Backward Jump Distance": "9m"
                },
                "transformation_id": 0
            },
            {
                "id": 101411,
                "icon": "abilities\/1014\/101411.webp",
                "name": "Warrior's Gaze",
                "type": "Passive",
                "isCollab": false,
                "description": "Retain vision of enemies that disappear from view for a short duration.",
                "additional_fields": {
                    "Key": "Passive",
                    "Range": "30m spherical radius",
                    "Duration": "3s",
                    "Special Effect": "Retain vision of enemies that disappear from view for a short duration"
                },
                "transformation_id": 0
            },
            {
                "id": 101451,
                "icon": "abilities\/1014\/101451.webp",
                "name": "Vantage Connection",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a hook to generate a cable that enables Punisher to move rapidly by pressing {Interactive}.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Cooldown": "20s",
                    "Dash Speed": "25 m\/s",
                    "Cable Length": "5m - 35m",
                    "Cable Attachment Angle": "20° - 160°"
                },
                "transformation_id": 0
            },
            {
                "id": 101461,
                "icon": "abilities\/1014\/101461.webp",
                "name": "Culling Turret",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Culling Turret that grounds Punisher and blocks damage from the front while dealing massive damage.",
                "additional_fields": {
                    "Key": "E",
                    "Ammo": "200",
                    "Damage": "10 damage per round",
                    "Casting": "Rapid-fire projectiles that create a spell field upon impact",
                    "Cooldown": "20s",
                    "Fire Rate": "12.5 rounds per second",
                    "Turret Health": "600",
                    "Explosion Range": "3m spherical radius",
                    "Explosion Damage": "10 damage per round",
                    "Crosshair Spread Radius (at 10m)": "Start with a spread radius of 0.2m, which reduces to 0.1m after 10 shots, and further decreases to 0.05m after 20 shots"
                },
                "transformation_id": 0
            },
            {
                "id": 101400,
                "icon": "abilities\/1014\/101400.webp",
                "name": "Infinite Punishment",
                "type": "Passive",
                "isCollab": true,
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device's range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 101402,
                "icon": "abilities\/1014\/101402.webp",
                "name": "Cutting-edge Tech",
                "type": "Passive",
                "isCollab": true,
                "description": "The Punisher upgrades Black Widow's arsenal, adding a Pulse Mode to her Red Room Rifle. While the ability is active, using <Orange>Straight Shooter<\/> fires a pulse beam that deals piercing damage.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+25 Max Health, +5% Damage Boost"
                },
                "transformation_id": 0
            },
            {
                "id": 101492,
                "icon": "abilities\/1014\/101492.webp",
                "name": "Justice Sense",
                "type": "Normal",
                "isCollab": true,
                "description": "Daredevil shares the location of his <Orange>Sonic Pursuit<\/> target with The Punisher. At the same time, The Punisher can launch a devil-infused shock grenade to damage and <Debuff>Blind<\/> enemies.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "5m spherical radius",
                    "Damage": "45",
                    "Casting": "Projectile with an arced trajectory",
                    "Cooldown": "15s",
                    "Projectile Speed": "40 m\/s",
                    "Blind Effect Duration": "1.5s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "40.00",
                "mover_shaker": "7.00",
                "rank_calc": "3.52",
                "mover_shaker_calc": "1.22",
                "ZScore": "0.31",
                "winrate": "44.73",
                "pickrate": "10.83",
                "banrate": "0.86",
                "usage_trend": "Upward",
                "winrate_prev": "44.15",
                "pickrate_prev": "9.60",
                "banrate_prev": "1.12",
                "winrate_change": "1.00",
                "pickrate_change": "13.00",
                "banrate_change": "-23.00"
            },
            {
                "date": "1755216000",
                "rank": "40.00",
                "mover_shaker": "7.00",
                "rank_calc": "3.49",
                "mover_shaker_calc": "0.70",
                "ZScore": "0.22",
                "winrate": "44.15",
                "pickrate": "9.60",
                "banrate": "1.12",
                "usage_trend": "Downward",
                "winrate_prev": "44.63",
                "pickrate_prev": "11.50",
                "banrate_prev": "1.91",
                "winrate_change": "-1.00",
                "pickrate_change": "-17.00",
                "banrate_change": "-41.00"
            }
        ]
    },
    {
        "id": "1015",
        "name": "Storm",
        "real_name": "Ororo Munroe",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/storm-headbig-0.webp",
                "name": "Storm",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Storm",
        "description": "An Omega-level Mutant ability to manipulate weather makes Ororo Munroe a force to be reckoned with. Rain or shine, thunder or lightning, nature itself bends to the command of the Goddess of the Storm!",
        "slug": "storm",
        "team": [
            "X_men",
            "Mutants"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/storm-square.webp",
        "image_transverse": "characters\/storm-transverse.webp",
        "icon": "characters\/storm-headbig.webp",
        "image": "characters\/storm-portrait.webp",
        "logo_small": "characters\/storm-logo.webp",
        "logo": "characters\/storm-logo-small.webp",
        "skins": [
            "1015001",
            "1015100",
            "1015500",
            "1015501",
            "1015502",
            "1015503",
            "1015300"
        ],
        "abilities": [
            {
                "id": 101561,
                "icon": "abilities\/1015\/101561.webp",
                "name": "Omega Hurricane",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Transform into a hurricane to draw in nearby enemies and deal damage.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "8m spherical radius",
                    "Damage": "80",
                    "Casting": "Spherical Spell Field",
                    "Energy Cost": "3400",
                    "Special Effect": "Weather effects will be disabled during the Ultimate",
                    "Attack Interval": "2 hits per second",
                    "Tornado Duration": "5s",
                    "Bonus Health (Self)": "450",
                    "Maximum Selection Duration": "5s"
                },
                "transformation_id": 0
            },
            {
                "id": 101521,
                "icon": "abilities\/1015\/101521.webp",
                "name": "Wind Blade",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch forward-piercing Wind Blades.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "12",
                    "Damage": "55 damage per round",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Fire Rate": "2 rounds per second",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 15m, decreasing to 60% at 30m",
                    "Special Effect": "Wind Blade pierces through enemies",
                    "Projectile Speed": "150m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101531,
                "icon": "abilities\/1015\/101531.webp",
                "name": "Bolt Rush",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash a lightning bolt forward.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "A cylindrical spell field with a radius of 1m and a height of 40m",
                    "Damage": "80",
                    "Casting": "Straight Spell Field",
                    "Cooldown": "8s"
                },
                "transformation_id": 0
            },
            {
                "id": 101542,
                "icon": "abilities\/1015\/101542.webp",
                "name": "Weather Control",
                "type": "Normal",
                "isCollab": false,
                "description": "Switch the weather to empower allies: Tornado grants a <Buff>Movement Boost<\/>; Thunder grants a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "15m spherical radius",
                    "Casting": "Spherical Spell Field",
                    "Thunder": " ",
                    "Tornado": " ",
                    "Damage Boost (Ally)": "10%",
                    "Damage Boost (Self)": "12%",
                    "Movement Boost (Ally)": "8%",
                    "Movement Boost (Self)": "16%"
                },
                "transformation_id": 0
            },
            {
                "id": 101551,
                "icon": "abilities\/1015\/101551.webp",
                "name": "Goddess Boost",
                "type": "Normal",
                "isCollab": false,
                "description": "Channel the power of the weather to empower Storm: Tornado grants a <Buff>Movement Boost<\/> and inflicts <Debuff>Slow<\/> on enemies; Thunder grants a <Buff>Damage Boost<\/> and summons lightning to inflict damage.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "15m spherical radius",
                    "Damage": "35",
                    "Casting": "Spherical Spell Field",
                    "Cooldown": "15s",
                    "Duration": "8s",
                    "Enemy Slow Rate": "-15%",
                    "Enhanced Thunder": " ",
                    "Enhanced Tornado": " ",
                    "Strike Frequency": "2s per strike",
                    "Damage Boost (Ally)": "12%",
                    "Damage Boost (Self)": "25%",
                    "Movement Boost (Ally)": "20%",
                    "Movement Boost (Self)": "40%"
                },
                "transformation_id": 0
            },
            {
                "id": 101562,
                "icon": "abilities\/1015\/101562.webp",
                "name": "Burning Hurricane",
                "type": "Normal",
                "isCollab": true,
                "description": "When the Human Torch activates <Orange>Supernova<\/>, Storm can summon an <Orange>Omega Fire<\/> by selecting a <Orange>Flame Tornado<\/> with <Orange>Omega Hurricane<\/>. Likewise, when Storm unleashes <Orange>Omega Hurricane<\/>, the Human Torch can transform it into a <Orange>Burning Hurricane<\/> with <Orange>Supernova<\/>. Any <Orange>Flame Tornado<\/> caught in a <Orange>Burning Hurricane<\/> will grow in size and damage.",
                "transformation_id": 0
            },
            {
                "id": 101581,
                "icon": "abilities\/1015\/101581.webp",
                "name": "Charged Gale",
                "type": "Normal",
                "isCollab": true,
                "description": "Thor infuses <Orange>Thorforce<\/> into {101500}{000003}{102200}, granting them an electrifying enhancement. {101501}{102201}",
                "transformation_id": 0
            },
            {
                "id": 101582,
                "icon": "abilities\/1015\/101582.webp",
                "name": "Shark Surge",
                "type": "Passive",
                "isCollab": true,
                "description": "When Storm unleashes her <Orange>Omega Hurricane<\/>, if Jeff the Land Shark has <Orange>It's Jeff!<\/> ready, he can channel her power to conjure a ferocious <Orange>Jeff-nado<\/>! Additionally, a <Orange>Jeff-nado<\/> will form if Jeff encounters Storm's <Orange>Omega Hurricane<\/> after devouring enemies with <Orange>It's Jeff!<\/>. Enemies will be drawn into the swirling chaos after enduring sustained damage from the <Orange>Jeff-nado<\/> for some time.",
                "additional_fields": {
                    "Key": "PASSIVE",
                    "Swallow Range": "10m spherical radius spell field centered around Storm",
                    "Swallow Damage": "80",
                    "Attack Interval": "2 hits per second",
                    "Swallow Time Required": "1.5s",
                    "Warning before Swallow": "0.1",
                    "Hurricane Duration Expanded": "4s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "11.00",
                "mover_shaker": "8.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "1.00",
                "ZScore": "0.30",
                "winrate": "53.11",
                "pickrate": "4.16",
                "banrate": "0.38",
                "usage_trend": "Upward",
                "winrate_prev": "53.63",
                "pickrate_prev": "3.98",
                "banrate_prev": "0.60",
                "winrate_change": "-1.00",
                "pickrate_change": "5.00",
                "banrate_change": "-37.00"
            },
            {
                "date": "1755216000",
                "rank": "10.00",
                "mover_shaker": "4.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "1.73",
                "ZScore": "0.25",
                "winrate": "53.63",
                "pickrate": "3.98",
                "banrate": "0.60",
                "usage_trend": "Downward",
                "winrate_prev": "52.90",
                "pickrate_prev": "4.96",
                "banrate_prev": "1.56",
                "winrate_change": "1.00",
                "pickrate_change": "-20.00",
                "banrate_change": "-62.00"
            }
        ]
    },
    {
        "id": "1016",
        "name": "Loki",
        "real_name": "Loki Laufeyson",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/loki-headbig-0.webp",
                "name": "Loki",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Loki",
        "description": "What greater thrill is there for a God of Mischief than to outsmart his foes? The cunning trickster Loki uses his illusions and shapeshifting abilities to weave in and out of combat, toying with enemies at every turn.",
        "slug": "loki",
        "team": [
            "Godsofasgard"
        ],
        "difficulty": "4",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/loki-square.webp",
        "image_transverse": "characters\/loki-transverse.webp",
        "icon": "characters\/loki-headbig.webp",
        "image": "characters\/loki-portrait.webp",
        "logo_small": "characters\/loki-logo.webp",
        "logo": "characters\/loki-logo-small.webp",
        "skins": [
            "1016001",
            "1016100",
            "1016500",
            "1016501",
            "1016800",
            "1016300",
            "1016301",
            "ps1016303",
            "1016302"
        ],
        "abilities": [
            {
                "id": 101621,
                "icon": "abilities\/1016\/101621.webp",
                "name": "Mystical Missile",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire Mystical Missiles to heal allies or deal damage to enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "12",
                    "Range": "3m spherical radius",
                    "Damage": "The projectile deals no damage, while the spell field inflicts 25 damage per cast",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Fire Rate": "1.75 rounds per second",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 0.5m, decreasing to 50% at 2.5m",
                    "Healing Amount": "The projectile does not provide healing, but the spell field provides 40 Health per cast",
                    "Projectile Speed": "100 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101631,
                "icon": "abilities\/1016\/101631.webp",
                "name": "Regeneration Domain",
                "type": "Normal",
                "isCollab": false,
                "description": "Use Rune Stones to create a magical field that provides allies <Buff>Healing Over Time<\/> and converts incoming damage into further healing.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "A cylindrical spell field with a radius of 5m and a height of 2m",
                    "Casting": "Release a spell field at the location of Loki and the Illusion",
                    "Cooldown": "30s",
                    "Duration": "5s",
                    "Healing Amount": "100\/s",
                    "Special Effect": "The spell field is sustained by Rune Stones. It will disappear if the Rune Stone is destroyed or if its maximum duration is reached. Allies within the field will receive healing over time, and any damage taken will be converted into healing based on the amount of damage taken",
                    "Conversion Rate": "30%",
                    "Rune Stone Health": "100"
                },
                "transformation_id": 0
            },
            {
                "id": 101641,
                "icon": "abilities\/1016\/101641.webp",
                "name": "Deception",
                "type": "Normal",
                "isCollab": false,
                "description": "Become <Buff>Invisible<\/> and conjure an <Orange>Illusion<\/> to deceive enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Instant Cast",
                    "Cooldown": "15s",
                    "Healing Amount": "Health regenerates at a rate of 20 Health per second while invisible",
                    "Special Effect": "Loki leaves an illusion in his place and becomes invisible while continuously healing himself. This invisibility has no time limit, but any actions other than casting Devious Exchange, reloading, or casting Doppelganger will render him visible"
                },
                "transformation_id": 0
            },
            {
                "id": 101651,
                "icon": "abilities\/1016\/101651.webp",
                "name": "Doppelganger",
                "type": "Normal",
                "isCollab": false,
                "description": "Project an <Orange>Illusion<\/> that can cast some of Loki's abilities.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "2 charges, with each charge taking 12s to recharge",
                    "Special Effect": "Project an Illusion at a selected location",
                    "Maximum Distance": "30m"
                },
                "transformation_id": 0
            },
            {
                "id": 101652,
                "icon": "abilities\/1016\/101652.webp",
                "name": "Devious Exchange",
                "type": "Normal",
                "isCollab": false,
                "description": "Swap with the selected <Orange>Illusion<\/>.",
                "additional_fields": {
                    "Key": "F",
                    "Casting": "Targeted",
                    "Cooldown": "15s",
                    "Maximum Distance": "30m"
                },
                "transformation_id": 0
            },
            {
                "id": 101661,
                "icon": "abilities\/1016\/101661.webp",
                "name": "God Of Mischief",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Shapeshift into a targeted ally or enemy hero and use all their abilities except any of their Team-Up Abilities.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Targeted",
                    "Duration": "12s",
                    "Energy Cost": "4300",
                    "Special Effect": "After transforming, Loki's Ultimate ability will be fully charged. Casting a transformation-type Ultimate ability will extend the duration of God of Mischief until the transformation ability ends"
                },
                "transformation_id": 0
            },
            {
                "id": 101611,
                "icon": "abilities\/1016\/101611.webp",
                "name": "Backstab",
                "type": "Normal",
                "isCollab": false,
                "description": "Pull out a dagger to stab enemies, dealing extra damage when attacking an enemy from behind.",
                "additional_fields": {
                    "Key": "V",
                    "Range": "3m",
                    "Damage": "Damage: 30; Backstab Damage: +15 (total of 45)",
                    "Casting": "Single-cast Spell Field"
                },
                "transformation_id": 0
            },
            {
                "id": 101601,
                "icon": "abilities\/1016\/101601.webp",
                "name": "Laufeyson Reborn",
                "type": "Passive",
                "isCollab": true,
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect Thor in the respawn phase, or grant him <Buff>Bonus Health<\/> if he is still alive.",
                "transformation_id": 0
            },
            {
                "id": 101632,
                "icon": "abilities\/1016\/101632.webp",
                "name": "Deific Blessing",
                "type": "Normal",
                "isCollab": true,
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Wild Wall, which, when in <Orange>Flora Colossus<\/> state, restores health to random nearby allies. Loki's Rune Stones grant allies within <Orange>Regeneration Domain<\/> a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "Shift",
                    "Range": "A cylindrical spell field with a radius of 6.5m and a height of 2m.",
                    "Cooldown": "30s",
                    "Damage Boost": "0.25",
                    "Healing Amount": "100\/s",
                    "Conversion Rate": "30%",
                    "Rune Stone Health": "100",
                    "Maximum Duration for Summons": "5s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "6.00",
                "mover_shaker": "34.00",
                "rank_calc": "4.15",
                "mover_shaker_calc": "-1.04",
                "ZScore": "0.15",
                "winrate": "49.78",
                "pickrate": "18.56",
                "banrate": "6.08",
                "usage_trend": "Downward",
                "winrate_prev": "52.14",
                "pickrate_prev": "22.95",
                "banrate_prev": "6.62",
                "winrate_change": "-5.00",
                "pickrate_change": "-19.00",
                "banrate_change": "-8.00"
            },
            {
                "date": "1755216000",
                "rank": "2.00",
                "mover_shaker": "37.00",
                "rank_calc": "4.35",
                "mover_shaker_calc": "-3.39",
                "ZScore": "0.09",
                "winrate": "52.14",
                "pickrate": "22.95",
                "banrate": "6.62",
                "usage_trend": "Upward",
                "winrate_prev": "50.60",
                "pickrate_prev": "20.21",
                "banrate_prev": "2.73",
                "winrate_change": "3.00",
                "pickrate_change": "14.00",
                "banrate_change": "142.00"
            }
        ]
    },
    {
        "id": "1017",
        "name": "Human Torch",
        "real_name": "Jonathan \"johnny\" Storm",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/human-torch-headbig-0.webp",
                "name": "Human Torch",
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Human Torch",
        "description": "The Fantastic Four's resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!",
        "slug": "human-torch",
        "team": [
            "Fantasticfour"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/human-torch-square.webp",
        "image_transverse": "characters\/human-torch-transverse.webp",
        "icon": "characters\/human-torch-headbig.webp",
        "image": "characters\/human-torch-portrait.webp",
        "logo_small": "characters\/human-torch-logo.webp",
        "logo": "characters\/human-torch-logo-small.webp",
        "skins": [
            "1017001",
            "1017500",
            "1017100",
            "1017101",
            "1017501",
            "1017502",
            "1017800",
            "ps1017504"
        ],
        "abilities": [
            {
                "id": 101711,
                "icon": "abilities\/1017\/101711.webp",
                "name": "Fire Cluster",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch forward a cluster of splitting fireballs.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Casting": "Burst Projectile",
                    "Charges": "6",
                    "Fire Rate": "0.5s per round",
                    "Shot Damage": "5 per round",
                    "Charge Speed": "0.33s per use, Fire Cluster has a 0.5s delay before ammo begins to replenish",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 15m, decreasing to 60% at 30m.",
                    "Projectile Speed": "150m\/s",
                    "Crosshair Spread Radius (at 10m)": "0.33m"
                },
                "transformation_id": 0
            },
            {
                "id": 101721,
                "icon": "abilities\/1017\/101721.webp",
                "name": "Plasma Body",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD {Ability2} to enter a state of <Buff>accelerated ascent<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Energy Cost": "15\/s",
                    "Maximum Energy": "120",
                    "Movement Boost": "2.5m\/s",
                    "Energy Recovery Speed": "20\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101731,
                "icon": "abilities\/1017\/101731.webp",
                "name": "Blazing Blast",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a fireball to deal damage or create a <Orange>Flame Field<\/> at the targeted area, dealing damage to enemies within.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Straight-line projectile that generates a spherical spell field upon impact.",
                    "Charges": "3",
                    "Charge Speed": "3s per strike",
                    "Flame Field Range": "3m spherical radius",
                    "Blazing Blast Damage": "40",
                    "Flame Field Duration": "6s",
                    "Flame Field Continuous Damage": "20\/s",
                    "Blazing Blast Projectile Speed": "80m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101741,
                "icon": "abilities\/1017\/101741.webp",
                "name": "Flaming Meteor",
                "type": "Normal",
                "isCollab": false,
                "description": "Dive towards the ground, dealing damage to enemies. This will also detonate any <Orange>Flame Fields<\/> hit and grant you <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "5m spherical radius",
                    "Damage": "40",
                    "Cooldown": "20s",
                    "Bonus Health": "50",
                    "Max Dash Speed": "80m\/s",
                    "Flame Field Detonation Range": "3m spherical radius",
                    "Flame Field Detonation Damage": "55"
                },
                "transformation_id": 0
            },
            {
                "id": 101751,
                "icon": "abilities\/1017\/101751.webp",
                "name": "Pyro-prison",
                "type": "Normal",
                "isCollab": false,
                "description": "When 2 or more  <Orange>Flame Fields<\/> exist, connect them to form a fire wall that deals one-off high damage to enemies that pass through the wall, or continuous burning damage if the wall exists in an enclosed area.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "15s",
                    "Max Link Height": "2m",
                    "Fire Wall Damage": "65",
                    "Max Link Distance": "40m",
                    "Fire Wall Duration": "5s",
                    "Pyro-Prison Continuous Damage": "40\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101761,
                "icon": "abilities\/1017\/101761.webp",
                "name": "Supernova",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Explode with cosmic fire to deal damage to enemies within range and enter <Orange>Supernova<\/> state. While in Supernova state, <Orange>Blazing Blast<\/> will transform into <Orange>Flame Tornado<\/>, and <Orange>Plasma Body<\/> can be activated without any cost.",
                "additional_fields": {
                    "Key": "Q",
                    "Duration": "8s",
                    "Energy Cost": "3400",
                    "Flame Tornado Range": "3m spherical radius; 8m high capsule-shaped spell field.",
                    "Activation Wave Damage": "75",
                    "Supernova Damage Reduction": "-30%",
                    "Activation Shock Wave Range": "20m spherical radius",
                    "Flame Tornado Unleash Speed": "0.7s per use",
                    "Flame Tornado Continuous Damage": "110\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101791,
                "icon": "abilities\/1017\/101791.webp",
                "name": "Omega Fire",
                "type": "Normal",
                "isCollab": true,
                "description": "When the Human Torch activates <Orange>Supernova<\/>, Storm can summon an <Orange>Omega Fire<\/> by selecting a <Orange>Flame Tornado<\/> with <Orange>Omega Hurricane<\/>. Likewise, when Storm unleashes <Orange>Omega Hurricane<\/>, the Human Torch can transform it into a <Orange>Burning Hurricane<\/> with <Orange>Supernova<\/>. Any <Orange>Flame Tornado<\/> caught in a <Orange>Burning Hurricane<\/> will grow in size and damage.",
                "transformation_id": 0
            },
            {
                "id": 101792,
                "icon": "abilities\/1017\/101792.webp",
                "name": "United Siblings",
                "type": "Normal",
                "isCollab": true,
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify the entire Fantastic Four team. This formidable force bolsters Human Torch, The Thing, and Mister Fantastic, granting damage resistance. Once activated, they can continually generate <Buff>Bonus Health<\/>, making up for lost Health.",
                "transformation_id": 0
            },
            {
                "id": 101793,
                "icon": "abilities\/1017\/101793.webp",
                "name": "Pyrokinetic Energy",
                "type": "Normal",
                "isCollab": true,
                "description": "Human Torch stores <Orange>Pyrokinetic Energy<\/> in Spider-Man's suit, enabling him to unleash an <Orange>Inferno Blast<\/> that sprays a fiery web while performing a backflip to create distance. The flames damage enemies and apply a <Orange>Burn-Tracer<\/>. Detonating these <Orange>Burn-Tracers<\/> inflicts Damage Over Time.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "5% Damage Boost"
                },
                "transformation_id": 0
            },
            {
                "id": 101794,
                "icon": "abilities\/1017\/101794.webp",
                "name": "Two In One",
                "type": "Normal",
                "isCollab": true,
                "description": "Human Torch can lift The Thing into the air and slam him down, dealing damage, <Debuff>launching<\/> enemies, and creating a zone that disables mobility abilities.",
                "additional_fields": {
                    "Key": "X",
                    "Damage": "Launch-up spell field causes 30 damage; mobility abilities disabling spell field causes 15 damage per second",
                    "Cooldown": "Successfully interacted: 30s; fail to interact: 3s",
                    "Flight Speed": "15m\/s",
                    "Launch Up Range": "A cylindrical spell field with a radius of 8m and a height of 1m",
                    "Maximum Distance": "20m",
                    "Maximum Flight Duration": "8s",
                    "Mobility Abilities Disabling Range": "A cylindrical spell field with a radius of 8m and a height of 8m",
                    "Slam Down Initial Horizontal Velocity": "15m\/s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "36.00",
                "mover_shaker": "37.00",
                "rank_calc": "3.69",
                "mover_shaker_calc": "-2.16",
                "ZScore": "0.07",
                "winrate": "48.39",
                "pickrate": "5.65",
                "banrate": "18.31",
                "usage_trend": "Downward",
                "winrate_prev": "49.96",
                "pickrate_prev": "6.19",
                "banrate_prev": "12.62",
                "winrate_change": "-3.00",
                "pickrate_change": "-9.00",
                "banrate_change": "45.00"
            },
            {
                "date": "1755216000",
                "rank": "29.00",
                "mover_shaker": "34.00",
                "rank_calc": "3.85",
                "mover_shaker_calc": "-1.28",
                "ZScore": "0.16",
                "winrate": "49.96",
                "pickrate": "6.19",
                "banrate": "12.62",
                "usage_trend": "Downward",
                "winrate_prev": "48.51",
                "pickrate_prev": "9.25",
                "banrate_prev": "8.97",
                "winrate_change": "3.00",
                "pickrate_change": "-33.00",
                "banrate_change": "41.00"
            }
        ]
    },
    {
        "id": "1018",
        "name": "Doctor Strange",
        "real_name": "Stephen Strange",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/doctor-strange-headbig-0.webp",
                "name": "Doctor Strange",
                "health": "575",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Doctor Strange",
        "description": "As the Sorcerer Supreme, Dr. Stephen Strange gracefully wields ancient spells to turn the tide of even the most impossible battle. However, magic always comes at a cost, and each use of his arcane abilities gradually awakens the darkness within him.",
        "slug": "doctor-strange",
        "team": [
            "Avengers"
        ],
        "difficulty": "2",
        "attack_type": "Projectile Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/doctor-strange-square.webp",
        "image_transverse": "characters\/doctor-strange-transverse.webp",
        "icon": "characters\/doctor-strange-headbig.webp",
        "image": "characters\/doctor-strange-portrait.webp",
        "logo_small": "characters\/doctor-strange-logo.webp",
        "logo": "characters\/doctor-strange-logo-small.webp",
        "skins": [
            "1018001",
            "1018100",
            "1018800",
            "1018300",
            "1018500",
            "1018501",
            "1018301",
            "1018101"
        ],
        "abilities": [
            {
                "id": 101871,
                "icon": "abilities\/1018\/101871.webp",
                "name": "Eye Of Agamotto",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Separate nearby enemies' <Orange>Souls<\/> from their bodies. Damage dealt to these <Orange>Souls<\/> is transferred to their physical bodies.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m spherical radius",
                    "Damage": "60",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Energy Cost": "3100",
                    "Soul Separation Duration": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 101811,
                "icon": "abilities\/1018\/101811.webp",
                "name": "Daggers Of Denak",
                "type": "Weapon",
                "isCollab": false,
                "description": "Cast Daggers of Denak forward.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "10 (1 dagger per release)",
                    "Damage": "16",
                    "Casting": "Five-round delayed hit projectiles",
                    "Fire Rate": "5.56 rounds per second, with a 0.03-second interval between every two rounds",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 10m, decreasing to 80% at 20m",
                    "Projectile Speed": "60 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 101861,
                "icon": "abilities\/1018\/101861.webp",
                "name": "Pentagram Of Farallah",
                "type": "Normal",
                "isCollab": false,
                "description": "Open portals between two locations, enabling all units to travel through them.",
                "additional_fields": {
                    "Key": "F",
                    "Casting": "Multi-segment release",
                    "Cooldown": "180s",
                    "Duration": "20s"
                },
                "transformation_id": 0
            },
            {
                "id": 101841,
                "icon": "abilities\/1018\/101841.webp",
                "name": "Shield Of The Seraphim",
                "type": "Normal",
                "isCollab": false,
                "description": "Create a protective barrier against damage.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Channeled",
                    "Recovery Speed": "70\/s",
                    "Maximum Shield Value": "800",
                    "Cooldown After Destroyed": "3s",
                    "Delayed Recovery After Release": "1s"
                },
                "transformation_id": 0
            },
            {
                "id": 101851,
                "icon": "abilities\/1018\/101851.webp",
                "name": "Maelstrom Of Madness",
                "type": "Normal",
                "isCollab": false,
                "description": "Release <Orange>Dark Magic<\/> to deal damage to nearby enemies.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "8m spherical radius",
                    "Damage": "Each point of Dark Magic deals 1.2 damage",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Cooldown": "6s"
                },
                "transformation_id": 0
            },
            {
                "id": 101881,
                "icon": "abilities\/1018\/101881.webp",
                "name": "Price Of Magic",
                "type": "Passive",
                "isCollab": false,
                "description": "<Orange>Dark Magic<\/> accumulates with every hit on an enemy. If <Orange>Dark Magic<\/> peaks for too long, Doctor Strange will be cursed with <Debuff>Anti-Heal<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Anti-Heal Duration": "2s",
                    "Generate Dark Magic": "Daggers of Denak: Each hit generates 3.5 Dark Magic. When using the V key, every enemy hit generates 10 Dark Magic",
                    "Anti-Heal Activation Delay at Peak Dark Magic": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 101891,
                "icon": "abilities\/1018\/101891.webp",
                "name": "Cloak Of Levitation",
                "type": "Normal",
                "isCollab": false,
                "description": "Ascend and then enter a brief state of sustained flight.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast",
                    "Cooldown": "12s",
                    "Dash Distance": "8m",
                    "Free-Flight Duration": "6s"
                },
                "transformation_id": 0
            },
            {
                "id": 101852,
                "icon": "abilities\/1018\/101852.webp",
                "name": "Gamma Maelstrom",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "transformation_id": 0
            },
            {
                "id": 101892,
                "icon": "abilities\/1018\/101892.webp",
                "name": "Enchanted Enhancement",
                "type": "Normal",
                "isCollab": true,
                "description": "Doctor Strange shares his arcane mastery with Scarlet Witch and Magik. Scarlet Witch's <Orange>Chthonian Burst<\/> is replaced with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction. Magik can unleash a <Orange>Chain of Cyttorak<\/> that links two enemies and slows them; the farther they are apart, the greater the <Debuff>Slow<\/> effect inflicted during the link.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Doctor Strange gain 100 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "9.00",
                "mover_shaker": "1.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "3.49",
                "ZScore": "0.48",
                "winrate": "49.99",
                "pickrate": "26.42",
                "banrate": "0.58",
                "usage_trend": "Upward",
                "winrate_prev": "49.15",
                "pickrate_prev": "23.84",
                "banrate_prev": "24.68",
                "winrate_change": "2.00",
                "pickrate_change": "11.00",
                "banrate_change": "-98.00"
            },
            {
                "date": "1755216000",
                "rank": "24.00",
                "mover_shaker": "41.00",
                "rank_calc": "3.90",
                "mover_shaker_calc": "-208.07",
                "ZScore": "-6.13",
                "winrate": "49.15",
                "pickrate": "23.84",
                "banrate": "24.68",
                "usage_trend": "Upward",
                "winrate_prev": "48.99",
                "pickrate_prev": "19.83",
                "banrate_prev": "0.35",
                "winrate_change": "0.00",
                "pickrate_change": "20.00",
                "banrate_change": "6951.00"
            }
        ]
    },
    {
        "id": "1020",
        "name": "Mantis",
        "real_name": "Mantis",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/mantis-headbig-0.webp",
                "name": "Mantis",
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Mantis",
        "description": "Mantis uses her impressive mental abilities and her penchant for plant control to anchor any team she fights alongside. Her powers tap into a limitless flow of life energy, gently nourishing everything she touches.",
        "slug": "mantis",
        "team": [
            "Guardiansofthegalaxy"
        ],
        "difficulty": "1",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/mantis-square.webp",
        "image_transverse": "characters\/mantis-transverse.webp",
        "icon": "characters\/mantis-headbig.webp",
        "image": "characters\/mantis-portrait.webp",
        "logo_small": "characters\/mantis-logo.webp",
        "logo": "characters\/mantis-logo-small.webp",
        "skins": [
            "1020001",
            "1020100",
            "1020300",
            "1020800",
            "1020301",
            "1020500",
            "1020101",
            "1020302",
            "ps1020303",
            "ps1020304"
        ],
        "abilities": [
            {
                "id": 102071,
                "icon": "abilities\/1020\/102071.webp",
                "name": "Soul Resurgence",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Release energy around her while moving, providing <Buff>Healing Over Time<\/> and <Buff>Movement Boosts<\/> for surrounding allies. Excess healing converts to <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "15m spherical radius",
                    "Casting": "Persistent spell field that surrounds the caster",
                    "Duration": "8s",
                    "Energy Cost": "4300",
                    "Healing Amount": "150",
                    "Movement Boost": "3m\/s",
                    "Excess Healing\/Max Health Conversion": "150",
                    "Caster & Ally One-time Healing Amount": "200",
                    "Excess Healing\/Bonus Health Conversion": "100%"
                },
                "transformation_id": 0
            },
            {
                "id": 102011,
                "icon": "abilities\/1020\/102011.webp",
                "name": "Life Energy Blast",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire an energy thorn and regain one <Orange>Life Orb<\/> after a critical hit.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "15",
                    "Damage": "55 damage per round",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Fire Rate": "2.5 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "No falloff",
                    "Special Effect": "Critical hit generates 1 Life Orb",
                    "Projectile Speed": "150m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102061,
                "icon": "abilities\/1020\/102061.webp",
                "name": "Healing Flower",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume <Orange>Life Orbs<\/> to grant allies <Buff>Healing Over Time<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Targeted",
                    "Cooldown": "Consume 1 Life Orb",
                    "Duration": "8s (16s maximum duration)",
                    "Special Effect": "Healing Flower provides two types of healing effects: One-time Healing and Healing Over Time",
                    "One-time Healing Amount": "55",
                    "Healing Over Time Amount": "\n\t\t\t\t\t\t10 + 2.5% of the target's maximum Health per second\n\t\t\t\t\t\t"
                },
                "transformation_id": 0
            },
            {
                "id": 102051,
                "icon": "abilities\/1020\/102051.webp",
                "name": "Spore Slumber",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw a spore to <Debuff>Sedate<\/> the nearest enemy.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "3m spherical radius",
                    "Damage": "10",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Cooldown": "15s",
                    "Special Effect": "A Mantis illusions will manifest beside the sedated heroes. Allies can attack this illusion to awaken the affected hero",
                    "Illusion Health": "100",
                    "Sedation Duration": "3.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 102041,
                "icon": "abilities\/1020\/102041.webp",
                "name": "Allied Inspiration",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume <Orange>Life Orbs<\/> to grant allies a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "Consume 1 Life Orb",
                    "Duration": "8s (16s maximum duration)",
                    "Damage Boost": "12%"
                },
                "transformation_id": 0
            },
            {
                "id": 102031,
                "icon": "abilities\/1020\/102031.webp",
                "name": "Nature's Favor",
                "type": "Passive",
                "isCollab": false,
                "description": "Receive a <Buff>Movement Boost<\/> when not injured and <Orange>Healing Over Time<\/> when consuming <Buff>Life Orbs<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Duration": "8s",
                    "Healing Amount": "12.5 per second",
                    "Special Effect": "Consume Life Orbs to receive Healing Over Time",
                    "Out-of-Combat Movement Speed": "7.5m\/s",
                    "Time Required to Leave Combat": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 102091,
                "icon": "abilities\/1020\/102091.webp",
                "name": "Natural Anger",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume <Orange>Life Orbs<\/> to grant herself a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "F",
                    "Casting": "Instant Cast",
                    "Cooldown": "Consume 1 Life Orb",
                    "Duration": "8s (the duration cannot stack; repeatedly casting will only refresh the duration)",
                    "Damage Boost": "12%"
                },
                "transformation_id": 0
            },
            {
                "id": 102081,
                "icon": "abilities\/1020\/102081.webp",
                "name": "Nature's Soul",
                "type": "Normal",
                "isCollab": true,
                "description": "Adam Warlock enhances the rebirth power of {104300}{000003}{102000}, granting them the power of cocooned revival.",
                "transformation_id": 0
            },
            {
                "id": 102094,
                "icon": "abilities\/1020\/102094.webp",
                "name": "Heavenly Guardian",
                "type": "Passive",
                "isCollab": true,
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Wild Wall, which, when in <Orange>Flora Colossus<\/> state, restores health to random nearby allies. Loki's Rune Stones grant allies within <Orange>Regeneration Domain<\/> a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "10% Healing Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "3.00",
                "mover_shaker": "3.00",
                "rank_calc": "4.33",
                "mover_shaker_calc": "1.46",
                "ZScore": "0.33",
                "winrate": "54.69",
                "pickrate": "9.17",
                "banrate": "0.09",
                "usage_trend": "Downward",
                "winrate_prev": "56.03",
                "pickrate_prev": "11.74",
                "banrate_prev": "0.43",
                "winrate_change": "-2.00",
                "pickrate_change": "-22.00",
                "banrate_change": "-79.00"
            },
            {
                "date": "1755216000",
                "rank": "1.00",
                "mover_shaker": "39.00",
                "rank_calc": "4.45",
                "mover_shaker_calc": "-20.29",
                "ZScore": "-0.42",
                "winrate": "56.03",
                "pickrate": "11.74",
                "banrate": "0.43",
                "usage_trend": "Upward",
                "winrate_prev": "53.05",
                "pickrate_prev": "6.93",
                "banrate_prev": "0.05",
                "winrate_change": "6.00",
                "pickrate_change": "69.00",
                "banrate_change": "760.00"
            }
        ]
    },
    {
        "id": "1021",
        "name": "Hawkeye",
        "real_name": "Clint Barton",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/hawkeye-headbig-0.webp",
                "name": "Hawkeye",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Hawkeye",
        "description": "Despite his lack of superpowers, Hawkeye's unparalleled skills as a marksman have earned him a spot alongside earth's mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights! ",
        "slug": "hawkeye",
        "team": [
            "Avengers"
        ],
        "difficulty": "4",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/hawkeye-square.webp",
        "image_transverse": "characters\/hawkeye-transverse.webp",
        "icon": "characters\/hawkeye-headbig.webp",
        "image": "characters\/hawkeye-portrait.webp",
        "logo_small": "characters\/hawkeye-logo.webp",
        "logo": "characters\/hawkeye-logo-small.webp",
        "skins": [
            "1021001",
            "1021100",
            "1021300",
            "1021500",
            "1021501",
            "1021502",
            "1021101",
            "1021301"
        ],
        "abilities": [
            {
                "id": 102101,
                "icon": "abilities\/1021\/102101.webp",
                "name": "Skyward Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform a double jump in the direction of movement.",
                "additional_fields": {
                    "Key": "Space",
                    "Cooldown": "6s"
                },
                "transformation_id": 0
            },
            {
                "id": 102111,
                "icon": "abilities\/1021\/102111.webp",
                "name": "Archer's Focus",
                "type": "Passive",
                "isCollab": false,
                "description": "Aim at an enemy to improve focus, enhancing the damage inflicted by <Orange>Piercing Arrow<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Damage": "0 - 75 (Maximum damage is achieved after 0.9s of aiming)",
                    "Critical Hit": "Yes",
                    "Special Mechanic": "Apply bonus damage to the base damage of Piercing Arrow",
                    "Triggering Distance": "40m"
                },
                "transformation_id": 0
            },
            {
                "id": 102131,
                "icon": "abilities\/1021\/102131.webp",
                "name": "Piercing Arrow",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot a powerful arrow.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Infinite",
                    "Damage": "8.5 - 85 (Maximum damage is achieved after 0.9s of charging)",
                    "Casting": "Charged projectile with an arced trajectory",
                    "Critical Hit": "Yes",
                    "Projectile Speed": "120 - 180 m\/s (Maximum speed is achieved after 0.9s of charging)",
                    "Minimum Charge Time": "0.7s",
                    "Slow Rate While Charging": "-20%"
                },
                "transformation_id": 0
            },
            {
                "id": 102191,
                "icon": "abilities\/1021\/102191.webp",
                "name": "Ronin Slash",
                "type": "Normal",
                "isCollab": false,
                "description": "Swing the wakizashi to strike frontal enemies, deflecting all incoming <Orange>projectiles<\/>.",
                "additional_fields": {
                    "Key": "V",
                    "Casting": "Melee",
                    "Special Effect": "This ability cannot block explosions or effects created by projectiles on hit",
                    "Maximum Distance": "3m"
                },
                "transformation_id": 0
            },
            {
                "id": 102132,
                "icon": "abilities\/1021\/102132.webp",
                "name": "Blast Arrow",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot three explosive arrows.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "3m spherical radius",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Charges": "3",
                    "Cooldown": "0.5s",
                    "Spread Angle": "11.3°",
                    "Projectile Speed": "60 m\/s",
                    "Projectile Damage": "16",
                    "Spell Field Damage": "34",
                    "Blast Arrows Per Cast": "3",
                    "Slow Rate While Charging": "-20%"
                },
                "transformation_id": 0
            },
            {
                "id": 102161,
                "icon": "abilities\/1021\/102161.webp",
                "name": "Hypersonic Arrow",
                "type": "Normal",
                "isCollab": false,
                "description": "Shoot a Hypersonic Arrow, dealing two instances of damage to enemies in its path and inflicting them with <Debuff>Slow<\/>. This ability can <Debuff>Knock Down<\/> flying heroes.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Straight-line projectile that is accompanied by a spell field",
                    "Cooldown": "12s",
                    "Slow Rate": "-40%",
                    "First Damage": "55",
                    "Second Damage": "55",
                    "Slow Duration": "1s",
                    "Projectile Speed": "150 m\/s",
                    "First Spell Field Range": "Length: 3m, Width: 3m, Height: 2.7m",
                    "Second Spell Field Range": "Length: 3m, Width: 5m, Height: 1.6m"
                },
                "transformation_id": 0
            },
            {
                "id": 102171,
                "icon": "abilities\/1021\/102171.webp",
                "name": "Crescent Slash",
                "type": "Normal",
                "isCollab": false,
                "description": "Unsheathe a katana and slash forward, <Debuff>Launching Up<\/> hit enemies.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Damage": "40",
                    "Casting": "Melee",
                    "Cooldown": "12s",
                    "Maximum Distance": "8m"
                },
                "transformation_id": 0
            },
            {
                "id": 102181,
                "icon": "abilities\/1021\/102181.webp",
                "name": "Hunter's Sight",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Capture <Orange>Afterimages<\/> of enemies in his view. Damage dealt to an <Orange>Afterimage<\/> is transferred to the corresponding enemy.",
                "additional_fields": {
                    "Key": "Q",
                    "Duration": "10s",
                    "Energy Cost": "3100",
                    "Special Mechanic": "\n\t\t\t\t\t\tWhile Hunter's Sight is active, bow draw speed is increased\n\t\t\t\t\t\t",
                    "Afterimage Duration": "3s",
                    "Afterimage Generation Interval": "0.5s",
                    "\n\t\t\t\t\t\tDraw Speed Boost Multiplier\n\t\t\t\t\t\t": "1.5"
                },
                "transformation_id": 0
            },
            {
                "id": 102192,
                "icon": "abilities\/1021\/102192.webp",
                "name": "Supersensory Vision",
                "type": "Normal",
                "isCollab": true,
                "description": "Hawkeye can share his Hunter's Sight with Black Widow, enabling her to catch sight of and damage afterimages of enemies.",
                "transformation_id": 0
            },
            {
                "id": 102193,
                "icon": "abilities\/1021\/102193.webp",
                "name": "Ice Arrow",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow grants Winter's Chill to Hawkeye and Iron Fist. Hawkeye can shoot an <Orange>Ice Arrow<\/> that <Debuff>Stuns<\/> enemies if it travels a certain distance; otherwise, it <Debuff>Slows<\/> the target. The farther the arrow flies, the more damage it deals. When Iron Fist activates <Orange>Harmony Recovery<\/>, he can heal nearby allies with <Orange>Lunar Chi<\/>.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "Length: 1m, Width: 1m, Height: 1m",
                    "Casting": "Straight-line projectile that is accompanied by a spell field",
                    "Cooldown": "20s",
                    "Slow Rate": "60%",
                    "Slow Duration": "1s",
                    "Stun Duration": "0.8s",
                    "Ability Damage": "Spell Field Damage: Start at 25, and increase with distance, reaching a maximum of 100 at 30m",
                    "Projectile Speed": "100 m\/s",
                    "Maximum Stun Range": "30m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "39.00",
                "mover_shaker": "31.00",
                "rank_calc": "3.54",
                "mover_shaker_calc": "-0.43",
                "ZScore": "0.19",
                "winrate": "45.33",
                "pickrate": "4.66",
                "banrate": "0.29",
                "usage_trend": "Downward",
                "winrate_prev": "48.79",
                "pickrate_prev": "11.35",
                "banrate_prev": "1.04",
                "winrate_change": "-7.00",
                "pickrate_change": "-59.00",
                "banrate_change": "-72.00"
            },
            {
                "date": "1755216000",
                "rank": "35.00",
                "mover_shaker": "35.00",
                "rank_calc": "3.77",
                "mover_shaker_calc": "-1.59",
                "ZScore": "0.15",
                "winrate": "48.79",
                "pickrate": "11.35",
                "banrate": "1.04",
                "usage_trend": "Upward",
                "winrate_prev": "44.73",
                "pickrate_prev": "4.25",
                "banrate_prev": "0.32",
                "winrate_change": "9.00",
                "pickrate_change": "167.00",
                "banrate_change": "225.00"
            }
        ]
    },
    {
        "id": "1022",
        "name": "Captain America",
        "real_name": "Steven \"steve\" Rogers",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/captain-america-headbig-0.webp",
                "name": "Captain America",
                "health": "575",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Captain America",
        "description": "Enhanced by the Super-Soldier Serum, Steven \"Steve\" Rogers uses his Vibranium shield and extensive combat training to confront any threat to justice. When Captain America rallies his troops, a wave of courage sweeps across the battlefield!",
        "slug": "captain-america",
        "team": [
            "Avengers"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/captain-america-square.webp",
        "image_transverse": "characters\/captain-america-transverse.webp",
        "icon": "characters\/captain-america-headbig.webp",
        "image": "characters\/captain-america-portrait.webp",
        "logo_small": "characters\/captain-america-logo.webp",
        "logo": "characters\/captain-america-logo-small.webp",
        "skins": [
            "1022001",
            "1022300",
            "1022100",
            "1022801",
            "1022501",
            "1022500",
            "1022502",
            "1022503"
        ],
        "abilities": [
            {
                "id": 102235,
                "icon": "abilities\/1022\/102235.webp",
                "name": "Sentinel Strike",
                "type": "Weapon",
                "isCollab": false,
                "description": "Get up close to strike enemies. Landing the second hit enables a shield throw that can ricochet four times.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Up to 4 throws",
                    "Damage": "Melee Attack Damage: 40, Flying Shield Damage: 45",
                    "Casting": "Change Form",
                    "Melee Range": "4m",
                    "Critical Hit": "No",
                    "Special Effect": "Automatically target enemies near the crosshair",
                    "Attack Interval": "Melee 1st Hit: 0.4s, Melee 2nd Hit: 0.5s, Flying Shield 1st Hit: 0.5s, Flying Shield 2nd Hit: 0.57s",
                    "Max Flying Distance": "25m",
                    "Shield Flying Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102241,
                "icon": "abilities\/1022\/102241.webp",
                "name": "Living Legend",
                "type": "Normal",
                "isCollab": false,
                "description": "Raise the shield to deflect incoming <Orange>Projectiles<\/>, sending them ricocheting in random directions.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Channeled",
                    "Cooldown": "1s",
                    "Maximum Shield Value": "350",
                    "Recovery Shield Value": "50\/s",
                    "Ricochet Damage Falloff": "50%",
                    "Cooldown After Destroyed": "5s",
                    "Delayed Recovery After Release": "4s"
                },
                "transformation_id": 0
            },
            {
                "id": 102251,
                "icon": "abilities\/1022\/102251.webp",
                "name": "Leading Dash",
                "type": "Normal",
                "isCollab": false,
                "description": "Boost speed and enable <Orange>Fearless Leap<\/> to leap into the air.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Channeled",
                    "Movement Boost": "33.40%",
                    "Fearless Leap Height": "5m"
                },
                "transformation_id": 0
            },
            {
                "id": 102253,
                "icon": "abilities\/1022\/102253.webp",
                "name": "Super-soldier Slam",
                "type": "Normal",
                "isCollab": false,
                "description": "Slam down from the sky onto the targeted area, <Debuff>Launching Up<\/> enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "30",
                    "Casting": "Targeted",
                    "Cooldown": "12s",
                    "Maximum Distance": "20m (horizontal)"
                },
                "transformation_id": 0
            },
            {
                "id": 102261,
                "icon": "abilities\/1022\/102261.webp",
                "name": "Vibranium Energy Saw",
                "type": "Normal",
                "isCollab": false,
                "description": "Hurl the energy-charged shield to strike enemies in a path.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "Start at 70, with a 20% reduction for each ricochet",
                    "Casting": "Single-cast projectile that can ricochet",
                    "Cooldown": "8s",
                    "Maximum Distance": "25m",
                    "Projectile Speed": "80 m\/s",
                    "Number of Ricochets": "3"
                },
                "transformation_id": 0
            },
            {
                "id": 102271,
                "icon": "abilities\/1022\/102271.webp",
                "name": "Freedom Charge",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Shield held high, carve a path forward, granting both himself and allies along the path continuous <Buff>Bonus Health<\/> and <Buff>Movement Boosts<\/>. Using <Orange>Living Legend<\/> and <Orange>Leading Dash<\/> while this ability is active can <Debuff>Launch Up<\/> enemies.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "A spherical spell field with a 4m radius enveloping the caster, and a spell area with a width of 4m along the path",
                    "Casting": "Activation",
                    "Energy Cost": "3100",
                    "Movement Boost": "Grant a 30% Movement Boost to both yourself and your allies",
                    "Spell Area Duration": "5s",
                    "Health Recovery Rate": "Cast to gain 150 Bonus Health and grant allies 100 Bonus Health. Every second afterward, gain 100 Bonus Health and grant allies 60 Bonus Health",
                    "Spell Field Duration": "10s"
                },
                "transformation_id": 0
            },
            {
                "id": 102281,
                "icon": "abilities\/1022\/102281.webp",
                "name": "Charged Aegis",
                "type": "Normal",
                "isCollab": true,
                "description": "Thor infuses <Orange>Thorforce<\/> into {101500}{000003}{102200}, granting them an electrifying enhancement. {101501}{102201}",
                "transformation_id": 0
            },
            {
                "id": 102236,
                "icon": "abilities\/1022\/102236.webp",
                "name": "Liberty Rush",
                "type": "Normal",
                "isCollab": false,
                "description": "Raise the shield and charge forward.",
                "additional_fields": {
                    "Key": "F",
                    "Damage": "30",
                    "Casting": "Single-cast forward dash",
                    "Cooldown": "10s",
                    "Dash Distance": "12m"
                },
                "transformation_id": 0
            },
            {
                "id": 102292,
                "icon": "abilities\/1022\/102292.webp",
                "name": "Captain's Spirit",
                "type": "Normal",
                "isCollab": true,
                "description": "Inspired by Captain America's resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to damage nearby foes and grant <Buff>Bonus Health<\/> to allies within range. Captain America and Winter Soldier can interact with each other once both parties confirm. The duo then collides and unleashes a shockwave that damages and <Debuff>slows<\/> enemies.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Captain America gain 100 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "8.00",
                "mover_shaker": "5.00",
                "rank_calc": "4.12",
                "mover_shaker_calc": "1.23",
                "ZScore": "0.32",
                "winrate": "52.87",
                "pickrate": "9.63",
                "banrate": "0.81",
                "usage_trend": "Downward",
                "winrate_prev": "47.88",
                "pickrate_prev": "46.19",
                "banrate_prev": "1.07",
                "winrate_change": "10.00",
                "pickrate_change": "-79.00",
                "banrate_change": "-24.00"
            },
            {
                "date": "1755216000",
                "rank": "5.00",
                "mover_shaker": "1.00",
                "rank_calc": "4.24",
                "mover_shaker_calc": "4.65",
                "ZScore": "0.34",
                "winrate": "47.88",
                "pickrate": "46.19",
                "banrate": "1.07",
                "usage_trend": "Upward",
                "winrate_prev": "52.31",
                "pickrate_prev": "9.48",
                "banrate_prev": "0.73",
                "winrate_change": "-8.00",
                "pickrate_change": "387.00",
                "banrate_change": "47.00"
            }
        ]
    },
    {
        "id": "1023",
        "name": "Rocket Raccoon",
        "real_name": "Rocket Raccoon",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/rocket-raccoon-headbig-0.webp",
                "name": "Rocket Raccoon",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Rocket Raccoon",
        "description": "Rocket may not look like a tech genius or an expert tactician, but anyone who's ever made his hit list has quickly regretted underestimating him. This savvy space soldier is equally eager to boost his teammates and to collect bounties on his foes.",
        "slug": "rocket-raccoon",
        "team": [
            "Guardiansofthegalaxy"
        ],
        "difficulty": "1",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/rocket-raccoon-square.webp",
        "image_transverse": "characters\/rocket-raccoon-transverse.webp",
        "icon": "characters\/rocket-raccoon-headbig.webp",
        "image": "characters\/rocket-raccoon-portrait.webp",
        "logo_small": "characters\/rocket-raccoon-logo.webp",
        "logo": "characters\/rocket-raccoon-logo-small.webp",
        "skins": [
            "1023001",
            "1023100",
            "1023300",
            "1023801",
            "1023301",
            "1023302",
            "ps1023303",
            "ps1023304",
            "1023500",
            "1023101"
        ],
        "abilities": [
            {
                "id": 102301,
                "icon": "abilities\/1023\/102301.webp",
                "name": "Wild Crawl",
                "type": "Passive",
                "isCollab": false,
                "description": "Hold {Jump} to run on a wall.",
                "additional_fields": {
                    "Key": "Space",
                    "Wall-Crawling Speed": "10m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102321,
                "icon": "abilities\/1023\/102321.webp",
                "name": "Bombard Mode",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire energy projectiles that deal damage.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "45",
                    "Damage": "16 damage per round",
                    "Casting": "Rapid-fire, delayed projectile",
                    "Fire Rate": "12.05 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 10m, decreasing to 40% at 20m",
                    "Projectile Speed": "150 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102331,
                "icon": "abilities\/1023\/102331.webp",
                "name": "Jetpack Dash",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Cooldown": "2 charges, with each charge taking 10s to recharge",
                    "Dash Distance": "8m",
                    "Dash Direction": "Crosshair Direction"
                },
                "transformation_id": 0
            },
            {
                "id": 102341,
                "icon": "abilities\/1023\/102341.webp",
                "name": "B.r.b.",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Battle Rebirth Beacon that revives a fallen ally and periodically produces <Orange>armor packs<\/> and <Orange>rocket jet packs<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Summons",
                    "Cooldown": "45s. You can reclaim the beacon by pressing E. When reclaimed, the cooldown will be reduced based on the beacon's remaining health. If you reclaim a full-health beacon, the minimum cooldown will be 5s",
                    "Duration": "300s",
                    "Special Effect": "Generate an item every 3s, including Armor Pack and Rocket Boots",
                    "Maximum Revive Distance": "50m",
                    "Bonus Health From Armor Pack": "25"
                },
                "transformation_id": 0
            },
            {
                "id": 102351,
                "icon": "abilities\/1023\/102351.webp",
                "name": "C.y.a.",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Deploy a Cosmic Yarn Amplifier that grants allies a <Buff>Damage Boost<\/>, while continuously providing them with <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "20m radius",
                    "Casting": "Targeted ability that, when activated, summons a creature and detects allies within the area.",
                    "Duration": "12s",
                    "Energy Cost": "4000",
                    "Bonus Health": "100\/s",
                    "Damage Boost": "40%",
                    "Special Effect": "During the ability's duration, linked allies will receive an additional 100 Bonus Health points per second, capping at 150. After breaking the link, this bonus starts to falloff after 1 second at a rate of 75 per\/s",
                    "Summons' Health": "800",
                    "Bonus Max Health": "150"
                },
                "transformation_id": 0
            },
            {
                "id": 102322,
                "icon": "abilities\/1023\/102322.webp",
                "name": "Repair Mode",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot bouncing spheres to heal allies. Directly hitting an ally provides extra healing.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Ammo": "8",
                    "Range": "5m spherical radius",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Duration": "5s",
                    "Fire Rate": "2 rounds per second",
                    "Special Effect": "One-time healing for allies when projectile hits them，Bouncing Spheres will bounce off surfaces upon contact, with a maximum of 10 bounces. When they approach injured allies, their speed will reduce",
                    "Projectile Speed": "60 m\/s",
                    "Healing Amount (Ally)": "50\/s",
                    "Healing Amount (Self)": "30\/s",
                    "One-time Healing Amount": "55",
                    "Projectile Speed Reduction": "7 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102332,
                "icon": "abilities\/1023\/102332.webp",
                "name": "Flying Ace",
                "type": "Passive",
                "isCollab": false,
                "description": "Hold {Jump} to fall slowly.",
                "additional_fields": {
                    "Key": "Space",
                    "Descending Speed": "3.5m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102361,
                "icon": "abilities\/1023\/102361.webp",
                "name": "Old Friends",
                "type": "Normal",
                "isCollab": true,
                "description": "{104700}{000003}{102300} can ride on Groot's shoulders, receiving <Buff>Damage Reduction<\/>.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "Up to 12m",
                    "Casting": "Targeted",
                    "Special Effect": "Pressing SHIFT will exit the Team-Up status with Groot",
                    "Damage Reduction": "0.35"
                },
                "transformation_id": 0
            },
            {
                "id": 102381,
                "icon": "abilities\/1023\/102381.webp",
                "type": "Normal",
                "isCollab": true,
                "additional_fields": {
                    "Health": "250",
                    "Movement Speed": "6 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102382,
                "icon": "abilities\/1023\/102382.webp",
                "name": "Ammo Invention",
                "type": "Normal",
                "isCollab": true,
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device's range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 102392,
                "icon": "abilities\/1023\/102392.webp",
                "name": "Rocket Network",
                "type": "Normal",
                "isCollab": true,
                "description": "Rocket Raccoon upgrades his <Orange>B.R.B.<\/>, which now creates <Orange>Cyber-Webs<\/> upon placement and periodically spawns <Orange>Arachno-Mines<\/> and <Orange>Spider-Drones<\/>. Peni Parker can also deploy an <Orange>Armored Spider-Nest<\/> that drops <Orange>Armor Packs<\/> for <Buff>Bonus Health<\/>. Star-Lord gets a teleport to its deployment point from anywhere on the map.",
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "1.00",
                "mover_shaker": "6.00",
                "rank_calc": "4.41",
                "mover_shaker_calc": "1.22",
                "ZScore": "0.31",
                "winrate": "54.24",
                "pickrate": "26.81",
                "banrate": "1.03",
                "usage_trend": "Upward",
                "winrate_prev": "53.32",
                "pickrate_prev": "24.81",
                "banrate_prev": "1.35",
                "winrate_change": "2.00",
                "pickrate_change": "8.00",
                "banrate_change": "-24.00"
            },
            {
                "date": "1755216000",
                "rank": "3.00",
                "mover_shaker": "10.00",
                "rank_calc": "4.33",
                "mover_shaker_calc": "0.49",
                "ZScore": "0.21",
                "winrate": "53.32",
                "pickrate": "24.81",
                "banrate": "1.35",
                "usage_trend": "Downward",
                "winrate_prev": "53.68",
                "pickrate_prev": "27.20",
                "banrate_prev": "1.84",
                "winrate_change": "-1.00",
                "pickrate_change": "-9.00",
                "banrate_change": "-27.00"
            }
        ]
    },
    {
        "id": "1024",
        "name": "Hela",
        "real_name": "Hela",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/hela-headbig-0.webp",
                "name": "Hela",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Hela",
        "description": "As the Goddess of Death, Hela wields supreme control over the fallen souls residing in Hel. With a haunting whisper and a murder of crows, the queen of the underworld gracefully reaps the souls of her enemies without an ounce of mercy.",
        "slug": "hela",
        "team": [
            "Godsofasgard",
            "Villains"
        ],
        "difficulty": "3",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/hela-square.webp",
        "image_transverse": "characters\/hela-transverse.webp",
        "icon": "characters\/hela-headbig.webp",
        "image": "characters\/hela-portrait.webp",
        "logo_small": "characters\/hela-logo.webp",
        "logo": "characters\/hela-logo-small.webp",
        "skins": [
            "1024001",
            "1024100",
            "1024301",
            "1024500",
            "1024101",
            "1024302",
            "1024303",
            "1024304"
        ],
        "abilities": [
            {
                "id": 102431,
                "icon": "abilities\/1024\/102431.webp",
                "name": "Nightsword Thorn",
                "type": "Weapon",
                "isCollab": false,
                "description": "Throw Nightsword Thorns.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "10",
                    "Damage": "70",
                    "Casting": "Single-cast direct hit",
                    "Fire Rate": "2 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 18m, decreasing to 80% at 30m"
                },
                "transformation_id": 0
            },
            {
                "id": 102411,
                "icon": "abilities\/1024\/102411.webp",
                "name": "Nastrond Crowstorm",
                "type": "Passive",
                "isCollab": false,
                "description": "Defeating an enemy will generate a Nastrond Crow, exploding after a duration.",
                "additional_fields": {
                    "Key": "Passive",
                    "Delay": "1.8s",
                    "Range": "5m spherical radius",
                    "Damage": "80"
                },
                "transformation_id": 0
            },
            {
                "id": 102441,
                "icon": "abilities\/1024\/102441.webp",
                "name": "Piercing Night",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire multiple Nightsword Thorns that detonate after a delay.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m spherical radius",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Cooldown": "8s",
                    "Special Effect": "Projectiles stick to enemies on hit",
                    "Explosion Delay": "3s",
                    "Projectile Speed": "80 m\/s",
                    "Projectile Damage": "10",
                    "Spell Field Damage": "35 damage per round",
                    "Number of Projectiles": "4"
                },
                "transformation_id": 0
            },
            {
                "id": 102451,
                "icon": "abilities\/1024\/102451.webp",
                "name": "Astral Flock",
                "type": "Normal",
                "isCollab": false,
                "description": "Transform into a Nastrond Crow to glide forth, press again to undo the transformation. Gain <Buff>Bonus Health<\/> when the transformation ends.",
                "additional_fields": {
                    "Key": "Shift",
                    "Casting": "Dash",
                    "Cooldown": "15s",
                    "Dash Speed": "15 m\/s",
                    "Bonus Health": "25",
                    "Dash Distance": "18m",
                    "Special Effect": "Shapeshift into a Nastrond Crow and gain invincibility"
                },
                "transformation_id": 0
            },
            {
                "id": 102461,
                "icon": "abilities\/1024\/102461.webp",
                "name": "Soul Drainer",
                "type": "Normal",
                "isCollab": false,
                "description": "Project an explosive Hel sphere to <Debuff>Stun<\/> nearby enemies and pull them into the blast zone.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "3m spherical radius",
                    "Damage": "1",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Cooldown": "10s",
                    "Stun Duration": "0.3s",
                    "Projectile Speed": "40 m\/s",
                    "Spell Field Damage": "40"
                },
                "transformation_id": 0
            },
            {
                "id": 102471,
                "icon": "abilities\/1024\/102471.webp",
                "name": "Goddess Of Death",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Soar into the sky and unleash Nastrond Crows from each hand at will.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Duration": "10s",
                    "Fire Rate": "1 rounds per second",
                    "Energy Cost": "4000",
                    "Explosion Range": "6m spherical radius",
                    "Explosion Damage": "125",
                    "Projectile Speed": "80 m\/s",
                    "Nastrond Crow Health": "1000",
                    "Explosion Damage Falloff": "32% falloff at 4m."
                },
                "transformation_id": 0
            },
            {
                "id": 102481,
                "icon": "abilities\/1024\/102481.webp",
                "name": "Hel's Descent",
                "type": "Passive",
                "isCollab": false,
                "description": "HOLD {Jump} to fall slowly.",
                "additional_fields": {
                    "Key": "Space",
                    "Descending Speed": "3.5 m\/s",
                    "Horizontal Movement Speed": "6 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102402,
                "icon": "abilities\/1024\/102402.webp",
                "name": "Queen Of Hel",
                "type": "Normal",
                "isCollab": true,
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect Thor in the respawn phase, or grant him <Buff>Bonus Health<\/> if he is still alive.",
                "transformation_id": 0
            },
            {
                "id": 102494,
                "icon": "abilities\/1024\/102494.webp",
                "name": "Hel Tendrils",
                "type": "Normal",
                "isCollab": true,
                "description": "Venom shares his symbiotes with Jeff and Hela. Jeff's <Orange>Guardian of the Deep<\/> links with nearby allies for continuous healing, releasing a large healing burst that converts any excess into <Buff>Bonus Health<\/> when it ends. Hela's <Orange>Hel Tendrils<\/> unleash a symbiotic Hel Sphere that pulls in nearby enemies and links them, <Debuff>slowing<\/> those that try to escape.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "3m spherical radius spell field",
                    "Cooldown": "10s",
                    "Slow Effect": "Slow the enemies by 20% at the center, increasing to 40% at 2.5m from the center.",
                    "Stun Duration": "0.3s",
                    "Projectile Speed": "40 m\/s",
                    "Spell Field Damage": "40",
                    "Maximum Linking Distance": "5m",
                    "Maximum Linking Duration": "2s"
                },
                "transformation_id": 0
            },
            {
                "id": 102495,
                "icon": "abilities\/1024\/102495.webp",
                "name": "Death Knell",
                "type": "Normal",
                "isCollab": true,
                "description": "Hela channels energy of the undead to empower Namor. When Namor strikes with his trident, a <Orange>spectral water column<\/> erupts at the target area. Enemies hit are <Debuff>Slowed<\/> and suffer <Debuff>Reduced Healing<\/>. Whenever Hela or Namor assist in a KO, an invulnerable <Orange>Undead Monstro<\/> spawns at the fallen enemy's position, automatically attacking the nearest foe for a short time before vanishing.",
                "additional_fields": {
                    "Key": "Passive",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 50% at 40m",
                    "Undead Monstro Damage": "12",
                    "Undead Monstro Duration": "3s",
                    "Undead Monstro Fire Rate": "0.5s per hit"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "27.00",
                "mover_shaker": "10.00",
                "rank_calc": "3.88",
                "mover_shaker_calc": "0.84",
                "ZScore": "0.29",
                "winrate": "48.33",
                "pickrate": "10.55",
                "banrate": "0.91",
                "usage_trend": "Downward",
                "winrate_prev": "52.74",
                "pickrate_prev": "12.73",
                "banrate_prev": "19.14",
                "winrate_change": "-8.00",
                "pickrate_change": "-17.00",
                "banrate_change": "-95.00"
            },
            {
                "date": "1755216000",
                "rank": "11.00",
                "mover_shaker": "40.00",
                "rank_calc": "4.06",
                "mover_shaker_calc": "-34.03",
                "ZScore": "-0.84",
                "winrate": "52.74",
                "pickrate": "12.73",
                "banrate": "19.14",
                "usage_trend": "Upward",
                "winrate_prev": "48.37",
                "pickrate_prev": "9.22",
                "banrate_prev": "1.45",
                "winrate_change": "9.00",
                "pickrate_change": "38.00",
                "banrate_change": "1220.00"
            }
        ]
    },
    {
        "id": "1025",
        "name": "Cloak & Dagger",
        "real_name": "Tyrone Johnson & Tandy Bowen",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/cloak-dagger-headbig-0.webp",
                "name": "Cloak & Dagger"
            },
            {
                "id": 1,
                "icon": "characters\/cloak-dagger-headbig-1.webp",
                "name": "Dagger"
            },
            {
                "id": 2,
                "icon": "characters\/cloak-dagger-headbig-2.webp",
                "name": "Cloak"
            }
        ],
        "en_name": "Cloak & Dagger",
        "description": "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak & Dagger fight as a united front, dealing havoc and healing allies across the arena.",
        "slug": "cloak-dagger",
        "team": [
            "Marvelknights"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/cloak-dagger-square.webp",
        "image_transverse": "characters\/cloak-dagger-transverse.webp",
        "icon": "characters\/cloak-dagger-headbig.webp",
        "image": "characters\/cloak-dagger-portrait.webp",
        "logo_small": "characters\/cloak-dagger-logo.webp",
        "logo": "characters\/cloak-dagger-logo-small.webp",
        "skins": [
            "1025001",
            "1025100",
            "1025300",
            "1025500",
            "1025301",
            "1025302"
        ],
        "abilities": [
            {
                "id": 102511,
                "icon": "abilities\/1025\/102511.webp",
                "name": "Lightforce Dagger",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a bouncing <Orange>Lightforce Dagger<\/> to damage enemies and heal nearby allies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "12",
                    "Range": "8m spherical radius",
                    "Damage": "18 damage per round",
                    "Casting": "Single-cast projectile that generates a spell area upon impact",
                    "Fire Rate": "2.27 hits per second",
                    "Critical Hit": "No",
                    "Special Effect": "The projectile features an attraction effect, pulling in the closest target to the crosshair and creating a spell field upon impact. This spell field provides healing effects",
                    "Healing Per Hit": "16 per hit",
                    "Area of Effect Healing": "16 per hit"
                },
                "transformation_id": 0
            },
            {
                "id": 102541,
                "icon": "abilities\/1025\/102541.webp",
                "name": "Dagger Storm",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a volley of daggers, creating a <Buff>Healing-Over-Time<\/> field in the impact area.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "5m spherical radius",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Cooldown": "12s",
                    "Duration": "6s",
                    "Healing Amount": "55\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102551,
                "icon": "abilities\/1025\/102551.webp",
                "name": "Shadow's Embrace",
                "type": "Normal",
                "isCollab": false,
                "description": "Switch to Cloak.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast"
                },
                "transformation_id": 0
            },
            {
                "id": 102561,
                "icon": "abilities\/1025\/102561.webp",
                "name": "Light Explosion",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Veil of Lightforce to heal allies upon touch and grant them a <Buff>Healing Boost<\/>.",
                "transformation_id": 0
            },
            {
                "id": 102581,
                "icon": "abilities\/1025\/102581.webp",
                "name": "Darkforce Cloak",
                "type": "Weapon",
                "isCollab": false,
                "description": "Inflict continuous damage to an enemy.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "∞",
                    "Range": "20m",
                    "Damage": "80\/s",
                    "Casting": "Cylindrical Spell Field",
                    "Critical Hit": "No",
                    "Special Effect": "Attacks will target the nearest enemy to the crosshair, dealing damage"
                },
                "transformation_id": 0
            },
            {
                "id": 102591,
                "icon": "abilities\/1025\/102591.webp",
                "name": "Dark Teleportation",
                "type": "Normal",
                "isCollab": false,
                "description": "Enshroud nearby allies in the Darkforce Dimension and grant them <Buff>Phased<\/>, making them untargetable and invisible to enemies and granting them a <Buff>Movement Boost<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "10m spherical radius",
                    "Casting": "Persistent Spell Field",
                    "Cooldown": "12s",
                    "Duration": "2s",
                    "Special Effect": "Allies within the area gain Invisibility and Movement Boost"
                },
                "transformation_id": 0
            },
            {
                "id": 102562,
                "icon": "abilities\/1025\/102562.webp",
                "name": "Terror Cape",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Veil of Darkforce to damage enemies upon touch, applying <Debuff>Blind<\/> to narrow their sight and <Debuff>Vulnerability<\/> to amplify damage received.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "Width: 6m, Height: 4.5m",
                    "Damage": "55",
                    "Casting": "Spell Field",
                    "Cooldown": "12s",
                    "Vulnerability": "28%",
                    "Movement Speed": "20m\/s",
                    "Special Effect": "The spell field advances along the casting path",
                    "Maximum Distance": "25m",
                    "Blinding Duration": "1.5s",
                    "Vulnerability Duration": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 102571,
                "icon": "abilities\/1025\/102571.webp",
                "name": "Eternal Bond",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Perform four rapid dashes, healing allies and damaging enemies along the path.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "A cylindrical spell field with a 4m radius and 15m in length",
                    "Damage": "30\/s",
                    "Casting": "Persistent Spell Field",
                    "Duration": "13s",
                    "Energy Cost": "4500",
                    "Healing Amount": "250\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102596,
                "icon": "abilities\/1025\/102596.webp",
                "name": "From Shadow To Light",
                "type": "Normal",
                "isCollab": true,
                "description": "Cloak & Dagger can inject light and dark energy into Moon Knight and Blade to create a Light & Dark Realm where Moon Knight and Blade can become <Buff>invisible<\/> and gain <Buff>Healing Over Time<\/>. Blade can unleash Swift Strike toward a targeted enemy.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-up Bonus": "15% Healing Boost"
                },
                "transformation_id": 0
            },
            {
                "id": 102511,
                "icon": "abilities\/1025\/102511.webp",
                "name": "Lightforce Dagger",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a bouncing <Orange>Lightforce Dagger<\/> to damage enemies and heal nearby allies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "12",
                    "Range": "8m spherical radius",
                    "Damage": "18 damage per round",
                    "Casting": "Single-cast projectile that generates a spell area upon impact",
                    "Fire Rate": "2.27 hits per second",
                    "Critical Hit": "No",
                    "Special Effect": "The projectile features an attraction effect, pulling in the closest target to the crosshair and creating a spell field upon impact. This spell field provides healing effects",
                    "Healing Per Hit": "16 per hit",
                    "Area of Effect Healing": "16 per hit"
                },
                "transformation_id": 1
            },
            {
                "id": 102541,
                "icon": "abilities\/1025\/102541.webp",
                "name": "Dagger Storm",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a volley of daggers, creating a <Buff>Healing-Over-Time<\/> field in the impact area.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "5m spherical radius",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Cooldown": "12s",
                    "Duration": "6s",
                    "Healing Amount": "55\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 102551,
                "icon": "abilities\/1025\/102551.webp",
                "name": "Shadow's Embrace",
                "type": "Normal",
                "isCollab": false,
                "description": "Switch to Cloak.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast"
                },
                "transformation_id": 1
            },
            {
                "id": 102561,
                "icon": "abilities\/1025\/102561.webp",
                "name": "Light Explosion",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Veil of Lightforce to heal allies upon touch and grant them a <Buff>Healing Boost<\/>.",
                "transformation_id": 1
            },
            {
                "id": 102571,
                "icon": "abilities\/1025\/102571.webp",
                "name": "Eternal Bond",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Perform four rapid dashes, healing allies and damaging enemies along the path.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "A cylindrical spell field with a 4m radius and 15m in length",
                    "Damage": "30\/s",
                    "Casting": "Persistent Spell Field",
                    "Duration": "13s",
                    "Energy Cost": "4500",
                    "Healing Amount": "250\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 102596,
                "icon": "abilities\/1025\/102596.webp",
                "name": "From Shadow To Light",
                "type": "Normal",
                "isCollab": true,
                "description": "Cloak & Dagger can inject light and dark energy into Moon Knight and Blade to create a Light & Dark Realm where Moon Knight and Blade can become <Buff>invisible<\/> and gain <Buff>Healing Over Time<\/>. Blade can unleash Swift Strike toward a targeted enemy.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-up Bonus": "15% Healing Boost"
                },
                "transformation_id": 1
            },
            {
                "id": 102581,
                "icon": "abilities\/1025\/102581.webp",
                "name": "Darkforce Cloak",
                "type": "Weapon",
                "isCollab": false,
                "description": "Inflict continuous damage to an enemy.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "∞",
                    "Range": "20m",
                    "Damage": "80\/s",
                    "Casting": "Cylindrical Spell Field",
                    "Critical Hit": "No",
                    "Special Effect": "Attacks will target the nearest enemy to the crosshair, dealing damage"
                },
                "transformation_id": 2
            },
            {
                "id": 102591,
                "icon": "abilities\/1025\/102591.webp",
                "name": "Dark Teleportation",
                "type": "Normal",
                "isCollab": false,
                "description": "Enshroud nearby allies in the Darkforce Dimension and grant them <Buff>Phased<\/>, making them untargetable and invisible to enemies and granting them a <Buff>Movement Boost<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "10m spherical radius",
                    "Casting": "Persistent Spell Field",
                    "Cooldown": "12s",
                    "Duration": "2s",
                    "Special Effect": "Allies within the area gain Invisibility and Movement Boost"
                },
                "transformation_id": 2
            },
            {
                "id": 102552,
                "icon": "abilities\/1025\/102552.webp",
                "name": "Light's Embrace",
                "type": "Normal",
                "isCollab": false,
                "description": "Switch to Dagger.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast"
                },
                "transformation_id": 2
            },
            {
                "id": 102562,
                "icon": "abilities\/1025\/102562.webp",
                "name": "Terror Cape",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy a Veil of Darkforce to damage enemies upon touch, applying <Debuff>Blind<\/> to narrow their sight and <Debuff>Vulnerability<\/> to amplify damage received.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "Width: 6m, Height: 4.5m",
                    "Damage": "55",
                    "Casting": "Spell Field",
                    "Cooldown": "12s",
                    "Vulnerability": "28%",
                    "Movement Speed": "20m\/s",
                    "Special Effect": "The spell field advances along the casting path",
                    "Maximum Distance": "25m",
                    "Blinding Duration": "1.5s",
                    "Vulnerability Duration": "3s"
                },
                "transformation_id": 2
            },
            {
                "id": 102571,
                "icon": "abilities\/1025\/102571.webp",
                "name": "Eternal Bond",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Perform four rapid dashes, healing allies and damaging enemies along the path.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "A cylindrical spell field with a 4m radius and 15m in length",
                    "Damage": "30\/s",
                    "Casting": "Persistent Spell Field",
                    "Duration": "13s",
                    "Energy Cost": "4500",
                    "Healing Amount": "250\/s"
                },
                "transformation_id": 2
            },
            {
                "id": 102596,
                "icon": "abilities\/1025\/102596.webp",
                "name": "From Shadow To Light",
                "type": "Normal",
                "isCollab": true,
                "description": "Cloak & Dagger can inject light and dark energy into Moon Knight and Blade to create a Light & Dark Realm where Moon Knight and Blade can become <Buff>invisible<\/> and gain <Buff>Healing Over Time<\/>. Blade can unleash Swift Strike toward a targeted enemy.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-up Bonus": "15% Healing Boost"
                },
                "transformation_id": 2
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "7.00",
                "mover_shaker": "38.00",
                "rank_calc": "4.14",
                "mover_shaker_calc": "-3.15",
                "ZScore": "-0.01",
                "winrate": "48.01",
                "pickrate": "49.22",
                "banrate": "1.07",
                "usage_trend": "Upward",
                "winrate_prev": "49.78",
                "pickrate_prev": "21.45",
                "banrate_prev": "0.40",
                "winrate_change": "-4.00",
                "pickrate_change": "129.00",
                "banrate_change": "168.00"
            },
            {
                "date": "1755216000",
                "rank": "17.00",
                "mover_shaker": "5.00",
                "rank_calc": "3.96",
                "mover_shaker_calc": "1.47",
                "ZScore": "0.24",
                "winrate": "49.78",
                "pickrate": "21.45",
                "banrate": "0.40",
                "usage_trend": "Downward",
                "winrate_prev": "48.22",
                "pickrate_prev": "46.80",
                "banrate_prev": "1.10",
                "winrate_change": "3.00",
                "pickrate_change": "-54.00",
                "banrate_change": "-64.00"
            }
        ]
    },
    {
        "id": "1026",
        "name": "Black Panther",
        "real_name": "T'challa",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/black-panther-headbig-0.webp",
                "name": "Black Panther",
                "health": "275",
                "movement_speed": "7m\/s"
            }
        ],
        "en_name": "Black Panther",
        "description": "T'Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt.",
        "slug": "black-panther",
        "team": [
            "Avengers"
        ],
        "difficulty": "4",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/black-panther-square.webp",
        "image_transverse": "characters\/black-panther-transverse.webp",
        "icon": "characters\/black-panther-headbig.webp",
        "image": "characters\/black-panther-portrait.webp",
        "logo_small": "characters\/black-panther-logo.webp",
        "logo": "characters\/black-panther-logo-small.webp",
        "skins": [
            "1026001",
            "1026100",
            "1026300",
            "1026500",
            "1026301",
            "1026501",
            "1026101",
            "1026302"
        ],
        "abilities": [
            {
                "id": 102601,
                "icon": "abilities\/1026\/102601.webp",
                "name": "Panther's Cunning",
                "type": "Passive",
                "isCollab": false,
                "description": "Deal higher damage when at low Health.",
                "additional_fields": {
                    "Key": "Passive",
                    "Damage Boost": "20%",
                    "Trigger Condition": "Health drops below 100"
                },
                "transformation_id": 0
            },
            {
                "id": 102611,
                "icon": "abilities\/1026\/102611.webp",
                "name": "Subtle Step",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD {Jump} to run on a wall; perform a jump after detaching from the wall.",
                "additional_fields": {
                    "Key": "Space",
                    "Wall-Crawling Speed": "10m\/s",
                    "Double Jump Cooldown": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 102631,
                "icon": "abilities\/1026\/102631.webp",
                "name": "Vibranium Claws",
                "type": "Weapon",
                "isCollab": false,
                "description": "Slice Vibranium Claws forward.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "35",
                    "Casting": "Melee",
                    "Attack Interval": "0.44s per hit",
                    "Maximum Distance": "3m"
                },
                "transformation_id": 0
            },
            {
                "id": 102641,
                "icon": "abilities\/1026\/102641.webp",
                "name": "Spinning Kick",
                "type": "Normal",
                "isCollab": false,
                "description": "Spiral forward and attach a <Orange>Vibranium Mark<\/> to hit enemies.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "70",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "8s",
                    "Average Speed": "15m\/s",
                    "Maximum Distance": "16m"
                },
                "transformation_id": 0
            },
            {
                "id": 102651,
                "icon": "abilities\/1026\/102651.webp",
                "name": "Spear Toss",
                "type": "Normal",
                "isCollab": false,
                "description": "Toss a Vibranium energy spear forward, creating a <Orange>Vibranium Force Field<\/> and attaching a <Orange>Vibranium Mark<\/> to enemies in its radius.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "5m spherical radius",
                    "Damage": "45",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Charges": "2",
                    "Cooldown": "6s",
                    "Projectile Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102661,
                "icon": "abilities\/1026\/102661.webp",
                "name": "Spirit Rend",
                "type": "Normal",
                "isCollab": false,
                "description": "Lunge forward and deal damage to enemies. <Orange>Vibranium Mark<\/> produces <Buff>Bonus Health<\/> and refreshes the ability.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Damage": "80",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "10s",
                    "Bonus Health": "25",
                    "Average Speed": "50m\/s",
                    "Bonus Max Health": "75",
                    "Maximum Distance": "15m"
                },
                "transformation_id": 0
            },
            {
                "id": 102671,
                "icon": "abilities\/1026\/102671.webp",
                "name": "Bast's Descent",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Summon Bast, pouncing forward, dealing damage and attaching a <Orange>Vibranium Mark<\/> to hit enemies, while refreshing <Orange>Spirit Rend<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "Length: 22m, Width: 20m, Height: 7m",
                    "Damage": "150",
                    "Casting": "Cuboid Spell Field",
                    "Energy Cost": "3300",
                    "Casting Angle": "150°"
                },
                "transformation_id": 0
            },
            {
                "id": 102695,
                "icon": "abilities\/1026\/102695.webp",
                "name": "Wakandan Master",
                "type": "Normal",
                "isCollab": true,
                "description": "Magik opens a portal that anchors an exit at its range limit or upon reactivation. {102600}{000001}{104900}{000001}{000003}{104800} can use the portal.",
                "transformation_id": 0
            },
            {
                "id": 102696,
                "icon": "abilities\/1026\/102696.webp",
                "name": "Gamma Vibranium Armor",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "additional_fields": {
                    "Key": "PASSIVE",
                    "Cooldown": "45",
                    "Shield Value": "100",
                    "Health Threshold for Ability Activation": "100"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "26.00",
                "mover_shaker": "17.00",
                "rank_calc": "3.88",
                "mover_shaker_calc": "0.19",
                "ZScore": "0.24",
                "winrate": "50.00",
                "pickrate": "8.38",
                "banrate": "40.19",
                "usage_trend": "Downward",
                "winrate_prev": "49.88",
                "pickrate_prev": "8.58",
                "banrate_prev": "42.82",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "-6.00"
            },
            {
                "date": "1755216000",
                "rank": "28.00",
                "mover_shaker": "30.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "-0.62",
                "ZScore": "0.18",
                "winrate": "49.88",
                "pickrate": "8.58",
                "banrate": "42.82",
                "usage_trend": "Downward",
                "winrate_prev": "50.41",
                "pickrate_prev": "12.37",
                "banrate_prev": "45.94",
                "winrate_change": "-1.00",
                "pickrate_change": "-31.00",
                "banrate_change": "-7.00"
            }
        ]
    },
    {
        "id": "1027",
        "name": "Groot",
        "real_name": "Groot",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/groot-headbig-0.webp",
                "name": "Groot",
                "health": "700",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Groot",
        "description": "A flora colossus from Planet X, the alien known as Groot exhibits enhanced vitality and the ability to manipulate all forms of vegetation. As sturdy as a towering tree, Groot forges his own way, serving as the team's silent but reliable pathfinder.",
        "slug": "groot",
        "team": [
            "Guardiansofthegalaxy"
        ],
        "difficulty": "2",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/groot-square.webp",
        "image_transverse": "characters\/groot-transverse.webp",
        "icon": "characters\/groot-headbig.webp",
        "image": "characters\/groot-portrait.webp",
        "logo_small": "characters\/groot-logo.webp",
        "logo": "characters\/groot-logo-small.webp",
        "skins": [
            "1027001",
            "1027100",
            "1027301",
            "1027500",
            "1027800",
            "1027302",
            "1027501"
        ],
        "abilities": [
            {
                "id": 102761,
                "icon": "abilities\/1027\/102761.webp",
                "name": "Strangling Prison",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Fire a massive vine cluster that pulls nearby enemies to its center and <Debuff>Imprisons<\/> them.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "8m spherical radius",
                    "Damage": "The projectile deals 10 damage, while the spell field deals 70 damage. While imprisoning enemies, it deals 20 damage every 0.5s",
                    "Casting": "Single-cast projectile with a downward delay that creates a spell field upon impact",
                    "Energy Cost": "2800",
                    "Special Effect": "Imprison enemies for 3.5s",
                    "Projectile Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102711,
                "icon": "abilities\/1027\/102711.webp",
                "name": "Vine Strike",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch vines to attack enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "65",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Critical Hit": "No",
                    "Attack Interval": "0.7s",
                    "Maximum Distance": "22m",
                    "Projectile Speed": "120m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102731,
                "icon": "abilities\/1027\/102731.webp",
                "name": "Spore Bomb",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw an explosive Spore Bomb that splits into multiple small explosive spores.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Spore Bomb generates a spell field with a 5m spherical radius, while small explosive spores create a spell field with a 1.5m spherical radius",
                    "Damage": "The projectile itself deals no damage, while Spore Bomb deals 55 damage and explosive spores deal 10 damage",
                    "Casting": "Single-cast projectile with a downward delay that creates a spell field upon impact",
                    "Cooldown": "6s",
                    "Special Effect": "Spore Bomb explodes into 6 explosive spores",
                    "Projectile Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102741,
                "icon": "abilities\/1027\/102741.webp",
                "name": "Thornlash Wall",
                "type": "Normal",
                "isCollab": false,
                "description": "Target a location and grow a Thornlash Wall. When <Orange>Awakened<\/>, it strikes nearby enemies attacked by Groot and his allies.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Targeted",
                    "Cooldown": "2 charges, with each charge taking 6s to recharge",
                    "Special Effect": "Thornlash Wall deals 60 damage every 0.5s",
                    "Maximum Distance": "18m",
                    "Thornlash Wall Health": "250"
                },
                "transformation_id": 0
            },
            {
                "id": 102751,
                "icon": "abilities\/1027\/102751.webp",
                "name": "Ironwood Wall",
                "type": "Normal",
                "isCollab": false,
                "description": "Target a location and grow an Ironwood Wall. When the wall is <Orange>Awakened<\/>, damage dealt by Groot and nearby allies grants Groot <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "12s",
                    "Special Effect": "Ironwood Wall heals 40 Bonus Health per second, up to 250 Bonus Health",
                    "Maximum Distance": "10m",
                    "Thornlash Wall Health": "600"
                },
                "transformation_id": 0
            },
            {
                "id": 102743,
                "icon": "abilities\/1027\/102743.webp",
                "name": "Flora Colossus",
                "type": "Passive",
                "isCollab": false,
                "description": "Wooden walls near Groot will <Orange>Awaken<\/>, activating an extra effect. Press {PrimaryAttack} while building a wooden wall to continue building additional walls.",
                "additional_fields": {
                    "Key": "Passive",
                    "Range": "A cylindrical spell field with a 24m radius and a height of 40m",
                    "Casting": "Persistent spell field that surrounds the caster"
                },
                "transformation_id": 0
            },
            {
                "id": 102791,
                "icon": "abilities\/1027\/102791.webp",
                "name": "Friendly Shoulder",
                "type": "Passive",
                "isCollab": true,
                "description": "{104700}{000003}{102300} can ride on Groot's shoulders, receiving <Buff>Damage Reduction<\/>.",
                "transformation_id": 0
            },
            {
                "id": 102721,
                "icon": "abilities\/1027\/102721.webp",
                "name": "Furious Flora",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform a combo with his arms, and the third strike will slightly <Debuff>Launch Up<\/> the hit enemy airborne.",
                "additional_fields": {
                    "Key": "V",
                    "Range": "The first two strikes can reach 3m, while the third strike can reach 4m"
                },
                "transformation_id": 0
            },
            {
                "id": 102781,
                "icon": "abilities\/1027\/102781.webp",
                "name": "Wild Wall",
                "type": "Normal",
                "isCollab": true,
                "description": "Mantis enhances Groot's wooden walls and Loki's Rune Stones with life energy. Groot can additionally unleash a Wild Wall, which, when in <Orange>Flora Colossus<\/> state, restores health to random nearby allies. Loki's Rune Stones grant allies within <Orange>Regeneration Domain<\/> a <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "10m spherical radius spell field",
                    "Casting": "Targeted",
                    "Cooldown": "10s",
                    "Healing Amount": "40\/s",
                    "Flower Wall Health": "150",
                    "Maximum Unleash Distance": "7m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "18.00",
                "mover_shaker": "40.00",
                "rank_calc": "3.97",
                "mover_shaker_calc": "-33.15",
                "ZScore": "-2.21",
                "winrate": "49.55",
                "pickrate": "9.58",
                "banrate": "3.83",
                "usage_trend": "Upward",
                "winrate_prev": "45.10",
                "pickrate_prev": "3.90",
                "banrate_prev": "0.28",
                "winrate_change": "10.00",
                "pickrate_change": "146.00",
                "banrate_change": "1268.00"
            },
            {
                "date": "1755216000",
                "rank": "37.00",
                "mover_shaker": "8.00",
                "rank_calc": "3.73",
                "mover_shaker_calc": "0.69",
                "ZScore": "0.22",
                "winrate": "45.10",
                "pickrate": "3.90",
                "banrate": "0.28",
                "usage_trend": "Downward",
                "winrate_prev": "47.16",
                "pickrate_prev": "7.32",
                "banrate_prev": "1.67",
                "winrate_change": "-4.00",
                "pickrate_change": "-47.00",
                "banrate_change": "-83.00"
            }
        ]
    },
    {
        "id": "1028",
        "name": "Ultron",
        "real_name": "Ultron",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/ultron-headbig-0.webp",
                "name": "Ultron",
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Ultron",
        "description": "The pinnacle of artificial lifeforms, Ultron is programmed to learn and adapt in ways far beyond human capability. He can summon an army of automated drones that obey his every command, raising his chances of victory exponentially.",
        "slug": "ultron",
        "team": [
            "Villains"
        ],
        "difficulty": "2",
        "attack_type": "Hitscan Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/ultron-square.webp",
        "image_transverse": "characters\/ultron-transverse.webp",
        "icon": "characters\/ultron-headbig.webp",
        "image": "characters\/ultron-portrait.webp",
        "logo_small": "characters\/ultron-logo.webp",
        "logo": "characters\/ultron-logo-small.webp",
        "skins": [
            "1028001",
            "1028500",
            "1028100",
            "1028101",
            "1028300"
        ],
        "abilities": [
            {
                "id": 102831,
                "icon": "abilities\/1028\/102831.webp",
                "name": "Encephalo-ray",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a burning energy beam.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "6",
                    "Damage": "First beam 6 rounds in 0.5s, 12 per hit; second single-cast spell field 75 per hit",
                    "Casting": "First constant beam; Second single-cast cylindrical spell field",
                    "Fire Rate": "1.58s per round",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 75% at 30m"
                },
                "transformation_id": 0
            },
            {
                "id": 102841,
                "icon": "abilities\/1028\/102841.webp",
                "name": "Imperative: Firewall",
                "type": "Weapon",
                "isCollab": false,
                "description": "Summon drones to grant <Orange>Bonus Health<\/> to allies within range, centered on himself and the ally marked by <Buff>Imperative: Patch<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "8m spherical radius spell field",
                    "Casting": "Instant Cast",
                    "Cooldown": "10s",
                    "Special Effect": "Grant bonus health to Ultron and Allies within range, centered around Ultron and the drones",
                    "Bonus Health to Ultron": "65",
                    "Bonus Health Falloff Speed": "40\/s",
                    "Bonus Health Falloff Begins at": "3s",
                    "Bonus Health to allies near Ultron and the drones": "50"
                },
                "transformation_id": 0
            },
            {
                "id": 102861,
                "icon": "abilities\/1028\/102861.webp",
                "name": "Dynamic Flight",
                "type": "Normal",
                "isCollab": false,
                "description": "Fly quickly in the direction of movement and then enter an <Buff>Accelerated<\/> state.",
                "additional_fields": {
                    "Key": "Shift",
                    "Casting": "Dash",
                    "Cooldown": "8s",
                    "Dash Distance": "12m",
                    "Dash Direction": "Reticle direction combined with key input",
                    "Movement Boost": "40%",
                    "Special Effect": "Dynamic Flight can trigger a one-time dash followed by an constant accelerated effect.",
                    "Accelerate Duration": "6s",
                    "Bonus Health (Self)": "50"
                },
                "transformation_id": 0
            },
            {
                "id": 102871,
                "icon": "abilities\/1028\/102871.webp",
                "name": "Imperative: Patch",
                "type": "Normal",
                "isCollab": false,
                "description": "Command a giant drone to follow an ally, constantly healing allies within its radius, with more healing for the designated ally.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Maximum Vision": "30m",
                    "Target Distance": "25m",
                    "Drone Healing Range": "8m spherical radius spell field",
                    "Healing Amount to the Targeted ally": "35\/s",
                    "Max Tolerance Duration out of Sight": "5s",
                    "Healing Amount to other allies within range": "30\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 102881,
                "icon": "abilities\/1028\/102881.webp",
                "name": "Rage Of Ultron",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Summon Ultron Drones to fire Encephalo-Rays, damaging enemies or healing allies. Deals enhanced damage against <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Straight-line projectile that generates a spell field upon impact.",
                    "Duration": "9s",
                    "Beam Damage": "8",
                    "Energy Cost": "3700",
                    "Special Effect": "Within the ultimate duration, Ultron grants an Unstoppable effect; Deals 125% damage to Bonus Health",
                    "Projectile Speed": "120m\/s",
                    "Total Ray Amount": "5",
                    "Spell Field Range": "3m spherical radius spell field",
                    "Beam Healing Amount": "25",
                    "Ray Amount per Shot": "5",
                    "Ultimate Self-healing": "50\/s",
                    "Ultimate Total Fire Rounds": "5 rounds",
                    "Fire Interval Between Shots": "0.2s",
                    "Fire Interval Between Rounds": "0.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 102891,
                "icon": "abilities\/1028\/102891.webp",
                "name": "Nano Ray",
                "type": "Normal",
                "isCollab": true,
                "description": "When Iron Man, Ultron, and Squirrel Girl team up, Ultron's <Orange>Encephalo-Ray<\/> upgrades to <Orange>Nano-Ray<\/>, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the <Orange>Squirrel Missile<\/> ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "additional_fields": {
                    "Key": "C",
                    "Ammo": "Infinite",
                    "Heal": "85\/s",
                    "Range": "2.5m radius, infinite length cylindrical spell field",
                    "Damage": "70\/s",
                    "Casting": "Channeled",
                    "Cooldown": "30s",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 75% at 30m",
                    "Spell Field Duration": "8s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "5.00",
                "mover_shaker": "28.00",
                "rank_calc": "4.17",
                "mover_shaker_calc": "-0.36",
                "ZScore": "0.20",
                "winrate": "52.17",
                "pickrate": "10.36",
                "banrate": "0.30",
                "usage_trend": "Upward",
                "winrate_prev": "52.26",
                "pickrate_prev": "9.72",
                "banrate_prev": "0.26",
                "winrate_change": "0.00",
                "pickrate_change": "7.00",
                "banrate_change": "15.00"
            },
            {
                "date": "1755216000",
                "rank": "7.00",
                "mover_shaker": "6.00",
                "rank_calc": "4.18",
                "mover_shaker_calc": "0.83",
                "ZScore": "0.22",
                "winrate": "52.26",
                "pickrate": "9.72",
                "banrate": "0.26",
                "usage_trend": "Downward",
                "winrate_prev": "52.43",
                "pickrate_prev": "11.12",
                "banrate_prev": "0.42",
                "winrate_change": "0.00",
                "pickrate_change": "-13.00",
                "banrate_change": "-38.00"
            }
        ]
    },
    {
        "id": "1029",
        "name": "Magik",
        "real_name": "Illyana Rasputin",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/magik-headbig-0.webp",
                "name": "Magik",
                "health": "250",
                "movement_speed": "6m\/s"
            },
            {
                "id": 1,
                "icon": "characters\/magik-headbig-1.webp",
                "name": "Magik"
            }
        ],
        "en_name": "Magik",
        "description": "Trained in dark arts and wielding her mighty Soulsword, Magik leaps through portals to navigate the arena with ease. Once Illyana transforms into the demonic Darkchild, all those who dare stand against her will fall before her merciless blade.",
        "slug": "magik",
        "team": [
            "X_men",
            "Mutants"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/magik-square.webp",
        "image_transverse": "characters\/magik-transverse.webp",
        "icon": "characters\/magik-headbig.webp",
        "image": "characters\/magik-portrait.webp",
        "logo_small": "characters\/magik-logo.webp",
        "logo": "characters\/magik-logo-small.webp",
        "skins": [
            "1029001",
            "1029100",
            "1029300",
            "1029500",
            "1029301",
            "1029501",
            "ps1029302",
            "1029101",
            "1029502"
        ],
        "abilities": [
            {
                "id": 102911,
                "icon": "abilities\/1029\/102911.webp",
                "name": "Soulsword",
                "type": "Normal",
                "isCollab": false,
                "description": "Slash forward with the Soulsword.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "75",
                    "Casting": "Melee",
                    "Damage Falloff": "Falloff begins at 4.5m, decreasing to 50% at 6.5m",
                    "Attack Interval": "0.83s per hit",
                    "Maximum Distance": "6.5m"
                },
                "transformation_id": 0
            },
            {
                "id": 102921,
                "icon": "abilities\/1029\/102921.webp",
                "name": "Magik Slash",
                "type": "Normal",
                "isCollab": false,
                "description": "Strike forward an air slash. Each enemy hit reduces the cooldown of <Orange>Stepping Discs<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "45 - 90 (Maximum damage is achieved after 1.2s of charging)",
                    "Casting": "Charged projectile that travels in a straight trajectory",
                    "Cooldown": "6s",
                    "Special Effect": "Projectile pierces enemies and reduces Stepping Discs cooldown by 1s per enemy pierced",
                    "Projectile Speed": "80m\/s",
                    "Maximum Charge Time": "2s"
                },
                "transformation_id": 0
            },
            {
                "id": 102931,
                "icon": "abilities\/1029\/102931.webp",
                "name": "Limbo's Might",
                "type": "Passive",
                "isCollab": false,
                "description": "Convert damage inflicted on enemies into <Buff>Bonus Health<\/> to herself.",
                "additional_fields": {
                    "Key": "Passive",
                    "Conversion Rate": "30%",
                    "Bonus Max Health": "150",
                    "Energy Cost Special Effect": "Convert damage taken into Bonus Health"
                },
                "transformation_id": 0
            },
            {
                "id": 102941,
                "icon": "abilities\/1029\/102941.webp",
                "name": "Stepping Discs",
                "type": "Normal",
                "isCollab": false,
                "description": "Jump through a Stepping Disc, teleporting a short distance in the direction of movement. Become <Buff>Invincible<\/> while teleporting.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Charges": "2",
                    "Cooldown": "6s",
                    "Average Speed": "12m\/s",
                    "Maximum Distance": "10m",
                    "Special Effect 1": "Magik is invincible while moving",
                    "Special Effect 2": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage",
                    "Combo Ability Casting Window": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 102951,
                "icon": "abilities\/1029\/102951.webp",
                "name": "Eldritch Whirl",
                "type": "Normal",
                "isCollab": false,
                "description": "Spin while swinging the Soulsword after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "A cylindrical spell field with a radius of 6m and a height of 5m",
                    "Damage": "50",
                    "Casting": "A cylindrical spell field in melee range"
                },
                "transformation_id": 0
            },
            {
                "id": 102961,
                "icon": "abilities\/1029\/102961.webp",
                "name": "Demon's Rage",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a Limbo demon that attacks enemies after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Length: 6.5m, Width: 3m, Height: 3m",
                    "Damage": "20 damage per hit",
                    "Casting": "A cuboid spell field in melee range",
                    "Attack Speed": "0.25s per hit",
                    "Summons' Health": "100",
                    "Maximum Duration for Summons": "4s"
                },
                "transformation_id": 0
            },
            {
                "id": 102971,
                "icon": "abilities\/1029\/102971.webp",
                "name": "Umbral Incursion",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward and <Debuff>Launch Up<\/> enemies airborne.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "8s",
                    "Average Speed": "46m\/s",
                    "Maximum Distance": "16m",
                    "Upward Slash Damage": "85"
                },
                "transformation_id": 0
            },
            {
                "id": 102981,
                "icon": "abilities\/1029\/102981.webp",
                "name": "Darkchild",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Transform into Darkchild, gaining enhancements to all her abilities.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Transformation",
                    "Duration": "12s",
                    "Energy Cost": "3400",
                    "Special Effect": "When in the Darkchild state, all of Magik's abilities are enhanced"
                },
                "transformation_id": 0
            },
            {
                "id": 102995,
                "icon": "abilities\/1029\/102995.webp",
                "name": "Disc Master",
                "type": "Passive",
                "isCollab": true,
                "description": "When Magik is on the field, {102600} can tap into Limbo to rewind a few seconds back to a previous position; after passing through Limbo, {102600} will gain <Buff>Bonus Health<\/> based on missing health.",
                "transformation_id": 0
            },
            {
                "id": 102996,
                "icon": "abilities\/1029\/102996.webp",
                "name": "Chain Of Cyttorak",
                "type": "Normal",
                "isCollab": true,
                "description": "Doctor Strange shares his arcane mastery with Scarlet Witch and Magik. Scarlet Witch's <Orange>Chthonian Burst<\/> is replaced with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction. Magik can unleash a <Orange>Chain of Cyttorak<\/> that links two enemies and slows them; the farther they are apart, the greater the <Debuff>Slow<\/> effect inflicted during the link.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "20s",
                    "Slow Rate": "Begins at 0%, growing to 40% at 5m",
                    "Damage Over Time": "10\/s",
                    "Projectile Speed": "120m\/s",
                    "Link Maximum Duration": "4s",
                    "Projectile Hit Damage": "45",
                    "Link Breakage Distance": "30m",
                    "Max Link Generation Distance": "15m",
                    "Damage to the Link's Secondary Target": "30"
                },
                "transformation_id": 0
            },
            {
                "id": 102915,
                "icon": "abilities\/1029\/102915.webp",
                "name": "Soulsword",
                "type": "Normal",
                "isCollab": false,
                "description": "Slash forward with the Soulsword.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "75",
                    "Casting": "Melee",
                    "Damage Falloff": "Falloff begins at 4.5m, decreasing to 50% at 6.5m",
                    "Attack Interval": "0.83s per hit",
                    "Maximum Distance": "6.5m"
                },
                "transformation_id": 1
            },
            {
                "id": 102922,
                "icon": "abilities\/1029\/102922.webp",
                "name": "Magik Slash",
                "type": "Normal",
                "isCollab": false,
                "description": "Strike forward an air slash. Each enemy hit reduces the cooldown of <Orange>Stepping Discs<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "45 - 90 (Maximum damage is achieved after 1.2s of charging)",
                    "Casting": "Charged projectile that travels in a straight trajectory",
                    "Cooldown": "6s",
                    "Special Effect": "Projectile pierces enemies and reduces Stepping Discs cooldown by 1s per enemy pierced",
                    "Projectile Speed": "80m\/s",
                    "Maximum Charge Time": "2s"
                },
                "transformation_id": 1
            },
            {
                "id": 102931,
                "icon": "abilities\/1029\/102931.webp",
                "name": "Limbo's Might",
                "type": "Passive",
                "isCollab": false,
                "description": "Convert damage inflicted on enemies into <Buff>Bonus Health<\/> to herself.",
                "additional_fields": {
                    "Key": "Passive",
                    "Conversion Rate": "30%",
                    "Bonus Max Health": "150",
                    "Energy Cost Special Effect": "Convert damage taken into Bonus Health"
                },
                "transformation_id": 1
            },
            {
                "id": 102942,
                "icon": "abilities\/1029\/102942.webp",
                "name": "Stepping Discs",
                "type": "Normal",
                "isCollab": false,
                "description": "Jump through a Stepping Disc, teleporting a short distance in the direction of movement. Become <Buff>Invincible<\/> while teleporting.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Charges": "2",
                    "Cooldown": "6s",
                    "Average Speed": "12m\/s",
                    "Maximum Distance": "10m",
                    "Special Effect 1": "Magik is invincible while moving",
                    "Special Effect 2": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage",
                    "Combo Ability Casting Window": "3s"
                },
                "transformation_id": 1
            },
            {
                "id": 102952,
                "icon": "abilities\/1029\/102952.webp",
                "name": "Eldritch Whirl",
                "type": "Normal",
                "isCollab": false,
                "description": "Spin while swinging the Soulsword after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "A cylindrical spell field with a radius of 6m and a height of 5m",
                    "Damage": "50",
                    "Casting": "A cylindrical spell field in melee range"
                },
                "transformation_id": 1
            },
            {
                "id": 102962,
                "icon": "abilities\/1029\/102962.webp",
                "name": "Demon's Rage",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a Limbo demon that attacks enemies after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Length: 6.5m, Width: 3m, Height: 3m",
                    "Damage": "20 damage per hit",
                    "Casting": "A cuboid spell field in melee range",
                    "Attack Speed": "0.25s per hit",
                    "Summons' Health": "100",
                    "Maximum Duration for Summons": "4s"
                },
                "transformation_id": 1
            },
            {
                "id": 102973,
                "icon": "abilities\/1029\/102973.webp",
                "name": "Umbral Incursion",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward and <Debuff>Launch Up<\/> enemies airborne.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "8s",
                    "Average Speed": "46m\/s",
                    "Maximum Distance": "16m",
                    "Upward Slash Damage": "85"
                },
                "transformation_id": 1
            },
            {
                "id": 102995,
                "icon": "abilities\/1029\/102995.webp",
                "name": "Disc Master",
                "type": "Passive",
                "isCollab": true,
                "description": "When Magik is on the field, {102600} can tap into Limbo to rewind a few seconds back to a previous position; after passing through Limbo, {102600} will gain <Buff>Bonus Health<\/> based on missing health.",
                "transformation_id": 1
            },
            {
                "id": 102996,
                "icon": "abilities\/1029\/102996.webp",
                "name": "Chain Of Cyttorak",
                "type": "Normal",
                "isCollab": true,
                "description": "Doctor Strange shares his arcane mastery with Scarlet Witch and Magik. Scarlet Witch's <Orange>Chthonian Burst<\/> is replaced with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction. Magik can unleash a <Orange>Chain of Cyttorak<\/> that links two enemies and slows them; the farther they are apart, the greater the <Debuff>Slow<\/> effect inflicted during the link.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "20s",
                    "Slow Rate": "Begins at 0%, growing to 40% at 5m",
                    "Damage Over Time": "10\/s",
                    "Projectile Speed": "120m\/s",
                    "Link Maximum Duration": "4s",
                    "Projectile Hit Damage": "45",
                    "Link Breakage Distance": "30m",
                    "Max Link Generation Distance": "15m",
                    "Damage to the Link's Secondary Target": "30"
                },
                "transformation_id": 1
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "2.00",
                "mover_shaker": "18.00",
                "rank_calc": "4.33",
                "mover_shaker_calc": "0.17",
                "ZScore": "0.24",
                "winrate": "54.09",
                "pickrate": "12.67",
                "banrate": "1.38",
                "usage_trend": "Upward",
                "winrate_prev": "54.22",
                "pickrate_prev": "12.34",
                "banrate_prev": "1.46",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "-5.00"
            },
            {
                "date": "1755216000",
                "rank": "4.00",
                "mover_shaker": "22.00",
                "rank_calc": "4.33",
                "mover_shaker_calc": "-0.18",
                "ZScore": "0.19",
                "winrate": "54.22",
                "pickrate": "12.34",
                "banrate": "1.46",
                "usage_trend": "Downward",
                "winrate_prev": "53.64",
                "pickrate_prev": "15.42",
                "banrate_prev": "1.46",
                "winrate_change": "1.00",
                "pickrate_change": "-20.00",
                "banrate_change": "0.00"
            }
        ]
    },
    {
        "id": "1030",
        "name": "Moon Knight",
        "real_name": "Marc Spector",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/moon-knight-headbig-0.webp",
                "name": "Moon Knight",
                "health": "275",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Moon Knight",
        "description": "As the avatar of the Egyptian God of Vengeance, Marc Spector's body has been enhanced by Khonshu himself. Bathed in a luminous aura that pierces the darkness, Moon Knight glides through the night, ready to sear his enemies with his master's sacred Ankhs.",
        "slug": "moon-knight",
        "team": [
            "Marvelknights"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/moon-knight-square.webp",
        "image_transverse": "characters\/moon-knight-transverse.webp",
        "icon": "characters\/moon-knight-headbig.webp",
        "image": "characters\/moon-knight-portrait.webp",
        "logo_small": "characters\/moon-knight-logo.webp",
        "logo": "characters\/moon-knight-logo-small.webp",
        "skins": [
            "1030001",
            "1030100",
            "1030800",
            "1030500",
            "1030300",
            "1030101",
            "1030501",
            "1030801"
        ],
        "abilities": [
            {
                "id": 103021,
                "icon": "abilities\/1030\/103021.webp",
                "name": "Crescent Dart",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash Crescent Darts forward that can bounce between enemies and <Orange>Ankhs<\/>, dealing damage to enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "30",
                    "Damage": "25 damage per round",
                    "Casting": "Triple shot that fires in a straight trajectory",
                    "Fire Rate": "The firing interval between shots is 0.05s, with an interval of 0.57s between each round of shooting",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 30m, decreasing to 50% at 50m",
                    "Projectile Speed": "150m\/s",
                    "Maximum Bounce Distance": "7m",
                    "Damage Falloff Per Bounce": "-20%",
                    "Maximum Number of Bounces": "3"
                },
                "transformation_id": 0
            },
            {
                "id": 103031,
                "icon": "abilities\/1030\/103031.webp",
                "name": "Moon Blade",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch forward a Moon Blade that can bounce between enemies and <Orange>Ankhs<\/>, dealing damage to enemies while granting you <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "80",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Charges": "2",
                    "Cooldown": "6s",
                    "Bonus Health": "25",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 30m, decreasing to 50% at 50m",
                    "Projectile Speed": "120m\/s",
                    "Maximum Bounce Distance": "7m",
                    "Damage Falloff Per Bounce": "-20%",
                    "Maximum Number of Bounces": "3"
                },
                "transformation_id": 0
            },
            {
                "id": 103041,
                "icon": "abilities\/1030\/103041.webp",
                "name": "Ancient Ankh",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire an <Orange>Ankh<\/> to <Debuff>Knock<\/> enemies within its radius airborne towards the center.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Cooldown": "12s",
                    "Pull-In Range": "5m spherical radius",
                    "Bouncing Range": "7m spherical radius",
                    "Pull-In Damage": "20",
                    "Projectile Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103051,
                "icon": "abilities\/1030\/103051.webp",
                "name": "Moonlight Hook",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a frontal grappling hook that pulls Moon Knight towards it.",
                "additional_fields": {
                    "Key": "F",
                    "Casting": "Dash",
                    "Cooldown": "15s",
                    "Maximum Distance": "21.5m\/s",
                    "Grappling Hook Speed": "120m\/s",
                    "Grappling Hook Length": "25m"
                },
                "transformation_id": 0
            },
            {
                "id": 103052,
                "icon": "abilities\/1030\/103052.webp",
                "name": "Night Glider",
                "type": "Normal",
                "isCollab": false,
                "description": "Enter a gliding state.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Descending Speed": "1.5m\/s",
                    "Horizontal Movement Speed": "8.7m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103071,
                "icon": "abilities\/1030\/103071.webp",
                "name": "Rising Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform a double jump.",
                "additional_fields": {
                    "Key": "Space",
                    "Cooldown": "6s"
                },
                "transformation_id": 0
            },
            {
                "id": 103061,
                "icon": "abilities\/1030\/103061.webp",
                "name": "Hand Of Khonshu",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Open a portal that allows Khonshu to bombard enemies with his talons.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "5m spherical radius",
                    "Damage": "150 damage per hit",
                    "Casting": "Delayed Spherical Spell Field",
                    "Duration": "4.5s",
                    "Frequency": "4 hits per second",
                    "Energy Cost": "2800",
                    "Damage Falloff": "Start at 1.5m, 70% falloff at 5m",
                    "Number of Hits": "18",
                    "Descending Range": "8m radius"
                },
                "transformation_id": 0
            },
            {
                "id": 103091,
                "icon": "abilities\/1030\/103091.webp",
                "name": "Full Moon",
                "type": "Normal",
                "isCollab": true,
                "description": "Cloak & Dagger can inject light and dark energy into Moon Knight and Blade to create a Light & Dark Realm where Moon Knight and Blade can become <Buff>invisible<\/> and gain <Buff>Healing Over Time<\/>. Blade can unleash Swift Strike toward a targeted enemy.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "4m spherical radius",
                    "Cooldown": "30s",
                    "Duration": "6s",
                    "Healing Amount": "25\/sec",
                    "Team-Up Target": "Cloak & Dagger"
                },
                "transformation_id": 0
            },
            {
                "id": 103001,
                "icon": "abilities\/1030\/103001.webp",
                "name": "Triple Eclipse",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform a combo with his truncheon, and the third strike will slightly <Debuff>Launch Up<\/> enemies.",
                "additional_fields": {
                    "Key": "V",
                    "Casting": "Melee",
                    "Maximum Distance": "3m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "37.00",
                "mover_shaker": "30.00",
                "rank_calc": "3.68",
                "mover_shaker_calc": "-0.42",
                "ZScore": "0.19",
                "winrate": "46.57",
                "pickrate": "13.36",
                "banrate": "0.59",
                "usage_trend": "Upward",
                "winrate_prev": "46.53",
                "pickrate_prev": "12.27",
                "banrate_prev": "0.49",
                "winrate_change": "0.00",
                "pickrate_change": "9.00",
                "banrate_change": "20.00"
            },
            {
                "date": "1755216000",
                "rank": "38.00",
                "mover_shaker": "33.00",
                "rank_calc": "3.67",
                "mover_shaker_calc": "-1.02",
                "ZScore": "0.17",
                "winrate": "46.53",
                "pickrate": "12.27",
                "banrate": "0.49",
                "usage_trend": "Downward",
                "winrate_prev": "46.28",
                "pickrate_prev": "12.52",
                "banrate_prev": "0.36",
                "winrate_change": "1.00",
                "pickrate_change": "-2.00",
                "banrate_change": "36.00"
            }
        ]
    },
    {
        "id": "1031",
        "name": "Luna Snow",
        "real_name": "Seol Hee",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/luna-snow-headbig-0.webp",
                "name": "Luna Snow",
                "health": "275",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Luna Snow",
        "description": "Equal parts pop star and Super Hero, Luna Snow puts on a dazzling show with both her light and dark ice powers. The arena is her stage, where Seol Hee and her team orchestrate spectacular displays that earn her an ever-increasing number of fans and wins.",
        "slug": "luna-snow",
        "team": [
            "Agentsofatlas"
        ],
        "difficulty": "2",
        "attack_type": "Hitscan Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/luna-snow-square.webp",
        "image_transverse": "characters\/luna-snow-transverse.webp",
        "icon": "characters\/luna-snow-headbig.webp",
        "image": "characters\/luna-snow-portrait.webp",
        "logo_small": "characters\/luna-snow-logo.webp",
        "logo": "characters\/luna-snow-logo-small.webp",
        "skins": [
            "1031001",
            "1031100",
            "1031300",
            "1031301",
            "1031302",
            "ps1031304",
            "1031303",
            "ps1031306",
            "ps1031307",
            "1031305"
        ],
        "abilities": [
            {
                "id": 103111,
                "icon": "abilities\/1031\/103111.webp",
                "name": "Smooth Skate",
                "type": "Passive",
                "isCollab": false,
                "description": "Keep moving forward to start ice skating and enable higher jumps.",
                "additional_fields": {
                    "Key": "Passive",
                    "Skating Speed": "9.6m\/s",
                    "Time Required to Start Skating": "0.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103131,
                "icon": "abilities\/1031\/103131.webp",
                "name": "Light & Dark Ice",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire ice shots that damage enemies or heal allies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "30",
                    "Damage": "22 damage per round, for a total of 66 damage",
                    "Casting": "A triple shot that hits instantly",
                    "Fire Rate": "0.5s for three shots. The interval between the first two shots is 0.05s",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 70% at 40m",
                    "Healing Amount": "22 health per round, for a total of 66 health"
                },
                "transformation_id": 0
            },
            {
                "id": 103141,
                "icon": "abilities\/1031\/103141.webp",
                "name": "Ice Arts",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire ice shards for a short duration, damaging enemies or healing allies while restoring her own Health.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "A cylindrical spell field with a radius of 1m and a height of 40m",
                    "Damage": "50 damage per round",
                    "Casting": "Single-cast spell field that pierces through enemies",
                    "Cooldown": "15s",
                    "Duration": "6s",
                    "Fire Rate": "1.43 rounds per second",
                    "Healing Amount": "75 health per round",
                    "Special Effect": "Replace the previous Light & Dark Ice cast"
                },
                "transformation_id": 0
            },
            {
                "id": 103151,
                "icon": "abilities\/1031\/103151.webp",
                "name": "Absolute Zero",
                "type": "Normal",
                "isCollab": false,
                "description": "Cast a clump of ice to <Debuff>Freeze<\/> the hit enemy and restore Health. Landing a hit grants <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "50",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Cooldown": "12s",
                    "Special Effect": "Freeze enemies for 2.7s. However, if they are attacked during the last 2.2s of the freeze, the effect will be canceled. Grants 50 Bonus Health per enemy hit",
                    "Projectile Speed": "60m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103161,
                "icon": "abilities\/1031\/103161.webp",
                "name": "Share The Stage",
                "type": "Normal",
                "isCollab": false,
                "description": "Attach <Orange>Idol Aura<\/> to an ally. Allies with <Orange>Idol Aura<\/> also restore Health when Luna Snow is healing others.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Healing Boost": "35%",
                    "Special Effect": "Provide healing to allies marked with Idol Aura"
                },
                "transformation_id": 0
            },
            {
                "id": 103171,
                "icon": "abilities\/1031\/103171.webp",
                "name": "Fate Of Both Worlds",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Take center stage and start dancing! Toggle between two performances: Heal allies or grant them <Buff>Damage Boost<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Persistent spell field that surrounds the caster",
                    "Duration": "10s",
                    "Energy Cost": "5000",
                    "Damage Boost": "40%",
                    "Shield Value": "250",
                    "Healing Amount": "250\/s",
                    "Cast to heal the ally once": "200"
                },
                "transformation_id": 0
            },
            {
                "id": 103192,
                "icon": "abilities\/1031\/103192.webp",
                "name": "Icy Disco",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow infuses ice energy into {104700}, who then can tap into the ice energy to power up abilities at will.",
                "transformation_id": 0
            },
            {
                "id": 103193,
                "icon": "abilities\/1031\/103193.webp",
                "name": "Frozen Chi",
                "type": "Normal",
                "isCollab": true,
                "description": "Iron Fist channels the Chi of Shou-Lao into Luna Snow, transforming her ice power into a Chi-infused frosty ring that radiates from her. This ring can launch up enemies with chilling damage and applies a slowing effect, while simultaneously healing her allies.",
                "transformation_id": 0
            },
            {
                "id": 103191,
                "icon": "abilities\/1031\/103191.webp",
                "name": "Cryo Heart",
                "type": "Passive",
                "isCollab": false,
                "description": "Automatically restore Health when casting <Orange>Ice Arts<\/>, <Orange>Absolute Zero<\/> or <Orange>Light & Shadow Karma<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Healing Amount": "30\/s for 3 seconds"
                },
                "transformation_id": 0
            },
            {
                "id": 103194,
                "icon": "abilities\/1031\/103194.webp",
                "name": "Winter's Chill",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow grants Winter's Chill to Hawkeye and Iron Fist. Hawkeye can shoot an <Orange>Ice Arrow<\/> that <Debuff>Stuns<\/> enemies if it travels a certain distance; otherwise, it <Debuff>Slows<\/> the target. The farther the arrow flies, the more damage it deals. When Iron Fist activates <Orange>Harmony Recovery<\/>, he can heal nearby allies with <Orange>Lunar Chi<\/>.",
                "transformation_id": 0
            },
            {
                "id": 103195,
                "icon": "abilities\/1031\/103195.webp",
                "name": "Light & Shadow Karma",
                "type": "Normal",
                "isCollab": true,
                "description": "Adam Warlock imparts his mastery of quantum energy to Luna Snow, awakening her new ability <Orange>Light & Shadow Karma<\/>. When Luna uses <Orange>Light & Shadow Karma<\/>, she links to nearby enemies. Any damage she deals to linked enemies is converted into Light Energy, which is then transferred to Luna through the link, healing her Health.",
                "additional_fields": {
                    " ": " ",
                    "Key": "C",
                    "Cooldown": "30s",
                    "Max Link Distance": "25m",
                    "Max Link Duration": "6s",
                    "Link Generate Range": "20m spherical radius spell field",
                    "Damage\/Healing Conversion": "1",
                    "Maximum Damage the Link Can Withstand": "250"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "15.00",
                "mover_shaker": "15.00",
                "rank_calc": "4.03",
                "mover_shaker_calc": "0.32",
                "ZScore": "0.25",
                "winrate": "47.44",
                "pickrate": "39.49",
                "banrate": "1.29",
                "usage_trend": "Upward",
                "winrate_prev": "47.09",
                "pickrate_prev": "38.26",
                "banrate_prev": "1.34",
                "winrate_change": "1.00",
                "pickrate_change": "3.00",
                "banrate_change": "-4.00"
            },
            {
                "date": "1755216000",
                "rank": "16.00",
                "mover_shaker": "36.00",
                "rank_calc": "3.99",
                "mover_shaker_calc": "-2.94",
                "ZScore": "0.11",
                "winrate": "47.09",
                "pickrate": "38.26",
                "banrate": "1.34",
                "usage_trend": "Upward",
                "winrate_prev": "47.20",
                "pickrate_prev": "37.97",
                "banrate_prev": "0.68",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "97.00"
            }
        ]
    },
    {
        "id": "1032",
        "name": "Squirrel Girl",
        "real_name": "Doreen Green",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/squirrel-girl-headbig-0.webp",
                "name": "Squirrel Girl",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Squirrel Girl",
        "description": "Possessing only the powers of a common squirrel, somehow Doreen Green manages to defeat seemingly invincible enemies in the most unexpected ways. Any foe who counts her out is bound to fall at the hands of the Unbeatable Squirrel Girl!",
        "slug": "squirrel-girl",
        "team": [
            "Avengers"
        ],
        "difficulty": "1",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/squirrel-girl-square.webp",
        "image_transverse": "characters\/squirrel-girl-transverse.webp",
        "icon": "characters\/squirrel-girl-headbig.webp",
        "image": "characters\/squirrel-girl-portrait.webp",
        "logo_small": "characters\/squirrel-girl-logo.webp",
        "logo": "characters\/squirrel-girl-logo-small.webp",
        "skins": [
            "1032001",
            "1032300",
            "1032100",
            "1032301",
            "1032500",
            "1032302",
            "1032501"
        ],
        "abilities": [
            {
                "id": 103211,
                "icon": "abilities\/1032\/103211.webp",
                "name": "Burst Acorn",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot bouncing Burst Acorns.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "12",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Fire Rate": "1.49 acorns per second",
                    "Critical Hit": "No",
                    "Damage Falloff": "70% falloff at 3m",
                    "Projectile Speed": "80 m\/s",
                    "Spell Field Range": "3m spherical radius",
                    "Spell Field Damage": "100"
                },
                "transformation_id": 0
            },
            {
                "id": 103231,
                "icon": "abilities\/1032\/103231.webp",
                "name": "Tail Bounce",
                "type": "Normal",
                "isCollab": false,
                "description": "Rocket upwards with a bounce of her tail.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Cooldown": "8s",
                    "Jump Height": "9m"
                },
                "transformation_id": 0
            },
            {
                "id": 103241,
                "icon": "abilities\/1032\/103241.webp",
                "name": "Mammal Bond",
                "type": "Normal",
                "isCollab": false,
                "description": "Reload Burst Acorns and can use an ability without cooldown once in a short duration.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "15s",
                    "Maximum Duration": "5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103221,
                "icon": "abilities\/1032\/103221.webp",
                "name": "Squirrel Blockade",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch an acorn to unleash Squirrel Guards, <Debuff>Imprisoning<\/> the first hit enemy.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "50",
                    "Casting": "Charged projectile with an arced trajectory",
                    "Cooldown": "8s",
                    "Projectile Speed": "20 - 60 m\/s (Maximum speed is achieved after 0.7s of charging)",
                    "Imprison Duration": "1.33s",
                    "Maximum Charge Time": "1.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103251,
                "icon": "abilities\/1032\/103251.webp",
                "name": "Unbeatable Squirrel Tsunami",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Summon a horde of squirrels to charge forward, dealing damage while bouncing against structures.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "Length: 3m, Width: 5m, Height: 1.75m",
                    "Damage": "150",
                    "Duration": "10s",
                    "Energy Cost": "2800",
                    "Special Mechanic": "The squirrels will rush towards the nearest enemy after bouncing instead of bouncing randomly",
                    "Squirrel Horde Health": "300",
                    "Squirrel Horde Movement Speed": "9 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103281,
                "icon": "abilities\/1032\/103281.webp",
                "name": "Squirrel Support",
                "type": "Normal",
                "isCollab": true,
                "transformation_id": 0
            },
            {
                "id": 103291,
                "icon": "abilities\/1032\/103291.webp",
                "name": "Webbed Acorn",
                "type": "Normal",
                "isCollab": true,
                "description": "Spider-Man gives Squirrel Girl a web bomb. She can launch it to unleash an explosion upon contact with the environment or an enemy, briefly <Debuff>Immobilizing<\/> and damaging enemies caught in the blast.",
                "transformation_id": 0
            },
            {
                "id": 103292,
                "icon": "abilities\/1032\/103292.webp",
                "name": "Squirrel Missile",
                "type": "Normal",
                "isCollab": true,
                "description": "When Iron Man, Ultron, and Squirrel Girl team up, Ultron's <Orange>Encephalo-Ray<\/> upgrades to <Orange>Nano-Ray<\/>, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the <Orange>Squirrel Missile<\/> ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "additional_fields": {
                    "Key": "C",
                    "Damage": "75",
                    "Cooldown": "20",
                    "Damage Falloff": "Falloff begins at 4m, decreasing to 50% at 8m",
                    "Special Effect": "Automatically track enemies within a horizontal angle of 60°, a vertical angle of 60°, and a maximum distance of 60m",
                    "Explosion Range": "8m spherical radius spell field",
                    "Projectile Speed": "40 m\/s",
                    "Projectile Radius": "0.5m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "33.00",
                "mover_shaker": "27.00",
                "rank_calc": "3.77",
                "mover_shaker_calc": "-0.35",
                "ZScore": "0.20",
                "winrate": "46.92",
                "pickrate": "13.20",
                "banrate": "7.39",
                "usage_trend": "Upward",
                "winrate_prev": "46.66",
                "pickrate_prev": "12.58",
                "banrate_prev": "6.22",
                "winrate_change": "1.00",
                "pickrate_change": "5.00",
                "banrate_change": "19.00"
            },
            {
                "date": "1755216000",
                "rank": "36.00",
                "mover_shaker": "31.00",
                "rank_calc": "3.74",
                "mover_shaker_calc": "-0.79",
                "ZScore": "0.17",
                "winrate": "46.66",
                "pickrate": "12.58",
                "banrate": "6.22",
                "usage_trend": "Downward",
                "winrate_prev": "47.12",
                "pickrate_prev": "14.42",
                "banrate_prev": "5.58",
                "winrate_change": "-1.00",
                "pickrate_change": "-13.00",
                "banrate_change": "11.00"
            }
        ]
    },
    {
        "id": "1033",
        "name": "Black Widow",
        "real_name": "Natasha Romanova",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/black-widow-headbig-0.webp",
                "name": "Black Widow",
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Black Widow",
        "description": "Natasha Romanova is the world's most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!",
        "slug": "black-widow",
        "team": [
            "Avengers"
        ],
        "difficulty": "4",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/black-widow-square.webp",
        "image_transverse": "characters\/black-widow-transverse.webp",
        "icon": "characters\/black-widow-headbig.webp",
        "image": "characters\/black-widow-portrait.webp",
        "logo_small": "characters\/black-widow-logo.webp",
        "logo": "characters\/black-widow-logo-small.webp",
        "skins": [
            "1033001",
            "1033500",
            "1033100",
            "1033800",
            "1033501",
            "1033300",
            "1033502"
        ],
        "abilities": [
            {
                "id": 103301,
                "icon": "abilities\/1033\/103301.webp",
                "name": "Rapid Fire",
                "type": "Weapon",
                "isCollab": false,
                "description": "Strike with the enhanced electric batons.",
                "transformation_id": 0
            },
            {
                "id": 103331,
                "icon": "abilities\/1033\/103331.webp",
                "name": "Edge Dancer",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash a spinning kick to <Debuff>Launch Up<\/> enemies. Landing the hit will allow her to zip to the target with a grappling hook for a second kick.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Melee",
                    "Cooldown": "15s",
                    "Maximum Distance": "5m",
                    "Flying Kick Damage": "35",
                    "Flying Kick Distance": "12m",
                    "Flying Kick Stun Duration": "1s",
                    "Flying Kick Casting Window": "5s",
                    "CastingSpinning Kick Damage": "35"
                },
                "transformation_id": 0
            },
            {
                "id": 103321,
                "icon": "abilities\/1033\/103321.webp",
                "name": "Straight Shooter",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash the Spinning Kick to forcefully repel nearby foes. Afterward, target an enemy to deploy a grappling hook, drawing yourself towards them and launching them up upon impact.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "120 damage per hit",
                    "Casting": "Single-cast direct hit",
                    "Fire Rate": "15",
                    "Critical Hit": "Yes",
                    "Special Effect": "Shares the same magazine with Red Room Rifle"
                },
                "transformation_id": 0
            },
            {
                "id": 103341,
                "icon": "abilities\/1033\/103341.webp",
                "name": "Fleet Foot",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward and enable a powerful jump.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Maximum Energy": "120",
                    "Movement Boost": "33%",
                    "Energy Recovery Speed": "30\/s",
                    "Power Jump Energy Cost": "24 per leap",
                    "Energy Cost (Sprinting)": "12\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103351,
                "icon": "abilities\/1033\/103351.webp",
                "name": "Electro-plasma Explosion",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Switch the Red Room Rifle to Destruction mode and unleash an electro-plasma blast, damaging enemies within range and inflicting them with <Debuff>Vulnerability<\/>. Additionally, leave a plasma pool on the ground to <Debuff>Slow<\/> nearby enemies.",
                "additional_fields": {
                    "Key": "Q",
                    "Slow Rate": "-55%",
                    "Energy Cost": "2800",
                    "Plasma Range": "1.5m spherical radius",
                    "Explosion Range": "5.6m - 8m (Maximum range is achieved after 0.6s of charging)",
                    "Plasma Duration": "10s",
                    "Explosion Damage": "120 - 170 (Maximum damage is achieved after 0.6s of charging)",
                    "Projectile Speed": "100m\/s",
                    "Number of Plasma Globules": "7 - 20 (Maximum amount is achieved after 0.6s of charging)",
                    "Vulnerability Effect Rate": "15%",
                    "Vulnerability Effect Duration": "4s"
                },
                "transformation_id": 0
            },
            {
                "id": 103311,
                "icon": "abilities\/1033\/103311.webp",
                "name": "Red Room Rifle",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a barrage of bullets with the Red Room Rifle.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "120 damage per round",
                    "Casting": "Single-cast direct hit",
                    "Fire Rate": "15",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 10m, decreasing to 50% at 20m",
                    "Special Effect": "Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle",
                    "Aiming down sights times": "0.3s"
                },
                "transformation_id": 0
            },
            {
                "id": 103382,
                "icon": "abilities\/1033\/103382.webp",
                "name": "Supersensory Hunt",
                "type": "Normal",
                "isCollab": true,
                "description": "Hawkeye can share his Hunter's Sight with Black Widow, enabling her to catch sight of and damage afterimages of enemies.",
                "transformation_id": 0
            },
            {
                "id": 103391,
                "icon": "abilities\/1033\/103391.webp",
                "name": "LION'S LAUNCH",
                "type": "Normal",
                "isCollab": false,
                "description": "Attack with the Red Room Rifle.",
                "transformation_id": 0
            },
            {
                "id": 103392,
                "icon": "abilities\/1033\/103392.webp",
                "name": "FEROCIOUS THROW",
                "type": "Weapon",
                "isCollab": false,
                "description": "Switch the Red Room Rifle to Sniper mode to fire high-energy rounds.",
                "transformation_id": 0
            },
            {
                "id": 103343,
                "icon": "abilities\/1033\/103343.webp",
                "name": "FLEET FOOT",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Maximum Energy": "120",
                    "Movement Boost": "33%",
                    "Energy Recovery Speed": "30\/s",
                    "Power Jump Energy Cost": "24 per leap",
                    "Energy Cost (Sprinting)": "12\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103334,
                "icon": "abilities\/1033\/103334.webp",
                "name": "LION DANCER",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash a spinning kick to <Debuff>Launch Up<\/> enemies and cause them to lose the ball. This ability can only be used when not in possession of the ball.",
                "transformation_id": 0
            },
            {
                "id": 103383,
                "icon": "abilities\/1033\/103383.webp",
                "name": "Pulse Rifle",
                "type": "Normal",
                "isCollab": true,
                "description": "The Punisher upgrades Black Widow's arsenal, adding a Pulse Mode to her Red Room Rifle. While the ability is active, using <Orange>Straight Shooter<\/> fires a pulse beam that deals piercing damage.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "10s",
                    "Duration": "15s",
                    "Fire Interval": "0.7s",
                    "Special Effect": "No Headshot",
                    "Pulse Beam Damage": "85"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "41.00",
                "mover_shaker": "21.00",
                "rank_calc": "3.27",
                "mover_shaker_calc": "0.01",
                "ZScore": "0.23",
                "winrate": "40.88",
                "pickrate": "3.93",
                "banrate": "0.27",
                "usage_trend": "Downward",
                "winrate_prev": "40.58",
                "pickrate_prev": "3.98",
                "banrate_prev": "0.26",
                "winrate_change": "1.00",
                "pickrate_change": "-1.00",
                "banrate_change": "4.00"
            },
            {
                "date": "1755216000",
                "rank": "41.00",
                "mover_shaker": "19.00",
                "rank_calc": "3.26",
                "mover_shaker_calc": "0.06",
                "ZScore": "0.20",
                "winrate": "40.58",
                "pickrate": "3.98",
                "banrate": "0.26",
                "usage_trend": "Upward",
                "winrate_prev": "40.40",
                "pickrate_prev": "3.37",
                "banrate_prev": "0.23",
                "winrate_change": "0.00",
                "pickrate_change": "18.00",
                "banrate_change": "13.00"
            }
        ]
    },
    {
        "id": "1034",
        "name": "Iron Man",
        "real_name": "Anthony \"tony\" Stark",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/iron-man-headbig-0.webp",
                "name": "Iron Man",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Iron Man",
        "description": "Armed with superior intellect and a nanotech battlesuit of his own design, Tony Stark stands alongside gods as the Invincible Iron Man. His state of the art armor turns any battlefield into his personal playground, allowing him to steal the spotlight he so desperately desires.",
        "slug": "iron-man",
        "team": [
            "Avengers"
        ],
        "difficulty": "2",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/iron-man-square.webp",
        "image_transverse": "characters\/iron-man-transverse.webp",
        "icon": "characters\/iron-man-headbig.webp",
        "image": "characters\/iron-man-portrait.webp",
        "logo_small": "characters\/iron-man-logo.webp",
        "logo": "characters\/iron-man-logo-small.webp",
        "skins": [
            "1034001",
            "1034100",
            "1034500",
            "1034501",
            "1034800",
            "1034300",
            "1034502"
        ],
        "abilities": [
            {
                "id": 103411,
                "icon": "abilities\/1034\/103411.webp",
                "name": "Repulsor Blast",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire nano pulse cannons forward.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "100",
                    "Range": "5m spherical radius",
                    "Damage": "50",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Fire Rate": "1.39 rounds per second",
                    "Critical Hit": "No",
                    "Ammo Consumption": "16 damage per round",
                    "Projectile Speed": "80 m\/s",
                    "Special Mechanic 1": "After firing the one-handed repulsor twice in a row, the next attack will fire two repulsors at once",
                    "Special Mechanic 2": "Repulsor Blast and Unibeam share the same ammo count",
                    "Spell Field Damage": "65",
                    "Two-handed Repulsors": " ",
                    "Spell Field Damage Falloff": "40% falloff at 5m"
                },
                "transformation_id": 0
            },
            {
                "id": 103421,
                "icon": "abilities\/1034\/103421.webp",
                "name": "Unibeam",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire a unibeam forward.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Ammo": "100",
                    "Damage": "140 damage per second",
                    "Casting": "Channeled",
                    "Beam Length": "25m",
                    "Critical Hit": "No",
                    "Ammo Consumption": "10\/s",
                    "Special Mechanic": "Repulsor Blast and Unibeam share the same ammo count"
                },
                "transformation_id": 0
            },
            {
                "id": 103431,
                "icon": "abilities\/1034\/103431.webp",
                "name": "Hyper-velocity",
                "type": "Normal",
                "isCollab": false,
                "description": "Activate <Orange>Hyper-Velocity<\/> state for swift forward flight.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Energy Cost": "15\/s",
                    "Maximum Energy": "120",
                    "Movement Boost": "100%",
                    "Energy Recovery Speed": "10\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103441,
                "icon": "abilities\/1034\/103441.webp",
                "name": "Micro-missile Barrage",
                "type": "Normal",
                "isCollab": false,
                "description": "When <Orange>Hyper-Velocity<\/> or <Orange>Armor Overdrive<\/> is used, Iron Man can launch a missile bombardment.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "2m spherical radius",
                    "Casting": "Scatter-type projectile that generates a spell area upon impact",
                    "Cooldown": "8s",
                    "Missiles": "16",
                    "Projectile Speed": "15 m\/s",
                    "Special Mechanic": "Launch missiles directly beneath Iron Man",
                    "Spell Field Damage": "20 damage per round"
                },
                "transformation_id": 0
            },
            {
                "id": 103451,
                "icon": "abilities\/1034\/103451.webp",
                "name": "Armor Overdrive",
                "type": "Normal",
                "isCollab": false,
                "description": "Activate <Orange>Armor Overdrive<\/> state, enhancing damage of <Orange>Repulsor Blast<\/> and <Orange>Unibeam<\/>, while also granting <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "20s",
                    "Duration": "10s",
                    "Bonus Health": "100"
                },
                "transformation_id": 0
            },
            {
                "id": 103461,
                "icon": "abilities\/1034\/103461.webp",
                "name": "Invincible Pulse Cannon",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Fire a devastating pulse cannon in the targeted direction, delivering catastrophic damage to the targeted area upon impact.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Energy Cost": "3400",
                    "Explosion Range": "10m spherical radius",
                    "Damage Over Time": "300\/s",
                    "Explosion Damage": "1000",
                    "Projectile Speed": "25 m\/s",
                    "Special Mechanic": "As the projectile travels, it creates a dispersive spell field that deals Damage Over Time to nearby enemies",
                    "Dispersive Spell Field": "Length: 15m, Width: 5m, Height: 5m",
                    "Spell Field Damage Falloff": "5% falloff at 10m"
                },
                "transformation_id": 0
            },
            {
                "id": 103454,
                "icon": "abilities\/1034\/103454.webp",
                "name": "Gamma Overdrive",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Black Panther with gamma radiation, strengthening his Vibranium armor. When Black Panther's health is low, he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "transformation_id": 0
            },
            {
                "id": 103492,
                "icon": "abilities\/1034\/103492.webp",
                "name": "Nano Tech",
                "type": "Passive",
                "isCollab": true,
                "description": "When Iron Man, Ultron, and Squirrel Girl team up, Ultron's <Orange>Encephalo-Ray<\/> upgrades to <Orange>Nano-Ray<\/>, firing a beam that pierces through all characters, dealing continuous damage to foes while healing allies; Squirrel Girl gains the <Orange>Squirrel Missile<\/> ability. She directs a squirrel to ride Iron Man's nanotech glove as a homing missile. Upon hit, the squirrel flees just before a fiery explosion!",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "5% Damage Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "13.00",
                "mover_shaker": "19.00",
                "rank_calc": "4.04",
                "mover_shaker_calc": "0.14",
                "ZScore": "0.24",
                "winrate": "51.10",
                "pickrate": "13.07",
                "banrate": "7.81",
                "usage_trend": "Upward",
                "winrate_prev": "51.11",
                "pickrate_prev": "11.89",
                "banrate_prev": "7.66",
                "winrate_change": "0.00",
                "pickrate_change": "10.00",
                "banrate_change": "2.00"
            },
            {
                "date": "1755216000",
                "rank": "12.00",
                "mover_shaker": "18.00",
                "rank_calc": "4.04",
                "mover_shaker_calc": "0.10",
                "ZScore": "0.20",
                "winrate": "51.11",
                "pickrate": "11.89",
                "banrate": "7.66",
                "usage_trend": "Downward",
                "winrate_prev": "51.18",
                "pickrate_prev": "14.07",
                "banrate_prev": "8.97",
                "winrate_change": "0.00",
                "pickrate_change": "-15.00",
                "banrate_change": "-15.00"
            }
        ]
    },
    {
        "id": "1035",
        "name": "Venom",
        "real_name": "Edward \"eddie\" Brock",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/venom-headbig-0.webp",
                "name": "Venom",
                "health": "650",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Venom",
        "description": "Using his symbiote-enhanced body as the perfect living weapon, Eddie Brock and his alien ally stand ever-ready to unleash vicious attacks upon anyone he deems an enemy. Those ensnared by Venom's tentacles have no choice but to surrender to this insatiable predator.",
        "slug": "venom",
        "team": [
            "Guardiansofthegalaxy",
            "Web_warriors",
            "Villains"
        ],
        "difficulty": "1",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/venom-square.webp",
        "image_transverse": "characters\/venom-transverse.webp",
        "icon": "characters\/venom-headbig.webp",
        "image": "characters\/venom-portrait.webp",
        "logo_small": "characters\/venom-logo.webp",
        "logo": "characters\/venom-logo-small.webp",
        "skins": [
            "1035001",
            "1035100",
            "1035500",
            "1035501",
            "1035101",
            "1035300",
            "1035102",
            "1035103",
            "1035301"
        ],
        "abilities": [
            {
                "id": 103501,
                "icon": "abilities\/1035\/103501.webp",
                "name": "Alien Biology",
                "type": "Passive",
                "isCollab": false,
                "description": "PRESS{Jump} to wall crawl, and while crawling, PRESS{PrimaryAttack}to sprint.",
                "additional_fields": {
                    "Key": "Space",
                    "Sprinting Speed": "9 m\/s",
                    "Wall-Crawling Speed": "3 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103521,
                "icon": "abilities\/1035\/103521.webp",
                "name": "Dark Predation",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash tentacles forward to attack enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "15m",
                    "Damage": "20",
                    "Casting": "Quad-cast delayed spell field",
                    "Critical Hit": "Yes",
                    "Attack Interval": "0.9s, with a 0.1s interval between each tendril"
                },
                "transformation_id": 0
            },
            {
                "id": 103531,
                "icon": "abilities\/1035\/103531.webp",
                "name": "Frenzied Arrival",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash to the target location from a certain height. Upon landing, damage nearby enemies, <Debuff>Launching Them Up<\/> towards the landing point.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "6m spherical radius",
                    "Damage": "65 damage, with damage falloff starting at 2m from the center of the spell field and decreasing to 40% at 6m",
                    "Casting": "Targeted",
                    "Cooldown": "8s",
                    "Special Effect": "Knocks enemies inward, with an inward knockback angle of 75°",
                    "Maximum Distance": "40m",
                    "Minimum Distance": "3m"
                },
                "transformation_id": 0
            },
            {
                "id": 103541,
                "icon": "abilities\/1035\/103541.webp",
                "name": "Cellular Corrosion",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash tentacles to <Debuff>Slow<\/> enemies within reach. Enemies unable to break free in time will suffer damage.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "8m spherical radius",
                    "Damage": "The spell field deals 5 damage, increasing to 80 damage if the target remains in the area for a duration",
                    "Casting": "Spell field that surrounds the caster",
                    "CoolDown": "8s",
                    "Special Effect": "Tendrils apply a 25% Slow on the target and take 3s to inflict damage. If the distance from Venom exceeds 11m, the tendrils will detach"
                },
                "transformation_id": 0
            },
            {
                "id": 103551,
                "icon": "abilities\/1035\/103551.webp",
                "name": "Venom Swing",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch webbing forward, allowing for a singular swing in the desired direction.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Cooldown": "8s",
                    "Maximum Webbing Length": "30m"
                },
                "transformation_id": 0
            },
            {
                "id": 103561,
                "icon": "abilities\/1035\/103561.webp",
                "name": "Symbiotic Resilience",
                "type": "Normal",
                "isCollab": false,
                "description": "Generate <Buff>Bonus Health<\/> against damage. The lower Venom's Health, the greater the <Buff>Bonus Health<\/> generated.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Instant Cast",
                    "Cooldown": "15s",
                    "Special Effect": "Grant 100 Bonus Health and convert 120% of lost Health into Bonus Health"
                },
                "transformation_id": 0
            },
            {
                "id": 103571,
                "icon": "abilities\/1035\/103571.webp",
                "name": "Feast Of The Abyss",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Burrow underground for free movement. After a duration or by pressing {PrimaryAttack}, devour enemies above to deal damage based on the enemy's current health and generate equivalent <Buff>Bonus Health<\/>. Devoured enemies suffer <Debuff>Reduced Healing<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "7m spherical radius",
                    "Damage": "Inflict damage equal to 50% of the target's health, followed by an additional 50 damage",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Energy Cost": "2500",
                    "Movement Boost": "80%",
                    "Special Effect": "100% of damage dealt is converted into Bonus Health",
                    "Maximum Duration": "4s",
                    "HEALING REDUCTION DURATION": "4s",
                    "\n\t\t\t\t\t\tHEALING REDUCTION PROPORTION\n\t\t\t\t\t\t": "30%"
                },
                "transformation_id": 0
            },
            {
                "id": 103581,
                "icon": "abilities\/1035\/103581.webp",
                "name": "Touch Of Klyntar",
                "type": "Normal",
                "isCollab": true,
                "description": "Venom shares a part of his symbiotes with {103600}{000003}{104200}, activating their symbiote abilities. {103600}{000003}{104200} can convert the symbiotes into explosive spikes that inflict harm on nearby enemies and relentlessly drive them back.",
                "transformation_id": 0
            },
            {
                "id": 103582,
                "icon": "abilities\/1035\/103582.webp",
                "name": "Healing Tendrils",
                "type": "Passive",
                "isCollab": true,
                "description": "Venom shares his symbiotes with Jeff and Hela. Jeff's <Orange>Guardian of the Deep<\/> links with nearby allies for continuous healing, releasing a large healing burst that converts any excess into <Buff>Bonus Health<\/> when it ends. Hela's <Orange>Hel Tendrils<\/> unleash a symbiotic Hel Sphere that pulls in nearby enemies and links them, <Debuff>slowing<\/> those that try to escape.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+150 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "31.00",
                "mover_shaker": "22.00",
                "rank_calc": "3.85",
                "mover_shaker_calc": "0.00",
                "ZScore": "0.23",
                "winrate": "48.06",
                "pickrate": "11.82",
                "banrate": "0.30",
                "usage_trend": "Upward",
                "winrate_prev": "47.95",
                "pickrate_prev": "9.79",
                "banrate_prev": "0.26",
                "winrate_change": "0.00",
                "pickrate_change": "21.00",
                "banrate_change": "15.00"
            },
            {
                "date": "1755216000",
                "rank": "32.00",
                "mover_shaker": "27.00",
                "rank_calc": "3.81",
                "mover_shaker_calc": "-0.44",
                "ZScore": "0.18",
                "winrate": "47.95",
                "pickrate": "9.79",
                "banrate": "0.26",
                "usage_trend": "Downward",
                "winrate_prev": "47.66",
                "pickrate_prev": "9.87",
                "banrate_prev": "0.22",
                "winrate_change": "1.00",
                "pickrate_change": "-1.00",
                "banrate_change": "18.00"
            }
        ]
    },
    {
        "id": "1036",
        "name": "Spider-man",
        "real_name": "Peter Parker",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/spider-man-headbig-0.webp",
                "name": "Spider-man",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Spider Man",
        "description": "Swinging around the arena on his signature weblines, your friendly neighborhood Spider-Man, AKA Peter Parker, catches his rivals by surprise with sneaky, sticky bursts of webbing and unexpected attacks from above. Look out... here comes the Spider-Man!",
        "slug": "spider-man",
        "team": [
            "Web_warriors"
        ],
        "difficulty": "5",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/spider-man-square.webp",
        "image_transverse": "characters\/spider-man-transverse.webp",
        "icon": "characters\/spider-man-headbig.webp",
        "image": "characters\/spider-man-portrait.webp",
        "logo_small": "characters\/spider-man-logo.webp",
        "logo": "characters\/spider-man-logo-small.webp",
        "skins": [
            "1036001",
            "1036100",
            "1036800",
            "1036500",
            "1036501",
            "1036300",
            "1036101",
            "1036503",
            "1036504",
            "1036102",
            "1036502"
        ],
        "abilities": [
            {
                "id": 103601,
                "icon": "abilities\/1036\/103601.webp",
                "name": "Thwip And Flip",
                "type": "Passive",
                "isCollab": false,
                "description": "Perform a double jump.",
                "additional_fields": {
                    "Key": "Space",
                    "Special Mechanic": "Can only be cast again after landing"
                },
                "transformation_id": 0
            },
            {
                "id": 103611,
                "icon": "abilities\/1036\/103611.webp",
                "name": "Spider-power",
                "type": "Weapon",
                "isCollab": false,
                "description": "Swing fists forward to strike, dealing extra damage to the enemy with a <Orange>Spider-Tracer<\/>.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Kick": " ",
                    "Punch": " ",
                    "Damage": "40",
                    "Casting": "Melee",
                    "Attack Interval": "0.82s per kick",
                    "Maximum Distance": "4m",
                    "Special Mechanic": "The default attack is a punch, but after landing two consecutive punches, the next attack will be a flying kick"
                },
                "transformation_id": 0
            },
            {
                "id": 103621,
                "icon": "abilities\/1036\/103621.webp",
                "name": "Web-cluster",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot a Web-Cluster that deals damage and attaches a <Orange>Spider-Tracer<\/> to the hit enemy.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "30",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Charges": "5",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 50% at 40m",
                    "Recharge Speed": "2.5s per shot",
                    "Projectile Speed": "120 m\/s",
                    "Spider-Tracer Damage": "45",
                    "Spider-Tracer Duration": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 103631,
                "icon": "abilities\/1036\/103631.webp",
                "name": "Get Over Here!",
                "type": "Normal",
                "isCollab": false,
                "description": "Shoot webbing to reel in the hit enemy. If the enemy is tagged with a <Orange>Spider-Tracer<\/>, Spider-Man will get pulled to them instead.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Cooldown": "8s",
                    "Kick Damage": "55",
                    "Kicking Distance": "24m",
                    "Maximum Distance": "20m",
                    "Projectile Speed": "80 m\/s",
                    "Special Mechanic": "Attack enemies marked with a Spider-Tracer, pulling Spider-Man towards them and performing a flying kick",
                    "Projectile Damage": "25"
                },
                "transformation_id": 0
            },
            {
                "id": 103651,
                "icon": "abilities\/1036\/103651.webp",
                "name": "Spectacular Spin",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Launch Web-Clusters all around to damage and <Debuff>Stun<\/> enemies.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "8m spherical radius",
                    "Damage": "13.6 damage per hit",
                    "Casting": "Spherical Spell Field",
                    "Duration": "2.4s",
                    "Energy Cost": "2800",
                    "Slow Effect": "-3% per hit",
                    "Slow Duration": "1s",
                    "Stun Duration": "1.5s",
                    "Special Effect": "Striking an enemy applies a stacking Slow effect, and after reaching a certain number of stacks, the enemy will be Stunned",
                    "Attack Interval": "0.08s per hit",
                    "Bonus Health (Self)": "250",
                    "Hits Required to Stun": "20"
                },
                "transformation_id": 0
            },
            {
                "id": 103662,
                "icon": "abilities\/1036\/103662.webp",
                "name": "Spider-sense",
                "type": "Passive",
                "isCollab": false,
                "description": "Give a warning of enemies that have been around.",
                "additional_fields": {
                    "Key": "Passive",
                    "Range": "8m spherical radius",
                    "Disappearance Time To Trigger Detection": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 103641,
                "icon": "abilities\/1036\/103641.webp",
                "name": "Web-swing",
                "type": "Normal",
                "isCollab": false,
                "description": "Shoot a strand of webbing to swing.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Charges": "3",
                    "Recharge Speed": "6s per charge",
                    "Maximum Webbing Length": "30m"
                },
                "transformation_id": 0
            },
            {
                "id": 103671,
                "icon": "abilities\/1036\/103671.webp",
                "name": "Wall Crawl",
                "type": "Normal",
                "isCollab": false,
                "description": "PRESS {Jump} to crawl on vertical surfaces, and PRESS {PrimaryAttack} to run on them.",
                "additional_fields": {
                    "Key": "Space",
                    "Sprinting Speed": "9 m\/s",
                    "Wall-Crawling Speed": "3 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103613,
                "icon": "abilities\/1036\/103613.webp",
                "name": "Amazing Combo",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch an enemy upward, dealing extra damage to the enemy with a <Orange>Spider-Tracer<\/>.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "4m spherical radius",
                    "Damage": "60",
                    "Casting": "Melee",
                    "Charges": "2",
                    "Cooldown": "2s",
                    "Recharge Speed": "6s per charge"
                },
                "transformation_id": 0
            },
            {
                "id": 103692,
                "icon": "abilities\/1036\/103692.webp",
                "name": "Suit Expulsion",
                "type": "Normal",
                "isCollab": true,
                "description": "Venom shares a part of his symbiotes with {103600}{000003}{104200}, activating their symbiote abilities. {103600}{000003}{104200} can convert the symbiotes into explosive spikes that inflict harm on nearby enemies and relentlessly drive them back.",
                "transformation_id": 0
            },
            {
                "id": 103691,
                "icon": "abilities\/1036\/103691.webp",
                "name": "Extra Web-fluid",
                "type": "Normal",
                "isCollab": true,
                "description": "Spider-Man gives Squirrel Girl a web bomb. She can launch it to unleash an explosion upon contact with the environment or an enemy, briefly <Debuff>Immobilizing<\/> and damaging enemies caught in the blast.",
                "transformation_id": 0
            },
            {
                "id": 103693,
                "icon": "abilities\/1036\/103693.webp",
                "name": "Inferno Blast",
                "type": "Normal",
                "isCollab": true,
                "description": "Human Torch stores <Orange>Pyrokinetic Energy<\/> in Spider-Man's suit, enabling him to unleash an <Orange>Inferno Blast<\/> that sprays a fiery web while performing a backflip to create distance. The flames damage enemies and apply a <Orange>Burn-Tracer<\/>. Detonating these <Orange>Burn-Tracers<\/> inflicts Damage Over Time.",
                "additional_fields": {
                    "Key": "C",
                    "Damage": "30",
                    "Cooldown": "12s",
                    "Maximum Distance": "8m",
                    "Backflip Distance": "7m",
                    "Burn-Tracer Duration": "3s",
                    "Burn-Tracer DoT Damage": "15\/s",
                    "Burn-Tracer DoT Duration": "4s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "30.00",
                "mover_shaker": "25.00",
                "rank_calc": "3.85",
                "mover_shaker_calc": "-0.11",
                "ZScore": "0.22",
                "winrate": "48.44",
                "pickrate": "15.13",
                "banrate": "3.29",
                "usage_trend": "Upward",
                "winrate_prev": "47.97",
                "pickrate_prev": "13.89",
                "banrate_prev": "2.83",
                "winrate_change": "1.00",
                "pickrate_change": "9.00",
                "banrate_change": "16.00"
            },
            {
                "date": "1755216000",
                "rank": "26.00",
                "mover_shaker": "11.00",
                "rank_calc": "3.89",
                "mover_shaker_calc": "0.48",
                "ZScore": "0.21",
                "winrate": "47.97",
                "pickrate": "13.89",
                "banrate": "2.83",
                "usage_trend": "Downward",
                "winrate_prev": "47.22",
                "pickrate_prev": "14.60",
                "banrate_prev": "3.10",
                "winrate_change": "2.00",
                "pickrate_change": "-5.00",
                "banrate_change": "-9.00"
            }
        ]
    },
    {
        "id": "1037",
        "name": "Magneto",
        "real_name": "Max Eisenhardt",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/magneto-headbig-0.webp",
                "name": "Magneto",
                "health": "650",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Magneto",
        "description": "The Master of Magnetism bends even the strongest metal to his whims, shielding his allies and striking at his foes. Whether he calls himself Max Eisenhardt, Erik Lehnsherr, or simply Magneto, the hardships this warrior has endured have made him as unbreakable as the steel he brandishes. ",
        "slug": "magneto",
        "team": [
            "X_men",
            "Mutants",
            "Villains"
        ],
        "difficulty": "2",
        "attack_type": "Projectile Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/magneto-square.webp",
        "image_transverse": "characters\/magneto-transverse.webp",
        "icon": "characters\/magneto-headbig.webp",
        "image": "characters\/magneto-portrait.webp",
        "logo_small": "characters\/magneto-logo.webp",
        "logo": "characters\/magneto-logo-small.webp",
        "skins": [
            "1037001",
            "1037100",
            "1037500",
            "1037501",
            "1037101",
            "1037300",
            "1037302"
        ],
        "abilities": [
            {
                "id": 103702,
                "icon": "abilities\/1037\/103702.webp",
                "name": "Magnetic Descent",
                "type": "Passive",
                "isCollab": false,
                "description": "Hold {Jump} to fall slowly.",
                "additional_fields": {
                    "Key": "Space",
                    "Descending Speed": "3.5m\/s",
                    "Horizontal Movement Speed": "6m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103711,
                "icon": "abilities\/1037\/103711.webp",
                "name": "Iron Volley",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire a volley of magnetic orbs forward. The range of the resulting explosion increases based on distance flown.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "Initially, it produces a spell field with a 1m spherical radius; when the projectile reaches maximum distance, the explosion radius expands to a spell field with a 3m spherical radius",
                    "Damage": "Projectile Damage: 40. The spell field deals 40 damage at its center, reducing to 50% within a 3m radius from the center",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Charges": "10",
                    "Attack Interval": "0.8s",
                    "Maximum Distance": "25m",
                    "Projectile Speed": "80m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103721,
                "icon": "abilities\/1037\/103721.webp",
                "name": "Mag-cannon",
                "type": "Normal",
                "isCollab": false,
                "description": "Convert the iron rings on Magneto's back into a Mag-Cannon and launch a metallic mass forward. Higher stacks of rings increase damage, and full stacks <Debuff>Knock Back<\/> enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "Iron Rings' first charge deals 40 damage, the second charge deals 65 damage, and the third charge deals 90 damage",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Cooldown": "No cooldown, but the ability can only be activated when the Iron Ring has at least one charge",
                    "Critical Hit": "No",
                    "Special Effect": "When fully charged, the Iron Ring has a 6m knockback distance",
                    "Projectile Speed": "120m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103731,
                "icon": "abilities\/1037\/103731.webp",
                "name": "Metallic Curtain",
                "type": "Normal",
                "isCollab": false,
                "description": "Change the magnetic field around to form a metallic curtain, blocking all incoming <Orange>Projectiles<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Shield",
                    "Cooldown": "3s",
                    "Energy Cost": "65\/s",
                    "Maximum Energy": "100",
                    "Energy Recovery Delay": "1s",
                    "Energy Recovery Speed": "11\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103741,
                "icon": "abilities\/1037\/103741.webp",
                "name": "Metal Bulwark",
                "type": "Normal",
                "isCollab": false,
                "description": "Conjure a metal shield around a chosen ally. Damage taken will transform into rings on Magneto's back.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "12s, and sharing cooldown with Iron Bulwark",
                    "Shield Value": "250",
                    "Special Effect": "The shield grants one charge of Iron Ring for every 100 damage it absorbs",
                    "Maximum Distance": "20m",
                    "Max Shield Duration": "2.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103761,
                "icon": "abilities\/1037\/103761.webp",
                "name": "Meteor M",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Draw in all materials around to forge an iron meteor that deals massive damage upon impact. Absorbing enemy <Orange>Projectiles<\/> can enhance the meteor's power, yet overloading will cause it to self-destruct.",
                "additional_fields": {
                    "Key": "Q",
                    "Damage": "The projectile deals no damage. The base damage at the center of the spell field starts at 100 and increases to 300 when fully charged. Each point of Energy adds an extra 3 points of damage to the spell field, with damage reducing to 50% at a distance of 6m from the center",
                    "Casting": "Create a persistent spell field that launches a projectile upon completion, which generates another spell field on impact",
                    "Energy Cost": "3400",
                    "Special Effect": "For each point of projectile damage absorbed, the power increases by 0.125, with a maximum absorption of 800 projectile damage",
                    "Explosion Range": "Initially, the ability has a spherical range with a radius of 5m. After charging for 4s, it expands to an 8m radius",
                    "Maximum Duration": "4s",
                    "Projectile Speed": "30m\/s",
                    "Projectile Absorption Range": "15m spherical radius"
                },
                "transformation_id": 0
            },
            {
                "id": 103791,
                "icon": "abilities\/1037\/103791.webp",
                "name": "Metallic Fusion",
                "type": "Normal",
                "isCollab": true,
                "description": "Scarlet Witch can infuse Chaos Energy into Magneto to enchant his greatsword. Upon receiving the Chaos Energy, Magneto can unleash its full force, striking down enemies with his enchanted greatsword.",
                "transformation_id": 0
            },
            {
                "id": 103743,
                "icon": "abilities\/1037\/103743.webp",
                "name": "Iron Bulwark",
                "type": "Normal",
                "isCollab": false,
                "description": "Conjure an iron shield around himself. Damage taken will transform into rings on Magneto's back.",
                "additional_fields": {
                    "Key": "F",
                    "Cooldown": "12s, and sharing cooldown with Metal Bulwark",
                    "Shield Value": "250",
                    "Special Effect": "The shield grants one charge of Iron Ring for every 100 damage it absorbs",
                    "Max Shield Duration": "2.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103792,
                "icon": "abilities\/1037\/103792.webp",
                "name": "Magnetic Resonance",
                "type": "Normal",
                "isCollab": true,
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy's perspective that confuses foes by moving and casting abilities on its own.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "30s",
                    "Special Effect": "Upon release, Magneto and his Duplicate Illusion become invisible. The damage dealt by the projection is reduced, and it dissipates after taking a specific amount of damage",
                    "Invisibility Duration": "1s",
                    "Duplicate Damage Reduction": "80%",
                    "Duplicate Max Damage Received": "150"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "23.00",
                "mover_shaker": "20.00",
                "rank_calc": "3.90",
                "mover_shaker_calc": "0.03",
                "ZScore": "0.23",
                "winrate": "47.83",
                "pickrate": "27.89",
                "banrate": "1.54",
                "usage_trend": "Upward",
                "winrate_prev": "47.76",
                "pickrate_prev": "27.35",
                "banrate_prev": "1.52",
                "winrate_change": "0.00",
                "pickrate_change": "2.00",
                "banrate_change": "1.00"
            },
            {
                "date": "1755216000",
                "rank": "23.00",
                "mover_shaker": "24.00",
                "rank_calc": "3.91",
                "mover_shaker_calc": "-0.30",
                "ZScore": "0.19",
                "winrate": "47.76",
                "pickrate": "27.35",
                "banrate": "1.52",
                "usage_trend": "Downward",
                "winrate_prev": "48.41",
                "pickrate_prev": "29.16",
                "banrate_prev": "1.57",
                "winrate_change": "-1.00",
                "pickrate_change": "-6.00",
                "banrate_change": "-3.00"
            }
        ]
    },
    {
        "id": "1038",
        "name": "Scarlet Witch",
        "real_name": "Wanda Maximoff",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/scarlet-witch-headbig-0.webp",
                "name": "Scarlet Witch",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Scarlet Witch",
        "description": "Wanda Maximoff is adept at harnessing formidable chaos magic, casting hexes with the power to twist and reshape reality itself. Energy, space, and matter are mere playthings in the hands of Scarlet Witch!",
        "slug": "scarlet-witch",
        "team": [
            "Avengers"
        ],
        "difficulty": "1",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/scarlet-witch-square.webp",
        "image_transverse": "characters\/scarlet-witch-transverse.webp",
        "icon": "characters\/scarlet-witch-headbig.webp",
        "image": "characters\/scarlet-witch-portrait.webp",
        "logo_small": "characters\/scarlet-witch-logo.webp",
        "logo": "characters\/scarlet-witch-logo-small.webp",
        "skins": [
            "1038001",
            "1038100",
            "1038800",
            "1038500",
            "1038501",
            "1038101",
            "1038300",
            "ps1038303",
            "ps1038302",
            "1038301"
        ],
        "abilities": [
            {
                "id": 103871,
                "icon": "abilities\/1038\/103871.webp",
                "name": "Telekinesis",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD {Jump} to fall slowly.",
                "additional_fields": {
                    "Key": "Space",
                    "Descending Speed": "3.5 m\/s",
                    "Horizontal Movement Speed": "6 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103811,
                "icon": "abilities\/1038\/103811.webp",
                "name": "Chaos Control",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash Chaos Magic on enemies to deal damage and restore <Orange>Chaos Energy<\/>",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Infinite",
                    "Range": "A cylindrical spell field with a radius of 3m and a height of 20m",
                    "Damage": "8 per hit",
                    "Casting": "Cylindrical Spell Field",
                    "Fire Rate": "0.1s per hit",
                    "Critical Hit": "No",
                    "Special Effect 1": "Attack the nearest enemy within range",
                    "Special Effect 2": "Hitting with Chaos Control charges Chthonian Burst",
                    "Chthonian Burst Recharge Per Hit": "0.08 per hit"
                },
                "transformation_id": 0
            },
            {
                "id": 103821,
                "icon": "abilities\/1038\/103821.webp",
                "name": "Chthonian Burst",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume <Orange>Chaos Energy<\/> to fire explosive magic missiles, damaging enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m spherical radius",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Charges": "4",
                    "Projectile Speed": "120 m\/s",
                    "Projectile Damage": "40",
                    "Spell Field Damage": "40",
                    "Default Charging Speed": "0.2\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 103831,
                "icon": "abilities\/1038\/103831.webp",
                "name": "Dark Seal",
                "type": "Normal",
                "isCollab": false,
                "description": "Land a hit on a target or the scene, or press again to generate a Force Field that periodically <Debuff>Stuns<\/> enemies within range.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "3m spherical radius",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Cooldown": "12s",
                    "Projectile Speed": "40 m\/s",
                    "Detection Interval": "1.25s",
                    "Spell Field Duration": "4.5s",
                    "Stun Duration Per Detection": "0.5s",
                    "Spell Field Generation Delay": "0.8s"
                },
                "transformation_id": 0
            },
            {
                "id": 103841,
                "icon": "abilities\/1038\/103841.webp",
                "name": "Mystic Projection",
                "type": "Normal",
                "isCollab": false,
                "description": "Enter the <Orange>Phased<\/> state for free-flight. Press {Ability2} to exit early.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Dash",
                    "Charges": "2",
                    "Duration": "1.5s",
                    "Movement Boost": "50%",
                    "Recharge Speed": "10s per charge",
                    "Special Effect": "During this period, Scarlet Witch enters the Projection state, can be healed by teammates"
                },
                "transformation_id": 0
            },
            {
                "id": 103851,
                "icon": "abilities\/1038\/103851.webp",
                "name": "Reality Erasure",
                "type": "Normal",
                "isCollab": false,
                "description": "Engage in free-flight while charging energy and continuously <Debuff>pulling in<\/> nearby enemies, then unleash it to deal massive damage.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "15m spherical radius",
                    "Damage": "9999",
                    "Casting": "Spherical Spell Field",
                    "Slow Rate": "Begin to slow down by 1.5s, with the effect gradually increasing to -25% by 3.5s",
                    "Charge Time": "4s",
                    "Energy Cost": "3400",
                    "Special Effect": "During this period, Scarlet Witch enters a Free-flight state, pulls in nearby enemies (within 15m radius) during cast charge. Max pull speed up to 2.4m\/s",
                    "Bonus Health (Self)": "100"
                },
                "transformation_id": 0
            },
            {
                "id": 103881,
                "icon": "abilities\/1038\/103881.webp",
                "name": "Chaotic Bond",
                "type": "Normal",
                "isCollab": true,
                "description": "Scarlet Witch can infuse Chaos Energy into Magneto to enchant his greatsword. Upon receiving the Chaos Energy, Magneto can unleash its full force, striking down enemies with his enchanted greatsword.",
                "transformation_id": 0
            },
            {
                "id": 103891,
                "icon": "abilities\/1038\/103891.webp",
                "name": "Sorcery Surge",
                "type": "Normal",
                "isCollab": true,
                "description": "Doctor Strange shares his arcane mastery with Scarlet Witch and Magik. Scarlet Witch's <Orange>Chthonian Burst<\/> is replaced with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction. Magik can unleash a <Orange>Chain of Cyttorak<\/> that links two enemies and slows them; the farther they are apart, the greater the <Debuff>Slow<\/> effect inflicted during the link.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Cooldown": "30s",
                    "Duration": "10s",
                    "Fire Rate": "0.15s per round",
                    "Projectile Speed": "120 m\/s",
                    "Special Mechanic": "Chaos Control can released during the Sorcery Surge",
                    "Projectile Damage": "10",
                    "Spell Field Range": "1.5m spherical radius",
                    "Spell Field Damage": "6"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "19.00",
                "mover_shaker": "33.00",
                "rank_calc": "3.93",
                "mover_shaker_calc": "-0.70",
                "ZScore": "0.17",
                "winrate": "48.79",
                "pickrate": "14.00",
                "banrate": "0.44",
                "usage_trend": "Upward",
                "winrate_prev": "47.99",
                "pickrate_prev": "9.82",
                "banrate_prev": "0.27",
                "winrate_change": "2.00",
                "pickrate_change": "43.00",
                "banrate_change": "63.00"
            },
            {
                "date": "1755216000",
                "rank": "31.00",
                "mover_shaker": "13.00",
                "rank_calc": "3.82",
                "mover_shaker_calc": "0.44",
                "ZScore": "0.21",
                "winrate": "47.99",
                "pickrate": "9.82",
                "banrate": "0.27",
                "usage_trend": "Downward",
                "winrate_prev": "46.75",
                "pickrate_prev": "10.87",
                "banrate_prev": "0.28",
                "winrate_change": "3.00",
                "pickrate_change": "-10.00",
                "banrate_change": "-4.00"
            }
        ]
    },
    {
        "id": "1039",
        "name": "Thor",
        "real_name": "Thor Odinson",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/thor-headbig-0.webp",
                "name": "Thor",
                "health": "600",
                "movement_speed": "6.5 m\/s"
            }
        ],
        "en_name": "Thor",
        "description": "The son of Odin taps into his divine power to call forth thunder and lightning, raining down relentless fury upon his enemies. With his mighty hammer Mjölnir in hand, Thor effortlessly asserts his dominance on the field of combat.",
        "slug": "thor",
        "team": [
            "Avengers",
            "Godsofasgard"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/thor-square.webp",
        "image_transverse": "characters\/thor-transverse.webp",
        "icon": "characters\/thor-headbig.webp",
        "image": "characters\/thor-portrait.webp",
        "logo_small": "characters\/thor-logo.webp",
        "logo": "characters\/thor-logo-small.webp",
        "skins": [
            "1039001",
            "1039100",
            "1039800",
            "1039500",
            "1039502",
            "1039501",
            "1039503",
            "1039300",
            "ps1039302"
        ],
        "abilities": [
            {
                "id": 103901,
                "icon": "abilities\/1039\/103901.webp",
                "name": "Thorforce",
                "type": "Passive",
                "isCollab": false,
                "description": "Consume <Orange>Thorforce<\/> to gain <Buff>Bonus Health<\/>. Landing <Orange>Mjölnir Bash<\/> on an enemy instantly recharges <Orange>Thorforce<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Max Health": "150",
                    "Maximum Thorforce": "3",
                    "Thorforce Recovery Speed": "5s per Thorforce",
                    "Bonus Health Per Thorforce": "Each point of Thorforce consumed grants 75 Bonus Health, while abilities that consume 3 points of Thorforce grant 150 Bonus Health",
                    "Thorforce Consumption Cooldown": "1.5s",
                    "Mjolnir Bash Energy Recovery Per Thorforce": "5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103911,
                "icon": "abilities\/1039\/103911.webp",
                "name": "Mjölnir Bash",
                "type": "Normal",
                "isCollab": false,
                "description": "Wield Mjölnir to strike enemies. When <Orange>Awakened<\/>, Thor can launch lightning arc waves to deal damage.",
                "transformation_id": 0
            },
            {
                "id": 103921,
                "icon": "abilities\/1039\/103921.webp",
                "name": "Hammer Throw",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw Mjolnir forward which then returns. Restore <Orange>Thorforce<\/> upon hit.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "Outward Projectile Damage: 45; Returning Projectile Damage: 20",
                    "Casting": "Launch a single-target projectile that returns after a delayed hit",
                    "Cooldown": "6s",
                    "Critical Hit": "No",
                    "Maximum Distance": "24m",
                    "Projectile Speed": "The projectile travels outward at a speed of 60m per second and returns at a speed of 80m per second"
                },
                "transformation_id": 0
            },
            {
                "id": 103931,
                "icon": "abilities\/1039\/103931.webp",
                "name": "Lightning Realm",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon lightning to restore <Orange>Thorforce<\/> based on the number of hit enemies. Enemies leaving the Lightning Realm will suffer <Debuff>Slow<\/> and <Debuff>Grounded<\/> effects.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "5m spherical radius",
                    "Damage": "Deal 40 damage when enemies cross the boundaries",
                    "Casting": "Persistent Spell Field",
                    "Cooldown": "12s",
                    "Special Effect": "For each enemy within the spell area, 1 point of Thorforce is restored. Enemies that cross the boundary will be Slowed by 30%, Enemies that cross the boundary will receive an additional debuff that restricts aerial abilities for 2s.",
                    "Maximum Duration": "4s"
                },
                "transformation_id": 0
            },
            {
                "id": 103941,
                "icon": "abilities\/1039\/103941.webp",
                "name": "Storm Surge",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD to spin Mjölnir before dashing forward and <Debuff>Knocking Back<\/> enemies.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Damage": "No Charge Damage: 40; Full Charge Damage: 60",
                    "Casting": "Charged Dash",
                    "Dash Distance": "No charge: 10m; Full charge: 20m. When carrying an enemy, the ranges are 6m with no charge and 13m with full",
                    "Thorforce Cost": "1",
                    "Maximum Charge Time": "2s"
                },
                "transformation_id": 0
            },
            {
                "id": 103951,
                "icon": "abilities\/1039\/103951.webp",
                "name": "Awakening Rune",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume <Orange>Thorforce<\/> to enter the <Orange>Awakened<\/> state, granting <Buff>Bonus Health<\/> and enhancing Mjölnir Bash. Gain <Orange>Thorforce<\/> upon exiting the state.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "3m spherical radius",
                    "Damage": "Projectile Damage: 70, Spell Field Damage: 15 per second",
                    "Casting": "Ability Enhancement",
                    "Duration": "5s",
                    "Key (Enhanced)": "Left Click",
                    "Special Effect": "Inflict damage over time on nearby enemies; After casting Awakening Rune, you can manually cancel the Awakened state after a brief delay. At the end of the Awakened state, Thor restores 1 point of Thunderforce.",
                    "Thorforce Cost": "3",
                    "Attack Interval": "The first three stages last for 0.4s each, while the fourth stage lasts for 0.8s",
                    "Projectile Speed": "60 m\/s",
                    "Max Shield Duration": "2.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 103961,
                "icon": "abilities\/1039\/103961.webp",
                "name": "God Of Thunder",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Soar upwards and smite the ground after charging for a duration, inflicting damage and <Debuff>stunning<\/> enemies within range.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "The sustained spell field is cylindrical, measuring 8m in radius and 20m in height, whereas the one-time spell field has an 8m spherical radius",
                    "Damage": "The sustained spell field lasts for 0.5s, dealing 40 damage, while the one-time spell field deals 220 damage",
                    "Height": "9m",
                    "Casting": "A persistent spell field that generates a one-time spell field upon expiration",
                    "Duration": "1.5s",
                    "Energy Cost": "3100",
                    "Special Effect": "After Ultimate Ability lands, Stun surrounding enemies for 1s"
                },
                "transformation_id": 0
            },
            {
                "id": 103902,
                "icon": "abilities\/1039\/103902.webp",
                "name": "Odinson Reborn",
                "type": "Passive",
                "isCollab": true,
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect Thor in the respawn phase, or grant him <Buff>Bonus Health<\/> if he is still alive.",
                "transformation_id": 0
            },
            {
                "id": 103981,
                "icon": "abilities\/1039\/103981.webp",
                "name": "Thunderous Deity",
                "type": "Passive",
                "isCollab": true,
                "description": "Thor infuses <Orange>Thorforce<\/> into {101500}{000003}{102200}, granting them an electrifying enhancement. {101501}{102201}",
                "transformation_id": 0
            },
            {
                "id": 103991,
                "icon": "abilities\/1039\/103991.webp",
                "name": "Thunderstrike Pike",
                "type": "Normal",
                "isCollab": true,
                "description": "Angela shares fragments of her Ichors with Thor, empowering him to hurl a <Orange>Thunder Spear<\/> that restores <Orange>Thorforce<\/> for each enemy struck. Afterward, Thor can leap to the spear's explosion point, dealing a second wave of damage to all enemies within range.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "30s",
                    "Projectile Speed": "80m\/s",
                    "Projectile Damage": "25",
                    "Hit Ground Maximum Distance": "30m",
                    "Hit Ground Spell Field Range": "5m",
                    "Hit Ground Spell Field Damage": "45",
                    "Projectile-Generated Spell Field Range": "5m",
                    "Projectile-Generated Spell Field Damage": "30"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "10.00",
                "mover_shaker": "29.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "-0.40",
                "ZScore": "0.20",
                "winrate": "51.37",
                "pickrate": "15.32",
                "banrate": "0.29",
                "usage_trend": "Upward",
                "winrate_prev": "51.71",
                "pickrate_prev": "14.76",
                "banrate_prev": "0.26",
                "winrate_change": "-1.00",
                "pickrate_change": "4.00",
                "banrate_change": "12.00"
            },
            {
                "date": "1755216000",
                "rank": "8.00",
                "mover_shaker": "32.00",
                "rank_calc": "4.16",
                "mover_shaker_calc": "-1.01",
                "ZScore": "0.17",
                "winrate": "51.71",
                "pickrate": "14.76",
                "banrate": "0.26",
                "usage_trend": "Upward",
                "winrate_prev": "50.51",
                "pickrate_prev": "12.35",
                "banrate_prev": "0.16",
                "winrate_change": "2.00",
                "pickrate_change": "20.00",
                "banrate_change": "63.00"
            }
        ]
    },
    {
        "id": "1040",
        "name": "Mister Fantastic",
        "real_name": "Reed Richards",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/mister-fantastic-headbig-0.webp",
                "name": "Mister Fantastic",
                "health": "375",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Mister Fantastic",
        "description": "Reed Richards believes that true strength comes from remaining flexible, both mentally and physically. Mister Fantastic's elastic body, which can twist and stretch into any form with ease, is almost as impressive as his brilliant mind.",
        "slug": "mister-fantastic",
        "team": [
            "Fantasticfour"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/mister-fantastic-square.webp",
        "image_transverse": "characters\/mister-fantastic-transverse.webp",
        "icon": "characters\/mister-fantastic-headbig.webp",
        "image": "characters\/mister-fantastic-portrait.webp",
        "logo_small": "characters\/mister-fantastic-logo.webp",
        "logo": "characters\/mister-fantastic-logo-small.webp",
        "skins": [
            "1040001",
            "1040100",
            "1040300",
            "1040500",
            "1040501",
            "1040800",
            "1040101"
        ],
        "abilities": [
            {
                "id": 104001,
                "icon": "abilities\/1040\/104001.webp",
                "name": "Elastic Strength",
                "type": "Passive",
                "isCollab": false,
                "description": "Using abilities generates <Orange>Elasticity<\/>. Reaching full <Orange>Elasticity<\/> triggers an Inflated state that grants <Buff>Shield<\/> and enhanced damage.",
                "additional_fields": {
                    "Key": "Passive",
                    "Damage": "80",
                    "Bonus Health": "350",
                    "Max Elasticity": "100",
                    "Movement Boost": "20%",
                    "Attack Interval": "0.92s per hit",
                    "Maximum Distance": "8m",
                    "Inflated Duration": "6s"
                },
                "transformation_id": 0
            },
            {
                "id": 104011,
                "icon": "abilities\/1040\/104011.webp",
                "name": "Stretch Punch",
                "type": "Weapon",
                "isCollab": false,
                "description": "Stretch out a forward punch to attack enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Infinite",
                    "Casting": "Straight Spell Field",
                    "Critical Hit": "None",
                    "Attack Interval": "1.1s per hit",
                    "Special Mechanic": "Swinging your arms can attack multiple targets",
                    "Gained Elasticity": "8",
                    "Spell Field Range": "15m",
                    "Spell Field Damage": "65"
                },
                "transformation_id": 0
            },
            {
                "id": 104031,
                "icon": "abilities\/1040\/104031.webp",
                "name": "Distended Grip",
                "type": "Normal",
                "isCollab": false,
                "description": "Extend arms forward to entangle an enemy, then press {PrimaryAttack} to pull the hit enemy toward you, or select and yank another enemy, <Debuff>knocking them airborne<\/> against each other. Hit targets are <Debuff>Immobilized<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Cooldown": "6s",
                    "Special Effect": "After successfully pulling an enemy with Distended Grip, the target is afflicted with a 1-second immobilize effect",
                    "Projectile Speed": "60 m\/s",
                    "Gained Elasticity": "30",
                    "Dual-Target Pull Damage": "30",
                    "Initial Projectile Range": "20m",
                    "Single-Target Pull Range": "10m",
                    "Initial Projectile Damage": "20",
                    "Single-Target Pull Damage": "50",
                    "Secondary Projectile Damage": "20",
                    "Secondary Release Maximum Distance": "25m"
                },
                "transformation_id": 0
            },
            {
                "id": 104041,
                "icon": "abilities\/1040\/104041.webp",
                "name": "Flexible Elongation",
                "type": "Normal",
                "isCollab": false,
                "description": "Gain a <Buff>Shield<\/>, select a target, and dash towards them, dealing damage to enemies and granting a <Buff>Shield<\/> to allies.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "30",
                    "Charges": "2",
                    "Cooldown": "8s",
                    "Slow Rate": "-35%",
                    "Slow Duration": "1.5s",
                    "Gained Elasticity": "20",
                    "Bonus Health (Ally)": "75",
                    "Bonus Health (Self)": "75",
                    "Maximum Select Distance": "15m"
                },
                "transformation_id": 0
            },
            {
                "id": 104051,
                "icon": "abilities\/1040\/104051.webp",
                "name": "Reflexive Rubber",
                "type": "Normal",
                "isCollab": false,
                "description": "Stretch body to absorb damage before launching stored damage in the targeted direction.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Cooldown": "12s",
                    "Shield Value": "300",
                    "Self Slow Rate": "-35%",
                    "Maximum Duration": "3s",
                    "Reflected Projectile Speed": "80 m\/s",
                    "Damage Absorbed - Damage Reflected Conversion Rate": "60%"
                },
                "transformation_id": 0
            },
            {
                "id": 104061,
                "icon": "abilities\/1040\/104061.webp",
                "name": "Brainiac Bounce",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Leap upward and smash the ground, <Debuff>slowing<\/> enemies within range. Can leap again upon landing a hit.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m spherical radius",
                    "Casting": "Spherical Spell Field",
                    "Slow Rate": "Per Leap -10%, Can Stack, Max -60%",
                    "Energy Cost": "3400",
                    "Maximum Leaps": "6",
                    "Minimum Leaps": "3",
                    "Slow Duration": "3s",
                    "Damage Falloff": "Start at 3m, 71.4% falloff at 10m",
                    "Special Mechanic": "When Mister Fantastic uses Brainiac Bounce (Ultimate Ability), immediately gain Bonus Health equal to that gained when entering inflated state",
                    "Spell Field Damage": "Initial 70, Each Additional Leap +14, Max 140"
                },
                "transformation_id": 0
            },
            {
                "id": 104091,
                "icon": "abilities\/1040\/104091.webp",
                "name": "Wedded Harmony",
                "type": "Normal",
                "isCollab": true,
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify the entire Fantastic Four team. This formidable force bolsters Human Torch, The Thing, and Mister Fantastic, granting damage resistance. Once activated, they can continually generate <Buff>Bonus Health<\/>, making up for lost Health.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "25s",
                    "Duration": "5s",
                    "Bonus Max Health": "100",
                    "Bonus Health Growth": "Generate 5 Bonus Health per 0.1s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "17.00",
                "mover_shaker": "13.00",
                "rank_calc": "3.98",
                "mover_shaker_calc": "0.51",
                "ZScore": "0.26",
                "winrate": "51.39",
                "pickrate": "7.34",
                "banrate": "0.18",
                "usage_trend": "Downward",
                "winrate_prev": "51.99",
                "pickrate_prev": "7.72",
                "banrate_prev": "0.25",
                "winrate_change": "-1.00",
                "pickrate_change": "-5.00",
                "banrate_change": "-28.00"
            },
            {
                "date": "1755216000",
                "rank": "14.00",
                "mover_shaker": "16.00",
                "rank_calc": "4.03",
                "mover_shaker_calc": "0.21",
                "ZScore": "0.20",
                "winrate": "51.99",
                "pickrate": "7.72",
                "banrate": "0.25",
                "usage_trend": "Downward",
                "winrate_prev": "52.06",
                "pickrate_prev": "11.70",
                "banrate_prev": "0.36",
                "winrate_change": "0.00",
                "pickrate_change": "-34.00",
                "banrate_change": "-31.00"
            }
        ]
    },
    {
        "id": "1041",
        "name": "Winter Soldier",
        "real_name": "James \"bucky\" Barnes",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/winter-soldier-headbig-0.webp",
                "name": "Winter Soldier",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Winter Soldier",
        "description": "Terrifying experiments turned him into a brainwashed assassin, but now James \"Bucky\" Barnes is in control of his own fate once again. With his enhanced mechanical arm, the Winter Soldier is primed to deliver earth-shattering blows to any foe in his path!",
        "slug": "winter-soldier",
        "team": [
            "Avengers"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/winter-soldier-square.webp",
        "image_transverse": "characters\/winter-soldier-transverse.webp",
        "icon": "characters\/winter-soldier-headbig.webp",
        "image": "characters\/winter-soldier-portrait.webp",
        "logo_small": "characters\/winter-soldier-logo.webp",
        "logo": "characters\/winter-soldier-logo-small.webp",
        "skins": [
            "1041001",
            "1041100",
            "1041500",
            "1041300",
            "1041800",
            "ps1041302",
            "1041301",
            "1041501"
        ],
        "abilities": [
            {
                "id": 104101,
                "icon": "abilities\/1041\/104101.webp",
                "name": "Ceaseless Charge",
                "type": "Passive",
                "isCollab": false,
                "description": "Roterstern reloads automatically while the bionic arm is in action, granting the Winter Soldier <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Health (Self)": "40 (Bionic Hook & Tainted Voltage), 50 (Trooper's Fist, Kraken Impact)"
                },
                "transformation_id": 0
            },
            {
                "id": 104121,
                "icon": "abilities\/1041\/104121.webp",
                "name": "Roterstern",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire explosive rounds with his blaster, Roterstern, damaging the target hit and enemies behind them.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "3",
                    "Range": "Cone-shaped spell field with a 5m radius and an apex angle of 90°",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Fire Rate": "2.5 rounds per second",
                    "Critical Hit": "Projectile: Yes; Spell Field: No",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 70% at 40m",
                    "Projectile Speed": "180 m\/s",
                    "Special Mechanic": "Enemies that take damage from the projectile will no longer receive damage from the spell field",
                    "Projectile Damage": "75",
                    "Spell Field Damage": "65"
                },
                "transformation_id": 0
            },
            {
                "id": 104131,
                "icon": "abilities\/1041\/104131.webp",
                "name": "Bionic Hook",
                "type": "Normal",
                "isCollab": false,
                "description": "Charge up and launch a hook with his bionic arm, reeling in the first target hit and enemies lurking behind.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Cone-shaped spell field with a 4.5m radius and an apex angle of 80°",
                    "Casting": "Straight-line projectile that generates a spell field upon impact",
                    "Cooldown": "12s",
                    "Charge Time": "0.5s - 4s",
                    "Projectile Speed": "80 m\/s",
                    "Projectile Damage": "15",
                    "Spell Field Damage": "20"
                },
                "transformation_id": 0
            },
            {
                "id": 104141,
                "icon": "abilities\/1041\/104141.webp",
                "name": "Trooper's Fist",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward, seizing enemies along the path, and <Debuff>Launch Up<\/> enemies in front at the end of the dash.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "Length: 4.5m, Width: 4.5m, Height: 2m",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "12s",
                    "Seize Damage": "25",
                    "Average Speed": "30 m\/s",
                    "Special Effect": "Second strike applies a 1s debuff to enemies hit, preventing them from using mobility abilities",
                    "Knockback Damage": "65",
                    "Maximum Distance": "9m"
                },
                "transformation_id": 0
            },
            {
                "id": 104151,
                "icon": "abilities\/1041\/104151.webp",
                "name": "Tainted Voltage",
                "type": "Normal",
                "isCollab": false,
                "description": "Charge up and launch a powerful electrical punch with the bionic arm in the target direction, dealing damage to enemies within range and <Debuff>Slowing<\/> them. This ability can <Debuff>Knock Down<\/> flying heroes.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "55",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Cooldown": "6s",
                    "Slow Rate": "-35%",
                    "Slow Duration": "2s",
                    "Projectile Speed": "100 m\/s",
                    "Special Mechanic": "Projectiles pierce through enemies"
                },
                "transformation_id": 0
            },
            {
                "id": 104161,
                "icon": "abilities\/1041\/104161.webp",
                "name": "Kraken Impact",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Leap high, then dash forward and slam down with the bionic arm, dealing damage to enemies in range, marking them for <Orange>Culling<\/>. Marked enemies will perish instantly if their health falls below a certain threshold, recharging the bionic arm for another <Orange>Kraken Impact<\/> within a short period.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "5m spherical radius",
                    "Casting": "Spherical Spell Field",
                    "Energy Cost": "3100",
                    "Culling Duration": "5s",
                    "Culling Threshold": "15% Health",
                    "Spell Field Damage": "80",
                    "Next Kraken Impact After A Culling": "8s"
                },
                "transformation_id": 0
            },
            {
                "id": 104100,
                "icon": "abilities\/1041\/104100.webp",
                "name": "Infinite Grit",
                "type": "Passive",
                "isCollab": true,
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device's range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 104181,
                "icon": "abilities\/1041\/104181.webp",
                "name": "Stellar Impact",
                "type": "Normal",
                "isCollab": true,
                "description": "Inspired by Captain America's resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to damage nearby foes and grant <Buff>Bonus Health<\/> to allies within range. Captain America and Winter Soldier can interact with each other once both parties confirm. The duo then collides and unleashes a shockwave that damages and <Debuff>slows<\/> enemies.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "8m spherical radius",
                    "Damage": "70",
                    "Cooldown": "12s",
                    "Clash Damage": "80",
                    "Special Effect": "Stellar Impact also triggers the Ceaseless Charge passive effect",
                    "Clash Damage Range": "10m spherical radius",
                    "Bonus Health (Ally)": "50",
                    "Bonus Health (Self)": "30"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "25.00",
                "mover_shaker": "26.00",
                "rank_calc": "3.89",
                "mover_shaker_calc": "-0.35",
                "ZScore": "0.20",
                "winrate": "47.00",
                "pickrate": "17.46",
                "banrate": "0.44",
                "usage_trend": "Upward",
                "winrate_prev": "47.46",
                "pickrate_prev": "16.30",
                "banrate_prev": "0.40",
                "winrate_change": "-1.00",
                "pickrate_change": "7.00",
                "banrate_change": "10.00"
            },
            {
                "date": "1755216000",
                "rank": "22.00",
                "mover_shaker": "23.00",
                "rank_calc": "3.92",
                "mover_shaker_calc": "-0.25",
                "ZScore": "0.19",
                "winrate": "47.46",
                "pickrate": "16.30",
                "banrate": "0.40",
                "usage_trend": "Upward",
                "winrate_prev": "46.27",
                "pickrate_prev": "15.44",
                "banrate_prev": "0.31",
                "winrate_change": "3.00",
                "pickrate_change": "6.00",
                "banrate_change": "29.00"
            }
        ]
    },
    {
        "id": "1042",
        "name": "Peni Parker",
        "real_name": "Peni Parker",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/peni-parker-headbig-0.webp",
                "name": "Peni Parker",
                "health": "750",
                "movement_speed": "6m\/s"
            },
            {
                "id": 1,
                "icon": "characters\/peni-parker-headbig-1.webp",
                "name": "Peni Parker"
            }
        ],
        "en_name": "Peni Parker",
        "description": "Peni Parker may be young, but she bravely stands on the frontlines to protect the Web of Life and Destiny. Together, this teen prodigy and her state-of-the-art mech, the sensational SP\/\/dr, make for the most thrilling duo on the battlefield!",
        "slug": "peni-parker",
        "team": [
            "Web_warriors"
        ],
        "difficulty": "4",
        "attack_type": "Projectile Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/peni-parker-square.webp",
        "image_transverse": "characters\/peni-parker-transverse.webp",
        "icon": "characters\/peni-parker-headbig.webp",
        "image": "characters\/peni-parker-portrait.webp",
        "logo_small": "characters\/peni-parker-logo.webp",
        "logo": "characters\/peni-parker-logo-small.webp",
        "skins": [
            "1042001",
            "1042100",
            "1042500",
            "1042300",
            "1042101",
            "1042301"
        ],
        "abilities": [
            {
                "id": 104202,
                "icon": "abilities\/1042\/104202.webp",
                "name": "Wall Crawl",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD {Jump} to crawl on vertical surfaces.",
                "additional_fields": {
                    "Key": "Space",
                    "Wall-Crawling Speed": "7.2m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104221,
                "icon": "abilities\/1042\/104221.webp",
                "name": "Cyber-web Cluster",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch forward a Cyber-Web Cluster.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "1.5m spherical radius",
                    "Damage": "Projectile Damage: 15; Spell Field Damage: 15",
                    "Casting": "Rapid-fire, delayed projectile that is accompanied by a spell field",
                    "Fire Rate": "3.33 rounds per second",
                    "Critical Hit": "Yes",
                    "Special Effect": "20% slowdown on release",
                    "Projectile Speed": "120m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104231,
                "icon": "abilities\/1042\/104231.webp",
                "name": "Cyber-web Snare",
                "type": "Normal",
                "isCollab": false,
                "description": "Cast futuristic webbing that <Debuff>Immobilizes<\/> enemies or creates a <Orange>Cyber-Web<\/>. While in the <Orange>Cyber-Web<\/>, gain <Buff>Healing Over Time<\/> and a <Buff>Movement Boost<\/>. Excess healing converts into <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m spherical radius",
                    "Damage": "5",
                    "Casting": "Single-cast projectile with delayed impact",
                    "Cooldown": "3s",
                    "Special Effect": "Enemies hit are ensnared for 0.7s. While trapped in the Cyber-Web, Peni Parker receives 25 healing per second. Any excess healing is converted into Bonus Health, up to a maximum of 150 Health, and grants a 25% Movement Boost",
                    "Projectile Speed": "60 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104241,
                "icon": "abilities\/1042\/104241.webp",
                "name": "Bionic Spider-nest",
                "type": "Normal",
                "isCollab": false,
                "description": "Generate a <Orange>Bionic Spider-Nest<\/> at a targeted area, periodically spawning <Orange>Spider-Drones<\/> and creating <Orange>Cyber-Webs<\/>. While in the <Orange>Cyber-Web<\/>, gain <Buff>Healing Over Time<\/> and a <Buff>Movement Boost<\/>. Excess healing converts into <Buff>Bonus Health<\/>. <Orange>Spider-Drones<\/> inflict a <Debuff>Slow<\/> effect on hit, which can stack and refresh its effect period with multiple hits.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "12m spherical radius",
                    "Damage": "Each Spider-Drone inflicts 40 damage",
                    "Casting": "Targeted",
                    "Cooldown": "15s",
                    "Special Effect": "Two Spider-Drones are generated every 3s, slows hit enemies by 8% for 2s, each hit stacks the effect and resets the slow period, stacking up to 40%",
                    "Maximum Distance": "10m",
                    "Spider-Nest Health": "350"
                },
                "transformation_id": 0
            },
            {
                "id": 104251,
                "icon": "abilities\/1042\/104251.webp",
                "name": "Arachno-mine",
                "type": "Normal",
                "isCollab": false,
                "description": "Deploy <Orange>Arachno-Mines<\/> that can be concealed within the confines of a <Orange>Cyber-Web<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "3m spherical radius",
                    "Damage": "100",
                    "Casting": "Single-cast Spell Field",
                    "Cooldown": "4 charges, with each charge taking 4s to recharge"
                },
                "transformation_id": 0
            },
            {
                "id": 104261,
                "icon": "abilities\/1042\/104261.webp",
                "name": "Cyber-bond",
                "type": "Normal",
                "isCollab": false,
                "description": "Shoot a web strand that links to the targeted area or <Orange>Cyber-Web<\/>. If stretched too far, it will trigger a pullback.",
                "additional_fields": {
                    "Key": "F",
                    "Casting": "Dash",
                    "Cooldown": "3s",
                    "Projectile Speed": "100m\/s",
                    "Pull-back Distance": "10m",
                    "Maximum Dash Distance": "30m",
                    "Minimum Dash Distance": "10m",
                    "Maximum Cyber-Bond Distance": "19m, with the possibility to exceed this distance if descending"
                },
                "transformation_id": 0
            },
            {
                "id": 104271,
                "icon": "abilities\/1042\/104271.webp",
                "name": "Spider-sweeper",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Enhance the SP\/\/dr suit, <Buff>Launching Up<\/> enemies in its path and deploying <Orange>Arachno-Mines<\/>, <Orange>Spider-Drones<\/>, and <Orange>Cyber-Webs<\/> repeatedly. Spider-Drones inflict a <Debuff>Slow<\/> effect on hit, which can stack and refresh its effect period with multiple hits.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "4m spherical radius",
                    "Damage": "Sweep Attack Damage: 60",
                    "Casting": "Enhancement",
                    "Duration": "12s",
                    "Energy Cost": "3400",
                    "Sweep Range": "5m",
                    "Special Effect": "Gain 450 Bonus Health and a 70% Movement Boost",
                    "Attack Interval": "1s",
                    "Arachno-Mine Attack Interval": "0.7s",
                    "Maximum Arachno-Mine Quantity": "7",
                    "Spider-Drone Generation Interval": "0.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 104281,
                "icon": "abilities\/1042\/104281.webp",
                "name": "Armor Expulsion",
                "type": "Normal",
                "isCollab": true,
                "description": "Venom shares a part of his symbiotes with {103600}{000003}{104200}, activating their symbiote abilities. {103600}{000003}{104200} can convert the symbiotes into explosive spikes that inflict harm on nearby enemies and relentlessly drive them back.",
                "transformation_id": 0
            },
            {
                "id": 104242,
                "icon": "abilities\/1042\/104242.webp",
                "name": "Armored Spider-nest",
                "type": "Normal",
                "isCollab": true,
                "description": "Rocket Raccoon upgrades his <Orange>B.R.B.<\/>, which now creates <Orange>Cyber-Webs<\/> upon placement and periodically spawns <Orange>Arachno-Mines<\/> and <Orange>Spider-Drones<\/>. Peni Parker can also deploy an <Orange>Armored Spider-Nest<\/> that drops <Orange>Armor Packs<\/> for <Buff>Bonus Health<\/>. Star-Lord gets a teleport to its deployment point from anywhere on the map.",
                "transformation_id": 0
            },
            {
                "id": 101131,
                "type": "Ultimate",
                "isCollab": false,
                "additional_fields": {
                    "Health": "750",
                    "Movement Speed": "6m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101111,
                "type": "Normal",
                "isCollab": false,
                "additional_fields": {
                    "Health": "750",
                    "Movement Speed": "6m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101121,
                "type": "Normal",
                "isCollab": false,
                "additional_fields": {
                    "Health": "750",
                    "Movement Speed": "6m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101196,
                "type": "Normal",
                "isCollab": true,
                "additional_fields": {
                    "Health": "750",
                    "Movement Speed": "6m\/s"
                },
                "transformation_id": 1
            },
            {
                "id": 101197,
                "type": "Normal",
                "isCollab": true,
                "additional_fields": {
                    "Health": "750",
                    "Movement Speed": "6m\/s"
                },
                "transformation_id": 1
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "4.00",
                "mover_shaker": "12.00",
                "rank_calc": "4.27",
                "mover_shaker_calc": "0.61",
                "ZScore": "0.27",
                "winrate": "55.45",
                "pickrate": "8.75",
                "banrate": "11.13",
                "usage_trend": "Upward",
                "winrate_prev": "55.19",
                "pickrate_prev": "7.84",
                "banrate_prev": "12.31",
                "winrate_change": "0.00",
                "pickrate_change": "12.00",
                "banrate_change": "-10.00"
            },
            {
                "date": "1755216000",
                "rank": "6.00",
                "mover_shaker": "14.00",
                "rank_calc": "4.23",
                "mover_shaker_calc": "0.41",
                "ZScore": "0.21",
                "winrate": "55.19",
                "pickrate": "7.84",
                "banrate": "12.31",
                "usage_trend": "Downward",
                "winrate_prev": "55.14",
                "pickrate_prev": "8.89",
                "banrate_prev": "15.60",
                "winrate_change": "0.00",
                "pickrate_change": "-12.00",
                "banrate_change": "-21.00"
            }
        ]
    },
    {
        "id": "1043",
        "name": "Star-lord",
        "real_name": "Peter Quill",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/star-lord-headbig-0.webp",
                "name": "Star-lord",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Star Lord",
        "description": "Peter Quill lives to dazzle his foes on the battlefield with his signature swagger. As his element guns paint arcs of devastation, his acrobatic moves sail through the sky with unrivaled style. With performances this spectacular, it's no wonder that Star-Lord is so legendary!",
        "slug": "star-lord",
        "team": [
            "Guardiansofthegalaxy"
        ],
        "difficulty": "2",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/star-lord-square.webp",
        "image_transverse": "characters\/star-lord-transverse.webp",
        "icon": "characters\/star-lord-headbig.webp",
        "image": "characters\/star-lord-portrait.webp",
        "logo_small": "characters\/star-lord-logo.webp",
        "logo": "characters\/star-lord-logo-small.webp",
        "skins": [
            "1043001",
            "1043100",
            "1043500",
            "1043800",
            "1043300",
            "1043501",
            "1043102",
            "1043502"
        ],
        "abilities": [
            {
                "id": 104311,
                "icon": "abilities\/1043\/104311.webp",
                "name": "Element Guns",
                "type": "Weapon",
                "isCollab": false,
                "description": "Shoot enemies with dual Element Guns.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "40",
                    "Damage": "6.5 damage per round",
                    "Casting": "Rapid-fire shots with spread.",
                    "Fire Rate": "40 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 10m, decreasing to 65% at 25m",
                    "Crosshair Spread Radius (at 10m)": "After 2 consecutive shots, the spread increases to 0.15m; after 5 consecutive shots, the spread expands to 0.24m"
                },
                "transformation_id": 0
            },
            {
                "id": 104321,
                "icon": "abilities\/1043\/104321.webp",
                "name": "Stellar Shift",
                "type": "Normal",
                "isCollab": false,
                "description": "Dodge in the direction of movement and swiftly reload. Become <Buff>Unstoppable<\/> and <Buff>Invincible<\/> while dodging.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Charges": "2",
                    "Bonus Health": "Unleashing Stellar Shift will grant Star-Lord 25 Bonus Health. Maximum Bonus Health is 25. Bonus Health falloff begins at 3s, decreasing to 0 in 1s.",
                    "Recharge Speed": "5s per charge",
                    "Invincibility Duration": "0.37s"
                },
                "transformation_id": 0
            },
            {
                "id": 104331,
                "icon": "abilities\/1043\/104331.webp",
                "name": "Rocket Propulsion",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume energy to gain a <Buff>Movement Boost<\/> and soar forward.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Energy Cost": "300\/s",
                    "Maximum Energy": "1800",
                    "Movement Boost": "100%",
                    "Energy Recovery Speed": "100\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104341,
                "icon": "abilities\/1043\/104341.webp",
                "name": "Galactic Legend",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Engage in free-flight and lock onto enemies in sight.",
                "additional_fields": {
                    "Key": "Q",
                    "Ammo": "40",
                    "Damage": "6.5 damage per round",
                    "Casting": "Rapid-fire projectile.",
                    "Duration": "8s",
                    "Fire Rate": "40 rounds per second",
                    "Energy Cost": "3400",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 25m, decreasing to 75% at 40m",
                    "Movement Boost": "20%",
                    "Special Mechanic": "During this period, Star-Lord's Reload Speed increases significantly",
                    "Reload Time Reduction": "70%",
                    "Maximum Locking Distance": "40m"
                },
                "transformation_id": 0
            },
            {
                "id": 104332,
                "icon": "abilities\/1043\/104332.webp",
                "name": "Blaster Barrage",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire a frenzy of shots, causing damage to enemies within range.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "8m spherical radius",
                    "Damage": "7.5 damage per hit",
                    "Casting": "Spherical Spell Field",
                    "Cooldown": "8s",
                    "Duration": "3s",
                    "Damage Falloff": "Falloff begins at 4m, decreasing to 80% at 8m",
                    "Attack Interval": "0.1 per hit"
                },
                "transformation_id": 0
            },
            {
                "id": 104371,
                "icon": "abilities\/1043\/104371.webp",
                "name": "Leader's Soul",
                "type": "Passive",
                "isCollab": true,
                "description": "Adam Warlock enhances the rebirth power of {104300}{000003}{102000}, granting them the power of cocooned revival.",
                "transformation_id": 0
            },
            {
                "id": 104391,
                "icon": "abilities\/1043\/104391.webp",
                "name": "LION'S LAUNCH",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch the ball forward with incredible speed.",
                "transformation_id": 0
            },
            {
                "id": 104394,
                "icon": "abilities\/1043\/104394.webp",
                "name": "FEROCIOUS THROW",
                "type": "Weapon",
                "isCollab": false,
                "description": "Hurl the ball with fierce intensity. Charging longer enhances both speed and distance.",
                "transformation_id": 0
            },
            {
                "id": 104392,
                "icon": "abilities\/1043\/104392.webp",
                "name": "ROCKET PROPULSION",
                "type": "Normal",
                "isCollab": false,
                "description": "Consume energy to gain a <Buff>Movement Boost<\/> and soar forward.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Energy Cost": "300\/s",
                    "Maximum Energy": "1800",
                    "Movement Boost": "100%",
                    "Energy Recovery Speed": "100\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104393,
                "icon": "abilities\/1043\/104393.webp",
                "name": "LION LEAP",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire bullets in all directions, launching up nearby enemies and causing them to lose the ball. This ability can only be used when not in possession of the ball.",
                "transformation_id": 0
            },
            {
                "id": 104381,
                "icon": "abilities\/1043\/104381.webp",
                "name": "CELESTIAL LEAP",
                "type": "Normal",
                "isCollab": false,
                "description": "Dodge in the direction of movement and swiftly reload. Become <Buff>Unstoppable<\/> and <Buff>Invincible<\/> while dodging.",
                "transformation_id": 0
            },
            {
                "id": 104395,
                "icon": "abilities\/1043\/104395.webp",
                "name": "Network Leapspider",
                "type": "Normal",
                "isCollab": true,
                "description": "Rocket Raccoon upgrades his <Orange>B.R.B.<\/>, which now creates <Orange>Cyber-Webs<\/> upon placement and periodically spawns <Orange>Arachno-Mines<\/> and <Orange>Spider-Drones<\/>. Peni Parker can also deploy an <Orange>Armored Spider-Nest<\/> that drops <Orange>Armor Packs<\/> for <Buff>Bonus Health<\/>. Star-Lord gets a teleport to its deployment point from anywhere on the map.",
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "16.00",
                "mover_shaker": "24.00",
                "rank_calc": "4.00",
                "mover_shaker_calc": "-0.09",
                "ZScore": "0.22",
                "winrate": "49.40",
                "pickrate": "8.96",
                "banrate": "0.27",
                "usage_trend": "Upward",
                "winrate_prev": "50.14",
                "pickrate_prev": "8.55",
                "banrate_prev": "0.28",
                "winrate_change": "-1.00",
                "pickrate_change": "5.00",
                "banrate_change": "-4.00"
            },
            {
                "date": "1755216000",
                "rank": "13.00",
                "mover_shaker": "25.00",
                "rank_calc": "4.03",
                "mover_shaker_calc": "-0.32",
                "ZScore": "0.19",
                "winrate": "50.14",
                "pickrate": "8.55",
                "banrate": "0.28",
                "usage_trend": "Upward",
                "winrate_prev": "46.61",
                "pickrate_prev": "7.09",
                "banrate_prev": "0.16",
                "winrate_change": "8.00",
                "pickrate_change": "21.00",
                "banrate_change": "75.00"
            }
        ]
    },
    {
        "id": "1044",
        "name": "Blade",
        "real_name": "Eric Brooks",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/blade-headbig-0.webp",
                "name": "Blade",
                "health": "350",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Blade",
        "description": "Half-human and half-vampire, Eric Brooks walks between worlds, craving the very life force of his enemies. As night falls, Blade's hunt begins as he wields the Sword of Dracula to become the nightmare of any foe who dares to bare their fangs.",
        "slug": "blade",
        "team": [
            "Marvelknights",
            "Avengers"
        ],
        "difficulty": "3",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/blade-square.webp",
        "image_transverse": "characters\/blade-transverse.webp",
        "icon": "characters\/blade-headbig.webp",
        "image": "characters\/blade-portrait.webp",
        "logo_small": "characters\/blade-logo.webp",
        "logo": "characters\/blade-logo-small.webp",
        "skins": [
            "1044001",
            "1044300",
            "1044100",
            "1044102",
            "1044101"
        ],
        "abilities": [
            {
                "id": 104451,
                "icon": "abilities\/1044\/104451.webp",
                "name": "Thousand-fold Slash",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Charge power and swiftly draw the Sword of Dracula, executing a powerful Iaido strike as you dash forward, leaving behind a slashing zone where the sword automatically strikes enemies. Enemies hit suffer <Debuff>Reduced Healing<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Self Slow": "25%",
                    "Energy Cost": "2800",
                    "Dash Distance": "10m, maximum distance 24m after fully charged.",
                    "Direct Hit Damage": "100",
                    "Spell Field Range": "Length: Maximum dash distance; Width: 6m; Height: 4.5m",
                    "Maximum Charge Time": "3s",
                    "Spell Field Duration": "2s",
                    "Healing Reduction Duration": "4s",
                    "Charge time for max distance": "1s",
                    "Healing Reduction Proportion": "20%",
                    "Spell Field Damage Over Time": "225\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104411,
                "icon": "abilities\/1044\/104411.webp",
                "name": "Ancestral Sword",
                "type": "Weapon",
                "isCollab": false,
                "description": "Slash forward with Blade's Ancestral Sword.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "Cause 24 damage per single slash; double strike cause 13 damage per hit",
                    "Casting": "Melee",
                    "Attack Interval": "2 strikes per second",
                    "Maximum Distance": "4.5m"
                },
                "transformation_id": 0
            },
            {
                "id": 104421,
                "icon": "abilities\/1044\/104421.webp",
                "name": "Hunter's Shotgun",
                "type": "Weapon",
                "isCollab": false,
                "description": "Fire at enemies using your Shotgun.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Casting": "Projectile that fires in a straight trajectory, which breaks into shrapnel after reaching a certain distance",
                    "Shrapnel Amount": "12",
                    "Damage per Shrapnel Hit": "8",
                    "Shrapnel Damage Falloff": "Falloff begins at 20m, decreasing to 40% at 30m",
                    "Initial Projectile Speed": "150 m\/s",
                    "Initial Projectile Damage": "45",
                    "Shrapnel Projectile Speed": "150 m\/s",
                    "Initial Projectile Maximum Distance": "8m"
                },
                "transformation_id": 0
            },
            {
                "id": 104431,
                "icon": "abilities\/1044\/104431.webp",
                "name": "Daywalker Dash",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward. If wielding your gun, shoot at enemies upon impact, applying a <Debuff>Healing Reduction<\/> effect. If wielding your sword, deliver a cleaving strike that inflicts <Debuff>Slow<\/>.",
                "additional_fields": {
                    "Key": "Shift",
                    "Damage": "20",
                    "Casting": "Dash. Cause damage and special effects to the enemies hit",
                    "Slow Rate": "35%",
                    "Dash Distance": "15m",
                    "Slow Duration": "1s",
                    "Special Effect": "Hit while wielding the gun, deal Healing Reduction to the enemy; hit while wielding the sword, inflict Slow effect to the enemy",
                    "Gun Second Hit Damage": "20",
                    "Second Hit Damage Range": "6.5m",
                    "Sword Second Hit Damage": "15 per hit, 4 hits in total",
                    "Healing Reduction Duration": "3.5s",
                    "Healing Reduction Proportion": "40%"
                },
                "transformation_id": 0
            },
            {
                "id": 104441,
                "icon": "abilities\/1044\/104441.webp",
                "name": "Bloodline Awakening",
                "type": "Normal",
                "isCollab": false,
                "description": "Awaken the Dhampir bloodline, enhancing slash speed during continuous attacks and triggering <Orange>Whirlwind Slash<\/>. If all <Orange>Whirlwind Slash<\/> strikes hit, your <Buff>Attack Speed<\/> will further increase. While under this state, you suffer <Debuff>Reduced Healing<\/>, but attacks gain <Buff>Lifesteal<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Special Effect": "Landing all four hits of Whirlwind Slash grants 1 slash speed stack",
                    "Lifesteal Proportion": "65%, Affected by Healing Reduction",
                    "Movement Speed Boost": "1.5 m\/s",
                    "Shift Hit Buff Stack": "5",
                    "Whirlwind Slash Damage": "56",
                    "Left Click Hit Buff Stack": "1",
                    "Duration of Each Buff Stack": "1s",
                    "Self Reduce Healing Proportion": "35%",
                    "Max Attack Speed Boost Buff Stack": "10",
                    "Hits to Trigger the Whirlwind Slash": "5",
                    "Attack Speed Boost Proportion from Each Buff Stack": "10%"
                },
                "transformation_id": 0
            },
            {
                "id": 104461,
                "icon": "abilities\/1044\/104461.webp",
                "name": "Scarlet Shroud",
                "type": "Normal",
                "isCollab": false,
                "description": "Parry with Ancestral Sword to become <Buff>Unstoppable<\/> for a brief period, reducing damage taken from the front and decreasing the cooldown of <Orange>Daywalker Dash<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Cooldown": "3s",
                    "Energy Cost": "60\/s",
                    "Maximum Energy": "120",
                    "Special Effect": "Every 200 damage resisted grants 1 charge for Daywalker Dash",
                    "Activation Cost": "15",
                    "Damage Reduction": "80%",
                    "Unstoppable Duration": "0.4s after activation",
                    "Energy Recovery Speed": "15\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104492,
                "icon": "abilities\/1044\/104492.webp",
                "name": "New Moon",
                "type": "Normal",
                "isCollab": true,
                "description": "Cloak & Dagger can inject light and dark energy into Moon Knight and Blade to create a Light & Dark Realm where Moon Knight and Blade can become <Buff>invisible<\/> and gain <Buff>Healing Over Time<\/>. Blade can unleash Swift Strike toward a targeted enemy.",
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Spherical Spell Field; Targeted Dash",
                    "Cooldown": "25s, Swift Strike second unleash cooldown 3s",
                    "Healing Amount": "50\/s",
                    "Special Effect": "Become Invisible and gain Healing Over Time within the spell field and can unleash targeted dashes to the enemies",
                    "Swift Strike Damage": "60",
                    "Maximum Select Distance": "20m",
                    "Swift Strike Spell Field Range": "A cylindrical spell field with a 2m radius and a height of 2.5m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "34.00",
                "mover_shaker": "4.00",
                "rank_calc": "3.72",
                "mover_shaker_calc": "1.34",
                "ZScore": "0.32",
                "winrate": "46.60",
                "pickrate": "12.06",
                "banrate": "0.24",
                "usage_trend": "Downward",
                "winrate_prev": "46.37",
                "pickrate_prev": "31.93",
                "banrate_prev": "1.39",
                "winrate_change": "0.00",
                "pickrate_change": "-62.00",
                "banrate_change": "-83.00"
            },
            {
                "date": "1755216000",
                "rank": "25.00",
                "mover_shaker": "20.00",
                "rank_calc": "3.90",
                "mover_shaker_calc": "0.00",
                "ZScore": "0.20",
                "winrate": "46.37",
                "pickrate": "31.93",
                "banrate": "1.39",
                "usage_trend": "",
                "winrate_prev": "46.37",
                "pickrate_prev": "31.93",
                "banrate_prev": "1.39",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "0.00"
            }
        ]
    },
    {
        "id": "1045",
        "name": "Namor",
        "real_name": "Namor Mckenzie",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/namor-headbig-0.webp",
                "name": "Namor",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Namor",
        "description": "The unrivaled King of the Seas, Namor surfs into battle on a mighty wave with an army of fierce aquatic creatures in his wake. When ancient horns of war blare, devastation soon follows as deadly waters engulf the arena.",
        "slug": "namor",
        "team": [
            "Avengers",
            "Mutants",
            "Villains"
        ],
        "difficulty": "2",
        "attack_type": "Projectile Heroes",
        "role": "DUELIST",
        "image_square": "characters\/namor-square.webp",
        "image_transverse": "characters\/namor-transverse.webp",
        "icon": "characters\/namor-headbig.webp",
        "image": "characters\/namor-portrait.webp",
        "logo_small": "characters\/namor-logo.webp",
        "logo": "characters\/namor-logo-small.webp",
        "skins": [
            "1045001",
            "1045100",
            "1045800",
            "1045500",
            "1045501",
            "1045101",
            "1045502"
        ],
        "abilities": [
            {
                "id": 104521,
                "icon": "abilities\/1045\/104521.webp",
                "name": "Trident Of Neptune",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw the trident forward, reducing <Orange>Aquatic Dominion's<\/> cooldown upon enemy impact. Critical hits cause <Orange>Monstro Spawn<\/> to enter a berserk state, gaining increased Attack Speed.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Infinite",
                    "Damage": "75",
                    "Casting": "Projectile with an arced trajectory",
                    "Fire Rate": "1.09 rounds per second",
                    "Critical Hit": "Yes",
                    "Projectile Speed": "150 m\/s",
                    "Aquatic Dominion Charge Per Hit": "0.084"
                },
                "transformation_id": 0
            },
            {
                "id": 104531,
                "icon": "abilities\/1045\/104531.webp",
                "name": "Wrath Of The Seven Seas",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch the trident forward to damage nearby enemies, then direct all <Orange>Monstro Spawn<\/> to perform an enhanced attack on the nearest hit enemy. When the trident hits an enemy, <Orange>Monstro Spawn<\/> to enter a berserk state, gaining increased Attack Speed.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m spherical radius",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Cooldown": "6s",
                    "Projectile Speed": "150 m\/s",
                    "Projectile Damage": "40",
                    "Spell Field Damage": "60",
                    "Spell Field Damage Falloff": "50% falloff at 3m",
                    "Enhanced Monstro Spawn Projectile Speed": "120 m\/s",
                    "Enhanced Monstro Spawn Projectile Damage": "60"
                },
                "transformation_id": 0
            },
            {
                "id": 104541,
                "icon": "abilities\/1045\/104541.webp",
                "name": "Blessing Of The Deep",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a protective barrier while flying upwards.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Cooldown": "20s",
                    "Maximum Duration": "3s",
                    "Vertical Moving Distance": "7m"
                },
                "transformation_id": 0
            },
            {
                "id": 104551,
                "icon": "abilities\/1045\/104551.webp",
                "name": "Aquatic Dominion",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a <Orange>Monstro Spawn<\/> that can autonomously attack enemies.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Arced Trajectory (Summon Monstro Spawn), Direct Hit (Monstro Spawn)",
                    "Charges": "2",
                    "Default": " ",
                    "Duration": "2s",
                    "Enhanced": " ",
                    "Monstro Spawn Damage": "11",
                    "Monstro Spawn Health": "100",
                    "Default Charging Speed": "0.083\/s",
                    "Monstro Spawn Fire Rate": "5 rounds per second",
                    "Monstro Spawn Attack Range": "40m",
                    "Monstro Spawn Damage Falloff": "Falloff begins at 20m, decreasing to 30% at 40m",
                    "Monstro Spawn Maximum Duration": "8s",
                    "Monstro Spawn Maximum Quantity": "2",
                    "Projectile Speed (Summon Monstro Spawn)": "30 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104561,
                "icon": "abilities\/1045\/104561.webp",
                "name": "Horn Of Proteus",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon Giganto to leap atop enemies within range, disabling their mobility abilities.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "A cylindrical spell field with an inner circle radius of 3.5m, an outer circle radius of 9m, and a height of 3m",
                    "Damage": "Inner Circle Damage: 500; Outer Circle Damage: 180",
                    "Casting": "Cylindrical Spell Field",
                    "Hit Delay": "1.5s",
                    "Energy Cost": "3100",
                    "Maximum Distance": "30m",
                    "Immobilize Duration": "1.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 104555,
                "icon": "abilities\/1045\/104555.webp",
                "name": "Frozen Spawn",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow infuses ice energy into {104700}, who then can tap into the ice energy to power up abilities at will.",
                "transformation_id": 0
            },
            {
                "id": 104542,
                "icon": "abilities\/1045\/104542.webp",
                "name": "Tide Fall",
                "type": "Normal",
                "isCollab": false,
                "description": "HOLD {Jump} to fall slowly.",
                "transformation_id": 0
            },
            {
                "id": 104591,
                "icon": "abilities\/1045\/104591.webp",
                "name": "Gamma Monstro",
                "type": "Normal",
                "isCollab": true,
                "description": "Hulk charges Namor and Black Panther with gamma radiation. Namor can summon an extra <Orange>Gamma Monstro<\/> which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage. Black Panther's Vibranium armor is enhanced; when his health is low he receives a gamma shield, blocking incoming attacks and becoming <Buff>Unstoppable<\/>.",
                "transformation_id": 0
            },
            {
                "id": 104592,
                "icon": "abilities\/1045\/104592.webp",
                "name": "Tidal Dirge",
                "type": "Normal",
                "isCollab": true,
                "description": "Hela channels energy of the undead to empower Namor. When Namor strikes with his trident, a <Orange>spectral water column<\/> erupts at the target area. Enemies hit are <Debuff>Slowed<\/> and suffer <Debuff>Reduced Healing<\/>. Whenever Hela or Namor assist in a KO, an invulnerable <Orange>Undead Monstro<\/> spawns at the fallen enemy's position, automatically attacking the nearest foe for a short time before vanishing.",
                "additional_fields": {
                    "Key": "Passive",
                    "Cooldown": "20s",
                    "Slow Rate": "35%",
                    "Rage Duration": "2s",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 50% at 40m",
                    "Special Effect": "Undead Monstro is untargetable",
                    "Undead Monstro": " ",
                    "Inner Circle Damage": "65",
                    "Outer Circle Damage": "45",
                    "Reduced Healing Rate": "20%",
                    "Undead Monstro Damage": "12",
                    "Undead Monstro Duration": "3s",
                    "Undead Monstro Fire Rate": "0.5s per hit",
                    "Undead Monstro Rage Damage": "7",
                    "Outer Circle Generate Delay": "0.5s",
                    "Undead Monstro Maximum Amount": "2",
                    "Undead Monstro Rage Fire Rate": "5 rounds per second",
                    "Inner Circle Spell Field Range": "A cylindrical spell field with a radius of 3m and a height of 13m",
                    "Outer Circle Spell Field Range": "A cylindrical spell field with a radius of 6m and a height of 11m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "14.00",
                "mover_shaker": "23.00",
                "rank_calc": "4.04",
                "mover_shaker_calc": "-0.02",
                "ZScore": "0.22",
                "winrate": "50.32",
                "pickrate": "12.66",
                "banrate": "5.09",
                "usage_trend": "Upward",
                "winrate_prev": "50.31",
                "pickrate_prev": "11.07",
                "banrate_prev": "4.61",
                "winrate_change": "0.00",
                "pickrate_change": "14.00",
                "banrate_change": "10.00"
            },
            {
                "date": "1755216000",
                "rank": "15.00",
                "mover_shaker": "15.00",
                "rank_calc": "4.01",
                "mover_shaker_calc": "0.29",
                "ZScore": "0.21",
                "winrate": "50.31",
                "pickrate": "11.07",
                "banrate": "4.61",
                "usage_trend": "Downward",
                "winrate_prev": "49.66",
                "pickrate_prev": "13.45",
                "banrate_prev": "5.28",
                "winrate_change": "1.00",
                "pickrate_change": "-18.00",
                "banrate_change": "-13.00"
            }
        ]
    },
    {
        "id": "1046",
        "name": "Adam Warlock",
        "real_name": "Adam Warlock",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/adam-warlock-headbig-0.webp",
                "name": "Adam Warlock",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Adam Warlock",
        "description": "The genetically-engineered Adam Warlock wields powerful Quantum Magic, enabling him to connect and heal souls with a gentle touch. When the time comes for his allies to unite, Warlock stands as the unwavering epicenter of cosmic justice!",
        "slug": "adam-warlock",
        "team": [
            "Guardiansofthegalaxy"
        ],
        "difficulty": "3",
        "attack_type": "Hitscan Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/adam-warlock-square.webp",
        "image_transverse": "characters\/adam-warlock-transverse.webp",
        "icon": "characters\/adam-warlock-headbig.webp",
        "image": "characters\/adam-warlock-portrait.webp",
        "logo_small": "characters\/adam-warlock-logo.webp",
        "logo": "characters\/adam-warlock-logo-small.webp",
        "skins": [
            "1046001",
            "1046100",
            "1046800",
            "1046300",
            "1046301",
            "1046101",
            "1046102"
        ],
        "abilities": [
            {
                "id": 104601,
                "icon": "abilities\/1046\/104601.webp",
                "name": "Regenerative Cocoon",
                "type": "Passive",
                "isCollab": false,
                "description": "Once his body perishes, Adam can freely move as a soul and reforge his body at a chosen spot.",
                "additional_fields": {
                    "Key": "Passive",
                    "Cooldown": "105s"
                },
                "transformation_id": 0
            },
            {
                "id": 104611,
                "icon": "abilities\/1046\/104611.webp",
                "name": "Quantum Magic",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch quantum energy to deal damage. Critical hits reduce the cooldown of <Orange>Avatar Life Stream<\/>.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "15",
                    "Damage": "60 damage per round",
                    "Casting": "Single-cast direct hit",
                    "Fire Rate": "2 rounds per second",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 60% at 40m"
                },
                "transformation_id": 0
            },
            {
                "id": 104621,
                "icon": "abilities\/1046\/104621.webp",
                "name": "Cosmic Cluster",
                "type": "Normal",
                "isCollab": false,
                "description": "Gather quantum energy into a cluster and then swiftly launch it at the enemy. Each hit reduces <Orange>Avatar Life Stream<\/> charge time.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "38",
                    "Casting": "Charged release, with multiple delayed projectiles",
                    "Fire Rate": "The firing interval for a single charged shot is 0.3s, while the interval for multiple shots is 0.07s",
                    "Special Effect": "Cosmic Cluster shares ammo with Quantum Magic, each hit reduces the cooldown of Avatar Life Stream by 0.3s.",
                    "Projectile Speed": "100 m\/s",
                    "Maximum Projectile Count": "5"
                },
                "transformation_id": 0
            },
            {
                "id": 104641,
                "icon": "abilities\/1046\/104641.webp",
                "name": "Avatar Life Stream",
                "type": "Normal",
                "isCollab": false,
                "description": "Target an ally for a bouncing stream of healing energy, which also heals himself upon casting; self-targets if no ally is selected.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "20m spherical radius",
                    "Casting": "Targeted",
                    "Cooldown": "2 charges, with each charge taking 6s to recharge; when a critical hit lands on an enemy, reduce the cooldown time of Avatar Life Stream by 1s.",
                    "Healing Amount": "95",
                    "Special Effect": "Bouncing target does not include Adam Warlock",
                    "Number of Bounces": "2",
                    "Healing Amount (Self)": "35"
                },
                "transformation_id": 0
            },
            {
                "id": 104651,
                "icon": "abilities\/1046\/104651.webp",
                "name": "Soul Bond",
                "type": "Normal",
                "isCollab": false,
                "description": "Forge a soul bond with allies, granting <Buff>Healing Over Time<\/> and distributing damage taken across the bond.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "15m",
                    "Casting": "Instant Cast",
                    "Cooldown": "40s",
                    "Duration": "6s",
                    "Healing Amount": "15\/s",
                    "Special Effect": "Adam Warlock will share a portion of the damage sustained by linked allies. If Adam Warlock sustains damage that would KO him due to the link, then the link will be broken, and he will retain 1 Health. The link will also break once enough damage is sustained, if Adam Warlock or the linked ally leave the link's range, or after a certain length of time has passed",
                    "Maximum Damage Shared Per Target": "250"
                },
                "transformation_id": 0
            },
            {
                "id": 104661,
                "icon": "abilities\/1046\/104661.webp",
                "name": "Karmic Revival",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Awaken the karma of allies to revive them. Allies revived have lower health but enjoy a brief period of invincibility.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "30m spherical radius",
                    "Casting": "Persistent spell field that surrounds the caster",
                    "Duration": "10s",
                    "Energy Cost": "4700",
                    "Special Effect": "Revive allies within range, centered on Adam. Continuously monitor for fallen allies within this range; if they enter the area, they can be revived at the casting location",
                    "Health Upon Revival": "Allies revived will be blessed with Bonus Health equal to 70% of their Maximum Health with a 5s duration. Bonus Health falloff begins at 5s, decreasing to 0 in 2s."
                },
                "transformation_id": 0
            },
            {
                "id": 104600,
                "icon": "abilities\/1046\/104600.webp",
                "name": "Soul Perseverance",
                "type": "Passive",
                "isCollab": true,
                "description": "Adam Warlock enhances the rebirth power of {104300}{000003}{102000}, granting them the power of cocooned revival.",
                "transformation_id": 0
            },
            {
                "id": 104671,
                "icon": "abilities\/1046\/104671.webp",
                "name": "Cosmic Awareness",
                "type": "Normal",
                "isCollab": true,
                "description": "Adam Warlock imparts his mastery of quantum energy to Luna Snow, awakening her new ability <Orange>Light & Shadow Karma<\/>. When Luna uses <Orange>Light & Shadow Karma<\/>, she links to nearby enemies. Any damage she deals to linked enemies is converted into Light Energy, which is then transferred to Luna through the link, healing her Health.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Healing Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "29.00",
                "mover_shaker": "2.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "1.63",
                "ZScore": "0.35",
                "winrate": "49.33",
                "pickrate": "8.38",
                "banrate": "0.07",
                "usage_trend": "Downward",
                "winrate_prev": "49.19",
                "pickrate_prev": "10.94",
                "banrate_prev": "0.22",
                "winrate_change": "0.00",
                "pickrate_change": "-23.00",
                "banrate_change": "-68.00"
            },
            {
                "date": "1755216000",
                "rank": "27.00",
                "mover_shaker": "38.00",
                "rank_calc": "3.87",
                "mover_shaker_calc": "-5.68",
                "ZScore": "0.02",
                "winrate": "49.19",
                "pickrate": "10.94",
                "banrate": "0.22",
                "usage_trend": "Upward",
                "winrate_prev": "48.64",
                "pickrate_prev": "5.35",
                "banrate_prev": "0.06",
                "winrate_change": "1.00",
                "pickrate_change": "104.00",
                "banrate_change": "267.00"
            }
        ]
    },
    {
        "id": "1047",
        "name": "Jeff The Land Shark",
        "real_name": "Jeff",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/jeff-the-land-shark-headbig-0.webp",
                "name": "Jeff The Land Shark",
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Jeff",
        "description": "Most land sharks are vicious creatures of the deep... but not Jeff! This adorable and mischievous little guy brings joy and healing to every battle. But if the tide turns, Jeff can morph into a voracious beast, capable of swallowing an army of foes in a single gulp!",
        "slug": "jeff-the-land-shark",
        "team": [
            "Avengers"
        ],
        "difficulty": "1",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/jeff-the-land-shark-square.webp",
        "image_transverse": "characters\/jeff-the-land-shark-transverse.webp",
        "icon": "characters\/jeff-the-land-shark-headbig.webp",
        "image": "characters\/jeff-the-land-shark-portrait.webp",
        "logo_small": "characters\/jeff-the-land-shark-logo.webp",
        "logo": "characters\/jeff-the-land-shark-logo-small.webp",
        "skins": [
            "1047001",
            "1047100",
            "1047500",
            "1047300",
            "1047301",
            "ps1047303",
            "ps1047304",
            "1047501"
        ],
        "abilities": [
            {
                "id": 104711,
                "icon": "abilities\/1047\/104711.webp",
                "name": "Joyful Splash",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a splash that damages enemies and heals allies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "100",
                    "Damage": "70\/s",
                    "Casting": "Rapid-fire, delayed projectile",
                    "Fire Rate": "20 rounds per second",
                    "Damage Falloff": "\n\t\t\t\t\t\tDamage falloff starts at 20m to a maximum of 65% at 40m\n\t\t\t\t\t\t",
                    "Healing Amount": "130\/s",
                    "Projectile Speed": "100m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104721,
                "icon": "abilities\/1047\/104721.webp",
                "name": "Aqua Burst",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a high-speed water sphere that bursts upon impact, dealing damage to enemies within range. Direct hits <Debuff>Launch Up<\/> enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m spherical radius",
                    "Damage": "Projectile Damage: 25 damage per round, Spell Field Damage: 45 damage per cast",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Cooldown": "3 charges, with each charge taking 3s to recharge",
                    "Fire Rate": "1.75 rounds per second",
                    "Critical Hit": "No",
                    "Damage Falloff": "Falloff begins at 1m, decreasing to 50% at 3m (projectile damage has no falloff)",
                    "Special Effect": "\n\t\t\t\t\t\tDirect hits can launch enemies up\n\t\t\t\t\t\t",
                    "Projectile Speed": "100m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104751,
                "icon": "abilities\/1047\/104751.webp",
                "name": "Healing Bubble",
                "type": "Normal",
                "isCollab": false,
                "description": "Spit a bubble that heals the ally who collects it, granting them <Buff>Healing<\/> and <Buff>Movement Boost<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Summons",
                    "Cooldown": "3 charges, with each charge taking 6s to recharge",
                    "Duration": "180s",
                    "Buff Duration": "4s",
                    "Healing Boost": "15%",
                    "Healing Amount": "30\/s",
                    "Movement Boost": "60%",
                    "Special Effect": "Touching the bubble will immediately activate its effect"
                },
                "transformation_id": 0
            },
            {
                "id": 104761,
                "icon": "abilities\/1047\/104761.webp",
                "name": "Hide And Seek",
                "type": "Normal",
                "isCollab": false,
                "description": "Dive into the scene with only his dorsal fin exposed, granting himself a <Buff>Movement Boost<\/>. Jeff can heal while submerged and gains the wall-crawl ability.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast",
                    "Energy Cost": "20\/s",
                    "Healing Amount": "35\/s",
                    "Maximum Energy": "120",
                    "Movement Boost": "60%",
                    "Special Effect": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff's hitbox is reduced",
                    "Energy Recovery Speed": "15\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104771,
                "icon": "abilities\/1047\/104771.webp",
                "name": "It's Jeff!",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Deep dive into the scene and leave behind a healing water zone for allies. Upon resurfacing, swallow both enemies and allies within range, activating <Orange>Hide and Seek<\/> for a brief duration before ejecting the swallowed heroes forward. Excess healing converts to <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m radius,5m high cylindrical spell field",
                    "Damage": "25\/s",
                    "Casting": "Targeted",
                    "Duration": "6s",
                    "Energy Cost": "4500",
                    "Healing Amount": "225\/s",
                    "Special Effect1": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek",
                    "Special Effect2": "It's Jeff! (Ultimate Ability) leaves an 8m radius Healing Pool at the point of activation that heals allies within range by 100\/s. Healing Pool lasts for 8s",
                    "Bonus Health (Ally)": "\n\t\t\t\t\t\tOverflow healing on swallowed allies grants 45 Health per second as Bonus Health, up to 150\n\t\t\t\t\t\t"
                },
                "transformation_id": 0
            },
            {
                "id": 104701,
                "icon": "abilities\/1047\/104701.webp",
                "name": "Oblivious Cuteness",
                "type": "Passive",
                "isCollab": false,
                "description": "Reduce damage taken from critical hits.",
                "additional_fields": {
                    "Key": "Passive",
                    "Critical Hit Damage Reduction": "50%"
                },
                "transformation_id": 0
            },
            {
                "id": 104782,
                "icon": "abilities\/1047\/104782.webp",
                "name": "Frozen Spitball",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow infuses ice energy into {104700}, who then can tap into the ice energy to power up abilities at will.",
                "transformation_id": 0
            },
            {
                "id": 104781,
                "icon": "abilities\/1047\/104781.webp",
                "name": "New Friends",
                "type": "Normal",
                "isCollab": true,
                "description": "{104700}{000003}{102300} can ride on Groot's shoulders, receiving <Buff>Damage Reduction<\/>.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "Up to 12m",
                    "Casting": "Targeted",
                    "Damage Reduction": "35%"
                },
                "transformation_id": 0
            },
            {
                "id": 104713,
                "icon": "abilities\/1047\/104713.webp",
                "name": "Snow Splash",
                "type": "Weapon",
                "isCollab": false,
                "description": "Unleash a damaging splash. This ability can paint the ground.",
                "transformation_id": 0
            },
            {
                "id": 104723,
                "icon": "abilities\/1047\/104723.webp",
                "name": "Frost Burst",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch a high-speed snowball that bursts upon impact, dealing damage to enemies within range. This ability can paint the ground.",
                "transformation_id": 0
            },
            {
                "id": 104752,
                "icon": "abilities\/1047\/104752.webp",
                "name": "Blasting Bubble",
                "type": "Normal",
                "isCollab": false,
                "description": "Spit a bubble that explodes after a short delay, dealing damage; using this Ability can paint the ground.",
                "transformation_id": 0
            },
            {
                "id": 104764,
                "icon": "abilities\/1047\/104764.webp",
                "name": "Hide And Seek",
                "type": "Normal",
                "isCollab": false,
                "description": "Dive into the scene with only his dorsal fin exposed, granting himself a <Buff>Movement Boost<\/>. Jeff can heal while submerged and gains the wall-crawl ability.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Instant Cast",
                    "Energy Cost": "20\/s",
                    "Healing Amount": "35\/s",
                    "Maximum Energy": "120",
                    "Movement Boost": "60%",
                    "Special Effect": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff's hitbox is reduced",
                    "Energy Recovery Speed": "15\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104772,
                "icon": "abilities\/1047\/104772.webp",
                "name": "It's Jeff!",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Deep dive into the scene and resurface to swallow both enemies and allies within range, activating <Orange>Hide and Seek<\/> for a brief duration before ejecting the swallowed heroes forward. Use this ability to paint the ground.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m radius,5m high cylindrical spell field",
                    "Damage": "25\/s",
                    "Casting": "Targeted",
                    "Duration": "6s",
                    "Energy Cost": "4500",
                    "Healing Amount": "225\/s",
                    "Special Effect1": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek",
                    "Special Effect2": "It's Jeff! (Ultimate Ability) leaves an 8m radius Healing Pool at the point of activation that heals allies within range by 100\/s. Healing Pool lasts for 8s",
                    "Bonus Health (Ally)": "\n\t\t\t\t\t\tOverflow healing on swallowed allies grants 45 Health per second as Bonus Health, up to 150\n\t\t\t\t\t\t"
                },
                "transformation_id": 0
            },
            {
                "id": 104784,
                "icon": "abilities\/1047\/104784.webp",
                "name": "It's Jeff-nado!",
                "type": "Normal",
                "isCollab": true,
                "description": "When Storm unleashes her <Orange>Omega Hurricane<\/>, if Jeff the Land Shark has <Orange>It's Jeff!<\/> ready, he can channel her power to conjure a ferocious <Orange>Jeff-nado<\/>! Additionally, a <Orange>Jeff-nado<\/> will form if Jeff encounters Storm's <Orange>Omega Hurricane<\/> after devouring enemies with <Orange>It's Jeff!<\/>. Enemies will be drawn into the swirling chaos after enduring sustained damage from the <Orange>Jeff-nado<\/> for some time.",
                "additional_fields": {
                    "Key": "Z",
                    "Select Range": "60m radius, 90° fan-shaped area in front of Jeff",
                    "Swallow Range": "10m spherical radius spell field centered around Storm",
                    "Swallow Damage": "80",
                    "Attack Interval": "2 hits per second",
                    "Swallow Time Required": "1.5s",
                    "Warning before Swallow": "0.1"
                },
                "transformation_id": 0
            },
            {
                "id": 104783,
                "icon": "abilities\/1047\/104783.webp",
                "name": "Guardian Of The Deep",
                "type": "Normal",
                "isCollab": true,
                "description": "Venom shares his symbiotes with Jeff and Hela. Jeff's <Orange>Guardian of the Deep<\/> links with nearby allies for continuous healing, releasing a large healing burst that converts any excess into <Buff>Bonus Health<\/> when it ends. Hela's <Orange>Hel Tendrils<\/> unleash a symbiotic Hel Sphere that pulls in nearby enemies and links them, <Debuff>slowing<\/> those that try to escape.",
                "additional_fields": {
                    "Key": "X",
                    "Range": "10m spherical radius spell field",
                    "Cooldown": "20s",
                    "Bonus Health": "100",
                    "Bonus Health Falloff": "Falloff begins at 3s and decreases by 30\/s",
                    "One-time Healing Amount": "70",
                    "Continuous Healing Duration": "5s",
                    "Continuous Healing Efficiency": "70\/s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "21.00",
                "mover_shaker": "14.00",
                "rank_calc": "3.92",
                "mover_shaker_calc": "0.51",
                "ZScore": "0.26",
                "winrate": "46.81",
                "pickrate": "21.75",
                "banrate": "0.39",
                "usage_trend": "Upward",
                "winrate_prev": "46.18",
                "pickrate_prev": "19.46",
                "banrate_prev": "0.39",
                "winrate_change": "1.00",
                "pickrate_change": "12.00",
                "banrate_change": "0.00"
            },
            {
                "date": "1755216000",
                "rank": "30.00",
                "mover_shaker": "28.00",
                "rank_calc": "3.84",
                "mover_shaker_calc": "-0.57",
                "ZScore": "0.18",
                "winrate": "46.18",
                "pickrate": "19.46",
                "banrate": "0.39",
                "usage_trend": "Downward",
                "winrate_prev": "45.86",
                "pickrate_prev": "19.96",
                "banrate_prev": "0.32",
                "winrate_change": "1.00",
                "pickrate_change": "-3.00",
                "banrate_change": "22.00"
            }
        ]
    },
    {
        "id": "1048",
        "name": "Psylocke",
        "real_name": "Sai",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/psylocke-headbig-0.webp",
                "name": "Psylocke",
                "health": "250",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "Psylocke",
        "description": "The psychic warrior known as Sai has the Mutant ability to conjure a variety of weapons with the power of her mind. Gracefully gliding across the battlefield, this trained ninja can shatter the enemy's defenses with a single thought.",
        "slug": "psylocke",
        "team": [
            "X_men",
            "Mutants"
        ],
        "difficulty": "5",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/psylocke-square.webp",
        "image_transverse": "characters\/psylocke-transverse.webp",
        "icon": "characters\/psylocke-headbig.webp",
        "image": "characters\/psylocke-portrait.webp",
        "logo_small": "characters\/psylocke-logo.webp",
        "logo": "characters\/psylocke-logo-small.webp",
        "skins": [
            "1048001",
            "1048100",
            "1048500",
            "1048300",
            "1048501",
            "ps1048503",
            "1048502",
            "ps1048504",
            "ps1048505",
            "1048301",
            "ps1048305",
            "ps1048306"
        ],
        "abilities": [
            {
                "id": 104821,
                "icon": "abilities\/1048\/104821.webp",
                "name": "Psionic Crossbow",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash bolts with psionic crossbows to damage enemies and reduce the cooldowns of all her abilities.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "16",
                    "Damage": "12 damage per round",
                    "Casting": "Double projectile with spread",
                    "Fire Rate": "The firing interval between shots is 0.2s, with an interval of 0.6s between each round of shooting",
                    "Critical Hit": "Yes",
                    "Damage Falloff": "Falloff begins at 15m, decreasing to 60% at 30m",
                    "Critical Damage": "150%",
                    "Bullets Fired Each Cast": "4",
                    "Cooldown Reduction On Hit": "0.25s per hit",
                    "Crosshair Spread Radius (at 10m)": "0.2m"
                },
                "transformation_id": 0
            },
            {
                "id": 104831,
                "icon": "abilities\/1048\/104831.webp",
                "name": "Wing Shurikens",
                "type": "Normal",
                "isCollab": false,
                "description": "Launch a volley of psionic shurikens that stick to enemies, dealing damage and granting herself <Buff>Bonus Health<\/>. Press again to recall the shurikens.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "8 per hit",
                    "Casting": "Projectile that fires in a straight trajectory.",
                    "Cooldown": "8s",
                    "Bonus Health": "10 bonus health per round",
                    "Firing Phase": " ",
                    "Recall Phase": " ",
                    "Spread Angle": "0.86°",
                    "Recall Window": "3s",
                    "Damage Falloff": "Falloff begins at 15m, decreasing to 80% at 25m",
                    "Maximum Distance": "25m",
                    "Projectile Speed": "120 m\/s",
                    "Special Mechanic": "When the projectile is recalled, it will move 20s toward the crosshair before returning to Psylocke",
                    "Number of Projectiles": "5"
                },
                "transformation_id": 0
            },
            {
                "id": 104841,
                "icon": "abilities\/1048\/104841.webp",
                "name": "Psi-blade Dash",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward and slice through enemies along the path with psionic blades.",
                "additional_fields": {
                    "Key": "Shift",
                    "Damage": "50",
                    "Charges": "2",
                    "Cooldown": "12s",
                    "Average Speed": "43 m\/s",
                    "Maximum Distance": "12m",
                    "Special Mechanic": "Casting this ability will automatically recall the Wing Shurikens. The shurikens will first travel to Psylocke's starting position before returning to her"
                },
                "transformation_id": 0
            },
            {
                "id": 104851,
                "icon": "abilities\/1048\/104851.webp",
                "name": "Psychic Stealth",
                "type": "Normal",
                "isCollab": false,
                "description": "Enter stealth and gain a <Buff>Movement Boost<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "15s",
                    "Duration": "2s",
                    "Movement Boost": "50%",
                    "Special Mechanic": "When attacked while in stealth, Psylocke will remain in stealth but will briefly become visible for a short duration"
                },
                "transformation_id": 0
            },
            {
                "id": 104861,
                "icon": "abilities\/1048\/104861.webp",
                "name": "Dance Of The Butterfly",
                "type": "Normal",
                "isCollab": false,
                "description": "Slash nearby enemies with a psionic katana, dealing massive damage.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m spherical radius",
                    "Damage": "170 damage per hit",
                    "Duration": "4s",
                    "Slow Rate": "-15%",
                    "Energy Cost": "2800",
                    "Attack Interval": "2 hits per second",
                    "Special Mechanic": "Psylocke will slash a random enemy, giving priority to the one who has been hit the least"
                },
                "transformation_id": 0
            },
            {
                "id": 104895,
                "icon": "abilities\/1048\/104895.webp",
                "name": "Psionic Disc",
                "type": "Normal",
                "isCollab": true,
                "description": "When Magik is on the field, {102600} can tap into Limbo to rewind a few seconds back to a previous position; after passing through Limbo, {102600} will gain <Buff>Bonus Health<\/> based on missing health.",
                "transformation_id": 0
            },
            {
                "id": 104892,
                "icon": "abilities\/1048\/104892.webp",
                "name": "Psychic Echoes",
                "type": "Normal",
                "isCollab": true,
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy's perspective that confuses foes by moving and casting abilities on its own.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "30s",
                    "Special Effect": "Upon release, Magneto and his Duplicate Illusion become invisible. The damage dealt by the projection is reduced, and it dissipates after taking a specific amount of damage",
                    "Invisibility Duration": "1s",
                    "Duplicate Damage Reduction": "80%",
                    "Duplicate Max Damage Received": "150"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "22.00",
                "mover_shaker": "35.00",
                "rank_calc": "3.91",
                "mover_shaker_calc": "-1.27",
                "ZScore": "0.13",
                "winrate": "49.52",
                "pickrate": "11.01",
                "banrate": "1.74",
                "usage_trend": "Upward",
                "winrate_prev": "49.91",
                "pickrate_prev": "10.50",
                "banrate_prev": "1.24",
                "winrate_change": "-1.00",
                "pickrate_change": "5.00",
                "banrate_change": "40.00"
            },
            {
                "date": "1755216000",
                "rank": "18.00",
                "mover_shaker": "21.00",
                "rank_calc": "3.95",
                "mover_shaker_calc": "-0.01",
                "ZScore": "0.20",
                "winrate": "49.91",
                "pickrate": "10.50",
                "banrate": "1.24",
                "usage_trend": "Downward",
                "winrate_prev": "48.99",
                "pickrate_prev": "12.85",
                "banrate_prev": "1.23",
                "winrate_change": "2.00",
                "pickrate_change": "-18.00",
                "banrate_change": "1.00"
            }
        ]
    },
    {
        "id": "1049",
        "name": "Wolverine",
        "real_name": "James \"logan\" Howlett",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/wolverine-headbig-0.webp",
                "name": "Wolverine",
                "health": "350",
                "movement_speed": "7m\/s"
            }
        ],
        "en_name": "Wolverine",
        "description": "Thanks to his regenerative healing factor and berserker rage, the centuries-old Logan can fight through the worst pain to go claw-to-claw with any foe. The Wolverine stands ready to shred through all obstacles in his way with his Adamantium claws.",
        "slug": "wolverine",
        "team": [
            "X_men",
            "Mutants"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/wolverine-square.webp",
        "image_transverse": "characters\/wolverine-transverse.webp",
        "icon": "characters\/wolverine-headbig.webp",
        "image": "characters\/wolverine-portrait.webp",
        "logo_small": "characters\/wolverine-logo.webp",
        "logo": "characters\/wolverine-logo-small.webp",
        "skins": [
            "1049001",
            "1049100",
            "1049501",
            "1049500",
            "1049300",
            "1049800",
            "1049502"
        ],
        "abilities": [
            {
                "id": 104901,
                "icon": "abilities\/1049\/104901.webp",
                "name": "Regenerative Healing Factor",
                "type": "Normal",
                "isCollab": false,
                "description": "Begin to heal and rise with a hefty <Buff>Bonus Health<\/>, shaking off all debuffs. After a brief moment, any remaining <Buff>Bonus Health<\/> morphs into a one-off heal, zeroing out his <Orange>Rage<\/>. Assists in KOs reduce this cooldown.",
                "additional_fields": {
                    "Key": "Passive",
                    "Cooldown": "90s",
                    "Bonus Health": "150 - 300 (Damage increases with Rage)",
                    "Bonus Health Duration": "3s",
                    "Bonus Health\/Healing Conversion": "1",
                    "Cooldown Reduction Per KO Engaged": "10s"
                },
                "transformation_id": 0
            },
            {
                "id": 104921,
                "icon": "abilities\/1049\/104921.webp",
                "name": "Berserker Rage",
                "type": "Normal",
                "isCollab": false,
                "description": "<Orange>Rage<\/> builds when Wolverine attacks or takes hits, boosting the damage of his <Orange>Claw Strikes<\/> and the <Buff>Bonus Health<\/> from his regenerative healing factor.",
                "additional_fields": {
                    "Key": "Passive",
                    "Max Rage": "100",
                    "Rage Per Hit Taken": "5",
                    "Rage Per Savage Claw Hit": "10",
                    "Rage Gain From Taking Hits": "2 per second",
                    "Rage Per Feral Leap Snatch": "10",
                    "Rage Per Vicious Rampage Hit": "15",
                    "Rage Per Last Stand Knockback": "25",
                    "Rage Per Berserk Claw Strike Hit": "5"
                },
                "transformation_id": 0
            },
            {
                "id": 104941,
                "icon": "abilities\/1049\/104941.webp",
                "name": "Savage Claw",
                "type": "Normal",
                "isCollab": false,
                "description": "Slash with Adamantium claws for a <Orange>Claw Strike<\/>. Unleashing <Orange>Feral Leap<\/> will enhance it to <Orange>Berserk Claw Strike<\/> for a brief period.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Casting": "Melee",
                    "Base Damage": "15 damage per strike",
                    "Attack Interval": "The first three strikes have an interval of 0.27s between them, while the fourth strike has a 0.84s interval from the third strike",
                    "Maximum Distance": "3.5m",
                    "Percentage Damage": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.045% damage for each point of Rage"
                },
                "transformation_id": 0
            },
            {
                "id": 104951,
                "icon": "abilities\/1049\/104951.webp",
                "name": "Vicious Rampage",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward and unleash a <Orange>Claw Strike<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "3m",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "3s",
                    "Base Damage": "15 damage per strike",
                    "Average Speed": "44m\/s",
                    "Maximum Distance": "7.5m",
                    "Percentage Damage": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.045% damage for each point of Rage"
                },
                "transformation_id": 0
            },
            {
                "id": 104961,
                "icon": "abilities\/1049\/104961.webp",
                "name": "Undying Animal",
                "type": "Normal",
                "isCollab": false,
                "description": "Unleash a fierce howl to briefly reduce incoming damage.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "16s",
                    "Duration": "5s",
                    "Damage Boost": "40%"
                },
                "transformation_id": 0
            },
            {
                "id": 104971,
                "icon": "abilities\/1049\/104971.webp",
                "name": "Feral Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Leap like an animal to snatch the first enemy upon impact and <Debuff>Smash<\/> them to the ground. Unleashing this ability will enhance his normal attack to <Orange>Berserk Claw Strike<\/> for a brief period.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Cooldown": "15s",
                    "Smash Damage": "35",
                    "Snatch Damage": "35",
                    "Knockdown Duration": "0.75s",
                    "Berserk Claw Strike Duration": "5s",
                    "Berserk Claw Strike Base Damage": "6 damage per strike",
                    "Berserk Claw Strike Attack Interval": "5.88 strikes per second",
                    "Berserk Claw Strike Maximum Distance": "3.5m",
                    "Berserk Claw Strike Percentage Damage": "Deal damage equal to 1% of the target's Max Health, with an extra 0.035% damage for each point of Rage"
                },
                "transformation_id": 0
            },
            {
                "id": 104981,
                "icon": "abilities\/1049\/104981.webp",
                "name": "Last Stand",
                "type": "Ultimate",
                "isCollab": false,
                "description": "<Debuff>Launch Up<\/> enemies ahead and spiral through the air, sweeping up enemies along the path and delivering a devastating impact at the landing point. Impact deals extra damage based on <Orange>Rage<\/> accumulated.",
                "additional_fields": {
                    "Key": "Q",
                    "Energy Cost": "3400",
                    "Impact Range": "8m spherical radius",
                    "Knockdown Time": "0.75s",
                    "Knockback Range": "8m spherical radius",
                    "Knockback Damage": "50",
                    "Impact Base Damage": "50",
                    "Impact Percentage Damage": "Deal damage equal to 10% of the target's Max Health, with an extra 0.3% damage for each point of Rage",
                    "Snatching Damage Over Time": "20\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104991,
                "icon": "abilities\/1049\/104991.webp",
                "name": "Metal Cannonball",
                "type": "Normal",
                "isCollab": true,
                "description": "Wolverine, Hulk{000003}{105100} can interact with each other. Once both parties confirm, Hulk{000003}{105100} can lift Wolverine and press the key to hurl him forward.",
                "transformation_id": 0
            },
            {
                "id": 104994,
                "icon": "abilities\/1049\/104994.webp",
                "name": "Phoenix Warrior",
                "type": "Normal",
                "isCollab": true,
                "description": "Jean Grey imbues Wolverine with the awe-inspiring Phoenix Force. With this power, Wolverine's <Orange>Feral Leap<\/> transforms into <Orange>Phoenix Warrior<\/>. While active, he is enveloped in Phoenix flames that continuously scorch nearby enemies, dealing Percentage Damage. In this state, Wolverine's abilities gain <Buff>Lifesteal<\/> when inflicting damage.",
                "additional_fields": {
                    "Key": "Shift",
                    "Cooldown": "15s",
                    "Smash Damage": "35",
                    "Snatch Damage": "35",
                    "Spell Field Range": "3m spherical radius spell field",
                    "Knockdown Duration": "0.75s",
                    "Spell Field Damage": "Deal damage equals to target's 1% Maximum Health per second",
                    "Lifesteal Proportion": "0.33",
                    "Berserk Claw Strike Duration": "5s",
                    "Berserk Claw Strike Base Damage": "6 damage per strike",
                    "Berserk Claw Strike Attack Interval": "5.88 strikes per second",
                    "Berserk Claw Strike Maximum Distance": "3.5m",
                    "Berserk Claw Strike Percentage Damage": "Deal damage equal to 1% of the target's Max Health, with an extra 0.035% damage for each point of Rage."
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "38.00",
                "mover_shaker": "9.00",
                "rank_calc": "3.62",
                "mover_shaker_calc": "0.99",
                "ZScore": "0.30",
                "winrate": "48.01",
                "pickrate": "5.77",
                "banrate": "26.35",
                "usage_trend": "Upward",
                "winrate_prev": "47.68",
                "pickrate_prev": "5.46",
                "banrate_prev": "34.98",
                "winrate_change": "1.00",
                "pickrate_change": "6.00",
                "banrate_change": "-25.00"
            },
            {
                "date": "1755216000",
                "rank": "39.00",
                "mover_shaker": "26.00",
                "rank_calc": "3.56",
                "mover_shaker_calc": "-0.40",
                "ZScore": "0.19",
                "winrate": "47.68",
                "pickrate": "5.46",
                "banrate": "34.98",
                "usage_trend": "Downward",
                "winrate_prev": "48.71",
                "pickrate_prev": "7.53",
                "banrate_prev": "43.24",
                "winrate_change": "-2.00",
                "pickrate_change": "-27.00",
                "banrate_change": "-19.00"
            }
        ]
    },
    {
        "id": "1050",
        "name": "Invisible Woman",
        "real_name": "Susan Storm",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/invisible-woman-headbig-0.webp",
                "name": "Invisible Woman",
                "health": "275",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "InvisibleWoman",
        "description": "The Invisible Woman is able to slip in and out of sight without a trace. No matter how intense the battle may be, Susan Storm always keeps her cool, conjuring up impenetrable force fields to protect herself and her team.",
        "slug": "invisible-woman",
        "team": [
            "Fantasticfour"
        ],
        "difficulty": "4",
        "attack_type": "Projectile Heroes",
        "role": "STRATEGIST",
        "image_square": "characters\/invisible-woman-square.webp",
        "image_transverse": "characters\/invisible-woman-transverse.webp",
        "icon": "characters\/invisible-woman-headbig.webp",
        "image": "characters\/invisible-woman-portrait.webp",
        "logo_small": "characters\/invisible-woman-logo.webp",
        "logo": "characters\/invisible-woman-logo-small.webp",
        "skins": [
            "1050001",
            "1050500",
            "1050300",
            "1050100",
            "1050101",
            "1050501",
            "ps1050504",
            "ps1050505",
            "1050800",
            "1050502",
            "ps1050506",
            "ps1050507"
        ],
        "abilities": [
            {
                "id": 105002,
                "icon": "abilities\/1050\/105002.webp",
                "name": "Psionic Invisibility",
                "type": "Passive",
                "isCollab": false,
                "description": "Invisible Woman automatically becomes invisible 3 seconds after disengaging from combat.",
                "transformation_id": 0
            },
            {
                "id": 105011,
                "icon": "abilities\/1050\/105011.webp",
                "name": "Psionic Hammer",
                "type": "Normal",
                "isCollab": false,
                "description": "Invisible Woman unleashes a devastating three-hit combo, each blow containing concentrated power of the force fields to strike foes. The third hit will launch up enemies in front of her.",
                "transformation_id": 0
            },
            {
                "id": 105021,
                "icon": "abilities\/1050\/105021.webp",
                "name": "Invisible Energy",
                "type": "Normal",
                "isCollab": false,
                "description": "When falling, Invisible Woman can perform a super jump and become invisible by pressing the space bar.",
                "transformation_id": 0
            },
            {
                "id": 105041,
                "icon": "abilities\/1050\/105041.webp",
                "name": "Psionic Support",
                "type": "Normal",
                "isCollab": false,
                "description": "Invisible Woman generates a force shield in front of a selected ally. Once broken, the shield explodes to create a healing field.",
                "transformation_id": 0
            },
            {
                "id": 105051,
                "icon": "abilities\/1050\/105051.webp",
                "name": "Psionic Vortex",
                "type": "Normal",
                "isCollab": false,
                "description": "Invisible Woman gathers psionic energy and throws it to create a vortex that pulls in enemies.",
                "additional_fields": {
                    "Key": "Shift",
                    "Casting": "Single-cast projectile with delayed impact that also generates a spell field",
                    "Cooldown": "12s",
                    "Slow Rate": "Center 50%, Edge 0",
                    "Special Effect": "Applies a slow effect to enemies within the spell field; the closer they are to the center of the field, the greater the slow effect",
                    "Projectile Speed": "80 m\/s",
                    "Spell Field Range": "5m radius",
                    "Spell Field Damage": "35\/sec",
                    "Spell Field Duration": "4s"
                },
                "transformation_id": 0
            },
            {
                "id": 105061,
                "icon": "abilities\/1050\/105061.webp",
                "name": "Psionic Surge",
                "type": "Normal",
                "isCollab": false,
                "description": "Invisible Woman releases a cylindrical force field shockwave in the targeted direction, launching enemies up.",
                "transformation_id": 0
            },
            {
                "id": 105071,
                "icon": "abilities\/1050\/105071.webp",
                "name": "Invisible",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Channeling her potential, Invisible Woman manifests an unseen force field, rendering allies inside undetectable by enemies and healing them.",
                "transformation_id": 0
            },
            {
                "id": 105031,
                "icon": "abilities\/1050\/105031.webp",
                "name": "Psionic Strike",
                "type": "Weapon",
                "isCollab": false,
                "description": "Invisible Woman fires a force field that can penetrate heroes, healing any allies it passes through.",
                "transformation_id": 0
            },
            {
                "id": 105081,
                "icon": "abilities\/1050\/105081.webp",
                "name": "Fantasti-force",
                "type": "Normal",
                "isCollab": true,
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify the entire Fantastic Four team. This formidable force bolsters {104000}{000001}{105100}{000003}{101700}, granting damage resistance. Once activated, they can continually generate <Buff>Bonus Health<\/>, making up for lost Health with each passing moment.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Healing Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "20.00",
                "mover_shaker": "11.00",
                "rank_calc": "3.93",
                "mover_shaker_calc": "0.78",
                "ZScore": "0.28",
                "winrate": "46.85",
                "pickrate": "28.49",
                "banrate": "0.15",
                "usage_trend": "Downward",
                "winrate_prev": "46.72",
                "pickrate_prev": "28.86",
                "banrate_prev": "0.20",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "-25.00"
            },
            {
                "date": "1755216000",
                "rank": "20.00",
                "mover_shaker": "17.00",
                "rank_calc": "3.94",
                "mover_shaker_calc": "0.15",
                "ZScore": "0.20",
                "winrate": "46.72",
                "pickrate": "28.86",
                "banrate": "0.20",
                "usage_trend": "Downward",
                "winrate_prev": "47.06",
                "pickrate_prev": "36.03",
                "banrate_prev": "0.26",
                "winrate_change": "-1.00",
                "pickrate_change": "-20.00",
                "banrate_change": "-23.00"
            }
        ]
    },
    {
        "id": "1051",
        "name": "The Thing",
        "real_name": "Benjamin Grimm",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/the-thing-headbig-0.webp",
                "name": "The Thing",
                "health": "700",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "BenjaminGrim",
        "description": "Benjamin J. Grimm is unquestionably the rock star of any team he's on. Always at the forefront of the fight, the Thing shields his allies with his unbreakable form, selflessly fending off any harm that comes their way.",
        "slug": "the-thing",
        "team": [
            "Fantasticfour"
        ],
        "difficulty": "1",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/the-thing-square.webp",
        "image_transverse": "characters\/the-thing-transverse.webp",
        "icon": "characters\/the-thing-headbig.webp",
        "image": "characters\/the-thing-portrait.webp",
        "logo_small": "characters\/the-thing-logo.webp",
        "logo": "characters\/the-thing-logo-small.webp",
        "skins": [
            "1051001",
            "1051500",
            "1051100",
            "1051101",
            "1051501",
            "1051800",
            "1051502",
            "1051301",
            "1051300",
            "ps1051302"
        ],
        "abilities": [
            {
                "id": 105101,
                "icon": "abilities\/1051\/105101.webp",
                "name": "Unyielding Will",
                "type": "Passive",
                "isCollab": false,
                "description": "Immune to <Debuff>launch-up<\/>, <Debuff>knock-back<\/>, and other displacement effects.",
                "additional_fields": {
                    "Key": "PASSIVE",
                    "Special Effect": "Immune to launch-up, knock-back, and other displacement effects"
                },
                "transformation_id": 0
            },
            {
                "id": 105111,
                "icon": "abilities\/1051\/105111.webp",
                "name": "Rocky Jab",
                "type": "Weapon",
                "isCollab": false,
                "description": "Rapidly punch forward.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "Double strike, 40 per hit",
                    "Casting": "Single-cast Spell Field",
                    "Attack Range": "4m",
                    "Attack Interval": "Double strike 0.33s between attacks, 1s between sets."
                },
                "transformation_id": 0
            },
            {
                "id": 105121,
                "icon": "abilities\/1051\/105121.webp",
                "name": "Stone Haymaker",
                "type": "Weapon",
                "isCollab": false,
                "description": "Deliver a devastating Heavy Blow. Can <Debuff>Knock Down<\/> flying enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "90",
                    "Casting": "Single-cast Spell Field",
                    "Attack Range": "8m",
                    "Special Effect": "Move forward 3 meters while punching, gaining 50 Bonus Health during skill activation; once hit, this ability can knock down flying enemies to the ground"
                },
                "transformation_id": 0
            },
            {
                "id": 105131,
                "icon": "abilities\/1051\/105131.webp",
                "name": "Yancy Street Charge",
                "type": "Normal",
                "isCollab": false,
                "description": "Continuously charge forward, <Debuff>launching up<\/> enemies and leaving behind a zone at the final position that prevents the use of mobility abilities.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Damage": "Charge: 30; ground slam: 20; immobilization zone: 15 per\/s",
                    "Cooldown": "10s",
                    "Duration": "5s",
                    "Movement Boost": "100%",
                    "Special Effect": "Gain 200 Bonus Health during skill activation",
                    "Spell Field Range": "Ground slam: 8m radius, 2.5m high cylindrical spell field. Immobilization zone: 8m radius, 4m high cylindrical spell field"
                },
                "transformation_id": 0
            },
            {
                "id": 105141,
                "icon": "abilities\/1051\/105141.webp",
                "name": "Embattled Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Jump toward your ally and apply <Buff>damage reduction<\/> to both of you.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "Basic Cooldown 3s, with a charge of 10s per use",
                    "Special Effect": "Apply a 25% damage reduction effect to self and target ally for 3s",
                    "Maximum Distance": "20m"
                },
                "transformation_id": 0
            },
            {
                "id": 105151,
                "icon": "abilities\/1051\/105151.webp",
                "name": "Clobberin' Time",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Use immense power to launch all enemies in front of you into the air.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "Step spell field: 3m high, 10m wide, advancing 2m every 0.1 seconds, up to a maximum of 18m",
                    "Damage": "100",
                    "Energy Cost": "2800",
                    "Special Effect": "Stun duration 2.5s"
                },
                "transformation_id": 0
            },
            {
                "id": 105191,
                "icon": "abilities\/1051\/105191.webp",
                "name": "Cooperative Comrades",
                "type": "Normal",
                "isCollab": true,
                "description": "The Invisible Woman taps into her powers, channeling Psionic Might to fortify the entire Fantastic Four team. This formidable force bolsters Human Torch, The Thing, and Mister Fantastic, granting damage resistance. Once activated, they can continually generate <Buff>Bonus Health<\/>, making up for lost Health.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "25s",
                    "Duration": "5s",
                    "Bonus Max Health": "100",
                    "Bonus Health Growth": "Generate 5 Bonus Health per 0.1s"
                },
                "transformation_id": 0
            },
            {
                "id": 105161,
                "icon": "abilities\/1051\/105161.webp",
                "name": "Cosmic Fastball",
                "type": "Normal",
                "isCollab": true,
                "description": "Wolverine, Hulk{000003}{105100} can interact with each other. Once both parties confirm, Hulk{000003}{105100} can lift Wolverine and press the key to hurl him forward.",
                "additional_fields": {
                    "Key": "Z",
                    "Casting": "Targeted",
                    "Cooldown": "3s when not thrown, 15s when thrown",
                    "Maximum Distance": "20m"
                },
                "transformation_id": 0
            },
            {
                "id": 105142,
                "icon": "abilities\/1051\/105142.webp",
                "name": "Battle Blitz",
                "type": "Normal",
                "isCollab": false,
                "description": "Jump toward an enemy and apply <Buff>damage reduction<\/> to self.",
                "additional_fields": {
                    "Key": "F",
                    "CASTING": "Targeted",
                    "COOLDOWN": "Basic Cooldown 3s, with a charge of 10s per use, shares the same Cooldown with the E Key ability",
                    "SPECIAL EFFECT": "Apply a 25% damage reduction effect to self for 3s",
                    "MAXIMUM DISTANCE": "20m"
                },
                "transformation_id": 0
            },
            {
                "id": 105171,
                "icon": "abilities\/1051\/105171.webp",
                "name": "Flying Thing",
                "type": "Normal",
                "isCollab": true,
                "description": "Human Torch can lift The Thing into the air and slam him down, dealing damage, <Debuff>launching<\/> enemies, and creating a zone that disables mobility abilities.",
                "additional_fields": {
                    "Key": "X",
                    "Damage": "Launch-up spell field causes 30 damage; mobility abilities disabling spell field causes 15 damage per second",
                    "Cooldown": "Successfully interacted: 30s; fail to interact: 3s",
                    "Flight Speed": "15m\/s",
                    "Launch Up Range": "A cylindrical spell field with a radius of 8m and a height of 1m",
                    "Maximum Distance": "20m",
                    "Maximum Flight Duration": "8s",
                    "Mobility Abilities Disabling Range": "A cylindrical spell field with a radius of 8m and a height of 8m",
                    "Slam Down Initial Horizontal Velocity": "15m\/s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "24.00",
                "mover_shaker": "16.00",
                "rank_calc": "3.89",
                "mover_shaker_calc": "0.28",
                "ZScore": "0.25",
                "winrate": "49.24",
                "pickrate": "15.33",
                "banrate": "1.73",
                "usage_trend": "Downward",
                "winrate_prev": "49.57",
                "pickrate_prev": "17.20",
                "banrate_prev": "2.19",
                "winrate_change": "-1.00",
                "pickrate_change": "-11.00",
                "banrate_change": "-21.00"
            },
            {
                "date": "1755216000",
                "rank": "21.00",
                "mover_shaker": "9.00",
                "rank_calc": "3.93",
                "mover_shaker_calc": "0.58",
                "ZScore": "0.22",
                "winrate": "49.57",
                "pickrate": "17.20",
                "banrate": "2.19",
                "usage_trend": "Downward",
                "winrate_prev": "49.64",
                "pickrate_prev": "22.11",
                "banrate_prev": "3.38",
                "winrate_change": "0.00",
                "pickrate_change": "-22.00",
                "banrate_change": "-35.00"
            }
        ]
    },
    {
        "id": "1052",
        "name": "Iron Fist",
        "real_name": "Lin Lie",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/iron-fist-headbig-0.webp",
                "name": "Iron Fist",
                "health": "300",
                "movement_speed": "6 m\/s"
            }
        ],
        "en_name": "LinLie",
        "description": "Lin Lie is a master of Chinese martial arts who once wielded the shattered Sword of Fu Xi. After fusing its pieces with the mighty Chi of Shou-Lao, he is poised to strike his foes with the grace and force of a soaring dragon as the latest immortal Iron Fist.",
        "slug": "iron-fist",
        "team": [
            "Agentsofatlas",
            "Immortalweapon"
        ],
        "difficulty": "4",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/iron-fist-square.webp",
        "image_transverse": "characters\/iron-fist-transverse.webp",
        "icon": "characters\/iron-fist-headbig.webp",
        "image": "characters\/iron-fist-portrait.webp",
        "logo_small": "characters\/iron-fist-logo.webp",
        "logo": "characters\/iron-fist-logo-small.webp",
        "skins": [
            "1052001",
            "1052100",
            "1052500",
            "1052300",
            "1052501",
            "1052301",
            "1052502"
        ],
        "abilities": [
            {
                "id": 105201,
                "icon": "abilities\/1052\/105201.webp",
                "name": "Wall Runner",
                "type": "Passive",
                "isCollab": false,
                "description": "Run horizontally along the walls.",
                "additional_fields": {
                    "Key": "Space",
                    "Wall-Crawling Speed": "9 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105211,
                "icon": "abilities\/1052\/105211.webp",
                "name": "Crane Leap",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform up to three consecutive jumps while airborne.",
                "additional_fields": {
                    "Key": "Space",
                    "Cooldown": "3 charges, with each charge taking 1s to recharge"
                },
                "transformation_id": 0
            },
            {
                "id": 105221,
                "icon": "abilities\/1052\/105221.webp",
                "name": "Jeet Kune Do",
                "type": "Weapon",
                "isCollab": false,
                "description": "Strike the targeted enemy with Jeet Kune Do, and the last strike will <Debuff>Launch Up<\/> enemies, reducing the cooldown of <Orange>Dragon's Defense<\/> with every hit.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "The first four strikes each deal 30 damage, while the fifth strike deals 55 damage",
                    "Casting": "Melee",
                    "Attack Interval": "The first four strikes have an interval of 0.45s between them, while the fifth strike has a 0.67s interval from the fourth strike",
                    "Maximum Distance": "3m",
                    "Maximum Pull-In Distance": "6m",
                    "Dragon's Defense Cooldown Reduction Per Hit": "1s"
                },
                "transformation_id": 0
            },
            {
                "id": 105231,
                "icon": "abilities\/1052\/105231.webp",
                "name": "Dragon's Defense",
                "type": "Normal",
                "isCollab": false,
                "description": "Assume a defensive stance with a boost of Chi to block incoming attacks and gain <Buff>Damage Reduction<\/>. Once he exits the defensive stance, he gains <Buff>Bonus Health<\/> and can strike back with <Orange>Yat Jee Chung Kuen<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Cooldown": "15s",
                    "Block Time": "1s",
                    "Damage Reduction": "30%",
                    "Max Health\/Damage Blocked Conversion": "175",
                    "Bonus Health\/Damage Blocked Conversion": "1.3"
                },
                "transformation_id": 0
            },
            {
                "id": 105232,
                "icon": "abilities\/1052\/105232.webp",
                "name": "Yat Jee Chung Kuen",
                "type": "Weapon",
                "isCollab": false,
                "description": "Dash forward to pursue the targeted enemy and unleash a flurry of attacks.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Range": "3m",
                    "Damage": "8 base damage + 3.1% of the enemy's Max Health per strike",
                    "Casting": "Melee",
                    "Duration": "5s",
                    "Attack Speed": "7 strikes per second",
                    "Maximum Pull-In Distance": "11m",
                    "Dashing Speed Without Target": "12 m\/s",
                    "Dashing Distance Without Target": "3m"
                },
                "transformation_id": 0
            },
            {
                "id": 105241,
                "icon": "abilities\/1052\/105241.webp",
                "name": "Harmony Recovery",
                "type": "Normal",
                "isCollab": false,
                "description": "Cross legs and channel Chi, recovering health. Excess healing converts to <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "12s",
                    "Duration": "3s",
                    "Healing Per Second": "100",
                    "Excess Healing\/Max Health Conversion": "100"
                },
                "transformation_id": 0
            },
            {
                "id": 105251,
                "icon": "abilities\/1052\/105251.webp",
                "name": "K'un-lun Kick",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward, delivering a flying kick when hitting an enemy or reaching full range, dealing damage to nearby enemies. Damage increases with lower enemy health.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "10s",
                    "Dashing Speed": "40 m\/s",
                    "Maximum Dash Distance": "12m",
                    "First Flying Kick Damage": "35",
                    "Second Flying Kick Damage": "35 - 70 (Maximum damage is achieved when the target is at 50% Health)"
                },
                "transformation_id": 0
            },
            {
                "id": 105261,
                "icon": "abilities\/1052\/105261.webp",
                "name": "Living Chi",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Become living Chi to boost his speed, damage, and attack range, delivering stronger punches while reducing the cooldown of <Orange>Dragon's Defense<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Duration": "12s",
                    "Energy Cost": "3400",
                    "Damage Boost": "30%",
                    "Movement Boost": "20%",
                    "K'un-Lun Kick Bonus Range": "100%",
                    "Yat Jee Chung Kuen Bonus Range": "100%",
                    "Yat Jee Chung Kuen Cooldown Reduction": "-80%"
                },
                "transformation_id": 0
            },
            {
                "id": 105203,
                "icon": "abilities\/1052\/105203.webp",
                "name": "Chi Absorption",
                "type": "Passive",
                "isCollab": false,
                "description": "Assists in taking down enemies allow him to absorb their Chi and gain <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Health": "50"
                },
                "transformation_id": 0
            },
            {
                "id": 105271,
                "icon": "abilities\/1052\/105271.webp",
                "name": "Dragon's Chill",
                "type": "Normal",
                "isCollab": true,
                "description": "Iron Fist channels the Chi of Shou-Lao into Luna Snow, transforming her ice power into a Chi-infused frosty ring that radiates from her. This ring can launch up enemies with chilling damage and applies a slowing effect, while simultaneously healing her allies.",
                "transformation_id": 0
            },
            {
                "id": 105291,
                "icon": "abilities\/1052\/105291.webp",
                "name": "LION'S LAUNCH",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch the ball forward with incredible speed.",
                "transformation_id": 0
            },
            {
                "id": 105292,
                "icon": "abilities\/1052\/105292.webp",
                "name": "FEROCIOUS THROW",
                "type": "Weapon",
                "isCollab": false,
                "description": "Hurl the ball with fierce intensity. Charging longer enhances both speed and distance.",
                "transformation_id": 0
            },
            {
                "id": 105212,
                "icon": "abilities\/1052\/105212.webp",
                "name": "CRANE LEAP",
                "type": "Normal",
                "isCollab": false,
                "description": "Perform up to three consecutive jumps while airborne.",
                "additional_fields": {
                    "Key": "Space",
                    "Cooldown": "3 charges, with each charge taking 1s to recharge"
                },
                "transformation_id": 0
            },
            {
                "id": 105252,
                "icon": "abilities\/1052\/105252.webp",
                "name": "LION KICK",
                "type": "Normal",
                "isCollab": false,
                "description": "Sprint forward and hit the enemy or use a flying kick to launch surrounding enemies up upon reaching maximum distance, causing the enemy to lose the ball. This ability can only be used when not in possession of the ball.",
                "transformation_id": 0
            },
            {
                "id": 105242,
                "icon": "abilities\/1052\/105242.webp",
                "name": "Lunar Chi",
                "type": "Normal",
                "isCollab": true,
                "description": "Luna Snow grants Winter's Chill to Hawkeye and Iron Fist. Hawkeye can shoot an <Orange>Ice Arrow<\/> that <Debuff>Stuns<\/> enemies if it travels a certain distance; otherwise, it <Debuff>Slows<\/> the target. The farther the arrow flies, the more damage it deals. When Iron Fist activates <Orange>Harmony Recovery<\/>, he can heal nearby allies with <Orange>Lunar Chi<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Cylindrical Spell Field",
                    "Cooldown": "12s",
                    "Duration": "3s",
                    "Healing Range": "A cylindrical spell field with a 10m radius and a height of 10m.",
                    "Healing Amount": "55\/s",
                    "Special Effect": "Excess healing converts to Bonus Health.",
                    "Bonus Health Falloff Delay": "2s",
                    "Bonus Health Falloff Speed": "15\/s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "28.00",
                "mover_shaker": "32.00",
                "rank_calc": "3.88",
                "mover_shaker_calc": "-0.57",
                "ZScore": "0.18",
                "winrate": "50.80",
                "pickrate": "9.62",
                "banrate": "0.84",
                "usage_trend": "Upward",
                "winrate_prev": "49.59",
                "pickrate_prev": "6.89",
                "banrate_prev": "0.52",
                "winrate_change": "2.00",
                "pickrate_change": "40.00",
                "banrate_change": "62.00"
            },
            {
                "date": "1755216000",
                "rank": "34.00",
                "mover_shaker": "29.00",
                "rank_calc": "3.77",
                "mover_shaker_calc": "-0.61",
                "ZScore": "0.18",
                "winrate": "49.59",
                "pickrate": "6.89",
                "banrate": "0.52",
                "usage_trend": "Downward",
                "winrate_prev": "50.42",
                "pickrate_prev": "7.26",
                "banrate_prev": "0.49",
                "winrate_change": "-2.00",
                "pickrate_change": "-5.00",
                "banrate_change": "6.00"
            }
        ]
    },
    {
        "id": "1053",
        "name": "Emma Frost",
        "real_name": "Emma Frost",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/emma-frost-headbig-0.webp",
                "name": "Emma Frost",
                "health": "550",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "WhiteQueen",
        "description": "For Emma Frost, war is the purest form of art. With her formidable telepathic abilities, she intricately weaves a deadly mental web that ensnares her foes, while her indestructible diamond form lets her lead her teammates fearlessly into the fray. Forever elegant and composed, Emma reigns as the one true queen of the battlefield!",
        "slug": "emma-frost",
        "team": [
            "X_men",
            "Mutants",
            "Villains"
        ],
        "difficulty": "3",
        "attack_type": "Hitscan Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/emma-frost-square.webp",
        "image_transverse": "characters\/emma-frost-transverse.webp",
        "icon": "characters\/emma-frost-headbig.webp",
        "image": "characters\/emma-frost-portrait.webp",
        "logo_small": "characters\/emma-frost-logo.webp",
        "logo": "characters\/emma-frost-logo-small.webp",
        "skins": [
            "1053001",
            "1053500",
            "1053100",
            "1053101",
            "1053102",
            "1053501",
            "1053300"
        ],
        "abilities": [
            {
                "id": 105321,
                "icon": "abilities\/1053\/105321.webp",
                "name": "Telepathic Pulse",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire a psionic beam to deal damage; the longer the beam hits, the higher the damage.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "70",
                    "Damage": "Damage increases with energy: 0 - 70\/s, 99 - 110\/s, full energy - 140\/s",
                    "Casting": "Channeled",
                    "Attack Range": "18m",
                    "Special Effect": "Energy gain: Hero hit: 10\/s; Sentience hit: 15\/s; Common summons hit: 5\/s; Shield hit: 5\/s. Falloff begins 3s after not hitting an enemy, at a rate of 30\/s",
                    "Ammo Consumption": "10\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105331,
                "icon": "abilities\/1053\/105331.webp",
                "name": "Mind's Aegis",
                "type": "Normal",
                "isCollab": false,
                "description": "Create a levitating barrier at the designated location.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Deployable Shield",
                    "Recovery Speed": "70\/s",
                    "Reposition Cooldown": "3s",
                    "Maximum Shield Value": "400",
                    "Cooldown After Destroyed": "4s",
                    "Delayed Recovery After Release": "2s"
                },
                "transformation_id": 0
            },
            {
                "id": 105341,
                "icon": "abilities\/1053\/105341.webp",
                "name": "Diamond Form",
                "type": "Normal",
                "isCollab": false,
                "description": "Activate <Orange>Diamond Form<\/> to transform your attack style while gaining <Buff>Damage Reduction<\/> and becoming <Buff>Unstoppable<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Switch Form",
                    "Cooldown": "18s",
                    "Duration": "8s",
                    "Special Effect": "25% Damage Reduction in Diamond form"
                },
                "transformation_id": 0
            },
            {
                "id": 105342,
                "icon": "abilities\/1053\/105342.webp",
                "name": "Faceted Fury",
                "type": "Normal",
                "isCollab": false,
                "description": "In <Orange>Diamond Form<\/>, deliver a crushing double-fisted strike to enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "First & second hit: 50; third hit: 70; fourth hit: 80",
                    "Casting": "Single-cast Spell Field",
                    "Attack Range": "4m"
                },
                "transformation_id": 0
            },
            {
                "id": 105343,
                "icon": "abilities\/1053\/105343.webp",
                "name": "Crystal Kick",
                "type": "Normal",
                "isCollab": false,
                "description": "In <Orange>Diamond Form<\/>, unleash a flying kick forward and <Debuff>knock back<\/> enemies; extra damage is dealt if they're propelled into a wall.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "Hit damage: 40; damage increases to 90 when the target is knocked into walls",
                    "Casting": "Single-cast Spell Field",
                    "Cooldown": "2s",
                    "Hit Range": "5m",
                    "Special Effect": "Maximum knockback distance: 10m"
                },
                "transformation_id": 0
            },
            {
                "id": 105344,
                "icon": "abilities\/1053\/105344.webp",
                "name": "Carbon Crush",
                "type": "Normal",
                "isCollab": false,
                "description": "In <Orange>Diamond Form<\/>, lunge forward to grab an enemy, then execute a back slam to inflict damage.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "30",
                    "Casting": "Dash Based Control",
                    "Cooldown": "6s",
                    "Special Effect": "Control effect duration: 1.6s",
                    "Maximum Distance": "7m"
                },
                "transformation_id": 0
            },
            {
                "id": 105351,
                "icon": "abilities\/1053\/105351.webp",
                "name": "Psychic Spear",
                "type": "Normal",
                "isCollab": false,
                "description": "Seize control of an enemy's sentience—damage dealt to the <Orange>sentience<\/> cascades to the physical form and can be pierced by <Orange>Telepathic Pulse<\/>. When the sentience shatters, it unleashes extra damage on its owner.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "Deal 5 damage per direct hit. When the sentience shatters, it deals damage to the target, which is equal to 25% of the target's maximum health",
                    "Casting": "Single-cast delayed projectile",
                    "Special Effect": "When the distance between the target and its sentience is more than 15m, their linkage can be broken",
                    "Maximum Distance": "24m",
                    "Projectile Speed": "80m\/s",
                    "Sentience Health": "Target's 25% Current Health"
                },
                "transformation_id": 0
            },
            {
                "id": 105361,
                "icon": "abilities\/1053\/105361.webp",
                "name": "Psionic Seduction",
                "type": "Normal",
                "isCollab": false,
                "description": "Project a forward psychic assault that stuns foes and prevents them from unleashing their Ultimate Abilities; if the effect lingers, it gradually commandeers their mind, forcing them to move toward Emma Frost.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "Cone shape spell field, angle range: 80°, length: 30m",
                    "Damage": "Basic damage 80\/s; distance falloff: falloff begins at 10m, decreasing to 50% at 30m; angle falloff: falloff begins at 7° from the center of view, decreasing to 80% at 20°",
                    "Casting": "Large-ranged Persistent Spell Field",
                    "Duration": "6s",
                    "Energy Cost": "3400",
                    "Special Effect": "When exposed to the ability, enemies accumulate 10 stacks per second, and the stacks decrease by 10 stacks per second when they leave the exposure. At 15 stacks, a control effect is triggered. Each enemy can only be controlled once per ultimate activation"
                },
                "transformation_id": 0
            },
            {
                "id": 105381,
                "icon": "abilities\/1053\/105381.webp",
                "name": "Mind Link",
                "type": "Normal",
                "isCollab": true,
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy's perspective that confuses foes by moving and casting abilities on its own.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+100 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "32.00",
                "mover_shaker": "39.00",
                "rank_calc": "3.80",
                "mover_shaker_calc": "-18.00",
                "ZScore": "-1.10",
                "winrate": "48.91",
                "pickrate": "22.06",
                "banrate": "29.42",
                "usage_trend": "Upward",
                "winrate_prev": "50.80",
                "pickrate_prev": "11.42",
                "banrate_prev": "3.99",
                "winrate_change": "-4.00",
                "pickrate_change": "93.00",
                "banrate_change": "637.00"
            },
            {
                "date": "1755216000",
                "rank": "19.00",
                "mover_shaker": "3.00",
                "rank_calc": "3.95",
                "mover_shaker_calc": "1.79",
                "ZScore": "0.25",
                "winrate": "50.80",
                "pickrate": "11.42",
                "banrate": "3.99",
                "usage_trend": "Downward",
                "winrate_prev": "49.38",
                "pickrate_prev": "27.01",
                "banrate_prev": "18.88",
                "winrate_change": "3.00",
                "pickrate_change": "-58.00",
                "banrate_change": "-79.00"
            }
        ]
    },
    {
        "id": "1054",
        "name": "Phoenix",
        "real_name": "Jean Grey",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/phoenix-headbig-0.webp",
                "name": "Phoenix"
            }
        ],
        "en_name": "Phoenix",
        "description": "Original X-Man Jean Grey boasted immense psychic power even before becoming host to the unbridled Phoenix Force, embodiment of life and psionic energy across the universe. Now aligned with this ancient cosmic power, Jean and the Phoenix traverse space together, burning bright as both a spark of creation and inferno of destruction!",
        "slug": "phoenix",
        "team": [
            "Mutants",
            "X_men",
            "Villains"
        ],
        "difficulty": "3",
        "attack_type": "Hitscan Heroes",
        "role": "DUELIST",
        "image_square": "characters\/phoenix-square.webp",
        "image_transverse": "characters\/phoenix-transverse.webp",
        "icon": "characters\/phoenix-headbig.webp",
        "image": "characters\/phoenix-portrait.webp",
        "logo_small": "characters\/phoenix-logo.webp",
        "logo": "characters\/phoenix-logo-small.webp",
        "skins": [
            "1054001",
            "1054300",
            "1054100",
            "1054101",
            "1054500"
        ],
        "abilities": [
            {
                "id": 105411,
                "icon": "abilities\/1054\/105411.webp",
                "name": "Cosmic Flames",
                "type": "Weapon",
                "isCollab": false,
                "description": "Launch a fiery projectile forward, applying 1 <Orange>Spark<\/> to enemies hit. Critical hits apply 2 <Orange>Sparks<\/>. At 3 <Orange>Sparks<\/> Phoenix triggers a fiery explosion that applies 1 <Orange>Spark<\/> to enemies around and <Buff>Healing Over Time<\/> to self. <Orange>Sparks<\/> from explosions will not stack within a brief period.",
                "transformation_id": 0
            },
            {
                "id": 105441,
                "icon": "abilities\/1054\/105441.webp",
                "name": "Psionic Detonation",
                "type": "Normal",
                "isCollab": false,
                "description": "Mark a targeted area with psionic energy, followed by a series of fiery explosions. The first blast <Debuff>Stuns<\/> enemies, while the subsequent two explosions inflict <Debuff>Slow<\/>. Applies 1 <Orange>Spark<\/> to enemies hit.",
                "transformation_id": 0
            },
            {
                "id": 105451,
                "icon": "abilities\/1054\/105451.webp",
                "name": "Dark Ascent",
                "type": "Normal",
                "isCollab": false,
                "description": "Merge with the Phoenix, entering a state of free flight. Gain a <Buff>Movement Boost<\/>.",
                "transformation_id": 0
            },
            {
                "id": 105461,
                "icon": "abilities\/1054\/105461.webp",
                "name": "Telepathic Illusion",
                "type": "Normal",
                "isCollab": false,
                "description": "Leave behind an illusion and instantly teleport in the desired direction, followed by detonating the illusion. Enemies hit are applied with 1 <Orange>Spark<\/>.",
                "transformation_id": 0
            },
            {
                "id": 105471,
                "icon": "abilities\/1054\/105471.webp",
                "name": "Endsong Inferno",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Soar into the sky with the Phoenix and crash down onto a selected area, dealing devastating damage to enemies while creating a shockwave that destroys enemy Summons, Shields, and any <Buff>Bonus Health<\/>. Enemies hit are applied with 1 <Orange>Spark<\/>.",
                "transformation_id": 0
            },
            {
                "id": 105481,
                "icon": "abilities\/1054\/105481.webp",
                "name": "Mind's Grace",
                "type": "Passive",
                "isCollab": true,
                "description": "Jean Grey imbues Wolverine with the awe-inspiring Phoenix Force. With this power, Wolverine's <Orange>Feral Leap<\/> transforms into <Orange>Phoenix Warrior<\/>. While active, he is enveloped in Phoenix flames that continuously scorch nearby enemies, dealing Percentage Damage. In this state, Wolverine's abilities gain <Buff>Lifesteal<\/> when inflicting damage.",
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1756425600",
                "rank": "35.00",
                "mover_shaker": "36.00",
                "rank_calc": "3.72",
                "mover_shaker_calc": "-1.50",
                "ZScore": "0.12",
                "winrate": "46.35",
                "pickrate": "12.47",
                "banrate": "1.77",
                "usage_trend": "Downward",
                "winrate_prev": "46.82",
                "pickrate_prev": "13.23",
                "banrate_prev": "1.27",
                "winrate_change": "-1.00",
                "pickrate_change": "-6.00",
                "banrate_change": "39.00"
            },
            {
                "date": "1755216000",
                "rank": "33.00",
                "mover_shaker": "12.00",
                "rank_calc": "3.78",
                "mover_shaker_calc": "0.46",
                "ZScore": "0.21",
                "winrate": "46.82",
                "pickrate": "13.23",
                "banrate": "1.27",
                "usage_trend": "Downward",
                "winrate_prev": "46.72",
                "pickrate_prev": "16.23",
                "banrate_prev": "1.72",
                "winrate_change": "0.00",
                "pickrate_change": "-18.00",
                "banrate_change": "-26.00"
            }
        ]
    },
    {
        "id": "1055",
        "name": "Daredevil",
        "real_name": "Matt Murdock",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/daredevil-headbig-0.webp",
                "name": "Daredevil",
                "health": "300",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Daredevil",
        "description": "A tragic accident transformed Matt Murdock, blinding him, but awakening his incredible Radar Sense. When darkness falls, Daredevil wields his billy clubs in place of a gavel, doling out justice and purging the world of evil!",
        "slug": "daredevil",
        "team": [
            "Marvelknights"
        ],
        "difficulty": "3",
        "attack_type": "Melee Heroes",
        "role": "DUELIST",
        "image_square": "characters\/daredevil-square.webp",
        "image_transverse": "characters\/daredevil-transverse.webp",
        "icon": "characters\/daredevil-headbig.webp",
        "image": "characters\/daredevil-portrait.webp",
        "logo_small": "characters\/daredevil-logo.webp",
        "logo": "characters\/daredevil-logo-small.webp",
        "skins": [
            "1055001",
            "1055500",
            "1055101",
            "1055102",
            "1055100"
        ],
        "abilities": [
            {
                "id": 105501,
                "icon": "abilities\/1055\/105501.webp",
                "name": "Radar Sense",
                "type": "Normal",
                "isCollab": false,
                "description": "Detect enemy movements within a set radius.",
                "additional_fields": {
                    "Key": "Passive",
                    "Maximum Detection Distance": "50m"
                },
                "transformation_id": 0
            },
            {
                "id": 105502,
                "icon": "abilities\/1055\/105502.webp",
                "name": "Sonic Pursuit",
                "type": "Normal",
                "isCollab": false,
                "description": "Locks onto a target, gaining increased <Buff>Speed<\/>; and <Buff>Damage Reduction<\/> when attacked. While in range, dash to the target,<Debuff>Blinding<\/> them and restore <Orange>Fury<\/>.",
                "additional_fields": {
                    "Key": "F",
                    "Dash Damage": "20",
                    "Select Range": "40m",
                    "Dash Cooldown": "15s",
                    "Max Dash Speed": "100m\/s",
                    "Movement Boost": "2.1m\/s. Falloff begins at 10m away from the target, decreasing to 0.9m\/s at 40m from the target",
                    "Special Effect": "If Daredevil defeats the target, refresh the cooldown. Gain 60 Fury after the dash",
                    "Dash Damage Range": "1m spherical radius spell field",
                    "Dash Select Range": "20m",
                    "Self Damage Reduction": "20%"
                },
                "transformation_id": 0
            },
            {
                "id": 105504,
                "icon": "abilities\/1055\/105504.webp",
                "name": "Blind Ascent",
                "type": "Normal",
                "isCollab": false,
                "description": "Cling to walls and spring off them to reposition.",
                "additional_fields": {
                    "Key": "Space",
                    "Wall-Crawling Speed": "10 m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105521,
                "icon": "abilities\/1055\/105521.webp",
                "name": "Justice Jab",
                "type": "Normal",
                "isCollab": false,
                "description": "Swing Billy Clubs forward. Gain <Orange>Fury<\/> on hit.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "35",
                    "Casting": "Melee",
                    "Special Effect": "Gain 15 Fury on hit",
                    "Maximum Distance": "4.5m"
                },
                "transformation_id": 0
            },
            {
                "id": 105531,
                "icon": "abilities\/1055\/105531.webp",
                "name": "Objection!",
                "type": "Normal",
                "isCollab": false,
                "description": "Whirl billy clubs in a tight guard to block frontal damage and reflect <Orange>projectiles<\/>, becoming immune to all incoming harm during this stance and gain <Orange>Fury<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Cooldown": "12s",
                    "Duration": "1.5s",
                    "Special Effect": "Block frontal damage and reflect projectiles, becoming immune to all incoming harm during this stance. Gain 60 Fury when successfully blocking an attack."
                },
                "transformation_id": 0
            },
            {
                "id": 105541,
                "icon": "abilities\/1055\/105541.webp",
                "name": "Devil's Latch",
                "type": "Normal",
                "isCollab": false,
                "description": "Fire a grappling line that reels Daredevil and his target toward each other. On completion, gain <Orange>Fury<\/> and temporarily enables <Orange>Righteous Cross<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Cooldown": "12",
                    "Special Effect": "Enable Righteous Cross within 5 seconds after using this ability. Gain 60 Fury",
                    "Maximum Distance": "25m",
                    "Projectile Speed": "180m\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105551,
                "icon": "abilities\/1055\/105551.webp",
                "name": "Infernal Fury",
                "type": "Passive",
                "isCollab": false,
                "description": "Consume <Orange>Fury<\/> to unleash either <Orange>Devil's Chain<\/> or <Orange>Devil's Throw<\/>. <Orange>Devil's Chain<\/> converts damage dealt into Bonus Health; <Orange>Devil's Throw<\/> <Debuff>Slows<\/> hit targets. Both temporarily enable <Orange>Righteous Cross<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "40. Cause 80 damage when the target caught in the high damage range",
                    "Slow Rate": "20%",
                    "DEVIL'S CHAIN": " ",
                    "DEVIL'S THROW": " ",
                    "Special Effect": "Devil's Throw slows enemies on hit",
                    "Bonus Max Health": "125",
                    "Projectile Speed": "150m\/s",
                    "Projectile Damage": "32.5",
                    "Spell Field Range": "Box shaped spell field. Length: 8m; Width: 4m; Height: 4m",
                    "Bonus Health Gained": "50",
                    "Bonus Health Falloff": "Falloff begins at 5s and decreases by 30\/s",
                    "Max Number of Ricochets": "4. Up to 2 ricochets if there are no targets",
                    "Fury Required for Activation": "60",
                    "High Damage Spell Field Range": "2m spherical radius spell field at the end",
                    "Damage\/Bonus Health Conversion": "0.7"
                },
                "transformation_id": 0
            },
            {
                "id": 105561,
                "icon": "abilities\/1055\/105561.webp",
                "name": "Let The Devil Out",
                "type": "Normal",
                "isCollab": false,
                "description": "Embrace the Beast within. Enemies in Daredevil's line of sight take damage and suffer a ramping <Debuff>Blind<\/> effect. Continually gain <Orange>Fury<\/> while active.",
                "additional_fields": {
                    "Key": "Q",
                    "Damage": "50\/s. Cause 85 damage per second when reaching the max damage",
                    "Energy Cost": "3400",
                    "Blind Effect": "Visual range 35m, decreasing to 10m when the Blind effect reaches its maximum",
                    "Maximum Distance": "15m",
                    "Fury Recovery Speed": "30\/s",
                    "Spell Field Duration": "8s",
                    "Time Required to Reach the Maximum Blind Range and Damage": "3s"
                },
                "transformation_id": 0
            },
            {
                "id": 105542,
                "icon": "abilities\/1055\/105542.webp",
                "name": "Righteous Cross",
                "type": "Weapon",
                "isCollab": false,
                "description": "Cross Billy Clubs and surge forward. Gain <Orange>Fury<\/> on hit.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Special Effect": "Gain 15 Fury on hit",
                    "Spell Field Damage": "50",
                    "Maximum Dash Distance": "6m",
                    "Spell Field Maximum Distance": "6m"
                },
                "transformation_id": 0
            },
            {
                "id": 105591,
                "icon": "abilities\/1055\/105591.webp",
                "name": "Blind Verdict",
                "type": "Normal",
                "isCollab": true,
                "description": "Daredevil shares the location of his <Orange>Sonic Pursuit<\/> target with The Punisher. At the same time, The Punisher can launch a devil-infused shock grenade to damage and <Debuff>Blind<\/> enemies.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "25 bonus Health. 5% damage boost"
                },
                "transformation_id": 0
            }
        ]
    },
    {
        "id": "1056",
        "name": "Angela",
        "real_name": "Angela Odinsdottir",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/angela-headbig-0.webp",
                "name": "Angela",
                "health": "450",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Angela",
        "description": "As the Hand of Heven, the warrior called Angela embodies unwavering courage and determination. Able to manipulate Ichors into various weapons and unfurl her wings to soar across the battlefield, she is ready to deliver divine judgment upon her foes!",
        "slug": "angela",
        "team": [
            "Godsofasgard"
        ],
        "difficulty": "4",
        "attack_type": "Melee Heroes",
        "role": "VANGUARD",
        "image_square": "characters\/angela-square.webp",
        "image_transverse": "characters\/angela-transverse.webp",
        "icon": "characters\/angela-headbig.webp",
        "image": "characters\/angela-portrait.webp",
        "logo_small": "characters\/angela-logo.webp",
        "logo": "characters\/angela-logo-small.webp",
        "skins": [
            "1056001",
            "1056500",
            "1056100",
            "1056101"
        ],
        "abilities": [
            {
                "id": 105661,
                "icon": "abilities\/1056\/105661.webp",
                "name": "Heven's Retribution",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Wrap your spear in ribbons and hurl it with force. Upon impact, the ribbons bind nearby enemies. Angela can leap to the spear's location, damaging surrounding enemies and creating a <Orange>Divine Judgement Zone<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Slow Rate": "80%",
                    "Energy Cost": "3100",
                    "Special Effect": "Mobility abilities of enemies bound by the ribbons will be disabled. Enemies within a certain distance around the spear will be slowed.",
                    "SUMMONS' HEALTH": "600",
                    "Projectile Speed": "60 m\/s",
                    "Hit Ground Damage": "100",
                    "Projectile Damage": "30",
                    "Spell Field Range": "8m spherical radius",
                    "Spell Field Damage": "10",
                    "HIt Ground Spell Field Range": "8m spherical radius"
                },
                "transformation_id": 0
            },
            {
                "id": 105611,
                "icon": "abilities\/1056\/105611.webp",
                "name": "Spear Of Ichors",
                "type": "Weapon",
                "isCollab": false,
                "description": "Lunge forward with your spear, dealing damage that increases with <Orange>Attack Charge<\/>. At full charge, Spear of Ichor can deal more damage and <Debuff>launch up<\/> enemies.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "45",
                    "Casting": "Melee",
                    "Special Effect": "At full charge, Spear of Ichor can launch up enemies and cause 15 extra damage.",
                    "Attack Interval": "0.96s per hit",
                    "Maximum Distance": "7m",
                    "Charge-Damage Conversion Ratio": "45%"
                },
                "transformation_id": 0
            },
            {
                "id": 105612,
                "icon": "abilities\/1056\/105612.webp",
                "name": "Axes Of Ichors",
                "type": "Weapon",
                "isCollab": false,
                "description": "Alternate powerful strikes forward with twin axes, dealing increased damage as <Orange>Attack Charge<\/> grows. The fourth strike propels you forward in a swift dash. Each time an enemy is struck, Angela and her allies gain <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "First three strikes: 30; the forth strike: 50.",
                    "Casting": "Melee",
                    "Special Effect": "The fourth strike propels you forward in a swift dash.",
                    "Attack Interval": "First three strikes: 0.4s per hit; the forth strike: 0.6s per hit.",
                    "Maximum Distance": "4m",
                    "Charge-Damage Conversion Ratio": "45%"
                },
                "transformation_id": 0
            },
            {
                "id": 105601,
                "icon": "abilities\/1056\/105601.webp",
                "name": "Seraphic Soar",
                "type": "Passive",
                "isCollab": false,
                "description": "Glide freely through the air. Continuous flight builds <Orange>Attack Charge<\/>.",
                "additional_fields": {
                    "Key": "PASSIVE",
                    "Glide Speed": "10m\/s",
                    "Glide Activation Condition": "Maintain the forward speed faster than 5m\/s for 1s",
                    "Time Required to Enter Glide": "0.1s",
                    "Passive Energy Gained During Glide": "22.2\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105631,
                "icon": "abilities\/1056\/105631.webp",
                "name": "Shielded Stance",
                "type": "Normal",
                "isCollab": false,
                "description": "Transform Ichors into a shield, gaining <Orange>Attack Charge<\/> when absorbing damage.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Cooldown": "1.5s",
                    "Recovery Speed": "50\/s",
                    "Maximum Shield Value": "350",
                    "Cooldown After Destroyed": "4s",
                    "Delayed Recovery After Release": "2s",
                    "Damage Resisted-Charge Conversion Ratio": "25%"
                },
                "transformation_id": 0
            },
            {
                "id": 105641,
                "icon": "abilities\/1056\/105641.webp",
                "name": "Assassin's Charge",
                "type": "Normal",
                "isCollab": false,
                "description": "Enter an <Buff>accelerated<\/> dash state. Enemies struck head-on are carried through the air for a short distance.",
                "additional_fields": {
                    "Key": "Shift",
                    "Cooldown": "3s",
                    "Energy Cost": "25\/s; 75\/s when piercing an enemy",
                    "Recover Delay": "2",
                    "Maximum Energy": "100",
                    "Special Effect": "Every enemy pierced grants Angela with a 50\/s passive energy recovery.",
                    "Piercing Damage": "30",
                    "Dash State Speed": "16 m\/s",
                    "One-time Energy Cost": "20",
                    "Energy Recovery Speed": "10\/s",
                    "Maximum Enemies Could Be Carried": "2",
                    "Passive Energy Gained During the Dash": "25\/s",
                    "Energy Required to Activate the Ability": "30"
                },
                "transformation_id": 0
            },
            {
                "id": 105651,
                "icon": "abilities\/1056\/105651.webp",
                "name": "Divine Judgement",
                "type": "Normal",
                "isCollab": false,
                "description": "Dive downward, switch to twin axes and infuse the ground with Ichors to create a <Orange>Divine Judgement Zone<\/> upon impact. Within the zone, gain enhanced <Buff>Speed<\/> and attacks grant <Buff>Bonus Health<\/> to self and nearby allies.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "Hit damage: 30; damage over time: 12.5\/s",
                    "Cooldown": "12s",
                    "Bonus Health": "Within the Divine Judgement zone, Angela’s each Axes of Ichors hit grants 40 Bonus Health to herself and 20 Bonus Health to allies within the area.",
                    "Bonus Max Health": "200",
                    "Spell Field Duration": "6s",
                    "Movement Boost (Self)": "35%",
                    "Damage Over Time Spell Field Range": "A cylindrical spell field with a radius of 8m and a height of 2m."
                },
                "transformation_id": 0
            },
            {
                "id": 105652,
                "icon": "abilities\/1056\/105652.webp",
                "name": "Wingblade Ascent",
                "type": "Normal",
                "isCollab": false,
                "description": "Take to the skies, switching back to Spear of Ichors.",
                "additional_fields": {
                    "Key": "E",
                    "Ascent Height": "8m",
                    "Ascent Duration": "0.35s",
                    "Ascent Elevation Angle": "60°"
                },
                "transformation_id": 0
            },
            {
                "id": 105671,
                "icon": "abilities\/1056\/105671.webp",
                "name": "Celestial Command",
                "type": "Passive",
                "isCollab": true,
                "description": "Angela shares fragments of her Ichors with Thor, empowering him to hurl a <Orange>Thunder Spear<\/> that restores <Orange>Thorforce<\/> for each enemy struck. Afterward, Thor can leap to the spear's explosion point, dealing a second wave of damage to all enemies within range.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+100 Max Health"
                },
                "transformation_id": 0
            }
        ]
    }
]