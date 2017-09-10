$( function() {

  var cache = $.cache._();
  
  var effects = [
    { 
      type: "Escape",
      name: "Escape",
      text: "Chance of getting injury is decreased by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      type: "Wise",
      name: "Wise",
      text: "Amount of experience for successfully completing quests is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      type: "Resilient",
      name: "Resilient",
      text: "Amount of experience for completing quests with injury is {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      name: "Gold",
      name: "Gold",
      text: "Amount of gold found is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      type: "Maximum",
      name: "Maximum",
      text: "Maximum number of artifacts found is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      leader: false
    },
    { 
      type: "Minimum",
      name: "Minimum",
      text: "Minimum number of artifacts found is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      leader: false
    },
    { 
      type: "Leader",
      name: "Leader",
      text: "Number of companions is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      leader: true
    },
    {
      type: "Equipment",
      name: "Equipment",
      text: "Equipment strength is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    {
      type: "Equipment",
      name: "Gangster",
      text: "Equipment strength of Rogues in party is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: true,
      filter: {
        type: "Rogue"
      }
    },
    { 
      type: "Strength",
      name: "Strength",
      text: "Strength is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    {
      type: "Strength",
      name: "Commander",
      text: "Strength of each party member is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: true
    },
    {
      type: "Strength",
      name: "Arch Wizard",
      text: "Strength of Spellcasters in party is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: false,
      filter: {
        type: "Spellcaster"
      }
    },
    { 
      type: "Survival",
      name: "Survival",
      text: "Survival rate of each party member is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: false
    },
    { 
      type: "Survival",
      name: "Amazon",
      text: "Survival rate of Female party members is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: true,
      filter: {
        sex: "Female"
      }
    },
    { 
      type: "Survival",
      name: "Brothers",
      text: "Survival rate of Male party members is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: true,
      filter: {
        sex: "Male"
      }
    },
    { 
      type: "Break Chance",
      name: "Fastidious",
      text: "Chance of breaking equipment is decreased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      type: "Break Chance",
      name: "Supplier",
      text: "Chance of breaking oompanions equipment is decreased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      leader: false
    },
    { 
      type: "Break Count",
      name: "Resourceful",
      text: "Prevents {0} pieces of equipment from breaking",
      cap: false,
      type: "value",
      applies: "hero",
      leader: false
    },
    { 
      type: "Break Count",
      name: "Support",
      text: "Prevents {0} pieces of companions equipment from breaking",
      cap: false,
      type: "value",
      applies: "team",
      leader: false
    },
    { 
      type: "Resting",
      name: "Healer",
      text: "Resting time of companions is reduced by {0}",
      cap: 0.9,
      type: "percent",
      applies: "team",
      leader: false
    },
    { 
      type: "Resting",
      name: "Energetic",
      text: "Resting time is reduced by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      leader: false
    },
    { 
      type: "Revive",
      name: "Revive",
      text: "{0} chance to revive injuried companions",
      cap: false,
      type: "percent",
      applies: "team",
      leader: false
    },
    { 
      type: "Speed",
      name: "Speed",
      text: "Quest duration is reduced by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      leader: true
    },
  ];
  cache.set( "skills_effects", effects, true );
  
  var skills = [
    {
      name: "Lucky I",
      base: "Escape",
      value: 0.10
    },
    {
      name: "Lucky II",
      base: "Escape",
      value: 0.20
    },
    {
      name: "Lucky III",
      base: "Escape",
      value: 0.30
    },
    {
      name: "Shadowstep",
      base: "Escape",
      value: 0.15
    },
    {
      name: "Wise I",
      base: "Wise",
      value: 0.25
    },
    {
      name: "Wise II",
      base: "Wise",
      value: 0.50
    },
    {
      name: "Wise III",
      base: "Wise",
      value: 1.00
    },
    {
      name: "Resilient I",
      base: "Resilient",
      value: 0.25
    },
    {
      name: "Resilient II",
      base: "Resilient",
      value: 0.50
    },
    {
      name: "Resilient III",
      base: "Resilient",
      value: 1.00
    },
    {
      name: "Gold Digger I",
      base: "Gold",
      value: 0.50
    },
    {
      name: "Gold Digger II",
      base: "Gold",
      value: 1.00
    },
    {
      name: "Gold Digger III",
      base: "Gold",
      value: 2.00
    },
    {
      name: "Leader I",
      base: "Leader",
      value: 1
    },
    {
      name: "Leader II",
      base: "Leader",
      value: 2
    },
    {
      name: "Leader III",
      base: "Leader",
      value: 3
    },
    {
      name: "Gangster I",
      base: "Gangster",
      value: 0.10
    },
    {
      name: "Gangster II",
      base: "Gangster",
      value: 0.15
    },
    {
      name: "Gangster III",
      base: "Gangster",
      value: 0.25
    },
    {
      name: "Parry",
      base: "Equipment",
      value: 0.10
    },
    {
      name: "Riposte",
      base: "Equipment",
      value: 0.20
    },
    {
      name: "Mage Armor",
      base: "Equipment",
      value: 0.25
    },
    {
      name: "Backstab",
      base: "Strength",
      value: 0.25
    },
    {
      name: "Cleave",
      base: "Strength",
      value: 0.25
    },
    {
      name: "Crush",
      base: "Strength",
      value: 0.25
    },
    {
      name: "Fireball",
      base: "Strength",
      value: 0.25
    },
    {
      name: "Stoneskin",
      base: "Strength",
      value: 0.30
    },
    {
      name: "Berserker",
      base: "Strength",
      value: 0.35
    },
    {
      name: "Cone-of-cold",
      base: "Strength",
      value: 0.40
    },
    {
      name: "Thunderbolt",
      base: "Strength",
      value: 0.50
    },
    {
      name: "Magic Find",
      text: "Maximum number of artifacts found by each party member is increased by {0}",
      base: "Maximum",
      applies: "team",
      value: 2
    },
    {
      name: "Detect Secrets",
      text: "Minimum number of artifacts found by each party member is increased by {0}",
      base: "Minimum",
      applies: "team",
      value: 1
    },
    {
      name: "Treasure Hunter I",
      base: "Maximum",
      value: 2
    },
    {
      name: "Treasure Hunter II",
      base: "Maximum",
      value: 4
    },
    {
      name: "Treasure Hunter III",
      base: "Maximum",
      value: 6
    },
    {
      name: "Scavenger I",
      base: "Minimum",
      value: 1
    },
    {
      name: "Scavenger II",
      base: "Minimum",
      value: 2
    },
    {
      name: "Scavenger III",
      base: "Minimum",
      value: 3
    },
    {
      name: "Protector I",
      base: "Survival",
      value: 0.025
    },
    {
      name: "Protector II",
      base: "Survival",
      value: 0.05
    },
    {
      name: "Protector III",
      base: "Survival",
      value: 0.10
    },
    {
      name: "Commander I",
      base: "Commander",
      value: 0.15
    },
    {
      name: "Commander II",
      base: "Commander",
      value: 0.25
    },
    {
      name: "Commander III",
      base: "Commander",
      value: 0.50
    },
    {
      name: "Arch Wizard I",
      base: "Arch Wizard",
      value: 0.10
    },
    {
      name: "Arch Wizard II",
      base: "Arch Wizard",
      value: 0.20
    },
    {
      name: "Arch Wizard III",
      base: "Arch Wizard",
      value: 0.30
    },
    {
      name: "Aura of Protection",
      base: "Survival",
      applies: "team",
      value: 0.075
    },
    {
      name: "Amazon I",
      base: "Amazon",
      value: 0.05
    },
    {
      name: "Amazon II",
      base: "Amazon",
      value: 0.10
    },
    {
      name: "Amazon III",
      base: "Amazon",
      value: 0.25
    },
    {
      name: "Brothers-in-arms I",
      base: "Brothers",
      value: 0.05
    },
    {
      name: "Brothers-in-arms II",
      base: "Brothers",
      value: 0.10
    },
    {
      name: "Brothers-in-arms III",
      base: "Brothers",
      value: 0.25
    },
    {
      name: "Fastidious I",
      base: "Fastidious",
      value: 0.15
    },
    {
      name: "Fastidious II",
      base: "Fastidious",
      value: 0.30
    },
    {
      name: "Fastidious III",
      base: "Fastidious",
      value: 0.50
    },
    {
      name: "Supplier I",
      base: "Supplier",
      value: 0.05
    },
    {
      name: "Supplier II",
      base: "Supplier",
      value: 0.10
    },
    {
      name: "Supplier III",
      base: "Supplier",
      value: 0.15
    },
    {
      name: "Resourceful I",
      base: "Resourceful",
      value: 1
    },
    {
      name: "Resourceful II",
      base: "Resourceful",
      value: 2
    },
    {
      name: "Resourceful III",
      base: "Resourceful",
      value: 3
    },
    {
      name: "Support I",
      base: "Support",
      value: 1
    },
    {
      name: "Support II",
      base: "Support",
      value: 2
    },
    {
      name: "Support III",
      base: "Support",
      value: 3
    },
    {
      name: "Healer I",
      base: "Healer",
      value: 0.10
    },
    {
      name: "Healer II",
      base: "Healer",
      value: 0.25
    },
    {
      name: "Healer III",
      base: "Healer",
      value: 0.50
    },
    {
      name: "Energetic I",
      base: "Energetic",
      value: 0.50
    },
    {
      name: "Energetic II",
      base: "Energetic",
      value: 0.75
    },
    {
      name: "Energetic III",
      base: "Energetic",
      value: 1.00
    },
    {
      name: "Revive I",
      base: "Revive",
      value: 0.05
    },
    {
      name: "Revive II",
      base: "Revive",
      value: 0.10
    },
    {
      name: "Revive III",
      base: "Revive",
      value: 0.15
    },
    {
      name: "Speed Runner I",
      base: "Speed",
      value: 0.10
    },
    {
      name: "Speed Runner II",
      base: "Speed",
      value: 0.25
    },
    {
      name: "Speed Runner III",
      base: "Speed",
      value: 0.50
    }
  ];
  cache.set( "skills", skills, true );

} );