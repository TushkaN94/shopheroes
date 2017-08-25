$( function() {
  var cache = $.cache._();

  var heroes = [
    {
      name: "Karal",
      type: "Fighters",
      sex: "F",
      tier: 1,
      cap: 25,
      lv: null,
      power: {
        base: 100,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Axes": { a: 1 }, "Maces": { a: 0 }, "Spears": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Vests": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }, "Pendants": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }, "Projectiles": { a: -1 }
          }
        }
      },
      skills: {
        "1": { name: "Amazon I" }, "18": { name: "Resilient II" }, "21": { name: "Crush" }
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
        base: 50,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Swords": { a: 1 }, "Axes": { a: 0 }, "Maces": { a: 0 }, "Spears": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armors": { a: 0 }, "Vests": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Remedies": { a: 0 }
          }
        }
      },
      skills: {
        "5": { name: "Energetic I" }, "10": { name: "Cleave" }, "15": { name: "Brothers-in-arms I" }
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
        base: 100,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Spears": { a: 1 }, "Axes": { a: 0 }, "Swords": { a: -1 }, "Maces": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Remedies": { a: 0 }, "Potions": { a: -1 }
          }
        }
      },
      skills: {
        "4": { name: "Leader I" }, "14": { name: "Brothers-in-arms I" }, "18": { name: "Resilient II" }
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
        base: 500,
        m: 1.50
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Spears": { a: 1 }, "Axes": { a: 0 }, "Swords": { a: -1 }, "Maces": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }, "Pendants": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "4": { name: "Leader I" }, "14": { name: "Brothers-in-arms I" }, "18": { name: "Resilient II" }
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
        base: 1000,
        m: 2.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Axes": { a: 1 }, "Swords": { a: 0 }, "Spears": { a: 0 }, "Maces": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Remedies": { a: 0 }, "Potions": { a: -1 }
          }
        }
      },
      skills: {
        "7": { name: "Brothers-in-arms II" }, "12": { name: "Protector II" }, "26": { name: "Resourceful II" }
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
        base: 2500,
        m: 3.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Maces": { a: 1 }, "Swords": { a: 0 }, "Spears": { a: -1 }, "Staves": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Clothes": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }, "Rings": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }
          }
        }
      },
      skills: {
        "8": { name: "Commander II" }, "15": { name: "Gold Digger II" }, "30": { name: "Revive II" }
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
        base: 2500,
        m: 3.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Maces": { a: 1 }, "Axes": { a: 0 }, "Spears": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Vests": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Pendants": { a: 0 }, "Shields": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Remedies": { a: 0 }
          }
        }
      },
      skills: {
        "12": { name: "Energetic II" }, "20": { name: "Scavenger II" }, "25": { name: "Leader II" }
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
        base: 5000,
        m: 4.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Spears": { a: 1 }, "Maces": { a: 0 }, "Swords": { a: -1 }, "Axes": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Clothes": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }, "Spells": { a: -1 }
          }
        }
      },
      skills: {
        "12": { name: "Leader III" }, "26": { name: "Revive III" }, "34": { name: "Protector III" }
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
        base: 5000,
        m: 4.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Axes": { a: 1 }, "Swords": { a: 0 }, "Maces": { a: -1 }, "Spears": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Shields": { a: 0 }, "Instruments": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }, "Remedies": { a: 0 }
          }
        }
      },
      skills: {
        "14": { name: "Amazon III" }, "24": { name: "Energetic III" }, "32": { name: "Lucky III" }
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
        base: 50,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Daggers": { a: 1 }, "Bows": { a: -1 }, "Guns": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Pendants": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "5": { name: "Lucky I" }, "14": { name: "Treasure Hunter I" }, "20": { name: "Scavenger I" }
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
        base: 100,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Bows": { a: 1 }, "Axes": { a: 0 }, "Guns": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Instruments": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: -1 }, "Remedies": { a: 0 }
          }
        }
      },
      skills: {
        "3": { name: "Resilient I" }, "16": { name: "Scavenger I" }, "22": { name: "Supplier I" }
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
        base: 500,
        m: 1.50
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Dagges": { a: 1 }, "Maces": { a: -1 }, "Bows": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Pendants": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "7": { name: "Gold Digger I" }, "14": { name: "Treasure Hunter II" }, "22": { name: "Lucky II" }
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
        base: 500,
        m: 1.50
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Swords": { a: 1 }, "Guns": { a: 0 }, "Daggers": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Shields": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }, "Projectiles": { a: -1 }
          }
        }
      },
      skills: {
        "9": { name: "Gangster I" }, "20": { name: "Resourceful I" }, "28": { name: "Supplier II" }
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
        base: 1000,
        m: 2.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Guns": { a: 1 }, "Swords": { a: 0 }, "Daggers": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }, "Helmets": { a: -1 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Shields": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "8": { name: "Wise II" }, "12": { name: "Speed Runner II" }, "22": { name: "Brothers-in-arms III" }
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
        base: 1000,
        m: 2.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Bows": { a: 1 }, "Swords": { a: 0 }, "Daggers": { a: 0 }, "Guns": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }, "Clothes": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Pendants": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }
          }
        }
      },
      skills: {
        "8": { name: "Fastidious II" }, "18": { name: "Amazon II" }, "24": { name: "Support II" }
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
        base: 5000,
        m: 4.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Guns": { a: 1 }, "Maces": { a: 0 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }, "Boots": { a: -1 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Shields": { a: -1 }, "Pendants": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Remedies": { a: 0 }, "Projectiles": { a: -1 }
          }
        }
      },
      skills: {
        "18": { name: "Scavenger III" }, "25": { name: "Treasure Hunter III" }, "35": { name: "Support III" }
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
        base: 5000,
        m: 4.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Swords": { a: 1 }, "Daggers": { a: 0 }, "Bows": { a: 0 }, "Guns": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }, "Clothes": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }, "Instruments": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }
          }
        }
      },
      skills: {
        "14": { name: "Gangster III" }, "26": { name: "Resourceful III" }, "34": { name: "Speed Runner III" }
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
        base: 5000,
        m: 5.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Daggers": { a: 1 }, "Guns": { a: 0 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Rings": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Projectiles": { a: 0 }
          }
        }
      },
      skills: {
        "20": { name: "Lucky III" }, "25": { name: "Backstab" }, "30": { name: "Scavenger III" }
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
        base: 50,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Staves": { a: 1 }, "Daggers": { a: -1 }, "Bows": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Pendants": { a: 0 }, "Rings": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "6": { name: "Fireball" }, "10": { name: "Wise I" }, "18": { name: "Speed Runner I" }
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
        base: 50,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Maces": { a: 1 }, "Staves": { a: 0 }, "Bows": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Pendants": { a: 0 }, "Instruments": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Potions": { a: 0 }, "Spells": { a: -1 }
          }
        }
      },
      skills: {
        "6": { name: "Wise I" }, "15": { name: "Healer I" }, "22": { name: "Revive I" }
      }
    },
    {
      name: "Albert",
      type: "Spellcasters",
      sex: "M",
      tier: 1,
      cap: 40,
      lv: null,
      power: {
        base: 100,
        m: 1.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Bows": { a: 1 }, "Staves": { a: 0 }, "Daggers": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }, "Vests": { a: -1 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }, "Pendants": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Potions": { a: -1 }
          }
        }
      },
      skills: {
        "8": { name: "Fastidious I" }, "12": { name: "Supplier I" }, "20": { name: "Support I" }
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
        base: 500,
        m: 1.50
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Staves": { a: 1 }, "Daggers": { a: -1 }, "Spears": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }, "Rings": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "12": { name: "Revive I" }, "17": { name: "Arch Wizard I" }, "25": { name: "Cone-of-cold" }
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
        base: 1000,
        m: 2.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Daggers": { a: 1 }, "Staves": { a: -1 }, "Bows": { a: -2 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }, "Pendants": { a: 0 }, "Rings": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Potions": { a: -1 }
          }
        }
      },
      skills: {
        "6": { name: "Gold Digger III" }, "18": { name: "Healer II" }, "24": { name: "Support II" }
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
        base: 2500,
        m: 3.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Staves": { a: 1 }, "Spears": { a: 0 }, "Daggers": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }, "Pendants": { a: -1 }, "Rings": { a: -1 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Remedies": { a: -1 }
          }
        }
      },
      skills: {
        "8": { name: "Arch Wizard II" }, "12": { name: "Healer III" }, "20": { name: "Wise III" }
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
        base: 2500,
        m: 3.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Guns": { a: 1 }, "Staves": { a: 0 }, "Swords": { a: -1 }, "Spears": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Potions": { a: 0 }
          }
        }
      },
      skills: {
        "13": { name: "Fastidious III" }, "20": { name: "Resilient III" }, "28": { name: "Supplier III" }
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
        base: 5000,
        m: 4.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Staves": { a: 1 }, "Guns": { a: 0 }, "Bows": { a: -1 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Armor": { a: 0 }, "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Helmets": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Gauntlets": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Boots": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Pendants": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }, "Potions": { a: -1 }
          }
        }
      },
      skills: {
        "15": { name: "Commander III" }, "22": { name: "Arch Wizard III" }, "35": { name: "Thunderbolt" }
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
        base: 5000,
        m: 5.00
      },
      slots: {
        weapon: {
          item: null,
          q: null,
          list: {
            "Bows": { a: 1 }, "Staves": { a: 0 }
          }
        },
        body: {
          item: null,
          q: null,
          list: {
            "Vests": { a: 0 }, "Clothes": { a: 0 }
          }
        },
        head: {
          item: null,
          q: null,
          list: {
            "Hats": { a: 0 }
          }
        },
        arms: {
          item: null,
          q: null,
          list: {
            "Bracers": { a: 0 }
          }
        },
        legs: {
          item: null,
          q: null,
          list: {
            "Footwear": { a: 0 }
          }
        },
        aux1: {
          item: null,
          q: null,
          list: {
            "Instruments": { a: 0 }
          }
        },
        aux2: {
          item: null,
          q: null,
          list: {
            "Spells": { a: 0 }
          }
        }
      },
      skills: {
        "17": { name: "Mage Armor" }, "28": { name: "Detect Secrets" }, "36": { name: "Magic Find" }
      }
    }
  ];
  cache.set( "heroes", heroes, true );

} );
