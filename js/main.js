$( function() {
  $( '#tabs' ).tabs();

  Number.prototype.dateString = function() {
    var s = Math.round( this );
    var dd = Math.floor( s / 86400 );
    var hh = Math.floor( s % 86400 / 3600 );
    var mm = Math.floor( s % 86400 % 3600 / 60 );
    var ss = Math.floor( s % 86400 % 3600 % 60 );
    var res = '{0}{1}{2}{3}'.format(
      dd > 0 ? dd + 'd ' : '',
      hh > 0 ? hh + 'h ' : '',
      mm > 0 ? mm + 'm ' : '',
      ss > 0 ? ss + 's ' : '' );
    return res.trim();
  };
  Number.prototype.intString = function() {
    return ( Math.round( this, 0 ) ).toLocaleString();
  };
  Number.prototype.fixString = function( pos ) {
    var base = Math.pow( 10, pos || 0 );
    return ( Math.round( base * this, 0 ) / base ).toFixed( pos ).toLocaleString();
  };
  Number.prototype.pptString = function( pos ) {
    var base = Math.pow( 10, pos || 0 );
    return ( Math.round( 100 * base * this, 0 ) / base ).toLocaleString() + '%';
  };
  if ( !String.prototype.format ) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace( /{(\d+)}/g, function( m, n ) { return typeof args[n] != 'undefined' ? args[n] : m; } );
    };
  }
  if ( !String.prototype.capitalize ) {
    String.prototype.capitalize = function( lower ) {
      return ( lower ? this.toLowerCase() : this ).replace( /(?:^|\s)\S/g, function( a ) { return a.toUpperCase(); } );
    };
  }
  if ( !String.prototype.icon ) {
    String.prototype.icon = function() {
      return ( this || '' ).replace( /[\-\'\.\s]+/g, '' ).toLowerCase();
    };
  }

  Vue.mixin( {
    methods: {
      icon: function( str ) {
        return ( str || '' ).icon();
      },
      list_quests: function() {
        return c_data.quests
          .map( function( q, i ) {
            var children = q.tiers
              .map( function( t, i ) {
                return { id: q.name + ' ' + t.name, text: q.name + ' ' + t.name, sort: i };
              } );
            return { 
              id: q.name,
              text: q.name,
              iconType: 'artifact',
              icon: q.item,
              sort: -i,
              children: children
            };
          } );
      },
      list_qualities: function() {
        return $.map( c_data.qualities, function( q, k ) {
            return { id: k, text: k, icon: k, iconType: 'quality', sort: -q.i };
          } );
      },
      list_heroes: function() {
        return c_data.heroes
          .map( function( h ) {
            return { id: h.name, text: h.name, iconType: 'hero', icon: h.name, data: { lv: h.lv } };
          } );
      },
      apply_filter: function( h, f ) {
        if ( !f || !h ) {
          return true;
        }
        var res = true;
        $.map( f, function( v, k ) { 
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
        var ss = c_data.skills.find( function( ss ) { return ss.name == s.name; } );
        var sb = c_data.skills_effects.find( function( sb ) { return sb.name == ss.base; } );
        var res = $ .extend( true, {}, sb, ss, s );
        return res;
      },
      get_hero: function( h ) {
        var vm = this;
        var result = {
          companions: 1,
          optimals: 0,
          chance: 0,
          origin: null,
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
          slots: Array(7),
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
        if ( h.b ) {
          result.power.m.b += 0.25;
        }

        result.origin = c_data.origins.find( function( b ) { return b.name == h.origin; } );

        result.power.base = h.power.base;
        result.power.level = c_data.powers.lv[h.lv];
        result.power.m.l = h.power.m;
        
        result.companions = 4 + ( h.lv >= 30 ? 1 : 0 );
        result.skills.hero = h.skills.map( function( s ) {
          return $.extend( true, vm.get_skill( s ), { active: ( h.lv >= s.lv ) } );
        } );
        result.items = h.items
          .map( function( si ) {
            return si.map( function( t ) {
              var items = c_data.items
                .filter( function( i ) { return i.type == t.type; } )
                .map( function( i ) {
                  return {
                    id: i.name,
                    text: i.name,
                    icon: i.type,
                    iconType: 'item',
                    data: {
                      lv: i.lv
                    }
                  };
                } );
              return {
                text: t.type,
                children: items
              };
            } );
          } );

        result.slots = h.slots
          .map( function( slot, j ) {
            var i = {
              power: 0,
              a: 0,
              chance: 0.0
            };
            if ( !!slot.item ) {
              var found = c_data.items.find( function( i ) { return i.name == slot.item; } );
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
                var is = h.items[j].find( function( s ) { return s.type == i.type; } );
                i.a = is ? is.a : 0;
                i.chance = {
                  base: Math.max( 0.03, 1 - Math.pow( Math.max( 0, 1 - 0.03 * lv_difference - c_data.breaks.a[i.a] ), 0.85 ) ) * c_data.breaks.q[i.q]
                };
                if ( i.chance.base == undefined ) {
                  i.chance.base = 0.0;
                } else if ( i.chance.base < 0.005 ) {
                  i.chance.base = 0.0;
                } 
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
        result.skills.items = result.slots
          .map( function( i ) {
            var s = i.skill;
            delete i.skill;
            return s;
          } );

        [].concat( result.skills.hero, result.skills.items )
          .filter( function( s ) { return s && s.active; } )
          .map( function( s ) {
            var idx = result.info[s.applies].findIndex( function( si ) { return si.name == s.base; } );
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
          .filter( function( s ) { return vm.apply_filter( h, s.filter ); } )
          .map( function( s ) {
            if ( 'Leader' == s.type ) {
              result.companions += s.value;
            } else if ( 'Equipment' == s.type ) {
              result.power.m.i += s.value;
            } else if ( 'Strength' == s.type ) {
              result.power.m.h += s.value;
            } else if ( 'Break Chance' == s.type ) {
              result.chance = Math.min( result.chance + s.value, s.cap );
            }
          } );
        result.info.hero.sort( function( s1, s2 ) { return s1.priority - s2.priority; } );
        result.info.team.sort( function( s1, s2 ) { return s1.priority - s2.priority; } );

        if ( result.origin && result.origin.cj ) {
          result.power.m.b += ( result.origin.cj.value * result.origin.cj.lv || 0 );
        }
        if ( result.optimals == 7 ) {
          result.power.m.o += 0.25;
        }

        result.slots.map( function( s ) {
          s.chance.value = s.chance.base * ( 1 - result.chance );
        } );
        
        result.power.hero = result.power.base + result.power.level * result.power.m.l;
        result.power.value = ( result.power.hero * result.power.m.h + result.power.items * result.power.m.i * result.power.m.o ) * result.power.m.b;
        result.power.info = 
          'TP = ( HP * HPM + IP * IOM * IPM ) * BM\r\n{0} = ( {1} * {3}  + {2} * {4} * {5} ) * {6}'
            .format( 
              result.power.value.intString(), 
              result.power.hero.intString(),
              result.power.items.intString(),
              result.power.m.h.fixString(2),
              result.power.m.o.fixString(2),
              result.power.m.i.fixString(2),
              result.power.m.b.fixString(2)
            );
        return result;
      },
      empty_hero: function() {
        return {
          name: null,
          b: false,
          slots: [
            { item: null, q: null },
            { item: null, q: null },
            { item: null, q: null },
            { item: null, q: null },
            { item: null, q: null },
            { item: null, q: null },
            { item: null, q: null }
          ]
        };
      }
    }
  });

  Vue.component( 'select2', {
    template: '#templates-select2',
    props: [ 'options', 'value', 'nosearch', 'placeholder' ],
    data: function() {
      var matcher = function( params, data ) {
        if ( !params.term ) {
          return data;
        }
        if ( data.custom ) {
          return data;
        }
        if ( data.children && data.children.length > 0 ) {
          var match = $.extend( true, {}, data );
          for ( var c = data.children.length - 1; c >= 0; c-- ) {
            var child = data.children[c];
            var matches = matcher( params, child );
            if ( !matches ) {
              match.children.splice( c, 1 );
            }
          }
          if ( match.children.length > 0 ) {
            return match;
          }
        }
        var terms = ( params.term || '' ).toUpperCase().split( ' ' );
        var texts = data.text.toUpperCase();
        if ( data.data ) {
          $.each( data.data, function( i, v ) {
            texts += ' ' + v.toString().toUpperCase();
          } );
        }
        for ( var i = 0, m = terms.length; i < m; i++ ) {
          var re = new RegExp( '\\b' + terms[i] );
          if ( !re.test( texts ) ) {
            return false;
          }
        }
        return data;
      };
      return {
        settings: {
          width: '100%',
          dropdownAutoWidth: true,
          allowClear: true,
          data: this.options,
          minimumResultsForSearch: ( !!this.nosearch ? Infinity : 3 ),
          placeholder: this.placeholder || ' ',
          matcher: matcher,
          sorter: function( data ) {
            return data.sort( function( a, b ) {
              if ( a.custom != undefined ) {
                return -1;
              }
              if ( b.custom != undefined ) {
                return 1;
              }
              if ( a.sort != undefined ) {
                return a.sort - b.sort;
              }
              if ( a.text != undefined ) {
                return a.text.localeCompare( b.text );
              }
              return 0;
            } );
          },
          templateSelection: function( data ) {
            if ( !data ) {
              return;
            }
            var $result = $( '<span/>' );
            /*if ( data.data ) {
              $.each( data.data, function( i, v ) {
                var $data = $( '<span/>' );
                $data
                  .text( v )
                  .appendTo( $result );
              } );
            }*/
            var $text = $( '<span/>' );
            $text.text( data.text );
            if ( data.custom ) {
              $text.prepend( 'Contains "' );
              $text.append( '"' );
            }
            $result.append( $text );
            return $result;
          },
          templateResult: function( data ) {
            if ( !data ) {
              return;
            }
            var $result = $( '<span/>' );
            if ( data.icon || data.iconType ) {
              var $icon = $( '<span/>' );
              $icon
                .addClass( 'icon float left' )
                .addClass( ( data.icon || '' ).icon() )
                .addClass( ( data.iconType || '' ).icon() )
                .appendTo( $result );
            }
            if ( data.data ) {
              $.each( data.data, function( i, v ) {
                var $data = $( '<span/>' );
                $data
                  .text( v )
                  .addClass( 'icon float left' )
                  .appendTo( $result );
              } );
            }
            var $text = $( '<span/>' );
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
      this.attach( this.settings );
    },
    methods: {
      detach: function() {
        $( this.$el ).off().select2( 'destroy' );
        $( this.$el ).html('');
      },
      attach: function( settings ) {
        var vm = this;
        $( this.$el )
          .select2( settings )
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
      }
    },
    watch: {
      value: function( value ) {
        $( this.$el ).val( value ).trigger( 'change' );
        
      },
      options: function( options ) {
        this.settings.data = options;
      },
      settings: {
        deep: true,
        handler: function( settings ) {
          this.detach();
          this.attach( settings );
        }
      }
    },
    destroyed: function() {
      this.detach();
    }
  } );

  Vue.component( 'chance', {
    template: '#templates-chance',
    props:[ 'chance' ],
    computed: {
      info: function() {
        return 'Base chance: {0}\r\nEffective chance: {1}'.format( this.chance.base.pptString(2), this.chance.value.pptString(2) );
      },
      icon: function() {
        if ( this.chance.value == 0.0 ) {
          return 'unbreakable';
        } else if ( this.chance.value <= 0.03 ) {
          return 'green';
        } else if ( this.chance.value <= 0.10 ) {
          return 'yellow';
        } else if ( this.chance.value <= 0.20 ) {
          return 'orange';
        }
        return 'red';
      }
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
            info = 'Excel at handling {0}\r\nBreak chance is lowered';
            break;
          case 0:
            info = 'Knows how to handle {0} properly';
            break;
          case -1:
            info = 'Can handle {0}\r\nBreak chance is increased';
            break;
          case -2:
            info = 'Can barely handle {0}\r\nBreak chance is significantly increased';
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
        options: {
          types: [],
          origins: [],
          rarities: [],
          skills:  [],
          qualities: []
        },
        sorters: [],
        sorts: { 
          lv: null,
          type: null
        },
        filter: function() { return true; },
        filters: {
          name: null,
          type: null,
          skill: null,
          rarity: null,
          origin: null,
          pre: {
            name: null,
            q: null
          },
          lv: {
            min: null,
            max: null
          }
        }
      };
    },
    computed: {
      itemsSorted: function() {
        var m = this.sorters.length;
        var list = this.items
          .map( function( v, i ) {
            return {
              i: i,
              lv: v.lv,
              type: v.type
            };
          } );
        if ( m > 0 ) {
          list = list
            .sort( function( o1, o2 ) {
              for ( var i = 0; i < m; i++ ) {
                var res = this.sorters[i].fn( o1, o2 );
                if ( res != 0 ) { 
                  return res;
                }
              }
              return 0;
            } );
        }
        return list
          .map( function( v ) {
            return v.i;
          } );
      }
    },
    methods: {
      next_ord: function( ord ) {
        if ( ord == null ) {
          return 'asc';
        }
        if ( ord == 'asc' ) {
          return 'desc';
        }
        return  null;
      },
      add_sort: function( e, param ) {
        var ord = this.next_ord( this.sorts[param] );
        this.sorts[param] = ord;
        var fn;
        var d = 0;
        if      ( ord == 'asc'  ) d = 1;
        else if ( ord == 'desc' ) d = -1;
        if ( param == 'lv' ) {
          fn = function( o1, o2 ) { 
            return d * ( o1.lv - o2.lv );
          };
        } else if ( param == 'type' ) {
          fn = function( o1, o2 ) { 
            return d * o1.type.localeCompare( o2.type );
          };
        }
        if ( e.ctrlKey == true ) {
          var ix = this.sorters.findIndex( function( p ) { return p.param == param; } );
          if ( ix >= 0 ) {
            this.sorters.splice( ix, 1 );
          }
        } else {
          this.sorters.splice( 0 );
        }
        this.sorters.push( { param: param, fn: fn } );
      },
      visible: function( item ) {
        return this.filter( item );
      }
    },
    watch: {
      items: { 
        handler: function( items ) {
          var vm = this;
          var custom = items
            .map( function( i ) {
              if ( i.skill ) {
                return {
                  skill: {
                    m: i.skill.m
                  }
                };
              }
              return {};
            } );
          localforage.setItem( 'items', JSON.stringify( custom ) );
          var ids = {
            types: [],
            origins: []
          };
          vm.options.types.splice(0);
          vm.options.origins.splice(0);
          vm.options.rarities.splice(0);
          vm.options.skills.splice(0);
          vm.options.qualities.splice(0);
          
          vm.options.qualities = $.map( c_data.qualities, function( q, k ) {
            return { id: k, text: k, icon: k, iconType: 'quality', sort: -q.i, data: {} };
          } );
          c_data.items.map( function( i ) {
            if ( ids.types.indexOf( i.type ) < 0 ) {
              ids.types.push( i.type );
              vm.options.types.push( { id: i.type, text: i.type, icon: i.type, iconType: 'item' } );
            }
            if ( ids.origins.indexOf( i.origin ) < 0 ) {
              ids.origins.push( i.origin );
              vm.options.origins.push( { id: i.origin, text: i.origin } );
            }
          } );
          vm.options.origins.push( { id: "nonblanks", text: 'Non-blanks', custom: true } );
          vm.options.origins.push( { id: "blanks", text: 'Blanks', custom: true } );
          
          vm.options.rarities = c_data.rarities.map( function( o, i ) {
              return { id: o, text: o, sort: i };
            } );
          
          vm.options.skills = c_data.skills.map( function( s ) {
              return { id: s.name, text: s.name, icon: s.name.replace( /\s+|\bI+$|-/g, '' ), iconType: 'skill' };
            } );
          vm.options.skills.push( { id: "nonblanks", text: 'Non-blanks', custom: true } );         
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = function() { return true; },
            fn_origin = function() { return true; },
            fn_rarity = function() { return true; },
            fn_type = function() { return true; },
            fn_skill = function() { return true; },
            fn_pre = function() { return true; },
            fn_lv = function() { return true; };
          if ( !!filters.name ) {
            fn_name = function( o ) { return o.name.toUpperCase().includes( filters.name.toUpperCase() ); };
          }
          if ( !!filters.type ) {
            fn_type = function( o ) { return o.type == filters.type; };
          }
          if ( !!filters.rarity ) {
            fn_rarity = function( o ) { return o.rarity == filters.rarity; };
          }
          if ( !!filters.origin ) {
            if ( filters.origin == 'nonblanks' ) {
              fn_origin = function( o ) { return o.origin.length > 0; };
            } else if ( filters.origin == 'blanks' ) {
              fn_origin = function( o ) { return o.origin.length == 0; };
            } else {
              fn_origin = function( o ) { return o.origin == filters.origin; };
            }
          }
          if ( !!filters.skill ) {
            if ( filters.skill == 'nonblanks' ) {
              fn_skill = function( o ) { return o.skill; };
            } else {
              fn_skill = function( o ) { return o.skill && o.skill.name.toUpperCase() == filters.skill.toUpperCase(); };
            }
          }
          if ( !!filters.pre.name && !!filters.pre.q ) {
            fn_pre = function( o ) { 
              return o.pre && o.pre.some( function( p ) { return p.item.toUpperCase().includes( filters.pre.name.toUpperCase() ) && p.q == filters.pre.q; } );
            };
          } else if ( !!filters.pre.name ) {
            fn_pre = function( o ) { 
              return o.pre && o.pre.some( function( p ) { return p.item.toUpperCase().includes( filters.pre.name.toUpperCase() ); } );
            };
          } else if ( !!filters.pre.q ) {
            fn_pre = function( o ) {
              return o.pre && o.pre.some( function( p ) { return p.q == filters.pre.q; } );
            };
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = function( o ) { return o.lv >= filters.lv.min && o.lv <= filters.lv.max; };
          } else if ( !!filters.lv.min ) {
            fn_lv = function( o ) { return o.lv >= filters.lv.min; };
          } else if ( !!filters.lv.max ) {
            fn_lv = function( o ) { return o.lv <= filters.lv.max; };
          }
          this.filter = function( o ) { return fn_name( o ) && fn_type( o ) && fn_skill( o )  && fn_lv( o ) && fn_rarity( o ) && fn_origin( o ) && fn_pre( o ); };
        },
        deep: true
      }
    }
  } );
  $( '#tabs-items' ).append( vm_items.$el );

  Vue.component( 'origin', {
    template: '#templates-origin',
    props: [ 'origin' ],
    data: function() {
      return {
        edit: false
      };
    },
    watch: {
      origin: { 
        handler: function( origin ) {
          if ( origin.cap ) {
            origin.lv = Math.min( Math.max( 1, origin.lv ), origin.cap );
          }
          if ( origin.cj ) {
            origin.cj.lv = Math.min( Math.max( 0, origin.cj.lv ), origin.cj.cap );
          }
        },
        deep: true
      }
    }
  } );
  var vm_origins = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-origins',
    data: function() { 
      return {
        origins: c_data.origins,
        options: {
          types: []
        },
        filter: function() { return true; },
        filters: {
          name: null,
          type: null
        }
      };
    },
    methods: {
      visible: function( origin ) {
        return this.filter( origin );
      }
    },
    watch: {
      origins: { 
        handler: function( origins ) {
          var vm = this;
          var custom = origins
            .map( function( b ) {
              var res = {
                m: b.m
              };
              if ( b.lv ) {
                res.lv = b.lv;
              }
              if ( b.cj ) {
                res.cj = {
                  lv: b.cj.lv
                };
              }
              return res;
            } );
          localforage.setItem( 'origins', JSON.stringify( custom ) );
          var ids = {
            types: []
          };
          vm.options.types.splice(0);
          origins.map( function( b ) {
            if ( ids.types.indexOf( b.type ) < 0 ) {
              ids.types.push( b.type );
              vm.options.types.push( { id: b.type, text: b.type } );
            }
          } );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = function() { return true; },
            fn_type = function() { return true; };
          if ( !!filters.name ) {
            fn_name = function( o ) { return o.name.toUpperCase().includes( filters.name.toUpperCase() ); };
          }
          if ( !!filters.type ) {
            fn_type = function( o ) { return o.type == filters.type; };
          }
          this.filter = function( o ) { return fn_name( o ) && fn_type( o ); };
        },
        deep: true
      }
    }
  } );
  $( '#tabs-origins' ).append( vm_origins.$el );

  Vue.component( 'hero', {
    template: '#templates-hero',
    props: [ 'hero' ],
    data: function() {
      return {
        edit: false,
        options: {
          qualities: this.list_qualities()
        }
      };
    },
    computed: {
      skills: function() {
        var vm = this;
        return vm.hero.skills
          .map( function( s ) {
            return $.extend( true, vm.get_skill( s ), { active: s.lv <= vm.hero.lv } );
          } );
      },
      summary: function() {
        var vm = this;
        var h = $.extend( true, {}, vm.hero );
        var res = vm.get_hero( h );
        return res;
      }
    },
    watch: {
      hero: { 
        handler: function( hero ) {
          hero.lv = Math.min( Math.max( 1, hero.lv ), hero.cap );
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
        options: {
          names: [],
          types: [],
          tiers: [],
          sex: [],
          origins: [],
          skills: []
        },
        filter: function() { return true; },
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
        }
      };
    },
    methods: {
      visible: function( h ) {
        return this.filter( h );
      }
    },
    watch: {
      heroes: { 
        handler: function( heroes ) {
          var vm = this;
          var custom = heroes
            .map( function( h ) {
              var res = {
                lv: h.lv,
                slots: h.slots
              };
              return res;
            } );
          localforage.setItem( 'heroes', JSON.stringify( custom ) );
          var ids = {
            names: [],
            types: [],
            tiers: [],
            sex: []
          };
          vm.options.names.splice(0);
          vm.options.types.splice(0);
          vm.options.tiers.splice(0);
          vm.options.sex.splice(0);
          vm.options.origins.splice(0);
          vm.options.skills.splice(0);
          c_data.heroes.map( function( h ) {
              vm.options.names.push( h.name );
              if ( ids.types.indexOf( h.type ) < 0 ) {
                ids.types.push( h.type );
                vm.options.types.push( { id: h.type, text: h.type } );
              }
              if ( ids.tiers.indexOf( h.tier ) < 0 ) {
                ids.tiers.push( h.tier );
                vm.options.tiers.push( { id: h.tier, text: h.tier } );
              }
              if ( ids.sex.indexOf( h.sex ) < 0 ) {
                ids.sex.push( h.sex );
                vm.options.sex.push( { id: h.sex, text: h.sex } );
              }
            } );
          vm.options.origins = c_data.origins.map( function( b ) {
              return { id: b.name, text: b.name };
            } );
          vm.options.skills = c_data.skills.map( function( s ) {
              return { id: s.name, text: s.name, icon: s.name.replace( /\s+|\bI+$|-/g, '' ), iconType: 'skill' };
            } );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = function() { return true; },
            fn_type = function() { return true; },
            fn_tier = function() { return true; },
            fn_sex = function() { return true; },
            fn_origin = function() { return true; },
            fn_skill = function() { return true; },
            fn_lv = function() { return true; };
          if ( !!filters.name ) {
            fn_name = function( o ) { return o.name.toUpperCase().includes( filters.name.toUpperCase() ); };
          }
          if ( !!filters.type ) {
            fn_type = function( o ) { return o.type == filters.type; };
          }
          if ( !!filters.tier ) {
            fn_tier = function( o ) { return o.tier == filters.tier; };
          }
          if ( !!filters.sex ) {
            fn_sex = function( o ) { return o.sex == filters.sex; };
          }
          if ( !!filters.origin ) {
            fn_origin = function( o ) { return o.origin == filters.origin; };
          }
          if ( !!filters.skill ) {
            fn_skill = function( o ) { return o.skills.some( function( s ) { return s.name.toUpperCase() == filters.skill.toUpperCase(); } ); };
          }
          if ( !!filters.lv.min && !!filters.lv.max ) {
            fn_lv = function( o ) { return o.lv >= filters.lv.min && o.lv <= filters.lv.max; };
          } else if ( !!filters.lv.min ) {
            fn_lv = function( o ) { return o.lv >= filters.lv.min; };
          } else if ( !!filters.lv.max ) {
            fn_lv = function( o ) { return o.lv <= filters.lv.max; };
          }
          this.filter = function( o ) { return fn_name( o ) && fn_type( o ) && fn_tier( o ) && fn_sex( o ) && fn_origin( o ) && fn_skill( o ) && fn_lv( o ); };
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
        edit: false,
        small: false,
        quest: {
          choice: null,
          boss: false,
          boost: {
            c: false,
            i: false
          }
        },
        options: {
          qualities: this.list_qualities(),
          quests: this.list_quests()
        }
      };
    },
    computed: {
      summary: function() {
        var vm = this;
        var result = {
          companions: 1,
          assigned: 0,
          power: {
            hero: 0,
            value: 0
          },
          roster: Array(6),
          skills: [],
          quest: {
            boss: false,
            item: null,
            time: {
              value: 0,
              m: 0.0,
              c: 0.0,
              i: 1.0
            },
            loot: {
              min: 0,
              max: 0
            },
            power: {
              value: 0,
              hero: 0,
              text: null
            }
          }
        };
        if ( vm.quest.choice ) {
          var names = vm.quest.choice.split( ' ' );
          var tname = names.pop();
          var qname = names.join( ' ' );
          var q = c_data.quests.find( function( q ) { return q.name == qname; } );
          if ( q ) {
            var b = c_data.origins.find( function( b ) { return b.name == q.origin; } );
            if ( b ) {
              if ( b.cj ) {
                result.quest.c += b.cj.value * b.cj.lv;
              }
              if ( b.boost ) {
                var bs = b.boost[b.lv];
                result.quest.time.c += vm.quest.boost.c && bs ? bs.c : 0.0;
                result.quest.time.i *= vm.quest.boost.i && bs ? Math.pow( bs.i, 3 ) : 1.0;
              }
            }
            var qt = q.tiers.find( function( t ) { return t.name == tname; } );
            if ( q && qt ) {
              result.quest.time.value = q.time;
              result.quest.item = q.item;
              result.quest.power.value = q.power;
              result.quest.boss = !!qt.boss;
              if ( qt.loot ) {
                result.quest.loot.min = qt.loot.min;
                result.quest.loot.max = qt.loot.max;
              }
              result.quest.power = { 
                value: qt.power || q.power,
                hero: !!qt.boss && vm.quest.boss ? qt.boss.power : qt.base.power
              };
            }
          }
        }
        for ( var i = 0; i < 6; i++ ) {
          var r = vm.team.roster[i];
          var hero = null;
          if ( r.name ) {
            hero = c_data.heroes.find( function( h ) { return h.name == r.name; } );
          }
          if ( hero ) {
            result.assigned += 1;
          } else {
            hero = vm.empty_hero();
          }
          var h = $.extend( true, {}, hero );
          $.extend( true, h.slots, vm.get_clone( r.slots ) );
          h.b = r.b;
          var res = vm.get_hero( h );
          res.hero = hero;
          [].push.apply( result.skills, res.info.team.filter( function( s ) { return s && ( !s.leader || i == 0 ); } ) );
          result.roster[i] = res;
        }
        result.skills = result.skills
          .reduce( function( i, s ) {
            var idx = i.findIndex( function( si ) { return si.name == s.name; } );
            if ( idx < 0 ) {
              i.push( s );
            } else {
              i[idx].value += s.value;
            }
            return i;
          }, [] )
          .sort( function( s1, s2 ) { return s1.priority - s2.priority; } );
        result.companions = Math.min( result.roster[0].companions, 6 );
        for ( var i = result.companions; i < 6; i++ ) {
          vm.team.roster.splice( i, 1, vm.empty_hero() );
        }
        result.roster = result.roster
          .map( function( h ) {
            var m_r = 0.0;
            var m_h = 0.0;
            var m_e = 0.0;
            var v_min = 0;
            var v_max = 0;
            var m_s = 0.1;
            result.skills
              .filter( function( s ) { return vm.apply_filter( h.hero, s.filter ); } )
              .map( function( s ) {
                if ( s.type == 'Survival' ) {
                  m_s += s.value;
                } else if ( s.type == 'Equipment' ) {
                  h.power.m.i += s.value;
                } else if ( s.type == 'Strength' ) {
                  h.power.m.h += s.value;
                } else if ( s.type == 'Break Chance' ) {
                  h.chance = Math.min( h.chance + s.value, s.cap );
                }
                if ( s.name == 'Healer' ) {
                  m_h = Math.min( m_h + s.value, s.cap );
                } else if ( s.name == 'Revive' ) {
                  m_r = Math.min( m_r + s.value, s.cap );
                } else if ( s.name == 'Detect Secrets' ) {
                  v_min += s.value;
                } else if ( s.name == 'Magic Find' ) {
                  v_max += s.value;
                }
              } );
              
            h.slots.map( function( s ) {
              s.chance.value = s.chance.base * ( 1 - h.chance );
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

            h.info.hero.map( function( s ) {
              if ( s.name == 'Energetic' ) {
                m_e = Math.min( m_e + s.value, s.cap );
              } else if ( s.name == 'Minimum' ) {
                v_min += s.value;
              } else if ( s.name == 'Maximum' ) {
                v_max += s.value;
              }
            } );
            h.quest = {
              face: null,
              chance: 0.00,
              rest: {
                value: result.quest.time.value / 2,
                m: ( 1.0 - m_h ) * ( 1.0 - m_e )
              },
              heal: {
                value: result.quest.time.value * 2,
                m: ( 1.0 - m_h )
              },
              loot: {
                min: result.quest.loot.min,
                max: result.quest.loot.max
              },
              power: {
                value: result.quest.power.hero || 0,
                info: null
              }
            };
            var m_face = h.power.value / result.quest.power.hero;
            var p_face = result.quest.power.hero - h.power.value;
            if ( p_face > 0 ) {
              h.quest.power.info = 'Required {0} more power'.format( p_face.intString() );
            }
            if ( m_face >= 1 ) {
              h.quest.face = 'happy';
              h.quest.chance = 0.01;
            } else if ( m_face >= 0.91 ) {
              h.quest.face = 'normal';
              h.quest.chance = 0.25;
            } else if ( m_face >= 0.75 ) {
              h.quest.face = 'content';
              h.quest.chance = 0.45;
            } else if ( m_face >  0.00 ) {
              h.quest.face = 'unhappy';
              h.quest.chance = 0.65;
            }
            h.quest.loot.min += v_min;
            h.quest.loot.max += v_max;
            h.quest.loot.min = Math.min( h.quest.loot.min, h.quest.loot.max );
            h.quest.chance *= ( 1.0 - m_r );
            h.quest.heal.value *= h.quest.heal.m;
            h.quest.rest.value *= h.quest.rest.m;
            return h;
          } );
        result.power.info = 'Group Bonus: +{0}%'.format( Math.round( 100 * ( result.power.value / result.power.hero - 1 ) ) );
        var p_team = result.quest.power.value - result.power.value;
        if ( p_team > 0 ) {
          result.quest.power.info = 'Required {0} more power'.format( p_team.intString() );
        }
        var s = result.skills.find( function( s ) { return s.type == 'Speed'; } );
        if ( s ) {
          result.quest.time.m += s.value;
        }
        result.quest.time.value *= ( 1 - result.quest.time.m ) * ( 1 - result.quest.time.c ) * result.quest.time.i;
        return result;
      }
    },
    methods: {
      set_roster: function( k ) {
        var vm = this;
        var sh = vm.summary.roster[k];
        vm.team.roster[k].slots = vm.get_clone( sh.hero.slots );
        var b = false;
        vm.summary.roster.map( function( r, i ) { 
          if ( i != k && r.hero && r.hero.origin == sh.hero.origin ) {
            b = b || vm.team.roster[i].b;
          }
        } );
        vm.team.roster[k].b = b;
      },
      set_boost: function( origin, b ) {
        var vm = this;
        vm.team.roster
          .map( function( r, i ) {
            if ( r.name && vm.summary.roster[i].hero.origin == origin ) {
              r.b = b;
            }
          } );
      },
      remove: function( team ) {
        this.$parent.remove( team );
      },
      get_heroes: function( name ) {
        var vm = this;
        return vm.list_heroes().filter( function( h ) {
          if ( h.text == name ) {
            return true;
          } else {
            var j = vm.team.roster.findIndex( function( rr ) { return rr.name == h.text; } );
            if ( j < 0 ) {
              return true;
            }
          }
          return false;
        } );
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
        filter: function() { return true; },
        filters: {
          name: null
        }
      };
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
          localforage.setItem( 'teams', JSON.stringify( teams ) );
        },
        deep: true
      },
      filters: {
        handler: function( filters ) {
          var 
            fn_name = function() { return true; };
          if ( !!filters.name ) {
            fn_name = function( o ) { return o.name.toUpperCase().includes( filters.name.toUpperCase() ); };
          }
          this.filter = function( o ) { return fn_name( o ); };
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
        for ( var i = 0; i < 6; i++ ) {
          roster.push( vm.empty_hero() );
        }
        var team = {
          name: 'Team ' + ( vm.teams.length + 1 ),
          roster: roster
        };
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

  Vue.component( 'quest', {
    template: '#templates-quest',
    props: [ 'quest' ],
    watch: {
      quest: { 
        handler: function( quest ) {
        },
        deep: true
      }
    }
  } );
  var vm_quests = new Vue( {
    el: $( '<div/>' )[0],
    template: '#templates-quests',
    data: function() { 
      return {
        quests: c_data.quests,
        filter: function() { return true; },
        filters: {
          name: null
        }
      };
    },
    watch: {
      filters: {
        handler: function( filters ) {
          var 
            fn_name = function() { return true; };
          if ( !!filters.name ) {
            fn_name = function( o ) { return o.name.toUpperCase().includes( filters.name.toUpperCase() ); };
          }
          this.filter = function( o ) { return fn_name( o ); };
        },
        deep: true
      }
    },
    methods: {
      visible: function( quest ) {
        return this.filter( quest );
      }
    }
  } );
  $( '#tabs-quests' ).append( vm_quests.$el );
  
  var $json = $( '#tabs-data-json' );
  var $data = $( '#tabs-data-type' )
    .select2( { 
      width: 'auto',
      dropdownAutoWidth: true,
      allowClear: false,
      minimumResultsForSearch: Infinity,
      placeholder: 'Choose data type'
    } )
    .on( 'change', function() {
      $json.val( '' );
    } );

  $( '#tabs-data-clean' )
    .on( 'click', function() {
      var type = $data.val();
      localforage.removeItem( type );
    } );

  $( '#tabs-data-get' )
    .on( 'click', function() {
      var type = $data.val();
      localforage.getItem( type )
        .then( function( value ) {
          $json.val( JSON.stringify( JSON.parse( value ), null, 2 ) );
        } );
    } );

  $( '#tabs-data-set' )
    .on( 'click', function() {
      var type = $data.val();
      var value = $json.val();
      localforage.setItem( type, value );
      c_data.extend( type, JSON.parse( value ) );
      $json.val( '' );
    } );

} );
