(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('named-urls'), require('react'), require('react-router')) :
  typeof define === 'function' && define.amd ? define(['exports', 'named-urls', 'react', 'react-router'], factory) :
  (factory((global.utils = {}),global.namedUrls,global.react,global.reactRouter));
}(this, (function (exports,namedUrls,React,reactRouter) {
  function getConnectionIcon(connection, publicUrl) {
    return (connection.icon || '').startsWith('data:') ? connection.icon : (publicUrl + "/icons/" + (connection.id) + ".connection.png");
  }

  var ALPHABET = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
  var RANDOMNESS = [];
  var lastTimestamp = 0;
  /**
   * Generates lexically sortable unique keys based on:
   *
   * https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html
   *
   * You can also consider the generated kys to be like UUIDS except:
   * (1) strictly increment from the generating node's point of view
   * (2) loosely increment based on relative machine time when viewed across nodes.
   */

  function key() {
    // first time setup.. initialize the randomness...
    if (RANDOMNESS.length === 0) {
      for (var i = 0; i < 12; i++) {
        RANDOMNESS[i] = Math.floor(Math.random() * 64);
      }
    } // we build the resulting key backwards. The most significant bits at the front of the key.


    var result = '';
    var timestamp = new Date().getTime(); // Lets encode the random part of the key. (72 bits of randomness)
    // 72/6 = 12 base64 characters.
    // increment randomness when we being called too keys too quickly.

    if (timestamp === lastTimestamp) {
      for (var i$1 = 0; i$1 < 12; i$1++) {
        RANDOMNESS[i$1]++;

        if (RANDOMNESS[i$1] === 64) {
          RANDOMNESS[i$1] = 0; // we need to carry to the next random byte.
        } else {
            break; // done incrementing.
          }
      }
    }

    for (var i$2 = 0; i$2 < 12; i$2++) {
      result = ALPHABET.charAt(RANDOMNESS[i$2]) + result;
    } // Base64 encodes 6 bits of data per character. We want to encode
    // 6 bytes of the timestamp (48 bits), 48/6 = 8 base64 chars for the ts part
    // the key.


    var remainingTimestamp = timestamp;

    for (var i$3 = 0; i$3 < 8; i$3++) {
      result = ALPHABET.charAt(remainingTimestamp % 64) + result;
      remainingTimestamp = Math.floor(remainingTimestamp / 64);
    }

    lastTimestamp = timestamp;
    return result;
  }

  /**
   * Creates a function that takes a route and some `data` `T` that returns the
   * reversed URL.
   * Use `mapper` to write the business logic required to convert the `data` object
   * to the basic params that can be passed in an url (strings and numbers), and to
   * set the state object that will be pushed in the history together with the url.
   * @param route
   * @param mapper
   */

  function makeResolver(route, mapper) {
    return function (data) {
      var ref = mapper(data);
      var params = ref.params;
      var state = ref.state;
      return {
        pathname: namedUrls.reverse(route, params),
        state: state
      };
    };
  }
  /**
   * Creates a function that takes a route and some `data` `T` that returns the
   * reversed URL.
   * @param route
   */

  function makeResolverNoParams(route) {
    return function () { return namedUrls.reverse(route); };
  }

  var WithListViewToolbarHelpers = /*@__PURE__*/(function (superclass) {
    function WithListViewToolbarHelpers(props) {
      var this$1 = this;

      superclass.call(this, props);

      this.onUpdateCurrentValue = function (event) {
        this$1.setState({
          currentValue: event.target.value
        });
      };

      this.onValueKeyPress = function (keyEvent) {
        var ref = this$1.state;
        var currentValue = ref.currentValue;
        var currentFilterType = ref.currentFilterType;

        if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
          this$1.setState({
            currentValue: ''
          });
          this$1.onFilterAdded(currentFilterType.title, currentValue);
          keyEvent.stopPropagation();
          keyEvent.preventDefault();
        }
      };

      this.onFilterAdded = function (title, value) {
        var ref = this$1.state;
        var activeFilters = ref.activeFilters;
        this$1.setState({
          activeFilters: activeFilters.concat( [{
            title: title,
            value: value
          }])
        });
      };

      this.onSelectFilterType = function (filterType) {
        var ref = this$1.state;
        var currentFilterType = ref.currentFilterType;

        if (currentFilterType !== filterType) {
          this$1.setState({
            currentValue: '',
            currentFilterType: filterType
          });
        }
      };

      this.onFilterValueSelected = function (filterValue) {
        var ref = this$1.state;
        var currentFilterType = ref.currentFilterType;
        this$1.setState({
          currentValue: filterValue.title
        });

        if (filterValue) {
          this$1.onFilterAdded(currentFilterType.title, filterValue.title);
        }
      };

      this.onRemoveFilter = function (filter) {
        var ref = this$1.state;
        var activeFilters = ref.activeFilters;
        var index = activeFilters.indexOf(filter);

        if (index > -1) {
          var updated = activeFilters.slice(0, index).concat( activeFilters.slice(index + 1));
          this$1.setState({
            activeFilters: updated
          });
        }
      };

      this.onClearFilters = function (event) {
        event.preventDefault();
        this$1.setState({
          activeFilters: []
        });
      };

      this.onToggleCurrentSortDirection = function () {
        var ref = this$1.state;
        var isSortAscending = ref.isSortAscending;
        this$1.setState({
          isSortAscending: !isSortAscending
        });
      };

      this.onUpdateCurrentSortType = function (sortType) {
        var ref = this$1.state;
        var currentSortType = ref.currentSortType;

        if (currentSortType !== sortType) {
          this$1.setState({
            currentSortType: sortType,
            isSortAscending: true
          });
        }
      };

      this.state = {
        activeFilters: [],
        currentFilterType: this.props.defaultFilterType,
        currentSortType: this.props.defaultSortType.title,
        currentValue: '',
        filterCategory: null,
        isSortAscending: true
      };
    }

    if ( superclass ) WithListViewToolbarHelpers.__proto__ = superclass;
    WithListViewToolbarHelpers.prototype = Object.create( superclass && superclass.prototype );
    WithListViewToolbarHelpers.prototype.constructor = WithListViewToolbarHelpers;

    WithListViewToolbarHelpers.prototype.render = function render () {
      return this.props.children(Object.assign({}, {onClearFilters: this.onClearFilters,
        onFilterAdded: this.onFilterAdded,
        onFilterValueSelected: this.onFilterValueSelected,
        onRemoveFilter: this.onRemoveFilter,
        onSelectFilterType: this.onSelectFilterType,
        onToggleCurrentSortDirection: this.onToggleCurrentSortDirection,
        onUpdateCurrentSortType: this.onUpdateCurrentSortType,
        onUpdateCurrentValue: this.onUpdateCurrentValue,
        onValueKeyPress: this.onValueKeyPress},
        this.state));
    };

    return WithListViewToolbarHelpers;
  }(React.Component));

  /**
   *
   * @param value the value being used
   * @returns the `OptionalInt` object created from the specified value
   */
  function createOptionalInt(value) {
    return {
      present: true,
      asInt: value
    };
  }
  /**
   * @param optional the `OptionalInt` whose value is being requested
   * @param defaultValue the value to return if no value exists
   * @returns the int value (defaults to zero)
   */

  function optionalIntValue(optional, defaultValue) {
    if ( defaultValue === void 0 ) defaultValue = 0;

    if (optional && optional.present) {
      var value = optional.asInt;
      return value ? value : defaultValue;
    }

    return defaultValue;
  }
  /**
   * @param optional the value whose value is being checked
   * @returns true if the optional exists and there is a value
   */

  function optionalIntHasValue(optional) {
    return optional && optional.present ? optional.present : false;
  }

  /**
   * A component to handle asynchronous data-loading. It will show the provided
   * loader component for a minimum amount of time - to avoid flash of loading
   * component - before invoking the children render prop.
   * It will also handle the error state rendering the provided error component
   * in case of errors loading the data.
   *
   * @see [error]{@link IWithLoaderProps#error}
   * @see [loading]{@link IWithLoaderProps#loading}
   * @see [minWait]{@link IWithLoaderProps#minWait}
   * @see [loaderChildren]{@link IWithLoaderProps#loaderChildren}
   * @see [errorChildren]{@link IWithLoaderProps#errorChildren}
   * @see [children]{@link IWithLoaderProps#children}
   */

  var WithLoader = /*@__PURE__*/(function (superclass) {
    function WithLoader(props) {
      superclass.call(this, props);
      this.state = {
        loaded: !this.props.loading
      };
    }

    if ( superclass ) WithLoader.__proto__ = superclass;
    WithLoader.prototype = Object.create( superclass && superclass.prototype );
    WithLoader.prototype.constructor = WithLoader;

    WithLoader.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
      this.setState({
        loaded: !nextProps.loading
      });
    };

    WithLoader.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
      if (!this.props.loading && !this.waitTimeout) {
        this.setTimeout();
      }
    };

    WithLoader.prototype.render = function render () {
      if (this.props.error) {
        return this.props.errorChildren;
      }

      if (!this.state.loaded) {
        return this.props.loaderChildren;
      }

      return this.props.children();
    };

    WithLoader.prototype.setTimeout = function setTimeout () {
      var this$1 = this;

      this.clearTimeout();
      this.waitTimeout = window.setTimeout(function () {
        this$1.setState({
          loaded: true
        });
      }, this.props.minWait);
    };

    WithLoader.prototype.clearTimeout = function clearTimeout$1 () {
      if (this.waitTimeout) {
        clearTimeout(this.waitTimeout);
        this.waitTimeout = undefined;
      }
    };

    return WithLoader;
  }(React.Component));
  WithLoader.defaultProps = {
    minWait: 500
  };

  /**
   * A render-prop component that returns a route params - with type `P` - and
   * state - with type `S`.
   * *Warning:* this component doesn't provide any assurance on the returned shape
   * of neither the params nor the state objects.
   * @see [children]{@link IWithRouteDataProps#children}
   */

  var WithRouteData = /*@__PURE__*/(function (superclass) {
    function WithRouteData () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithRouteData.__proto__ = superclass;
    WithRouteData.prototype = Object.create( superclass && superclass.prototype );
    WithRouteData.prototype.constructor = WithRouteData;

    WithRouteData.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(reactRouter.Route, null, function (route) {
        if (!route.match) {
          throw new Error("Route doesn't have a match");
        }

        var params = route.match.params;
        var state = route.location.state;
        return this$1.props.children(params, state, route);
      });
    };

    return WithRouteData;
  }(React.Component));

  function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var WithRouterBase = /*@__PURE__*/(function (superclass) {
    function WithRouterBase () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithRouterBase.__proto__ = superclass;
    WithRouterBase.prototype = Object.create( superclass && superclass.prototype );
    WithRouterBase.prototype.constructor = WithRouterBase;

    WithRouterBase.prototype.render = function render () {
      var ref = this.props;
      var children = ref.children;
      var rest = objectWithoutProperties( ref, ["children"] );
      var props = rest;
      return children(props);
    };

    return WithRouterBase;
  }(React.Component));
  var WithRouter = reactRouter.withRouter(WithRouterBase);

  exports.getConnectionIcon = getConnectionIcon;
  exports.key = key;
  exports.makeResolver = makeResolver;
  exports.makeResolverNoParams = makeResolverNoParams;
  exports.WithListViewToolbarHelpers = WithListViewToolbarHelpers;
  exports.createOptionalInt = createOptionalInt;
  exports.optionalIntValue = optionalIntValue;
  exports.optionalIntHasValue = optionalIntHasValue;
  exports.WithLoader = WithLoader;
  exports.WithRouteData = WithRouteData;
  exports.WithRouterBase = WithRouterBase;
  exports.WithRouter = WithRouter;

})));
//# sourceMappingURL=utils.umd.js.map
