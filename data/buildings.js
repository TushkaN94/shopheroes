$( function() {

  var cache = $.cache._();
  
  var buildings = [
    {
      name: "Temple",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Training Hall",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Thief's Hideout",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Fountain",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Fighter's Guild",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "School of Magic",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Hunter's Lodge",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Port",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Theater",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Cathedral",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "War College",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 55,
      cj: {
        lv: 1,
        cap: 6,
        value: 0.05
      }
    },
    {
      name: "Heroic Package #1",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 1,
      cj: {
        lv: 1,
        cap: 1,
        value: 0.05
      }
    },
    {
      name: "Heroic Package #2",
      type: "Hero",
      m: false,
      lv: 1,
      cap: 1,
      cj: {
        lv: 1,
        cap: 1,
        value: 0.05
      }
    }
  ];
  cache.set( "buildings", buildings, true );

} );
  
