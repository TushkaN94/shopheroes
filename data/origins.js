$( function() {

  var cache = $.cache._();
  
  var origins = [
    {
      name: "Temple",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Training Hall",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Thief's Hideout",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Fountain",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Fighter's Guild",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "School of Magic",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Hunter's Lodge",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Port",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Theater",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Cathedral",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "War College",
      type: "Questing",
      b: true,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Heroic Package #1",
      type: "Package",
      m: false
    },
    {
      name: "Heroic Package #2",
      type: "Package",
      m: false
    },
    {
      name: "Inn",
      type: "City",
      m: false,
      lv: 1,
      cap: 55,
      sub: 3,
      boosts: {
        55: { value: 0.25, sub: 0.5 }
      },
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    },
    {
      name: "Castle",
      type: "City",
      m: false,
      lv: 1,
      cap: 50,
      sub: 3,
      boosts: {
        50: { value: 0.25, sub: 0.5 }
      }
    }
  ];
  cache.set( "origins", origins, true );

} );
  
