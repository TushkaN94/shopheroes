$( function() {

  var teams = [];
  //c_data.set( "teams", teams );
  localforage.getItem( "teams" )
    .then( function( value ) {
      c_data.extend( "teams", JSON.parse( value ) );
    } );
  //c_data.extend( "teams", cache.get( "teams" ) );

} );
