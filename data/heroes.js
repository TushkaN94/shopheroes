$( function() {

  var heroes = [
    {
      name: "Karal",
      type: "Fighter",
      sex: "Female",
      origin: "Hunter's Lodge",
      tier: 1,
      lv: 1,
      cap: 25,
      b: false,
      power: {
        base: 100,
        m: 1.00
      },
      items: [
        [ { type: "Axes", a: 1 }, { type: "Maces", a: 0 }, { type: "Spears", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Vests", a: -1 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 }, { type: "Pendants", a: 0 } ],
        [ { type: "Potions", a: 0 }, { type: "Projectiles", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Amazon I", lv: 1 }, { name: "Resilient II", lv: 18 }, { name: "Crush", lv: 21 }
      ]
    },
    {
      name: "Theor",
      type: "Fighter",
      sex: "Male",
      origin: "Training Hall",
      tier: 1,
      lv: 1,
      cap: 30,
      b: false,
      power: {
        base: 50,
        m: 1.00
      },
      items: [
        [ { type: "Swords", a: 1 }, { type: "Axes", a: 0 }, { type: "Maces", a: 0 }, { type: "Spears", a: -2 } ],
        [ { type: "Armor", a: 0 }, { type: "Vests", a: -1 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 } ],
        [ { type: "Remedies", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Energetic I", lv: 5 }, { name: "Cleave", lv: 10 }, { name: "Bros-in-arms I", lv: 15 }
      ]
    },
    {
      name: "Clovis",
      type: "Fighter",
      sex: "Male",
      origin: "Temple",
      tier: 1,
      lv: 1,
      cap: 35,
      b: false,
      power: {
        base: 100,
        m: 1.00
      },
      items: [
        [ { type: "Spears", a: 1 }, { type: "Axes", a: 0 }, { type: "Swords", a: -1 }, { type: "Maces", a: -2 } ],
        [ { type: "Armor", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 } ],
        [ { type: "Remedies", a: 0 }, { type: "Potions", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Parry", lv: 5 }, { name: "Protector I", lv: 10 }, { name: "Commander I", lv: 15 }
      ]
    },
    {
      name: "Gauvin",
      type: "Fighter",
      sex: "Male",
      origin: "Training Hall",
      tier: 2,
      lv: 1,
      cap: 40,
      b: false,
      power: {
        base: 500,
        m: 1.50
      },
      items: [
        [ { type: "Spears", a: 1 }, { type: "Axes", a: 0 }, { type: "Swords", a: -1 }, { type: "Maces", a: -2 } ],
        [ { type: "Armor", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 }, { type: "Pendants", a: 0 } ],
        [ { type: "Potions", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Leader I", lv: 4 }, { name: "Bros-in-arms I", lv: 14 }, { name: "Resilient II", lv: 18 }
      ]
    },
    {
      name: "Lancaster",
      type: "Fighter",
      sex: "Male",
      origin: "Fighter's Guild",
      tier: 3,
      lv: 1,
      cap: 45,
      b: false,
      power: {
        base: 1000,
        m: 2.00
      },
      items: [
        [ { type: "Axes", a: 1 }, { type: "Swords", a: 0 }, { type: "Spears", a: 0 }, { type: "Maces", a: -2 } ],
        [ { type: "Armor", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 } ],
        [ { type: "Remedies", a: 0 }, { type: "Potions", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Bros-in-arms II", lv: 7 }, { name: "Protector II", lv: 12 }, { name: "Resourceful II", lv: 26 }
      ]
    },
    {
      name: "Fiora",
      type: "Fighter",
      sex: "Female",
      origin: "Cathedral",
      tier: 4,
      lv: 1,
      cap: 50,
      b: false,
      power: {
        base: 2500,
        m: 3.00
      },
      items: [
        [ { type: "Maces", a: 1 }, { type: "Swords", a: 0 }, { type: "Spears", a: -1 }, { type: "Staves", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Clothes", a: -1 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 }, { type: "Rings", a: 0 } ],
        [ { type: "Potions", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Commander II", lv: 8 }, { name: "Gold Digger II", lv: 15 }, { name: "Revive II", lv: 30 }
      ]
    },
    {
      name: "Kurul",
      type: "Fighter",
      sex: "Male",
      origin: "Hunter's Lodge",
      tier: 4,
      lv: 1,
      cap: 50,
      b: false,
      power: {
        base: 2500,
        m: 3.00
      },
      items: [
        [ { type: "Maces", a: 1 }, { type: "Axes", a: 0 }, { type: "Spears", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Vests", a: -1 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Pendants", a: 0 }, { type: "Shields", a: -1 } ],
        [ { type: "Remedies", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Energetic II", lv: 12 }, { name: "Scavenger II", lv: 20 }, { name: "Leader II", lv: 25 }
      ]
    },
    {
      name: "Edward",
      type: "Fighter",
      sex: "Male",
      origin: "Cathedral",
      tier: 5,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 4.00
      },
      items: [
        [ { type: "Spears", a: 1 }, { type: "Maces", a: 0 }, { type: "Swords", a: -1 }, { type: "Axes", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Clothes", a: -1 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 } ],
        [ { type: "Potions", a: 0 }, { type: "Spells", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Leader III", lv: 12 }, { name: "Revive III", lv: 26 }, { name: "Protector III", lv: 34 }
      ]
    },
    {
      name: "Alicia",
      type: "Fighter",
      sex: "Female",
      origin: "War College",
      tier: 5,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 4.00
      },
      items: [
        [ { type: "Axes", a: 1 }, { type: "Swords", a: 0 }, { type: "Maces", a: -1 }, { type: "Spears", a: -1 } ],
        [ { type: "Armor", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Shields", a: 0 }, { type: "Instruments", a: 0 } ],
        [ { type: "Projectiles", a: 0 }, { type: "Remedies", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Amazon III", lv: 14 }, { name: "Energetic III", lv: 24 }, { name: "Lucky III", lv: 32 }
      ]
    },
    {
      name: "Garreth",
      type: "Rogue",
      sex: "Male",
      origin: "Thief's Hideout",
      tier: 1,
      lv: 1,
      cap: 30,
      b: false,
      power: {
        base: 50,
        m: 1.00
      },
      items: [
        [ { type: "Daggers", a: 1 }, { type: "Bows", a: -1 }, { type: "Guns", a: -2 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Pendants", a: -1 } ],
        [ { type: "Projectiles", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Lucky I", lv: 5 }, { name: "Treasure Hunter I", lv: 14 }, { name: "Scavenger I", lv: 20 }
      ]
    },
    {
      name: "Palash",
      type: "Rogue",
      sex: "Male",
      origin: "Hunter's Lodge",
      tier: 1,
      lv: 1,
      cap: 40,
      b: false,
      power: {
        base: 100,
        m: 1.00
      },
      items: [
        [ { type: "Bows", a: 1 }, { type: "Axes", a: 0 }, { type: "Guns", a: -1 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Instruments", a: -1 } ],
        [ { type: "Projectiles", a: -1 }, { type: "Remedies", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Resilient I", lv: 3 }, { name: "Scavenger I", lv: 16 }, { name: "Supplier I", lv: 22 }
      ]
    },
    {
      name: "Mila",
      type: "Rogue",
      sex: "Female",
      origin: "Thief's Hideout",
      tier: 2,
      lv: 1,
      cap: 40,
      b: false,
      power: {
        base: 500,
        m: 1.50
      },
      items: [
        [ { type: "Daggers", a: 1 }, { type: "Maces", a: -1 }, { type: "Bows", a: -1 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Pendants", a: -1 } ],
        [ { type: "Projectiles", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Gold Digger I", lv: 7 }, { name: "Treasure Hunter II", lv: 14 }, { name: "Lucky II", lv: 22 }
      ]
    },
    {
      name: "Irene",
      type: "Rogue",
      sex: "Female",
      origin: "Fountain",
      tier: 2,
      lv: 1,
      cap: 45,
      b: false,
      power: {
        base: 500,
        m: 1.50
      },
      items: [
        [ { type: "Swords", a: 1 }, { type: "Guns", a: 0 }, { type: "Daggers", a: -1 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Shields", a: -1 } ],
        [ { type: "Potions", a: 0 }, { type: "Projectiles", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Gangster I", lv: 9 }, { name: "Resourceful I", lv: 20 }, { name: "Supplier II", lv: 28 }
      ]
    },
    {
      name: "Darthos",
      type: "Rogue",
      sex: "Male",
      origin: "Theater",
      tier: 3,
      lv: 1,
      cap: 45,
      b: false,
      power: {
        base: 1000,
        m: 2.00
      },
      items: [
        [ { type: "Guns", a: 1 }, { type: "Swords", a: 0 }, { type: "Daggers", a: -1 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 }, { type: "Helmets", a: -1 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Shields", a: -1 } ],
        [ { type: "Projectiles", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Wise II", lv: 8 }, { name: "Speed Runner II", lv: 12 }, { name: "Bros-in-arms III", lv: 22 }
      ]
    },
    {
      name: "Odette",
      type: "Rogue",
      sex: "Female",
      origin: "Thief's Hideout",
      tier: 3,
      lv: 1,
      cap: 45,
      b: false,
      power: {
        base: 1000,
        m: 2.00
      },
      items: [
        [ { type: "Bows", a: 1 }, { type: "Swords", a: 0 }, { type: "Daggers", a: 0 }, { type: "Guns", a: -1 } ],
        [ { type: "Vests", a: 0 }, { type: "Clothes", a: -1 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Pendants", a: -1 } ],
        [ { type: "Projectiles", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Fastidious II", lv: 8 }, { name: "Amazon II", lv: 18 }, { name: "Support II", lv: 24 }
      ]
    },
    {
      name: "Louca",
      type: "Rogue",
      sex: "Female",
      origin: "Port",
      tier: 5,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 4.00
      },
      items: [
        [ { type: "Guns", a: 1 }, { type: "Maces", a: 0 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Footwear", a: 0 }, { type: "Boots", a: -1 } ],
        [ { type: "Rings", a: 0 }, { type: "Shields", a: -1 }, { type: "Pendants", a: -1 } ],
        [ { type: "Remedies", a: 0 }, { type: "Projectiles", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Scavenger III", lv: 18 }, { name: "Treasure Hunter III", lv: 25 }, { name: "Support III", lv: 35 }
      ]
    },
    {
      name: "Kuro Shobi",
      type: "Rogue",
      sex: "Female",
      origin: "Port",
      tier: 5,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 4.00
      },
      items: [
        [ { type: "Swords", a: 1 }, { type: "Daggers", a: 0 }, { type: "Bows", a: 0 }, { type: "Guns", a: -1 } ],
        [ { type: "Vests", a: 0 }, { type: "Clothes", a: -1 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 }, { type: "Instruments", a: -1 } ],
        [ { type: "Projectiles", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Gangster III", lv: 14 }, { name: "Resourceful III", lv: 26 }, { name: "Speed Runner III", lv: 34 }
      ]
    },
    {
      name: "Lorelei",
      type: "Rogue",
      sex: "Female",
      origin: "Heroic Package #2",
      tier: 6,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 5.00
      },
      items: [
        [ { type: "Daggers", a: 1 }, { type: "Guns", a: 0 } ],
        [ { type: "Vests", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Rings", a: 0 } ],
        [ { type: "Projectiles", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Lucky III", lv: 20 }, { name: "Backstab", lv: 25 }, { name: "Scavenger III", lv: 30 }
      ]
    },
    {
      name: "Melina",
      type: "Spellcaster",
      sex: "Female",
      origin: "School of Magic",
      tier: 1,
      lv: 1,
      cap: 25,
      b: false,
      power: {
        base: 50,
        m: 1.00
      },
      items: [
        [ { type: "Staves", a: 1 }, { type: "Daggers", a: -1 }, { type: "Bows", a: -2 } ],
        [ { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Pendants", a: 0 }, { type: "Rings", a: 0 } ],
        [ { type: "Spells", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Fireball", lv: 6 }, { name: "Wise I", lv: 10 }, { name: "Speed Runner I", lv: 18 }
      ]
    },
    {
      name: "Minh",
      type: "Spellcaster",
      sex: "Male",
      origin: "Temple",
      tier: 1,
      lv: 1,
      cap: 35,
      b: false,
      power: {
        base: 50,
        m: 1.00
      },
      items: [
        [ { type: "Maces", a: 1 }, { type: "Staves", a: 0 }, { type: "Bows", a: -1 } ],
        [ { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Pendants", a: 0 }, { type: "Instruments", a: -1 } ],
        [ { type: "Potions", a: 0 }, { type: "Spells", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Wise I", lv: 6 }, { name: "Healer I", lv: 15 }, { name: "Revive I", lv: 22 }
      ]
    },
    {
      name: "Albert",
      type: "Spellcaster",
      sex: "Male",
      origin: "Fountain",
      tier: 1,
      lv: 1,
      cap: 40,
      b: false,
      power: {
        base: 100,
        m: 1.00
      },
      items: [
        [ { type: "Bows", a: 1 }, { type: "Staves", a: 0 }, { type: "Daggers", a: -1 } ],
        [ { type: "Clothes", a: 0 }, { type: "Vests", a: -1 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Instruments", a: 0 }, { type: "Pendants", a: -1 } ],
        [ { type: "Spells", a: 0 }, { type: "Potions", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Fastidious I", lv: 8 }, { name: "Supplier I", lv: 12 }, { name: "Support I", lv: 20 }
      ]
    },
    {
      name: "Nya",
      type: "Spellcaster",
      sex: "Female",
      origin: "School of Magic",
      tier: 2,
      lv: 1,
      cap: 40,
      b: false,
      power: {
        base: 500,
        m: 1.50
      },
      items: [
        [ { type: "Staves", a: 1 }, { type: "Daggers", a: -1 }, { type: "Spears", a: -2 } ],
        [ { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Instruments", a: 0 }, { type: "Rings", a: -1 } ],
        [ { type: "Spells", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Revive I", lv: 12 }, { name: "Arch Wizard I", lv: 17 }, { name: "Cone-of-cold", lv: 25 }
      ]
    },
    {
      name: "Oneira",
      type: "Spellcaster",
      sex: "Female",
      origin: "Theater",
      tier: 3,
      lv: 1,
      cap: 45,
      b: false,
      power: {
        base: 1000,
        m: 2.00
      },
      items: [
        [ { type: "Daggers", a: 1 }, { type: "Staves", a: -1 }, { type: "Bows", a: -2 } ],
        [ { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Instruments", a: 0 }, { type: "Pendants", a: 0 }, { type: "Rings", a: -1 } ],
        [ { type: "Spells", a: 0 }, { type: "Potions", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Gold Digger III", lv: 6 }, { name: "Healer II", lv: 18 }, { name: "Support II", lv: 24 }
      ]
    },
    {
      name: "Azula",
      type: "Spellcaster",
      sex: "Female",
      origin: "School of Magic",
      tier: 4,
      lv: 1,
      cap: 50,
      b: false,
      power: {
        base: 2500,
        m: 3.00
      },
      items: [
        [ { type: "Staves", a: 1 }, { type: "Spears", a: 0 }, { type: "Daggers", a: -1 } ],
        [ { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Instruments", a: 0 }, { type: "Pendants", a: -1 }, { type: "Rings", a: -1 } ],
        [ { type: "Spells", a: 0 }, { type: "Remedies", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Arch Wizard II", lv: 8 }, { name: "Healer III", lv: 12 }, { name: "Wise III", lv: 20 }
      ]
    },
    {
      name: "Francesca",
      type: "Spellcaster",
      sex: "Female",
      origin: "Fighter's Guild",
      tier: 4,
      lv: 1,
      cap: 50,
      b: false,
      power: {
        base: 2500,
        m: 3.00
      },
      items: [
        [ { type: "Guns", a: 1 }, { type: "Staves", a: 0 }, { type: "Swords", a: -1 }, { type: "Spears", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Clothes", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Instruments", a: 0 } ],
        [ { type: "Spells", a: 0 }, { type: "Potions", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Fastidious III", lv: 13 }, { name: "Resilient III", lv: 20 }, { name: "Supplier III", lv: 28 }
      ]
    },
    {
      name: "Mojian",
      type: "Spellcaster",
      sex: "Male",
      origin: "War College",
      tier: 5,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 4.00
      },
      items: [
        [ { type: "Staves", a: 1 }, { type: "Guns", a: 0 }, { type: "Bows", a: -1 } ],
        [ { type: "Armor", a: 0 }, { type: "Clothes", a: 0 } ],
        [ { type: "Helmets", a: 0 } ],
        [ { type: "Gauntlets", a: 0 } ],
        [ { type: "Boots", a: 0 } ],
        [ { type: "Pendants", a: 0 } ],
        [ { type: "Spells", a: 0 }, { type: "Potions", a: -1 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Commander III", lv: 15 }, { name: "Arch Wizard III", lv: 22 }, { name: "Thunderbolt", lv: 35 }
      ]
    },
    {
      name: "Charles",
      type: "Spellcaster",
      sex: "Male",
      origin: "Heroic Package #1",
      tier: 6,
      lv: 1,
      cap: 55,
      b: false,
      power: {
        base: 5000,
        m: 5.00
      },
      items: [
        [ { type: "Bows", a: 1 }, { type: "Staves", a: 0 } ],
        [ { type: "Vests", a: 0 }, { type: "Clothes", a: 0 } ],
        [ { type: "Hats", a: 0 } ],
        [ { type: "Bracers", a: 0 } ],
        [ { type: "Footwear", a: 0 } ],
        [ { type: "Instruments", a: 0 } ],
        [ { type: "Spells", a: 0 } ]
      ],
      slots: [
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null },
        { item: null, q: null }
      ],
      skills: [
        { name: "Mage Armor", lv: 17 }, { name: "Detect Secrets", lv: 28 }, { name: "Magic Find", lv: 36 }
      ]
    }
  ];
  c_data.set( "heroes", heroes );
  localforage.getItem( "heroes" )
    .then( function( value ) {
      c_data.extend( "heroes", JSON.parse( value ) );
    } );
  //c_data.extend( "heroes", cache.get( "heroes" ) );

} );
