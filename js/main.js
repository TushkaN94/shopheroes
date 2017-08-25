$( function() {
  $.loadScript = function( url, options ) {
    options = $.extend( options || {}, {
      dataType: "script",
      cache: false,
      url: url
    } );
    return $.ajax( options );
  };

  var cache = $.cache._();

  var c_items = cache.get( "items" ) || [];
  var c_qualities = cache.get( "qualities" ) || {};
  var c_powers = cache.get( "powers" ) || {};
  var c_breaks = cache.get( "breaks" ) || {};
  var c_heroes = cache.get( "heroes" );
  var c_teams = cache.get( "teams" );

  $( '#tabs' ).tabs();
  
  Vue.component( 'skill', {
    template: '#templates-skill',
    props:[ 'skill' ]
  } );
  Vue.component( 'hero', {
    template: '#templates-hero',
    props: ['hero'],
    data: function() {
      return {
        qualities: c_qualities
      };
    },
    computed: {
      summary: function() {
        return this.$parent.summary( this.hero );
      },
      equippables: function() {
        return this.$parent.equippables( this.hero );
      }
    }
  } );
  var vm_heroes = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-heroes',
    data: function() { 
      return {
        filter: {
          name: null,
          type: [],
          tier: [],
          sex: []
        },
        heroes: c_heroes || []
      }
    },
    watch: {
      heroes: { 
        handler: function( heroes ) {
          cache.set( "heroes", heroes, true );
        },
        deep: true
      }
    },
    methods: {
      summary: function( hero ) {
        var power = hero.power.base + hero.power.m * ( c_powers.lv[hero.lv] || 0 );
        var skills = $.map( hero.skills, function( skill, skill_lv ) {
          return { 
            name: skill.name,
            active: ( parseInt(hero.lv) >= parseInt(skill_lv) )
          };
        } );
        var slots = {};
        $.each( hero.slots, function( slot_key, slot ) {
          var res = {
            power: 0,
            a: 0,
            break: 0.00,
            skill: {
              name: 'None',
              active: false
            }
          };
          var found = c_items.filter( function( item ) {
            return ( item.name == slot.item );
          } );
          if ( found.length == 1 ) {
            $.extend( true, res, found[0], {
              q: slot.q
            } );
            res.power = ( res.power || 0 ) * ( c_powers.q[res.q] || 1.0 );
            res.a = slot.list[res.class].a;
            var chance = Math.max( 0.03, 1 - Math.pow( Math.max( 0, 1 - 0.03 * Math.abs( res.lv - hero.lv ) - c_breaks.a[res.a] ), 0.85 ) ) * c_breaks.q[res.q];
            if ( chance < 0.005 ) {
              chance = 0;
            }
            res.break = chance || 0;
            var q1 = c_qualities[slot.q];
            var q2 = c_qualities[res.skill.q];
            res.skill.active = ( !!q1 && !!q2 && q1.i >= q2.i );
            power += res.power;
          }
          slots[slot_key] = res;
        } );
        return {
          power: power,
          slots: slots,
          skills: skills
        };
      },
      equippables: function( hero ) {
        var items = {};
        $.each( hero.slots, function( slot_key, slot ) {
          items[slot_key] = {};
          $.each( slot.list, function( item_key, item ) {
            items[slot_key][item_key] = c_items.filter( function( item ) {
              return ( item.class == item_key );
            } );
          } );
        } );
        return items;
      },
      visible: function( hero ) {
        var
          m_filter = this._data.filter,
          m_name = true,
          m_type = true,
          m_tier = true,
          m_sex = true;
        if ( m_filter.name ) {
          m_name = hero.name.includes( m_filter.name );
        }
        if ( m_filter.type.length > 0 ) {
          m_type = m_filter.type.indexOf( hero.type ) >= 0;
        }
        if ( m_filter.tier.length > 0 ) {
          m_tier = m_filter.tier.indexOf( "" + hero.tier ) >= 0;
        }
        if ( m_filter.sex.length > 0 ) {
          m_sex = m_filter.sex.indexOf( hero.sex ) >= 0;
        }
        return m_name && m_type && m_tier && m_sex;
      }
    }
  } );
  $( '#tabs-heroes' ).append( vm_heroes.$el );

  Vue.component( 'team', {
    template: '#templates-team',
    props: ['team'],
    computed: {
      slots: function() {
        var slots = Array(6);
        for( var i = 0; i < 6; i++ ) {
          var name = this.team.slots[i];
          var found = c_heroes.filter( function( hero ) {
            return ( hero.name == name );
          } );
          slots[i] = found[0];
        }
        return slots;
      },
      summary: function() {
        var power = 0;
        this.slots
        .filter( function( hero ) {
          return ( !!hero );
        } )
        .map( function( hero ) {
          var summary = vm_heroes.summary( hero );
          power += summary.power;
        } );
        return {
          power: power,
          skills: []
        };
      }
    },
    methods: {
      options: function( name ) {
        var selected = this.team.slots
          .filter( function( res ) {
            return ( !!res && res != name );
          } );
        var res = c_heroes;
        if ( selected.length > 0 ) {
          res = res.filter( function( hero ) {
            return !( selected.indexOf( hero.name ) > -1 );
          } );
        }
        return res;
      },
      remove: function( team ) {
        this.$parent.remove( team );
      }
    }
  } );
  var vm_teams = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-teams',
    data: function() { 
      return {
        teams: c_teams || [],
      }
    },
    watch: {
      teams: { 
        handler: function( teams ) {
          cache.set( "teams", teams, true );
        },
        deep: true
      }
    },
    methods: {
      add: function() {
        var team = {
          name: 'New Team',
          slots: new Array(6)
        }
        this.teams.push( team );
      },
      remove: function( team ) {
        this.teams.splice( this.teams.indexOf( team ), 1 );
      }
    }
  } );
  $( '#tabs-teams' ).append( vm_teams.$el );

  var $data = $( '#tabs-data-type' );

  $( '#tabs-data-load' )
  .on( 'click', function() {
    var type = $data.val();
    switch ( type ) {
      case "supplementaries":
        $.when(
          $.loadScript( 'data/supplementaries.js' )
        )
        .then( function( res1 ) {
          c_qualities = cache.get( "qualities" );
          c_powers = cache.get( "powers" );
          c_breaks = cache.get( "breaks" );
        } );
        break;
      case "heroes":
        $.when(
          $.loadScript( 'data/heroes.js' )
        )
        .then( function( res1 ) {
          c_heroes = cache.get( "heroes" );
        } );
        break;
      case "items":
        $.when(
          $.loadScript( 'data/items.js' )
        )
        .then( function( res1 ) {
          c_items = cache.get( "items" );
        } );
        break;
    }
  } );

  $( '#tabs-data-remove' )
  .on( 'click', function() {
    var type = $data.val();
    switch ( type ) {
      case "supplementaries":
        cache.remove( "qualities" );
        cache.remove( "powers" );
        cache.remove( "breaks" );
        break;
      case "heroes":
        cache.remove( "heroes" );
        c_heroes = [];
        break;
      case "items":
        cache.remove( "items" );
        c_items = []
        break;
    }
  } );


} );
