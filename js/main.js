$( function() {
  var powerToString = function( power ) {
    return Math.round( power, 0 ).toLocaleString();
  };
  if ( !String.prototype.format ) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace( /{(\d+)}/g, ( m, n ) => { return typeof args[n] != 'undefined' ? args[n] : m; } );
    };
  }
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
        case "buildings":
          res = JSON.stringify( cache.get( "buildings_custom" ) || [] );
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
        case "buildings":
          $.loadScript( 'data/buildings.js', {
            success: function() {
              self.set( "buildings", cache.get( "buildings" ) || [] );
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
        case 'buildings':
          $.extend( true, self.buildings, cache.get( "buildings_custom" ) || [] );
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
          self.heroes.splice(0);
          [].push.apply( self.heroes, value );
          break;
        case 'items':
          self.items.splice(0);
          [].push.apply( self.items, value );
          break;
        case 'teams':
          self.teams.splice(0);
          [].push.apply( self.teams, value );
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
  c_data.set( "skills" );
  c_data.set( "skills_effects" );
  c_data.set( "buildings" );
  c_data.extend( "buildings" );
  c_data.set( "items" );
  c_data.extend( "items" );
  c_data.set( "heroes" );
  c_data.extend( "heroes" );
  c_data.set( "teams" );
  c_data.extend( "teams" );

  Vue.mixin( {
    methods: {
      get_skill: function( s ) {
        var si = c_data.skills.find( ss => ss.name == s.name );
        var sb = c_data.skills_effects.find( se => se.name == si.base );
        var res = $.extend( true, {}, sb, si, s );
        res.text = res.text.format( res.type == "percent" ? "" + ( 100 * res.value ) + "%" : res.value );
        return res;
      },
      get_hero: function( h ) {
        var result = {
          companions: 1,
          optimals: 0,
          power: { 
            info: "HP = ( ( HBP + LBP * HBM ) * HSM + IP * IOM * ISM ) * BM\r\nHBP = {0}\r\nLBP = {1}\r\nHBM = {2}\r\nHSM = {3}\r\nIP = {4}\r\nIOM = {5}\r\nISM = {6}\r\nBM = {7}",
            hero: 0,
            items: 0
          },
          items: Array(7),
          skills: Array(3)
        };
        if ( !h ) {
          return result;
        }
        result.companions = 4 + ( h.lv >= 30 ? 1 : 0 );
        result.skills = h.skills.map( s => {
          return $.extend( true, s, { active: ( h.lv >= s.lv ) } );
        } );
        result.items = h.slots
          .map( function( slot ) {
            var i = {
              power: 0,
              a: 0,
              chance: 0.0
            };
            if ( !!slot.item ) {
              var found = c_data.items.find( i => i.name.toUpperCase() == slot.item.toUpperCase() );
              if ( !!found ) {
                $.extend( true, i, found, { q: slot.q } );
                var lv_difference = Math.abs( i.lv - h.lv );
                i.optimal = ( lv_difference <= 6 );
                var m_q = c_data.powers.q[i.q] || 1.0;
                i.power = {
                  value: i.power * m_q,
                  info: "IP = IBP * IQM\r\nIBP = {0}\r\nIQM = {1}".format( powerToString( i.power ), m_q.toFixed(2) )
                };
                i.a = slot.list.find( s => s.type == i.type ).a;
                var chance = Math.max( 0.03, 1 - Math.pow( Math.max( 0, 1 - 0.03 * lv_difference - c_data.breaks.a[i.a] ), 0.85 ) ) * c_data.breaks.q[i.q];
                if ( chance < 0.005 ) {
                  chance = 0;
                }
                i.chance = chance || 0; 
                if ( !!i.skill ) {
                  var q1 = c_data.qualities[slot.q];
                  var q2 = c_data.qualities[i.skill.q];
                  $.extend( true, i.skill, { active: i.skill.m && ( !!q1 && !!q2 && q1.i >= q2.i ) } );
                }
                result.power.items += i.power.value;
                result.optimals += i.optimal;
              }
            }
            return i;
          } );
        return result;
      }
    }
  });

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

  Vue.component( 'power', {
    template: '#templates-power',
    props:[ 'power' ]
  } );
  
  Vue.component( 'skill', {
    template: '#templates-skill',
    props:[ 'skill', 'm' ],
    computed: {
      info: function() {
        var vm = this;
        var s = vm.get_skill( vm.skill );
        var info = s.name;
        if ( !!s.q ) {
          info += "\r\n" + "Unlocked on item of {0} quality or higher".format( s.q );
        }
        if ( !!s.lv ) {
          info += "\r\n" + "Unlocked at level {0}".format( s.lv );
        }
        if ( !!s.text ) {
          info += "\r\n" + s.text;
        }
        return info;
      }
    }
  } );
  
  Vue.component( 'item', {
    template: '#templates-item',
    props: [ 'item' ]
  } );
  var vm_items = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-items',
    data: function() { 
      return {
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
    computed: {
      options: function() {
        var options = {
          type: { ids: [], list: [] },
          skill:  { ids: [], list: [] }
        };
        c_data.items.map( i => {
          if ( options.type.ids.indexOf( i.type ) < 0 ) {
            options.type.ids.push( i.type );
            options.type.list.push( { id: i.type, text: i.type } );
          }
        } );
        options.skill.list = c_data.skills.map( s => {
          return { id: s.name, text: s.name };
        } );
        return options;
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
          var 
            fn_name = () => true,
            fn_type = () => true,
            fn_skill = () => true,
            fn_lv = () => true;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type.toUpperCase() == filters.type.toUpperCase();
          }
          if ( !!filters.skill ) {
            fn_skill = ( h ) => h.skill && h.skill.name.toUpperCase().includes( filters.skill.toUpperCase() );
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_skill( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-items' ).append( vm_items.$el );

  Vue.component( 'building', {
    template: '#templates-building',
    props: [ 'building' ],
    watch: {
      building: { 
        handler: function( building ) {
          if ( isNaN( building.lv ) ) {
            building.lv = 1;
          } else if ( building.lv < 1 ) {
            building.lv = 1;
          } else if ( building.lv > building.cap ) {
            building.lv = building.cap;
          }
          if ( isNaN( building.cj.lv ) ) {
            building.cj.lv = 1;
          } else if ( building.cj.lv < 1 ) {
            building.cj.lv = 1;
          } else if ( building.cj.lv > building.cj.cap ) {
            building.cj.lv = building.cj.cap;
          }
        },
        deep: true
      }
    }
  } );
  var vm_buildings = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-buildings',
    data: function() { 
      return {
        buildings: c_data.buildings,
        filter: () => true,
        filters: {
          name: null,
          type: null,
          lv: {
            min: null,
            max: null
          },
          cj: {
            min: null,
            max: null
          }
        },
      }
    },
    computed: {
      options: function() {
        var options = {
          type: { ids: [], list: [] }
        };
        c_data.buildings.map( b => {
          if ( options.type.ids.indexOf( b.type ) < 0 ) {
            options.type.ids.push( b.type );
            options.type.list.push( { id: b.type, text: b.type } );
          }
        } );
        return options;
      }
    },
    methods: {
      visible: function( building ) {
        return this.filter( building );
      }
    },
    watch: {
      buildings: { 
        handler: function( buildings ) {
          var custom = buildings
            .map( b => {
              return {
                m: b.m,
                lv: b.lv,
                cj: {
                  lv: b.cj.lv
                }
              };
            } );
          cache.set( 'buildings_custom', custom, true );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = () => true,
            fn_type = () => true,
            fn_lv = () => true,
            fn_cj = () => true;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type.toUpperCase() == filters.type.toUpperCase();
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          }
          if ( !!filters.cj.min && !!filters.cj.max ) {
            fn_cj = ( h ) => h.cj.lv >= filters.cj.min && h.cj.lv <= filters.cj.max;
          } else if ( !!filters.cj.min ) {
            fn_cj = ( h ) => h.cj.lv >= filters.cj.min;
          } else if ( !!filters.cj.max ) {
            fn_cj = ( h ) => h.cj.lv <= filters.cj.max;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_cj( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-buildings' ).append( vm_buildings.$el );

  Vue.component( 'hero', {
    template: '#templates-hero',
    props: [ 'hero' ],
    computed: {
      summary: function() {
        var vm = this;
        var result = vm.get_hero( vm.hero );

        var p_b = 1, m_o = 1.0, m_h = 1.0, m_i = 1.0, m_b = 1.0;
        var skills1 = result.skills
          .filter( s => s.active );
        var skills2 = result.items
          .filter( i => i.skill )
          .map( i => { return i.skill; } )
          .filter( s => s.active );
        var skills = [].concat( skills1, skills2 )
          .map( s => {
            return vm.get_skill( s );
          } )
          .filter( s => "hero" == s.applies )
          .map( s => {
            switch ( s.affects ) {
              case "companions":
                result.companions += s.value;
                break;
              case "power.items":
                m_i += s.value;
                break;
              case "power.hero":
                m_h += s.value;
                break;
              default:
                break;
            }
          } );
        var bldng = c_data.buildings.find( b => b.name.toUpperCase() == vm.hero.building.toUpperCase() );
        m_b += bldng.cj.value * ( bldng.cj.lv - 1 );
        m_o += result.optimals == 7 ? 0.25 : 0.0;
        p_b = c_data.powers.lv[vm.hero.lv] || 0;
        result.power.info = result.power.info.format( 
            powerToString( vm.hero.power.base ),
            powerToString( p_b ),
            vm.hero.power.m.toFixed(2),
            m_h.toFixed(2),
            powerToString( result.power.items ),
            m_o.toFixed(2),
            m_i.toFixed(2),
            m_b.toFixed(2) );
        result.power.hero = vm.hero.power.base + vm.hero.power.m * p_b;
        result.power.hero *= m_h * m_b;
        result.power.items *= m_o * m_i * m_b;
        return result;
      },
      equippables: function() {
        var vm = this;
        var result = vm.hero.slots.map( s => {
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
      },
      quality: function() {
        return this.$parent.options.quality;
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
    computed: {
      options: function() {
        var options = {
          name: { ids: [], list: [] },
          type: { ids: [], list: [] },
          tier: { ids: [], list: [] },
          sex: { ids: [], list: [] },
          building: { ids: [], list: [] },
          skill:  { ids: [], list: [] },
          quality:  { ids: [], list: [] }
        };
        c_data.heroes.map( h => {
          options.name.list.push( h.name );
          if ( options.type.ids.indexOf( h.type ) < 0 ) {
            options.type.ids.push( h.type );
            options.type.list.push( { id: h.type, text: h.type } );
          }
          if ( options.tier.ids.indexOf( h.tier ) < 0 ) {
            options.tier.ids.push( h.tier );
            options.tier.list.push( { id: h.tier, text: h.tier } );
          }
          if ( options.sex.ids.indexOf( h.sex ) < 0 ) {
            options.sex.ids.push( h.sex );
            options.sex.list.push( { id: h.sex, text: h.sex } );
          }
        } );
        options.building.list = c_data.buildings.map( b => {
          return { id: b.name, text: b.name };
        } );
        options.skill.list = c_data.skills.map( s => {
          return { id: s.name, text: s.name };
        } );
        options.quality.list = $.map( c_data.qualities, ( q, k ) => {
          return { id: k, text: k };
        } );
        return options;
      }
    },
    methods: {
      visible: function( hero ) {
        return this.filter( hero );
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
          var 
            fn_name = () => true,
            fn_type = () => true,
            fn_tier = () => true,
            fn_sex = () => true,
            fn_bldng = () => true,
            fn_lv = () => true;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type.toUpperCase() == filters.type.toUpperCase();
          }
          if ( !!filters.tier ) {
            fn_tier = ( h ) => h.tier == filters.tier;
          }
          if ( !!filters.sex ) {
            fn_sex = ( h ) => h.sex.toUpperCase() == filters.sex.toUpperCase();
          }
          if ( !!filters.building ) {
            fn_bldng = ( b ) => h.building.toUpperCase() == filters.building.toUpperCase();
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_tier( h ) && fn_sex( h ) && fn_bldng( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-heroes' ).append( vm_heroes.$el );

  Vue.component( 'team', {
    template: '#templates-team',
    props: ['team'],
    computed: {
      summary: function() {
        var vm = this;
        var roster = vm.team.roster
          .map( name => {
            var hero = c_data.heroes.find( n => !!name && n.name.toUpperCase() == name.toUpperCase() );
            return vm.get_hero( hero );
          } );
        var companions = roster[0].companions;
        for ( i = companions, m = vm.team.roster.length; i < m; i++ ) {
          vm.team.roster[i] = undefined;
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
