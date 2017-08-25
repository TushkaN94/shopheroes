$( function() {
  $.cache = ( function(){
    var instance;
    var cache;
    function init() {
      cache = {};
      return {
        set: function( key, val, force ) {
          if ( !cache.hasOwnProperty( key ) || force ) {
            if ( window.localStorage ) {
              window.localStorage.setItem( key, JSON.stringify( val ) );
              cache[ key ] = JSON.parse( window.localStorage.getItem( key ) );
            } else {
              cache[ key ] = val;
            }
          }
          return cache[ key ];
        },
        get: function( key ) {
          if ( !cache.hasOwnProperty( key ) ) {
            if ( window.localStorage ) {
              cache[ key ] = JSON.parse( localStorage.getItem( key ) );
            }
          }
          return cache[ key ];
        },
        remove: function( key ) {
          if ( window.localStorage ) {
            window.localStorage.removeItem( key );
          }
          if ( cache.hasOwnProperty( key ) ) {
            delete cache[key];
          }
        }
      };
    }

    return {
      _: function() {
        if ( !instance ) {
          instance = init();
        }
        return instance;
      }
    };
  } )();

} );
