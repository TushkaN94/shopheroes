$( function() {
  var t;
  var cache = $.cache._();

  t = cache.get( "breaks" );
  if ( !t ) {
    var breaks = {
      a: { 
        "1": -0.025, 
        "0": 0, 
        "-1": 0.0125, 
        "-2": 0.025 
      },
      q: { 
        "Common": 1.0,
        "Good": 0.75,
        "Great": 0.5,
        "Flawless": 0.3,
        "Epic": 0.15,
        "Legendary": 0.05,
        "Mythical": 0.04
      }
    };
    cache.set( "breaks", breaks, true );
  }

  t = cache.get( "qualities" );
  if ( !t ) {
    var qualities = {
      "Common": { 
        i: 0
      },
      "Good": {
        i: 1
      },
      "Great": {
        i: 2
      },
      "Flawless": {
        i: 3
      },
      "Epic": {
        i: 4
      },
      "Legendary": {
        i: 5
      },
      "Mythical": {
        i: 6
      }
    };
    cache.set( "qualities", qualities, true );
  }

  t = cache.get( "powers" );
  if ( !t ) {
    var powers = {
      "q": { 
        "Common": 1.0,
        "Good": 1.1,
        "Great": 1.2,
        "Flawless": 1.3,
        "Epic": 1.5,
        "Legendary": 2.0,
        "Mythical": 5.0
      },
      "lv": {
        1:0,
        2:5,
        3:15,
        4:25,
        5:40,
        6:55,
        7:75,
        8:100,
        9:125,
        10:155,
        11:190,
        12:225,
        13:265,
        14:305,
        15:350,
        16:400,
        17:450,
        18:505,
        19:565,
        20:625,
        21:690,
        22:755,
        23:825,
        24:900,
        25:975,
        26:1055,
        27:1140,
        28:1225,
        29:1315,
        30:1405,
        31:1500,
        32:1600,
        33:1700,
        34:1805,
        35:1915,
        36:2025,
        37:2140,
        38:2255,
        39:2375,
        40:2500,
        41:2625,
        42:2755,
        43:2890,
        44:3025,
        45:3165,
        46:3305,
        47:3450,
        48:3600,
        49:3750,
        50:3905,
        51:4065,
        52:4225,
        53:4390,
        54:4555,
        55:4725
      }
    };
    cache.set( "powers", powers, true );
  }
  t = cache.get( "heroes" );
  if ( !t ) {
    var heroes = [
      {
        name: "Albert",
        type: "Spellcasters",
        sex: "M",
        tier: 1,
        cap: 40,
        lv: null,
        power: {
          base:100,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Bows":{ a: 1 },"Staves":{ a: 0 },"Daggers":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 },"Vests":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 },"Pendants":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Potions":{ a: -1 }
            }
          }
        },
        skills: {
          "8":{ name: "Fastidious I" },"12":{ name: "Supplier I" },"20":{ name: "Support I" }
        }
      },
      {
        name: "Alicia",
        type: "Fighters",
        sex: "F",
        tier: 5,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:4.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Axes":{ a: 1 },"Swords":{ a: 0 },"Maces":{ a: -1 },"Spears":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 },"Instruments":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 },"Remedies":{ a: 0 }
            }
          }
        },
        skills: {
          "14":{ name: "Amazon III" },"24":{ name: "Energetic III" },"32":{ name: "Lucky III" }
        }
      },
      {
        name: "Azula",
        type: "Spellcasters",
        sex: "F",
        tier: 4,
        cap: 50,
        lv: null,
        power: {
          base:2500,
          m:3.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Staves":{ a: 1 },"Spears":{ a: 0 },"Daggers":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 },"Pendants":{ a: -1 },"Rings":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "8":{ name: "Arch Wizard II" },"12":{ name: "Healer III" },"20":{ name: "Wise III" }
        }
      },
      {
        name: "Charles",
        type: "Spellcasters",
        sex: "M",
        tier: 6,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:5.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Bows":{ a: 1 },"Staves":{ a: 0 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 },"Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 }
            }
          }
        },
        skills: {
          "17":{ name: "Mage Armor" },"28":{ name: "Detect Secrets" },"36":{ name: "Magic Find" }
        }
      },
      {
        name: "Clovis",
        type: "Fighters",
        sex: "M",
        tier: 1,
        cap: 35,
        lv: null,
        power: {
          base:100,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Spears":{ a: 1 },"Axes":{ a: 0 },"Swords":{ a: -1 },"Maces":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Remedies":{ a: 0 },"Potions":{ a: -1 }
            }
          }
        },
        skills: {
          "4":{ name: "Leader I" },"14":{ name: "Brothers-in-arms I" },"18":{ name: "Resilient II" }
        }
      },
      {
        name: "Darthos",
        type: "Rogues",
        sex: "M",
        tier: 3,
        cap: 45,
        lv: null,
        power: {
          base:1000,
          m:2.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Guns":{ a: 1 },"Swords":{ a: 0 },"Daggers":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 },"Helmets":{ a: -1 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Shields":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "8":{ name: "Wise II" },"12":{ name: "Speed Runner II" },"22":{ name: "Brothers-in-arms III" }
        }
      },
      {
        name: "Edward",
        type: "Fighters",
        sex: "M",
        tier: 5,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:4.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Spears":{ a: 1 },"Maces":{ a: 0 },"Swords":{ a: -1 },"Axes":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Clothes":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 },"Spells":{ a: -1 }
            }
          }
        },
        skills: {
          "12":{ name: "Leader III" },"26":{ name: "Revive III" },"34":{ name: "Protector III" }
        }
      },
      {
        name: "Fiora",
        type: "Fighters",
        sex: "F",
        tier: 4,
        cap: 50,
        lv: null,
        power: {
          base:2500,
          m:3.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Maces":{ a: 1 },"Swords":{ a: 0 },"Spears":{ a: -1 },"Staves":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Clothes":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 },"Rings":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 }
            }
          }
        },
        skills: {
          "8":{ name: "Commander II" },"15":{ name: "Gold Digger II" },"30":{ name: "Revive II" }
        }
      },
      {
        name: "Francesca",
        type: "Spellcasters",
        sex: "F",
        tier: 4,
        cap: 50,
        lv: null,
        power: {
          base:2500,
          m:3.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Guns":{ a: 1 },"Staves":{ a: 0 },"Swords":{ a: -1 },"Spears":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Potions":{ a: 0 }
            }
          }
        },
        skills: {
          "13":{ name: "Fastidious III" },"20":{ name: "Resilient III" },"28":{ name: "Supplier III" }
        }
      },
      {
        name: "Garreth",
        type: "Rogues",
        sex: "M",
        tier: 1,
        cap: 30,
        lv: null,
        power: {
          base:50,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Daggers":{ a: 1 },"Bows":{ a: -1 },"Guns":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Pendants":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "5":{ name: "Lucky I" },"14":{ name: "Treasure Hunter I" },"20":{ name: "Scavenger I" }
        }
      },
      {
        name: "Gauvin",
        type: "Fighters",
        sex: "M",
        tier: 2,
        cap: 40,
        lv: null,
        power: {
          base:500,
          m:1.50
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Spears":{ a: 1 },"Axes":{ a: 0 },"Swords":{ a: -1 },"Maces":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 },"Pendants":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "4":{ name: "Leader I" },"14":{ name: "Brothers-in-arms I" },"18":{ name: "Resilient II" }
        }
      },
      {
        name: "Irene",
        type: "Rogues",
        sex: "F",
        tier: 2,
        cap: 45,
        lv: null,
        power: {
          base:500,
          m:1.50
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Swords":{ a: 1 },"Guns":{ a: 0 },"Daggers":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Shields":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 },"Projectiles":{ a: -1 }
            }
          }
        },
        skills: {
          "9":{ name: "Gangster I" },"20":{ name: "Resourceful I" },"28":{ name: "Supplier II" }
        }
      },
      {
        name: "Karal",
        type: "Fighters",
        sex: "F",
        tier: 1,
        cap: 25,
        lv: null,
        power: {
          base:100,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Axes":{ a: 1 },"Maces":{ a: 0 },"Spears":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Vests":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 },"Pendants":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 },"Projectiles":{ a: -1 }
            }
          }
        },
        skills: {
          "1":{ name: "Amazon I" },"18":{ name: "Resilient II" },"21":{ name: "Crush" }
        }
      },
      {
        name: "Kuro Shobi",
        type: "Rogues",
        sex: "F",
        tier: 5,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:4.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Swords":{ a: 1 },"Daggers":{ a: 0 },"Bows":{ a: 0 },"Guns":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 },"Clothes":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Instruments":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 }
            }
          }
        },
        skills: {
          "14":{ name: "Gangster III" },"26":{ name: "Resourceful III" },"34":{ name: "Speed Runner III" }
        }
      },
      {
        name: "Kurul",
        type: "Fighters",
        sex: "M",
        tier: 4,
        cap: 50,
        lv: null,
        power: {
          base:2500,
          m:3.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Maces":{ a: 1 },"Axes":{ a: 0 },"Spears":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Vests":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Pendants":{ a: 0 },"Shields":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Remedies":{ a: 0 }
            }
          }
        },
        skills: {
          "12":{ name: "Energetic II" },"20":{ name: "Scavenger II" },"25":{ name: "Leader II" }
        }
      },
      {
        name: "Lancaster",
        type: "Fighters",
        sex: "M",
        tier: 3,
        cap: 45,
        lv: null,
        power: {
          base:1000,
          m:2.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Axes":{ a: 1 },"Swords":{ a: 0 },"Spears":{ a: 0 },"Maces":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Remedies":{ a: 0 },"Potions":{ a: -1 }
            }
          }
        },
        skills: {
          "7":{ name: "Brothers-in-arms II" },"12":{ name: "Protector II" },"26":{ name: "Resourceful II" }
        }
      },
      {
        name: "Lorelei",
        type: "Rogues",
        sex: "F",
        tier: 6,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:5.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Daggers":{ a: 1 },"Guns":{ a: 0 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 }
            }
          }
        },
        skills: {
          "20":{ name: "Lucky III" },"25":{ name: "Backstab" },"30":{ name: "Scavenger III" }
        }
      },
      {
        name: "Louca",
        type: "Rogues",
        sex: "F",
        tier: 5,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:4.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Guns":{ a: 1 },"Maces":{ a: 0 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 },"Boots":{ a: -1 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Shields":{ a: -1 },"Pendants":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Remedies":{ a: 0 },"Projectiles":{ a: -1 }
            }
          }
        },
        skills: {
          "18":{ name: "Scavenger III" },"25":{ name: "Treasure Hunter III" },"35":{ name: "Support III" }
        }
      },
      {
        name: "Melina",
        type: "Spellcasters",
        sex: "F",
        tier: 1,
        cap: 25,
        lv: null,
        power: {
          base:50,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Staves":{ a: 1 },"Daggers":{ a: -1 },"Bows":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Pendants":{ a: 0 },"Rings":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "6":{ name: "Fireball" },"10":{ name: "Wise I" },"18":{ name: "Speed Runner I" }
        }
      },
      {
        name: "Mila",
        type: "Rogues",
        sex: "F",
        tier: 2,
        cap: 40,
        lv: null,
        power: {
          base:500,
          m:1.50
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Dagges":{ a: 1 },"Maces":{ a: -1 },"Bows":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Pendants":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "7":{ name: "Gold Digger I" },"14":{ name: "Treasure Hunter II" },"22":{ name: "Lucky II" }
        }
      },
      {
        name: "Minh",
        type: "Spellcasters",
        sex: "M",
        tier: 1,
        cap: 35,
        lv: null,
        power: {
          base:50,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Maces":{ a: 1 },"Staves":{ a: 0 },"Bows":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Pendants":{ a: 0 },"Instruments":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Potions":{ a: 0 },"Spells":{ a: -1 }
            }
          }
        },
        skills: {
          "6":{ name: "Wise I" },"15":{ name: "Healer I" },"22":{ name: "Revive I" }
        }
      },
      {
        name: "Mojian",
        type: "Spellcasters",
        sex: "M",
        tier: 5,
        cap: 55,
        lv: null,
        power: {
          base:5000,
          m:4.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Staves":{ a: 1 },"Guns":{ a: 0 },"Bows":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armor":{ a: 0 },"Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Pendants":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Potions":{ a: -1 }
            }
          }
        },
        skills: {
          "15":{ name: "Commander III" },"22":{ name: "Arch Wizard III" },"35":{ name: "Thunderbolt" }
        }
      },
      {
        name: "Nya",
        type: "Spellcasters",
        sex: "F",
        tier: 2,
        cap: 40,
        lv: null,
        power: {
          base:500,
          m:1.50
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Staves":{ a: 1 },"Daggers":{ a: -1 },"Spears":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 },"Rings":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Remedies":{ a: -1 }
            }
          }
        },
        skills: {
          "12":{ name: "Revive I" },"17":{ name: "Arch Wizard I" },"25":{ name: "Cone-of-cold" }
        }
      },
      {
        name: "Odette",
        type: "Rogues",
        sex: "F",
        tier: 3,
        cap: 45,
        lv: null,
        power: {
          base:1000,
          m:2.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Bows":{ a: 1 },"Swords":{ a: 0 },"Daggers":{ a: 0 },"Guns":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 },"Clothes":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Pendants":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: 0 }
            }
          }
        },
        skills: {
          "8":{ name: "Fastidious II" },"18":{ name: "Amazon II" },"24":{ name: "Support II" }
        }
      },
      {
        name: "Oneira",
        type: "Spellcasters",
        sex: "F",
        tier: 3,
        cap: 45,
        lv: null,
        power: {
          base:1000,
          m:2.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Daggers":{ a: 1 },"Staves":{ a: -1 },"Bows":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Clothes":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Instruments":{ a: 0 },"Pendants":{ a: 0 },"Rings":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Spells":{ a: 0 },"Potions":{ a: -1 }
            }
          }
        },
        skills: {
          "6":{ name: "Gold Digger III" },"18":{ name: "Healer II" },"24":{ name: "Support II" }
        }
      },
      {
        name: "Palash",
        type: "Rogues",
        sex: "M",
        tier: 1,
        cap: 40,
        lv: null,
        power: {
          base:100,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Bows":{ a: 1 },"Axes":{ a: 0 },"Guns":{ a: -1 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Vests":{ a: 0 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Hats":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Bracers":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Footwear":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Rings":{ a: 0 },"Instruments":{ a: -1 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Projectiles":{ a: -1 },"Remedies":{ a: 0 }
            }
          }
        },
        skills: {
          "3":{ name: "Resilient I" },"16":{ name: "Scavenger I" },"22":{ name: "Supplier I" }
        }
      },
      {
        name: "Theor",
        type: "Fighters",
        sex: "M",
        tier: 1,
        cap: 30,
        lv: null,
        power: {
          base:50,
          m:1.00
        },
        slots: {
          weapon: {
            item: null,
            q: null,
            list: {
              "Swords":{ a: 1 },"Axes":{ a: 0 },"Maces":{ a: 0 },"Spears":{ a: -2 }
            }
          },
          body: {
            item: null,
            q: null,
            list: {
              "Armors":{ a: 0 },"Vests":{ a: -1 }
            }
          },
          head: {
            item: null,
            q: null,
            list: {
              "Helmets":{ a: 0 }
            }
          },
          arms: {
            item: null,
            q: null,
            list: {
              "Gauntlets":{ a: 0 }
            }
          },
          legs: {
            item: null,
            q: null,
            list: {
              "Boots":{ a: 0 }
            }
          },
          aux1: {
            item: null,
            q: null,
            list: {
              "Shields":{ a: 0 }
            }
          },
          aux2: {
            item: null,
            q: null,
            list: {
              "Remedies":{ a: 0 }
            }
          }
        },
        skills: {
          "5":{ name: "Energetic I" },"10":{ name: "Cleave" },"15":{ name: "Brothers-in-arms I" }
        }
      },
    ];
    cache.set( "heroes", heroes, true );
  }
  t = cache.get( "items" )
  if ( !t ) {
    var items = [
      {
        class: "Armor",
        name: "Cuirass",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Armor",
        name: "Banded Mail",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Armor",
        name: "Scale Mail",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Armor",
        name: "Ring Mail",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Armor",
        name: "Chainmail",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Armor",
        name: "Half Plate",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Armor",
        name: "Tlahuiztli",
        lv: 10,
        power: 290,
  
      },
      {
        class: "Armor",
        name: "Moonplate",
        lv: 10,
        power: 240,
        skill: { name: "Treasure Hunter I", q: "Flawless" }
      },
      {
        class: "Armor",
        name: "Steel Cuirass",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Armor",
        name: "Full Plate",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Armor",
        name: "Longmail",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Armor",
        name: "Noble Plate",
        lv: 18,
        power: 625,
        skill: { name: "Support I", q: "Flawless" }
      },
      {
        class: "Armor",
        name: "Silvered Scales",
        lv: 19,
        power: 460,
  
      },
      {
        class: "Armor",
        name: "Arcane Guard",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Armor",
        name: "Runic Mail",
        lv: 23,
        power: 600,
  
      },
      {
        class: "Armor",
        name: "Chaos Armor",
        lv: 25,
        power: 825,
        skill: { name: "Resilient I", q: "Epic" }
      },
      {
        class: "Armor",
        name: "Shining Armor",
        lv: 27,
        power: 725,
  
      },
      {
        class: "Armor",
        name: "Valkyrie Armor",
        lv: 30,
        power: 1275,
  
      },
      {
        class: "Armor",
        name: "White Fullplate",
        lv: 32,
        power: 925,
  
      },
      {
        class: "Armor",
        name: "Eldritch Mail",
        lv: 35,
        power: 1550,
        skill: { name: "Lucky I", q: "Epic" }
      },
      {
        class: "Armor",
        name: "Golden Heart",
        lv: 36,
        power: 1075,
  
      },
      {
        class: "Armor",
        name: "Gaia's Fortress",
        lv: 38,
        power: 1450,
        skill: { name: "Commander I", q: "Legendary" }
      },
      {
        class: "Armor",
        name: "Draconic Plate",
        lv: 39,
        power: 1800,
        skill: { name: "Protector I", q: "Legendary" }
      },
      {
        class: "Armor",
        name: "Twilight Cuirass",
        lv: 40,
        power: 1250,
  
      },
      {
        class: "Armor",
        name: "Crimson Plate",
        lv: 42,
        power: 1325,
  
      },
      {
        class: "Armor",
        name: "Dark Silver Armor",
        lv: 44,
        power: 1425,
  
      },
      {
        class: "Armor",
        name: "Earthen Mail",
        lv: 46,
        power: 1875,
        skill: { name: "Stoneskin", q: "Legendary" }
      },
      {
        class: "Armor",
        name: "Hallowed Casket",
        lv: 48,
        power: 2400,
        skill: { name: "Energetic I", q: "Mythical" }
      },
      {
        class: "Armor",
        name: "Oracle's Armor",
        lv: 49,
        power: 2450,
        skill: { name: "Mage Armor", q: "Epic" }
      },
      {
        class: "Armor",
        name: "Black Mail",
        lv: 53,
        power: 2725,
        skill: { name: "Protector II", q: "Mythical" }
      },
      {
        class: "Axes",
        name: "Hand Axe",
        lv: 2,
        power: 26,
  
      },
      {
        class: "Axes",
        name: "Iron Axe",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Axes",
        name: "Broad Axe",
        lv: 4,
        power: 68,
  
      },
      {
        class: "Axes",
        name: "Halberd",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Axes",
        name: "Druidic Axe",
        lv: 6,
        power: 175,
  
      },
      {
        class: "Axes",
        name: "Hunting Axe",
        lv: 6,
        power: 115,
  
      },
      {
        class: "Axes",
        name: "Pole Axe",
        lv: 9,
        power: 200,
  
      },
      {
        class: "Axes",
        name: "Tiamat",
        lv: 10,
        power: 290,
        skill: { name: "Energetic I", q: "Flawless" }
      },
      {
        class: "Axes",
        name: "Labrys",
        lv: 12,
        power: 300,
  
      },
      {
        class: "Axes",
        name: "Hoe",
        lv: 13,
        power: 490,
  
      },
      {
        class: "Axes",
        name: "Steel Axe",
        lv: 14,
        power: 360,
  
      },
      {
        class: "Axes",
        name: "Hawk",
        lv: 16,
        power: 430,
  
      },
      {
        class: "Axes",
        name: "Lava Axe",
        lv: 20,
        power: 575,
  
      },
      {
        class: "Axes",
        name: "Reaper",
        lv: 22,
        power: 1000,
  
      },
      {
        class: "Axes",
        name: "Berserker's Axe",
        lv: 23,
        power: 1075,
        skill: { name: "Cleave", q: "Flawless" }
      },
      {
        class: "Axes",
        name: "Bone Reaver",
        lv: 24,
        power: 750,
  
      },
      {
        class: "Axes",
        name: "Sharp Tusk",
        lv: 25,
        power: 1000,
        skill: { name: "Resilient I", q: "Epic" }
      },
      {
        class: "Axes",
        name: "Itztopilli",
        lv: 26,
        power: 1250,
  
      },
      {
        class: "Axes",
        name: "Crystal Asunder",
        lv: 28,
        power: 925,
  
      },
      {
        class: "Axes",
        name: "Shining Axe",
        lv: 31,
        power: 1050,
  
      },
      {
        class: "Axes",
        name: "Widow Maker",
        lv: 32,
        power: 1650,
        skill: { name: "Amazon I", q: "Epic" }
      },
      {
        class: "Axes",
        name: "Nocturne Axe",
        lv: 33,
        power: 1150,
  
      },
      {
        class: "Axes",
        name: "Storm Splitter",
        lv: 36,
        power: 1300,
  
      },
      {
        class: "Axes",
        name: "Infernal Rage",
        lv: 38,
        power: 1750,
        skill: { name: "Brothers-in-arms I", q: "Legendary" }
      },
      {
        class: "Axes",
        name: "Eagle",
        lv: 39,
        power: 1450,
  
      },
      {
        class: "Axes",
        name: "Ragnarok's Edge",
        lv: 40,
        power: 2250,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Axes",
        name: "Retribution",
        lv: 42,
        power: 1600,
  
      },
      {
        class: "Axes",
        name: "Wyvern Axe",
        lv: 45,
        power: 1750,
  
      },
      {
        class: "Axes",
        name: "Heartstopper Axe",
        lv: 47,
        power: 2800,
        skill: { name: "Energetic II", q: "Mythical" }
      },
      {
        class: "Axes",
        name: "Frenzied Axe",
        lv: 48,
        power: 2400,
        skill: { name: "Berserker", q: "Mythical" }
      },
      {
        class: "Axes",
        name: "Umbral Axe",
        lv: 50,
        power: 3025,
        skill: { name: "Shadowstep", q: "Legendary" }
      },
      {
        class: "Axes",
        name: "Forseti's Axe",
        lv: 53,
        power: 3275,
        skill: { name: "Brothers-in-arms II", q: "Mythical" }
      },
      {
        class: "Boots",
        name: "Heavy Boots",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Boots",
        name: "Rider's Boots",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Boots",
        name: "Chain Greaves",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Boots",
        name: "Plated Boots",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Boots",
        name: "Traveling Boots",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Boots",
        name: "Moon Boots",
        lv: 9,
        power: 210,
        skill: { name: "Energetic I", q: "Flawless" }
      },
      {
        class: "Boots",
        name: "Red Boots",
        lv: 10,
        power: 190,
  
      },
      {
        class: "Boots",
        name: "Lion Boots",
        lv: 12,
        power: 370,
        skill: { name: "Leader I", q: "Legendary" }
      },
      {
        class: "Boots",
        name: "Explorer Boots",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Boots",
        name: "Valkyrie Boots",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Boots",
        name: "Sabaton",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Boots",
        name: "Warrior's Greaves",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Boots",
        name: "Knight Riders",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Boots",
        name: "Adventurer's Boots",
        lv: 24,
        power: 950,
  
      },
      {
        class: "Boots",
        name: "Silvered Greaves",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Boots",
        name: "Flame Greaves",
        lv: 27,
        power: 925,
        skill: { name: "Fireball", q: "Epic" }
      },
      {
        class: "Boots",
        name: "Lord's Boots",
        lv: 29,
        power: 800,
  
      },
      {
        class: "Boots",
        name: "Magic Riders",
        lv: 30,
        power: 1275,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Boots",
        name: "Frost Sabatons",
        lv: 32,
        power: 925,
  
      },
      {
        class: "Boots",
        name: "Hallowed Stomper",
        lv: 33,
        power: 1450,
  
      },
      {
        class: "Boots",
        name: "Earthshakers",
        lv: 34,
        power: 1000,
  
      },
      {
        class: "Boots",
        name: "King's Boots",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Boots",
        name: "Skull Stompers",
        lv: 38,
        power: 1450,
        skill: { name: "Crush", q: "Legendary" }
      },
      {
        class: "Boots",
        name: "Draconic Greaves",
        lv: 39,
        power: 1800,
        skill: { name: "Protector I", q: "Legendary" }
      },
      {
        class: "Boots",
        name: "Adamantium Boots",
        lv: 40,
        power: 1250,
  
      },
      {
        class: "Boots",
        name: "Royal Greaves",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Boots",
        name: "Azure Boots",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Boots",
        name: "Obsidian Greaves",
        lv: 47,
        power: 1950,
        skill: { name: "Commander II", q: "Legendary" }
      },
      {
        class: "Boots",
        name: "Titan's Feet",
        lv: 50,
        power: 2525,
        skill: { name: "Crush", q: "Mythical" }
      },
      {
        class: "Boots",
        name: "Wildling Boots",
        lv: 52,
        power: 2675,
        skill: { name: "Detect Secrets", q: "Mythical" }
      },
      {
        class: "Bows",
        name: "Short Bow",
        lv: 2,
        power: 26,
  
      },
      {
        class: "Bows",
        name: "Long Bow",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Bows",
        name: "Faery's String",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Bows",
        name: "Double String",
        lv: 7,
        power: 140,
  
      },
      {
        class: "Bows",
        name: "Falcon Eye",
        lv: 8,
        power: 215,
        skill: { name: "Energetic I", q: "Flawless" }
      },
      {
        class: "Bows",
        name: "Composite Bow",
        lv: 9,
        power: 200,
  
      },
      {
        class: "Bows",
        name: "Crossbow",
        lv: 11,
        power: 260,
  
      },
      {
        class: "Bows",
        name: "Hallowed Striker",
        lv: 13,
        power: 490,
  
      },
      {
        class: "Bows",
        name: "Recurved Bow",
        lv: 14,
        power: 360,
  
      },
      {
        class: "Bows",
        name: "Heavy Crossbow",
        lv: 17,
        power: 470,
  
      },
      {
        class: "Bows",
        name: "Self-Loader",
        lv: 18,
        power: 775,
        skill: { name: "Lucky I", q: "Flawless" }
      },
      {
        class: "Bows",
        name: "Forester",
        lv: 20,
        power: 575,
  
      },
      {
        class: "Bows",
        name: "Eagle Eye",
        lv: 21,
        power: 775,
        skill: { name: "Fastidious I", q: "Epic" }
      },
      {
        class: "Bows",
        name: "Transfixer",
        lv: 23,
        power: 700,
  
      },
      {
        class: "Bows",
        name: "Silent Arbalest",
        lv: 25,
        power: 800,
  
      },
      {
        class: "Bows",
        name: "Wind Striker",
        lv: 27,
        power: 875,
  
      },
      {
        class: "Bows",
        name: "Bow Of Light",
        lv: 29,
        power: 975,
  
      },
      {
        class: "Bows",
        name: "Valkyrie's Touch",
        lv: 30,
        power: 1525,
  
      },
      {
        class: "Bows",
        name: "Spider",
        lv: 31,
        power: 1050,
  
      },
      {
        class: "Bows",
        name: "Chimera Wings",
        lv: 34,
        power: 1200,
  
      },
      {
        class: "Bows",
        name: "Evelyn",
        lv: 35,
        power: 1875,
        skill: { name: "Treasure Hunter I", q: "Epic" }
      },
      {
        class: "Bows",
        name: "Dragon Eye",
        lv: 37,
        power: 1675,
        skill: { name: "Supplier I", q: "Legendary" }
      },
      {
        class: "Bows",
        name: "Lovestruck",
        lv: 38,
        power: 2100,
  
      },
      {
        class: "Bows",
        name: "Griffin Wings",
        lv: 38,
        power: 1400,
  
      },
      {
        class: "Bows",
        name: "Adamantium Crossbow",
        lv: 39,
        power: 2175,
        skill: { name: "Support I", q: "Legendary" }
      },
      {
        class: "Bows",
        name: "Twilight Shot",
        lv: 40,
        power: 1500,
  
      },
      {
        class: "Bows",
        name: "Elven Bow",
        lv: 43,
        power: 2050,
        skill: { name: "Detect Secrets", q: "Mythical" }
      },
      {
        class: "Bows",
        name: "Serpentshooter",
        lv: 44,
        power: 1700,
  
      },
      {
        class: "Bows",
        name: "Wind Piercer",
        lv: 48,
        power: 2875,
        skill: { name: "Gangster II", q: "Legendary" }
      },
      {
        class: "Bows",
        name: "Lycan Slayer",
        lv: 50,
        power: 3025,
        skill: { name: "Detect Secrets", q: "Mythical" }
      },
      {
        class: "Bows",
        name: "Artemis' Bow",
        lv: 54,
        power: 3375,
        skill: { name: "Resourceful II", q: "Mythical" }
      },
      {
        class: "Bracers",
        name: "Leather Bracers",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Bracers",
        name: "Gloves",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Bracers",
        name: "Wrist Guards",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Bracers",
        name: "Padded Gloves",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Bracers",
        name: "Mystic Gloves",
        lv: 6,
        power: 218,
  
      },
      {
        class: "Bracers",
        name: "Fur Gloves",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Bracers",
        name: "Venomous Hands",
        lv: 9,
        power: 210,
        skill: { name: "Backstab", q: "Flawless" }
      },
      {
        class: "Bracers",
        name: "Woven Bracers",
        lv: 10,
        power: 190,
  
      },
      {
        class: "Bracers",
        name: "Dexterous Gloves",
        lv: 12,
        power: 245,
  
      },
      {
        class: "Bracers",
        name: "Elemental Bracers",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Bracers",
        name: "Wisdom Gloves",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Bracers",
        name: "Grandmaster Gloves",
        lv: 15,
        power: 420,
        skill: { name: "Wise I", q: "Epic" }
      },
      {
        class: "Bracers",
        name: "Flaming Hands",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Bracers",
        name: "Shadowed Gloves",
        lv: 18,
        power: 625,
        skill: { name: "Gangster I", q: "Flawless" }
      },
      {
        class: "Bracers",
        name: "Royal Bracers",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Bracers",
        name: "Alchemist Gloves",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Bracers",
        name: "Mage Bracers",
        lv: 24,
        power: 625,
  
      },
      {
        class: "Bracers",
        name: "Sorcerer's Bracers",
        lv: 26,
        power: 700,
  
      },
      {
        class: "Bracers",
        name: "Ehecatl's Gloves",
        lv: 28,
        power: 1150,
  
      },
      {
        class: "Bracers",
        name: "Shield Bracers",
        lv: 30,
        power: 850,
  
      },
      {
        class: "Bracers",
        name: "Santa's Gloves",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Bracers",
        name: "Angel Gloves",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Bracers",
        name: "Freezing Bracers",
        lv: 36,
        power: 1625,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Bracers",
        name: "Runic Bracers",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Bracers",
        name: "Nightstalker Gloves",
        lv: 38,
        power: 1450,
        skill: { name: "Lucky I", q: "Legendary" }
      },
      {
        class: "Bracers",
        name: "Death Grip",
        lv: 39,
        power: 1800,
        skill: { name: "Amazon I", q: "Legendary" }
      },
      {
        class: "Bracers",
        name: "Midas' Gloves",
        lv: 40,
        power: 1875,
        skill: { name: "Support II", q: "Legendary" }
      },
      {
        class: "Bracers",
        name: "Cindari Gloves",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Bracers",
        name: "Ogre Bracers",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Bracers",
        name: "Frostfire Gloves",
        lv: 45,
        power: 1825,
        skill: { name: "Cone-of-cold", q: "Legendary" }
      },
      {
        class: "Bracers",
        name: "Starry Gloves",
        lv: 46,
        power: 2250,
        skill: { name: "MAgic Find", q: "Mythical" }
      },
      {
        class: "Bracers",
        name: "Archangel Gloves",
        lv: 49,
        power: 2450,
        skill: { name: "Revive II", q: "Mythical" }
      },
      {
        class: "Bracers",
        name: "Nether Gloves",
        lv: 52,
        power: 2675,
        skill: { name: "Lucky II", q: "Mythical" }
      },
      {
        class: "Clothes",
        name: "Tunic",
        lv: 1,
        power: 10,
  
      },
      {
        class: "Clothes",
        name: "Cloak",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Clothes",
        name: "Mantle",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Clothes",
        name: "Red Tunic",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Clothes",
        name: "Robe",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Clothes",
        name: "Doublet",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Clothes",
        name: "Apprentice Robes",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Clothes",
        name: "Ice Cloak",
        lv: 13,
        power: 340,
        skill: { name: "Cone-of-cold", q: "Epic" }
      },
      {
        class: "Clothes",
        name: "Magician's Cloak",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Clothes",
        name: "Silk Robe",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Clothes",
        name: "Heart Robe",
        lv: 18,
        power: 625,
  
      },
      {
        class: "Clothes",
        name: "Mage Robe",
        lv: 19,
        power: 675,
        skill: { name: "Arch Wizard I", q: "Flawless" }
      },
      {
        class: "Clothes",
        name: "Sacred Tunic",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Clothes",
        name: "Imperial Mantle",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Clothes",
        name: "Gaia's Mantle",
        lv: 27,
        power: 1100,
  
      },
      {
        class: "Clothes",
        name: "Stealth Apparel",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Clothes",
        name: "Storm Apparel",
        lv: 29,
        power: 1000,
        skill: { name: "Wise I", q: "Legendary" }
      },
      {
        class: "Clothes",
        name: "Night Walker",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Clothes",
        name: "Sorcerer Robe",
        lv: 32,
        power: 1375,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Clothes",
        name: "Nightmare Cape",
        lv: 33,
        power: 1450,
        skill: { name: "Shadowstep", q: "Legendary" }
      },
      {
        class: "Clothes",
        name: "Sage's Robe",
        lv: 34,
        power: 1000,
  
      },
      {
        class: "Clothes",
        name: "Shimmering Robe",
        lv: 36,
        power: 1075,
  
      },
      {
        class: "Clothes",
        name: "Plasmic Robe",
        lv: 38,
        power: 1450,
        skill: { name: "Healer I", q: "Legendary" }
      },
      {
        class: "Clothes",
        name: "Archwizard Robe",
        lv: 39,
        power: 1800,
        skill: { name: "Arch Wizard I", q: "Legendary" }
      },
      {
        class: "Clothes",
        name: "Twilight Robe",
        lv: 40,
        power: 1250,
  
      },
      {
        class: "Clothes",
        name: "King's Mantle",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Clothes",
        name: "Twilight Doublet",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Clothes",
        name: "Patriot's Jacket",
        lv: 46,
        power: 2250,
        skill: { name: "Amazon III", q: "Mythical" }
      },
      {
        class: "Clothes",
        name: "Mage Doublet",
        lv: 47,
        power: 1950,
        skill: { name: "Arch Wizard II", q: "Epic" }
      },
      {
        class: "Clothes",
        name: "Holy Tunic",
        lv: 50,
        power: 2525,
        skill: { name: "Aura of Protection", q: "Mythical" }
      },
      {
        class: "Clothes",
        name: "Sunrise Robe",
        lv: 52,
        power: 2675,
        skill: { name: "Arch Wizard III", q: "Mythical" }
      },
      {
        class: "Daggers",
        name: "Knife",
        lv: 1,
        power: 10,
  
      },
      {
        class: "Daggers",
        name: "Pocket Knife",
        lv: 2,
        power: 26,
  
      },
      {
        class: "Daggers",
        name: "Kris",
        lv: 3,
        power: 68,
  
      },
      {
        class: "Daggers",
        name: "Dirk",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Daggers",
        name: "Parrying Dagger",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Daggers",
        name: "Stiletto",
        lv: 7,
        power: 140,
  
      },
      {
        class: "Daggers",
        name: "Bronze Dagger",
        lv: 8,
        power: 260,
  
      },
      {
        class: "Daggers",
        name: "White Dagger",
        lv: 9,
        power: 250,
        skill: { name: "Lucky I", q: "Flawless" }
      },
      {
        class: "Daggers",
        name: "Broad Blade",
        lv: 10,
        power: 230,
  
      },
      {
        class: "Daggers",
        name: "Gutting Knife",
        lv: 12,
        power: 300,
  
      },
      {
        class: "Daggers",
        name: "Hunting Knife",
        lv: 13,
        power: 330,
  
      },
      {
        class: "Daggers",
        name: "Crimson Heart",
        lv: 15,
        power: 500,
        skill: { name: "Fastidious I", q: "Epic" }
      },
      {
        class: "Daggers",
        name: "Mail Breaker",
        lv: 16,
        power: 430,
  
      },
      {
        class: "Daggers",
        name: "Phantom Katar",
        lv: 18,
        power: 775,
        skill: { name: "Backstab", q: "Flawless" }
      },
      {
        class: "Daggers",
        name: "Switch Blade",
        lv: 20,
        power: 575,
  
      },
      {
        class: "Daggers",
        name: "Life Stealer",
        lv: 22,
        power: 675,
  
      },
      {
        class: "Daggers",
        name: "Night Shiv",
        lv: 25,
        power: 800,
  
      },
      {
        class: "Daggers",
        name: "Shadowripper",
        lv: 27,
        power: 875,
  
      },
      {
        class: "Daggers",
        name: "Wing Blade",
        lv: 30,
        power: 1025,
  
      },
      {
        class: "Daggers",
        name: "Dark Hand",
        lv: 35,
        power: 1250,
  
      },
      {
        class: "Daggers",
        name: "Betrayer",
        lv: 36,
        power: 1950,
        skill: { name: "Gangster I", q: "Epic" }
      },
      {
        class: "Daggers",
        name: "Royal Dirk",
        lv: 37,
        power: 1350,
  
      },
      {
        class: "Daggers",
        name: "Seven Stars",
        lv: 38,
        power: 1750,
        skill: { name: "Scavenger I", q: "Legendary" }
      },
      {
        class: "Daggers",
        name: "Dragon Fang",
        lv: 39,
        power: 2175,
        skill: { name: "Backstab", q: "Great" }
      },
      {
        class: "Daggers",
        name: "Traitorous Blade",
        lv: 41,
        power: 1550,
  
      },
      {
        class: "Daggers",
        name: "Jagged Spike",
        lv: 44,
        power: 1700,
  
      },
      {
        class: "Daggers",
        name: "Tecpatl",
        lv: 44,
        power: 2550,
        skill: { name: "Treasure Hunter III", q: "Mythical" }
      },
      {
        class: "Daggers",
        name: "Obsidian Dagger",
        lv: 46,
        power: 2250,
        skill: { name: "Riposte", q: "Mythical" }
      },
      {
        class: "Daggers",
        name: "Aphotic Shiv",
        lv: 49,
        power: 2950,
        skill: { name: "Shadowstep", q: "Legendary" }
      },
      {
        class: "Daggers",
        name: "Primal Dagger",
        lv: 50,
        power: 3025,
        skill: { name: "Scavenger III", q: "Mythical" }
      },
      {
        class: "Daggers",
        name: "Mistilteinn",
        lv: 55,
        power: 3450,
        skill: { name: "Speed Runner II", q: "Mythical" }
      },
      {
        class: "Footwear",
        name: "Sandals",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Footwear",
        name: "Shoes",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Footwear",
        name: "Druidic Shoes",
        lv: 3,
        power: 58,
  
      },
      {
        class: "Footwear",
        name: "Leather Shoes",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Footwear",
        name: "Fur Loafers",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Footwear",
        name: "Light Boots",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Footwear",
        name: "Elven Boots",
        lv: 8,
        power: 175,
        skill: { name: "Wise I", q: "Flawless" }
      },
      {
        class: "Footwear",
        name: "Dancer Shoes",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Footwear",
        name: "Legion Sandals",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Footwear",
        name: "Horned Shoes",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Footwear",
        name: "Moon Walkers",
        lv: 15,
        power: 500,
        skill: { name: "Energetic I", q: "Flawless" }
      },
      {
        class: "Footwear",
        name: "Golden Shoes",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Footwear",
        name: "Plumed Loafers",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Footwear",
        name: "Winged Sandals",
        lv: 22,
        power: 700,
        skill: { name: "Support I", q: "Epic" }
      },
      {
        class: "Footwear",
        name: "Imperial Sandals",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Footwear",
        name: "Patriot Boots",
        lv: 27,
        power: 1100,
        skill: { name: "Wise II", q: "Legendary" }
      },
      {
        class: "Footwear",
        name: "Genji Getas",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Footwear",
        name: "Path Finders",
        lv: 29,
        power: 1200,
        skill: { name: "Resilient I", q: "Epic" }
      },
      {
        class: "Footwear",
        name: "Floating Slippers",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Footwear",
        name: "Harvest Shoes",
        lv: 33,
        power: 1450,
  
      },
      {
        class: "Footwear",
        name: "Wind Walkers",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Footwear",
        name: "Arcane Sandals",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Footwear",
        name: "Planeswalkers",
        lv: 38,
        power: 1450,
        skill: { name: "Healer I", q: "Legendary" }
      },
      {
        class: "Footwear",
        name: "Adamantium Shoes",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Footwear",
        name: "Draconic Boots",
        lv: 40,
        power: 1875,
        skill: { name: "Protector I", q: "Legendary" }
      },
      {
        class: "Footwear",
        name: "Jade Shoes",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Footwear",
        name: "Hopping Shoes",
        lv: 44,
        power: 2125,
        skill: { name: "Lucky II", q: "Mythical" }
      },
      {
        class: "Footwear",
        name: "Frostfire Shoes",
        lv: 45,
        power: 1825,
        skill: { name: "Arch Wizard II", q: "Mythical" }
      },
      {
        class: "Footwear",
        name: "Noble Shoes",
        lv: 47,
        power: 1550,
  
      },
      {
        class: "Footwear",
        name: "Firewalkers",
        lv: 49,
        power: 2450,
        skill: { name: "Mage Armor", q: "Legendary" }
      },
      {
        class: "Footwear",
        name: "Demon Trackers",
        lv: 52,
        power: 2675,
        skill: { name: "Revive III", q: "Mythical" }
      },
      {
        class: "Footwear",
        name: "Ice Walkers",
        lv: 55,
        power: 2875,
        skill: { name: "Scavenger I", q: "Legendary" }
      },
      {
        class: "Gauntlets",
        name: "Light Gauntlets",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Gauntlets",
        name: "Gauntlets",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Gauntlets",
        name: "Vambrace",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Gauntlets",
        name: "Long Gauntlets",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Gauntlets",
        name: "Meshed Gauntlets",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Gauntlets",
        name: "Moonlight Gauntlets",
        lv: 10,
        power: 240,
        skill: { name: "Speed Runner I", q: "Flawless" }
      },
      {
        class: "Gauntlets",
        name: "Chainmail Gauntlets",
        lv: 12,
        power: 245,
  
      },
      {
        class: "Gauntlets",
        name: "Jagged Gauntlets",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Gauntlets",
        name: "Lord's Gauntlets",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Gauntlets",
        name: "Steel Vambrace",
        lv: 19,
        power: 460,
  
      },
      {
        class: "Gauntlets",
        name: "Frozen Grip",
        lv: 20,
        power: 725,
        skill: { name: "Parry", q: "Flawless" }
      },
      {
        class: "Gauntlets",
        name: "Silver Gauntlets",
        lv: 23,
        power: 600,
  
      },
      {
        class: "Gauntlets",
        name: "King's Gauntlets",
        lv: 25,
        power: 825,
        skill: { name: "Commander I", q: "Epic" }
      },
      {
        class: "Gauntlets",
        name: "Bloodlust Gauntlets",
        lv: 27,
        power: 725,
  
      },
      {
        class: "Gauntlets",
        name: "Dark Vambrace",
        lv: 30,
        power: 850,
  
      },
      {
        class: "Gauntlets",
        name: "Protector Gauntlets",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Gauntlets",
        name: "Shockers",
        lv: 32,
        power: 1375,
        skill: { name: "Resourceful I", q: "Epic" }
      },
      {
        class: "Gauntlets",
        name: "Hallowed Grip",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Gauntlets",
        name: "Giga-Brace",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Gauntlets",
        name: "Fire Smashers",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Gauntlets",
        name: "Dragonscale Gauntlets",
        lv: 38,
        power: 1450,
        skill: { name: "Crush", q: "Legendary" }
      },
      {
        class: "Gauntlets",
        name: "Twilight Fists",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Gauntlets",
        name: "Adamantium Fists",
        lv: 40,
        power: 1875,
        skill: { name: "Protector I", q: "Legendary" }
      },
      {
        class: "Gauntlets",
        name: "Golden Gauntlets",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Gauntlets",
        name: "Frostfire Gauntlets",
        lv: 45,
        power: 2200,
        skill: { name: "Aura of Protection", q: "Mythical" }
      },
      {
        class: "Gauntlets",
        name: "Abyssal Gauntlets",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Gauntlets",
        name: "Berserker Gauntlets",
        lv: 46,
        power: 1875,
        skill: { name: "Berserker", q: "Epic" }
      },
      {
        class: "Gauntlets",
        name: "Valkyrie's Grip",
        lv: 47,
        power: 2325,
        skill: { name: "Resourceful II", q: "Epic" }
      },
      {
        class: "Gauntlets",
        name: "Volcanic Smashers",
        lv: 49,
        power: 2450,
        skill: { name: "Speed Runner II", q: "Mythical" }
      },
      {
        class: "Gauntlets",
        name: "Runic Gauntlets",
        lv: 55,
        power: 2875,
        skill: { name: "Crush", q: "Epic" }
      },
      {
        class: "Guns",
        name: "Pistol",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Guns",
        name: "Musket",
        lv: 6,
        power: 115,
  
      },
      {
        class: "Guns",
        name: "Arquebuse",
        lv: 7,
        power: 140,
  
      },
      {
        class: "Guns",
        name: "Pocket Pistol",
        lv: 8,
        power: 170,
  
      },
      {
        class: "Guns",
        name: "Long Musket",
        lv: 9,
        power: 200,
  
      },
      {
        class: "Guns",
        name: "Falconer",
        lv: 11,
        power: 260,
  
      },
      {
        class: "Guns",
        name: "Six Shooter",
        lv: 12,
        power: 440,
        skill: { name: "Thunderbolt", q: "Epix" }
      },
      {
        class: "Guns",
        name: "Rifle",
        lv: 13,
        power: 410,
        skill: { name: "Fastidious I", q: "Flawless" }
      },
      {
        class: "Guns",
        name: "Axe Pistol",
        lv: 14,
        power: 360,
  
      },
      {
        class: "Guns",
        name: "Flintlock",
        lv: 17,
        power: 470,
  
      },
      {
        class: "Guns",
        name: "Black Stock",
        lv: 18,
        power: 775,
        skill: { name: "Resilient I", q: "Flawless" }
      },
      {
        class: "Guns",
        name: "Tribarrel",
        lv: 18,
        power: 775,
  
      },
      {
        class: "Guns",
        name: "Double Barrel",
        lv: 19,
        power: 550,
  
      },
      {
        class: "Guns",
        name: "Fire Gun",
        lv: 21,
        power: 625,
  
      },
      {
        class: "Guns",
        name: "Conqueror",
        lv: 22,
        power: 825,
        skill: { name: "Commander I", q: "Epic" }
      },
      {
        class: "Guns",
        name: "War Axe Pistol",
        lv: 24,
        power: 750,
  
      },
      {
        class: "Guns",
        name: "Thunder Shot",
        lv: 26,
        power: 825,
  
      },
      {
        class: "Guns",
        name: "Candy Cane Pistol",
        lv: 27,
        power: 1325,
  
      },
      {
        class: "Guns",
        name: "Death Missive",
        lv: 29,
        power: 975,
  
      },
      {
        class: "Guns",
        name: "Heart Shooter",
        lv: 31,
        power: 1600,
  
      },
      {
        class: "Guns",
        name: "Rising Sun",
        lv: 33,
        power: 1150,
  
      },
      {
        class: "Guns",
        name: "One-Shot",
        lv: 35,
        power: 1250,
  
      },
      {
        class: "Guns",
        name: "Judgement",
        lv: 36,
        power: 1950,
        skill: { name: "Brothers-in-arms I", q: "Epic" }
      },
      {
        class: "Guns",
        name: "Bomb Launcher",
        lv: 37,
        power: 1675,
        skill: { name: "Gangster I", q: "Legendary" }
      },
      {
        class: "Guns",
        name: "Solar Flare",
        lv: 38,
        power: 1400,
  
      },
      {
        class: "Guns",
        name: "Nordic Warfare",
        lv: 39,
        power: 2175,
        skill: { name: "Commander I", q: "Legendary" }
      },
      {
        class: "Guns",
        name: "Harpoon Gun",
        lv: 41,
        power: 1550,
  
      },
      {
        class: "Guns",
        name: "Blaster",
        lv: 44,
        power: 1700,
  
      },
      {
        class: "Guns",
        name: "Pirate Pistol",
        lv: 47,
        power: 2325,
        skill: { name: "Supplier II", q: "Mythical" }
      },
      {
        class: "Guns",
        name: "G.F.G.",
        lv: 48,
        power: 2875,
        skill: { name: "Fastidious II", q: "Flawless" }
      },
      {
        class: "Guns",
        name: "Stake Shooter",
        lv: 49,
        power: 2950,
        skill: { name: "Revive I", q: "Mythical" }
      },
      {
        class: "Guns",
        name: "Demonic Blast",
        lv: 50,
        power: 3025,
        skill: { name: "Amazon II", q: "Legendary" }
      },
      {
        class: "Guns",
        name: "Dragon Fire",
        lv: 53,
        power: 3275,
        skill: { name: "Scavenger II", q: "Mythical" }
      },
      {
        class: "Hats",
        name: "Circlet",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Hats",
        name: "Hood",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Hats",
        name: "Monk's Hat",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Hats",
        name: "Buckle Hat",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Hats",
        name: "Robin's Hood",
        lv: 8,
        power: 175,
        skill: { name: "Treasure Hunter I", q: "Flawless" }
      },
      {
        class: "Hats",
        name: "Plumed Hat",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Hats",
        name: "Pumpkinhead",
        lv: 8,
        power: 215,
  
      },
      {
        class: "Hats",
        name: "Thief's Hood",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Hats",
        name: "Noble Tiara",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Hats",
        name: "Light Visage",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Hats",
        name: "Jeweled Hat",
        lv: 13,
        power: 410,
  
      },
      {
        class: "Hats",
        name: "Scarlet Coif",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Hats",
        name: "Skadi's Tiara",
        lv: 18,
        power: 625,
  
      },
      {
        class: "Hats",
        name: "Magic Top",
        lv: 19,
        power: 460,
  
      },
      {
        class: "Hats",
        name: "Silver Crown",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Hats",
        name: "Elven Coif",
        lv: 24,
        power: 625,
  
      },
      {
        class: "Hats",
        name: "Golden Crown",
        lv: 25,
        power: 825,
        skill: { name: "Gold Digger I", q: "Great" }
      },
      {
        class: "Hats",
        name: "Cowboy Hat",
        lv: 26,
        power: 1050,
        skill: { name: "Riposte", q: "Legendary" }
      },
      {
        class: "Hats",
        name: "Wise Cap",
        lv: 27,
        power: 1100,
        skill: { name: "Wise I", q: "Epic" }
      },
      {
        class: "Hats",
        name: "Dark Visage",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Hats",
        name: "Shadowhood",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Hats",
        name: "Death Veil",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Hats",
        name: "Archwizard's Hat",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Hats",
        name: "Runic Tiara",
        lv: 34,
        power: 1500,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Hats",
        name: "Thunder Crown",
        lv: 36,
        power: 1350,
        skill: { name: "Thunderbolt", q: "Legendary" }
      },
      {
        class: "Hats",
        name: "Runic Coif",
        lv: 36,
        power: 1075,
  
      },
      {
        class: "Hats",
        name: "Jorou's Crown",
        lv: 38,
        power: 1750,
        skill: { name: "Protector II", q: "Legendary" }
      },
      {
        class: "Hats",
        name: "Demonic Visage",
        lv: 39,
        power: 1800,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Hats",
        name: "Jade Visage",
        lv: 40,
        power: 1250,
  
      },
      {
        class: "Hats",
        name: "Celestial Hat",
        lv: 42,
        power: 1325,
  
      },
      {
        class: "Hats",
        name: "Jaguar Helm",
        lv: 46,
        power: 2250,
        skill: { name: "Revive II", q: "Mythical" }
      },
      {
        class: "Hats",
        name: "Cultist's Hood",
        lv: 47,
        power: 1950,
        skill: { name: "Shadowstep", q: "Mythical" }
      },
      {
        class: "Hats",
        name: "Loki's Mask",
        lv: 48,
        power: 2400,
        skill: { name: "Arch Wizard II", q: "Epic" }
      },
      {
        class: "Hats",
        name: "Royal Tiara",
        lv: 50,
        power: 2525,
        skill: { name: "Gold Digger III", q: "Legendary" }
      },
      {
        class: "Hats",
        name: "Nether Crown",
        lv: 53,
        power: 2725,
        skill: { name: "Lucky III", q: "Mythical" }
      },
      {
        class: "Helmets",
        name: "Hard Hat",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Helmets",
        name: "Iron Cap",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Helmets",
        name: "Iron Helmet",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Helmets",
        name: "Horned Helm",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Helmets",
        name: "Full Helm",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Helmets",
        name: "Warrior's Helmet",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Helmets",
        name: "Moonlight Cap",
        lv: 10,
        power: 240,
        skill: { name: "Lucky I", q: "Flawless" }
      },
      {
        class: "Helmets",
        name: "Spangenhelm",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Helmets",
        name: "Scale Helmet",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Helmets",
        name: "Heart Helmet",
        lv: 15,
        power: 500,
  
      },
      {
        class: "Helmets",
        name: "Knight's Helm",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Helmets",
        name: "Paladin's Helmet",
        lv: 19,
        power: 675,
        skill: { name: "Protector I", q: "Flawless" }
      },
      {
        class: "Helmets",
        name: "Great Helm",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Helmets",
        name: "Frozen Helm",
        lv: 23,
        power: 750,
        skill: { name: "Protector I", q: "Epic" }
      },
      {
        class: "Helmets",
        name: "Silver Helm",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Helmets",
        name: "Infantry Helmet",
        lv: 27,
        power: 1100,
        skill: { name: "Support I", q: "Mythical" }
      },
      {
        class: "Helmets",
        name: "Dragoon's Casque",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Helmets",
        name: "Bunny Helmet",
        lv: 29,
        power: 1200,
  
      },
      {
        class: "Helmets",
        name: "Elir's Barbuta",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Helmets",
        name: "Adventurer's Helm",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Helmets",
        name: "Mercurial",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Helmets",
        name: "Phoenix Helmet",
        lv: 34,
        power: 1500,
        skill: { name: "Speed Runner I", q: "Legendary" }
      },
      {
        class: "Helmets",
        name: "Champion's Helm",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Helmets",
        name: "Dragonscale Helmet",
        lv: 38,
        power: 1450,
        skill: { name: "Brothers-in-arms I", q: "Legendary" }
      },
      {
        class: "Helmets",
        name: "Viking Helm",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Helmets",
        name: "Adamantium Helm",
        lv: 40,
        power: 1875,
        skill: { name: "Energetic I", q: "Legendary" }
      },
      {
        class: "Helmets",
        name: "Valkyrie Helm",
        lv: 41,
        power: 1925,
        skill: { name: "Resilient II", q: "Legendary" }
      },
      {
        class: "Helmets",
        name: "Golden Helm",
        lv: 42,
        power: 1325,
  
      },
      {
        class: "Helmets",
        name: "Frostfire Barbuta",
        lv: 45,
        power: 1825,
        skill: { name: "Cone-of-cold", q: "Legendary" }
      },
      {
        class: "Helmets",
        name: "Twilight Helm",
        lv: 46,
        power: 1500,
  
      },
      {
        class: "Helmets",
        name: "Hallowed Skull",
        lv: 47,
        power: 2325,
        skill: { name: "Revive II", q: "Mythical" }
      },
      {
        class: "Helmets",
        name: "Jade Helm",
        lv: 50,
        power: 2525,
        skill: { name: "Stoneskin", q: "Mythical" }
      },
      {
        class: "Helmets",
        name: "Jagged Crown",
        lv: 55,
        power: 2875,
        skill: { name: "Energetic II", q: "Mythical" }
      },
      {
        class: "Instruments",
        name: "Wood Flute",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Instruments",
        name: "Small Drum",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Instruments",
        name: "Pan Flute",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Instruments",
        name: "Hand Drum",
        lv: 8,
        power: 215,
  
      },
      {
        class: "Instruments",
        name: "Horn",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Instruments",
        name: "Harp",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Instruments",
        name: "Iron Flute",
        lv: 12,
        power: 310,
        skill: { name: "Resilient I", q: "Flawless" }
      },
      {
        class: "Instruments",
        name: "Lute",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Instruments",
        name: "Frozen Harp",
        lv: 16,
        power: 550,
        skill: { name: "Cone-of-cold", q: "Flawless" }
      },
      {
        class: "Instruments",
        name: "Long Flute",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Instruments",
        name: "Oud",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Instruments",
        name: "Nordic Lute",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Instruments",
        name: "Military Tap",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Instruments",
        name: "Ygg Flute",
        lv: 26,
        power: 875,
        skill: { name: "Healer I", q: "Epic" }
      },
      {
        class: "Instruments",
        name: "Silvered Flute",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Instruments",
        name: "Chinese Drum",
        lv: 29,
        power: 1200,
  
      },
      {
        class: "Instruments",
        name: "Soothing Harp",
        lv: 30,
        power: 850,
  
      },
      {
        class: "Instruments",
        name: "Wyrm Horn",
        lv: 31,
        power: 1325,
        skill: { name: "Treasure Hunter I", q: "Epic" }
      },
      {
        class: "Instruments",
        name: "Golden String",
        lv: 32,
        power: 925,
  
      },
      {
        class: "Instruments",
        name: "Hell Hound",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Instruments",
        name: "Draconian Sound",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Instruments",
        name: "Draconic Heartbeat",
        lv: 38,
        power: 1450,
        skill: { name: "Protector I", q: "Legendary" }
      },
      {
        class: "Instruments",
        name: "Twilight Flute",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Instruments",
        name: "Angelic Strings",
        lv: 40,
        power: 1875,
        skill: { name: "Revive I", q: "Legendary" }
      },
      {
        class: "Instruments",
        name: "Ancient Horn",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Instruments",
        name: "Bunny Harp",
        lv: 42,
        power: 2000,
        skill: { name: "Revive II", q: "Mythical" }
      },
      {
        class: "Instruments",
        name: "Winged Harp",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Instruments",
        name: "Frostfire Harp",
        lv: 45,
        power: 1825,
        skill: { name: "Cone-of-cold", q: "Epic" }
      },
      {
        class: "Instruments",
        name: "Angelic Bell",
        lv: 46,
        power: 2250,
        skill: { name: "Resourceful II", q: "Legendary" }
      },
      {
        class: "Instruments",
        name: "Wisdom Ocarina",
        lv: 47,
        power: 2325,
        skill: { name: "Resourceful III", q: "Mythical" }
      },
      {
        class: "Instruments",
        name: "Gaia's Flute",
        lv: 49,
        power: 2450,
        skill: { name: "Amazon II", q: "Mythical" }
      },
      {
        class: "Instruments",
        name: "Summoning Flute",
        lv: 55,
        power: 2875,
        skill: { name: "Protector III", q: "Mythical" }
      },
      {
        class: "Maces",
        name: "Club",
        lv: 1,
        power: 10,
  
      },
      {
        class: "Maces",
        name: "Spiked Club",
        lv: 2,
        power: 26,
  
      },
      {
        class: "Maces",
        name: "Shieldbreaker",
        lv: 3,
        power: 68,
  
      },
      {
        class: "Maces",
        name: "Maul",
        lv: 4,
        power: 68,
  
      },
      {
        class: "Maces",
        name: "Sledgehammer",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Maces",
        name: "Mace",
        lv: 7,
        power: 140,
  
      },
      {
        class: "Maces",
        name: "Morning Star",
        lv: 8,
        power: 215,
        skill: { name: "Crush", q: "Flawless" }
      },
      {
        class: "Maces",
        name: "Heavy Mace",
        lv: 9,
        power: 200,
  
      },
      {
        class: "Maces",
        name: "Battle Mace",
        lv: 11,
        power: 260,
  
      },
      {
        class: "Maces",
        name: "Pumpkin Smasher",
        lv: 13,
        power: 490,
  
      },
      {
        class: "Maces",
        name: "Steeled Club",
        lv: 14,
        power: 360,
  
      },
      {
        class: "Maces",
        name: "Tree Trunk",
        lv: 15,
        power: 600,
        skill: { name: "Commander I", q: "Flawless" }
      },
      {
        class: "Maces",
        name: "War Gavel",
        lv: 17,
        power: 470,
  
      },
      {
        class: "Maces",
        name: "Journey Mace",
        lv: 21,
        power: 625,
  
      },
      {
        class: "Maces",
        name: "Hammer Fist",
        lv: 22,
        power: 825,
        skill: { name: "Brothers-in-arms I", q: "Epic" }
      },
      {
        class: "Maces",
        name: "Demolisher",
        lv: 25,
        power: 800,
  
      },
      {
        class: "Maces",
        name: "Giant's Hammer",
        lv: 25,
        power: 1190,
  
      },
      {
        class: "Maces",
        name: "Fury Club",
        lv: 28,
        power: 925,
  
      },
      {
        class: "Maces",
        name: "Earthquake",
        lv: 31,
        power: 1050,
  
      },
      {
        class: "Maces",
        name: "Apocalyptus",
        lv: 32,
        power: 1650,
        skill: { name: "Energetic I", q: "Epic" }
      },
      {
        class: "Maces",
        name: "Pulverizer",
        lv: 35,
        power: 1250,
  
      },
      {
        class: "Maces",
        name: "Tide Maker",
        lv: 37,
        power: 1350,
  
      },
      {
        class: "Maces",
        name: "Evening Star",
        lv: 38,
        power: 1750,
        skill: { name: "Lucky I", q: "Legendary" }
      },
      {
        class: "Maces",
        name: "Destroyer",
        lv: 39,
        power: 1450,
  
      },
      {
        class: "Maces",
        name: "Hundred Ton",
        lv: 40,
        power: 2250,
        skill: { name: "Crush", q: "Legendary" }
      },
      {
        class: "Maces",
        name: "Storm Basher",
        lv: 43,
        power: 1650,
  
      },
      {
        class: "Maces",
        name: "Crusher",
        lv: 48,
        power: 2400,
        skill: { name: "Crush", q: "Mythical" }
      },
      {
        class: "Maces",
        name: "Lion Mace",
        lv: 48,
        power: 2875,
        skill: { name: "Leader I", q: "Mythical" }
      },
      {
        class: "Maces",
        name: "Primal Smasher",
        lv: 49,
        power: 1975,
  
      },
      {
        class: "Maces",
        name: "Tenderizer",
        lv: 50,
        power: 3025,
        skill: { name: "Energetic II", q: "Epic" }
      },
      {
        class: "Maces",
        name: "Shattering Core",
        lv: 54,
        power: 3375,
        skill: { name: "Amazon II", q: "Mythical" }
      },
      {
        class: "Pendants",
        name: "Shiny Pendant",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Pendants",
        name: "Opal Necklace",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Pendants",
        name: "Scarlet Drop",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Pendants",
        name: "Protection Pendant",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Pendants",
        name: "Luna Charm",
        lv: 10,
        power: 190,
  
      },
      {
        class: "Pendants",
        name: "Wind Charm",
        lv: 11,
        power: 270,
        skill: { name: "Arch Wizard I", q: "Flawless" }
      },
      {
        class: "Pendants",
        name: "Skeleton Ward",
        lv: 12,
        power: 245,
  
      },
      {
        class: "Pendants",
        name: "Bunny Pendant",
        lv: 13,
        power: 410,
  
      },
      {
        class: "Pendants",
        name: "Hanging Journal",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Pendants",
        name: "Fiery Talisman",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Pendants",
        name: "Azure Beads",
        lv: 18,
        power: 625,
  
      },
      {
        class: "Pendants",
        name: "Timeless Locket",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Pendants",
        name: "Jade Amulet",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Pendants",
        name: "Obelisk Charm",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Pendants",
        name: "Turning Token",
        lv: 24,
        power: 950,
        skill: { name: "Lucky I", q: "Flawless" }
      },
      {
        class: "Pendants",
        name: "Light Amulet",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Pendants",
        name: "Shielding Ward",
        lv: 27,
        power: 925,
        skill: { name: "Protector I", q: "Epic" }
      },
      {
        class: "Pendants",
        name: "Phoenix Talon",
        lv: 29,
        power: 800,
  
      },
      {
        class: "Pendants",
        name: "Freezing Ward",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Pendants",
        name: "Heart Pendant",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Pendants",
        name: "Cat's Eye",
        lv: 34,
        power: 1000,
  
      },
      {
        class: "Pendants",
        name: "Skadi's Charm",
        lv: 35,
        power: 1550,
  
      },
      {
        class: "Pendants",
        name: "Lich's Heart",
        lv: 35,
        power: 1550,
        skill: { name: "Revive I", q: "Epic" }
      },
      {
        class: "Pendants",
        name: "Draconic Amulet",
        lv: 36,
        power: 1350,
        skill: { name: "Gold Digger I", q: "Legendary" }
      },
      {
        class: "Pendants",
        name: "Trine Charm",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Pendants",
        name: "Goddess' Tear",
        lv: 38,
        power: 1750,
        skill: { name: "Healer I", q: "Legendary" }
      },
      {
        class: "Pendants",
        name: "Ancient Amulet",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Pendants",
        name: "Draconic Charm",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Pendants",
        name: "Champion's Medal",
        lv: 45,
        power: 2200,
        skill: { name: "Healer II", q: "Mythical" }
      },
      {
        class: "Pendants",
        name: "Frostfire Talisman",
        lv: 47,
        power: 1950,
        skill: { name: "Cone-of-cold", q: "Legendary" }
      },
      {
        class: "Pendants",
        name: "Gaia's Heart",
        lv: 50,
        power: 2525,
        skill: { name: "Fireball", q: "Mythical" }
      },
      {
        class: "Pendants",
        name: "Primal Charm",
        lv: 53,
        power: 2725,
        skill: { name: "Treasure Hunter I", q: "Mythical" }
      },
      {
        class: "Potions",
        name: "Health Vial",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Potions",
        name: "Mana Vial",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Potions",
        name: "Speed Potion",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Potions",
        name: "Love Splash",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Potions",
        name: "Healing Potion",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Potions",
        name: "Toxic Vial",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Potions",
        name: "Energizing Potion",
        lv: 9,
        power: 250,
  
      },
      {
        class: "Potions",
        name: "Elixir Drops",
        lv: 9,
        power: 210,
        skill: { name: "Lucky I", q: "Flawless" }
      },
      {
        class: "Potions",
        name: "Health Drink",
        lv: 10,
        power: 190,
  
      },
      {
        class: "Potions",
        name: "Strength Potion",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Potions",
        name: "Eggnog Potion",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Potions",
        name: "Warming Spray",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Potions",
        name: "Acidic Splash",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Potions",
        name: "Health Potion",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Potions",
        name: "Wisdom Potion",
        lv: 22,
        power: 825,
  
      },
      {
        class: "Potions",
        name: "Mana Potion",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Potions",
        name: "Demon's Blood",
        lv: 24,
        power: 950,
        skill: { name: "Speed Runner I", q: "Flawless" }
      },
      {
        class: "Potions",
        name: "Elixir",
        lv: 26,
        power: 875,
        skill: { name: "Healer I", q: "Epic" }
      },
      {
        class: "Potions",
        name: "Golden Potion",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Potions",
        name: "Life Potion",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Potions",
        name: "Mystic Potion",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Potions",
        name: "Invincibility Potion",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Potions",
        name: "Dragon's Blood",
        lv: 34,
        power: 1500,
        skill: { name: "Gold Digger I", q: "Epic" }
      },
      {
        class: "Potions",
        name: "Megalixir",
        lv: 36,
        power: 1350,
        skill: { name: "Energetic I", q: "Legendary" }
      },
      {
        class: "Potions",
        name: "Twilight Potion",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Potions",
        name: "Gods' Essence",
        lv: 39,
        power: 1800,
        skill: { name: "Revive I", q: "Legendary" }
      },
      {
        class: "Potions",
        name: "Clarity Potion",
        lv: 40,
        power: 1250,
  
      },
      {
        class: "Potions",
        name: "Vial Of Rebirth",
        lv: 43,
        power: 1375,
  
      },
      {
        class: "Potions",
        name: "Jack's Brew",
        lv: 44,
        power: 2125,
        skill: { name: "Energetic II", q: "Mythical" }
      },
      {
        class: "Potions",
        name: "Obsidian Potion",
        lv: 47,
        power: 1950,
        skill: { name: "Aura of Protection", q: "Legendary" }
      },
      {
        class: "Potions",
        name: "Dragonfire Potion",
        lv: 49,
        power: 2450,
        skill: { name: "Magic Find", q: "Mythical" }
      },
      {
        class: "Potions",
        name: "Gaia's Essence",
        lv: 50,
        power: 2525,
        skill: { name: "Healer II", q: "Mythical" }
      },
      {
        class: "Potions",
        name: "Unholy Potion",
        lv: 55,
        power: 2875,
        skill: { name: "Supplier III", q: "Mythical" }
      },
      {
        class: "Projectiles",
        name: "Darts",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Projectiles",
        name: "Sling",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Projectiles",
        name: "Boomerang",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Projectiles",
        name: "Kunai",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Projectiles",
        name: "Poison Darts",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Projectiles",
        name: "Fireworks",
        lv: 8,
        power: 215,
        skill: { name: "Fireball", q: "Epic" }
      },
      {
        class: "Projectiles",
        name: "Smoke Bomb",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Projectiles",
        name: "Metal Boomerang",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Projectiles",
        name: "Toxic Bomb",
        lv: 12,
        power: 310,
        skill: { name: "Gangster I", q: "Flawless" }
      },
      {
        class: "Projectiles",
        name: "Sleeping Bomb",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Projectiles",
        name: "Festive Bombs",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Projectiles",
        name: "Shock Darts",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Projectiles",
        name: "Shuriken",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Projectiles",
        name: "Elasti-Sling",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Projectiles",
        name: "Chakram",
        lv: 22,
        power: 550,
  
      },
      {
        class: "Projectiles",
        name: "Bladed Feather",
        lv: 22,
        power: 825,
  
      },
      {
        class: "Projectiles",
        name: "Magic Shuriken",
        lv: 24,
        power: 775,
        skill: { name: "Parry", q: "Epic" }
      },
      {
        class: "Projectiles",
        name: "Singing Chakram",
        lv: 26,
        power: 1050,
        skill: { name: "Healer I", q: "Flawless" }
      },
      {
        class: "Projectiles",
        name: "Steelarang",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Projectiles",
        name: "Heart Seeker",
        lv: 28,
        power: 1150,
  
      },
      {
        class: "Projectiles",
        name: "Seeking Kunai",
        lv: 30,
        power: 850,
  
      },
      {
        class: "Projectiles",
        name: "Shredder",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Projectiles",
        name: "Exploding Darts",
        lv: 35,
        power: 1300,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Projectiles",
        name: "Heart Piercer",
        lv: 36,
        power: 1625,
        skill: { name: "Gangster I", q: "Epic" }
      },
      {
        class: "Projectiles",
        name: "Light Boomerang",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Projectiles",
        name: "Thunder Clap",
        lv: 38,
        power: 1750,
        skill: { name: "Thunderbolt", q: "Legendary" }
      },
      {
        class: "Projectiles",
        name: "Dragon Darts",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Projectiles",
        name: "Wind Slicer",
        lv: 42,
        power: 1325,
  
      },
      {
        class: "Projectiles",
        name: "Frostfire Kunai",
        lv: 45,
        power: 1825,
        skill: { name: "Treasure Hunter II", q: "Legendary" }
      },
      {
        class: "Projectiles",
        name: "Squash Bomb",
        lv: 47,
        power: 2325,
        skill: { name: "Healer II", q: "Mythical" }
      },
      {
        class: "Projectiles",
        name: "Eggsplosives",
        lv: 48,
        power: 2400,
        skill: { name: "Magic Find", q: "Mythical" }
      },
      {
        class: "Projectiles",
        name: "Hell Bomb",
        lv: 49,
        power: 2450,
        skill: { name: "Berserker", q: "Mythical" }
      },
      {
        class: "Projectiles",
        name: "Flying Guillotine",
        lv: 53,
        power: 2725,
        skill: { name: "Gangster III", q: "Mythical" }
      },
      {
        class: "Remedies",
        name: "Healing Herbs",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Remedies",
        name: "Antidote",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Remedies",
        name: "Fungi Brew",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Remedies",
        name: "Elderflower",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Remedies",
        name: "Healing Mix",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Remedies",
        name: "Colored Powder",
        lv: 8,
        power: 175,
        skill: { name: "Energetic I", q: "Flawless" }
      },
      {
        class: "Remedies",
        name: "Fire Moss",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Remedies",
        name: "Mistletoe",
        lv: 10,
        power: 290,
  
      },
      {
        class: "Remedies",
        name: "Sleeping Shrooms",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Remedies",
        name: "Bark Tea",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Remedies",
        name: "Fairy Sprinkle",
        lv: 15,
        power: 330,
  
      },
      {
        class: "Remedies",
        name: "Anti-Venom",
        lv: 19,
        power: 460,
  
      },
      {
        class: "Remedies",
        name: "Protection Dust",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Remedies",
        name: "Swift Seed",
        lv: 23,
        power: 875,
        skill: { name: "Gangster I", q: "Flawless" }
      },
      {
        class: "Remedies",
        name: "Elven Cure",
        lv: 24,
        power: 625,
  
      },
      {
        class: "Remedies",
        name: "Rejuvenating Tea",
        lv: 26,
        power: 875,
        skill: { name: "Healer I", q: "Epic" }
      },
      {
        class: "Remedies",
        name: "Angel Dust",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Remedies",
        name: "Coldfire Dust",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Remedies",
        name: "Unicorn Essence",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Remedies",
        name: "Cornucopia",
        lv: 33,
        power: 1450,
  
      },
      {
        class: "Remedies",
        name: "Clown Dust",
        lv: 34,
        power: 1500,
        skill: { name: "Stoneskin", q: "Legendary" }
      },
      {
        class: "Remedies",
        name: "Strength Seed",
        lv: 34,
        power: 1500,
        skill: { name: "Commander I", q: "Epic" }
      },
      {
        class: "Remedies",
        name: "Phoenix Dust",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Remedies",
        name: "Panacea",
        lv: 37,
        power: 1400,
        skill: { name: "Healer I", q: "Legendary" }
      },
      {
        class: "Remedies",
        name: "Mystic Flower",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Remedies",
        name: "Magic Seed",
        lv: 40,
        power: 1875,
        skill: { name: "Arch Wizard I", q: "Legendary" }
      },
      {
        class: "Remedies",
        name: "Albizia",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Remedies",
        name: "Dragon Dust",
        lv: 44,
        power: 1425,
  
      },
      {
        class: "Remedies",
        name: "Magic Beans",
        lv: 46,
        power: 2250,
        skill: { name: "Brothers-in-arms II", q: "Mythical" }
      },
      {
        class: "Remedies",
        name: "Devil Dust",
        lv: 47,
        power: 1950,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Remedies",
        name: "Teonanacatl",
        lv: 48,
        power: 2400,
        skill: { name: "Magic Find", q: "Mythical" }
      },
      {
        class: "Remedies",
        name: "Draconic Tea",
        lv: 50,
        power: 2525,
        skill: { name: "Healer II", q: "Mythical" }
      },
      {
        class: "Remedies",
        name: "Seed Of Power",
        lv: 54,
        power: 2800,
        skill: { name: "Commander III", q: "Mythical" }
      },
      {
        class: "Rings",
        name: "Iron Band",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Rings",
        name: "Rabbit Ring",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Rings",
        name: "Jewel Ring",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Rings",
        name: "Shadow Mark",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Rings",
        name: "Crescent Ring",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Rings",
        name: "Starry Ring",
        lv: 8,
        power: 215,
        skill: { name: "Cone-of-cold", q: "Epic" }
      },
      {
        class: "Rings",
        name: "Moonstone Ring",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Rings",
        name: "Luck Band",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Rings",
        name: "Gold Digger",
        lv: 12,
        power: 310,
        skill: { name: "Gold Digger I", q: "Flawless" }
      },
      {
        class: "Rings",
        name: "Soldier's Mark",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Rings",
        name: "Nimble Ring",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Rings",
        name: "Fire Band",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Rings",
        name: "Sight Band",
        lv: 19,
        power: 460,
  
      },
      {
        class: "Rings",
        name: "Undead Ring",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Rings",
        name: "Power Ring",
        lv: 23,
        power: 600,
  
      },
      {
        class: "Rings",
        name: "Infinity Ring",
        lv: 24,
        power: 950,
  
      },
      {
        class: "Rings",
        name: "Crusader Ring",
        lv: 25,
        power: 825,
        skill: { name: "Brothers-in-arms I", q: "Epic" }
      },
      {
        class: "Rings",
        name: "Prayer Ring",
        lv: 27,
        power: 1100,
        skill: { name: "Revive I", q: "Flawless" }
      },
      {
        class: "Rings",
        name: "Wisdom Mark",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Rings",
        name: "Resistance Band",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Rings",
        name: "Dynamic Ring",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Rings",
        name: "Truth Ring",
        lv: 33,
        power: 950,
  
      },
      {
        class: "Rings",
        name: "Divine Mark",
        lv: 34,
        power: 1500,
        skill: { name: "Amazon I", q: "Epic" }
      },
      {
        class: "Rings",
        name: "Royal Ring",
        lv: 36,
        power: 1350,
        skill: { name: "Leader I", q: "Legendary" }
      },
      {
        class: "Rings",
        name: "Fallen Angel Ring",
        lv: 37,
        power: 1125,
  
      },
      {
        class: "Rings",
        name: "Oracle",
        lv: 39,
        power: 1800,
        skill: { name: "Revive I", q: "Legendary" }
      },
      {
        class: "Rings",
        name: "Mystic Ring",
        lv: 40,
        power: 1875,
        skill: { name: "Healer II", q: "Legendary" }
      },
      {
        class: "Rings",
        name: "Lich Ring",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Rings",
        name: "Ouroboros",
        lv: 44,
        power: 1425,
  
      },
      {
        class: "Rings",
        name: "Azure Ring",
        lv: 45,
        power: 1825,
        skill: { name: "Riposte", q: "Legendary" }
      },
      {
        class: "Rings",
        name: "Heart Ring",
        lv: 48,
        power: 2400,
        skill: { name: "Revive II", q: "Mythical" }
      },
      {
        class: "Rings",
        name: "Antimagic Band",
        lv: 50,
        power: 2525,
        skill: { name: "Mage Armor", q: "Epic" }
      },
      {
        class: "Rings",
        name: "Midas Ring",
        lv: 53,
        power: 2725,
        skill: { name: "Gold Digger III", q: "Mythical" }
      },
      {
        class: "Shields",
        name: "Targe",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Shields",
        name: "Buckler",
        lv: 3,
        power: 38,
  
      },
      {
        class: "Shields",
        name: "Small Shield",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Shields",
        name: "Heater Shield",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Shields",
        name: "Protector",
        lv: 8,
        power: 175,
        skill: { name: "Protector I", q: "Flawless" }
      },
      {
        class: "Shields",
        name: "Meat Shield",
        lv: 8,
        power: 215,
  
      },
      {
        class: "Shields",
        name: "Kite Shield",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Shields",
        name: "Tower Shield",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Shields",
        name: "Chimalli",
        lv: 12,
        power: 370,
  
      },
      {
        class: "Shields",
        name: "Moonlight Shield",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Shields",
        name: "Knight Shield",
        lv: 17,
        power: 390,
  
      },
      {
        class: "Shields",
        name: "Fire Proof",
        lv: 18,
        power: 625,
        skill: { name: "Fireball", q: "Flawless" }
      },
      {
        class: "Shields",
        name: "Venomous Buckler",
        lv: 20,
        power: 490,
  
      },
      {
        class: "Shields",
        name: "Aegis",
        lv: 21,
        power: 650,
        skill: { name: "Amazon I", q: "Epic" }
      },
      {
        class: "Shields",
        name: "Bulwark",
        lv: 22,
        power: 825,
  
      },
      {
        class: "Shields",
        name: "Reflective Shield",
        lv: 23,
        power: 600,
  
      },
      {
        class: "Shields",
        name: "Skeleton Shield",
        lv: 25,
        power: 650,
  
      },
      {
        class: "Shields",
        name: "Spiked Shield",
        lv: 27,
        power: 725,
  
      },
      {
        class: "Shields",
        name: "Starry Shield",
        lv: 28,
        power: 1150,
        skill: { name: "Protector II", q: "Legendary" }
      },
      {
        class: "Shields",
        name: "Ember Shield",
        lv: 29,
        power: 800,
  
      },
      {
        class: "Shields",
        name: "Crystal Shield",
        lv: 30,
        power: 1275,
        skill: { name: "Supplier I", q: "Epic" }
      },
      {
        class: "Shields",
        name: "Argus' Shield",
        lv: 31,
        power: 875,
  
      },
      {
        class: "Shields",
        name: "Bunny Shield",
        lv: 32,
        power: 1375,
  
      },
      {
        class: "Shields",
        name: "Blessed Aegis",
        lv: 34,
        power: 1000,
  
      },
      {
        class: "Shields",
        name: "Demon Shield",
        lv: 35,
        power: 1550,
        skill: { name: "Parry", q: "Legendary" }
      },
      {
        class: "Shields",
        name: "Dragon Skull",
        lv: 37,
        power: 1400,
        skill: { name: "Commander I", q: "Legendary" }
      },
      {
        class: "Shields",
        name: "Hawk Shield",
        lv: 38,
        power: 1175,
  
      },
      {
        class: "Shields",
        name: "Giantshield",
        lv: 39,
        power: 1800,
        skill: { name: "Crush", q: "Legendary" }
      },
      {
        class: "Shields",
        name: "Adventurer's Shield",
        lv: 40,
        power: 1875,
        skill: { name: "Scavenger II", q: "Mythical" }
      },
      {
        class: "Shields",
        name: "Twilight Aegis",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Shields",
        name: "Medusa Buckler",
        lv: 47,
        power: 1950,
        skill: { name: "Stoneskin", q: "Legendary" }
      },
      {
        class: "Shields",
        name: "Gaia's Shield",
        lv: 48,
        power: 1600,
  
      },
      {
        class: "Shields",
        name: "Sunflower Shield",
        lv: 48,
        power: 2400,
        skill: { name: "Treasure Hunter II", q: "Mythical" }
      },
      {
        class: "Shields",
        name: "Oracle Shield",
        lv: 50,
        power: 2525,
        skill: { name: "Detect Secrets", q: "Mythical" }
      },
      {
        class: "Shields",
        name: "Halfmoon Shield",
        lv: 53,
        power: 2725,
        skill: { name: "Gold Digger II", q: "Mythical" }
      },
      {
        class: "Spears",
        name: "Wooden Spear",
        lv: 1,
        power: 10,
  
      },
      {
        class: "Spears",
        name: "Iron Spear",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Spears",
        name: "Half Pike",
        lv: 4,
        power: 68,
  
      },
      {
        class: "Spears",
        name: "Trident",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Spears",
        name: "Pike",
        lv: 8,
        power: 170,
  
      },
      {
        class: "Spears",
        name: "Gaia's Javelin",
        lv: 9,
        power: 300,
  
      },
      {
        class: "Spears",
        name: "Spade",
        lv: 10,
        power: 230,
  
      },
      {
        class: "Spears",
        name: "Pitchfork",
        lv: 11,
        power: 390,
  
      },
      {
        class: "Spears",
        name: "Seeking Tip",
        lv: 12,
        power: 370,
        skill: { name: "Treasure Hunter I", q: "Flawless" }
      },
      {
        class: "Spears",
        name: "Lance",
        lv: 13,
        power: 330,
  
      },
      {
        class: "Spears",
        name: "Champion's Javelin",
        lv: 14,
        power: 550,
        skill: { name: "Berserker", q: "Epic" }
      },
      {
        class: "Spears",
        name: "Knight's Lance",
        lv: 15,
        power: 400,
  
      },
      {
        class: "Spears",
        name: "Valkyrie",
        lv: 18,
        power: 500,
  
      },
      {
        class: "Spears",
        name: "Poison Tip",
        lv: 19,
        power: 825,
        skill: { name: "Gangster I", q: "Flawless" }
      },
      {
        class: "Spears",
        name: "Bone Spear",
        lv: 21,
        power: 625,
  
      },
      {
        class: "Spears",
        name: "Winged Spear",
        lv: 25,
        power: 800,
  
      },
      {
        class: "Spears",
        name: "Silver Fork",
        lv: 26,
        power: 1050,
        skill: { name: "Resourceful I", q: "Epic" }
      },
      {
        class: "Spears",
        name: "Lion's Tail",
        lv: 29,
        power: 975,
  
      },
      {
        class: "Spears",
        name: "Moon Voulge",
        lv: 30,
        power: 1525,
        skill: { name: "Healer I", q: "Epic" }
      },
      {
        class: "Spears",
        name: "Tepoztopilli",
        lv: 30,
        power: 1525,
  
      },
      {
        class: "Spears",
        name: "Impaler",
        lv: 32,
        power: 1100,
  
      },
      {
        class: "Spears",
        name: "Obsidian Spear",
        lv: 32,
        power: 1650,
  
      },
      {
        class: "Spears",
        name: "Twisted Pike",
        lv: 34,
        power: 1200,
  
      },
      {
        class: "Spears",
        name: "Titanic Lance",
        lv: 36,
        power: 1300,
  
      },
      {
        class: "Spears",
        name: "Night Spike",
        lv: 38,
        power: 1750,
        skill: { name: "Speed Runner I", q: "Legendary" }
      },
      {
        class: "Spears",
        name: "Divine Ray",
        lv: 39,
        power: 2175,
        skill: { name: "Revive I", q: "Legendary" }
      },
      {
        class: "Spears",
        name: "Mystic Spear",
        lv: 40,
        power: 1500,
  
      },
      {
        class: "Spears",
        name: "Twilight Spear",
        lv: 43,
        power: 1650,
  
      },
      {
        class: "Spears",
        name: "Ascalon",
        lv: 45,
        power: 1750,
  
      },
      {
        class: "Spears",
        name: "Obsidian Voulge",
        lv: 47,
        power: 2325,
        skill: { name: "Fireball", q: "Epic" }
      },
      {
        class: "Spears",
        name: "Green Dragon",
        lv: 48,
        power: 2875,
        skill: { name: "Aura of Protection", q: "Legendary" }
      },
      {
        class: "Spears",
        name: "Primordial Trident",
        lv: 50,
        power: 3025,
        skill: { name: "Brothers-in-arms II", q: "Mythical" }
      },
      {
        class: "Spears",
        name: "Gungnir",
        lv: 52,
        power: 3200,
        skill: { name: "Treasure Hunter II", q: "Mythical" }
      },
      {
        class: "Spells",
        name: "Shielding Seal",
        lv: 5,
        power: 76,
  
      },
      {
        class: "Spells",
        name: "Fireball Scroll",
        lv: 7,
        power: 120,
  
      },
      {
        class: "Spells",
        name: "Poison Scroll",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Spells",
        name: "Lightning Scroll",
        lv: 9,
        power: 165,
  
      },
      {
        class: "Spells",
        name: "Sleeping Totem",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Spells",
        name: "Firewall Scroll",
        lv: 12,
        power: 245,
  
      },
      {
        class: "Spells",
        name: "Pain Totem",
        lv: 13,
        power: 340,
        skill: { name: "Brothers-in-arms I", q: "Flawless" }
      },
      {
        class: "Spells",
        name: "Charming Scroll",
        lv: 14,
        power: 450,
  
      },
      {
        class: "Spells",
        name: "Deflection Seal",
        lv: 14,
        power: 300,
  
      },
      {
        class: "Spells",
        name: "Freezing Scroll",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Spells",
        name: "Invisibility Scroll",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Spells",
        name: "Teleportation Scroll",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Spells",
        name: "Magical Codex",
        lv: 23,
        power: 875,
        skill: { name: "Wise I", q: "Flawless" }
      },
      {
        class: "Spells",
        name: "Paralysis Totem",
        lv: 24,
        power: 625,
  
      },
      {
        class: "Spells",
        name: "Mystic Scroll",
        lv: 25,
        power: 1000,
  
      },
      {
        class: "Spells",
        name: "Evil Seal",
        lv: 26,
        power: 875,
        skill: { name: "Energetic I", q: "Epic" }
      },
      {
        class: "Spells",
        name: "Possession Scroll",
        lv: 28,
        power: 775,
  
      },
      {
        class: "Spells",
        name: "Power Seal",
        lv: 30,
        power: 850,
  
      },
      {
        class: "Spells",
        name: "Njord",
        lv: 30,
        power: 1275,
  
      },
      {
        class: "Spells",
        name: "Gloom Totem",
        lv: 32,
        power: 925,
  
      },
      {
        class: "Spells",
        name: "Arcane Compendium",
        lv: 33,
        power: 1450,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Spells",
        name: "Disintegration Scroll",
        lv: 35,
        power: 1050,
  
      },
      {
        class: "Spells",
        name: "Return Scroll",
        lv: 37,
        power: 1400,
        skill: { name: "Scavenger I", q: "Legendary" }
      },
      {
        class: "Spells",
        name: "Hawk Totem",
        lv: 38,
        power: 1175,
  
      },
      {
        class: "Spells",
        name: "Divine Tome",
        lv: 40,
        power: 1875,
        skill: { name: "Revive I", q: "Legendary" }
      },
      {
        class: "Spells",
        name: "Twilight Seal",
        lv: 41,
        power: 1300,
  
      },
      {
        class: "Spells",
        name: "Dragon Totem",
        lv: 45,
        power: 1450,
  
      },
      {
        class: "Spells",
        name: "Santa's List",
        lv: 45,
        power: 2200,
        skill: { name: "Detect Secrets", q: "Mythical" }
      },
      {
        class: "Spells",
        name: "Haunted Scroll",
        lv: 47,
        power: 1950,
        skill: { name: "Shadowstep", q: "Mythical" }
      },
      {
        class: "Spells",
        name: "Primal Compendium",
        lv: 49,
        power: 2450,
        skill: { name: "Scavenger II", q: "Mythical" }
      },
      {
        class: "Spells",
        name: "Guardian Seal",
        lv: 50,
        power: 2525,
        skill: { name: "Stoneskin", q: "Legendary" }
      },
      {
        class: "Spells",
        name: "Blood Scroll",
        lv: 53,
        power: 2725,
        skill: { name: "Healer I", q: "Mythical" }
      },
      {
        class: "Spells",
        name: "Deception Scroll",
        lv: 54,
        power: 2800,
        skill: { name: "Support II", q: "Mythical" }
      },
      {
        class: "Staves",
        name: "Walking Stick",
        lv: 1,
        power: 10,
  
      },
      {
        class: "Staves",
        name: "Crow Stick",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Staves",
        name: "Druidic Rod",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Staves",
        name: "Battle Staff",
        lv: 6,
        power: 115,
  
      },
      {
        class: "Staves",
        name: "Deception Staff",
        lv: 7,
        power: 215,
        skill: { name: "Mage Armor", q: "Epic" }
      },
      {
        class: "Staves",
        name: "Muted Caster",
        lv: 8,
        power: 170,
  
      },
      {
        class: "Staves",
        name: "Bishop Staff",
        lv: 9,
        power: 250,
        skill: { name: "Arch Wizard I", q: "Flawless" }
      },
      {
        class: "Staves",
        name: "Sprout Staff",
        lv: 9,
        power: 300,
  
      },
      {
        class: "Staves",
        name: "Healing Rod",
        lv: 10,
        power: 230,
  
      },
      {
        class: "Staves",
        name: "Forest Wand",
        lv: 12,
        power: 300,
  
      },
      {
        class: "Staves",
        name: "Fire Rod",
        lv: 13,
        power: 330,
  
      },
      {
        class: "Staves",
        name: "Mystic Staff",
        lv: 14,
        power: 500,
  
      },
      {
        class: "Staves",
        name: "Blood Staff",
        lv: 15,
        power: 400,
  
      },
      {
        class: "Staves",
        name: "Luna Rod",
        lv: 17,
        power: 700,
        skill: { name: "Healer I", q: "Flawless" }
      },
      {
        class: "Staves",
        name: "Whispering Wand",
        lv: 19,
        power: 550,
  
      },
      {
        class: "Staves",
        name: "Rebirth Rod",
        lv: 23,
        power: 700,
  
      },
      {
        class: "Staves",
        name: "Ice Staff",
        lv: 26,
        power: 825,
  
      },
      {
        class: "Staves",
        name: "Death Stick",
        lv: 27,
        power: 875,
  
      },
      {
        class: "Staves",
        name: "Sacred Scepter",
        lv: 28,
        power: 1150,
        skill: { name: "Revive I", q: "Epic" }
      },
      {
        class: "Staves",
        name: "Candy Cane Staff",
        lv: 28,
        power: 1375,
  
      },
      {
        class: "Staves",
        name: "Soul Stealer",
        lv: 30,
        power: 1025,
  
      },
      {
        class: "Staves",
        name: "Champion's Torch",
        lv: 32,
        power: 1650,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Staves",
        name: "Staff Of Ages",
        lv: 33,
        power: 1150,
  
      },
      {
        class: "Staves",
        name: "Star Wand",
        lv: 35,
        power: 1875,
        skill: { name: "Arch Wizard I", q: "Epic" }
      },
      {
        class: "Staves",
        name: "Eagle Rod",
        lv: 36,
        power: 1300,
  
      },
      {
        class: "Staves",
        name: "Emperor Wand",
        lv: 38,
        power: 1750,
        skill: { name: "Arch Wizard I", q: "Legendary" }
      },
      {
        class: "Staves",
        name: "Cultist Staff",
        lv: 39,
        power: 1450,
  
      },
      {
        class: "Staves",
        name: "Valkyrie's Wisdom",
        lv: 40,
        power: 2250,
        skill: { name: "Fastidious II", q: "Legendary" }
      },
      {
        class: "Staves",
        name: "Sun King",
        lv: 41,
        power: 2325,
        skill: { name: "Fireball", q: "Legendary" }
      },
      {
        class: "Staves",
        name: "Draconic Scepter",
        lv: 42,
        power: 1600,
  
      },
      {
        class: "Staves",
        name: "Keeper Of Souls",
        lv: 45,
        power: 2200,
        skill: { name: "Revive II", q: "Epic" }
      },
      {
        class: "Staves",
        name: "Affection",
        lv: 45,
        power: 2625,
        skill: { name: "Energetic II", q: "Mythical" }
      },
      {
        class: "Staves",
        name: "Shattered Wand",
        lv: 50,
        power: 3025,
        skill: { name: "Arch Wizard II", q: "Mythical" }
      },
      {
        class: "Staves",
        name: "Necro Staff",
        lv: 53,
        power: 3275,
        skill: { name: "Revive III", q: "Mythical" }
      },
      {
        class: "Swords",
        name: "Shortsword",
        lv: 2,
        power: 26,
  
      },
      {
        class: "Swords",
        name: "Longsword",
        lv: 3,
        power: 46,
  
      },
      {
        class: "Swords",
        name: "Broadsword",
        lv: 5,
        power: 90,
  
      },
      {
        class: "Swords",
        name: "Midnight Sword",
        lv: 6,
        power: 175,
  
      },
      {
        class: "Swords",
        name: "Rapier",
        lv: 7,
        power: 140,
  
      },
      {
        class: "Swords",
        name: "Claymore",
        lv: 8,
        power: 170,
  
      },
      {
        class: "Swords",
        name: "Jaded Blade",
        lv: 9,
        power: 300,
        skill: { name: "Riposte", q: "Epic" }
      },
      {
        class: "Swords",
        name: "Fire Blade",
        lv: 10,
        power: 290,
        skill: { name: "Fireball", q: "Flawless" }
      },
      {
        class: "Swords",
        name: "Zweihander",
        lv: 12,
        power: 300,
  
      },
      {
        class: "Swords",
        name: "Macuahuitl",
        lv: 13,
        power: 490,
  
      },
      {
        class: "Swords",
        name: "Bastard Sword",
        lv: 14,
        power: 360,
  
      },
      {
        class: "Swords",
        name: "Sabre",
        lv: 16,
        power: 430,
  
      },
      {
        class: "Swords",
        name: "Wakizashi",
        lv: 19,
        power: 550,
  
      },
      {
        class: "Swords",
        name: "Vorpal Sword",
        lv: 20,
        power: 875,
        skill: { name: "Parry", q: "Great" }
      },
      {
        class: "Swords",
        name: "Scimitar",
        lv: 23,
        power: 700,
  
      },
      {
        class: "Swords",
        name: "Coldsteel",
        lv: 25,
        power: 1000,
        skill: { name: "Cone-of-cold", q: "Epic" }
      },
      {
        class: "Swords",
        name: "Masamune",
        lv: 27,
        power: 875,
  
      },
      {
        class: "Swords",
        name: "Sawblade",
        lv: 30,
        power: 1025,
  
      },
      {
        class: "Swords",
        name: "Heaven's Will",
        lv: 31,
        power: 1050,
  
      },
      {
        class: "Swords",
        name: "Abyssal Brand",
        lv: 32,
        power: 1650,
        skill: { name: "Cleave", q: "Epic" }
      },
      {
        class: "Swords",
        name: "Bacon Blade",
        lv: 34,
        power: 1800,
  
      },
      {
        class: "Swords",
        name: "Slashing Tiger",
        lv: 35,
        power: 1250,
  
      },
      {
        class: "Swords",
        name: "Excalibur",
        lv: 37,
        power: 1350,
  
      },
      {
        class: "Swords",
        name: "Stormbringer",
        lv: 38,
        power: 1750,
        skill: { name: "Thunderbolt", q: "Legendary" }
      },
      {
        class: "Swords",
        name: "Twilight Scimitar",
        lv: 39,
        power: 1450,
  
      },
      {
        class: "Swords",
        name: "Balmung",
        lv: 40,
        power: 2250,
        skill: { name: "Support II", q: "Legendary" }
      },
      {
        class: "Swords",
        name: "Dragonslayer",
        lv: 41,
        power: 2325,
        skill: { name: "Commander I", q: "Legendary" }
      },
      {
        class: "Swords",
        name: "Unholy Fangs",
        lv: 43,
        power: 1650,
  
      },
      {
        class: "Swords",
        name: "Frostfire Blade",
        lv: 46,
        power: 2250,
        skill: { name: "Riposte", q: "Legendary" }
      },
      {
        class: "Swords",
        name: "Blade Of Power",
        lv: 47,
        power: 1850,
  
      },
      {
        class: "Swords",
        name: "Naughty And Nice",
        lv: 48,
        power: 2875,
        skill: { name: "Healer II", q: "Mythical" }
      },
      {
        class: "Swords",
        name: "Durandal",
        lv: 50,
        power: 3025,
        skill: { name: "Commander II", q: "Mythical" }
      },
      {
        class: "Swords",
        name: "Skofnung",
        lv: 55,
        power: 3450,
        skill: { name: "Support I", q: "Mythical" }
      },
      {
        class: "Vests",
        name: "Leather Vest",
        lv: 1,
        power: 9,
  
      },
      {
        class: "Vests",
        name: "Hide Armor",
        lv: 2,
        power: 22,
  
      },
      {
        class: "Vests",
        name: "Boiled Leather",
        lv: 4,
        power: 56,
  
      },
      {
        class: "Vests",
        name: "Brigandine",
        lv: 6,
        power: 96,
  
      },
      {
        class: "Vests",
        name: "Merchant's Armor",
        lv: 7,
        power: 180,
  
      },
      {
        class: "Vests",
        name: "Leather Cuirass",
        lv: 8,
        power: 140,
  
      },
      {
        class: "Vests",
        name: "Studded Leather",
        lv: 11,
        power: 220,
  
      },
      {
        class: "Vests",
        name: "Raccoon Ranger",
        lv: 12,
        power: 310,
        skill: { name: "Scavenger I", q: "Legendary" }
      },
      {
        class: "Vests",
        name: "Poison Studs",
        lv: 13,
        power: 270,
  
      },
      {
        class: "Vests",
        name: "Strapped Leather",
        lv: 16,
        power: 360,
  
      },
      {
        class: "Vests",
        name: "Plated Tunic",
        lv: 17,
        power: 600,
        skill: { name: "Leader I", q: "Legendary" }
      },
      {
        class: "Vests",
        name: "Jacket",
        lv: 17,
        power: 600,
  
      },
      {
        class: "Vests",
        name: "Plated Leather",
        lv: 18,
        power: 420,
  
      },
      {
        class: "Vests",
        name: "Bear Armor",
        lv: 21,
        power: 525,
  
      },
      {
        class: "Vests",
        name: "Nightingale",
        lv: 24,
        power: 625,
  
      },
      {
        class: "Vests",
        name: "Genji Armor",
        lv: 26,
        power: 700,
  
      },
      {
        class: "Vests",
        name: "Oiled Leather",
        lv: 28,
        power: 975,
        skill: { name: "Energetic I", q: "Epic" }
      },
      {
        class: "Vests",
        name: "Layered Armor",
        lv: 29,
        power: 800,
  
      },
      {
        class: "Vests",
        name: "Oriental Vest",
        lv: 30,
        power: 1275,
  
      },
      {
        class: "Vests",
        name: "Gold Stitch",
        lv: 32,
        power: 925,
  
      },
      {
        class: "Vests",
        name: "Wyrm Hide",
        lv: 33,
        power: 1450,
        skill: { name: "Wise I", q: "Epic" }
      },
      {
        class: "Vests",
        name: "White Crow",
        lv: 36,
        power: 1075,
  
      },
      {
        class: "Vests",
        name: "Shadow Lurker",
        lv: 38,
        power: 1450,
        skill: { name: "Gangster I", q: "Legendary" }
      },
      {
        class: "Vests",
        name: "Moonscale Armor",
        lv: 39,
        power: 1200,
  
      },
      {
        class: "Vests",
        name: "Valkyrie's Embrace",
        lv: 40,
        power: 1875,
        skill: { name: "Wise II", q: "Legendary" }
      },
      {
        class: "Vests",
        name: "Dragon Skin",
        lv: 41,
        power: 1925,
        skill: { name: "Amazon I", q: "Legendary" }
      },
      {
        class: "Vests",
        name: "Pirate Armor",
        lv: 42,
        power: 1325,
  
      },
      {
        class: "Vests",
        name: "Cow Hide Vest",
        lv: 45,
        power: 2200,
        skill: { name: "Brothers-in-arms III", q: "Mythical" }
      },
      {
        class: "Vests",
        name: "Ocean Leather",
        lv: 47,
        power: 1950,
        skill: { name: "Wise III", q: "Epic" }
      },
      {
        class: "Vests",
        name: "Primal Leather",
        lv: 48,
        power: 1600,
  
      },
      {
        class: "Vests",
        name: "Mystic Vest",
        lv: 49,
        power: 2450,
        skill: { name: "Magic Find", q: "Mythical" }
      },
      {
        class: "Vests",
        name: "Black Crow",
        lv: 50,
        power: 2525,
        skill: { name: "Shadowstep", q: "Mythical" }
      },
      {
        class: "Vests",
        name: "Royal Cuirass",
        lv: 55,
        power: 2875,
        skill: { name: "Resourceful III", q: "Mythical" }
      }
    ];
    cache.set( "items", items, true );
  }
} );
