$( function() {
  String.prototype.capitalize = function( lower ) {
    return ( lower ? this.toLowerCase() : this ).replace( /(?:^|\s)\S/g, function( a ) { return a.toUpperCase(); } );
  };
  $.loadScript = function( url, options ) {
    var opts = $.extend( true, {
      dataType: "script",
      cache: false,
      url: url
    }, options );
    return $.ajax( opts );
  };

  var cache = $.cache._();
  
  var c_data = {
    options: {
      qualities: [],
      heroes: {
        type: [],
        tier: [],
        sex: [],
        skill: []
      },
      items: {
        type: [],
        skill: []
      }
    },
    qualities: {},
    powers: {},
    breaks: {},
    skills: [],
    skills_effects: [],
    items: [],
    heroes: [],
    teams: [],
    json: function( key ) {
      var res = "";
      switch ( key ) {
        case "heroes":
          res = JSON.stringify( cache.get( "heroes_custom" ) || [] );
          break;
        case "items":
          res = JSON.stringify( cache.get( "items_custom" ) || [] );
          break;
        case "teams":
          res = JSON.stringify( cache.get( "teams" ) || [] );
          break;
        default:
          break;
      }
      return res;
    },
    load: function( key ) {
      var self = this;
      switch ( key ) {
        case "supplementaries":
          /*$.ajax( {
            url: 'data/supplementaries.json',
            dataType: 'json',
            cache: false,
            complete: function( res ) {
              cache.set( "qualities", res.qualities || {} );
              cache.set( "powers", res.powers || {} );
              cache.set( "breaks", res.breaks || {} );
              self.set( "qualities", res.qualities || {} );
              self.set( "powers", res.powers || {} );
              self.set( "breaks", res.breaks || {} );
            }
          } );*/
          $.loadScript( 'data/supplementaries.js', {
            success: function() {
              self.set( "qualities", cache.get( "qualities" ) || [] );
              self.set( "powers", cache.get( "powers" ) || [] );
              self.set( "breaks", cache.get( "breaks" ) || [] );
            }
          } );
          break;
        case "items":
          $.loadScript( 'data/items.js', {
            success: function() {
              self.set( "items", cache.get( "items" ) || [] );
            }
          } );
          break;
        case "heroes":
          $.loadScript( 'data/heroes.js', {
            success: function() {
              self.set( "heroes", cache.get( "heroes" ) || [] );
            }
          } );
          break;
        case "skills":
          $.loadScript( 'data/skills.js', {
            success: function() {
              self.set( "skills", cache.get( "skills" ) || [] );
              self.set( "skills_effects", cache.get( "skills_effects" ) || [] );
            }
          } );
          break;
      }
    },
    extend: function( key ) {
      var self = this;
      switch ( key ) {
        case 'heroes':
          $.extend( true, self.heroes, cache.get( "heroes_custom" ) || [] );
          break;
        case 'items':
          $.extend( true, self.items, cache.get( "items_custom" ) || [] );
          break;
        case 'teams':
          $.extend( true, self.teams, cache.get( "teams" ) || [] );
          break;
        default:
          break;
      }
    },
    set: function( key ) {
      var self = this;
      var value = cache.get( key );
      switch ( key ) {
        case 'heroes':
          var ids_type = [];
          var ids_tier = [];
          var ids_sex = [];
          var ids_skill = [];
          self.heroes.splice(0);
          self.options.heroes.type.splice(0);
          self.options.heroes.tier.splice(0);
          self.options.heroes.sex.splice(0);
          self.options.heroes.skill.splice(0);
          self.options.heroes.type.push( { id: "", text: "" } );
          $.each( value, function( k, v ) {
            self.heroes.push( v );
            if ( ids_type.indexOf( v.type ) < 0 ) {
              ids_type.push( v.type );
              self.options.heroes.type.push( { id: v.type, text: v.type } );
            }
            if ( ids_tier.indexOf( v.tier ) < 0 ) {
              ids_tier.push( v.tier );
              self.options.heroes.tier.push( { id: v.tier, text: v.tier } );
            }
            if ( ids_sex.indexOf( v.sex ) < 0 ) {
              ids_sex.push( v.sex );
              self.options.heroes.sex.push( { id: v.sex, text: v.sex } );
            }
            $.each( v.skills, function( sk, sv ) {
              if ( ids_skill.indexOf( sv.name ) < 0 ) {
                ids_skill.push( sv.name );
                self.options.heroes.skill.push( { id: sv.name, text: sv.name } );
              }
            } );
          } );
          break;
        case 'items':
          var ids_type = [];
          var ids_skill = [];
          self.items.splice(0);
          self.options.items.type.splice(0);
          self.options.items.skill.splice(0);
          $.each( value, function( k, v ) {
            self.items.push( v );
            if ( ids_type.indexOf( v.type ) < 0 ) {
              ids_type.push( v.type );
              self.options.items.type.push( { id: v.type, text: v.type } );
            }
            if ( v.skill && ids_skill.indexOf( v.skill.name ) < 0 ) {
              ids_skill.push( v.skill.name );
              self.options.items.skill.push( { id: v.skill.name, text: v.skill.name } );
            }
          } );
          break;
        case 'teams':
          self.teams.splice(0);
          self.teams.push.apply( self.teams, value );
          break;
        case 'qualities':
          self.qualities = value;
          self.options.qualities.splice(0);
          $.each( value, function( k, v ) {
            self.options.qualities.push( { id: k, text: k } );
          } );
          break;
        default:
          self[key] = value;
          break;
      }
    }
  };

  c_data.set( "qualities" );
  c_data.set( "powers" );
  c_data.set( "breaks" );
  c_data.set( "items" );
  c_data.extend( "items" );
  c_data.set( "heroes" );
  c_data.extend( "heroes" );
  c_data.set( "teams" );
  c_data.extend( "teams" );
  c_data.set( "skills" );
  c_data.set( "skills_effects" );
  
  Vue.component( 'select2', {
    template: '#templates-select2',
    props: [ 'options', 'value', 'nosearch', 'tags', 'placeholder' ],
    data: function() {
      return {
        settings: { 
          width: '100%',
          dropdownAutoWidth: true,
          allowClear: true,
          minimumResultsForSearch: Infinity,
          placeholder: " ",
          tags: false,
          createTag: function( params ) {
            return {
              id: params.term,
              text: params.term.capitalize( true ),
              custom: true
            }
          },
          templateResult: function( data ) {
            var $result = $( "<span></span>" );
            $result.text( data.text );
            if ( data.custom ) {
              $result.prepend( "Contains \"" );
              $result.append( "\"" );
            }
            return $result;
          }
        }
      };
    },
    mounted: function() {
      var vm = this;
      $.extend( true, this.settings, {
        data: this.options,
        minimumResultsForSearch: ( !!this.nosearch ? Infinity : 3 ),
        placeholder: this.placeholder || " ",
        tags: !!this.tags
      } );
      $( this.$el )
        .select2( this.settings )
        .val( this.value )
        .trigger( 'change' )
        .on( 'change', function() {
          vm.$emit( 'input', this.value );
        } );
    },
    watch: {
      value: function( value ) {
        $( this.$el ).val( value ).trigger( 'change' );
      },
      options: function( options ) {
        $.extend( true, this.settings, { 
          data: options 
        } );
      },
      nosearch: function( nosearch ) {
        $.extend( true, this.settings, {
          minimumResultsForSearch: nosearch ? Infinity : 3
        } );
      },
      placeholder: function( placeholder ) {
        $.extend( true, this.settings, {
          placeholder: !!placeholder || " "
        } );
      },
      tags: function( tags ) {
        $.extend( true, this.settings, {
          tags: !!tags
        } );
      },
      settings: function( settings ) {
        $( this.$el ).select2( settings );
      }
    },
    destroyed: function() {
      $( this.$el ).off().select2( 'destroy' );
    }
  } );

  Vue.component( 'skill', {
    template: '#templates-skill',
    props:[ 'skill' ]
  } );
  
  Vue.component( 'hero', {
    template: '#templates-hero',
    props: [ 'hero' ],
    computed: {
      summary: function() {
        return this.$parent.summary( this.hero );
      },
      equippables: function() {
        return this.$parent.equippables( this.hero );
      },
      qualities: function() {
        return c_data.options.qualities;
      }
    },
    watch: {
      hero: { 
        handler: function( hero ) {
          if ( isNaN( hero.lv ) ) {
            hero.lv = 1;
          } else if ( hero.lv < 1 ) {
            hero.lv = 1;
          } else if ( hero.lv > hero.cap ) {
            hero.lv = hero.cap;
          }
        },
        deep: true
      }
    }
  } );
  var vm_heroes = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-heroes',
    data: function() { 
      return {
        options: c_data.options.heroes,
        heroes: c_data.heroes,
        filter: () => true,
        filters: {
          name: null,
          type: null,
          tier: null,
          sex: null,
          skill: null,
          lv: {
            min: null,
            max: null
          }
        },
      }
    },
    methods: {
      visible: function( hero ) {
        return this.filter( hero );
      },
      summary: function( hero ) {
        var result = {
          companions: 1,
          power: { 
            hero: 0,
            items: 0
          },
          items: Array(7),
          skills: Array(3)
        };
        if ( !hero ) {
          return result;
        }
        var optimals = 0;
        result.companions = 4 + ( hero.lv >= 30 ? 1 : 0 );
        result.power.hero += hero.power.base + hero.power.m * ( c_data.powers.lv[hero.lv] || 0 );
        result.skills = hero.skills.map( s => {
          return $.extend( true, {}, s, {
            active: ( hero.lv >= s.lv )
          } );
        } );
        result.items = hero.slots
          .map( function( slot ) {
            var res = {
              power: 0,
              a: 0,
              chance: 0.0
            };
            if ( !!slot.item ) {
              var found = c_data.items.find( i => i.name.toUpperCase() == slot.item.toUpperCase() );
              if ( !!found ) {
                $.extend( true, res, found, {
                  q: slot.q
                } );
                var lv_difference = Math.abs( res.lv - hero.lv );
                res.optimal = ( lv_difference <= 6 );
                res.power = Math.round( ( res.power || 0 ) * ( c_data.powers.q[res.q] || 1.0 ), 0 );
                res.a = slot.list.find( s => s.type == res.type ).a;
                var chance = Math.max( 0.03, 1 - Math.pow( Math.max( 0, 1 - 0.03 * lv_difference - c_data.breaks.a[res.a] ), 0.85 ) ) * c_data.breaks.q[res.q];
                if ( chance < 0.005 ) {
                  chance = 0;
                }
                res.chance = chance || 0; 
                if ( !!res.skill ) {
                  var q1 = c_data.qualities[slot.q];
                  var q2 = c_data.qualities[res.skill.q];
                  $.extend( true, res.skill, {
                    active: res.skill.m && ( !!q1 && !!q2 && q1.i >= q2.i )
                  } );
                }
                result.power.items += res.power;
                optimals += res.optimal;
              }
            }
            return res;
          } );
        result.power.items = ( optimals == 7 ? 1.25 : 1.0 ) * result.power.items;

        var skills1 = result.skills
          .filter( s => s.active );
        var skills2 = result.items
          .filter( i => i.skill )
          .map( i => { return i.skill; } )
          .filter( s => s.active );
        var skills = [].concat( skills1, skills2 )
          .map( s => {
            var si = c_data.skills.find( ss => ss.name == s.name );
            if ( si == undefined ) {
              console.log( s.name );
            }
            var sb = c_data.skills_effects.find( se => se.name == si.base );
            if ( sb == undefined ) {
              console.log( si.name );
            }
            return $.extend( true, {}, sb, si );
          } )
          .reduce( ( p, s ) => {
            if ( p[s.applies][s.base] == undefined ) {
              p[s.applies][s.base] == s;
            } else {
              value = p[s.applies][s.base].value || 0;
              p[s.applies][s.base].value = s.stacks ? value + s.value : Math.max( value, s.value );
            }
            return p;
          }, { team: {}, hero: {} } );
        return result;
      },
      equippables: function( hero ) {
        var result = hero.slots.map( s => {
          return s.list.map( t => {
            var items = c_data.items
              .filter( i => i.type.toUpperCase() == t.type.toUpperCase() )
              .map( i => {
                return {
                  id: i.name,
                  text: i.name
                };
              } );
            return {
              text: t.type,
              children: items
            };
          } )
        } );
        return result;
      }
    },
    watch: {
      heroes: { 
        handler: function( heroes ) {
          var custom = heroes
            .map( hero => {
              var slots = hero.slots
                .map( slot => {
                  return {
                    item: slot.item,
                    q: slot.q
                  };
                } );
              return {
                lv: hero.lv,
                slots: slots
              };
            } );
          cache.set( 'heroes_custom', custom, true );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var fn_name, fn_type, fn_tier, fn_sex, fn_skill, fn_lv;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          } else {
            fn_name = () => true;
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type.toUpperCase() == filters.type.toUpperCase();
          } else {
            fn_type = () => true;
          }
          if ( !!filters.tier ) {
            fn_tier = ( h ) => h.tier == filters.tier;
          } else {
            fn_tier = () => true;
          }
          if ( !!filters.sex ) {
            fn_sex = ( h ) => h.sex.toUpperCase() == filters.sex.toUpperCase();
          } else {
            fn_sex = () => true;
          }
          if ( !!filters.skill ) {
            fn_skill = ( h ) => h.skills.any( s => s.name.toUpperCase().includes( filters.skill.toUpperCase() ) );
          } else {
            fn_skill = () => true;
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          } else {
            fn_lv = () => true;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_tier( h ) && fn_sex( h ) && fn_skill( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-heroes' ).append( vm_heroes.$el );

  Vue.component( 'item', {
    template: '#templates-item',
    props: [ 'item' ]
  } );
  var vm_items = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-items',
    data: function() { 
      return {
        options: c_data.options.items,
        items: c_data.items,
        filter: () => true,
        filters: {
          name: null,
          type: null,
          skill: null,
          lv: {
            min: null,
            max: null
          }
        },
      }
    },
    methods: {
      visible: function( item ) {
        return this.filter( item );
      }
    },
    watch: {
      items: { 
        handler: function( items ) {
          var custom = items
            .map( item => {
              if ( item.skill ) {
                return {
                  skill: {
                    m: item.skill.m
                  }
                };
              }
              else {
                return {};
              };
            } );
          cache.set( 'items_custom', custom, true );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var fn_name, fn_type, fn_skill, fn_lv;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          } else {
            fn_name = () => true;
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type.toUpperCase() == filters.type.toUpperCase();
          } else {
            fn_type = () => true;
          }
          if ( !!filters.skill ) {
            fn_skill = ( h ) => h.skill && h.skill.name.toUpperCase().includes( filters.skill.toUpperCase() );
          } else {
            fn_skill = () => true;
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          } else {
            fn_lv = () => true;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_skill( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-items' ).append( vm_items.$el );

  Vue.component( 'team', {
    template: '#templates-team',
    props: ['team'],
    computed: {
      summary: function() {
        var roster = this.team.roster
          .map( function( name, i ) {
            var hero = c_data.heroes.find( n => !!name && n.name.toUpperCase() == name.toUpperCase() );
            var summary = vm_heroes.summary( hero );
          } );
        var companions = roster[0].companions || 1;
        for ( i = companions, m = this.team.roster.length; i < m; i++ ) {
          this.team.roster[i] = undefined;
        };
        var power = roster
          .filter( n => !!n )
          .reduce( ( v, h ) => v + h.power.hero + h.power.items, 0 );
        return {
          companions: companions,
          power: power,
          roster: roster
        };
      }
    },
    methods: {
      options: function( name ) {
        var selected = this.team.roster
          .filter( n => !!n && n != name );
        var res = c_data.heroes;
        if ( selected.length > 0 ) {
          res = res.filter( hero => !( selected.indexOf( hero.name ) > -1 ) );
        }
        return res.map( function( hero ) {
          return {
            id: hero.name,
            text: hero.name
          };
        } );
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
        teams: c_data.teams,
        filter: () => true,
        filters: {
          name: null,
        }
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
          name: 'Team ' + ( this.teams.length + 1 ),
          roster: [undefined,undefined,undefined,undefined,undefined,undefined]
        }
        this.teams.push( team );
      },
      remove: function( team ) {
        this.teams.splice( this.teams.indexOf( team ), 1 );
      }
    }
  } );
  $( '#tabs-teams' ).append( vm_teams.$el );

  var $json = $( '#tabs-data-json' );
  var $data = $( '#tabs-data-type' )
    .select2( { 
      width: 'auto',
      dropdownAutoWidth: true,
      allowClear: false,
      minimumResultsForSearch: Infinity,
      placeholder: "Choose data type",
      tags: false,
    } );

  $( '#tabs-data-load' )
    .on( 'click', function() {
      var type = $data.val();
      c_data.load( type );
    } );

  $( '#tabs-data-clean' )
    .on( 'click', function() {
      var type = $data.val();
      switch ( type ) {
        case "supplementaries":
          cache.remove( "qualities" );
          cache.remove( "powers" );
          cache.remove( "breaks" );
          c_data.set( "qualities", {} );
          c_data.set( "powers", {} );
          c_data.set( "breaks", {} );
          break;
        case "heroes":
          c_data.heroes.splice(0);
          break;
        case "items":
          c_data.items.splice(0);
          break;
        case "teams":
          c_data.teams.splice(0);
          break;
      }
    } );

  $( '#tabs-data-get' )
    .on( 'click', function() {
      var type = $data.val();
      var res = c_data.json( type );
      $json.val( res );
    } );

  $( '#tabs-data-set' )
    .on( 'click', function() {
      var type = $data.val();
      var res = JSON.parse( $json.val() );
      switch ( type ) {
        case "heroes":
          cache.set( "heroes_custom", res, true );
          c_data.extend( "heroes" );
          break;
        case "items":
          cache.set( "items_custom", res, true );
          c_data.extend( "items" );
          break;
        case "teams":
          cache.set( "teams", res, true );
          c_data.set( "teams" )
          break;
        default:
          break;
      }
      $json.val( "" );
    } );

} );
