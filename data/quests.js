$( function() {
  var cache = $.cache._();

  var heroes = [
    {
      name: 'City Raid',
      tier: 1,
      boss: false,
      tiers: [
        { power: 250 },
        { power: 10000 },
        { power: 45000 }
      ]
    },
    {
      name: 'Primal Lair',
      tier: 1,
      boss: false,
      tiers: [
        { power: 100000 },
        { power: 110000 },
        { power: 120000 },
        { power: 130000 },
        { power: 150000 }
    },
    {
      name: 'Tainted Grove',
      tier: 1,
      boss: false,
      tiers: [
        { power: 70000 },
        { power: 77500 },
        { power: 84500 },
        { power: 91000 },
        { power: 98000 }
    },
    {
      name: 'Ring of Fire',
      tier: 1,
      boss: false,
      tiers: [
        { power: 62500 },
        { power: 69000 },
        { power: 75000 },
        { power: 81500 },
        { power: 87500 }
    },
    {
      name: 'Ice Palace',
      tier: 1,
      boss: false,
      tiers: [
        { power: 52500 },
        { power: 58000 },
        { power: 63000 },
        { power: 68500 },
        { power: 73500 }
    },
    {
      name: 'Uncharted Jungle',
      tier: 1,
      boss: false,
      tiers: [
        { power: 42000 },
        { power: 46500 },
        { power: 50500 },
        { power: 55000 },
        { power: 59000 }
    },
    {
      name: 'Chaos Gate',
      tier: 1,
      boss: false,
      tiers: [
        { power: 40000 },
        { power: 44500 },
        { power: 48500 },
        { power: 52500 },
        { power: 56500 }
    },
    {
      name: 'Dragons\' Nest',
      tier: 1,
      boss: false,
      tiers: [
        { power: 30000 },
        { power: 33000 },
        { power: 36000 },
        { power: 39000 },
        { power: 42000 }
    },
    {
      name: 'Floating Island',
      tier: 1,
      boss: false,
      tiers: [
        { power: 25000 },
        { power: 27500 },
        { power: 30000 },
        { power: 32500 },
        { power: 35000 }
    },
    {
      name: 'Pyramid',
      tier: 1,
      boss: false,
      tiers: [
        { power: 21000 },
        { power: 23000 },
        { power: 25000 },
        { power: 27000 },
        { power: 29000 }
    },
    {
      name: 'Hellish Abyss',
      tier: 1,
      boss: false,
      tiers: [
        { power: 17500 },
        { power: 19000 },
        { power: 21000 },
        { power: 22500 },
        { power: 24500 }
    },
    {
      name: 'Heretic Temple',
      tier: 1,
      boss: false,
      tiers: [
        { power: 14000 },
        { power: 15500 },
        { power: 16500 },
        { power: 18000 },
        { power: 19500 }
    },
    {
      name: 'Lost Labyrinth',
      tier: 1,
      boss: false,
      tiers: [
        { power: 12000 },
        { power: 13000 },
        { power: 14500 },
        { power: 15500 },
        { power: 16500 }
    },
    {
      name: 'Old Tower',
      tier: 1,
      boss: false,
      tiers: [
        { power: 10000 },
        { power: 11000 },
        { power: 12000 },
        { power: 13000 },
        { power: 14000 }
    },
    {
      name: 'Orcish Valley',
      tier: 1,
      boss: false,
      tiers: [
        { power: 8800 },
        { power: 9650 },
        { power: 10500 },
        { power: 11500 },
        { power: 12500 }
    },
    {
      name: 'Unholy Land',
      tier: 1,
      boss: false,
      tiers: [
        { power: 7150 },
        { power: 7850 },
        { power: 8600 },
        { power: 9300 },
        { power: 10500 }
    },
    {
      name: 'Dead River',
      tier: 1,
      boss: false,
      tiers: [
        { power: 6150 },
        { power: 6800 },
        { power: 7400 },
        { power: 8000 },
        { power: 8650 }
    },
    {
      name: 'Plague Lake',
      tier: 1,
      boss: false,
      tiers: [
        { power: 5000 },
        { power: 5500 },
        { power: 6000 },
        { power: 6500 },
        { power: 7000 }
    },
    {
      name: 'Desert of Doom',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Pirate\'s Cove',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Ancient Ruins',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Mountain Hideout',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Catacombs',
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Haunted Forest',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Gloomy Manor',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'Forbidden Meadow',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    },
    {
      name: 'City Sewers',
      tier: 1,
      boss: false,
      tiers: [
        { power:  },
        { power:  },
        { power:  },
        { power:  },
        { power:  }
    }
  ];
  cache.set( "heroes", heroes, true );

} );
