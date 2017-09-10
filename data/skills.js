$( function() {

  var cache = $.cache._();
  
  var effects = [
    { 
      name: "Escape",
      text: "Chance of getting injury is decreased by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Wise",
      text: "Amount of experience for successfully completing quests is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Resilient",
      text: "Amount of experience for completing quests with injury is {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Gold",
      text: "Amount of gold found is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Maximum",
      text: "Maximum number of artifacts found is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Minimum",
      text: "Minimum number of artifacts found is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Leader",
      text: "Number of companions is increased by {0}",
      cap: false,
      type: "value",
      applies: "hero",
      affects: "companions",
      leader: true,
      filters: () => true
    },
    {
      name: "Equipment",
      text: "Equipment strength is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: "power.items",
      leader: false,
      filters: () => true
    },
    { 
      name: "Strength",
      text: "Strength is increased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: "power.hero",
      leader: false,
      filters: () => true
    },
    { 
      name: "Survival",
      text: "Survival rate of each party member is increased by {0}",
      cap: false,
      type: "percent",
      applies: "team",
      affects: "power",
      leader: false,
      filters: () => true
    },
    { 
      name: "Break",
      text: "Chance of breaking equipment is decreased by {0}",
      cap: false,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Resourceful",
      text: "Prevents {0} pieces of equipment from breaking",
      cap: false,
      type: "value",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Support",
      text: "Prevents {0} pieces of companions equipment from breaking",
      cap: false,
      type: "value",
      applies: "team",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Healer",
      text: "Resting time of companions is reduced by {0}",
      cap: 0.9,
      type: "percent",
      applies: "team",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Energetic",
      text: "Resting time is reduced by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Revive",
      text: "{0} chance to revive injuried companions",
      cap: false,
      type: "percent",
      applies: "team",
      affects: null,
      leader: false,
      filters: () => true
    },
    { 
      name: "Speed",
      text: "Quest duration is reduced by {0}",
      cap: 1.0,
      type: "percent",
      applies: "hero",
      affects: null,
      leader: true,
      filters: () => true
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
      base: "Equipment",
      text: "Equipment strength of Rogues in party is increased by {0}",
      applies: "team",
      value: 0.10,
      leader: true,
      filters: ( hero, i ) => { return "Rogue" == hero.type; }
    },
    {
      name: "Gangster II",
      base: "Equipment",
      text: "Equipment strength of Rogues in party is increased by {0}",
      applies: "team",
      value: 0.15,
      leader: true,
      filters: ( hero, i ) => { return "Rogue" == hero.type; }
    },
    {
      name: "Gangster III",
      base: "Equipment",
      text: "Equipment strength of Rogues in party is increased by {0}",
      applies: "team",
      value: 0.25,
      leader: true,
      filters: ( hero, i ) => { return "Rogue" == hero.type; }
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
      base: "Strength",
      text: "Strength of each party member is increased by {0}",
      applies: "team",
      value: 0.15,
      leader: true
    },
    {
      name: "Commander II",
      base: "Strength",
      text: "Strength of each party member is increased by {0}",
      applies: "team",
      value: 0.25,
      leader: true
    },
    {
      name: "Commander III",
      base: "Strength",
      text: "Strength of each party member is increased by {0}",
      applies: "team",
      value: 0.50,
      leader: true
    },
    {
      name: "Arch Wizard I",
      base: "Strength",
      text: "Strength of Spellcasters in party is increased by {0}",
      applies: "team",
      value: 0.10,
      filters: ( hero ) => { return "Spellcaster" == hero.type; }
    },
    {
      name: "Arch Wizard II",
      base: "Strength",
      text: "Strength of Spellcasters in party is increased by {0}",
      applies: "team",
      value: 0.20,
      filters: ( hero ) => { return "Spellcaster" == hero.type; }
    },
    {
      name: "Arch Wizard III",
      base: "Strength",
      text: "Strength of Spellcasters in party is increased by {0}",
      applies: "team",
      value: 0.30,
      filters: ( hero ) => { return "Spellcaster" == hero.type; }
    },
    {
      name: "Aura of Protection",
      base: "Survival",
      applies: "team",
      value: 0.075
    },
    {
      name: "Amazon I",
      base: "Survival",
      text: "Survival rate of Female party members is increased by {0}",
      applies: "team",
      value: 0.05,
      leader: true,
      filters: ( hero ) => { return "Female" == hero.sex; }
    },
    {
      name: "Amazon II",
      base: "Survival",
      text: "Survival rate of Female party members is increased by {0}",
      applies: "team",
      value: 0.10,
      leader: true,
      filters: ( hero ) => { return "Female" == hero.sex; }
    },
    {
      name: "Amazon III",
      base: "Survival",
      text: "Survival rate of Female party members is increased by {0}",
      applies: "team",
      value: 0.25,
      leader: true,
      filters: ( hero ) => { return "Female" == hero.sex; }
    },
    {
      name: "Brothers-in-arms I",
      base: "Survival",
      text: "Survival rate of Male party members is increased by {0}",
      applies: "team",
      value: 0.05,
      leader: true,
      filters: ( hero ) => { return "Male" == hero.sex; }
    },
    {
      name: "Brothers-in-arms II",
      base: "Survival",
      text: "Survival rate of Male party members is increased by {0}",
      applies: "team",
      value: 0.10,
      leader: true,
      filters: ( hero ) => { return "Male" == hero.sex; }
    },
    {
      name: "Brothers-in-arms III",
      base: "Survival",
      text: "Survival rate of Male party members is increased by {0}",
      applies: "team",
      value: 0.25,
      leader: true,
      filters: ( hero ) => { return "Male" == hero.sex; }
    },
    {
      name: "Fastidious I",
      base: "Break",
      value: 0.15
    },
    {
      name: "Fastidious II",
      base: "Break",
      value: 0.30
    },
    {
      name: "Fastidious III",
      base: "Break",
      value: 0.50
    },
    {
      name: "Supplier I",
      base: "Break",
      applies: "team",
      value: 0.05
    },
    {
      name: "Supplier II",
      base: "Break",
      applies: "team",
      value: 0.10
    },
    {
      name: "Supplier III",
      base: "Break",
      applies: "team",
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