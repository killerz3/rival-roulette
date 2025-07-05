export const heroData = [
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
            "1011502"
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which, will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
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
                    "Special Effect": "When the caster\u0027s shield takes damage, 100% of the damage is converted into gamma energy. When an ally\u0027s shield takes damage, 10% of the damage is converted into gamma energy",
                    "Ally\u0027s Shield Value": "100",
                    "Max Shield Duration": "2.5s",
                    "Caster\u0027s Shield Value": "200"
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which, will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which, will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
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
                "date": "1751500800",
                "rank": "16.00",
                "mover_shaker": "14.00",
                "rank_calc": "4.00",
                "mover_shaker_calc": "0.02",
                "ZScore": "0.27",
                "winrate": "51.12",
                "pickrate": "12.34",
                "banrate": "12.87",
                "usage_trend": "Upward",
                "winrate_prev": "51.12",
                "pickrate_prev": "11.79",
                "banrate_prev": "12.55",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "3.00"
            },
            {
                "date": "1750896000",
                "rank": "17.00",
                "mover_shaker": "8.00",
                "rank_calc": "4.00",
                "mover_shaker_calc": "0.21",
                "ZScore": "0.72",
                "winrate": "51.12",
                "pickrate": "11.79",
                "banrate": "12.55",
                "usage_trend": "Upward",
                "winrate_prev": "51.08",
                "pickrate_prev": "11.24",
                "banrate_prev": "12.97",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "-3.00"
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
        "description": "Expertly wielding a full arsenal of futuristic weapons, Frank Castle is a formidable one-man army. With a steadfast resolve to deliver justice to his enemies, The Punisher won\u0027t cease in his mission until every last round is fired!",
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
            "1014300"
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
                    "Energy Cost": "3400",
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
                "description": "Throw a smoke grenade forward to <Debuff>Block Enemies\u0027 Vision<\/> and leap backward.",
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
                "name": "Warrior\u0027s Gaze",
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
                    "Damage": "12 damage per round",
                    "Casting": "Rapid-fire projectiles that create a spell field upon impact",
                    "Cooldown": "20s",
                    "Fire Rate": "12.5 rounds per second",
                    "Turret Health": "600",
                    "Explosion Range": "3m spherical radius",
                    "Explosion Damage": "12 damage per round",
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
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device\u0027s range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 101402,
                "icon": "abilities\/1014\/101402.webp",
                "name": "Cutting-edge Tech",
                "type": "Passive",
                "isCollab": true,
                "description": "The Punisher upgrades Black Widow\u0027s arsenal, adding a Pulse Mode to her Red Room Rifle. While the ability is active, using <Orange>Straight Shooter<\/> fires a pulse beam that deals piercing damage.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+25 Max Health, +5% Damage Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "29.00",
                "mover_shaker": "20.00",
                "rank_calc": "3.80",
                "mover_shaker_calc": "-0.19",
                "ZScore": "-0.07",
                "winrate": "47.60",
                "pickrate": "19.73",
                "banrate": "5.57",
                "usage_trend": "Upward",
                "winrate_prev": "47.67",
                "pickrate_prev": "18.55",
                "banrate_prev": "5.08",
                "winrate_change": "0.00",
                "pickrate_change": "6.00",
                "banrate_change": "10.00"
            },
            {
                "date": "1750896000",
                "rank": "28.00",
                "mover_shaker": "34.00",
                "rank_calc": "3.82",
                "mover_shaker_calc": "-0.85",
                "ZScore": "-0.74",
                "winrate": "47.67",
                "pickrate": "18.55",
                "banrate": "5.08",
                "usage_trend": "Downward",
                "winrate_prev": "47.79",
                "pickrate_prev": "18.63",
                "banrate_prev": "4.02",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "26.00"
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
            "1015502"
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
                    "Energy Cost": "3100",
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
                "description": "When Storm unleashes her <Orange>Omega Hurricane<\/>, if Jeff the Land Shark has <Orange>It\u0027s Jeff!<\/> ready, he can channel her power to conjure a ferocious <Orange>Jeff-nado<\/>! Additionally, a <Orange>Jeff-nado<\/> will form if Jeff encounters Storm\u0027s <Orange>Omega Hurricane<\/> after devouring enemies with <Orange>It\u0027s Jeff!<\/>. Enemies will be drawn into the swirling chaos after enduring sustained damage from the <Orange>Jeff-nado<\/> for some time.",
                "additional_fields": {
                    "Key": "PASSIVE",
                    "Swallow Range": "10m spherical radius spell field centered around Storm",
                    "Swallow Damage": "80",
                    "Attack Interval": "2 hits per second",
                    "Swallow Time Required": "1.2s",
                    "Warning before Swallow": "0.1",
                    "Hurricane Duration Expanded": "4s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "26.00",
                "mover_shaker": "3.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "0.53",
                "ZScore": "1.12",
                "winrate": "51.78",
                "pickrate": "6.43",
                "banrate": "33.02",
                "usage_trend": "Downward",
                "winrate_prev": "51.59",
                "pickrate_prev": "6.70",
                "banrate_prev": "40.25",
                "winrate_change": "0.00",
                "pickrate_change": "-4.00",
                "banrate_change": "-18.00"
            },
            {
                "date": "1750896000",
                "rank": "30.00",
                "mover_shaker": "21.00",
                "rank_calc": "3.79",
                "mover_shaker_calc": "-0.19",
                "ZScore": "0.17",
                "winrate": "51.59",
                "pickrate": "6.70",
                "banrate": "40.25",
                "usage_trend": "Downward",
                "winrate_prev": "52.45",
                "pickrate_prev": "7.25",
                "banrate_prev": "44.54",
                "winrate_change": "-2.00",
                "pickrate_change": "-8.00",
                "banrate_change": "-10.00"
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
            "1016300"
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
                    "Damage": "The projectile deals no damage, while the spell field inflicts 30 damage per cast",
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
                "description": "Project an <Orange>Illusion<\/> that can cast some of Loki\u0027s abilities.",
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
                    "Duration": "15s",
                    "Energy Cost": "4000",
                    "Special Effect": "After transforming, Loki\u0027s Ultimate ability will be fully charged. Casting a transformation-type Ultimate ability will extend the duration of God of Mischief until the transformation ability ends"
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
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect {101600}{000003}{103900} in the respawn phase, or grant them <Buff>Bonus Health<\/> if they are still alive.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Health": "50",
                    "Respawn Delay": "1.5s",
                    "Special Effect": "When Hela defeats an enemy, if Loki is still alive, he will receive Bonus Health. If Loki is defeated, he will respawn on the spot after a short delay"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "6.00",
                "mover_shaker": "24.00",
                "rank_calc": "4.19",
                "mover_shaker_calc": "-0.29",
                "ZScore": "-0.24",
                "winrate": "50.28",
                "pickrate": "18.97",
                "banrate": "2.40",
                "usage_trend": "Upward",
                "winrate_prev": "50.11",
                "pickrate_prev": "18.05",
                "banrate_prev": "2.08",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "15.00"
            },
            {
                "date": "1750896000",
                "rank": "7.00",
                "mover_shaker": "36.00",
                "rank_calc": "4.14",
                "mover_shaker_calc": "-1.27",
                "ZScore": "-1.32",
                "winrate": "50.11",
                "pickrate": "18.05",
                "banrate": "2.08",
                "usage_trend": "Upward",
                "winrate_prev": "49.54",
                "pickrate_prev": "16.50",
                "banrate_prev": "1.33",
                "winrate_change": "1.00",
                "pickrate_change": "9.00",
                "banrate_change": "56.00"
            }
        ]
    },
    {
        "id": "1017",
        "name": "Human Torch",
        "real_name": "Jonathan \u0022johnny\u0022 Storm",
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
        "description": "The Fantastic Four\u0027s resident heartthrob, Johnny Storm, adds an intense flare to every battle he fights. Shrouded in roaring flames, the Human Torch always manages to look cool while turning up the heat!",
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
            "1017101"
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
                    "Shot Damage": "6 per round",
                    "Charge Speed": "0.33s per use",
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
                    "Movement Boost": "50%",
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
                    "Flame Field Continuous Damage": "25\/s",
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
                    "Pyro-Prison Continuous Damage": "50\/s"
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
                    "Activation Wave Damage": "70",
                    "Supernova Damage Reduction": "-30%",
                    "Activation Shock Wave Range": "20m spherical radius",
                    "Flame Tornado Unleash Speed": "0.7s per use",
                    "Flame Tornado Continuous Damage": "100\/s"
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
                "additional_fields": {
                    "Key": "X",
                    "Team-Up Target": "Storm",
                    "Strengthened Flame Tornado Range": "5m spherical radius; 10m high capsule-shaped spell field.",
                    "Strengthened Flame Tornado Continuous Damage": "110\/s"
                },
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "37.00",
                "mover_shaker": "36.00",
                "rank_calc": "3.61",
                "mover_shaker_calc": "-0.74",
                "ZScore": "-0.98",
                "winrate": "45.26",
                "pickrate": "3.83",
                "banrate": "0.62",
                "usage_trend": "Upward",
                "winrate_prev": "45.04",
                "pickrate_prev": "3.21",
                "banrate_prev": "0.44",
                "winrate_change": "0.00",
                "pickrate_change": "19.00",
                "banrate_change": "41.00"
            },
            {
                "date": "1750896000",
                "rank": "37.00",
                "mover_shaker": "22.00",
                "rank_calc": "3.55",
                "mover_shaker_calc": "-0.23",
                "ZScore": "0.11",
                "winrate": "45.04",
                "pickrate": "3.21",
                "banrate": "0.44",
                "usage_trend": "Upward",
                "winrate_prev": "44.85",
                "pickrate_prev": "2.73",
                "banrate_prev": "0.36",
                "winrate_change": "0.00",
                "pickrate_change": "18.00",
                "banrate_change": "22.00"
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
                "health": "600",
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
            "1018501"
        ],
        "abilities": [
            {
                "id": 101871,
                "icon": "abilities\/1018\/101871.webp",
                "name": "Eye Of Agamotto",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Separate nearby enemies\u0027 <Orange>Souls<\/> from their bodies. Damage dealt to these <Orange>Souls<\/> is transferred to their physical bodies.",
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
                    "Ammo": "8 (1 dagger per release)",
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
                    "Cooldown": "8s"
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
                    "Cooldown": "15s",
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which, will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
                "transformation_id": 0
            },
            {
                "id": 101892,
                "icon": "abilities\/1018\/101892.webp",
                "name": "Enchanted Enhancement",
                "type": "Normal",
                "isCollab": true,
                "description": "Doctor Strange shares his arcane mastery, replacing Scarlet Witch\u0027s <Orange>Chthonian Burst<\/> with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Doctor Strange gain 100 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "17.00",
                "mover_shaker": "8.00",
                "rank_calc": "3.99",
                "mover_shaker_calc": "0.18",
                "ZScore": "0.53",
                "winrate": "49.41",
                "pickrate": "20.44",
                "banrate": "0.54",
                "usage_trend": "Upward",
                "winrate_prev": "49.41",
                "pickrate_prev": "20.26",
                "banrate_prev": "0.57",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "-5.00"
            },
            {
                "date": "1750896000",
                "rank": "19.00",
                "mover_shaker": "12.00",
                "rank_calc": "3.97",
                "mover_shaker_calc": "0.11",
                "ZScore": "0.58",
                "winrate": "49.41",
                "pickrate": "20.26",
                "banrate": "0.57",
                "usage_trend": "Upward",
                "winrate_prev": "49.29",
                "pickrate_prev": "20.14",
                "banrate_prev": "0.58",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "-2.00"
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
            "1020500"
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
                    "Energy Cost": "3700",
                    "Healing Amount": "150",
                    "Movement Boost": "3m\/s",
                    "Excess Healing\/Max Health Conversion": "100",
                    "Caster \u0026 Ally One-time Healing Amount": "200",
                    "Excess Healing\/Bonus Health Conversion": "70%"
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
                    "Ammo": "20",
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
                    "Healing Over Time Amount": "20\/s"
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
                "name": "Nature\u0027s Favor",
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
                "name": "Nature\u0027s Soul",
                "type": "Normal",
                "isCollab": true,
                "description": "Adam Warlock enhances the rebirth power of {104300}{000003}{102000}, granting them the power of cocooned revival.",
                "additional_fields": {
                    "Key": "Passive",
                    "Cooldown": "120s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "5.00",
                "mover_shaker": "33.00",
                "rank_calc": "4.22",
                "mover_shaker_calc": "-0.42",
                "ZScore": "-0.44",
                "winrate": "52.22",
                "pickrate": "7.67",
                "banrate": "0.06",
                "usage_trend": "Upward",
                "winrate_prev": "52.01",
                "pickrate_prev": "7.30",
                "banrate_prev": "0.05",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "20.00"
            },
            {
                "date": "1750896000",
                "rank": "5.00",
                "mover_shaker": "7.00",
                "rank_calc": "4.25",
                "mover_shaker_calc": "0.26",
                "ZScore": "0.78",
                "winrate": "52.01",
                "pickrate": "7.30",
                "banrate": "0.05",
                "usage_trend": "Upward",
                "winrate_prev": "51.57",
                "pickrate_prev": "7.00",
                "banrate_prev": "0.05",
                "winrate_change": "1.00",
                "pickrate_change": "4.00",
                "banrate_change": "0.00"
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
        "description": "Despite his lack of superpowers, Hawkeye\u0027s unparalleled skills as a marksman have earned him a spot alongside earth\u0027s mightiest heroes. With a cool head and steady hand, Clint Barton never misses a target… so enemies best stay out of his sights! ",
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
            "1021502"
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
                "name": "Archer\u0027s Focus",
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
                "name": "Hunter\u0027s Sight",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Capture <Orange>Afterimages<\/> of enemies in his view. Damage dealt to an <Orange>Afterimage<\/> is transferred to the corresponding enemy.",
                "additional_fields": {
                    "Key": "Q",
                    "Duration": "10s",
                    "Energy Cost": "3100",
                    "Special Mechanic": "\n\t\t\t\t\t\tWhile Hunter\u0027s Sight is active, bow draw speed is increased\n\t\t\t\t\t\t",
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
                "description": "Hawkeye can share his Hunter\u0027s Sight with Black Widow, enabling her to catch sight of and damage afterimages of enemies.",
                "transformation_id": 0
            },
            {
                "id": 102193,
                "icon": "abilities\/1021\/102193.webp",
                "name": "Ice Arrow",
                "type": "Normal",
                "isCollab": true,
                "description": "With the blessing of Luna Snow, Hawkeye is imbued with the ice energy, allowing him to fire <Orange>Ice Arrows<\/> that pierce through enemies! If an <Orange>Ice Arrow<\/> travels beyond a certain distance, it <Debuff>Stuns<\/> any enemy it hits. If it strikes before reaching that distance, it instead <Debuff>Slows<\/> the target. The farther the <Orange>Ice Arrow<\/> flies, the greater its damage.",
                "additional_fields": {
                    "Key": "C",
                    "Range": "Length: 3m, Width: 3m, Height: 3m",
                    "Casting": "Straight-line projectile that is accompanied by a spell field",
                    "Cooldown": "20s",
                    "Slow Rate": "60%",
                    "Slow Duration": "1s",
                    "Stun Duration": "1.5s",
                    "Ability Damage": "Spell Field Damage: Start at 30, and increase with distance, reaching a maximum of 120 at 30m",
                    "Projectile Speed": "100 m\/s",
                    "Maximum Stun Range": "30m"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "38.00",
                "mover_shaker": "1.00",
                "rank_calc": "3.40",
                "mover_shaker_calc": "1.45",
                "ZScore": "2.63",
                "winrate": "43.34",
                "pickrate": "5.88",
                "banrate": "3.76",
                "usage_trend": "Downward",
                "winrate_prev": "43.21",
                "pickrate_prev": "6.94",
                "banrate_prev": "8.62",
                "winrate_change": "0.00",
                "pickrate_change": "-15.00",
                "banrate_change": "-56.00"
            },
            {
                "date": "1750896000",
                "rank": "39.00",
                "mover_shaker": "10.00",
                "rank_calc": "3.37",
                "mover_shaker_calc": "0.19",
                "ZScore": "0.69",
                "winrate": "43.21",
                "pickrate": "6.94",
                "banrate": "8.62",
                "usage_trend": "Downward",
                "winrate_prev": "44.51",
                "pickrate_prev": "9.81",
                "banrate_prev": "15.74",
                "winrate_change": "-3.00",
                "pickrate_change": "-29.00",
                "banrate_change": "-45.00"
            }
        ]
    },
    {
        "id": "1022",
        "name": "Captain America",
        "real_name": "Steven \u0022steve\u0022 Rogers",
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
        "description": "Enhanced by the Super-Soldier Serum, Steven \u0022Steve\u0022 Rogers uses his Vibranium shield and extensive combat training to confront any threat to justice. When Captain America rallies his troops, a wave of courage sweeps across the battlefield!",
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
            "1022500"
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
                "name": "Captain\u0027s Spirit",
                "type": "Normal",
                "isCollab": true,
                "description": "Inspired by Captain America\u0027s resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to damage nearby foes and grant <Buff>Bonus Health<\/> to allies within range. Captain America and Winter Soldier can interact with each other once both parties confirm. The duo then collides and unleashes a shockwave that damages and <Debuff>slows<\/> enemies.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "Captain America gain 100 Max Health and 5% damage boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "11.00",
                "mover_shaker": "15.00",
                "rank_calc": "4.08",
                "mover_shaker_calc": "-0.04",
                "ZScore": "0.17",
                "winrate": "51.74",
                "pickrate": "9.68",
                "banrate": "0.81",
                "usage_trend": "Downward",
                "winrate_prev": "51.64",
                "pickrate_prev": "9.71",
                "banrate_prev": "0.79",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "3.00"
            },
            {
                "date": "1750896000",
                "rank": "14.00",
                "mover_shaker": "27.00",
                "rank_calc": "4.06",
                "mover_shaker_calc": "-0.32",
                "ZScore": "-0.01",
                "winrate": "51.64",
                "pickrate": "9.71",
                "banrate": "0.79",
                "usage_trend": "Downward",
                "winrate_prev": "51.67",
                "pickrate_prev": "10.27",
                "banrate_prev": "0.74",
                "winrate_change": "0.00",
                "pickrate_change": "-5.00",
                "banrate_change": "7.00"
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
        "description": "Rocket may not look like a tech genius or an expert tactician, but anyone who\u0027s ever made his hit list has quickly regretted underestimating him. This savvy space soldier is equally eager to boost his teammates and to collect bounties on his foes.",
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
            "1023302"
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
                    "Cooldown": "45s. You can reclaim the beacon by pressing E. When reclaimed, the cooldown will be reduced based on the beacon\u0027s remaining health. If you reclaim a full-health beacon, the minimum cooldown will be 5s",
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
                    "Bonus Health": "100 \/s",
                    "Damage Boost": "25%",
                    "Special Effect": "\n\t\t\t\t\t\tDuring the ability\u0027s duration, linked allies will receive an additional 100 Bonus Health points per second, capping at 150. After breaking the link, this bonus starts to falloff after 1 second at a rate of 75 per\/s\n\t\t\t\t\t\t",
                    "Summons\u0027 Health": "800",
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
                "description": "{104700}{000003}{102300} can ride on Groot\u0027s shoulders, receiving <Buff>Damage Reduction<\/>.",
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
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device\u0027s range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 102344,
                "icon": "abilities\/1023\/102344.webp",
                "name": "Web Server",
                "type": "Normal",
                "isCollab": true,
                "description": "Rocket Raccoon upgrades his <Orange>B.R.B.<\/> by integrating the <Orange>Bionic Spider-Nest<\/> effect. Now, the beacon creates <Orange>Cyber-Webs<\/> when placed and periodically spawns <Orange>Arachno-Mines<\/> and <Orange>Spider-Drones<\/>. Peni Parker can additionally deploy an <Orange>Armored Spider-Nest<\/> that periodically drops <Orange>Armor Packs<\/> that grant <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "E",
                    "Cooldown": "45s",
                    "Team-Up Bonus": "5% Healing Bonus",
                    "Health of B.R.B.": "150",
                    "Arachno-Mine Damage": "100",
                    "Spider-Drone Damage": "40",
                    "Maximum Revive Distance": "50m",
                    "Arachno-Mine Explosion Range": "3m spherical radius spell field",
                    "Spider-Drone Explosion Range": "1m spherical radius spell field",
                    "Armor Pack Generate Frequency": "6s per pack",
                    "Maximum Arachno-Mine Quantity": "15",
                    "Arachno-Mine Generate Interval": "3s",
                    "Spider-Drone Generate Interval": "3s",
                    "Spider-Drone Generate Quantity Per Round": "1"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "1.00",
                "mover_shaker": "28.00",
                "rank_calc": "4.50",
                "mover_shaker_calc": "-0.33",
                "ZScore": "-0.30",
                "winrate": "54.45",
                "pickrate": "34.08",
                "banrate": "3.94",
                "usage_trend": "Downward",
                "winrate_prev": "54.50",
                "pickrate_prev": "34.31",
                "banrate_prev": "3.58",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "10.00"
            },
            {
                "date": "1750896000",
                "rank": "1.00",
                "mover_shaker": "35.00",
                "rank_calc": "4.51",
                "mover_shaker_calc": "-1.16",
                "ZScore": "-1.15",
                "winrate": "54.50",
                "pickrate": "34.31",
                "banrate": "3.58",
                "usage_trend": "Downward",
                "winrate_prev": "54.39",
                "pickrate_prev": "34.89",
                "banrate_prev": "2.58",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "39.00"
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
            "1024302"
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
                "description": "Transform into a Nastrond Crow to glide forth, press again to undo the transformation.",
                "additional_fields": {
                    "Key": "Shift",
                    "Casting": "Dash",
                    "Cooldown": "15s",
                    "Dash Speed": "15 m\/s",
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
                "name": "Hel\u0027s Descent",
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
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect {101600}{000003}{103900} in the respawn phase, or grant them <Buff>Bonus Health<\/> if they are still alive.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Damage Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "13.00",
                "mover_shaker": "5.00",
                "rank_calc": "4.05",
                "mover_shaker_calc": "0.46",
                "ZScore": "1.00",
                "winrate": "48.90",
                "pickrate": "13.60",
                "banrate": "4.81",
                "usage_trend": "Downward",
                "winrate_prev": "48.83",
                "pickrate_prev": "13.77",
                "banrate_prev": "5.67",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "-15.00"
            },
            {
                "date": "1750896000",
                "rank": "16.00",
                "mover_shaker": "2.00",
                "rank_calc": "4.01",
                "mover_shaker_calc": "0.52",
                "ZScore": "1.14",
                "winrate": "48.83",
                "pickrate": "13.77",
                "banrate": "5.67",
                "usage_trend": "Downward",
                "winrate_prev": "48.75",
                "pickrate_prev": "14.05",
                "banrate_prev": "6.88",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "-18.00"
            }
        ]
    },
    {
        "id": "1025",
        "name": "Cloak \u0026 Dagger",
        "real_name": "Tyrone Johnson \u0026 Tandy Bowen",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/cloak-dagger-headbig-0.webp",
                "name": "Cloak \u0026 Dagger"
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
        "en_name": "Cloak \u0026 Dagger",
        "description": "Tyrone Johnson and Tandy Bowen are nearly inseparable, like two sides of the same coin. Intertwined by forces of shadow and light, Cloak \u0026 Dagger fight as a united front, dealing havoc and healing allies across the arena.",
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
            "1025301"
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
                "name": "Shadow\u0027s Embrace",
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
                    "Energy Cost": "4000",
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
                "description": "Cloak \u0026 Dagger can inject light and dark energy into {103000}{000003}{104400} to create a Light \u0026 Dark Realm where {103000}{000003}{104400} can become <Buff>invisible<\/>. {104401}",
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
                "name": "Shadow\u0027s Embrace",
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
                    "Energy Cost": "4000",
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
                "description": "Cloak \u0026 Dagger can inject light and dark energy into {103000}{000003}{104400} to create a Light \u0026 Dark Realm where {103000}{000003}{104400} can become <Buff>invisible<\/>. {104401}",
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
                "name": "Light\u0027s Embrace",
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
                    "Energy Cost": "4000",
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
                "description": "Cloak \u0026 Dagger can inject light and dark energy into {103000}{000003}{104400} to create a Light \u0026 Dark Realm where {103000}{000003}{104400} can become <Buff>invisible<\/>. {104401}",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-up Bonus": "15% Healing Boost"
                },
                "transformation_id": 2
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "9.00",
                "mover_shaker": "11.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "0.06",
                "ZScore": "0.35",
                "winrate": "48.14",
                "pickrate": "46.08",
                "banrate": "1.00",
                "usage_trend": "Upward",
                "winrate_prev": "48.13",
                "pickrate_prev": "44.73",
                "banrate_prev": "1.00",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "0.00"
            },
            {
                "date": "1750896000",
                "rank": "10.00",
                "mover_shaker": "18.00",
                "rank_calc": "4.10",
                "mover_shaker_calc": "-0.08",
                "ZScore": "0.31",
                "winrate": "48.13",
                "pickrate": "44.73",
                "banrate": "1.00",
                "usage_trend": "Upward",
                "winrate_prev": "47.74",
                "pickrate_prev": "42.89",
                "banrate_prev": "0.90",
                "winrate_change": "1.00",
                "pickrate_change": "4.00",
                "banrate_change": "11.00"
            }
        ]
    },
    {
        "id": "1026",
        "name": "Black Panther",
        "real_name": "T\u0027challa",
        "transformations": [
            {
                "id": 0,
                "icon": "characters\/black-panther-headbig-0.webp",
                "name": "Black Panther",
                "health": "300",
                "movement_speed": "7m\/s"
            }
        ],
        "en_name": "Black Panther",
        "description": "T\u0027Challa, King of Wakanda, wields the perfect blend of the cutting-edge Vibranium technology and ancestral power drawn from the Panther God, Bast. The Black Panther bides his time until elegantly infiltrating enemy lines and commencing his hunt.",
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
            "1026501"
        ],
        "abilities": [
            {
                "id": 102601,
                "icon": "abilities\/1026\/102601.webp",
                "name": "Panther\u0027s Cunning",
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
                    "Cooldown": "8s",
                    "Bonus Health": "30",
                    "Average Speed": "50m\/s",
                    "Bonus Max Health": "75",
                    "Maximum Distance": "15m"
                },
                "transformation_id": 0
            },
            {
                "id": 102671,
                "icon": "abilities\/1026\/102671.webp",
                "name": "Bast\u0027s Descent",
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
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "30s",
                    "Rewind Time": "3s prior",
                    "Team-Up Target": "Magik",
                    "Bonus Health\/Damage Taken Conversion": "80%"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "10.00",
                "mover_shaker": "39.00",
                "rank_calc": "4.11",
                "mover_shaker_calc": "-2.51",
                "ZScore": "-3.89",
                "winrate": "50.85",
                "pickrate": "17.30",
                "banrate": "20.34",
                "usage_trend": "Upward",
                "winrate_prev": "51.10",
                "pickrate_prev": "17.09",
                "banrate_prev": "11.22",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "81.00"
            },
            {
                "date": "1750896000",
                "rank": "6.00",
                "mover_shaker": "39.00",
                "rank_calc": "4.17",
                "mover_shaker_calc": "-3.10",
                "ZScore": "-3.82",
                "winrate": "51.10",
                "pickrate": "17.09",
                "banrate": "11.22",
                "usage_trend": "Upward",
                "winrate_prev": "51.34",
                "pickrate_prev": "14.42",
                "banrate_prev": "5.28",
                "winrate_change": "0.00",
                "pickrate_change": "19.00",
                "banrate_change": "113.00"
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
        "description": "A flora colossus from Planet X, the alien known as Groot exhibits enhanced vitality and the ability to manipulate all forms of vegetation. As sturdy as a towering tree, Groot forges his own way, serving as the team\u0027s silent but reliable pathfinder.",
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
            "1027302"
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
                    "Maximum Distance": "20m",
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
                    "Range": "A cylindrical spell field with a 20m radius and a height of 40m",
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
                "description": "{104700}{000003}{102300} can ride on Groot\u0027s shoulders, receiving <Buff>Damage Reduction<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+150 Max Health"
                },
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "33.00",
                "mover_shaker": "4.00",
                "rank_calc": "3.73",
                "mover_shaker_calc": "0.50",
                "ZScore": "1.07",
                "winrate": "47.04",
                "pickrate": "7.86",
                "banrate": "6.31",
                "usage_trend": "Downward",
                "winrate_prev": "47.12",
                "pickrate_prev": "8.01",
                "banrate_prev": "7.79",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "-19.00"
            },
            {
                "date": "1750896000",
                "rank": "32.00",
                "mover_shaker": "5.00",
                "rank_calc": "3.75",
                "mover_shaker_calc": "0.38",
                "ZScore": "0.96",
                "winrate": "47.12",
                "pickrate": "8.01",
                "banrate": "7.79",
                "usage_trend": "Downward",
                "winrate_prev": "47.46",
                "pickrate_prev": "8.41",
                "banrate_prev": "9.83",
                "winrate_change": "-1.00",
                "pickrate_change": "-5.00",
                "banrate_change": "-21.00"
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
            "1028101"
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
                    "Bonus Health to Ultron": "75",
                    "Bonus Health Falloff Speed": "40\/s",
                    "Bonus Health Falloff Begins at": "3s",
                    "Bonus Health to allies near Ultron and the drones": "55"
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
                    "Accelerate Duration": "8s",
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
                    "Healing Amount to the Targeted ally": "45\/s",
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
                "description": "Summon Ultron Drones to fire Encephalo-Rays, damaging enemies or healing allies.",
                "additional_fields": {
                    "Key": "Q",
                    "Casting": "Straight-line projectile that generates a spell field upon impact.",
                    "Duration": "9s",
                    "Beam Damage": "8",
                    "Energy Cost": "3400",
                    "Special Effect": "Within the ultimate duration, Ultron grants an Unstoppable effect",
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
                "description": "Iron Man uses nanotechnology to upgrade Ultron\u0027s arsenal, enhancing his <Orange>Encephalo-Ray<\/> to <Orange>Nano Ray<\/>. During its active phase, Ultron fires an unstoppable Nano Ray straight ahead that pierces through all characters, delivering massive damage to enemies while simultaneously restoring health to allies.",
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
                "date": "1751500800",
                "rank": "4.00",
                "mover_shaker": "12.00",
                "rank_calc": "4.25",
                "mover_shaker_calc": "0.03",
                "ZScore": "0.29",
                "winrate": "52.43",
                "pickrate": "18.19",
                "banrate": "6.45",
                "usage_trend": "Downward",
                "winrate_prev": "52.37",
                "pickrate_prev": "21.54",
                "banrate_prev": "7.21",
                "winrate_change": "0.00",
                "pickrate_change": "-16.00",
                "banrate_change": "-11.00"
            },
            {
                "date": "1750896000",
                "rank": "4.00",
                "mover_shaker": "32.00",
                "rank_calc": "4.28",
                "mover_shaker_calc": "-0.84",
                "ZScore": "-0.72",
                "winrate": "52.37",
                "pickrate": "21.54",
                "banrate": "7.21",
                "usage_trend": "Downward",
                "winrate_prev": "53.18",
                "pickrate_prev": "28.06",
                "banrate_prev": "7.05",
                "winrate_change": "-2.00",
                "pickrate_change": "-23.00",
                "banrate_change": "2.00"
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
            "ps1029302"
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
                    "Damage": "65",
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
                "description": "Strike forward an air slash.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "45 - 90 (Maximum damage is achieved after 1.8s of charging)",
                    "Casting": "Charged projectile that travels in a straight trajectory",
                    "Cooldown": "6s",
                    "Projectile Speed": "80m\/s",
                    "Maximum Charge Time": "2s"
                },
                "transformation_id": 0
            },
            {
                "id": 102931,
                "icon": "abilities\/1029\/102931.webp",
                "name": "Limbo\u0027s Might",
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
                    "Special Effect 2": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon\u0027s Rage",
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
                    "Damage": "45",
                    "Casting": "A cylindrical spell field in melee range"
                },
                "transformation_id": 0
            },
            {
                "id": 102961,
                "icon": "abilities\/1029\/102961.webp",
                "name": "Demon\u0027s Rage",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a Limbo demon that attacks enemies after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Length: 6.5m, Width: 3m, Height: 3m",
                    "Damage": "18 damage per hit",
                    "Casting": "A cuboid spell field in melee range",
                    "Attack Speed": "0.25s per hit",
                    "Summons\u0027 Health": "100",
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
                    "Special Effect": "When in the Darkchild state, all of Magik\u0027s abilities are enhanced"
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
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Damage Boost"
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
                    "Damage": "65",
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
                "description": "Strike forward an air slash.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "45 - 90 (Maximum damage is achieved after 1.8s of charging)",
                    "Casting": "Charged projectile that travels in a straight trajectory",
                    "Cooldown": "6s",
                    "Projectile Speed": "80m\/s",
                    "Maximum Charge Time": "2s"
                },
                "transformation_id": 1
            },
            {
                "id": 102931,
                "icon": "abilities\/1029\/102931.webp",
                "name": "Limbo\u0027s Might",
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
                    "Special Effect 2": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon\u0027s Rage",
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
                    "Damage": "45",
                    "Casting": "A cylindrical spell field in melee range"
                },
                "transformation_id": 1
            },
            {
                "id": 102962,
                "icon": "abilities\/1029\/102962.webp",
                "name": "Demon\u0027s Rage",
                "type": "Normal",
                "isCollab": false,
                "description": "Summon a Limbo demon that attacks enemies after exiting a <Orange>Stepping Disc<\/>.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Range": "Length: 6.5m, Width: 3m, Height: 3m",
                    "Damage": "18 damage per hit",
                    "Casting": "A cuboid spell field in melee range",
                    "Attack Speed": "0.25s per hit",
                    "Summons\u0027 Health": "100",
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
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Damage Boost"
                },
                "transformation_id": 1
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "3.00",
                "mover_shaker": "23.00",
                "rank_calc": "4.28",
                "mover_shaker_calc": "-0.25",
                "ZScore": "-0.17",
                "winrate": "53.08",
                "pickrate": "13.03",
                "banrate": "1.26",
                "usage_trend": "Upward",
                "winrate_prev": "53.14",
                "pickrate_prev": "13.02",
                "banrate_prev": "1.17",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "8.00"
            },
            {
                "date": "1750896000",
                "rank": "3.00",
                "mover_shaker": "28.00",
                "rank_calc": "4.28",
                "mover_shaker_calc": "-0.40",
                "ZScore": "-0.12",
                "winrate": "53.14",
                "pickrate": "13.02",
                "banrate": "1.17",
                "usage_trend": "Downward",
                "winrate_prev": "53.31",
                "pickrate_prev": "13.19",
                "banrate_prev": "1.06",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "10.00"
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
                "health": "250",
                "movement_speed": "6m\/s"
            }
        ],
        "en_name": "Moon Knight",
        "description": "As the avatar of the Egyptian God of Vengeance, Marc Spector\u0027s body has been enhanced by Khonshu himself. Bathed in a luminous aura that pierces the darkness, Moon Knight glides through the night, ready to sear his enemies with his master\u0027s sacred Ankhs.",
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
            "1030101"
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
                "description": "Cloak \u0026 Dagger can inject light and dark energy into {103000}{000003}{104400} to create a Light \u0026 Dark Realm where {103000}{000003}{104400} can become <Buff>invisible<\/>. {104401}",
                "additional_fields": {
                    "Key": "C",
                    "Range": "4m spherical radius",
                    "Cooldown": "30s",
                    "Duration": "6s",
                    "Healing Amount": "25\/sec",
                    "Team-Up Target": "Cloak \u0026 Dagger"
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
                "date": "1751500800",
                "rank": "34.00",
                "mover_shaker": "29.00",
                "rank_calc": "3.69",
                "mover_shaker_calc": "-0.39",
                "ZScore": "-0.39",
                "winrate": "46.21",
                "pickrate": "13.20",
                "banrate": "0.32",
                "usage_trend": "Downward",
                "winrate_prev": "46.25",
                "pickrate_prev": "13.61",
                "banrate_prev": "0.29",
                "winrate_change": "0.00",
                "pickrate_change": "-3.00",
                "banrate_change": "10.00"
            },
            {
                "date": "1750896000",
                "rank": "34.00",
                "mover_shaker": "3.00",
                "rank_calc": "3.69",
                "mover_shaker_calc": "0.42",
                "ZScore": "1.01",
                "winrate": "46.25",
                "pickrate": "13.61",
                "banrate": "0.29",
                "usage_trend": "Upward",
                "winrate_prev": "44.49",
                "pickrate_prev": "10.52",
                "banrate_prev": "0.22",
                "winrate_change": "4.00",
                "pickrate_change": "29.00",
                "banrate_change": "32.00"
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
            "ps1031304"
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
                "name": "Light \u0026 Dark Ice",
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
                    "Special Effect": "Replace the previous Light \u0026 Dark Ice cast"
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
                    "Duration": "12s",
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
                "additional_fields": {
                    "Key": "C",
                    "Range": "10m radius",
                    "Damage": "25",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Slow Rate": "30% for 2s",
                    "Healing Amount": "75",
                    "Special Effect": "Knock back enemies and apply a Slow",
                    "Team-Up Target": "Lin Lie"
                },
                "transformation_id": 0
            },
            {
                "id": 103191,
                "icon": "abilities\/1031\/103191.webp",
                "name": "Cryo Heart",
                "type": "Passive",
                "isCollab": false,
                "description": "Automatically restore Health when casting <Orange>Ice Arts<\/> or <Orange>Absolute Zero<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Healing Amount": "30\/s for 3 seconds"
                },
                "transformation_id": 0
            },
            {
                "id": 103194,
                "icon": "abilities\/1031\/103194.webp",
                "name": "Winter\u0027s Chill",
                "type": "Normal",
                "isCollab": true,
                "description": "With the blessing of Luna Snow, Hawkeye is imbued with the ice energy, allowing him to fire <Orange>Ice Arrows<\/> that pierce through enemies! If an <Orange>Ice Arrow<\/> travels beyond a certain distance, it <Debuff>Stuns<\/> any enemy it hits. If it strikes before reaching that distance, it instead <Debuff>Slows<\/> the target. The farther the <Orange>Ice Arrow<\/> flies, the greater its damage.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Healing Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "32.00",
                "mover_shaker": "2.00",
                "rank_calc": "3.77",
                "mover_shaker_calc": "1.11",
                "ZScore": "2.07",
                "winrate": "45.34",
                "pickrate": "23.12",
                "banrate": "1.25",
                "usage_trend": "Downward",
                "winrate_prev": "45.16",
                "pickrate_prev": "23.24",
                "banrate_prev": "1.91",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "-35.00"
            },
            {
                "date": "1750896000",
                "rank": "33.00",
                "mover_shaker": "4.00",
                "rank_calc": "3.75",
                "mover_shaker_calc": "0.41",
                "ZScore": "1.00",
                "winrate": "45.16",
                "pickrate": "23.24",
                "banrate": "1.91",
                "usage_trend": "Upward",
                "winrate_prev": "45.19",
                "pickrate_prev": "23.15",
                "banrate_prev": "2.22",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "-14.00"
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
            "1032302"
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
                    "Spell Field Damage": "110"
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
                    "Cooldown": "10s",
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
                    "Damage": "35",
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
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Arced projectile that generates a spell field upon impact",
                    "Cooldown": "20s",
                    "Projectile Speed": "50 m\/s",
                    "Imprison Duration": "1s",
                    "Spell Field Range": "4m spherical radius",
                    "Spell Field Damage": "80"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "30.00",
                "mover_shaker": "35.00",
                "rank_calc": "3.80",
                "mover_shaker_calc": "-0.62",
                "ZScore": "-0.78",
                "winrate": "46.54",
                "pickrate": "14.24",
                "banrate": "1.99",
                "usage_trend": "Upward",
                "winrate_prev": "46.69",
                "pickrate_prev": "13.84",
                "banrate_prev": "1.65",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "21.00"
            },
            {
                "date": "1750896000",
                "rank": "29.00",
                "mover_shaker": "33.00",
                "rank_calc": "3.82",
                "mover_shaker_calc": "-0.85",
                "ZScore": "-0.73",
                "winrate": "46.69",
                "pickrate": "13.84",
                "banrate": "1.65",
                "usage_trend": "Upward",
                "winrate_prev": "46.63",
                "pickrate_prev": "13.05",
                "banrate_prev": "1.24",
                "winrate_change": "0.00",
                "pickrate_change": "6.00",
                "banrate_change": "33.00"
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
        "description": "Natasha Romanova is the world\u0027s most elite spy in any era. Her mastery of the sniper rifle eliminates targets from afar, while her shock batons neutralize close-range threats. Black Widow is locked, loaded, and ready to deliver a fatal bite!",
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
            "1033300"
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
                "description": "Hawkeye can share his Hunter\u0027s Sight with Black Widow, enabling her to catch sight of and damage afterimages of enemies.",
                "transformation_id": 0
            },
            {
                "id": 103391,
                "icon": "abilities\/1033\/103391.webp",
                "name": "LION\u0027S LAUNCH",
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
                "description": "The Punisher upgrades Black Widow\u0027s arsenal, adding a Pulse Mode to her Red Room Rifle. While the ability is active, using <Orange>Straight Shooter<\/> fires a pulse beam that deals piercing damage.",
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "5s",
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
                "date": "1751500800",
                "rank": "39.00",
                "mover_shaker": "17.00",
                "rank_calc": "3.36",
                "mover_shaker_calc": "-0.06",
                "ZScore": "0.14",
                "winrate": "41.04",
                "pickrate": "4.74",
                "banrate": "0.31",
                "usage_trend": "Downward",
                "winrate_prev": "40.89",
                "pickrate_prev": "4.83",
                "banrate_prev": "0.30",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "3.00"
            },
            {
                "date": "1750896000",
                "rank": "38.00",
                "mover_shaker": "25.00",
                "rank_calc": "3.38",
                "mover_shaker_calc": "-0.26",
                "ZScore": "0.07",
                "winrate": "40.89",
                "pickrate": "4.83",
                "banrate": "0.30",
                "usage_trend": "Downward",
                "winrate_prev": "41.06",
                "pickrate_prev": "5.02",
                "banrate_prev": "0.29",
                "winrate_change": "0.00",
                "pickrate_change": "-4.00",
                "banrate_change": "3.00"
            }
        ]
    },
    {
        "id": "1034",
        "name": "Iron Man",
        "real_name": "Anthony \u0022tony\u0022 Stark",
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
            "1034300"
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
                    "Energy Cost": "2800",
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which, will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
                "transformation_id": 0
            },
            {
                "id": 103492,
                "icon": "abilities\/1034\/103492.webp",
                "name": "Nano Tech",
                "type": "Passive",
                "isCollab": true,
                "description": "Iron Man uses nanotechnology to upgrade Ultron\u0027s arsenal, enhancing his <Orange>Encephalo-Ray<\/> to <Orange>Nano Ray<\/>. During its active phase, Ultron fires an unstoppable Nano Ray straight ahead that pierces through all characters, delivering massive damage to enemies while simultaneously restoring health to allies.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "5% Damage Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "14.00",
                "mover_shaker": "16.00",
                "rank_calc": "4.05",
                "mover_shaker_calc": "-0.06",
                "ZScore": "0.15",
                "winrate": "51.13",
                "pickrate": "14.55",
                "banrate": "24.68",
                "usage_trend": "Downward",
                "winrate_prev": "51.47",
                "pickrate_prev": "15.00",
                "banrate_prev": "25.83",
                "winrate_change": "-1.00",
                "pickrate_change": "-3.00",
                "banrate_change": "-4.00"
            },
            {
                "date": "1750896000",
                "rank": "12.00",
                "mover_shaker": "24.00",
                "rank_calc": "4.08",
                "mover_shaker_calc": "-0.25",
                "ZScore": "0.08",
                "winrate": "51.47",
                "pickrate": "15.00",
                "banrate": "25.83",
                "usage_trend": "Downward",
                "winrate_prev": "51.98",
                "pickrate_prev": "15.73",
                "banrate_prev": "26.15",
                "winrate_change": "-1.00",
                "pickrate_change": "-5.00",
                "banrate_change": "-1.00"
            }
        ]
    },
    {
        "id": "1035",
        "name": "Venom",
        "real_name": "Edward \u0022eddie\u0022 Brock",
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
        "description": "Using his symbiote-enhanced body as the perfect living weapon, Eddie Brock and his alien ally stand ever-ready to unleash vicious attacks upon anyone he deems an enemy. Those ensnared by Venom\u0027s tentacles have no choice but to surrender to this insatiable predator.",
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
            "1035102"
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
                    "Special Effect": "Tendrils apply a 15% Slow on the target and take 3s to inflict damage. If the distance from Venom exceeds 11m, the tendrils will detach"
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
                "description": "Generate <Buff>Bonus Health<\/> against damage. The lower Venom\u0027s Health, the greater the <Buff>Bonus Health<\/> generated.",
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
                "description": "Burrow underground for free movement. After a duration or by pressing {PrimaryAttack}, devour enemies above to deal damage based on the enemy\u0027s current health and generate equivalent <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "7m spherical radius",
                    "Damage": "Inflict damage equal to 50% of the target\u0027s health, followed by an additional 50 damage",
                    "Casting": "Single-cast spell field that surrounds the caster",
                    "Energy Cost": "2500",
                    "Movement Boost": "80%",
                    "Special Effect": "100% of damage dealt is converted into Bonus Health",
                    "Maximum Duration": "4s"
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
                "description": "Venom shares a part of his symbiotes with Jeff the Land Shark. When using the Team-Up Ability in either his normal state or during <Orange>Hide and Seek<\/>, Jeff extends symbiote tendrils to nearby allies, linking with them. Linked teammates receive <Buff>continuous healing<\/>. When the ability reaches its maximum duration, all linked allies gain a large burst of healing, with excess healing being converted into <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+150 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "36.00",
                "mover_shaker": "34.00",
                "rank_calc": "3.64",
                "mover_shaker_calc": "-0.52",
                "ZScore": "-0.61",
                "winrate": "45.70",
                "pickrate": "9.38",
                "banrate": "0.17",
                "usage_trend": "Downward",
                "winrate_prev": "46.05",
                "pickrate_prev": "10.29",
                "banrate_prev": "0.16",
                "winrate_change": "-1.00",
                "pickrate_change": "-9.00",
                "banrate_change": "6.00"
            },
            {
                "date": "1750896000",
                "rank": "35.00",
                "mover_shaker": "17.00",
                "rank_calc": "3.67",
                "mover_shaker_calc": "-0.05",
                "ZScore": "0.36",
                "winrate": "46.05",
                "pickrate": "10.29",
                "banrate": "0.16",
                "usage_trend": "Upward",
                "winrate_prev": "46.07",
                "pickrate_prev": "9.53",
                "banrate_prev": "0.15",
                "winrate_change": "0.00",
                "pickrate_change": "8.00",
                "banrate_change": "7.00"
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
            "1036503"
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
                    "Kick Damage": "50",
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
                    "Damage": "12 damage per hit",
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
                    "Damage": "55",
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
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "10% Damage Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "22.00",
                "mover_shaker": "7.00",
                "rank_calc": "3.88",
                "mover_shaker_calc": "0.28",
                "ZScore": "0.70",
                "winrate": "47.97",
                "pickrate": "17.05",
                "banrate": "6.05",
                "usage_trend": "Upward",
                "winrate_prev": "47.76",
                "pickrate_prev": "16.21",
                "banrate_prev": "6.23",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "-3.00"
            },
            {
                "date": "1750896000",
                "rank": "21.00",
                "mover_shaker": "16.00",
                "rank_calc": "3.87",
                "mover_shaker_calc": "-0.01",
                "ZScore": "0.41",
                "winrate": "47.76",
                "pickrate": "16.21",
                "banrate": "6.23",
                "usage_trend": "Downward",
                "winrate_prev": "48.31",
                "pickrate_prev": "16.25",
                "banrate_prev": "6.72",
                "winrate_change": "-1.00",
                "pickrate_change": "0.00",
                "banrate_change": "-7.00"
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
            "1037300"
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
                "description": "Convert the iron rings on Magneto\u0027s back into a Mag-Cannon and launch a metallic mass forward. Higher stacks of rings increase damage, and full stacks <Debuff>Knock Back<\/> enemies.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "Iron Rings\u0027 first charge deals 40 damage, the second charge deals 65 damage, and the third charge deals 90 damage",
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
                "description": "Conjure a metal shield around a chosen ally. Damage taken will transform into rings on Magneto\u0027s back.",
                "additional_fields": {
                    "Key": "E",
                    "Casting": "Targeted",
                    "Cooldown": "12s, and sharing cooldown with Iron Bulwark",
                    "Shield Value": "300",
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
                "description": "Draw in all materials around to forge an iron meteor that deals massive damage upon impact. Absorbing enemy <Orange>Projectiles<\/> can enhance the meteor\u0027s power, yet overloading will cause it to self-destruct.",
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
                "description": "Conjure an iron shield around himself. Damage taken will transform into rings on Magneto\u0027s back.",
                "additional_fields": {
                    "Key": "F",
                    "Cooldown": "12s, and sharing cooldown with Metal Bulwark",
                    "Shield Value": "300",
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
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy\u0027s perspective that confuses foes by moving and casting abilities on its own.",
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
                "date": "1751500800",
                "rank": "19.00",
                "mover_shaker": "21.00",
                "rank_calc": "3.97",
                "mover_shaker_calc": "-0.19",
                "ZScore": "-0.08",
                "winrate": "48.19",
                "pickrate": "28.34",
                "banrate": "1.35",
                "usage_trend": "Downward",
                "winrate_prev": "48.13",
                "pickrate_prev": "29.15",
                "banrate_prev": "1.28",
                "winrate_change": "0.00",
                "pickrate_change": "-3.00",
                "banrate_change": "5.00"
            },
            {
                "date": "1750896000",
                "rank": "18.00",
                "mover_shaker": "37.00",
                "rank_calc": "3.98",
                "mover_shaker_calc": "-1.31",
                "ZScore": "-1.36",
                "winrate": "48.13",
                "pickrate": "29.15",
                "banrate": "1.28",
                "usage_trend": "Downward",
                "winrate_prev": "47.98",
                "pickrate_prev": "30.72",
                "banrate_prev": "0.90",
                "winrate_change": "0.00",
                "pickrate_change": "-5.00",
                "banrate_change": "42.00"
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
            "1038300"
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
                    "Special Effect": "During this period, Scarlet Witch enters the Projection state"
                },
                "transformation_id": 0
            },
            {
                "id": 103851,
                "icon": "abilities\/1038\/103851.webp",
                "name": "Reality Erasure",
                "type": "Normal",
                "isCollab": false,
                "description": "Engage in free-flight while charging energy, then unleash it to deal massive damage.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "15m spherical radius",
                    "Damage": "750",
                    "Casting": "Spherical Spell Field",
                    "Slow Rate": "Begin to slow down by 1.5s, with the effect gradually increasing to -35% by 3.5s",
                    "Charge Time": "4s",
                    "Energy Cost": "3400",
                    "Special Effect": "During this period, Scarlet Witch enters a Free-flight state",
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
                "description": "Doctor Strange shares his arcane mastery, replacing Scarlet Witch\u0027s <Orange>Chthonian Burst<\/> with <Orange>Mystic Burst<\/> upon activation. Hold down the attack button to unleash a rapid, relentless salvo of magical missiles in the target direction.",
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
                    "Spell Field Damage": "12"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "31.00",
                "mover_shaker": "13.00",
                "rank_calc": "3.79",
                "mover_shaker_calc": "0.02",
                "ZScore": "0.28",
                "winrate": "47.01",
                "pickrate": "12.09",
                "banrate": "0.44",
                "usage_trend": "Downward",
                "winrate_prev": "47.07",
                "pickrate_prev": "12.20",
                "banrate_prev": "0.45",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "-2.00"
            },
            {
                "date": "1750896000",
                "rank": "31.00",
                "mover_shaker": "6.00",
                "rank_calc": "3.77",
                "mover_shaker_calc": "0.29",
                "ZScore": "0.82",
                "winrate": "47.07",
                "pickrate": "12.20",
                "banrate": "0.45",
                "usage_trend": "Downward",
                "winrate_prev": "47.04",
                "pickrate_prev": "12.36",
                "banrate_prev": "0.50",
                "winrate_change": "0.00",
                "pickrate_change": "-1.00",
                "banrate_change": "-10.00"
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
            "1039501"
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
                "description": "Summon lightning to restore <Orange>Thorforce<\/> based on the number of hit enemies.",
                "additional_fields": {
                    "Key": "E",
                    "Range": "5m spherical radius",
                    "Damage": "Deal 40 damage when enemies cross the boundaries",
                    "Casting": "Persistent Spell Field",
                    "Cooldown": "12s",
                    "Special Effect": "For each enemy within the spell area, 1 point of Thorforce is restored. Enemies that cross the boundary will be Slowed by 30%",
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
                "description": "Consume <Orange>Thorforce<\/> to enter the <Orange>Awakened<\/> state, granting <Buff>Bonus Health<\/> and enhancing Mjölnir Bash.",
                "additional_fields": {
                    "Key": "F",
                    "Range": "3m spherical radius",
                    "Damage": "Projectile Damage: 70, Spell Field Damage: 15 per second",
                    "Casting": "Ability Enhancement",
                    "Duration": "5s",
                    "Key (Enhanced)": "Left Click",
                    "Special Effect": "Inflict damage over time on nearby enemies",
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
                "description": "Soar upwards and smite the ground after charging for a duration, inflicting damage on enemies within range.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "The sustained spell field is cylindrical, measuring 8m in radius and 20m in height, whereas the one-time spell field has an 8m spherical radius",
                    "Damage": "The sustained spell field lasts for 0.5s, dealing 40 damage, while the one-time spell field deals 220 damage",
                    "Height": "9m",
                    "Casting": "A persistent spell field that generates a one-time spell field upon expiration",
                    "Duration": "1.5s",
                    "Energy Cost": "3100"
                },
                "transformation_id": 0
            },
            {
                "id": 103902,
                "icon": "abilities\/1039\/103902.webp",
                "name": "Odinson Reborn",
                "type": "Passive",
                "isCollab": true,
                "description": "When Hela lands a final hit in defeating an enemy, she can instantly resurrect {101600}{000003}{103900} in the respawn phase, or grant them <Buff>Bonus Health<\/> if they are still alive.",
                "additional_fields": {
                    "Key": "Passive",
                    "Bonus Health": "50",
                    "Respawn Delay": "1.5s",
                    "Respawn Health Percentage": "80%"
                },
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "7.00",
                "mover_shaker": "27.00",
                "rank_calc": "4.18",
                "mover_shaker_calc": "-0.32",
                "ZScore": "-0.28",
                "winrate": "50.82",
                "pickrate": "14.32",
                "banrate": "0.22",
                "usage_trend": "Upward",
                "winrate_prev": "50.81",
                "pickrate_prev": "12.22",
                "banrate_prev": "0.18",
                "winrate_change": "0.00",
                "pickrate_change": "17.00",
                "banrate_change": "22.00"
            },
            {
                "date": "1750896000",
                "rank": "8.00",
                "mover_shaker": "26.00",
                "rank_calc": "4.12",
                "mover_shaker_calc": "-0.27",
                "ZScore": "0.06",
                "winrate": "50.81",
                "pickrate": "12.22",
                "banrate": "0.18",
                "usage_trend": "Upward",
                "winrate_prev": "50.54",
                "pickrate_prev": "10.99",
                "banrate_prev": "0.15",
                "winrate_change": "1.00",
                "pickrate_change": "11.00",
                "banrate_change": "20.00"
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
        "description": "Reed Richards believes that true strength comes from remaining flexible, both mentally and physically. Mister Fantastic\u0027s elastic body, which can twist and stretch into any form with ease, is almost as impressive as his brilliant mind.",
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
            "ps1040502"
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
                    "Bonus Health": "400",
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
                "description": "Extend arms forward to entangle an enemy, then press {PrimaryAttack} to pull the hit enemy toward you, or select and yank another enemy, <Debuff>knocking them airborne<\/> against each other.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Casting": "Projectile that fires in a straight trajectory",
                    "Cooldown": "6s",
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
                    "Cooldown": "20s",
                    "Duration": "5s",
                    "Team-Up Target": "Invisible Woman",
                    "Damage\/Health Conversion": "100%"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "8.00",
                "mover_shaker": "32.00",
                "rank_calc": "4.12",
                "mover_shaker_calc": "-0.41",
                "ZScore": "-0.43",
                "winrate": "52.61",
                "pickrate": "13.24",
                "banrate": "0.89",
                "usage_trend": "Upward",
                "winrate_prev": "52.70",
                "pickrate_prev": "12.95",
                "banrate_prev": "0.78",
                "winrate_change": "0.00",
                "pickrate_change": "2.00",
                "banrate_change": "14.00"
            },
            {
                "date": "1750896000",
                "rank": "9.00",
                "mover_shaker": "15.00",
                "rank_calc": "4.12",
                "mover_shaker_calc": "0.04",
                "ZScore": "0.48",
                "winrate": "52.70",
                "pickrate": "12.95",
                "banrate": "0.78",
                "usage_trend": "Upward",
                "winrate_prev": "52.71",
                "pickrate_prev": "12.94",
                "banrate_prev": "0.79",
                "winrate_change": "0.00",
                "pickrate_change": "0.00",
                "banrate_change": "-1.00"
            }
        ]
    },
    {
        "id": "1041",
        "name": "Winter Soldier",
        "real_name": "James \u0022bucky\u0022 Barnes",
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
        "description": "Terrifying experiments turned him into a brainwashed assassin, but now James \u0022Bucky\u0022 Barnes is in control of his own fate once again. With his enhanced mechanical arm, the Winter Soldier is primed to deliver earth-shattering blows to any foe in his path!",
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
            "ps1041302"
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
                    "Bonus Health (Self)": "40 (Bionic Hook \u0026 Tainted Voltage), 50 (Trooper\u0027s Fist, Kraken Impact)"
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
                    "Damage Falloff": "Falloff begins at 20m, decreasing to 60% at 40m",
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
                "name": "Trooper\u0027s Fist",
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
                "description": "Rocket Raccoon throws an Ammo Overload Device in the target direction. Upon entering the device\u0027s range, {101400} receive the buffs of <Buff>Infinite Ammo<\/> and <Buff>Faster Firing<\/>.",
                "transformation_id": 0
            },
            {
                "id": 104181,
                "icon": "abilities\/1041\/104181.webp",
                "name": "Stellar Impact",
                "type": "Normal",
                "isCollab": true,
                "description": "Inspired by Captain America\u0027s resolve, Winter Soldier can leap to the aid of a designated ally, slamming the ground with his mechanical arm to damage nearby foes and grant <Buff>Bonus Health<\/> to allies within range. Captain America and Winter Soldier can interact with each other once both parties confirm. The duo then collides and unleashes a shockwave that damages and <Debuff>slows<\/> enemies.",
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
                "date": "1751500800",
                "rank": "23.00",
                "mover_shaker": "19.00",
                "rank_calc": "3.87",
                "mover_shaker_calc": "-0.15",
                "ZScore": "0.00",
                "winrate": "46.47",
                "pickrate": "15.52",
                "banrate": "0.39",
                "usage_trend": "Upward",
                "winrate_prev": "46.52",
                "pickrate_prev": "15.26",
                "banrate_prev": "0.37",
                "winrate_change": "0.00",
                "pickrate_change": "2.00",
                "banrate_change": "5.00"
            },
            {
                "date": "1750896000",
                "rank": "24.00",
                "mover_shaker": "14.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "0.07",
                "ZScore": "0.52",
                "winrate": "46.52",
                "pickrate": "15.26",
                "banrate": "0.37",
                "usage_trend": "Downward",
                "winrate_prev": "46.44",
                "pickrate_prev": "15.61",
                "banrate_prev": "0.38",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "-3.00"
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
            "1042101"
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
                "description": "Generate a <Orange>Bionic Spider-Nest<\/> at a targeted area, periodically spawning <Orange>Spider-Drones<\/> and creating <Orange>Cyber-Webs<\/>. While in the <Orange>Cyber-Web<\/>, gain <Buff>Healing Over Time<\/> and a <Buff>Movement Boost<\/>. Excess healing converts into <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Range": "12m spherical radius",
                    "Damage": "Each Spider-Drone inflicts 40 damage",
                    "Casting": "Targeted",
                    "Cooldown": "15s",
                    "Special Effect": "Two Spider-Drones are generated every 3s",
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
                "description": "Enhance the SP\/\/dr suit, <Debuff>Launching Up<\/> enemies in its path and deploying <Orange>Arachno-Mines<\/>, <Orange>Spider-Drones<\/>, and <Orange>Cyber-Webs<\/> repeatedly.",
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
                    "Spider-Drone Generation Interval": "0.7s"
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
                "description": "Rocket Raccoon upgrades his <Orange>B.R.B.<\/> by integrating the <Orange>Bionic Spider-Nest<\/> effect. Now, the beacon creates <Orange>Cyber-Webs<\/> when placed and periodically spawns <Orange>Arachno-Mines<\/> and <Orange>Spider-Drones<\/>. Peni Parker can additionally deploy an <Orange>Armored Spider-Nest<\/> that periodically drops <Orange>Armor Packs<\/> that grant <Buff>Bonus Health<\/>.",
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "2.00",
                "mover_shaker": "18.00",
                "rank_calc": "4.34",
                "mover_shaker_calc": "-0.14",
                "ZScore": "0.01",
                "winrate": "55.94",
                "pickrate": "11.24",
                "banrate": "27.01",
                "usage_trend": "Downward",
                "winrate_prev": "56.18",
                "pickrate_prev": "11.60",
                "banrate_prev": "27.07",
                "winrate_change": "0.00",
                "pickrate_change": "-3.00",
                "banrate_change": "0.00"
            },
            {
                "date": "1750896000",
                "rank": "2.00",
                "mover_shaker": "19.00",
                "rank_calc": "4.34",
                "mover_shaker_calc": "-0.14",
                "ZScore": "0.24",
                "winrate": "56.18",
                "pickrate": "11.60",
                "banrate": "27.07",
                "usage_trend": "Downward",
                "winrate_prev": "56.22",
                "pickrate_prev": "12.12",
                "banrate_prev": "26.75",
                "winrate_change": "0.00",
                "pickrate_change": "-4.00",
                "banrate_change": "1.00"
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
        "description": "Peter Quill lives to dazzle his foes on the battlefield with his signature swagger. As his element guns paint arcs of devastation, his acrobatic moves sail through the sky with unrivaled style. With performances this spectacular, it\u0027s no wonder that Star-Lord is so legendary!",
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
            "1043501"
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
                    "Damage Falloff": "Falloff begins at 10m, decreasing to 60% at 25m",
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
                    "Special Mechanic": "During this period, Star-Lord\u0027s Reload Speed increases significantly",
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
                "name": "Leader\u0027s Soul",
                "type": "Passive",
                "isCollab": true,
                "description": "Adam Warlock enhances the rebirth power of {104300}{000003}{102000}, granting them the power of cocooned revival.",
                "additional_fields": {
                    "Key": "Passive",
                    "Cooldown": "120s",
                    "Team-Up Target": "Adam Warlock",
                    "Special Mechanic": "During this period, Star-Lord enters a Free-flight state."
                },
                "transformation_id": 0
            },
            {
                "id": 104391,
                "icon": "abilities\/1043\/104391.webp",
                "name": "LION\u0027S LAUNCH",
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "18.00",
                "mover_shaker": "22.00",
                "rank_calc": "3.98",
                "mover_shaker_calc": "-0.25",
                "ZScore": "-0.16",
                "winrate": "47.03",
                "pickrate": "9.31",
                "banrate": "0.24",
                "usage_trend": "Downward",
                "winrate_prev": "47.56",
                "pickrate_prev": "9.42",
                "banrate_prev": "0.24",
                "winrate_change": "-1.00",
                "pickrate_change": "-1.00",
                "banrate_change": "0.00"
            },
            {
                "date": "1750896000",
                "rank": "15.00",
                "mover_shaker": "20.00",
                "rank_calc": "4.06",
                "mover_shaker_calc": "-0.19",
                "ZScore": "0.18",
                "winrate": "47.56",
                "pickrate": "9.42",
                "banrate": "0.24",
                "usage_trend": "Upward",
                "winrate_prev": "47.18",
                "pickrate_prev": "9.05",
                "banrate_prev": "0.21",
                "winrate_change": "1.00",
                "pickrate_change": "4.00",
                "banrate_change": "14.00"
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
            "1045101"
        ],
        "abilities": [
            {
                "id": 104521,
                "icon": "abilities\/1045\/104521.webp",
                "name": "Trident Of Neptune",
                "type": "Normal",
                "isCollab": false,
                "description": "Throw the trident forward, reducing <Orange>Aquatic Dominion\u0027s<\/> cooldown upon enemy impact. Critical hits cause <Orange>Monstro Spawn<\/> to enter a berserk state, gaining increased Attack Speed.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Ammo": "Infinite",
                    "Damage": "70",
                    "Casting": "Projectile with an arced trajectory",
                    "Fire Rate": "1.09 rounds per second",
                    "Critical Hit": "Yes",
                    "Projectile Speed": "120 m\/s",
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
                    "Projectile Speed": "120 m\/s",
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
                "description": "Hulk charges Namor with gamma radiation. When Namor receives the radiation, he will summon an extra <Orange>Gamma Monstro<\/> which will continuously fire gamma rays at locked-on enemies. The longer the rays hit, the higher the damage.",
                "additional_fields": {
                    "Key": "C",
                    "Casting": "Arced Trajectory (Summon Gamma Monstro), Direct Hit (Gamma Monstro)",
                    "Default": " ",
                    "Cooldown": "20s",
                    "Duration": "2s",
                    "Enhanced": " ",
                    "Special Effect": "When attacking the same target continuously, the damage will gradually increase to 1.5X over 5 seconds",
                    "Team-Up Target": "Hulk",
                    "Gamma Monstro Damage": "4",
                    "Gamma Monstro Health": "200",
                    "Gamma Monstro Fire Rate": "0.05s per round",
                    "Gamma Monstro Attack Range": "40m",
                    "Frozen Spawn Damage Falloff": "Falloff begins at 20m, decreasing to 30% at 40m",
                    "Gamma Monstro Maximum Duration": "10s",
                    "Projectile Speed (Summon Gamma Monstro)": "20 m\/s",
                    "Monstro Spawn\/Gamma Monstro Maximum Quantity": "2"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "28.00",
                "mover_shaker": "25.00",
                "rank_calc": "3.83",
                "mover_shaker_calc": "-0.31",
                "ZScore": "-0.27",
                "winrate": "47.05",
                "pickrate": "10.85",
                "banrate": "3.83",
                "usage_trend": "Upward",
                "winrate_prev": "47.10",
                "pickrate_prev": "10.69",
                "banrate_prev": "3.46",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "11.00"
            },
            {
                "date": "1750896000",
                "rank": "26.00",
                "mover_shaker": "13.00",
                "rank_calc": "3.83",
                "mover_shaker_calc": "0.10",
                "ZScore": "0.57",
                "winrate": "47.10",
                "pickrate": "10.69",
                "banrate": "3.46",
                "usage_trend": "Upward",
                "winrate_prev": "46.95",
                "pickrate_prev": "10.28",
                "banrate_prev": "3.41",
                "winrate_change": "0.00",
                "pickrate_change": "4.00",
                "banrate_change": "1.00"
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
            "1046101"
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
                "description": "Gather quantum energy into a cluster and then swiftly launch it at the enemy.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "38",
                    "Casting": "Charged release, with multiple delayed projectiles",
                    "Fire Rate": "The firing interval for a single charged shot is 0.3s, while the interval for multiple shots is 0.07s",
                    "Special Effect": "Cosmic Cluster shares ammo with Quantum Magic",
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
                    "Special Effect": "Adam Warlock will share a portion of the damage sustained by linked allies. If Adam Warlock sustains damage that would KO him due to the link, then the link will be broken, and he will retain 1 Health. The link will also break once enough damage is sustained, if Adam Warlock or the linked ally leave the link\u0027s range, or after a certain length of time has passed",
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
                    "Energy Cost": "5000",
                    "Special Effect": "Revive allies within range, centered on Adam. Continuously monitor for fallen allies within this range; if they enter the area, they can be revived at the casting location",
                    "Health Upon Revival": "30% of the Max Health"
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
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "15% Healing Boost"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "15.00",
                "mover_shaker": "31.00",
                "rank_calc": "4.02",
                "mover_shaker_calc": "-0.40",
                "ZScore": "-0.42",
                "winrate": "48.42",
                "pickrate": "6.82",
                "banrate": "0.09",
                "usage_trend": "Upward",
                "winrate_prev": "48.52",
                "pickrate_prev": "6.78",
                "banrate_prev": "0.08",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "13.00"
            },
            {
                "date": "1750896000",
                "rank": "11.00",
                "mover_shaker": "11.00",
                "rank_calc": "4.08",
                "mover_shaker_calc": "0.12",
                "ZScore": "0.59",
                "winrate": "48.52",
                "pickrate": "6.78",
                "banrate": "0.08",
                "usage_trend": "Upward",
                "winrate_prev": "48.38",
                "pickrate_prev": "6.59",
                "banrate_prev": "0.08",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "0.00"
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
            "1047301"
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
                    "Special Effect": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff\u0027s hitbox is reduced",
                    "Energy Recovery Speed": "15\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104771,
                "icon": "abilities\/1047\/104771.webp",
                "name": "It\u0027s Jeff!",
                "type": "Ultimate",
                "isCollab": false,
                "description": "Deep dive into the scene and resurface to swallow both enemies and allies within range, activating <Orange>Hide and Seek<\/> for a brief duration before ejecting the swallowed heroes forward. Excess healing converts to <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Range": "10m radius,5m high cylindrical spell field",
                    "Damage": "25\/s",
                    "Casting": "Targeted",
                    "Duration": "6s",
                    "Energy Cost": "4500",
                    "Healing Amount": "225\/s",
                    "Special Effect": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek",
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
                    "Critical Hit Damage Reduction": "70%"
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
                "description": "{104700}{000003}{102300} can ride on Groot\u0027s shoulders, receiving <Buff>Damage Reduction<\/>.",
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
                    "Special Effect": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff\u0027s hitbox is reduced",
                    "Energy Recovery Speed": "15\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 104772,
                "icon": "abilities\/1047\/104772.webp",
                "name": "It\u0027s Jeff!",
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
                    "Special Effect": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek",
                    "Bonus Health (Ally)": "\n\t\t\t\t\t\tOverflow healing on swallowed allies grants 45 Health per second as Bonus Health, up to 150\n\t\t\t\t\t\t"
                },
                "transformation_id": 0
            },
            {
                "id": 104784,
                "icon": "abilities\/1047\/104784.webp",
                "name": "It\u0027s Jeff-nado!",
                "type": "Normal",
                "isCollab": true,
                "description": "When Storm unleashes her <Orange>Omega Hurricane<\/>, if Jeff the Land Shark has <Orange>It\u0027s Jeff!<\/> ready, he can channel her power to conjure a ferocious <Orange>Jeff-nado<\/>! Additionally, a <Orange>Jeff-nado<\/> will form if Jeff encounters Storm\u0027s <Orange>Omega Hurricane<\/> after devouring enemies with <Orange>It\u0027s Jeff!<\/>. Enemies will be drawn into the swirling chaos after enduring sustained damage from the <Orange>Jeff-nado<\/> for some time.",
                "additional_fields": {
                    "Key": "Z",
                    "Select Range": "60m radius, 90° fan-shaped area in front of Jeff",
                    "Swallow Range": "10m spherical radius spell field centered around Storm",
                    "Swallow Damage": "80",
                    "Attack Interval": "2 hits per second",
                    "Swallow Time Required": "1.2s",
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
                "description": "Venom shares a part of his symbiotes with Jeff the Land Shark. When using the Team-Up Ability in either his normal state or during <Orange>Hide and Seek<\/>, Jeff extends symbiote tendrils to nearby allies, linking with them. Linked teammates receive <Buff>continuous healing<\/>. When the ability reaches its maximum duration, all linked allies gain a large burst of healing, with excess healing being converted into <Buff>Bonus Health<\/>.",
                "additional_fields": {
                    "Key": "X",
                    "Range": "10m spherical radius spell field",
                    "Cooldown": "20s",
                    "Bonus Health": "50",
                    "Bonus Health Falloff": "Falloff begins at 3s and decreases by 30\/s",
                    "One-time Healing Amount": "70",
                    "Continuous Healing Duration": "3s",
                    "Continuous Healing Efficiency": "70\/s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "20.00",
                "mover_shaker": "9.00",
                "rank_calc": "3.90",
                "mover_shaker_calc": "0.15",
                "ZScore": "0.49",
                "winrate": "46.18",
                "pickrate": "27.99",
                "banrate": "0.76",
                "usage_trend": "Downward",
                "winrate_prev": "46.39",
                "pickrate_prev": "28.69",
                "banrate_prev": "0.84",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "-10.00"
            },
            {
                "date": "1750896000",
                "rank": "20.00",
                "mover_shaker": "9.00",
                "rank_calc": "3.92",
                "mover_shaker_calc": "0.19",
                "ZScore": "0.70",
                "winrate": "46.39",
                "pickrate": "28.69",
                "banrate": "0.84",
                "usage_trend": "Upward",
                "winrate_prev": "46.54",
                "pickrate_prev": "27.45",
                "banrate_prev": "0.89",
                "winrate_change": "0.00",
                "pickrate_change": "5.00",
                "banrate_change": "-6.00"
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
        "description": "The psychic warrior known as Sai has the Mutant ability to conjure a variety of weapons with the power of her mind. Gracefully gliding across the battlefield, this trained ninja can shatter the enemy\u0027s defenses with a single thought.",
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
            "ps1048503"
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
                    "Damage": "12 per hit",
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
                    "Special Mechanic": "Casting this ability will automatically recall the Wing Shurikens. The shurikens will first travel to Psylocke\u0027s starting position before returning to her"
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
                    "Damage": "150 damage per hit",
                    "Duration": "4s",
                    "Slow Rate": "-30%",
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
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy\u0027s perspective that confuses foes by moving and casting abilities on its own.",
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
                "date": "1751500800",
                "rank": "27.00",
                "mover_shaker": "30.00",
                "rank_calc": "3.84",
                "mover_shaker_calc": "-0.40",
                "ZScore": "-0.42",
                "winrate": "47.74",
                "pickrate": "9.00",
                "banrate": "0.52",
                "usage_trend": "Upward",
                "winrate_prev": "47.95",
                "pickrate_prev": "8.67",
                "banrate_prev": "0.46",
                "winrate_change": "0.00",
                "pickrate_change": "4.00",
                "banrate_change": "13.00"
            },
            {
                "date": "1750896000",
                "rank": "27.00",
                "mover_shaker": "23.00",
                "rank_calc": "3.83",
                "mover_shaker_calc": "-0.23",
                "ZScore": "0.11",
                "winrate": "47.95",
                "pickrate": "8.67",
                "banrate": "0.46",
                "usage_trend": "Upward",
                "winrate_prev": "48.16",
                "pickrate_prev": "8.40",
                "banrate_prev": "0.43",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "7.00"
            }
        ]
    },
    {
        "id": "1049",
        "name": "Wolverine",
        "real_name": "James \u0022logan\u0022 Howlett",
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
            "1049800"
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
                    "Percentage Damage": "Deal damage equal to 1.5% of the target\u0027s Max Health, with an extra 0.045% damage for each point of Rage"
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
                    "Percentage Damage": "Deal damage equal to 1.5% of the target\u0027s Max Health, with an extra 0.045% damage for each point of Rage"
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
                    "Cooldown": "12s",
                    "Smash Damage": "35",
                    "Snatch Damage": "35",
                    "Knockdown Duration": "0.75s",
                    "Berserk Claw Strike Duration": "4s",
                    "Berserk Claw Strike Base Damage": "6 damage per strike",
                    "Berserk Claw Strike Attack Interval": "5.88 strikes per second",
                    "Berserk Claw Strike Maximum Distance": "3.5m",
                    "Berserk Claw Strike Percentage Damage": "Deal damage equal to 1% of the target\u0027s Max Health, with an extra 0.035% damage for each point of Rage"
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
                    "Energy Cost": "2800",
                    "Impact Range": "8m spherical radius",
                    "Knockdown Time": "0.75s",
                    "Knockback Range": "8m spherical radius",
                    "Knockback Damage": "50",
                    "Impact Base Damage": "50",
                    "Impact Percentage Damage": "Deal damage equal to 10% of the target\u0027s Max Health, with an extra 0.3% damage for each point of Rage",
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
                "additional_fields": {
                    "Key": "C",
                    "Cooldown": "3s (when Wolverine is not hurled) and 15s (after hurling Wolverine)",
                    "Team-Up Target": "Hulk",
                    "Maximum Waving Duration": "5s"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "25.00",
                "mover_shaker": "37.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "-0.80",
                "ZScore": "-1.07",
                "winrate": "49.49",
                "pickrate": "12.72",
                "banrate": "11.21",
                "usage_trend": "Upward",
                "winrate_prev": "49.45",
                "pickrate_prev": "12.55",
                "banrate_prev": "8.75",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "28.00"
            },
            {
                "date": "1750896000",
                "rank": "22.00",
                "mover_shaker": "31.00",
                "rank_calc": "3.87",
                "mover_shaker_calc": "-0.77",
                "ZScore": "-0.63",
                "winrate": "49.45",
                "pickrate": "12.55",
                "banrate": "8.75",
                "usage_trend": "Upward",
                "winrate_prev": "49.54",
                "pickrate_prev": "12.24",
                "banrate_prev": "6.93",
                "winrate_change": "0.00",
                "pickrate_change": "3.00",
                "banrate_change": "26.00"
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
            "ps1050503"
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
                "date": "1751500800",
                "rank": "21.00",
                "mover_shaker": "10.00",
                "rank_calc": "3.88",
                "mover_shaker_calc": "0.13",
                "ZScore": "0.45",
                "winrate": "45.97",
                "pickrate": "30.79",
                "banrate": "0.33",
                "usage_trend": "Upward",
                "winrate_prev": "45.93",
                "pickrate_prev": "30.48",
                "banrate_prev": "0.34",
                "winrate_change": "0.00",
                "pickrate_change": "1.00",
                "banrate_change": "-3.00"
            },
            {
                "date": "1750896000",
                "rank": "23.00",
                "mover_shaker": "30.00",
                "rank_calc": "3.86",
                "mover_shaker_calc": "-0.75",
                "ZScore": "-0.60",
                "winrate": "45.93",
                "pickrate": "30.48",
                "banrate": "0.34",
                "usage_trend": "Downward",
                "winrate_prev": "45.79",
                "pickrate_prev": "31.04",
                "banrate_prev": "0.27",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "26.00"
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
        "description": "Benjamin J. Grimm is unquestionably the rock star of any team he\u0027s on. Always at the forefront of the fight, the Thing shields his allies with his unbreakable form, selflessly fending off any harm that comes their way.",
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
            "ps1051503"
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
                "type": "Normal",
                "isCollab": false,
                "description": "Deliver a devastating Heavy Blow.",
                "additional_fields": {
                    "Key": "Right Click",
                    "Damage": "90",
                    "Casting": "Single-cast Spell Field",
                    "Attack Range": "8m",
                    "Special Effect": "Move forward 3 meters while punching, gaining 50 Bonus Health during skill activation"
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
                "name": "Clobberin\u0027 Time",
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "35.00",
                "mover_shaker": "26.00",
                "rank_calc": "3.68",
                "mover_shaker_calc": "-0.31",
                "ZScore": "-0.27",
                "winrate": "46.74",
                "pickrate": "11.18",
                "banrate": "0.67",
                "usage_trend": "Upward",
                "winrate_prev": "46.51",
                "pickrate_prev": "10.58",
                "banrate_prev": "0.57",
                "winrate_change": "0.00",
                "pickrate_change": "6.00",
                "banrate_change": "18.00"
            },
            {
                "date": "1750896000",
                "rank": "36.00",
                "mover_shaker": "29.00",
                "rank_calc": "3.66",
                "mover_shaker_calc": "-0.60",
                "ZScore": "-0.39",
                "winrate": "46.51",
                "pickrate": "10.58",
                "banrate": "0.57",
                "usage_trend": "Upward",
                "winrate_prev": "46.78",
                "pickrate_prev": "10.56",
                "banrate_prev": "0.49",
                "winrate_change": "-1.00",
                "pickrate_change": "0.00",
                "banrate_change": "16.00"
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
            "1052501"
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
                "description": "Strike the targeted enemy with Jeet Kune Do, and the last strike will <Debuff>Launch Up<\/> enemies, reducing the cooldown of <Orange>Dragon\u0027s Defense<\/> with every hit.",
                "additional_fields": {
                    "Key": "Left Click",
                    "Damage": "The first four strikes each deal 30 damage, while the fifth strike deals 50 damage",
                    "Casting": "Melee",
                    "Attack Interval": "The first four strikes have an interval of 0.45s between them, while the fifth strike has a 0.67s interval from the fourth strike",
                    "Maximum Distance": "3m",
                    "Maximum Pull-In Distance": "6m",
                    "Dragon\u0027s Defense Cooldown Reduction Per Hit": "1s"
                },
                "transformation_id": 0
            },
            {
                "id": 105231,
                "icon": "abilities\/1052\/105231.webp",
                "name": "Dragon\u0027s Defense",
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
                    "Damage": "9 base damage + 2.1% of the enemy\u0027s Max Health per strike",
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
                "name": "K\u0027un-lun Kick",
                "type": "Normal",
                "isCollab": false,
                "description": "Dash forward, delivering a flying kick when hitting an enemy or reaching full range, dealing damage to nearby enemies. Damage increases with lower enemy health.",
                "additional_fields": {
                    "Key": "SHIFT",
                    "Casting": "Movement-based damage ability",
                    "Cooldown": "10s",
                    "Dashing Speed": "40 m\/s",
                    "Maximum Dash Distance": "12m",
                    "First Flying Kick Damage": "30",
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
                "description": "Become living Chi to boost his speed, damage, and attack range, delivering stronger punches while reducing the cooldown of <Orange>Dragon\u0027s Defense<\/>.",
                "additional_fields": {
                    "Key": "Q",
                    "Duration": "12s",
                    "Energy Cost": "3400",
                    "Damage Boost": "30%",
                    "Movement Boost": "20%",
                    "K\u0027un-Lun Kick Bonus Range": "100%",
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
                "name": "Dragon\u0027s Chill",
                "type": "Normal",
                "isCollab": true,
                "description": "Iron Fist channels the Chi of Shou-Lao into Luna Snow, transforming her ice power into a Chi-infused frosty ring that radiates from her. This ring can launch up enemies with chilling damage and applies a slowing effect, while simultaneously healing her allies.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-up Bonus": "10% Damage Boost"
                },
                "transformation_id": 0
            },
            {
                "id": 105291,
                "icon": "abilities\/1052\/105291.webp",
                "name": "LION\u0027S LAUNCH",
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
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "24.00",
                "mover_shaker": "6.00",
                "rank_calc": "3.87",
                "mover_shaker_calc": "0.34",
                "ZScore": "0.81",
                "winrate": "48.98",
                "pickrate": "6.20",
                "banrate": "0.51",
                "usage_trend": "Downward",
                "winrate_prev": "48.66",
                "pickrate_prev": "6.55",
                "banrate_prev": "0.57",
                "winrate_change": "1.00",
                "pickrate_change": "-5.00",
                "banrate_change": "-11.00"
            },
            {
                "date": "1750896000",
                "rank": "25.00",
                "mover_shaker": "1.00",
                "rank_calc": "3.85",
                "mover_shaker_calc": "0.59",
                "ZScore": "1.23",
                "winrate": "48.66",
                "pickrate": "6.55",
                "banrate": "0.57",
                "usage_trend": "Upward",
                "winrate_prev": "48.81",
                "pickrate_prev": "6.16",
                "banrate_prev": "0.69",
                "winrate_change": "0.00",
                "pickrate_change": "6.00",
                "banrate_change": "-17.00"
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
            "1053102"
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
                    "Damage": "Damage increases with energy: 0 - 70\/s, 99 - 120\/s, full energy - 150\/s",
                    "Casting": "Channeled",
                    "Attack Range": "18m",
                    "Special Effect": "Energy gain: Hero hit: 10\/s; Sentience hit: 15\/s; Common summons hit: 5\/s; Shield hit: 10\/s. Falloff begins 3s after not hitting an enemy, at a rate of 30\/s",
                    "Ammo Consumption": "10\/s"
                },
                "transformation_id": 0
            },
            {
                "id": 105331,
                "icon": "abilities\/1053\/105331.webp",
                "name": "Mind\u0027s Aegis",
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
                    "Duration": "8s",
                    "Special Effect": "30% Damage Reduction in Diamond form"
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
                    "Damage": "First \u0026 second hit: 50; third hit: 70; fourth hit: 80",
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
                "description": "In <Orange>Diamond Form<\/>, unleash a flying kick forward and <Debuff>knock back<\/> enemies; extra damage is dealt if they\u0027re propelled into a wall.",
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
                "description": "Seize control of an enemy\u0027s sentience—damage dealt to the <Orange>sentience<\/> cascades to the physical form and can be pierced by <Orange>Telepathic Pulse<\/>. When the sentience shatters, it unleashes extra damage on its owner.",
                "additional_fields": {
                    "Key": "E",
                    "Damage": "Deal 5 damage per direct hit. When the sentience shatters, it deals damage to the target, which is equal to 25% of the target\u0027s maximum health",
                    "Casting": "Single-cast delayed projectile",
                    "Special Effect": "When the distance between the target and its sentience is more than 15m, their linkage can be broken",
                    "Maximum Distance": "24m",
                    "Projectile Speed": "80m\/s",
                    "Sentience Health": "Target\u0027s 25% Current Health"
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
                    "Energy Cost": "3700",
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
                "description": "Emma Frost can form a mental link with Magneto and Psylocke, calling on her to create illusory projections. When together, Emma Frost will create a Mental Projection of Magneto and Psylocke, forming a Duplicate Illusion in the enemy\u0027s perspective that confuses foes by moving and casting abilities on its own.",
                "additional_fields": {
                    "Key": "Passive",
                    "Team-Up Bonus": "+100 Max Health"
                },
                "transformation_id": 0
            }
        ],
        "meta": [
            {
                "date": "1751500800",
                "rank": "12.00",
                "mover_shaker": "38.00",
                "rank_calc": "4.05",
                "mover_shaker_calc": "-0.91",
                "ZScore": "-1.26",
                "winrate": "50.02",
                "pickrate": "28.99",
                "banrate": "13.01",
                "usage_trend": "Downward",
                "winrate_prev": "49.97",
                "pickrate_prev": "30.21",
                "banrate_prev": "10.13",
                "winrate_change": "0.00",
                "pickrate_change": "-4.00",
                "banrate_change": "28.00"
            },
            {
                "date": "1750896000",
                "rank": "13.00",
                "mover_shaker": "38.00",
                "rank_calc": "4.07",
                "mover_shaker_calc": "-2.00",
                "ZScore": "-2.32",
                "winrate": "49.97",
                "pickrate": "30.21",
                "banrate": "10.13",
                "usage_trend": "Downward",
                "winrate_prev": "50.22",
                "pickrate_prev": "30.74",
                "banrate_prev": "6.24",
                "winrate_change": "0.00",
                "pickrate_change": "-2.00",
                "banrate_change": "62.00"
            }
        ]
    }
]