﻿$( function() {

  var rarities = [
    "Common",
    "Uncommon",
    "Rare",
    "Exclusive"
  ];
  c_data.set( "rarities", rarities );

  var breaks = {
    a: { 
      "1": -0.025, 
      "0": 0, 
      "-1": 0.0125, 
      "-2": 0.025 
    },
    q: { 
      "Common": 1.0,
      "Good": 0.75,
      "Great": 0.5,
      "Flawless": 0.3,
      "Epic": 0.15,
      "Legendary": 0.05,
      "Mythical": 0.04
    }
  };
  c_data.set( "breaks", breaks );

  var qualities = {
    "Common": { 
      sh: "C",
      i: 0
    },
    "Good": {
      sh: "GD",
      i: 1
    },
    "Great": {
      sh: "GT",
      i: 2
    },
    "Flawless": {
      sh: "F",
      i: 3
    },
    "Epic": {
      sh: "E",
      i: 4
    },
    "Legendary": {
      sh: "L",
      i: 5
    },
    "Mythical": {
      sh: "M",
      i: 6
    }
  };
  c_data.set( "qualities", qualities );

  var powers = {
    q: { 
      "Common": 1.0,
      "Good": 1.1,
      "Great": 1.2,
      "Flawless": 1.3,
      "Epic": 1.5,
      "Legendary": 2.0,
      "Mythical": 5.0
    },
    lv: {
      1:0,
      2:5,
      3:15,
      4:25,
      5:40,
      6:55,
      7:75,
      8:100,
      9:125,
      10:155,
      11:190,
      12:225,
      13:265,
      14:305,
      15:350,
      16:400,
      17:450,
      18:505,
      19:565,
      20:625,
      21:690,
      22:755,
      23:825,
      24:900,
      25:975,
      26:1055,
      27:1140,
      28:1225,
      29:1315,
      30:1405,
      31:1500,
      32:1600,
      33:1700,
      34:1805,
      35:1915,
      36:2025,
      37:2140,
      38:2255,
      39:2375,
      40:2500,
      41:2625,
      42:2755,
      43:2890,
      44:3025,
      45:3165,
      46:3305,
      47:3450,
      48:3600,
      49:3750,
      50:3905,
      51:4065,
      52:4225,
      53:4390,
      54:4555,
      55:4725
    }
  };
  c_data.set( "powers", powers );

} );
