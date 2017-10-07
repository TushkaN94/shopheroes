$( function() {

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
      cj: {
        lv: 0,
        cap: 5,
        value: 0.05
      },
      boost: {
        55: { c: 0.25, i: 0.5 }
      }
    },
    {
      name: "Castle",
      type: "City",
      m: false,
      lv: 1,
      cap: 50,
      boost: {
        50: { c: 0.25, i: 0.5 }
      }
    }
  ];
  c_data.set( "origins", origins );
  localforage.getItem( "origins" )
    .then( function( value ) {
      c_data.extend( "origins", JSON.parse( value ) );
    } );
  //c_data.extend( "origins", cache.get( "origins" ) );

} );
  
