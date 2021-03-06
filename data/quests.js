$( function() {

  var quests = [
    {
      name: "City Sewers",
      time: 300,
      power: 100,
      key: "Wooden",
      bag: "Treasure",
      item: "Shiny Gem",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 100, xp: 16 },
          boss: { power: 125, xp: 20 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 110, xp: 16 },
          boss: { power: 150, xp: 24 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 120, xp: 18 },
          boss: { power: 175, xp: 26 }
        },
        {
          name: "IV",
          loot: { min: 3, max: 6 },
          base: { power: 130, xp: 20 },
          boss: { power: 200, xp: 30 }
        },
        {
          name: "V",
          loot: { min: 3, max: 7 },
          base: { power: 140, xp: 22 },
          boss: { power: 300, xp: 46 }
        },
        {
          name: "C",
          loot: { min: 4, max: 8 },
          base: { power: 150, xp: 24 }
        }
        ]
    },
    {
      name: "Forbidden Meadow",
      time: 600,
      power: 300,
      key: "Wooden",
      bag: "Treasure",
      item: "Elven Dew",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 220, xp: 36 },
          boss: { power: 275, xp: 44 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 245, xp: 38 },
          boss: { power: 335, xp: 55 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 265, xp: 42 },
          boss: { power: 390, xp: 60 }
        },
        {
          name: "IV",
          loot: { min: 3, max: 6 },
          base: { power: 290, xp: 46 },
          boss: { power: 445, xp: 70 }
        },
        {
          name: "V",
          loot: { min: 3, max: 7 },
          base: { power: 310, xp: 50 },
          boss: { power: 665, xp: 105 }
        },
        {
          name: "C",
          loot: { min: 4, max: 8 },
          base: { power: 335, xp: 55 }
        }
        ]
    },
    {
      name: "Gloomy Manor",
      time: 1200,
      power: 700,
      key: "Wooden",
      bag: "Treasure",
      item: "Viper Essence",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 635, xp: 75 },
          boss: { power: 795, xp: 90 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 700, xp: 80 },
          boss: { power: 955, xp: 110 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 765, xp: 90 },
          boss: { power: 1100, xp: 130 }
        },
        {
          name: "IV",
          loot: { min: 3, max: 6 },
          base: { power: 825, xp: 95 },
          boss: { power: 1250, xp: 145 }
        },
        {
          name: "V",
          loot: { min: 3, max: 7 },
          base: { power: 890, xp: 105 },
          boss: { power: 1900, xp: 220 }
        },
        {
          name: "C",
          loot: { min: 4, max: 8 },
          base: { power: 925, xp: 110 }
        }
        ]
    },
    {
      name: "Haunted Forest",
      time: 1800,
      power: 1200,
      key: "Wooden",
      bag: "Treasure",
      item: "Iron Wood",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 1100, xp: 455 },
          boss: { power: 1350, xp: 570 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 1200, xp: 505 },
          boss: { power: 1650, xp: 685 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 1300, xp: 550 },
          boss: { power: 1900, xp: 800 }
        },
        {
          name: "IV",
          loot: { min: 3, max: 6 },
          base: { power: 1400, xp: 595 },
          boss: { power: 2200, xp: 915 }
        },
        {
          name: "V",
          loot: { min: 3, max: 7 },
          base: { power: 1550, xp: 640 },
          boss: { power: 3300, xp: 1350 }
        },
        {
          name: "C",
          loot: { min: 4, max: 8 },
          base: { power: 1650, xp: 685 }
        }
        ]
    },
    {
      name: "Catacombs",
      time: 1800,
      power: 2800,
      key: "Leather",
      bag: "Treasure",
      item: "Burning Ember",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 1750, xp: 1100 },
          boss: { power: 2200, xp: 1350 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 1900, xp: 1200 },
          boss: { power: 2600, xp: 1600 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 2100, xp: 1300 },
          boss: { power: 3050, xp: 1900 }
        },
        {
          name: "IV",
          loot: { min: 2, max: 6 },
          base: { power: 2250, xp: 1400 },
          boss: { power: 3500, xp: 2150 }
        },
        {
          name: "V",
          loot: { min: 3, max: 6 },
          base: { power: 2450, xp: 1500 },
          boss: { power: 5250, xp: 3250 }
        },
        {
          name: "C",
          loot: { min: 3, max: 7 },
          base: { power: 2600, xp: 1600 }
        }
        ]
    },
    {
      name: "Mountain Hideout",
      time: 2400,
      power: 3600,
      key: "Leather",
      bag: "Treasure",
      item: "Rainbow Dust",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 2250, xp: 2100 },
          boss: { power: 2800, xp: 2650 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 2500, xp: 2300 },
          boss: { power: 3400, xp: 3150 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 2700, xp: 2500 },
          boss: { power: 3950, xp: 3700 }
        },
        {
          name: "IV",
          loot: { min: 2, max: 6 },
          base: { power: 2950, xp: 2750 },
          boss: { power: 4500, xp: 4200 }
        },
        {
          name: "V",
          loot: { min: 3, max: 6 },
          base: { power: 3150, xp: 2950 },
          boss: { power: 6750, xp: 6300 }
        },
        {
          name: "C",
          loot: { min: 3, max: 7 },
          base: { power: 3400, xp: 3150 }
        }
        ]
    },
    {
      name: "Ancient Ruins",
      time: 3000,
      power: 4800,
      key: "Leather",
      bag: "Treasure",
      item: "Moon Shard",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 2800, xp: 4300 },
          boss: { power: 3450, xp: 5350 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 3050, xp: 4700 },
          boss: { power: 4150, xp: 6400 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 3350, xp: 5150 },
          boss: { power: 4850, xp: 7500 }
        },
        {
          name: "IV",
          loot: { min: 2, max: 6 },
          base: { power: 3600, xp: 5550 },
          boss: { power: 5550, xp: 8550 }
        },
        {
          name: "V",
          loot: { min: 3, max: 6 },
          base: { power: 3900, xp: 6000 },
          boss: { power: 8350, xp: 13000 }
        },
        {
          name: "C",
          loot: { min: 3, max: 7 },
          base: { power: 4150, xp: 6400 }
        }
        ]
    },
    {
      name: "Pirate's Cove",
      time: 3600,
      power: 5600,
      key: "Leather",
      bag: "Treasure",
      item: "Iron Carapace",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 3 },
          base: { power: 3500, xp: 7500 },
          boss: { power: 4350, xp: 9400 }
        },
        {
          name: "II",
          loot: { min: 2, max: 4 },
          base: { power: 3850, xp: 8250 },
          boss: { power: 5250, xp: 11500 }
        },
        {
          name: "III",
          loot: { min: 2, max: 5 },
          base: { power: 4200, xp: 9000 },
          boss: { power: 6100, xp: 13000 }
        },
        {
          name: "IV",
          loot: { min: 2, max: 6 },
          base: { power: 4550, xp: 9750 },
          boss: { power: 7000, xp: 15000 }
        },
        {
          name: "V",
          loot: { min: 3, max: 6 },
          base: { power: 4900, xp: 10500 },
          boss: { power: 10500, xp: 22500 }
        },
        {
          name: "C",
          loot: { min: 3, max: 7 },
          base: { power: 5250, xp: 11500 }
        }
        ]
    },
    {
      name: "Desert of Doom",
      time: 4500,
      power: 10000,
      key: "Iron",
      bag: "Mysterious",
      item: "Wyvern Wing",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 4250, xp: 12500 },
          boss: { power: 5300, xp: 15500 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 4650, xp: 14000 },
          boss: { power: 6350, xp: 19000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 5100, xp: 15000 },
          boss: { power: 7400, xp: 22000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 5500, xp: 16500 },
          boss: { power: 8500, xp: 25000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 5950, xp: 17500 },
          boss: { power: 12500, xp: 37500 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 6350, xp: 19000 }
        }
        ]
    },
    {
      name: "Plague Lake",
      time: 5400,
      power: 12000,
      key: "Iron",
      bag: "Mysterious",
      item: "Frozen Core",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 5000, xp: 20000 },
          boss: { power: 6250, xp: 25000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 5500, xp: 22000 },
          boss: { power: 7500, xp: 30500 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 6000, xp: 24000 },
          boss: { power: 8750, xp: 35500 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 6500, xp: 26000 },
          boss: { power: 10000, xp: 40500 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 7000, xp: 28000 },
          boss: { power: 15000, xp: 60500 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 7500, xp: 30500 }
        }
        ]
    },
    {
      name: "Dead River",
      time: 6000,
      power: 14500,
      key: "Iron",
      bag: "Mysterious",
      item: "Royal Bone",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 6150, xp: 33000 },
          boss: { power: 7700, xp: 41500 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 6800, xp: 36500 },
          boss: { power: 9250, xp: 49500 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 7400, xp: 40000 },
          boss: { power: 11000, xp: 58000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 8000, xp: 43000 },
          boss: { power: 12500, xp: 66500 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 8650, xp: 46500 },
          boss: { power: 18500, xp: 99500 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 9250, xp: 49500 }
        }
        ]
    },
    {
      name: "Unholy Land",
      time: 6600,
      power: 17000,
      key: "Iron",
      bag: "Mysterious",
      item: "Liquid Fire",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 7150, xp: 56500 },
          boss: { power: 8950, xp: 70500 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 7850, xp: 62000 },
          boss: { power: 10500, xp: 84500 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 8600, xp: 68000 },
          boss: { power: 12500, xp: 99000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 9300, xp: 73500 },
          boss: { power: 14500, xp: 115000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 10000, xp: 79000 },
          boss: { power: 21500, xp: 170000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 10500, xp: 84500 }
        }
        ]
    },
    {
      name: "Orcish Valley",
      time: 7200,
      power: 29000,
      key: "Gold",
      bag: "Mysterious",
      item: "Yggdrasil Leaf",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 8800, xp: 90000 },
          boss: { power: 11000, xp: 110000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 9650, xp: 99000 },
          boss: { power: 13000, xp: 135000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 10500, xp: 110000 },
          boss: { power: 15500, xp: 155000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 11500, xp: 115000 },
          boss: { power: 17500, xp: 180000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 12500, xp: 125000 },
          boss: { power: 26500, xp: 270000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 13000, xp: 135000 }
        }
        ]
    },
    {
      name: "Old Tower",
      time: 8100,
      power: 32000,
      key: "Gold",
      bag: "Mysterious",
      item: "Silver Steel",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 10000, xp: 140000 },
          boss: { power: 12500, xp: 175000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 11000, xp: 150000 },
          boss: { power: 15000, xp: 210000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 12000, xp: 165000 },
          boss: { power: 17500, xp: 240000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 13000, xp: 180000 },
          boss: { power: 20000, xp: 275000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 14000, xp: 195000 },
          boss: { power: 30000, xp: 415000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 15000, xp: 210000 }
        }
        ]
    },
    {
      name: "Lost Labyrinth",
      time: 9000,
      power: 38500,
      key: "Gold",
      bag: "Mysterious",
      item: "Phoenix Feather",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 12000, xp: 215000 },
          boss: { power: 15000, xp: 270000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 13000, xp: 235000 },
          boss: { power: 18000, xp: 325000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 14500, xp: 265000 },
          boss: { power: 21000, xp: 380000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 15500, xp: 280000 },
          boss: { power: 24000, xp: 430000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 16500, xp: 300000 },
          boss: { power: 36000, xp: 645000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 18000, xp: 325000 }
        }
        ]
    },
    {
      name: "Heretic Temple",
      time: 9900,
      power: 45000,
      key: "Gold",
      bag: "Mysterious",
      item: "Golden Thread",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 2 },
          base: { power: 14000, xp: 330000 },
          boss: { power: 17500, xp: 410000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 3 },
          base: { power: 15500, xp: 360000 },
          boss: { power: 21000, xp: 495000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 4 },
          base: { power: 16500, xp: 395000 },
          boss: { power: 24500, xp: 575000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 5 },
          base: { power: 18000, xp: 430000 },
          boss: { power: 28000, xp: 660000 }
        },
        {
          name: "V",
          loot: { min: 2, max: 5 },
          base: { power: 19500, xp: 460000 },
          boss: { power: 41500, xp: 985000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 6 },
          base: { power: 21000, xp: 495000 }
        }
        ]
    },
    {
      name: "Hellish Abyss",
      time: 10800,
      power: 70000,
      key: "Magic",
      bag: "Wondrous",
      item: "Demon Heart",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 17500, xp: 625000 },
          boss: { power: 22000, xp: 780000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 19000, xp: 690000 },
          boss: { power: 26000, xp: 940000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 21000, xp: 750000 },
          boss: { power: 30500, xp: 1100000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 22500, xp: 815000 },
          boss: { power: 35000, xp: 1250000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 24500, xp: 875000 },
          boss: { power: 52500, xp: 1900000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 26000, xp: 940000 }
        }
        ]
    },
    {
      name: "Pyramid",
      time: 12600,
      power: 84000,
      key: "Magic",
      bag: "Wondrous",
      item: "Dark Energy",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 21000, xp: 1000000 },
          boss: { power: 26000, xp: 1250000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 23000, xp: 1100000 },
          boss: { power: 31500, xp: 1500000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 25000, xp: 1200000 },
          boss: { power: 36500, xp: 1750000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 27000, xp: 1300000 },
          boss: { power: 41500, xp: 2000000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 29000, xp: 1400000 },
          boss: { power: 62500, xp: 3000000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 31500, xp: 1500000 }
        }
        ]
    },
    {
      name: "Floating Island",
      time: 14400,
      power: 100000,
      key: "Magic",
      bag: "Wondrous",
      item: "Sun Tear",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 25000, xp: 1550000 },
          boss: { power: 31000, xp: 1950000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 27500, xp: 1700000 },
          boss: { power: 37500, xp: 2300000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 30000, xp: 1850000 },
          boss: { power: 43500, xp: 2700000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 32500, xp: 2000000 },
          boss: { power: 49500, xp: 3100000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 35000, xp: 2150000 },
          boss: { power: 74500, xp: 4650000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 37500, xp: 2300000 }
        }
        ]
    },
    {
      name: "Dragon's Nest",
      time: 16200,
      power: 120000,
      key: "Magic",
      bag: "Wondrous",
      item: "Dragon Scale",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 30000, xp: 2450000 },
          boss: { power: 37500, xp: 3050000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 33000, xp: 2650000 },
          boss: { power: 45000, xp: 3650000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 36000, xp: 2900000 },
          boss: { power: 52500, xp: 4250000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 39000, xp: 3150000 },
          boss: { power: 59500, xp: 4850000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 42000, xp: 3400000 },
          boss: { power: 89500, xp: 7300000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 45000, xp: 3650000 }
        }
        ]
    },
    {
      name: "Chaos Gate",
      time: 18000,
      power: 160000,
      key: "Magic",
      bag: "Wondrous",
      item: "Adamantium",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 40000, xp: 4250000 },
          boss: { power: 50500, xp: 5300000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 44500, xp: 4700000 },
          boss: { power: 60500, xp: 6400000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 48500, xp: 5100000 },
          boss: { power: 70500, xp: 7450000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 52500, xp: 5550000 },
          boss: { power: 80500, xp: 8500000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 56500, xp: 5950000 },
          boss: { power: 120000, xp: 12750000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 60500, xp: 6400000 }
        }
        ]
    },
    {
      name: "Uncharted Jungle",
      time: 32400,
      power: 200000,
      key: "Dwarvish",
      bag: "Wondrous",
      item: "Ancient Essence",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 42000, xp: 6050000 },
          boss: { power: 53000, xp: 7550000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 46500, xp: 6650000 },
          boss: { power: 63500, xp: 9050000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 50500, xp: 7250000 },
          boss: { power: 74000, xp: 10550000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 55000, xp: 7850000 },
          boss: { power: 84500, xp: 12050000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 59000, xp: 8450000 },
          boss: { power: 125000, xp: 18100000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 63500, xp: 9050000 }
        }
        ]
    },
    {
      name: "Ice Palace",
      time: 36000,
      power: 250000,
      key: "Dwarvish",
      bag: "Wondrous",
      item: "Frostfire Crystal",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 52500, xp: 7950000 },
          boss: { power: 65500, xp: 9950000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 58000, xp: 8750000 },
          boss: { power: 79000, xp: 11900000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 63000, xp: 9550000 },
          boss: { power: 92000, xp: 13900000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 68500, xp: 10350000 },
          boss: { power: 105000, xp: 15900000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 73500, xp: 11150000 },
          boss: { power: 160000, xp: 23850000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 79000, xp: 11900000 }
        }
        ]
    },
    {
      name: "Ring of Fire",
      time: 43200,
      power: 300000,
      key: "Dwarvish",
      bag: "Wondrous",
      item: "Obsidian Coral",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 62500, xp: 10100000 },
          boss: { power: 78000, xp: 12600000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 69000, xp: 11100000 },
          boss: { power: 94000, xp: 15100000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 75000, xp: 12100000 },
          boss: { power: 110000, xp: 17650000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 81500, xp: 13100000 },
          boss: { power: 125000, xp: 20150000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 87500, xp: 14100000 },
          boss: { power: 190000, xp: 30250000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 94000, xp: 15100000 }
        }
        ]
    },
    {
      name: "Tainted Grove",
      time: 259200,
      power: 500000,
      key: "Dwarvish",
      bag: "Wondrous",
      item: "Shard Of Gaia",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 70000, xp: 12200000 },
          boss: { power: 85000, xp: 15250000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 77500, xp: 13400000 },
          boss: { power: 105000, xp: 18200000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 84500, xp: 14600000 },
          boss: { power: 125000, xp: 21350000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 91000, xp: 15800000 },
          boss: { power: 145000, xp: 24400000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 98000, xp: 17000000 },
          boss: { power: 165000, xp: 36600000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 105000, xp: 18200000 }
        }
        ]
    },
    {
      name: "Primal Lair",
      time: 604800,
      power: 750000,
      key: "Dwarvish",
      bag: "Wondrous",
      item: "Primal Horn",
      origin: "Inn",
      tiers: [
        {
          name: "I",
          loot: { min: 1, max: 1 },
          base: { power: 100000, xp: 18200000 },
          boss: { power: 125000, xp: 22800000 }
        },
        {
          name: "II",
          loot: { min: 1, max: 2 },
          base: { power: 110000, xp: 20050000 },
          boss: { power: 150000, xp: 27360000 }
        },
        {
          name: "III",
          loot: { min: 1, max: 3 },
          base: { power: 120000, xp: 22350000 },
          boss: { power: 175000, xp: 31920000 }
        },
        {
          name: "IV",
          loot: { min: 1, max: 4 },
          base: { power: 130000, xp: 24650000 },
          boss: { power: 200000, xp: 36480000 }
        },
        {
          name: "V",
          loot: { min: 1, max: 5 },
          base: { power: 140000, xp: 26950000 },
          boss: { power: 225000, xp: 54720000 }
        },
        {
          name: "C",
          loot: { min: 2, max: 5 },
          base: { power: 150000, xp: 29250000 }
        }
        ]
    },
    {
      name: "City Raid",
      time: 7200,
      origin: "Castle",
      item: "Raid Item",
      tiers: [
        {
          name: "I",
          power: 750,
          loot: { min: 1, max: 2 },
          base: { power: 250, xp: 100 }
        },
        {
          name: "II",
          power: 35000,
          loot: { min: 3, max: 5 },
          base: { power: 10000, xp: 100000 }
        },
        {
          name: "III",
          power: 250000,
          loot: { min: 6, max: 10 },
          base: { power: 45000, xp: 2500000 }
        }
        ]
    }
  ];
  c_data.set( "quests", quests );

} );
