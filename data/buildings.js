$( function() {

  var cache = $.cache._();
  
  var buildings = [
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
      type: "Questing",
      b: false,
      m: false,
      lv: 1,
      cap: 1,
      cj: {
        lv: 0,
        cap: 0,
        value: 0.05
      }
    },
    {
      name: "Heroic Package #2",
      type: "Questing",
      b: false,
      m: false,
      lv: 1,
      cap: 1,
      cj: {
        lv: 0,
        cap: 0,
        value: 0.05
      }
    },
    {
      name: "Inn",
      type: "City",
      b: false,
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      }
    }
  ];
  cache.set( "buildings", buildings, true );

} );
  
