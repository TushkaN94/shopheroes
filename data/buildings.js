$( function() {

  var cache = $.cache._();
  
  var buildings = [
    {
      name: "Temple",
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
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
      type: "Hero",
      b: false,
      m: false,
      lv: 1,
      cap: 1,
      cj: {
        lv: 0,
        cap: 0,
        value: 0.05
      }
    }
  ];
  cache.set( "buildings", buildings, true );

} );
  
