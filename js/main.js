$( function() {
  Number.prototype.intString = function() {
    return ( Math.round( this, 0 ) ).toLocaleString();
  };
  Number.prototype.fixString = function( pos ) {
    var base = Math.pow( 10, pos );
    return ( Math.round( base * this, 0 ) / base ).toFixed( pos ).toLocaleString();
  };
  Number.prototype.pptString = function( pos ) {
    var base = Math.pow( 10, pos );
    return ( Math.round( 100 * base * this, 0 ) / base ).toLocaleString() + '%';
  };
  if ( !String.prototype.format ) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace( /{(\d+)}/g, ( m, n ) => { return typeof args[n] != 'undefined' ? args[n] : m; } );
    };
  }
  if ( !String.prototype.capitalize ) {
    String.prototype.capitalize = function( lower ) {
      return ( lower ? this.toLowerCase() : this ).replace( /(?:^|\s)\S/g, function( a ) { return a.toUpperCase(); } );
    };
  }

  var cache = $.cache._();
  
  var c_data = {
    qualities: {},
    powers: {},
    breaks: {},
    skills: [],
    skills_effects: [],
    buildings: [],
    items: [],
    heroes: [],
    teams: [],
    json: function( key ) {
      var res = '';
      switch ( key ) {
        case 'heroes':
        case 'items':
        case 'buildings':
          res = JSON.stringify( cache.get( key + '_custom' ) || [] );
          break;
        case 'teams':
          res = JSON.stringify( cache.get( 'teams' ) || [] );
          break;
        default:
          break;
      }
      return res;
    },
    extend: function( key ) {
      var self = this;
      switch ( key ) {
        case 'heroes':
        case 'items':
        case 'buildings':
          $.extend( true, self[key], cache.get( key + '_custom' ) || [] );
          break;
        case 'teams':
          $.extend( true, self.teams, cache.get( 'teams' ) || [] );
          break;
        default:
          break;
      }
    },
    set: function( key ) {
      var self = this;
      var value = cache.get( key );
      switch ( key ) {
        case 'buildings':
        case 'teams':
        case 'items':
        case 'heroes':
        case 'teams':
          self[key].splice( 0 );
          [].push.apply( self[key], value );
          break;
        default:
          self[key] = value;
          break;
      }
    }
  };

  c_data.set( 'qualities' );
  c_data.set( 'powers' );
  c_data.set( 'breaks' );
  c_data.set( 'skills' );
  c_data.set( 'skills_effects' );
  c_data.set( 'buildings' );
  c_data.extend( 'buildings' );
  c_data.set( 'items' );
  c_data.extend( 'items' );
  c_data.set( 'heroes' );
  c_data.extend( 'heroes' );
  c_data.set( 'teams' );
  c_data.extend( 'teams' );

  Vue.mixin( {
    methods: {
      apply_filter: function( h, f ) {
        if ( !f ) {
          return true;
        }
        var res = true;
        $.map( f, ( v, k ) => {
          res = res && h[k] == v;
        } );
        return res;
      },
      get_k: function( length, divide ) {
        return Math.floor( ( length - 1 ) / divide ) + 1;
      },
      get_clone: function( o ) {
        return JSON.parse( JSON.stringify( o ) );
      },
      get_skill: function( s ) {
        var ss = c_data.skills.find( ss => ss.name == s.name );
        var sb = c_data.skills_effects.find( sb => sb.name == ss.base );
        var res = $ .extend( true, {}, sb, ss, s );
        return res;
      },
      empty_hero: function() {
        return {
          name: null,
          b: false,
          slots: [
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null },
            { edit: false, item: null, q: null }
          ]
        };
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
          placeholder: ' ',
          tags: false,
          createTag: function( params ) {
            return {
              id: params.term,
              text: params.term.capitalize( true ),
              custom: true
            }
          },
          templateResult: function( data ) {
            var $result = $( '<span/>' );
            if ( data.icon ) {
              var $icon = $( '<span/>' );
              $icon
                .addClass( 'icon float left' )
                .addClass( data.icon )
                .addClass( data.iconType );
              $result.append( $icon );
            };
            var $text = $( '<span/>' )
            $text.text( data.text );
            if ( data.custom ) {
              $text.prepend( 'Contains "' );
              $text.append( '"' );
            }
            $result.append( $text );
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
        placeholder: this.placeholder || ' ',
        tags: !!this.tags
      } );
      $( this.$el )
        .select2( this.settings )
        .val( this.value )
        .trigger( 'change' )
        .on( 'change', function() {
          vm.$emit( 'input', this.value );
        } )
        .on( 'select2:unselecting', function( e ) {
            $( this ).data( 'state', 'unselected' );
        } )
        .on( 'select2:open', function( e ) {
          var self = $( this );
          if ( self.data( 'state' ) === 'unselected' ) {
            self.select2( 'close' );
            self.removeData( 'state' );
          }    
        });
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
          placeholder: !!placeholder || ' '
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
  
  Vue.component( 'item-slot', {
    template: '#templates-item-slot',
    props:[ 'itemSlot' ],
    computed: {
      summary: function() {
        var vm = this;
        var s = vm.itemSlot;
        var info = '';
        switch ( s.a ) {
          case 1:
            info = 'Excel at handling {0}.\r\nBreak chance is lowered.';
            break;
          case 0:
            info = 'Knows how to handle {0} properly.';
            break;
          case -1:
            info = 'Can handle {0}.\r\nBreak chance is increased.';
            break;
          case -2:
            info = 'Can barely handle {0}.\r\nBreak chance is significantly increased.';
            break;
        }
        info = info.format( s.type );
        return info;
      }
    }
  } );

  Vue.component( 'skill', {
    template: '#templates-skill',
    props:[ 'skill', 'view' ],
    computed: {
      summary: function() {
        var vm = this;
        var s = vm.skill;
        if ( vm.view == 'item' ) {
          s = vm.get_skill( s );
        }
        var val = s.cap ? Math.min( s.value, s.cap ) : s.value;
        var value = '%' == s.sign ? val.pptString(1) : val.intString();
        var info = s.name;
        if ( s.leader ) {
          info += '\r\n' + 'Leader skill';
        }
        if ( !!s.text ) {
          info += '\r\n' + s.text.format( value );
        }
        if ( s.cap ) {
          var c_val = s.value - val;
          info += '\r\n' + 'Capped at {0}'.format( s.sign ? s.cap.pptString(1) : s.cap.intString() );
          if ( c_val > 0 ) {
            info += '. ' + 'Wasted surplus of {0}'.format( '%' == s.sign ? c_val.pptString(1) : c_val.intString() );
          }
        }
        if ( !s.active ) {
          if ( s.m != undefined && !s.m ) {
            info += '\r\n' + 'Unlocked on mastered blueprint';
          }
          if ( s.q != undefined ) {
            info += '\r\n' + 'Unlocked on item of {0} quality or higher'.format( s.q );
          }
          if ( s.lv != undefined ) {
            info += '\r\n' + 'Unlocked at level {0}'.format( s.lv );
          }
        }
        var icon = s.name.replace( /\s+|\bI+$|-/g, '' );
        return {
          icon: icon,
          info: info,
          value: value
        };
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
          skills:  { ids: [], list: [] }
        };
        c_data.items.map( i => {
          if ( options.type.ids.indexOf( i.type ) < 0 ) {
            options.type.ids.push( i.type );
            options.type.list.push( { id: i.type, text: i.type, icon: i.type, iconType: 'item' } );
          }
        } );
        options.skills.list = c_data.skills.map( s => {
          return { id: s.name, text: s.name, icon: s.name.replace( /\s+|\bI+$|-/g, '' ), iconType: 'skill' };
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
            fn_type = ( h ) => h.type == filters.type;
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
            building.cj.lv = 0;
          } else if ( building.cj.lv < 0 ) {
            building.cj.lv = 0;
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
            fn_type = ( h ) => h.type == filters.type;
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
      skills: function() {
        var vm = this;
        return vm.hero.skills
          .map( s => {
            return $.extend( true, vm.get_skill( s ), { active: s.lv <= vm.hero.lv } );
          } );
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
          origin: null,
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
          skills:  { ids: [], list: [] },
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
        options.skills.list = c_data.skills.map( s => {
          return { id: s.name, text: s.name, icon: s.name.replace( /\s+|\bI+$|-/g, '' ), iconType: 'skill' };
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
              return {
                lv: hero.lv
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
            fn_origin = () => true,
            fn_skill = () => true,
            fn_lv = () => true;
          if ( !!filters.name ) {
            fn_name = ( h ) => h.name.toUpperCase().includes( filters.name.toUpperCase() );
          }
          if ( !!filters.type ) {
            fn_type = ( h ) => h.type == filters.type;
          }
          if ( !!filters.tier ) {
            fn_tier = ( h ) => h.tier == filters.tier;
          }
          if ( !!filters.sex ) {
            fn_sex = ( h ) => h.sex == filters.sex;
          }
          if ( !!filters.origin ) {
            fn_origin = ( h ) => h.origin == filters.origin;
          }
          if ( !!filters.skill ) {
            fn_skill = ( h ) => h.skills.some( s => s.name.toUpperCase().includes( filters.skill.toUpperCase() ) );
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min && h.lv <= filters.lv.max;
          } else if ( !!filters.lv.min ) {
            fn_lv = ( h ) => h.lv >= filters.lv.min;
          } else if ( !!filters.lv.max ) {
            fn_lv = ( h ) => h.lv <= filters.lv.max;
          }
          this.filter = ( h ) => fn_name( h ) && fn_type( h ) && fn_tier( h ) && fn_sex( h ) && fn_origin( h ) && fn_skill( h ) && fn_lv( h );
        },
        deep: true
      }
    }
  } );
  $( '#tabs-heroes' ).append( vm_heroes.$el );

  Vue.component( 'team', {
    template: '#templates-team',
    props: [ 'team' ],
    data: function() {
      return {
        edit: false
      }
    },
    computed: {
      options: function( name ) {
        var options = {
          heroes:   { list: [] },
          quality:  { list: [] }
        };
        options.quality.list = $.map( c_data.qualities, ( q, k ) => {
          return { id: k, text: k };
        } );
        options.heroes.list = c_data.heroes
          .map( h => {
            return { id: h.name, text: h.name, icon: h.name.replace( /\s+/g, '' ), iconType: 'hero' };
          } );
        return options;
      },
      summary: function() {
        var vm = this;
        var result = {
          companions: 1,
          assigned: 0,
          power: {
            hero: 0,
            value: 0
          },
          slots: null,
          items: null,
          roster: [],
          skills: []
        };
        result.roster = vm.team.roster
          .map( ( r, i ) => {
            var h = c_data.heroes.find( h => r.name && h.name == r.name );
            if ( h ) {
              result.assigned += 1;
            }
            h = $.extend( true, {}, vm.empty_hero(), h );
            $.extend( true, h.slots, r.slots );
            var res = vm.get_hero( h );
            if ( r.b ) {
              res.power.m.b += 0.25;
            }
            [].push.apply( result.skills, res.info.team.filter( s => s && ( !s.leader || i == 0 ) ) );
            res.hero = h;
            return res;
          } );
        result.skills = result.skills
          .reduce( ( i, s ) => {
            var idx = i.findIndex( si => si.name == s.name );
            if ( idx < 0 ) {
              i.push( s );
            } else {
              i[idx].value += s.value;
            }
            return i;
          }, [] )
          .sort( ( s1, s2 ) => {
            return s1.priority - s2.priority;
          } );
        result.companions = Math.min( result.roster[0].companions, 6 );
        for ( i = result.companions, m = vm.team.roster.length; i < m; i++ ) {
          vm.team.roster.splice( i, 1, vm.empty_hero() );
        };
        result.roster = result.roster
          .map( h => {
            var m_s = 0.1
            result.skills
              .filter( s => vm.apply_filter( h.hero, s.filter ) )
              .map( s => {
                switch ( s.type ) {
                  case 'Survival':
                    m_s += s.value;
                    break;
                  case 'Equipment':
                    h.power.m.i += s.value;
                    break;
                  case 'Strength':
                    h.power.m.h += s.value;
                    break;
                  default:
                    break;
                }
              } );
            h.power.m.s += m_s * ( result.assigned - 1 );
            result.power.hero += ( h.power.value || 0 );
            h.power.value = ( h.power.hero * h.power.m.h + h.power.items * h.power.m.o * h.power.m.i ) * h.power.m.b * h.power.m.s;
            h.power.info = 
              'TP = ( HP * HPM + IP * IOM * IPM ) * BM * SRM\r\n{0} = ( {1} * {3}  + {2} * {4} * {5} ) * {6} * {7}'
                .format( 
                  h.power.value.intString(), 
                  h.power.hero.intString(),
                  h.power.items.intString(),
                  h.power.m.h.fixString(2),
                  h.power.m.o.fixString(2),
                  h.power.m.i.fixString(2),
                  h.power.m.b.fixString(2),
                  h.power.m.s.fixString(2)
                );
            result.power.value += ( h.power.value || 0 );
            return h;
          } );
        result.power.info = 'Group Bonus: +{0}%'.format( Math.round( 100 * ( result.power.value / result.power.hero - 1 ) ) );
        return result;
      }
    },
    methods: {
      set_boost: function( sh, b ) {
        var vm = this;
        vm.summary.roster
          .map( ( r, i ) => {
            if ( r.hero && r.hero.origin == sh.hero.origin ) {
              vm.team.roster[i].b = b;
            }
          } );
      },
      get_hero: function( h ) {
        var vm = this;
        var result = {
          companions: 1,
          optimals: 0,
          building: {},
          power: { 
            info: '',
            base: 0,
            level: 0,
            hero: 0,
            items: 0,
            m: {
              l: 1.0,
              h: 1.0,
              i: 1.0,
              o: 1.0,
              b: 1.0,
              s: 1.0
            }
          },
          items: Array(7),
          skills: {
            hero: [],
            items: []
          },
          info: { 
            hero: [],
            team: []
          }
        };
        if ( !h || !h.name ) {
          return result;
        }

        result.building = c_data.buildings.find( b => b.name == h.origin );

        result.power.base = h.power.base;
        result.power.level = c_data.powers.lv[h.lv];
        result.power.m.l = h.power.m;
        
        result.companions = 4 + ( h.lv >= 30 ? 1 : 0 );
        result.skills.hero = h.skills.map( s => {
          return $.extend( true, vm.get_skill( s ), { active: ( h.lv >= s.lv ) } );
        } );
        result.items = h.slots
          .map( function( slot ) {
            var i = {
              list: [],
              power: 0,
              a: 0,
              chance: 0.0
            };
            i.list = slot.list
              .map( t => {
                var items = c_data.items
                  .filter( i => i.type == t.type )
                  .map( i => {
                    return {
                      id: i.name,
                      text: i.name,
                      icon: i.name,
                      iconType: 'item'
                    };
                  } );
                return {
                  text: t.type,
                  children: items
                };
              } );
            if ( !!slot.item ) {
              var found = c_data.items.find( i => i.name == slot.item );
              if ( !!found ) {
                $.extend( true, i, found, { q: slot.q } );
                var lv_difference = Math.abs( i.lv - h.lv );
                i.optimal = ( lv_difference <= 6 );
                var m_q = c_data.powers.q[i.q] || 1.0;
                var p_v = i.power * m_q;
                i.power = {
                  value: p_v,
                  info: 'IP = IBP * IQM\r\n{0} = {1} * {2}'
                    .format( 
                      p_v.intString(), 
                      i.power.intString(),
                      m_q.fixString(2)
                    )
                };
                i.a = slot.list.find( s => s.type == i.type ).a;
                var chance = Math.max( 0.03, 1 - Math.pow( Math.max( 0, 1 - 0.03 * lv_difference - c_data.breaks.a[i.a] ), 0.85 ) ) * c_data.breaks.q[i.q];
                if ( chance < 0.005 ) {
                  chance = 0;
                }
                chance = chance || 0;
                i.chance = ( Math.round( 1000 * chance ) / 10 ).toLocaleString();
                if ( !!i.skill ) {
                  var q1 = c_data.qualities[slot.q];
                  var q2 = c_data.qualities[i.skill.q];
                  i.skill = $.extend( true, vm.get_skill( i.skill ), { active: i.skill.m && ( !!q1 && !!q2 && q1.i >= q2.i ) } );
                }
                result.power.items += i.power.value;
                result.optimals += i.optimal;
              }
            }
            return i;
          } );
        result.skills.items = result.items
          .map( i => {
            var s = i.skill;
            delete i.skill;
            return s;
          } );

        [].concat( result.skills.hero, result.skills.items )
          .filter( s => s && s.active )
          .map( s => {
            var idx = result.info[s.applies].findIndex( si => si.name == s.base );
            if ( idx < 0 ) {
              result.info[s.applies].push( {
                type: s.type,
                name: s.base,
                text: s.text,
                sign: s.sign,
                priority: s.priority,
                cap: s.cap,
                leader: s.leader,
                value: s.value,
                filter: s.filter,
                active: s.active
              } );
            } else {
              result.info[s.applies][idx].value += s.value;
            }
          } );
        result.info.hero
          .filter( s => vm.apply_filter( h, s.filter ) )
          .map( s => {
            switch ( s.type ) {
              case 'Leader':
                result.companions += s.value;
                break;
              case 'Equipment':
                result.power.m.i += s.value;
                break;
              case 'Strength':
                result.power.m.h += s.value;
                break;
              default:
                break;
            }
          } );
        
        result.info.hero.sort( ( s1, s2 ) => {
          return s1.priority - s2.priority;
        } );
        result.info.team.sort( ( s1, s2 ) => {
          return s1.priority - s2.priority;
        } );

        if ( result.building.cj.value ) {
          result.power.m.b += result.building.cj.value * result.building.cj.lv;
        }
        if ( result.optimals == 7 ) {
          result.power.m.o += 0.25;
        }
        
        result.power.hero = result.power.base + result.power.level * result.power.m.l;
        result.power.value = ( result.power.hero * result.power.m.h + result.power.items * result.power.m.i * result.power.m.o ) * result.power.m.b;
        return result;
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
        history: {
          states: [ this.get_clone( c_data.teams ) ],
          pos: 0,
          skip: 1
        },
        teams: c_data.teams,
        filter: () => true,
        filters: {
          name: null
        }
      }
    },
    watch: {
      teams: { 
        handler: function( teams ) {
          var vm = this;
          if ( vm.history.skip == 0 ) {
            vm.history.states.push( vm.get_clone( teams ) );
            vm.history.pos = vm.history.states.length - 1;
          } else {
            vm.history.skip -= 1;
          }
          cache.set( 'teams', teams, true );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = () => true;
          if ( !!filters.name ) {
            fn_name = ( t ) => t.name.toUpperCase().includes( filters.name.toUpperCase() );
          }
          this.filter = ( t ) => fn_name( t );
        },
        deep: true
      }
    },
    methods: {
      visible: function( team ) {
        return this.filter( team );
      },
      add: function() {
        var vm = this;
        var roster = [];
        for ( i = 0; i < 7; i++ ) {
          roster.push( vm.empty_hero() );
        }
        var team = {
          name: 'Team ' + ( vm.teams.length + 1 ),
          roster: roster
        }
        vm.teams.push( team );
      },
      remove: function( team ) {
        var vm = this;
        vm.teams.splice( vm.teams.indexOf( team ), 1 );
      },
      undo: function() {
        var vm = this;
        if ( vm.history.pos == 0 ) {
          return;
        }
        vm.history.pos -= 1;
        var state = vm.get_clone( vm.history.states[vm.history.pos] );
        vm.history.skip = vm.teams.length + state.length;
        vm.teams.splice( 0 );
        [].push.apply( vm.teams, state );
      },
      redo: function() {
        var vm = this;
        if ( vm.history.pos == vm.history.states.length - 1 ) {
          return;
        }
        vm.history.pos += 1;
        var state = vm.get_clone( vm.history.states[vm.history.pos] );
        vm.history.skip = vm.teams.length + state.length;
        vm.teams.splice( 0 );
        [].push.apply( vm.teams, state );
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
      placeholder: 'Choose data type',
      tags: false,
    } );

  $( '#tabs-data-clean' )
    .on( 'click', function() {
      var type = $data.val();
      switch ( type ) {
        case 'heroes':
          c_data.heroes.splice(0);
          break;
        case 'items':
          c_data.items.splice(0);
          break;
        case 'teams':
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
        case 'heroes':
          cache.set( 'heroes_custom', res, true );
          c_data.extend( 'heroes' );
          break;
        case 'items':
          cache.set( 'items_custom', res, true );
          c_data.extend( 'items' );
          break;
        case 'teams':
          cache.set( 'teams', res, true );
          c_data.set( 'teams' )
          break;
        default:
          break;
      }
      $json.val( '' );
    } );

} );
