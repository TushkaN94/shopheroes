$( function() {
  var cache = $.cache._();

  var items = [
    {
      type: "Armor",
      name: "Cuirass",
      lv: 1,
      power: 9,
    },
    {
      type: "Armor",
      name: "Banded Mail",
      lv: 3,
      power: 38,
    },
    {
      type: "Armor",
      name: "Scale Mail",
      lv: 4,
      power: 56,
    },
    {
      type: "Armor",
      name: "Ring Mail",
      lv: 5,
      power: 76,
    },
    {
      type: "Armor",
      name: "Chainmail",
      lv: 8,
      power: 140,
    },
    {
      type: "Armor",
      name: "Half Plate",
      lv: 9,
      power: 165,
    },
    {
      type: "Armor",
      name: "Tlahuiztli",
      lv: 10,
      power: 290,
    },
    {
      type: "Armor",
      name: "Moonplate",
      lv: 10,
      power: 240,
      skill: { name: "Treasure Hunter I", q: "Flawless", m: false, m: false }
    },
    {
      type: "Armor",
      name: "Steel Cuirass",
      lv: 11,
      power: 220,
    },
    {
      type: "Armor",
      name: "Full Plate",
      lv: 14,
      power: 300,
    },
    {
      type: "Armor",
      name: "Longmail",
      lv: 17,
      power: 390,
    },
    {
      type: "Armor",
      name: "Noble Plate",
      lv: 18,
      power: 625,
      skill: { name: "Support I", q: "Flawless", m: false, m: false }
    },
    {
      type: "Armor",
      name: "Silvered Scales",
      lv: 19,
      power: 460,
    },
    {
      type: "Armor",
      name: "Arcane Guard",
      lv: 22,
      power: 550,
    },
    {
      type: "Armor",
      name: "Runic Mail",
      lv: 23,
      power: 600,
    },
    {
      type: "Armor",
      name: "Chaos Armor",
      lv: 25,
      power: 825,
      skill: { name: "Resilient I", q: "Epic", m: false, m: false }
    },
    {
      type: "Armor",
      name: "Shining Armor",
      lv: 27,
      power: 725,
    },
    {
      type: "Armor",
      name: "Valkyrie Armor",
      lv: 30,
      power: 1275,
    },
    {
      type: "Armor",
      name: "White Fullplate",
      lv: 32,
      power: 925,
    },
    {
      type: "Armor",
      name: "Eldritch Mail",
      lv: 35,
      power: 1550,
      skill: { name: "Lucky I", q: "Epic", m: false }
    },
    {
      type: "Armor",
      name: "Golden Heart",
      lv: 36,
      power: 1075,
    },
    {
      type: "Armor",
      name: "Gaia's Fortress",
      lv: 38,
      power: 1450,
      skill: { name: "Commander I", q: "Legendary", m: false }
    },
    {
      type: "Armor",
      name: "Draconic Plate",
      lv: 39,
      power: 1800,
      skill: { name: "Protector I", q: "Legendary", m: false }
    },
    {
      type: "Armor",
      name: "Twilight Cuirass",
      lv: 40,
      power: 1250,
    },
    {
      type: "Armor",
      name: "Crimson Plate",
      lv: 42,
      power: 1325,
    },
    {
      type: "Armor",
      name: "Dark Silver Armor",
      lv: 44,
      power: 1425,
    },
    {
      type: "Armor",
      name: "Earthen Mail",
      lv: 46,
      power: 1875,
      skill: { name: "Stoneskin", q: "Legendary", m: false }
    },
    {
      type: "Armor",
      name: "Hallowed Casket",
      lv: 48,
      power: 2400,
      skill: { name: "Energetic I", q: "Mythical", m: false }
    },
    {
      type: "Armor",
      name: "Oracle's Armor",
      lv: 49,
      power: 2450,
      skill: { name: "Mage Armor", q: "Epic", m: false }
    },
    {
      type: "Armor",
      name: "Black Mail",
      lv: 53,
      power: 2725,
      skill: { name: "Protector II", q: "Mythical", m: false }
    },
    {
      type: "Axes",
      name: "Hand Axe",
      lv: 2,
      power: 26,
    },
    {
      type: "Axes",
      name: "Iron Axe",
      lv: 3,
      power: 46,
    },
    {
      type: "Axes",
      name: "Broad Axe",
      lv: 4,
      power: 68,
    },
    {
      type: "Axes",
      name: "Halberd",
      lv: 5,
      power: 90,
    },
    {
      type: "Axes",
      name: "Druidic Axe",
      lv: 6,
      power: 175,
    },
    {
      type: "Axes",
      name: "Hunting Axe",
      lv: 6,
      power: 115,
    },
    {
      type: "Axes",
      name: "Pole Axe",
      lv: 9,
      power: 200,
    },
    {
      type: "Axes",
      name: "Tiamat",
      lv: 10,
      power: 290,
      skill: { name: "Energetic I", q: "Flawless", m: false }
    },
    {
      type: "Axes",
      name: "Labrys",
      lv: 12,
      power: 300,
    },
    {
      type: "Axes",
      name: "Hoe",
      lv: 13,
      power: 490,
    },
    {
      type: "Axes",
      name: "Steel Axe",
      lv: 14,
      power: 360,
    },
    {
      type: "Axes",
      name: "Hawk",
      lv: 16,
      power: 430,
    },
    {
      type: "Axes",
      name: "Lava Axe",
      lv: 20,
      power: 575,
    },
    {
      type: "Axes",
      name: "Reaper",
      lv: 22,
      power: 1000,
    },
    {
      type: "Axes",
      name: "Berserker's Axe",
      lv: 23,
      power: 1075,
      skill: { name: "Cleave", q: "Flawless", m: false }
    },
    {
      type: "Axes",
      name: "Bone Reaver",
      lv: 24,
      power: 750,
    },
    {
      type: "Axes",
      name: "Sharp Tusk",
      lv: 25,
      power: 1000,
      skill: { name: "Resilient I", q: "Epic", m: false }
    },
    {
      type: "Axes",
      name: "Itztopilli",
      lv: 26,
      power: 1250,
    },
    {
      type: "Axes",
      name: "Crystal Asunder",
      lv: 28,
      power: 925,
    },
    {
      type: "Axes",
      name: "Shining Axe",
      lv: 31,
      power: 1050,
    },
    {
      type: "Axes",
      name: "Widow Maker",
      lv: 32,
      power: 1650,
      skill: { name: "Amazon I", q: "Epic", m: false }
    },
    {
      type: "Axes",
      name: "Nocturne Axe",
      lv: 33,
      power: 1150,
    },
    {
      type: "Axes",
      name: "Storm Splitter",
      lv: 36,
      power: 1300,
    },
    {
      type: "Axes",
      name: "Infernal Rage",
      lv: 38,
      power: 1750,
      skill: { name: "Bros-in-arms I", q: "Legendary", m: false }
    },
    {
      type: "Axes",
      name: "Eagle",
      lv: 39,
      power: 1450,
    },
    {
      type: "Axes",
      name: "Ragnarok's Edge",
      lv: 40,
      power: 2250,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Axes",
      name: "Retribution",
      lv: 42,
      power: 1600,
    },
    {
      type: "Axes",
      name: "Wyvern Axe",
      lv: 45,
      power: 1750,
    },
    {
      type: "Axes",
      name: "Heartstopper Axe",
      lv: 47,
      power: 2800,
      skill: { name: "Energetic II", q: "Mythical", m: false }
    },
    {
      type: "Axes",
      name: "Frenzied Axe",
      lv: 48,
      power: 2400,
      skill: { name: "Berserker", q: "Mythical", m: false }
    },
    {
      type: "Axes",
      name: "Umbral Axe",
      lv: 50,
      power: 3025,
      skill: { name: "Shadowstep", q: "Legendary", m: false }
    },
    {
      type: "Axes",
      name: "Forseti's Axe",
      lv: 53,
      power: 3275,
      skill: { name: "Bros-in-arms II", q: "Mythical", m: false }
    },
    {
      type: "Boots",
      name: "Heavy Boots",
      lv: 1,
      power: 9,
    },
    {
      type: "Boots",
      name: "Rider's Boots",
      lv: 3,
      power: 38,
    },
    {
      type: "Boots",
      name: "Chain Greaves",
      lv: 4,
      power: 56,
    },
    {
      type: "Boots",
      name: "Plated Boots",
      lv: 6,
      power: 96,
    },
    {
      type: "Boots",
      name: "Traveling Boots",
      lv: 8,
      power: 140,
    },
    {
      type: "Boots",
      name: "Moon Boots",
      lv: 9,
      power: 210,
      skill: { name: "Energetic I", q: "Flawless", m: false }
    },
    {
      type: "Boots",
      name: "Red Boots",
      lv: 10,
      power: 190,
    },
    {
      type: "Boots",
      name: "Lion Boots",
      lv: 12,
      power: 370,
      skill: { name: "Leader I", q: "Legendary", m: false }
    },
    {
      type: "Boots",
      name: "Explorer Boots",
      lv: 13,
      power: 270,
    },
    {
      type: "Boots",
      name: "Valkyrie Boots",
      lv: 14,
      power: 450,
    },
    {
      type: "Boots",
      name: "Sabaton",
      lv: 15,
      power: 330,
    },
    {
      type: "Boots",
      name: "Warrior's Greaves",
      lv: 18,
      power: 420,
    },
    {
      type: "Boots",
      name: "Knight Riders",
      lv: 21,
      power: 525,
    },
    {
      type: "Boots",
      name: "Adventurer's Boots",
      lv: 24,
      power: 950,
    },
    {
      type: "Boots",
      name: "Silvered Greaves",
      lv: 25,
      power: 650,
    },
    {
      type: "Boots",
      name: "Flame Greaves",
      lv: 27,
      power: 925,
      skill: { name: "Fireball", q: "Epic", m: false }
    },
    {
      type: "Boots",
      name: "Lord's Boots",
      lv: 29,
      power: 800,
    },
    {
      type: "Boots",
      name: "Magic Riders",
      lv: 30,
      power: 1275,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Boots",
      name: "Frost Sabatons",
      lv: 32,
      power: 925,
    },
    {
      type: "Boots",
      name: "Hallowed Stomper",
      lv: 33,
      power: 1450,
    },
    {
      type: "Boots",
      name: "Earthshakers",
      lv: 34,
      power: 1000,
    },
    {
      type: "Boots",
      name: "King's Boots",
      lv: 37,
      power: 1125,
    },
    {
      type: "Boots",
      name: "Skull Stompers",
      lv: 38,
      power: 1450,
      skill: { name: "Crush", q: "Legendary", m: false }
    },
    {
      type: "Boots",
      name: "Draconic Greaves",
      lv: 39,
      power: 1800,
      skill: { name: "Protector I", q: "Legendary", m: false }
    },
    {
      type: "Boots",
      name: "Adamantium Boots",
      lv: 40,
      power: 1250,
    },
    {
      type: "Boots",
      name: "Royal Greaves",
      lv: 43,
      power: 1375,
    },
    {
      type: "Boots",
      name: "Azure Boots",
      lv: 45,
      power: 1450,
    },
    {
      type: "Boots",
      name: "Obsidian Greaves",
      lv: 47,
      power: 1950,
      skill: { name: "Commander II", q: "Legendary", m: false }
    },
    {
      type: "Boots",
      name: "Titan's Feet",
      lv: 50,
      power: 2525,
      skill: { name: "Crush", q: "Mythical", m: false }
    },
    {
      type: "Boots",
      name: "Wildling Boots",
      lv: 52,
      power: 2675,
      skill: { name: "Detect Secrets", q: "Mythical", m: false }
    },
    {
      type: "Bows",
      name: "Short Bow",
      lv: 2,
      power: 26,
    },
    {
      type: "Bows",
      name: "Long Bow",
      lv: 3,
      power: 46,
    },
    {
      type: "Bows",
      name: "Faery's String",
      lv: 5,
      power: 90,
    },
    {
      type: "Bows",
      name: "Double String",
      lv: 7,
      power: 140,
    },
    {
      type: "Bows",
      name: "Falcon Eye",
      lv: 8,
      power: 215,
      skill: { name: "Energetic I", q: "Flawless", m: false }
    },
    {
      type: "Bows",
      name: "Composite Bow",
      lv: 9,
      power: 200,
    },
    {
      type: "Bows",
      name: "Crossbow",
      lv: 11,
      power: 260,
    },
    {
      type: "Bows",
      name: "Hallowed Striker",
      lv: 13,
      power: 490,
    },
    {
      type: "Bows",
      name: "Recurved Bow",
      lv: 14,
      power: 360,
    },
    {
      type: "Bows",
      name: "Heavy Crossbow",
      lv: 17,
      power: 470,
    },
    {
      type: "Bows",
      name: "Self-Loader",
      lv: 18,
      power: 775,
      skill: { name: "Lucky I", q: "Flawless", m: false }
    },
    {
      type: "Bows",
      name: "Forester",
      lv: 20,
      power: 575,
    },
    {
      type: "Bows",
      name: "Eagle Eye",
      lv: 21,
      power: 775,
      skill: { name: "Fastidious I", q: "Epic", m: false }
    },
    {
      type: "Bows",
      name: "Transfixer",
      lv: 23,
      power: 700,
    },
    {
      type: "Bows",
      name: "Silent Arbalest",
      lv: 25,
      power: 800,
    },
    {
      type: "Bows",
      name: "Wind Striker",
      lv: 27,
      power: 875,
    },
    {
      type: "Bows",
      name: "Bow Of Light",
      lv: 29,
      power: 975,
    },
    {
      type: "Bows",
      name: "Valkyrie's Touch",
      lv: 30,
      power: 1525,
    },
    {
      type: "Bows",
      name: "Spider",
      lv: 31,
      power: 1050,
    },
    {
      type: "Bows",
      name: "Chimera Wings",
      lv: 34,
      power: 1200,
    },
    {
      type: "Bows",
      name: "Evelyn",
      lv: 35,
      power: 1875,
      skill: { name: "Treasure Hunter I", q: "Epic", m: false }
    },
    {
      type: "Bows",
      name: "Dragon Eye",
      lv: 37,
      power: 1675,
      skill: { name: "Supplier I", q: "Legendary", m: false }
    },
    {
      type: "Bows",
      name: "Lovestruck",
      lv: 38,
      power: 2100,
    },
    {
      type: "Bows",
      name: "Griffin Wings",
      lv: 38,
      power: 1400,
    },
    {
      type: "Bows",
      name: "Adamantium Crossbow",
      lv: 39,
      power: 2175,
      skill: { name: "Support I", q: "Legendary", m: false }
    },
    {
      type: "Bows",
      name: "Twilight Shot",
      lv: 40,
      power: 1500,
    },
    {
      type: "Bows",
      name: "Elven Bow",
      lv: 43,
      power: 2050,
      skill: { name: "Detect Secrets", q: "Mythical", m: false }
    },
    {
      type: "Bows",
      name: "Serpentshooter",
      lv: 44,
      power: 1700,
    },
    {
      type: "Bows",
      name: "Wind Piercer",
      lv: 48,
      power: 2875,
      skill: { name: "Gangster II", q: "Legendary", m: false }
    },
    {
      type: "Bows",
      name: "Lycan Slayer",
      lv: 50,
      power: 3025,
      skill: { name: "Detect Secrets", q: "Mythical", m: false }
    },
    {
      type: "Bows",
      name: "Artemis' Bow",
      lv: 54,
      power: 3375,
      skill: { name: "Resourceful II", q: "Mythical", m: false }
    },
    {
      type: "Bracers",
      name: "Leather Bracers",
      lv: 1,
      power: 9,
    },
    {
      type: "Bracers",
      name: "Gloves",
      lv: 2,
      power: 22,
    },
    {
      type: "Bracers",
      name: "Wrist Guards",
      lv: 3,
      power: 38,
    },
    {
      type: "Bracers",
      name: "Padded Gloves",
      lv: 5,
      power: 76,
    },
    {
      type: "Bracers",
      name: "Mystic Gloves",
      lv: 6,
      power: 218,
    },
    {
      type: "Bracers",
      name: "Fur Gloves",
      lv: 7,
      power: 120,
    },
    {
      type: "Bracers",
      name: "Venomous Hands",
      lv: 9,
      power: 210,
      skill: { name: "Backstab", q: "Flawless", m: false }
    },
    {
      type: "Bracers",
      name: "Woven Bracers",
      lv: 10,
      power: 190,
    },
    {
      type: "Bracers",
      name: "Dexterous Gloves",
      lv: 12,
      power: 245,
    },
    {
      type: "Bracers",
      name: "Elemental Bracers",
      lv: 14,
      power: 300,
    },
    {
      type: "Bracers",
      name: "Wisdom Gloves",
      lv: 14,
      power: 450,
    },
    {
      type: "Bracers",
      name: "Grandmaster Gloves",
      lv: 15,
      power: 420,
      skill: { name: "Wise I", q: "Epic", m: false }
    },
    {
      type: "Bracers",
      name: "Flaming Hands",
      lv: 16,
      power: 360,
    },
    {
      type: "Bracers",
      name: "Shadowed Gloves",
      lv: 18,
      power: 625,
      skill: { name: "Gangster I", q: "Flawless", m: false }
    },
    {
      type: "Bracers",
      name: "Royal Bracers",
      lv: 20,
      power: 490,
    },
    {
      type: "Bracers",
      name: "Alchemist Gloves",
      lv: 22,
      power: 550,
    },
    {
      type: "Bracers",
      name: "Mage Bracers",
      lv: 24,
      power: 625,
    },
    {
      type: "Bracers",
      name: "Sorcerer's Bracers",
      lv: 26,
      power: 700,
    },
    {
      type: "Bracers",
      name: "Ehecatl's Gloves",
      lv: 28,
      power: 1150,
    },
    {
      type: "Bracers",
      name: "Shield Bracers",
      lv: 30,
      power: 850,
    },
    {
      type: "Bracers",
      name: "Santa's Gloves",
      lv: 32,
      power: 1375,
    },
    {
      type: "Bracers",
      name: "Angel Gloves",
      lv: 35,
      power: 1050,
    },
    {
      type: "Bracers",
      name: "Freezing Bracers",
      lv: 36,
      power: 1625,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Bracers",
      name: "Runic Bracers",
      lv: 37,
      power: 1125,
    },
    {
      type: "Bracers",
      name: "Nightstalker Gloves",
      lv: 38,
      power: 1450,
      skill: { name: "Lucky I", q: "Legendary", m: false }
    },
    {
      type: "Bracers",
      name: "Death Grip",
      lv: 39,
      power: 1800,
      skill: { name: "Amazon I", q: "Legendary", m: false }
    },
    {
      type: "Bracers",
      name: "Midas' Gloves",
      lv: 40,
      power: 1875,
      skill: { name: "Support II", q: "Legendary", m: false }
    },
    {
      type: "Bracers",
      name: "Cindari Gloves",
      lv: 41,
      power: 1300,
    },
    {
      type: "Bracers",
      name: "Ogre Bracers",
      lv: 43,
      power: 1375,
    },
    {
      type: "Bracers",
      name: "Frostfire Gloves",
      lv: 45,
      power: 1825,
      skill: { name: "Cone-of-cold", q: "Legendary", m: false }
    },
    {
      type: "Bracers",
      name: "Starry Gloves",
      lv: 46,
      power: 2250,
      skill: { name: "Magic Find", q: "Mythical", m: false }
    },
    {
      type: "Bracers",
      name: "Archangel Gloves",
      lv: 49,
      power: 2450,
      skill: { name: "Revive II", q: "Mythical", m: false }
    },
    {
      type: "Bracers",
      name: "Nether Gloves",
      lv: 52,
      power: 2675,
      skill: { name: "Lucky II", q: "Mythical", m: false }
    },
    {
      type: "Clothes",
      name: "Tunic",
      lv: 1,
      power: 10,
    },
    {
      type: "Clothes",
      name: "Cloak",
      lv: 2,
      power: 22,
    },
    {
      type: "Clothes",
      name: "Mantle",
      lv: 4,
      power: 56,
    },
    {
      type: "Clothes",
      name: "Red Tunic",
      lv: 5,
      power: 76,
    },
    {
      type: "Clothes",
      name: "Robe",
      lv: 7,
      power: 120,
    },
    {
      type: "Clothes",
      name: "Doublet",
      lv: 9,
      power: 165,
    },
    {
      type: "Clothes",
      name: "Apprentice Robes",
      lv: 11,
      power: 220,
    },
    {
      type: "Clothes",
      name: "Ice Cloak",
      lv: 13,
      power: 340,
      skill: { name: "Cone-of-cold", q: "Epic", m: false }
    },
    {
      type: "Clothes",
      name: "Magician's Cloak",
      lv: 15,
      power: 330,
    },
    {
      type: "Clothes",
      name: "Silk Robe",
      lv: 17,
      power: 390,
    },
    {
      type: "Clothes",
      name: "Heart Robe",
      lv: 18,
      power: 625,
    },
    {
      type: "Clothes",
      name: "Mage Robe",
      lv: 19,
      power: 675,
      skill: { name: "Arch Wizard I", q: "Flawless", m: false }
    },
    {
      type: "Clothes",
      name: "Sacred Tunic",
      lv: 21,
      power: 525,
    },
    {
      type: "Clothes",
      name: "Imperial Mantle",
      lv: 25,
      power: 650,
    },
    {
      type: "Clothes",
      name: "Gaia's Mantle",
      lv: 27,
      power: 1100,
    },
    {
      type: "Clothes",
      name: "Stealth Apparel",
      lv: 28,
      power: 775,
    },
    {
      type: "Clothes",
      name: "Storm Apparel",
      lv: 29,
      power: 1000,
      skill: { name: "Wise I", q: "Legendary", m: false }
    },
    {
      type: "Clothes",
      name: "Night Walker",
      lv: 31,
      power: 875,
    },
    {
      type: "Clothes",
      name: "Sorcerer Robe",
      lv: 32,
      power: 1375,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Clothes",
      name: "Nightmare Cape",
      lv: 33,
      power: 1450,
      skill: { name: "Shadowstep", q: "Legendary", m: false }
    },
    {
      type: "Clothes",
      name: "Sage's Robe",
      lv: 34,
      power: 1000,
    },
    {
      type: "Clothes",
      name: "Shimmering Robe",
      lv: 36,
      power: 1075,
    },
    {
      type: "Clothes",
      name: "Plasmic Robe",
      lv: 38,
      power: 1450,
      skill: { name: "Healer I", q: "Legendary", m: false }
    },
    {
      type: "Clothes",
      name: "Archwizard Robe",
      lv: 39,
      power: 1800,
      skill: { name: "Arch Wizard I", q: "Legendary", m: false }
    },
    {
      type: "Clothes",
      name: "Twilight Robe",
      lv: 40,
      power: 1250,
    },
    {
      type: "Clothes",
      name: "King's Mantle",
      lv: 43,
      power: 1375,
    },
    {
      type: "Clothes",
      name: "Twilight Doublet",
      lv: 45,
      power: 1450,
    },
    {
      type: "Clothes",
      name: "Patriot's Jacket",
      lv: 46,
      power: 2250,
      skill: { name: "Amazon III", q: "Mythical", m: false }
    },
    {
      type: "Clothes",
      name: "Mage Doublet",
      lv: 47,
      power: 1950,
      skill: { name: "Arch Wizard II", q: "Epic", m: false }
    },
    {
      type: "Clothes",
      name: "Holy Tunic",
      lv: 50,
      power: 2525,
      skill: { name: "Aura of Protection", q: "Mythical", m: false }
    },
    {
      type: "Clothes",
      name: "Sunrise Robe",
      lv: 52,
      power: 2675,
      skill: { name: "Arch Wizard III", q: "Mythical", m: false }
    },
    {
      type: "Daggers",
      name: "Knife",
      lv: 1,
      power: 10,
    },
    {
      type: "Daggers",
      name: "Pocket Knife",
      lv: 2,
      power: 26,
    },
    {
      type: "Daggers",
      name: "Kris",
      lv: 3,
      power: 68,
    },
    {
      type: "Daggers",
      name: "Dirk",
      lv: 3,
      power: 46,
    },
    {
      type: "Daggers",
      name: "Parrying Dagger",
      lv: 5,
      power: 90,
    },
    {
      type: "Daggers",
      name: "Stiletto",
      lv: 7,
      power: 140,
    },
    {
      type: "Daggers",
      name: "Bronze Dagger",
      lv: 8,
      power: 260,
    },
    {
      type: "Daggers",
      name: "White Dagger",
      lv: 9,
      power: 250,
      skill: { name: "Lucky I", q: "Flawless", m: false }
    },
    {
      type: "Daggers",
      name: "Broad Blade",
      lv: 10,
      power: 230,
    },
    {
      type: "Daggers",
      name: "Gutting Knife",
      lv: 12,
      power: 300,
    },
    {
      type: "Daggers",
      name: "Hunting Knife",
      lv: 13,
      power: 330,
    },
    {
      type: "Daggers",
      name: "Crimson Heart",
      lv: 15,
      power: 500,
      skill: { name: "Fastidious I", q: "Epic", m: false }
    },
    {
      type: "Daggers",
      name: "Mail Breaker",
      lv: 16,
      power: 430,
    },
    {
      type: "Daggers",
      name: "Phantom Katar",
      lv: 18,
      power: 775,
      skill: { name: "Backstab", q: "Flawless", m: false }
    },
    {
      type: "Daggers",
      name: "Switch Blade",
      lv: 20,
      power: 575,
    },
    {
      type: "Daggers",
      name: "Life Stealer",
      lv: 22,
      power: 675,
    },
    {
      type: "Daggers",
      name: "Night Shiv",
      lv: 25,
      power: 800,
    },
    {
      type: "Daggers",
      name: "Shadowripper",
      lv: 27,
      power: 875,
    },
    {
      type: "Daggers",
      name: "Wing Blade",
      lv: 30,
      power: 1025,
    },
    {
      type: "Daggers",
      name: "Dark Hand",
      lv: 35,
      power: 1250,
    },
    {
      type: "Daggers",
      name: "Betrayer",
      lv: 36,
      power: 1950,
      skill: { name: "Gangster I", q: "Epic", m: false }
    },
    {
      type: "Daggers",
      name: "Royal Dirk",
      lv: 37,
      power: 1350,
    },
    {
      type: "Daggers",
      name: "Seven Stars",
      lv: 38,
      power: 1750,
      skill: { name: "Scavenger I", q: "Legendary", m: false }
    },
    {
      type: "Daggers",
      name: "Dragon Fang",
      lv: 39,
      power: 2175,
      skill: { name: "Backstab", q: "Great", m: false }
    },
    {
      type: "Daggers",
      name: "Traitorous Blade",
      lv: 41,
      power: 1550,
    },
    {
      type: "Daggers",
      name: "Jagged Spike",
      lv: 44,
      power: 1700,
    },
    {
      type: "Daggers",
      name: "Tecpatl",
      lv: 44,
      power: 2550,
      skill: { name: "Treasure Hunter III", q: "Mythical", m: false }
    },
    {
      type: "Daggers",
      name: "Obsidian Dagger",
      lv: 46,
      power: 2250,
      skill: { name: "Riposte", q: "Mythical", m: false }
    },
    {
      type: "Daggers",
      name: "Aphotic Shiv",
      lv: 49,
      power: 2950,
      skill: { name: "Shadowstep", q: "Legendary", m: false }
    },
    {
      type: "Daggers",
      name: "Primal Dagger",
      lv: 50,
      power: 3025,
      skill: { name: "Scavenger III", q: "Mythical", m: false }
    },
    {
      type: "Daggers",
      name: "Mistilteinn",
      lv: 55,
      power: 3450,
      skill: { name: "Speed Runner II", q: "Mythical", m: false }
    },
    {
      type: "Footwear",
      name: "Sandals",
      lv: 1,
      power: 9,
    },
    {
      type: "Footwear",
      name: "Shoes",
      lv: 2,
      power: 22,
    },
    {
      type: "Footwear",
      name: "Druidic Shoes",
      lv: 3,
      power: 58,
    },
    {
      type: "Footwear",
      name: "Leather Shoes",
      lv: 4,
      power: 56,
    },
    {
      type: "Footwear",
      name: "Fur Loafers",
      lv: 6,
      power: 96,
    },
    {
      type: "Footwear",
      name: "Light Boots",
      lv: 7,
      power: 120,
    },
    {
      type: "Footwear",
      name: "Elven Boots",
      lv: 8,
      power: 175,
      skill: { name: "Wise I", q: "Flawless", m: false }
    },
    {
      type: "Footwear",
      name: "Dancer Shoes",
      lv: 9,
      power: 165,
    },
    {
      type: "Footwear",
      name: "Legion Sandals",
      lv: 11,
      power: 220,
    },
    {
      type: "Footwear",
      name: "Horned Shoes",
      lv: 14,
      power: 300,
    },
    {
      type: "Footwear",
      name: "Moon Walkers",
      lv: 15,
      power: 500,
      skill: { name: "Energetic I", q: "Flawless", m: false }
    },
    {
      type: "Footwear",
      name: "Golden Shoes",
      lv: 17,
      power: 390,
    },
    {
      type: "Footwear",
      name: "Plumed Loafers",
      lv: 21,
      power: 525,
    },
    {
      type: "Footwear",
      name: "Winged Sandals",
      lv: 22,
      power: 700,
      skill: { name: "Support I", q: "Epic", m: false }
    },
    {
      type: "Footwear",
      name: "Imperial Sandals",
      lv: 25,
      power: 650,
    },
    {
      type: "Footwear",
      name: "Patriot Boots",
      lv: 27,
      power: 1100,
      skill: { name: "Wise II", q: "Legendary", m: false }
    },
    {
      type: "Footwear",
      name: "Genji Getas",
      lv: 28,
      power: 775,
    },
    {
      type: "Footwear",
      name: "Path Finders",
      lv: 29,
      power: 1200,
      skill: { name: "Resilient I", q: "Epic", m: false }
    },
    {
      type: "Footwear",
      name: "Floating Slippers",
      lv: 31,
      power: 875,
    },
    {
      type: "Footwear",
      name: "Harvest Shoes",
      lv: 33,
      power: 1450,
    },
    {
      type: "Footwear",
      name: "Wind Walkers",
      lv: 35,
      power: 1050,
    },
    {
      type: "Footwear",
      name: "Arcane Sandals",
      lv: 37,
      power: 1125,
    },
    {
      type: "Footwear",
      name: "Planeswalkers",
      lv: 38,
      power: 1450,
      skill: { name: "Healer I", q: "Legendary", m: false }
    },
    {
      type: "Footwear",
      name: "Adamantium Shoes",
      lv: 39,
      power: 1200,
    },
    {
      type: "Footwear",
      name: "Draconic Boots",
      lv: 40,
      power: 1875,
      skill: { name: "Protector I", q: "Legendary", m: false }
    },
    {
      type: "Footwear",
      name: "Jade Shoes",
      lv: 43,
      power: 1375,
    },
    {
      type: "Footwear",
      name: "Hopping Shoes",
      lv: 44,
      power: 2125,
      skill: { name: "Lucky II", q: "Mythical", m: false }
    },
    {
      type: "Footwear",
      name: "Frostfire Shoes",
      lv: 45,
      power: 1825,
      skill: { name: "Arch Wizard II", q: "Mythical", m: false }
    },
    {
      type: "Footwear",
      name: "Noble Shoes",
      lv: 47,
      power: 1550,
    },
    {
      type: "Footwear",
      name: "Firewalkers",
      lv: 49,
      power: 2450,
      skill: { name: "Mage Armor", q: "Legendary", m: false }
    },
    {
      type: "Footwear",
      name: "Demon Trackers",
      lv: 52,
      power: 2675,
      skill: { name: "Revive III", q: "Mythical", m: false }
    },
    {
      type: "Footwear",
      name: "Ice Walkers",
      lv: 55,
      power: 2875,
      skill: { name: "Scavenger I", q: "Legendary", m: false }
    },
    {
      type: "Gauntlets",
      name: "Light Gauntlets",
      lv: 2,
      power: 22,
    },
    {
      type: "Gauntlets",
      name: "Gauntlets",
      lv: 3,
      power: 38,
    },
    {
      type: "Gauntlets",
      name: "Vambrace",
      lv: 5,
      power: 76,
    },
    {
      type: "Gauntlets",
      name: "Long Gauntlets",
      lv: 7,
      power: 120,
    },
    {
      type: "Gauntlets",
      name: "Meshed Gauntlets",
      lv: 8,
      power: 140,
    },
    {
      type: "Gauntlets",
      name: "Moonlight Gauntlets",
      lv: 10,
      power: 240,
      skill: { name: "Speed Runner I", q: "Flawless", m: false }
    },
    {
      type: "Gauntlets",
      name: "Chainmail Gauntlets",
      lv: 12,
      power: 245,
    },
    {
      type: "Gauntlets",
      name: "Jagged Gauntlets",
      lv: 15,
      power: 330,
    },
    {
      type: "Gauntlets",
      name: "Lord's Gauntlets",
      lv: 16,
      power: 360,
    },
    {
      type: "Gauntlets",
      name: "Steel Vambrace",
      lv: 19,
      power: 460,
    },
    {
      type: "Gauntlets",
      name: "Frozen Grip",
      lv: 20,
      power: 725,
      skill: { name: "Parry", q: "Flawless", m: false }
    },
    {
      type: "Gauntlets",
      name: "Silver Gauntlets",
      lv: 23,
      power: 600,
    },
    {
      type: "Gauntlets",
      name: "King's Gauntlets",
      lv: 25,
      power: 825,
      skill: { name: "Commander I", q: "Epic", m: false }
    },
    {
      type: "Gauntlets",
      name: "Bloodlust Gauntlets",
      lv: 27,
      power: 725,
    },
    {
      type: "Gauntlets",
      name: "Dark Vambrace",
      lv: 30,
      power: 850,
    },
    {
      type: "Gauntlets",
      name: "Protector Gauntlets",
      lv: 31,
      power: 875,
    },
    {
      type: "Gauntlets",
      name: "Shockers",
      lv: 32,
      power: 1375,
      skill: { name: "Resourceful I", q: "Epic", m: false }
    },
    {
      type: "Gauntlets",
      name: "Hallowed Grip",
      lv: 32,
      power: 1375,
    },
    {
      type: "Gauntlets",
      name: "Giga-Brace",
      lv: 35,
      power: 1050,
    },
    {
      type: "Gauntlets",
      name: "Fire Smashers",
      lv: 37,
      power: 1125,
    },
    {
      type: "Gauntlets",
      name: "Dragonscale Gauntlets",
      lv: 38,
      power: 1450,
      skill: { name: "Crush", q: "Legendary", m: false }
    },
    {
      type: "Gauntlets",
      name: "Twilight Fists",
      lv: 39,
      power: 1200,
    },
    {
      type: "Gauntlets",
      name: "Adamantium Fists",
      lv: 40,
      power: 1875,
      skill: { name: "Protector I", q: "Legendary", m: false }
    },
    {
      type: "Gauntlets",
      name: "Golden Gauntlets",
      lv: 43,
      power: 1375,
    },
    {
      type: "Gauntlets",
      name: "Frostfire Gauntlets",
      lv: 45,
      power: 2200,
      skill: { name: "Aura of Protection", q: "Mythical", m: false }
    },
    {
      type: "Gauntlets",
      name: "Abyssal Gauntlets",
      lv: 45,
      power: 1450,
    },
    {
      type: "Gauntlets",
      name: "Berserker Gauntlets",
      lv: 46,
      power: 1875,
      skill: { name: "Berserker", q: "Epic", m: false }
    },
    {
      type: "Gauntlets",
      name: "Valkyrie's Grip",
      lv: 47,
      power: 2325,
      skill: { name: "Resourceful II", q: "Epic", m: false }
    },
    {
      type: "Gauntlets",
      name: "Volcanic Smashers",
      lv: 49,
      power: 2450,
      skill: { name: "Speed Runner II", q: "Mythical", m: false }
    },
    {
      type: "Gauntlets",
      name: "Runic Gauntlets",
      lv: 55,
      power: 2875,
      skill: { name: "Crush", q: "Epic", m: false }
    },
    {
      type: "Guns",
      name: "Pistol",
      lv: 5,
      power: 90,
    },
    {
      type: "Guns",
      name: "Musket",
      lv: 6,
      power: 115,
    },
    {
      type: "Guns",
      name: "Arquebuse",
      lv: 7,
      power: 140,
    },
    {
      type: "Guns",
      name: "Pocket Pistol",
      lv: 8,
      power: 170,
    },
    {
      type: "Guns",
      name: "Long Musket",
      lv: 9,
      power: 200,
    },
    {
      type: "Guns",
      name: "Falconer",
      lv: 11,
      power: 260,
    },
    {
      type: "Guns",
      name: "Six Shooter",
      lv: 12,
      power: 440,
      skill: { name: "Thunderbolt", q: "Epix", m: false }
    },
    {
      type: "Guns",
      name: "Rifle",
      lv: 13,
      power: 410,
      skill: { name: "Fastidious I", q: "Flawless", m: false }
    },
    {
      type: "Guns",
      name: "Axe Pistol",
      lv: 14,
      power: 360,
    },
    {
      type: "Guns",
      name: "Flintlock",
      lv: 17,
      power: 470,
    },
    {
      type: "Guns",
      name: "Black Stock",
      lv: 18,
      power: 775,
      skill: { name: "Resilient I", q: "Flawless", m: false }
    },
    {
      type: "Guns",
      name: "Tribarrel",
      lv: 18,
      power: 775,
    },
    {
      type: "Guns",
      name: "Double Barrel",
      lv: 19,
      power: 550,
    },
    {
      type: "Guns",
      name: "Fire Gun",
      lv: 21,
      power: 625,
    },
    {
      type: "Guns",
      name: "Conqueror",
      lv: 22,
      power: 825,
      skill: { name: "Commander I", q: "Epic", m: false }
    },
    {
      type: "Guns",
      name: "War Axe Pistol",
      lv: 24,
      power: 750,
    },
    {
      type: "Guns",
      name: "Thunder Shot",
      lv: 26,
      power: 825,
    },
    {
      type: "Guns",
      name: "Candy Cane Pistol",
      lv: 27,
      power: 1325,
    },
    {
      type: "Guns",
      name: "Death Missive",
      lv: 29,
      power: 975,
    },
    {
      type: "Guns",
      name: "Heart Shooter",
      lv: 31,
      power: 1600,
    },
    {
      type: "Guns",
      name: "Rising Sun",
      lv: 33,
      power: 1150,
    },
    {
      type: "Guns",
      name: "One-Shot",
      lv: 35,
      power: 1250,
    },
    {
      type: "Guns",
      name: "Judgement",
      lv: 36,
      power: 1950,
      skill: { name: "Bros-in-arms I", q: "Epic", m: false }
    },
    {
      type: "Guns",
      name: "Bomb Launcher",
      lv: 37,
      power: 1675,
      skill: { name: "Gangster I", q: "Legendary", m: false }
    },
    {
      type: "Guns",
      name: "Solar Flare",
      lv: 38,
      power: 1400,
    },
    {
      type: "Guns",
      name: "Nordic Warfare",
      lv: 39,
      power: 2175,
      skill: { name: "Commander I", q: "Legendary", m: false }
    },
    {
      type: "Guns",
      name: "Harpoon Gun",
      lv: 41,
      power: 1550,
    },
    {
      type: "Guns",
      name: "Blaster",
      lv: 44,
      power: 1700,
    },
    {
      type: "Guns",
      name: "Pirate Pistol",
      lv: 47,
      power: 2325,
      skill: { name: "Supplier II", q: "Mythical", m: false }
    },
    {
      type: "Guns",
      name: "G.F.G.",
      lv: 48,
      power: 2875,
      skill: { name: "Fastidious II", q: "Flawless", m: false }
    },
    {
      type: "Guns",
      name: "Stake Shooter",
      lv: 49,
      power: 2950,
      skill: { name: "Revive I", q: "Mythical", m: false }
    },
    {
      type: "Guns",
      name: "Demonic Blast",
      lv: 50,
      power: 3025,
      skill: { name: "Amazon II", q: "Legendary", m: false }
    },
    {
      type: "Guns",
      name: "Dragon Fire",
      lv: 53,
      power: 3275,
      skill: { name: "Scavenger II", q: "Mythical", m: false }
    },
    {
      type: "Hats",
      name: "Circlet",
      lv: 1,
      power: 9,
    },
    {
      type: "Hats",
      name: "Hood",
      lv: 2,
      power: 22,
    },
    {
      type: "Hats",
      name: "Monk's Hat",
      lv: 3,
      power: 38,
    },
    {
      type: "Hats",
      name: "Buckle Hat",
      lv: 6,
      power: 96,
    },
    {
      type: "Hats",
      name: "Robin's Hood",
      lv: 8,
      power: 175,
      skill: { name: "Treasure Hunter I", q: "Flawless", m: false }
    },
    {
      type: "Hats",
      name: "Plumed Hat",
      lv: 8,
      power: 140,
    },
    {
      type: "Hats",
      name: "Pumpkinhead",
      lv: 8,
      power: 215,
    },
    {
      type: "Hats",
      name: "Thief's Hood",
      lv: 9,
      power: 165,
    },
    {
      type: "Hats",
      name: "Noble Tiara",
      lv: 11,
      power: 220,
    },
    {
      type: "Hats",
      name: "Light Visage",
      lv: 13,
      power: 270,
    },
    {
      type: "Hats",
      name: "Jeweled Hat",
      lv: 13,
      power: 410,
    },
    {
      type: "Hats",
      name: "Scarlet Coif",
      lv: 15,
      power: 330,
    },
    {
      type: "Hats",
      name: "Skadi's Tiara",
      lv: 18,
      power: 625,
    },
    {
      type: "Hats",
      name: "Magic Top",
      lv: 19,
      power: 460,
    },
    {
      type: "Hats",
      name: "Silver Crown",
      lv: 21,
      power: 525,
    },
    {
      type: "Hats",
      name: "Elven Coif",
      lv: 24,
      power: 625,
    },
    {
      type: "Hats",
      name: "Golden Crown",
      lv: 25,
      power: 825,
      skill: { name: "Gold Digger I", q: "Great", m: false }
    },
    {
      type: "Hats",
      name: "Cowboy Hat",
      lv: 26,
      power: 1050,
      skill: { name: "Riposte", q: "Legendary", m: false }
    },
    {
      type: "Hats",
      name: "Wise Cap",
      lv: 27,
      power: 1100,
      skill: { name: "Wise I", q: "Epic", m: false }
    },
    {
      type: "Hats",
      name: "Dark Visage",
      lv: 28,
      power: 775,
    },
    {
      type: "Hats",
      name: "Shadowhood",
      lv: 31,
      power: 875,
    },
    {
      type: "Hats",
      name: "Death Veil",
      lv: 32,
      power: 1375,
    },
    {
      type: "Hats",
      name: "Archwizard's Hat",
      lv: 33,
      power: 950,
    },
    {
      type: "Hats",
      name: "Runic Tiara",
      lv: 34,
      power: 1500,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Hats",
      name: "Thunder Crown",
      lv: 36,
      power: 1350,
      skill: { name: "Thunderbolt", q: "Legendary", m: false }
    },
    {
      type: "Hats",
      name: "Runic Coif",
      lv: 36,
      power: 1075,
    },
    {
      type: "Hats",
      name: "Jorou's Crown",
      lv: 38,
      power: 1750,
      skill: { name: "Protector II", q: "Legendary", m: false }
    },
    {
      type: "Hats",
      name: "Demonic Visage",
      lv: 39,
      power: 1800,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Hats",
      name: "Jade Visage",
      lv: 40,
      power: 1250,
    },
    {
      type: "Hats",
      name: "Celestial Hat",
      lv: 42,
      power: 1325,
    },
    {
      type: "Hats",
      name: "Jaguar Helm",
      lv: 46,
      power: 2250,
      skill: { name: "Revive II", q: "Mythical", m: false }
    },
    {
      type: "Hats",
      name: "Cultist's Hood",
      lv: 47,
      power: 1950,
      skill: { name: "Shadowstep", q: "Mythical", m: false }
    },
    {
      type: "Hats",
      name: "Loki's Mask",
      lv: 48,
      power: 2400,
      skill: { name: "Arch Wizard II", q: "Epic", m: false }
    },
    {
      type: "Hats",
      name: "Royal Tiara",
      lv: 50,
      power: 2525,
      skill: { name: "Gold Digger III", q: "Legendary", m: false }
    },
    {
      type: "Hats",
      name: "Nether Crown",
      lv: 53,
      power: 2725,
      skill: { name: "Lucky III", q: "Mythical", m: false }
    },
    {
      type: "Helmets",
      name: "Hard Hat",
      lv: 1,
      power: 9,
    },
    {
      type: "Helmets",
      name: "Iron Cap",
      lv: 2,
      power: 22,
    },
    {
      type: "Helmets",
      name: "Iron Helmet",
      lv: 4,
      power: 56,
    },
    {
      type: "Helmets",
      name: "Horned Helm",
      lv: 5,
      power: 76,
    },
    {
      type: "Helmets",
      name: "Full Helm",
      lv: 6,
      power: 96,
    },
    {
      type: "Helmets",
      name: "Warrior's Helmet",
      lv: 9,
      power: 165,
    },
    {
      type: "Helmets",
      name: "Moonlight Cap",
      lv: 10,
      power: 240,
      skill: { name: "Lucky I", q: "Flawless", m: false }
    },
    {
      type: "Helmets",
      name: "Spangenhelm",
      lv: 11,
      power: 220,
    },
    {
      type: "Helmets",
      name: "Scale Helmet",
      lv: 14,
      power: 300,
    },
    {
      type: "Helmets",
      name: "Heart Helmet",
      lv: 15,
      power: 500,
    },
    {
      type: "Helmets",
      name: "Knight's Helm",
      lv: 17,
      power: 390,
    },
    {
      type: "Helmets",
      name: "Paladin's Helmet",
      lv: 19,
      power: 675,
      skill: { name: "Protector I", q: "Flawless", m: false }
    },
    {
      type: "Helmets",
      name: "Great Helm",
      lv: 21,
      power: 525,
    },
    {
      type: "Helmets",
      name: "Frozen Helm",
      lv: 23,
      power: 750,
      skill: { name: "Protector I", q: "Epic", m: false }
    },
    {
      type: "Helmets",
      name: "Silver Helm",
      lv: 25,
      power: 650,
    },
    {
      type: "Helmets",
      name: "Infantry Helmet",
      lv: 27,
      power: 1100,
      skill: { name: "Support I", q: "Mythical", m: false }
    },
    {
      type: "Helmets",
      name: "Dragoon's Casque",
      lv: 28,
      power: 775,
    },
    {
      type: "Helmets",
      name: "Bunny Helmet",
      lv: 29,
      power: 1200,
    },
    {
      type: "Helmets",
      name: "Elir's Barbuta",
      lv: 31,
      power: 875,
    },
    {
      type: "Helmets",
      name: "Adventurer's Helm",
      lv: 32,
      power: 1375,
    },
    {
      type: "Helmets",
      name: "Mercurial",
      lv: 33,
      power: 950,
    },
    {
      type: "Helmets",
      name: "Phoenix Helmet",
      lv: 34,
      power: 1500,
      skill: { name: "Speed Runner I", q: "Legendary", m: false }
    },
    {
      type: "Helmets",
      name: "Champion's Helm",
      lv: 35,
      power: 1050,
    },
    {
      type: "Helmets",
      name: "Dragonscale Helmet",
      lv: 38,
      power: 1450,
      skill: { name: "Bros-in-arms I", q: "Legendary", m: false }
    },
    {
      type: "Helmets",
      name: "Viking Helm",
      lv: 39,
      power: 1200,
    },
    {
      type: "Helmets",
      name: "Adamantium Helm",
      lv: 40,
      power: 1875,
      skill: { name: "Energetic I", q: "Legendary", m: false }
    },
    {
      type: "Helmets",
      name: "Valkyrie Helm",
      lv: 41,
      power: 1925,
      skill: { name: "Resilient II", q: "Legendary", m: false }
    },
    {
      type: "Helmets",
      name: "Golden Helm",
      lv: 42,
      power: 1325,
    },
    {
      type: "Helmets",
      name: "Frostfire Barbuta",
      lv: 45,
      power: 1825,
      skill: { name: "Cone-of-cold", q: "Legendary", m: false }
    },
    {
      type: "Helmets",
      name: "Twilight Helm",
      lv: 46,
      power: 1500,
    },
    {
      type: "Helmets",
      name: "Hallowed Skull",
      lv: 47,
      power: 2325,
      skill: { name: "Revive II", q: "Mythical", m: false }
    },
    {
      type: "Helmets",
      name: "Jade Helm",
      lv: 50,
      power: 2525,
      skill: { name: "Stoneskin", q: "Mythical", m: false }
    },
    {
      type: "Helmets",
      name: "Jagged Crown",
      lv: 55,
      power: 2875,
      skill: { name: "Energetic II", q: "Mythical", m: false }
    },
    {
      type: "Instruments",
      name: "Wood Flute",
      lv: 3,
      power: 38,
    },
    {
      type: "Instruments",
      name: "Small Drum",
      lv: 4,
      power: 56,
    },
    {
      type: "Instruments",
      name: "Pan Flute",
      lv: 7,
      power: 120,
    },
    {
      type: "Instruments",
      name: "Hand Drum",
      lv: 8,
      power: 215,
    },
    {
      type: "Instruments",
      name: "Horn",
      lv: 9,
      power: 165,
    },
    {
      type: "Instruments",
      name: "Harp",
      lv: 11,
      power: 220,
    },
    {
      type: "Instruments",
      name: "Iron Flute",
      lv: 12,
      power: 310,
      skill: { name: "Resilient I", q: "Flawless", m: false }
    },
    {
      type: "Instruments",
      name: "Lute",
      lv: 15,
      power: 330,
    },
    {
      type: "Instruments",
      name: "Frozen Harp",
      lv: 16,
      power: 550,
      skill: { name: "Cone-of-cold", q: "Flawless", m: false }
    },
    {
      type: "Instruments",
      name: "Long Flute",
      lv: 18,
      power: 420,
    },
    {
      type: "Instruments",
      name: "Oud",
      lv: 20,
      power: 490,
    },
    {
      type: "Instruments",
      name: "Nordic Lute",
      lv: 22,
      power: 550,
    },
    {
      type: "Instruments",
      name: "Military Tap",
      lv: 25,
      power: 650,
    },
    {
      type: "Instruments",
      name: "Ygg Flute",
      lv: 26,
      power: 875,
      skill: { name: "Healer I", q: "Epic", m: false }
    },
    {
      type: "Instruments",
      name: "Silvered Flute",
      lv: 28,
      power: 775,
    },
    {
      type: "Instruments",
      name: "Chinese Drum",
      lv: 29,
      power: 1200,
    },
    {
      type: "Instruments",
      name: "Soothing Harp",
      lv: 30,
      power: 850,
    },
    {
      type: "Instruments",
      name: "Wyrm Horn",
      lv: 31,
      power: 1325,
      skill: { name: "Treasure Hunter I", q: "Epic", m: false }
    },
    {
      type: "Instruments",
      name: "Golden String",
      lv: 32,
      power: 925,
    },
    {
      type: "Instruments",
      name: "Hell Hound",
      lv: 33,
      power: 950,
    },
    {
      type: "Instruments",
      name: "Draconian Sound",
      lv: 35,
      power: 1050,
    },
    {
      type: "Instruments",
      name: "Draconic Heartbeat",
      lv: 38,
      power: 1450,
      skill: { name: "Protector I", q: "Legendary", m: false }
    },
    {
      type: "Instruments",
      name: "Twilight Flute",
      lv: 39,
      power: 1200,
    },
    {
      type: "Instruments",
      name: "Angelic Strings",
      lv: 40,
      power: 1875,
      skill: { name: "Revive I", q: "Legendary", m: false }
    },
    {
      type: "Instruments",
      name: "Ancient Horn",
      lv: 41,
      power: 1300,
    },
    {
      type: "Instruments",
      name: "Bunny Harp",
      lv: 42,
      power: 2000,
      skill: { name: "Revive II", q: "Mythical", m: false }
    },
    {
      type: "Instruments",
      name: "Winged Harp",
      lv: 45,
      power: 1450,
    },
    {
      type: "Instruments",
      name: "Frostfire Harp",
      lv: 45,
      power: 1825,
      skill: { name: "Cone-of-cold", q: "Epic", m: false }
    },
    {
      type: "Instruments",
      name: "Angelic Bell",
      lv: 46,
      power: 2250,
      skill: { name: "Resourceful II", q: "Legendary", m: false }
    },
    {
      type: "Instruments",
      name: "Wisdom Ocarina",
      lv: 47,
      power: 2325,
      skill: { name: "Resourceful III", q: "Mythical", m: false }
    },
    {
      type: "Instruments",
      name: "Gaia's Flute",
      lv: 49,
      power: 2450,
      skill: { name: "Amazon II", q: "Mythical", m: false }
    },
    {
      type: "Instruments",
      name: "Summoning Flute",
      lv: 55,
      power: 2875,
      skill: { name: "Protector III", q: "Mythical", m: false }
    },
    {
      type: "Maces",
      name: "Club",
      lv: 1,
      power: 10,
    },
    {
      type: "Maces",
      name: "Spiked Club",
      lv: 2,
      power: 26,
    },
    {
      type: "Maces",
      name: "Shieldbreaker",
      lv: 3,
      power: 68,
    },
    {
      type: "Maces",
      name: "Maul",
      lv: 4,
      power: 68,
    },
    {
      type: "Maces",
      name: "Sledgehammer",
      lv: 5,
      power: 90,
    },
    {
      type: "Maces",
      name: "Mace",
      lv: 7,
      power: 140,
    },
    {
      type: "Maces",
      name: "Morning Star",
      lv: 8,
      power: 215,
      skill: { name: "Crush", q: "Flawless", m: false }
    },
    {
      type: "Maces",
      name: "Heavy Mace",
      lv: 9,
      power: 200,
    },
    {
      type: "Maces",
      name: "Battle Mace",
      lv: 11,
      power: 260,
    },
    {
      type: "Maces",
      name: "Pumpkin Smasher",
      lv: 13,
      power: 490,
    },
    {
      type: "Maces",
      name: "Steeled Club",
      lv: 14,
      power: 360,
    },
    {
      type: "Maces",
      name: "Tree Trunk",
      lv: 15,
      power: 600,
      skill: { name: "Commander I", q: "Flawless", m: false }
    },
    {
      type: "Maces",
      name: "War Gavel",
      lv: 17,
      power: 470,
    },
    {
      type: "Maces",
      name: "Journey Mace",
      lv: 21,
      power: 625,
    },
    {
      type: "Maces",
      name: "Hammer Fist",
      lv: 22,
      power: 825,
      skill: { name: "Bros-in-arms I", q: "Epic", m: false }
    },
    {
      type: "Maces",
      name: "Demolisher",
      lv: 25,
      power: 800,
    },
    {
      type: "Maces",
      name: "Giant's Hammer",
      lv: 25,
      power: 1190,
    },
    {
      type: "Maces",
      name: "Fury Club",
      lv: 28,
      power: 925,
    },
    {
      type: "Maces",
      name: "Earthquake",
      lv: 31,
      power: 1050,
    },
    {
      type: "Maces",
      name: "Apocalyptus",
      lv: 32,
      power: 1650,
      skill: { name: "Energetic I", q: "Epic", m: false }
    },
    {
      type: "Maces",
      name: "Pulverizer",
      lv: 35,
      power: 1250,
    },
    {
      type: "Maces",
      name: "Tide Maker",
      lv: 37,
      power: 1350,
    },
    {
      type: "Maces",
      name: "Evening Star",
      lv: 38,
      power: 1750,
      skill: { name: "Lucky I", q: "Legendary", m: false }
    },
    {
      type: "Maces",
      name: "Destroyer",
      lv: 39,
      power: 1450,
    },
    {
      type: "Maces",
      name: "Hundred Ton",
      lv: 40,
      power: 2250,
      skill: { name: "Crush", q: "Legendary", m: false }
    },
    {
      type: "Maces",
      name: "Storm Basher",
      lv: 43,
      power: 1650,
    },
    {
      type: "Maces",
      name: "Crusher",
      lv: 48,
      power: 2400,
      skill: { name: "Crush", q: "Mythical", m: false }
    },
    {
      type: "Maces",
      name: "Lion Mace",
      lv: 48,
      power: 2875,
      skill: { name: "Leader I", q: "Mythical", m: false }
    },
    {
      type: "Maces",
      name: "Primal Smasher",
      lv: 49,
      power: 1975,
    },
    {
      type: "Maces",
      name: "Tenderizer",
      lv: 50,
      power: 3025,
      skill: { name: "Energetic II", q: "Epic", m: false }
    },
    {
      type: "Maces",
      name: "Shattering Core",
      lv: 54,
      power: 3375,
      skill: { name: "Amazon II", q: "Mythical", m: false }
    },
    {
      type: "Pendants",
      name: "Shiny Pendant",
      lv: 3,
      power: 38,
    },
    {
      type: "Pendants",
      name: "Opal Necklace",
      lv: 5,
      power: 76,
    },
    {
      type: "Pendants",
      name: "Scarlet Drop",
      lv: 6,
      power: 96,
    },
    {
      type: "Pendants",
      name: "Protection Pendant",
      lv: 8,
      power: 140,
    },
    {
      type: "Pendants",
      name: "Luna Charm",
      lv: 10,
      power: 190,
    },
    {
      type: "Pendants",
      name: "Wind Charm",
      lv: 11,
      power: 270,
      skill: { name: "Arch Wizard I", q: "Flawless", m: false }
    },
    {
      type: "Pendants",
      name: "Skeleton Ward",
      lv: 12,
      power: 245,
    },
    {
      type: "Pendants",
      name: "Bunny Pendant",
      lv: 13,
      power: 410,
    },
    {
      type: "Pendants",
      name: "Hanging Journal",
      lv: 14,
      power: 300,
    },
    {
      type: "Pendants",
      name: "Fiery Talisman",
      lv: 16,
      power: 360,
    },
    {
      type: "Pendants",
      name: "Azure Beads",
      lv: 18,
      power: 625,
    },
    {
      type: "Pendants",
      name: "Timeless Locket",
      lv: 18,
      power: 420,
    },
    {
      type: "Pendants",
      name: "Jade Amulet",
      lv: 20,
      power: 490,
    },
    {
      type: "Pendants",
      name: "Obelisk Charm",
      lv: 22,
      power: 550,
    },
    {
      type: "Pendants",
      name: "Turning Token",
      lv: 24,
      power: 950,
      skill: { name: "Lucky I", q: "Flawless", m: false }
    },
    {
      type: "Pendants",
      name: "Light Amulet",
      lv: 25,
      power: 650,
    },
    {
      type: "Pendants",
      name: "Shielding Ward",
      lv: 27,
      power: 925,
      skill: { name: "Protector I", q: "Epic", m: false }
    },
    {
      type: "Pendants",
      name: "Phoenix Talon",
      lv: 29,
      power: 800,
    },
    {
      type: "Pendants",
      name: "Freezing Ward",
      lv: 31,
      power: 875,
    },
    {
      type: "Pendants",
      name: "Heart Pendant",
      lv: 32,
      power: 1375,
    },
    {
      type: "Pendants",
      name: "Cat's Eye",
      lv: 34,
      power: 1000,
    },
    {
      type: "Pendants",
      name: "Skadi's Charm",
      lv: 35,
      power: 1550,
    },
    {
      type: "Pendants",
      name: "Lich's Heart",
      lv: 35,
      power: 1550,
      skill: { name: "Revive I", q: "Epic", m: false }
    },
    {
      type: "Pendants",
      name: "Draconic Amulet",
      lv: 36,
      power: 1350,
      skill: { name: "Gold Digger I", q: "Legendary", m: false }
    },
    {
      type: "Pendants",
      name: "Trine Charm",
      lv: 37,
      power: 1125,
    },
    {
      type: "Pendants",
      name: "Goddess' Tear",
      lv: 38,
      power: 1750,
      skill: { name: "Healer I", q: "Legendary", m: false }
    },
    {
      type: "Pendants",
      name: "Ancient Amulet",
      lv: 41,
      power: 1300,
    },
    {
      type: "Pendants",
      name: "Draconic Charm",
      lv: 45,
      power: 1450,
    },
    {
      type: "Pendants",
      name: "Champion's Medal",
      lv: 45,
      power: 2200,
      skill: { name: "Healer II", q: "Mythical", m: false }
    },
    {
      type: "Pendants",
      name: "Frostfire Talisman",
      lv: 47,
      power: 1950,
      skill: { name: "Cone-of-cold", q: "Legendary", m: false }
    },
    {
      type: "Pendants",
      name: "Gaia's Heart",
      lv: 50,
      power: 2525,
      skill: { name: "Fireball", q: "Mythical", m: false }
    },
    {
      type: "Pendants",
      name: "Primal Charm",
      lv: 53,
      power: 2725,
      skill: { name: "Treasure Hunter I", q: "Mythical", m: false }
    },
    {
      type: "Potions",
      name: "Health Vial",
      lv: 3,
      power: 38,
    },
    {
      type: "Potions",
      name: "Mana Vial",
      lv: 4,
      power: 56,
    },
    {
      type: "Potions",
      name: "Speed Potion",
      lv: 5,
      power: 76,
    },
    {
      type: "Potions",
      name: "Love Splash",
      lv: 6,
      power: 96,
    },
    {
      type: "Potions",
      name: "Healing Potion",
      lv: 7,
      power: 120,
    },
    {
      type: "Potions",
      name: "Toxic Vial",
      lv: 8,
      power: 140,
    },
    {
      type: "Potions",
      name: "Energizing Potion",
      lv: 9,
      power: 250,
    },
    {
      type: "Potions",
      name: "Elixir Drops",
      lv: 9,
      power: 210,
      skill: { name: "Lucky I", q: "Flawless", m: false }
    },
    {
      type: "Potions",
      name: "Health Drink",
      lv: 10,
      power: 190,
    },
    {
      type: "Potions",
      name: "Strength Potion",
      lv: 13,
      power: 270,
    },
    {
      type: "Potions",
      name: "Eggnog Potion",
      lv: 14,
      power: 450,
    },
    {
      type: "Potions",
      name: "Warming Spray",
      lv: 15,
      power: 330,
    },
    {
      type: "Potions",
      name: "Acidic Splash",
      lv: 17,
      power: 390,
    },
    {
      type: "Potions",
      name: "Health Potion",
      lv: 20,
      power: 490,
    },
    {
      type: "Potions",
      name: "Wisdom Potion",
      lv: 22,
      power: 825,
    },
    {
      type: "Potions",
      name: "Mana Potion",
      lv: 22,
      power: 550,
    },
    {
      type: "Potions",
      name: "Demon's Blood",
      lv: 24,
      power: 950,
      skill: { name: "Speed Runner I", q: "Flawless", m: false }
    },
    {
      type: "Potions",
      name: "Elixir",
      lv: 26,
      power: 875,
      skill: { name: "Healer I", q: "Epic", m: false }
    },
    {
      type: "Potions",
      name: "Golden Potion",
      lv: 28,
      power: 775,
    },
    {
      type: "Potions",
      name: "Life Potion",
      lv: 31,
      power: 875,
    },
    {
      type: "Potions",
      name: "Mystic Potion",
      lv: 32,
      power: 1375,
    },
    {
      type: "Potions",
      name: "Invincibility Potion",
      lv: 33,
      power: 950,
    },
    {
      type: "Potions",
      name: "Dragon's Blood",
      lv: 34,
      power: 1500,
      skill: { name: "Gold Digger I", q: "Epic", m: false }
    },
    {
      type: "Potions",
      name: "Megalixir",
      lv: 36,
      power: 1350,
      skill: { name: "Energetic I", q: "Legendary", m: false }
    },
    {
      type: "Potions",
      name: "Twilight Potion",
      lv: 37,
      power: 1125,
    },
    {
      type: "Potions",
      name: "Gods' Essence",
      lv: 39,
      power: 1800,
      skill: { name: "Revive I", q: "Legendary", m: false }
    },
    {
      type: "Potions",
      name: "Clarity Potion",
      lv: 40,
      power: 1250,
    },
    {
      type: "Potions",
      name: "Vial Of Rebirth",
      lv: 43,
      power: 1375,
    },
    {
      type: "Potions",
      name: "Jack's Brew",
      lv: 44,
      power: 2125,
      skill: { name: "Energetic II", q: "Mythical", m: false }
    },
    {
      type: "Potions",
      name: "Obsidian Potion",
      lv: 47,
      power: 1950,
      skill: { name: "Aura of Protection", q: "Legendary", m: false }
    },
    {
      type: "Potions",
      name: "Dragonfire Potion",
      lv: 49,
      power: 2450,
      skill: { name: "Magic Find", q: "Mythical", m: false }
    },
    {
      type: "Potions",
      name: "Gaia's Essence",
      lv: 50,
      power: 2525,
      skill: { name: "Healer II", q: "Mythical", m: false }
    },
    {
      type: "Potions",
      name: "Unholy Potion",
      lv: 55,
      power: 2875,
      skill: { name: "Supplier III", q: "Mythical", m: false }
    },
    {
      type: "Projectiles",
      name: "Darts",
      lv: 2,
      power: 22,
    },
    {
      type: "Projectiles",
      name: "Sling",
      lv: 3,
      power: 38,
    },
    {
      type: "Projectiles",
      name: "Boomerang",
      lv: 4,
      power: 56,
    },
    {
      type: "Projectiles",
      name: "Kunai",
      lv: 6,
      power: 96,
    },
    {
      type: "Projectiles",
      name: "Poison Darts",
      lv: 7,
      power: 120,
    },
    {
      type: "Projectiles",
      name: "Fireworks",
      lv: 8,
      power: 215,
      skill: { name: "Fireball", q: "Epic", m: false }
    },
    {
      type: "Projectiles",
      name: "Smoke Bomb",
      lv: 9,
      power: 165,
    },
    {
      type: "Projectiles",
      name: "Metal Boomerang",
      lv: 11,
      power: 220,
    },
    {
      type: "Projectiles",
      name: "Toxic Bomb",
      lv: 12,
      power: 310,
      skill: { name: "Gangster I", q: "Flawless", m: false }
    },
    {
      type: "Projectiles",
      name: "Sleeping Bomb",
      lv: 13,
      power: 270,
    },
    {
      type: "Projectiles",
      name: "Festive Bombs",
      lv: 14,
      power: 450,
    },
    {
      type: "Projectiles",
      name: "Shock Darts",
      lv: 15,
      power: 330,
    },
    {
      type: "Projectiles",
      name: "Shuriken",
      lv: 18,
      power: 420,
    },
    {
      type: "Projectiles",
      name: "Elasti-Sling",
      lv: 20,
      power: 490,
    },
    {
      type: "Projectiles",
      name: "Chakram",
      lv: 22,
      power: 550,
    },
    {
      type: "Projectiles",
      name: "Bladed Feather",
      lv: 22,
      power: 825,
    },
    {
      type: "Projectiles",
      name: "Magic Shuriken",
      lv: 24,
      power: 775,
      skill: { name: "Parry", q: "Epic", m: false }
    },
    {
      type: "Projectiles",
      name: "Singing Chakram",
      lv: 26,
      power: 1050,
      skill: { name: "Healer I", q: "Flawless", m: false }
    },
    {
      type: "Projectiles",
      name: "Steelarang",
      lv: 28,
      power: 775,
    },
    {
      type: "Projectiles",
      name: "Heart Seeker",
      lv: 28,
      power: 1150,
    },
    {
      type: "Projectiles",
      name: "Seeking Kunai",
      lv: 30,
      power: 850,
    },
    {
      type: "Projectiles",
      name: "Shredder",
      lv: 33,
      power: 950,
    },
    {
      type: "Projectiles",
      name: "Exploding Darts",
      lv: 35,
      power: 1300,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Projectiles",
      name: "Heart Piercer",
      lv: 36,
      power: 1625,
      skill: { name: "Gangster I", q: "Epic", m: false }
    },
    {
      type: "Projectiles",
      name: "Light Boomerang",
      lv: 37,
      power: 1125,
    },
    {
      type: "Projectiles",
      name: "Thunder Clap",
      lv: 38,
      power: 1750,
      skill: { name: "Thunderbolt", q: "Legendary", m: false }
    },
    {
      type: "Projectiles",
      name: "Dragon Darts",
      lv: 39,
      power: 1200,
    },
    {
      type: "Projectiles",
      name: "Wind Slicer",
      lv: 42,
      power: 1325,
    },
    {
      type: "Projectiles",
      name: "Frostfire Kunai",
      lv: 45,
      power: 1825,
      skill: { name: "Treasure Hunter II", q: "Legendary", m: false }
    },
    {
      type: "Projectiles",
      name: "Squash Bomb",
      lv: 47,
      power: 2325,
      skill: { name: "Healer II", q: "Mythical", m: false }
    },
    {
      type: "Projectiles",
      name: "Eggsplosives",
      lv: 48,
      power: 2400,
      skill: { name: "Magic Find", q: "Mythical", m: false }
    },
    {
      type: "Projectiles",
      name: "Hell Bomb",
      lv: 49,
      power: 2450,
      skill: { name: "Berserker", q: "Mythical", m: false }
    },
    {
      type: "Projectiles",
      name: "Flying Guillotine",
      lv: 53,
      power: 2725,
      skill: { name: "Gangster III", q: "Mythical", m: false }
    },
    {
      type: "Remedies",
      name: "Healing Herbs",
      lv: 1,
      power: 9,
    },
    {
      type: "Remedies",
      name: "Antidote",
      lv: 2,
      power: 22,
    },
    {
      type: "Remedies",
      name: "Fungi Brew",
      lv: 3,
      power: 38,
    },
    {
      type: "Remedies",
      name: "Elderflower",
      lv: 6,
      power: 96,
    },
    {
      type: "Remedies",
      name: "Healing Mix",
      lv: 7,
      power: 120,
    },
    {
      type: "Remedies",
      name: "Colored Powder",
      lv: 8,
      power: 175,
      skill: { name: "Energetic I", q: "Flawless", m: false }
    },
    {
      type: "Remedies",
      name: "Fire Moss",
      lv: 9,
      power: 165,
    },
    {
      type: "Remedies",
      name: "Mistletoe",
      lv: 10,
      power: 290,
    },
    {
      type: "Remedies",
      name: "Sleeping Shrooms",
      lv: 11,
      power: 220,
    },
    {
      type: "Remedies",
      name: "Bark Tea",
      lv: 13,
      power: 270,
    },
    {
      type: "Remedies",
      name: "Fairy Sprinkle",
      lv: 15,
      power: 330,
    },
    {
      type: "Remedies",
      name: "Anti-Venom",
      lv: 19,
      power: 460,
    },
    {
      type: "Remedies",
      name: "Protection Dust",
      lv: 21,
      power: 525,
    },
    {
      type: "Remedies",
      name: "Swift Seed",
      lv: 23,
      power: 875,
      skill: { name: "Gangster I", q: "Flawless", m: false }
    },
    {
      type: "Remedies",
      name: "Elven Cure",
      lv: 24,
      power: 625,
    },
    {
      type: "Remedies",
      name: "Rejuvenating Tea",
      lv: 26,
      power: 875,
      skill: { name: "Healer I", q: "Epic", m: false }
    },
    {
      type: "Remedies",
      name: "Angel Dust",
      lv: 28,
      power: 775,
    },
    {
      type: "Remedies",
      name: "Coldfire Dust",
      lv: 31,
      power: 875,
    },
    {
      type: "Remedies",
      name: "Unicorn Essence",
      lv: 32,
      power: 1375,
    },
    {
      type: "Remedies",
      name: "Cornucopia",
      lv: 33,
      power: 1450,
    },
    {
      type: "Remedies",
      name: "Clown Dust",
      lv: 34,
      power: 1500,
      skill: { name: "Stoneskin", q: "Legendary", m: false }
    },
    {
      type: "Remedies",
      name: "Strength Seed",
      lv: 34,
      power: 1500,
      skill: { name: "Commander I", q: "Epic", m: false }
    },
    {
      type: "Remedies",
      name: "Phoenix Dust",
      lv: 35,
      power: 1050,
    },
    {
      type: "Remedies",
      name: "Panacea",
      lv: 37,
      power: 1400,
      skill: { name: "Healer I", q: "Legendary", m: false }
    },
    {
      type: "Remedies",
      name: "Mystic Flower",
      lv: 39,
      power: 1200,
    },
    {
      type: "Remedies",
      name: "Magic Seed",
      lv: 40,
      power: 1875,
      skill: { name: "Arch Wizard I", q: "Legendary", m: false }
    },
    {
      type: "Remedies",
      name: "Albizia",
      lv: 41,
      power: 1300,
    },
    {
      type: "Remedies",
      name: "Dragon Dust",
      lv: 44,
      power: 1425,
    },
    {
      type: "Remedies",
      name: "Magic Beans",
      lv: 46,
      power: 2250,
      skill: { name: "Bros-in-arms II", q: "Mythical", m: false }
    },
    {
      type: "Remedies",
      name: "Devil Dust",
      lv: 47,
      power: 1950,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Remedies",
      name: "Teonanacatl",
      lv: 48,
      power: 2400,
      skill: { name: "Magic Find", q: "Mythical", m: false }
    },
    {
      type: "Remedies",
      name: "Draconic Tea",
      lv: 50,
      power: 2525,
      skill: { name: "Healer II", q: "Mythical", m: false }
    },
    {
      type: "Remedies",
      name: "Seed Of Power",
      lv: 54,
      power: 2800,
      skill: { name: "Commander III", q: "Mythical", m: false }
    },
    {
      type: "Rings",
      name: "Iron Band",
      lv: 2,
      power: 22,
    },
    {
      type: "Rings",
      name: "Rabbit Ring",
      lv: 4,
      power: 56,
    },
    {
      type: "Rings",
      name: "Jewel Ring",
      lv: 5,
      power: 76,
    },
    {
      type: "Rings",
      name: "Shadow Mark",
      lv: 6,
      power: 96,
    },
    {
      type: "Rings",
      name: "Crescent Ring",
      lv: 7,
      power: 120,
    },
    {
      type: "Rings",
      name: "Starry Ring",
      lv: 8,
      power: 215,
      skill: { name: "Cone-of-cold", q: "Epic", m: false }
    },
    {
      type: "Rings",
      name: "Moonstone Ring",
      lv: 9,
      power: 165,
    },
    {
      type: "Rings",
      name: "Luck Band",
      lv: 11,
      power: 220,
    },
    {
      type: "Rings",
      name: "Gold Digger",
      lv: 12,
      power: 310,
      skill: { name: "Gold Digger I", q: "Flawless", m: false }
    },
    {
      type: "Rings",
      name: "Soldier's Mark",
      lv: 13,
      power: 270,
    },
    {
      type: "Rings",
      name: "Nimble Ring",
      lv: 14,
      power: 450,
    },
    {
      type: "Rings",
      name: "Fire Band",
      lv: 16,
      power: 360,
    },
    {
      type: "Rings",
      name: "Sight Band",
      lv: 19,
      power: 460,
    },
    {
      type: "Rings",
      name: "Undead Ring",
      lv: 21,
      power: 525,
    },
    {
      type: "Rings",
      name: "Power Ring",
      lv: 23,
      power: 600,
    },
    {
      type: "Rings",
      name: "Infinity Ring",
      lv: 24,
      power: 950,
    },
    {
      type: "Rings",
      name: "Crusader Ring",
      lv: 25,
      power: 825,
      skill: { name: "Bros-in-arms I", q: "Epic", m: false }
    },
    {
      type: "Rings",
      name: "Prayer Ring",
      lv: 27,
      power: 1100,
      skill: { name: "Revive I", q: "Flawless", m: false }
    },
    {
      type: "Rings",
      name: "Wisdom Mark",
      lv: 28,
      power: 775,
    },
    {
      type: "Rings",
      name: "Resistance Band",
      lv: 31,
      power: 875,
    },
    {
      type: "Rings",
      name: "Dynamic Ring",
      lv: 32,
      power: 1375,
    },
    {
      type: "Rings",
      name: "Truth Ring",
      lv: 33,
      power: 950,
    },
    {
      type: "Rings",
      name: "Divine Mark",
      lv: 34,
      power: 1500,
      skill: { name: "Amazon I", q: "Epic", m: false }
    },
    {
      type: "Rings",
      name: "Royal Ring",
      lv: 36,
      power: 1350,
      skill: { name: "Leader I", q: "Legendary", m: false }
    },
    {
      type: "Rings",
      name: "Fallen Angel Ring",
      lv: 37,
      power: 1125,
    },
    {
      type: "Rings",
      name: "Oracle",
      lv: 39,
      power: 1800,
      skill: { name: "Revive I", q: "Legendary", m: false }
    },
    {
      type: "Rings",
      name: "Mystic Ring",
      lv: 40,
      power: 1875,
      skill: { name: "Healer II", q: "Legendary", m: false }
    },
    {
      type: "Rings",
      name: "Lich Ring",
      lv: 41,
      power: 1300,
    },
    {
      type: "Rings",
      name: "Ouroboros",
      lv: 44,
      power: 1425,
    },
    {
      type: "Rings",
      name: "Azure Ring",
      lv: 45,
      power: 1825,
      skill: { name: "Riposte", q: "Legendary", m: false }
    },
    {
      type: "Rings",
      name: "Heart Ring",
      lv: 48,
      power: 2400,
      skill: { name: "Revive II", q: "Mythical", m: false }
    },
    {
      type: "Rings",
      name: "Antimagic Band",
      lv: 50,
      power: 2525,
      skill: { name: "Mage Armor", q: "Epic", m: false }
    },
    {
      type: "Rings",
      name: "Midas Ring",
      lv: 53,
      power: 2725,
      skill: { name: "Gold Digger III", q: "Mythical", m: false }
    },
    {
      type: "Shields",
      name: "Targe",
      lv: 2,
      power: 22,
    },
    {
      type: "Shields",
      name: "Buckler",
      lv: 3,
      power: 38,
    },
    {
      type: "Shields",
      name: "Small Shield",
      lv: 5,
      power: 76,
    },
    {
      type: "Shields",
      name: "Heater Shield",
      lv: 6,
      power: 96,
    },
    {
      type: "Shields",
      name: "Protector",
      lv: 8,
      power: 175,
      skill: { name: "Protector I", q: "Flawless", m: false }
    },
    {
      type: "Shields",
      name: "Meat Shield",
      lv: 8,
      power: 215,
    },
    {
      type: "Shields",
      name: "Kite Shield",
      lv: 9,
      power: 165,
    },
    {
      type: "Shields",
      name: "Tower Shield",
      lv: 11,
      power: 220,
    },
    {
      type: "Shields",
      name: "Chimalli",
      lv: 12,
      power: 370,
    },
    {
      type: "Shields",
      name: "Moonlight Shield",
      lv: 14,
      power: 300,
    },
    {
      type: "Shields",
      name: "Knight Shield",
      lv: 17,
      power: 390,
    },
    {
      type: "Shields",
      name: "Fire Proof",
      lv: 18,
      power: 625,
      skill: { name: "Fireball", q: "Flawless", m: false }
    },
    {
      type: "Shields",
      name: "Venomous Buckler",
      lv: 20,
      power: 490,
    },
    {
      type: "Shields",
      name: "Aegis",
      lv: 21,
      power: 650,
      skill: { name: "Amazon I", q: "Epic", m: false }
    },
    {
      type: "Shields",
      name: "Bulwark",
      lv: 22,
      power: 825,
    },
    {
      type: "Shields",
      name: "Reflective Shield",
      lv: 23,
      power: 600,
    },
    {
      type: "Shields",
      name: "Skeleton Shield",
      lv: 25,
      power: 650,
    },
    {
      type: "Shields",
      name: "Spiked Shield",
      lv: 27,
      power: 725,
    },
    {
      type: "Shields",
      name: "Starry Shield",
      lv: 28,
      power: 1150,
      skill: { name: "Protector II", q: "Legendary", m: false }
    },
    {
      type: "Shields",
      name: "Ember Shield",
      lv: 29,
      power: 800,
    },
    {
      type: "Shields",
      name: "Crystal Shield",
      lv: 30,
      power: 1275,
      skill: { name: "Supplier I", q: "Epic", m: false }
    },
    {
      type: "Shields",
      name: "Argus' Shield",
      lv: 31,
      power: 875,
    },
    {
      type: "Shields",
      name: "Bunny Shield",
      lv: 32,
      power: 1375,
    },
    {
      type: "Shields",
      name: "Blessed Aegis",
      lv: 34,
      power: 1000,
    },
    {
      type: "Shields",
      name: "Demon Shield",
      lv: 35,
      power: 1550,
      skill: { name: "Parry", q: "Legendary", m: false }
    },
    {
      type: "Shields",
      name: "Dragon Skull",
      lv: 37,
      power: 1400,
      skill: { name: "Commander I", q: "Legendary", m: false }
    },
    {
      type: "Shields",
      name: "Hawk Shield",
      lv: 38,
      power: 1175,
    },
    {
      type: "Shields",
      name: "Giantshield",
      lv: 39,
      power: 1800,
      skill: { name: "Crush", q: "Legendary", m: false }
    },
    {
      type: "Shields",
      name: "Adventurer's Shield",
      lv: 40,
      power: 1875,
      skill: { name: "Scavenger II", q: "Mythical", m: false }
    },
    {
      type: "Shields",
      name: "Twilight Aegis",
      lv: 41,
      power: 1300,
    },
    {
      type: "Shields",
      name: "Medusa Buckler",
      lv: 47,
      power: 1950,
      skill: { name: "Stoneskin", q: "Legendary", m: false }
    },
    {
      type: "Shields",
      name: "Gaia's Shield",
      lv: 48,
      power: 1600,
    },
    {
      type: "Shields",
      name: "Sunflower Shield",
      lv: 48,
      power: 2400,
      skill: { name: "Treasure Hunter II", q: "Mythical", m: false }
    },
    {
      type: "Shields",
      name: "Oracle Shield",
      lv: 50,
      power: 2525,
      skill: { name: "Detect Secrets", q: "Mythical", m: false }
    },
    {
      type: "Shields",
      name: "Halfmoon Shield",
      lv: 53,
      power: 2725,
      skill: { name: "Gold Digger II", q: "Mythical", m: false }
    },
    {
      type: "Spears",
      name: "Wooden Spear",
      lv: 1,
      power: 10,
    },
    {
      type: "Spears",
      name: "Iron Spear",
      lv: 3,
      power: 46,
    },
    {
      type: "Spears",
      name: "Half Pike",
      lv: 4,
      power: 68,
    },
    {
      type: "Spears",
      name: "Trident",
      lv: 5,
      power: 90,
    },
    {
      type: "Spears",
      name: "Pike",
      lv: 8,
      power: 170,
    },
    {
      type: "Spears",
      name: "Gaia's Javelin",
      lv: 9,
      power: 300,
    },
    {
      type: "Spears",
      name: "Spade",
      lv: 10,
      power: 230,
    },
    {
      type: "Spears",
      name: "Pitchfork",
      lv: 11,
      power: 390,
    },
    {
      type: "Spears",
      name: "Seeking Tip",
      lv: 12,
      power: 370,
      skill: { name: "Treasure Hunter I", q: "Flawless", m: false }
    },
    {
      type: "Spears",
      name: "Lance",
      lv: 13,
      power: 330,
    },
    {
      type: "Spears",
      name: "Champion's Javelin",
      lv: 14,
      power: 550,
      skill: { name: "Berserker", q: "Epic", m: false }
    },
    {
      type: "Spears",
      name: "Knight's Lance",
      lv: 15,
      power: 400,
    },
    {
      type: "Spears",
      name: "Valkyrie",
      lv: 18,
      power: 500,
    },
    {
      type: "Spears",
      name: "Poison Tip",
      lv: 19,
      power: 825,
      skill: { name: "Gangster I", q: "Flawless", m: false }
    },
    {
      type: "Spears",
      name: "Bone Spear",
      lv: 21,
      power: 625,
    },
    {
      type: "Spears",
      name: "Winged Spear",
      lv: 25,
      power: 800,
    },
    {
      type: "Spears",
      name: "Silver Fork",
      lv: 26,
      power: 1050,
      skill: { name: "Resourceful I", q: "Epic", m: false }
    },
    {
      type: "Spears",
      name: "Lion's Tail",
      lv: 29,
      power: 975,
    },
    {
      type: "Spears",
      name: "Moon Voulge",
      lv: 30,
      power: 1525,
      skill: { name: "Healer I", q: "Epic", m: false }
    },
    {
      type: "Spears",
      name: "Tepoztopilli",
      lv: 30,
      power: 1525,
    },
    {
      type: "Spears",
      name: "Impaler",
      lv: 32,
      power: 1100,
    },
    {
      type: "Spears",
      name: "Obsidian Spear",
      lv: 32,
      power: 1650,
    },
    {
      type: "Spears",
      name: "Twisted Pike",
      lv: 34,
      power: 1200,
    },
    {
      type: "Spears",
      name: "Titanic Lance",
      lv: 36,
      power: 1300,
    },
    {
      type: "Spears",
      name: "Night Spike",
      lv: 38,
      power: 1750,
      skill: { name: "Speed Runner I", q: "Legendary", m: false }
    },
    {
      type: "Spears",
      name: "Divine Ray",
      lv: 39,
      power: 2175,
      skill: { name: "Revive I", q: "Legendary", m: false }
    },
    {
      type: "Spears",
      name: "Mystic Spear",
      lv: 40,
      power: 1500,
    },
    {
      type: "Spears",
      name: "Twilight Spear",
      lv: 43,
      power: 1650,
    },
    {
      type: "Spears",
      name: "Ascalon",
      lv: 45,
      power: 1750,
    },
    {
      type: "Spears",
      name: "Obsidian Voulge",
      lv: 47,
      power: 2325,
      skill: { name: "Fireball", q: "Epic", m: false }
    },
    {
      type: "Spears",
      name: "Green Dragon",
      lv: 48,
      power: 2875,
      skill: { name: "Aura of Protection", q: "Legendary", m: false }
    },
    {
      type: "Spears",
      name: "Primordial Trident",
      lv: 50,
      power: 3025,
      skill: { name: "Bros-in-arms II", q: "Mythical", m: false }
    },
    {
      type: "Spears",
      name: "Gungnir",
      lv: 52,
      power: 3200,
      skill: { name: "Treasure Hunter II", q: "Mythical", m: false }
    },
    {
      type: "Spells",
      name: "Shielding Seal",
      lv: 5,
      power: 76,
    },
    {
      type: "Spells",
      name: "Fireball Scroll",
      lv: 7,
      power: 120,
    },
    {
      type: "Spells",
      name: "Poison Scroll",
      lv: 8,
      power: 140,
    },
    {
      type: "Spells",
      name: "Lightning Scroll",
      lv: 9,
      power: 165,
    },
    {
      type: "Spells",
      name: "Sleeping Totem",
      lv: 11,
      power: 220,
    },
    {
      type: "Spells",
      name: "Firewall Scroll",
      lv: 12,
      power: 245,
    },
    {
      type: "Spells",
      name: "Pain Totem",
      lv: 13,
      power: 340,
      skill: { name: "Bros-in-arms I", q: "Flawless", m: false }
    },
    {
      type: "Spells",
      name: "Charming Scroll",
      lv: 14,
      power: 450,
    },
    {
      type: "Spells",
      name: "Deflection Seal",
      lv: 14,
      power: 300,
    },
    {
      type: "Spells",
      name: "Freezing Scroll",
      lv: 16,
      power: 360,
    },
    {
      type: "Spells",
      name: "Invisibility Scroll",
      lv: 18,
      power: 420,
    },
    {
      type: "Spells",
      name: "Teleportation Scroll",
      lv: 21,
      power: 525,
    },
    {
      type: "Spells",
      name: "Magical Codex",
      lv: 23,
      power: 875,
      skill: { name: "Wise I", q: "Flawless", m: false }
    },
    {
      type: "Spells",
      name: "Paralysis Totem",
      lv: 24,
      power: 625,
    },
    {
      type: "Spells",
      name: "Mystic Scroll",
      lv: 25,
      power: 1000,
    },
    {
      type: "Spells",
      name: "Evil Seal",
      lv: 26,
      power: 875,
      skill: { name: "Energetic I", q: "Epic", m: false }
    },
    {
      type: "Spells",
      name: "Possession Scroll",
      lv: 28,
      power: 775,
    },
    {
      type: "Spells",
      name: "Power Seal",
      lv: 30,
      power: 850,
    },
    {
      type: "Spells",
      name: "Njord",
      lv: 30,
      power: 1275,
    },
    {
      type: "Spells",
      name: "Gloom Totem",
      lv: 32,
      power: 925,
    },
    {
      type: "Spells",
      name: "Arcane Compendium",
      lv: 33,
      power: 1450,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Spells",
      name: "Disintegration Scroll",
      lv: 35,
      power: 1050,
    },
    {
      type: "Spells",
      name: "Return Scroll",
      lv: 37,
      power: 1400,
      skill: { name: "Scavenger I", q: "Legendary", m: false }
    },
    {
      type: "Spells",
      name: "Hawk Totem",
      lv: 38,
      power: 1175,
    },
    {
      type: "Spells",
      name: "Divine Tome",
      lv: 40,
      power: 1875,
      skill: { name: "Revive I", q: "Legendary", m: false }
    },
    {
      type: "Spells",
      name: "Twilight Seal",
      lv: 41,
      power: 1300,
    },
    {
      type: "Spells",
      name: "Dragon Totem",
      lv: 45,
      power: 1450,
    },
    {
      type: "Spells",
      name: "Santa's List",
      lv: 45,
      power: 2200,
      skill: { name: "Detect Secrets", q: "Mythical", m: false }
    },
    {
      type: "Spells",
      name: "Haunted Scroll",
      lv: 47,
      power: 1950,
      skill: { name: "Shadowstep", q: "Mythical", m: false }
    },
    {
      type: "Spells",
      name: "Primal Compendium",
      lv: 49,
      power: 2450,
      skill: { name: "Scavenger II", q: "Mythical", m: false }
    },
    {
      type: "Spells",
      name: "Guardian Seal",
      lv: 50,
      power: 2525,
      skill: { name: "Stoneskin", q: "Legendary", m: false }
    },
    {
      type: "Spells",
      name: "Blood Scroll",
      lv: 53,
      power: 2725,
      skill: { name: "Healer I", q: "Mythical", m: false }
    },
    {
      type: "Spells",
      name: "Deception Scroll",
      lv: 54,
      power: 2800,
      skill: { name: "Support II", q: "Mythical", m: false }
    },
    {
      type: "Staves",
      name: "Walking Stick",
      lv: 1,
      power: 10,
    },
    {
      type: "Staves",
      name: "Crow Stick",
      lv: 3,
      power: 46,
    },
    {
      type: "Staves",
      name: "Druidic Rod",
      lv: 5,
      power: 90,
    },
    {
      type: "Staves",
      name: "Battle Staff",
      lv: 6,
      power: 115,
    },
    {
      type: "Staves",
      name: "Deception Staff",
      lv: 7,
      power: 215,
      skill: { name: "Mage Armor", q: "Epic", m: false }
    },
    {
      type: "Staves",
      name: "Muted Caster",
      lv: 8,
      power: 170,
    },
    {
      type: "Staves",
      name: "Bishop Staff",
      lv: 9,
      power: 250,
      skill: { name: "Arch Wizard I", q: "Flawless", m: false }
    },
    {
      type: "Staves",
      name: "Sprout Staff",
      lv: 9,
      power: 300,
    },
    {
      type: "Staves",
      name: "Healing Rod",
      lv: 10,
      power: 230,
    },
    {
      type: "Staves",
      name: "Forest Wand",
      lv: 12,
      power: 300,
    },
    {
      type: "Staves",
      name: "Fire Rod",
      lv: 13,
      power: 330,
    },
    {
      type: "Staves",
      name: "Mystic Staff",
      lv: 14,
      power: 500,
    },
    {
      type: "Staves",
      name: "Blood Staff",
      lv: 15,
      power: 400,
    },
    {
      type: "Staves",
      name: "Luna Rod",
      lv: 17,
      power: 700,
      skill: { name: "Healer I", q: "Flawless", m: false }
    },
    {
      type: "Staves",
      name: "Whispering Wand",
      lv: 19,
      power: 550,
    },
    {
      type: "Staves",
      name: "Rebirth Rod",
      lv: 23,
      power: 700,
    },
    {
      type: "Staves",
      name: "Ice Staff",
      lv: 26,
      power: 825,
    },
    {
      type: "Staves",
      name: "Death Stick",
      lv: 27,
      power: 875,
    },
    {
      type: "Staves",
      name: "Sacred Scepter",
      lv: 28,
      power: 1150,
      skill: { name: "Revive I", q: "Epic", m: false }
    },
    {
      type: "Staves",
      name: "Candy Cane Staff",
      lv: 28,
      power: 1375,
    },
    {
      type: "Staves",
      name: "Soul Stealer",
      lv: 30,
      power: 1025,
    },
    {
      type: "Staves",
      name: "Champion's Torch",
      lv: 32,
      power: 1650,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Staves",
      name: "Staff Of Ages",
      lv: 33,
      power: 1150,
    },
    {
      type: "Staves",
      name: "Star Wand",
      lv: 35,
      power: 1875,
      skill: { name: "Arch Wizard I", q: "Epic", m: false }
    },
    {
      type: "Staves",
      name: "Eagle Rod",
      lv: 36,
      power: 1300,
    },
    {
      type: "Staves",
      name: "Emperor Wand",
      lv: 38,
      power: 1750,
      skill: { name: "Arch Wizard I", q: "Legendary", m: false }
    },
    {
      type: "Staves",
      name: "Cultist Staff",
      lv: 39,
      power: 1450,
    },
    {
      type: "Staves",
      name: "Valkyrie's Wisdom",
      lv: 40,
      power: 2250,
      skill: { name: "Fastidious II", q: "Legendary", m: false }
    },
    {
      type: "Staves",
      name: "Sun King",
      lv: 41,
      power: 2325,
      skill: { name: "Fireball", q: "Legendary", m: false }
    },
    {
      type: "Staves",
      name: "Draconic Scepter",
      lv: 42,
      power: 1600,
    },
    {
      type: "Staves",
      name: "Keeper Of Souls",
      lv: 45,
      power: 2200,
      skill: { name: "Revive II", q: "Epic", m: false }
    },
    {
      type: "Staves",
      name: "Affection",
      lv: 45,
      power: 2625,
      skill: { name: "Energetic II", q: "Mythical", m: false }
    },
    {
      type: "Staves",
      name: "Shattered Wand",
      lv: 50,
      power: 3025,
      skill: { name: "Arch Wizard II", q: "Mythical", m: false }
    },
    {
      type: "Staves",
      name: "Necro Staff",
      lv: 53,
      power: 3275,
      skill: { name: "Revive III", q: "Mythical", m: false }
    },
    {
      type: "Swords",
      name: "Shortsword",
      lv: 2,
      power: 26,
    },
    {
      type: "Swords",
      name: "Longsword",
      lv: 3,
      power: 46,
    },
    {
      type: "Swords",
      name: "Broadsword",
      lv: 5,
      power: 90,
    },
    {
      type: "Swords",
      name: "Midnight Sword",
      lv: 6,
      power: 175,
    },
    {
      type: "Swords",
      name: "Rapier",
      lv: 7,
      power: 140,
    },
    {
      type: "Swords",
      name: "Claymore",
      lv: 8,
      power: 170,
    },
    {
      type: "Swords",
      name: "Jaded Blade",
      lv: 9,
      power: 300,
      skill: { name: "Riposte", q: "Epic", m: false }
    },
    {
      type: "Swords",
      name: "Fire Blade",
      lv: 10,
      power: 290,
      skill: { name: "Fireball", q: "Flawless", m: false }
    },
    {
      type: "Swords",
      name: "Zweihander",
      lv: 12,
      power: 300,
    },
    {
      type: "Swords",
      name: "Macuahuitl",
      lv: 13,
      power: 490,
    },
    {
      type: "Swords",
      name: "Bastard Sword",
      lv: 14,
      power: 360,
    },
    {
      type: "Swords",
      name: "Sabre",
      lv: 16,
      power: 430,
    },
    {
      type: "Swords",
      name: "Wakizashi",
      lv: 19,
      power: 550,
    },
    {
      type: "Swords",
      name: "Vorpal Sword",
      lv: 20,
      power: 875,
      skill: { name: "Parry", q: "Great", m: false }
    },
    {
      type: "Swords",
      name: "Scimitar",
      lv: 23,
      power: 700,
    },
    {
      type: "Swords",
      name: "Coldsteel",
      lv: 25,
      power: 1000,
      skill: { name: "Cone-of-cold", q: "Epic", m: false }
    },
    {
      type: "Swords",
      name: "Masamune",
      lv: 27,
      power: 875,
    },
    {
      type: "Swords",
      name: "Sawblade",
      lv: 30,
      power: 1025,
    },
    {
      type: "Swords",
      name: "Heaven's Will",
      lv: 31,
      power: 1050,
    },
    {
      type: "Swords",
      name: "Abyssal Brand",
      lv: 32,
      power: 1650,
      skill: { name: "Cleave", q: "Epic", m: false }
    },
    {
      type: "Swords",
      name: "Bacon Blade",
      lv: 34,
      power: 1800,
    },
    {
      type: "Swords",
      name: "Slashing Tiger",
      lv: 35,
      power: 1250,
    },
    {
      type: "Swords",
      name: "Excalibur",
      lv: 37,
      power: 1350,
    },
    {
      type: "Swords",
      name: "Stormbringer",
      lv: 38,
      power: 1750,
      skill: { name: "Thunderbolt", q: "Legendary", m: false }
    },
    {
      type: "Swords",
      name: "Twilight Scimitar",
      lv: 39,
      power: 1450,
    },
    {
      type: "Swords",
      name: "Balmung",
      lv: 40,
      power: 2250,
      skill: { name: "Support II", q: "Legendary", m: false }
    },
    {
      type: "Swords",
      name: "Dragonslayer",
      lv: 41,
      power: 2325,
      skill: { name: "Commander I", q: "Legendary", m: false }
    },
    {
      type: "Swords",
      name: "Unholy Fangs",
      lv: 43,
      power: 1650,
    },
    {
      type: "Swords",
      name: "Frostfire Blade",
      lv: 46,
      power: 2250,
      skill: { name: "Riposte", q: "Legendary", m: false }
    },
    {
      type: "Swords",
      name: "Blade Of Power",
      lv: 47,
      power: 1850,
    },
    {
      type: "Swords",
      name: "Naughty And Nice",
      lv: 48,
      power: 2875,
      skill: { name: "Healer II", q: "Mythical", m: false }
    },
    {
      type: "Swords",
      name: "Durandal",
      lv: 50,
      power: 3025,
      skill: { name: "Commander II", q: "Mythical", m: false }
    },
    {
      type: "Swords",
      name: "Skofnung",
      lv: 55,
      power: 3450,
      skill: { name: "Support I", q: "Mythical", m: false }
    },
    {
      type: "Vests",
      name: "Leather Vest",
      lv: 1,
      power: 9,
    },
    {
      type: "Vests",
      name: "Hide Armor",
      lv: 2,
      power: 22,
    },
    {
      type: "Vests",
      name: "Boiled Leather",
      lv: 4,
      power: 56,
    },
    {
      type: "Vests",
      name: "Brigandine",
      lv: 6,
      power: 96,
    },
    {
      type: "Vests",
      name: "Merchant's Armor",
      lv: 7,
      power: 180,
    },
    {
      type: "Vests",
      name: "Leather Cuirass",
      lv: 8,
      power: 140,
    },
    {
      type: "Vests",
      name: "Studded Leather",
      lv: 11,
      power: 220,
    },
    {
      type: "Vests",
      name: "Raccoon Ranger",
      lv: 12,
      power: 310,
      skill: { name: "Scavenger I", q: "Legendary", m: false }
    },
    {
      type: "Vests",
      name: "Poison Studs",
      lv: 13,
      power: 270,
    },
    {
      type: "Vests",
      name: "Strapped Leather",
      lv: 16,
      power: 360,
    },
    {
      type: "Vests",
      name: "Plated Tunic",
      lv: 17,
      power: 600,
      skill: { name: "Leader I", q: "Legendary", m: false }
    },
    {
      type: "Vests",
      name: "Jacket",
      lv: 17,
      power: 600,
    },
    {
      type: "Vests",
      name: "Plated Leather",
      lv: 18,
      power: 420,
    },
    {
      type: "Vests",
      name: "Bear Armor",
      lv: 21,
      power: 525,
    },
    {
      type: "Vests",
      name: "Nightingale",
      lv: 24,
      power: 625,
    },
    {
      type: "Vests",
      name: "Genji Armor",
      lv: 26,
      power: 700,
    },
    {
      type: "Vests",
      name: "Oiled Leather",
      lv: 28,
      power: 975,
      skill: { name: "Energetic I", q: "Epic", m: false }
    },
    {
      type: "Vests",
      name: "Layered Armor",
      lv: 29,
      power: 800,
    },
    {
      type: "Vests",
      name: "Oriental Vest",
      lv: 30,
      power: 1275,
    },
    {
      type: "Vests",
      name: "Gold Stitch",
      lv: 32,
      power: 925,
    },
    {
      type: "Vests",
      name: "Wyrm Hide",
      lv: 33,
      power: 1450,
      skill: { name: "Wise I", q: "Epic", m: false }
    },
    {
      type: "Vests",
      name: "White Crow",
      lv: 36,
      power: 1075,
    },
    {
      type: "Vests",
      name: "Shadow Lurker",
      lv: 38,
      power: 1450,
      skill: { name: "Gangster I", q: "Legendary", m: false }
    },
    {
      type: "Vests",
      name: "Moonscale Armor",
      lv: 39,
      power: 1200,
    },
    {
      type: "Vests",
      name: "Valkyrie's Embrace",
      lv: 40,
      power: 1875,
      skill: { name: "Wise II", q: "Legendary", m: false }
    },
    {
      type: "Vests",
      name: "Dragon Skin",
      lv: 41,
      power: 1925,
      skill: { name: "Amazon I", q: "Legendary", m: false }
    },
    {
      type: "Vests",
      name: "Pirate Armor",
      lv: 42,
      power: 1325,
    },
    {
      type: "Vests",
      name: "Cow Hide Vest",
      lv: 45,
      power: 2200,
      skill: { name: "Bros-in-arms III", q: "Mythical", m: false }
    },
    {
      type: "Vests",
      name: "Ocean Leather",
      lv: 47,
      power: 1950,
      skill: { name: "Wise III", q: "Epic", m: false }
    },
    {
      type: "Vests",
      name: "Primal Leather",
      lv: 48,
      power: 1600,
    },
    {
      type: "Vests",
      name: "Mystic Vest",
      lv: 49,
      power: 2450,
      skill: { name: "Magic Find", q: "Mythical", m: false }
    },
    {
      type: "Vests",
      name: "Black Crow",
      lv: 50,
      power: 2525,
      skill: { name: "Shadowstep", q: "Mythical", m: false }
    },
    {
      type: "Vests",
      name: "Royal Cuirass",
      lv: 55,
      power: 2875,
      skill: { name: "Resourceful III", q: "Mythical", m: false }
    }
  ];
  cache.set( "items", items, true );

} );
