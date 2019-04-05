(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('deepmerge'), require('react-fast-compare'), require('@syndesis/utils'), require('immer'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'deepmerge', 'react-fast-compare', '@syndesis/utils', 'immer', 'react'], factory) :
  (factory((global.api = {}),global.deepmerge,global.equal,global.utils,global.immer,global.react));
}(this, (function (exports,deepmerge,equal,utils,produce,React) {
  deepmerge = deepmerge && deepmerge.hasOwnProperty('default') ? deepmerge['default'] : deepmerge;
  equal = equal && equal.hasOwnProperty('default') ? equal['default'] : equal;
  produce = produce && produce.hasOwnProperty('default') ? produce['default'] : produce;

  var ApiContextDefaultValue = {
    apiUri: 'http://example.com',
    dvApiUri: 'http://example.com',
    headers: {}
  };
  var ApiContext = React.createContext(ApiContextDefaultValue);

  // A type of promise-like that resolves synchronously and supports only one observer
  var _Pact = function () {
    function _Pact() {}

    _Pact.prototype.then = function (onFulfilled, onRejected) {
      var result = new _Pact();
      var state = this.s;

      if (state) {
        var callback = state & 1 ? onFulfilled : onRejected;

        if (callback) {
          try {
            _settle(result, 1, callback(this.v));
          } catch (e) {
            _settle(result, 2, e);
          }

          return result;
        } else {
          return this;
        }
      }

      this.o = function (_this) {
        try {
          var value = _this.v;

          if (_this.s & 1) {
            _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
          } else if (onRejected) {
            _settle(result, 1, onRejected(value));
          } else {
            _settle(result, 2, value);
          }
        } catch (e) {
          _settle(result, 2, e);
        }
      };

      return result;
    };

    return _Pact;
  }(); // Settles a pact synchronously

  function _settle(pact, state, value) {
    if (!pact.s) {
      if (value instanceof _Pact) {
        if (value.s) {
          if (state & 1) {
            state = value.s;
          }

          value = value.v;
        } else {
          value.o = _settle.bind(null, pact, state);
          return;
        }
      }

      if (value && value.then) {
        value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
        return;
      }

      pact.s = state;
      pact.v = value;
      var observer = pact.o;

      if (observer) {
        observer(pact);
      }
    }
  }

  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  } // Asynchronously await a promise and pass the result to a finally continuation

  var _earlyReturn = {}; // Asynchronously call a function and send errors to recovery continuation, skipping early returns

  var _AsyncGenerator = function () {
    function _AsyncGenerator(entry) {
      this._entry = entry;
      this._pact = null;
      this._resolve = null;
      this._return = null;
      this._promise = null;
    }

    function _wrapReturnedValue(value) {
      return {
        value: value,
        done: true
      };
    }

    function _wrapYieldedValue(value) {
      return {
        value: value,
        done: false
      };
    }

    _AsyncGenerator.prototype[Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))] = function () {
      return this;
    };

    _AsyncGenerator.prototype._yield = function (value) {
      // Yield the value to the pending next call
      this._resolve(value && value.then ? value.then(_wrapYieldedValue) : _wrapYieldedValue(value)); // Return a pact for an upcoming next/return/throw call


      return this._pact = new _Pact();
    };

    _AsyncGenerator.prototype.next = function (value) {
      // Advance the generator, starting it if it has yet to be started
      var _this = this;

      return _this._promise = new Promise(function (resolve) {
        var _pact = _this._pact;

        if (_pact === null) {
          var _entry = _this._entry;

          if (_entry === null) {
            // Generator is started, but not awaiting a yield expression
            // Abandon the next call!
            return resolve(_this._promise);
          } // Start the generator


          _this._entry = null;
          _this._resolve = resolve;

          function returnValue(value) {
            _this._resolve(value && value.then ? value.then(_wrapReturnedValue) : _wrapReturnedValue(value));

            _this._pact = null;
            _this._resolve = null;
          }

          _entry(_this).then(returnValue, function (error) {
            if (error === _earlyReturn) {
              returnValue(_this._return);
            } else {
              var pact = new _Pact();

              _this._resolve(pact);

              _this._pact = null;
              _this._resolve = null;

              _resolve(pact, 2, error);
            }
          });
        } else {
          // Generator is started and a yield expression is pending, settle it
          _this._pact = null;
          _this._resolve = resolve;

          _settle(_pact, 1, value);
        }
      });
    };

    _AsyncGenerator.prototype.return = function (value) {
      // Early return from the generator if started, otherwise abandons the generator
      var _this = this;

      return _this._promise = new Promise(function (resolve) {
        var _pact = _this._pact;

        if (_pact === null) {
          if (_this._entry === null) {
            // Generator is started, but not awaiting a yield expression
            // Abandon the return call!
            return resolve(_this._promise);
          } // Generator is not started, abandon it and return the specified value


          _this._entry = null;
          return resolve(value && value.then ? value.then(_wrapReturnedValue) : _wrapReturnedValue(value));
        } // Settle the yield expression with a rejected "early return" value


        _this._return = value;
        _this._resolve = resolve;
        _this._pact = null;

        _settle(_pact, 2, _earlyReturn);
      });
    };

    _AsyncGenerator.prototype.throw = function (error) {
      // Inject an exception into the pending yield expression
      var _this = this;

      return _this._promise = new Promise(function (resolve, reject) {
        var _pact = _this._pact;

        if (_pact === null) {
          if (_this._entry === null) {
            // Generator is started, but not awaiting a yield expression
            // Abandon the throw call!
            return resolve(_this._promise);
          } // Generator is not started, abandon it and return a rejected Promise containing the error


          _this._entry = null;
          return reject(error);
        } // Settle the yield expression with the value as a rejection


        _this._resolve = resolve;
        _this._pact = null;

        _settle(_pact, 2, error);
      });
    };

    return _AsyncGenerator;
  }();

  function callFetch(ref) {
    var url = ref.url;
    var method = ref.method;
    var headers = ref.headers; if ( headers === void 0 ) headers = {};
    var body = ref.body;
    var includeContentType = ref.includeContentType; if ( includeContentType === void 0 ) includeContentType = true;
    var contentType = ref.contentType; if ( contentType === void 0 ) contentType = 'application/json; charset=utf-8';
    var includeAccept = ref.includeAccept; if ( includeAccept === void 0 ) includeAccept = true;
    var accept = ref.accept; if ( accept === void 0 ) accept = 'application/json,text/plain,*/*';
    var includeReferrerPolicy = ref.includeReferrerPolicy; if ( includeReferrerPolicy === void 0 ) includeReferrerPolicy = true;

    if (includeAccept) {
      var acceptId = 'Accept';
      headers[acceptId] = accept;
    }

    if (includeContentType) {
      var contentTypeId = 'Content-Type';
      headers[contentTypeId] = contentType;
    }

    if (includeReferrerPolicy) {
      var referrerPolicyId = 'referrerPolicy';
      headers[referrerPolicyId] = 'no-referrer';
    }

    return fetch(url, {
      body: contentType.includes('application/json') ? JSON.stringify(body) : body,
      cache: 'no-cache',
      credentials: 'include',
      headers: Object.assign({}, headers),
      method: method,
      mode: 'cors',
      redirect: 'follow'
    });
  }

  var Fetch = /*@__PURE__*/(function (superclass) {
    function Fetch(props) {
      superclass.call(this, props);
      this.read = this.read.bind(this);
      this.state = {
        data: this.props.initialValue || this.props.defaultValue,
        error: false,
        hasData: !!this.props.initialValue,
        loading: true
      };
    }

    if ( superclass ) Fetch.__proto__ = superclass;
    Fetch.prototype = Object.create( superclass && superclass.prototype );
    Fetch.prototype.constructor = Fetch;

    Fetch.prototype.componentDidMount = function componentDidMount () {
      try {
        var _this = this;

        _this.read();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    Fetch.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
      try {
        var _this2 = this;

        if (prevProps.url !== _this2.props.url) {
          _this2.read();
        }
      } catch (e) {
        return Promise.reject(e);
      }
    };

    Fetch.prototype.shouldComponentUpdate = function shouldComponentUpdate (nextProps, nextState) {
      return !equal(this.props, nextProps) || !equal(this.state, nextState);
    };

    Fetch.prototype.render = function render () {
      return this.props.children({
        read: this.read,
        response: this.state
      });
    };

    Fetch.prototype.read = function read () {
      try {
        var _this3 = this;

        return _catch(function () {
          _this3.setState({
            loading: true
          });

          return Promise.resolve(callFetch({
            contentType: _this3.props.contentType,
            headers: _this3.props.headers,
            method: 'GET',
            url: ("" + (_this3.props.baseUrl) + (_this3.props.url))
          })).then(function (response) {
            function _temp2() {
              _this3.setState({
                data: data,
                hasData: true,
                loading: false
              });
            }

            if (!response.ok) {
              throw new Error(response.statusText);
            }

            var data;

            var _temp = function () {
              if (!_this3.props.contentType || _this3.props.contentType.indexOf('application/json') === 0) {
                return Promise.resolve(response.json()).then(function (_response$json) {
                  data = _response$json;

                  if (_this3.props.defaultValue) {
                    data = deepmerge(_this3.props.defaultValue, data);
                  }
                });
              } else {
                return Promise.resolve(response.text()).then(function (_response$text) {
                  data = _response$text;
                });
              }
            }();

            return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
          });
        }, function (e) {
          _this3.setState({
            data: _this3.props.defaultValue,
            error: true,
            errorMessage: e.message,
            hasData: false,
            loading: false
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    return Fetch;
  }(React.Component));

  var Stream = /*@__PURE__*/(function (Fetch$$1) {
    function Stream() {
      var _this = this;

      Fetch$$1.apply(this, arguments);

      this.read = function () {
        try {
          try {
            _this.setState({
              loading: true
            });

            callFetch({
              contentType: _this.props.contentType,
              headers: _this.props.headers,
              method: 'GET',
              url: ("" + (_this.props.baseUrl) + (_this.props.url))
            }).then(function (response) { return response.body; }).then(function (body) {
              _this.reader = body.getReader();
              var textDecoder = new TextDecoder('utf-8');

              var pushData = function (ref) {
                var done = ref.done;
                var value = ref.value;

                if (done) {
                  _this.setState({
                    loading: false
                  });
                } else {
                  _this.setState({
                    data: (_this.state.data || []).concat( [textDecoder.decode(value)])
                  });

                  _this.reader.read().then(pushData);
                }
              };

              _this.reader.read().then(pushData);
            });
          } catch (e) {
            _this.setState({
              error: true,
              errorMessage: e.message,
              loading: false
            });
          }

          return;
        } catch (e) {
          return Promise.reject(e);
        }
      };

      this.onSave = function () {
        try {
          throw new Error("Can't save from a stream");
        } catch (e) {
          return Promise.reject(e);
        }
      };
    }

    if ( Fetch$$1 ) Stream.__proto__ = Fetch$$1;
    Stream.prototype = Object.create( Fetch$$1 && Fetch$$1.prototype );
    Stream.prototype.constructor = Stream;

    Stream.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
      try {
        var _this2 = this;

        if (prevProps.url !== _this2.props.url) {
          if (_this2.reader) {
            _this2.reader.cancel();
          }

          _this2.read();
        }
      } catch (e) {
        return Promise.reject(e);
      }
    };

    Stream.prototype.componentWillUnmount = function componentWillUnmount () {
      if (this.reader) {
        this.reader.cancel();
      }
    };

    return Stream;
  }(Fetch));

  function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var SyndesisFetch = /*@__PURE__*/(function (superclass) {
    function SyndesisFetch () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) SyndesisFetch.__proto__ = superclass;
    SyndesisFetch.prototype = Object.create( superclass && superclass.prototype );
    SyndesisFetch.prototype.constructor = SyndesisFetch;

    SyndesisFetch.prototype.render = function render () {
      var ref = this.props;
      var url = ref.url;
      var stream = ref.stream;
      var rest = objectWithoutProperties( ref, ["url", "stream"] );
      var props = rest;
      var FetchOrStream = stream ? Stream : Fetch;
      return React.createElement(ApiContext.Consumer, null, function (ref) {
        var apiUri = ref.apiUri;
        var headers = ref.headers;

        return React.createElement(FetchOrStream, Object.assign({
        baseUrl: apiUri,
        url: url,
        headers: headers
      }, props));
      });
    };

    return SyndesisFetch;
  }(React.Component));

  function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var DVFetch = /*@__PURE__*/(function (superclass) {
    function DVFetch () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) DVFetch.__proto__ = superclass;
    DVFetch.prototype = Object.create( superclass && superclass.prototype );
    DVFetch.prototype.constructor = DVFetch;

    DVFetch.prototype.render = function render () {
      var ref = this.props;
      var url = ref.url;
      var stream = ref.stream;
      var rest = objectWithoutProperties$1( ref, ["url", "stream"] );
      var props = rest;
      return React.createElement(ApiContext.Consumer, null, function (ref) {
        var apiUri = ref.apiUri;
        var dvApiUri = ref.dvApiUri;
        var headers = ref.headers;

        return React.createElement(Fetch, Object.assign({
        baseUrl: dvApiUri,
        url: url,
        headers: {}
      }, props));
      });
    };

    return DVFetch;
  }(React.Component));

  var ServerEventsContextDefaultValue = {};
  var ServerEventsContext = React.createContext(ServerEventsContextDefaultValue);

  var NEW_INTEGRATION = {
    name: '',
    tags: []
  };
  var WithIntegrationHelpersWrapped = /*@__PURE__*/(function (superclass) {
    function WithIntegrationHelpersWrapped(props) {
      superclass.call(this, props);
      this.addConnection = this.addConnection.bind(this);
      this.getEmptyIntegration = this.getEmptyIntegration.bind(this);
      this.saveIntegration = this.saveIntegration.bind(this);
      this.setName = this.setName.bind(this);
      this.updateConnection = this.updateConnection.bind(this);
      this.updateOrAddConnection = this.updateOrAddConnection.bind(this);
      this.getStep = this.getStep.bind(this);
      this.getSteps = this.getSteps.bind(this);
    }

    if ( superclass ) WithIntegrationHelpersWrapped.__proto__ = superclass;
    WithIntegrationHelpersWrapped.prototype = Object.create( superclass && superclass.prototype );
    WithIntegrationHelpersWrapped.prototype.constructor = WithIntegrationHelpersWrapped;

    WithIntegrationHelpersWrapped.prototype.getActionDescriptor = function getActionDescriptor (connectionId, actionId, configuredProperties) {
      try {
        var _this = this;

        if (configuredProperties) {
          return Promise.resolve(callFetch({
            body: configuredProperties,
            headers: _this.props.headers,
            method: 'POST',
            url: ((_this.props.apiUri) + "/connections/" + connectionId + "/actions/" + actionId)
          })).then(function (response) {
            if (!response.ok) {
              throw new Error(response.statusText);
            }

            return Promise.resolve(response.json());
          });
        } else {
          return null;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithIntegrationHelpersWrapped.prototype.addConnection = function addConnection (integration, connection, action, flow, position, configuredProperties) {
      try {
        var _this2 = this;

        return Promise.resolve(_this2.getActionDescriptor(connection.id, action.id, configuredProperties)).then(function (actionDescriptor) {
          return produce(integration, function (draft) {
            if (!draft.flows) {
              draft.flows = [];
            }

            if (!draft.flows[flow]) {
              draft.flows[flow] = {
                id: utils.key(),
                name: '',
                steps: []
              };
            }

            if (!draft.flows[flow].steps) {
              draft.flows[flow].steps = [];
            }

            var step = {
              action: action,
              configuredProperties: configuredProperties,
              connection: connection,
              id: draft.flows[flow].id
            };

            if (actionDescriptor) {
              step.action.descriptor = actionDescriptor;
            }

            step.stepKind = 'endpoint';
            draft.flows[flow].steps.splice(position, 0, step);
            draft.tags = Array.from(new Set((draft.tags || []).concat( [connection.id])));
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithIntegrationHelpersWrapped.prototype.updateConnection = function updateConnection (integration, connection, action, flow, position, configuredProperties) {
      try {
        var _this3 = this;

        return Promise.resolve(_this3.getActionDescriptor(connection.id, action.id, configuredProperties)).then(function (actionDescriptor) {
          return produce(integration, function (draft) {
            if (!draft.flows) {
              draft.flows = [];
            }

            if (!draft.flows[flow]) {
              draft.flows[flow] = {
                id: utils.key(),
                name: '',
                steps: []
              };
            }

            if (!draft.flows[flow].steps) {
              draft.flows[flow].steps = [];
            }

            var step = {
              action: action,
              configuredProperties: configuredProperties,
              connection: connection,
              id: draft.flows[flow].id
            };

            if (actionDescriptor) {
              step.action.descriptor = actionDescriptor;
            }

            step.stepKind = 'endpoint';
            draft.flows[flow].steps[position] = step;
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithIntegrationHelpersWrapped.prototype.updateOrAddConnection = function updateOrAddConnection (integration, connection, action, flow, position, configuredProperties) {
      try {
        var _this4 = this;

        return Promise.resolve(_this4.getActionDescriptor(connection.id, action.id, configuredProperties)).then(function (actionDescriptor) {
          return produce(integration, function (draft) {
            if (!draft.flows) {
              draft.flows = [];
            }

            if (!draft.flows[flow]) {
              draft.flows[flow] = {
                id: utils.key(),
                name: '',
                steps: []
              };
            }

            if (!draft.flows[flow].steps) {
              draft.flows[flow].steps = [];
            }

            var step = {
              action: action,
              configuredProperties: configuredProperties,
              connection: connection,
              id: draft.flows[flow].id
            };

            if (actionDescriptor) {
              step.action.descriptor = actionDescriptor;
            }

            step.stepKind = 'endpoint';

            if (draft.flows[flow].steps[position]) {
              draft.flows[flow].steps[position] = step;
            } else {
              draft.flows[flow].steps.splice(position, 0, step);
              draft.tags = Array.from(new Set((draft.tags || []).concat( [connection.id])));
            }
          });
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithIntegrationHelpersWrapped.prototype.getEmptyIntegration = function getEmptyIntegration () {
      return NEW_INTEGRATION;
    };

    WithIntegrationHelpersWrapped.prototype.saveIntegration = function saveIntegration (integration) {
      try {
        var _this5 = this;

        return Promise.resolve(callFetch({
          body: integration,
          headers: _this5.props.headers,
          method: integration.id ? 'PUT' : 'POST',
          url: integration.id ? ((_this5.props.apiUri) + "/integrations/" + (integration.id)) : ((_this5.props.apiUri) + "/integrations")
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          var _temp = !integration.id;

          return _temp ? Promise.resolve(response.json()) : Promise.resolve(integration);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithIntegrationHelpersWrapped.prototype.setName = function setName (integration, name) {
      return produce(integration, function (nextIntegration) {
        nextIntegration.name = name;
      });
    };

    WithIntegrationHelpersWrapped.prototype.getSteps = function getSteps (integration, flow) {
      try {
        return integration.flows[flow].steps;
      } catch (e) {
        throw new Error(("Can't find steps in position flow:" + flow));
      }
    };

    WithIntegrationHelpersWrapped.prototype.getStep = function getStep (integration, flow, step) {
      try {
        return integration.flows[flow].steps[step];
      } catch (e) {
        throw new Error(("Can't find a step in position flow:" + flow + " step:" + step));
      }
    };

    WithIntegrationHelpersWrapped.prototype.canPublish = function canPublish (integration) {
      return integration.currentState !== 'Pending';
    };

    WithIntegrationHelpersWrapped.prototype.canActivate = function canActivate (integration) {
      return integration.currentState !== 'Pending' && integration.currentState !== 'Published';
    };

    WithIntegrationHelpersWrapped.prototype.canEdit = function canEdit (integration) {
      return integration.currentState !== 'Pending';
    };

    WithIntegrationHelpersWrapped.prototype.canDeactivate = function canDeactivate (integration) {
      return integration.currentState !== 'Unpublished';
    };

    WithIntegrationHelpersWrapped.prototype.render = function render () {
      return this.props.children({
        addConnection: this.addConnection,
        canActivate: this.canActivate,
        canDeactivate: this.canDeactivate,
        canEdit: this.canEdit,
        canPublish: this.canPublish,
        getEmptyIntegration: this.getEmptyIntegration,
        getStep: this.getStep,
        getSteps: this.getSteps,
        saveIntegration: this.saveIntegration,
        setName: this.setName,
        updateConnection: this.updateConnection,
        updateOrAddConnection: this.updateOrAddConnection
      });
    };

    return WithIntegrationHelpersWrapped;
  }(React.Component));
  /**
   * This component provides provides through a render propr a number of helper
   * functions useful when working with an integration.
   *
   * Some of these helpers are available also as stand-alone functions
   * (packages/api/src/integrationHelpers/index.ts), but this component provides
   * methods like `saveIntegration` that can talk with the backend without any
   * additional information provided.
   *
   * Methods that modify an integration return a immutable copy of the original
   * object, to reduce the risk of bugs.
   *
   * @see [addConnection]{@link IWithIntegrationHelpersChildrenProps#addConnection}
   * @see [updateConnection]{@link IWithIntegrationHelpersChildrenProps#updateConnection}
   * @see [updateOrAddConnection]{@link IWithIntegrationHelpersChildrenProps#updateOrAddConnection}
   * @see [getEmptyIntegration]{@link IWithIntegrationHelpersChildrenProps#getEmptyIntegration}
   * @see [saveIntegration]{@link IWithIntegrationHelpersChildrenProps#saveIntegration}
   * @see [setName]{@link IWithIntegrationHelpersChildrenProps#setName}
   * @see [getSteps]{@link IWithIntegrationHelpersChildrenProps#getSteps}
   * @see [getStep]{@link IWithIntegrationHelpersChildrenProps#getStep}
   * @see [canPublish]{@link IWithIntegrationHelpersChildrenProps#canPublish}
   * @see [canActivate]{@link IWithIntegrationHelpersChildrenProps#canActivate}
   * @see [canEdit]{@link IWithIntegrationHelpersChildrenProps#canEdit}
   * @see [canDeactivate]{@link IWithIntegrationHelpersChildrenProps#canDeactivate}
   */

  var WithIntegrationHelpers = function (props) { return React.createElement(ApiContext.Consumer, null, function (apiContext) { return React.createElement(WithIntegrationHelpersWrapped, Object.assign({}, props, apiContext)); }); };

  var WithChangeListener = /*@__PURE__*/(function (superclass) {
    function WithChangeListener(props) {
      superclass.call(this, props);
      this.changeListener = this.changeListener.bind(this);
    }

    if ( superclass ) WithChangeListener.__proto__ = superclass;
    WithChangeListener.prototype = Object.create( superclass && superclass.prototype );
    WithChangeListener.prototype.constructor = WithChangeListener;

    WithChangeListener.prototype.render = function render () {
      return this.props.children();
    };

    WithChangeListener.prototype.componentDidMount = function componentDidMount () {
      try {
        var _this = this;

        _this.props.registerChangeListener(_this.changeListener);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithChangeListener.prototype.componentWillUnmount = function componentWillUnmount () {
      try {
        var _this2 = this;

        _this2.props.unregisterChangeListener(_this2.changeListener);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithChangeListener.prototype.changeListener = function changeListener (event) {
      if (this.props.filter(event)) {
        this.props.read();
      }
    };

    return WithChangeListener;
  }(React.Component));

  var WithApiConnectors = /*@__PURE__*/(function (superclass) {
    function WithApiConnectors () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithApiConnectors.__proto__ = superclass;
    WithApiConnectors.prototype = Object.create( superclass && superclass.prototype );
    WithApiConnectors.prototype.constructor = WithApiConnectors;

    WithApiConnectors.prototype.changeFilter = function changeFilter (change) {
      return change.kind.startsWith('connector');
    };

    WithApiConnectors.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/connectors?query=connectorGroupId%3Dswagger-connector-template',
        defaultValue: {
          items: [],
          totalCount: 0
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        if (this$1.props.disableUpdates) {
          return this$1.props.children(response);
        }

        return React.createElement(ServerEventsContext.Consumer, null, function (ref) {
          var registerChangeListener = ref.registerChangeListener;
          var unregisterChangeListener = ref.unregisterChangeListener;

          return React.createElement(WithChangeListener, {
          read: read,
          registerChangeListener: registerChangeListener,
          unregisterChangeListener: unregisterChangeListener,
          filter: this$1.changeFilter
        }, function () { return this$1.props.children(response); });
        });
      });
    };

    return WithApiConnectors;
  }(React.Component));

  /**
   * A component that fetches the extension with the specified identifier.
   * @see [extensionId]{@link IWithExtensionProps#extensionId}
   */

  var WithExtension = /*@__PURE__*/(function (superclass) {
    function WithExtension () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithExtension.__proto__ = superclass;
    WithExtension.prototype = Object.create( superclass && superclass.prototype );
    WithExtension.prototype.constructor = WithExtension;

    WithExtension.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: ("/extensions/" + (this.props.extensionId)),
        defaultValue: {
          actions: [],
          extensionType: 'Steps',
          name: '',
          schemaVersion: ''
        },
        initialValue: this.props.initialValue
      }, function (ref) {
        var response = ref.response;

        return this$1.props.children(response);
      });
    };

    return WithExtension;
  }(React.Component));

  var WithExtensionHelpersWrapped = /*@__PURE__*/(function (superclass) {
    function WithExtensionHelpersWrapped(props) {
      superclass.call(this, props);
      this.deleteExtension = this.deleteExtension.bind(this);
      this.importExtension = this.importExtension.bind(this);
      this.uploadExtension = this.uploadExtension.bind(this);
    }

    if ( superclass ) WithExtensionHelpersWrapped.__proto__ = superclass;
    WithExtensionHelpersWrapped.prototype = Object.create( superclass && superclass.prototype );
    WithExtensionHelpersWrapped.prototype.constructor = WithExtensionHelpersWrapped;
    /**
     * Deletes the extension with the specified identifier.
     * @param extensionId the ID of the extension being deleted
     */


    WithExtensionHelpersWrapped.prototype.deleteExtension = function deleteExtension (extensionId) {
      try {
        var _this = this;

        return Promise.resolve(callFetch({
          headers: _this.props.headers,
          method: 'DELETE',
          url: ((_this.props.apiUri) + "/extensions/" + extensionId)
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * Imports the extension with the specified identifier.
     * @param extensionId the ID of the extension being imported
     */


    WithExtensionHelpersWrapped.prototype.importExtension = function importExtension (extensionId) {
      try {
        var _this2 = this;

        return Promise.resolve(callFetch({
          headers: _this2.props.headers,
          method: 'POST',
          url: ((_this2.props.apiUri) + "/extensions/" + extensionId + "/install")
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * Uploads the extension with the specified identifier or creates a new extension if there is no identifier.
     * @param extensionId the ID of the extension being uploaded
     */


    WithExtensionHelpersWrapped.prototype.uploadExtension = function uploadExtension (file, extensionId) {
      try {
        var _this3 = this;

        var data = new FormData();
        data.append('file', file, file.name);
        var url = (_this3.props.apiUri) + "/extensions";
        return Promise.resolve(callFetch({
          body: data,
          contentType: 'multipart/form-data',
          headers: _this3.props.headers,
          includeAccept: false,
          includeContentType: false,
          includeReferrerPolicy: false,
          method: 'POST',
          url: extensionId ? (url + "/" + extensionId) : url
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve(response.json());
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithExtensionHelpersWrapped.prototype.render = function render () {
      return this.props.children({
        deleteExtension: this.deleteExtension,
        importExtension: this.importExtension,
        uploadExtension: this.uploadExtension
      });
    };

    return WithExtensionHelpersWrapped;
  }(React.Component));
  var WithExtensionHelpers = function (props) { return React.createElement(ApiContext.Consumer, null, function (apiContext) { return React.createElement(WithExtensionHelpersWrapped, Object.assign({}, props, apiContext)); }); };

  /**
   * A component that fetches the integrations that a specified extension is used by.
   * @see [extensionId]{@link IWithExtensionIntegrationsProps#extensionId}
   */

  var WithExtensionIntegrations = /*@__PURE__*/(function (superclass) {
    function WithExtensionIntegrations () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithExtensionIntegrations.__proto__ = superclass;
    WithExtensionIntegrations.prototype = Object.create( superclass && superclass.prototype );
    WithExtensionIntegrations.prototype.constructor = WithExtensionIntegrations;

    WithExtensionIntegrations.prototype.changeFilter = function changeFilter (change) {
      return (// rerun fetch if there was a change in integrations
        change.kind === 'integration' || change.kind === 'integration-deployment'
      );
    };

    WithExtensionIntegrations.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: ("/extensions/" + (this.props.extensionId) + "/integrations"),
        defaultValue: []
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.disableUpdates ? this$1.props.children(response) : React.createElement(ServerEventsContext.Consumer, null, function (ref) {
        var registerChangeListener = ref.registerChangeListener;
        var unregisterChangeListener = ref.unregisterChangeListener;

        return React.createElement(WithChangeListener, {
        read: read,
        registerChangeListener: registerChangeListener,
        unregisterChangeListener: unregisterChangeListener,
        filter: this$1.changeFilter
      }, function () { return this$1.props.children(response); });
        });
      });
    };

    return WithExtensionIntegrations;
  }(React.Component));

  /**
   * A component that fetches all the extensions.
   */

  var WithExtensions = /*@__PURE__*/(function (superclass) {
    function WithExtensions () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithExtensions.__proto__ = superclass;
    WithExtensions.prototype = Object.create( superclass && superclass.prototype );
    WithExtensions.prototype.constructor = WithExtensions;

    WithExtensions.prototype.changeFilter = function changeFilter (change) {
      return change.kind === 'extension';
    };

    WithExtensions.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/extensions',
        defaultValue: {
          items: [],
          totalCount: 0
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.disableUpdates ? this$1.props.children(response) : React.createElement(ServerEventsContext.Consumer, null, function (ref) {
        var registerChangeListener = ref.registerChangeListener;
        var unregisterChangeListener = ref.unregisterChangeListener;

        return React.createElement(WithChangeListener, {
        read: read,
        registerChangeListener: registerChangeListener,
        unregisterChangeListener: unregisterChangeListener,
        filter: this$1.changeFilter
      }, function () { return this$1.props.children(response); });
        });
      });
    };

    return WithExtensions;
  }(React.Component));

  var WithIntegrations = /*@__PURE__*/(function (superclass) {
    function WithIntegrations () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithIntegrations.__proto__ = superclass;
    WithIntegrations.prototype = Object.create( superclass && superclass.prototype );
    WithIntegrations.prototype.constructor = WithIntegrations;

    WithIntegrations.prototype.changeFilter = function changeFilter (change) {
      return change.kind === 'integration' || change.kind === 'integration-deployment';
    };

    WithIntegrations.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/integrations',
        defaultValue: {
          items: [],
          totalCount: 0
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.disableUpdates ? this$1.props.children(response) : React.createElement(ServerEventsContext.Consumer, null, function (ref) {
        var registerChangeListener = ref.registerChangeListener;
        var unregisterChangeListener = ref.unregisterChangeListener;

        return React.createElement(WithChangeListener, {
        read: read,
        registerChangeListener: registerChangeListener,
        unregisterChangeListener: unregisterChangeListener,
        filter: this$1.changeFilter
      }, function () { return this$1.props.children(response); });
        });
      });
    };

    return WithIntegrations;
  }(React.Component));

  function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  var WithMonitoredIntegrations = /*@__PURE__*/(function (superclass) {
    function WithMonitoredIntegrations () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithMonitoredIntegrations.__proto__ = superclass;
    WithMonitoredIntegrations.prototype = Object.create( superclass && superclass.prototype );
    WithMonitoredIntegrations.prototype.constructor = WithMonitoredIntegrations;

    WithMonitoredIntegrations.prototype.changeFilter = function changeFilter (change) {
      return change.kind === 'integration-deployment' || change.kind === 'integration-deployment-state-details';
    };

    WithMonitoredIntegrations.prototype.getMonitoredIntegrations = function getMonitoredIntegrations (integrations, response) {
      return {
        items: integrations.items.map(function (i) { return ({
          integration: i,
          monitoring: response.data.find(function (o) { return o.integrationId === i.id; })
        }); }),
        totalCount: integrations.totalCount
      };
    };

    WithMonitoredIntegrations.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(WithIntegrations, {
        disableUpdates: this.props.disableUpdates
      }, function (ref) {
        var integrations = ref.data;
        var rest = objectWithoutProperties$2( ref, ["data"] );
        var props = rest;

        return React.createElement(SyndesisFetch, {
        url: '/monitoring/integrations',
        defaultValue: []
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        if (this$1.props.disableUpdates) {
          var data = this$1.getMonitoredIntegrations(integrations, response);
          return this$1.props.children(Object.assign({}, props,
            {data: data}));
        }

        return React.createElement(ServerEventsContext.Consumer, null, function (ref) {
          var registerChangeListener = ref.registerChangeListener;
          var unregisterChangeListener = ref.unregisterChangeListener;

          return React.createElement(WithChangeListener, {
          read: read,
          registerChangeListener: registerChangeListener,
          unregisterChangeListener: unregisterChangeListener,
          filter: this$1.changeFilter
        }, function () {
          var data = this$1.getMonitoredIntegrations(integrations, response);
          return this$1.props.children(Object.assign({}, props,
            {data: data}));
        });
        });
      });
      });
    };

    return WithMonitoredIntegrations;
  }(React.Component));

  var WithPolling = /*@__PURE__*/(function (superclass) {
    function WithPolling(props) {
      superclass.call(this, props);
      this.poller = this.poller.bind(this);
    }

    if ( superclass ) WithPolling.__proto__ = superclass;
    WithPolling.prototype = Object.create( superclass && superclass.prototype );
    WithPolling.prototype.constructor = WithPolling;

    WithPolling.prototype.componentDidMount = function componentDidMount () {
      try {
        var _this = this;

        _this.startPolling();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithPolling.prototype.componentWillUnmount = function componentWillUnmount () {
      try {
        var _this2 = this;

        _this2.stopPolling();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithPolling.prototype.render = function render () {
      return this.props.children();
    };

    WithPolling.prototype.poller = function poller () {
      this.props.read();
    };

    WithPolling.prototype.setPoller = function setPoller (func) {
      this.poller = func;
    };

    WithPolling.prototype.startPolling = function startPolling () {
      this.stopPolling();

      if (this.props.polling) {
        this.pollingTimer = setInterval(this.poller, this.props.polling);
      }
    };

    WithPolling.prototype.stopPolling = function stopPolling () {
      if (this.pollingTimer) {
        clearInterval(this.pollingTimer);
        this.pollingTimer = undefined;
      }
    };

    return WithPolling;
  }(React.Component));

  var WithIntegrationsMetrics = /*@__PURE__*/(function (superclass) {
    function WithIntegrationsMetrics () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithIntegrationsMetrics.__proto__ = superclass;
    WithIntegrationsMetrics.prototype = Object.create( superclass && superclass.prototype );
    WithIntegrationsMetrics.prototype.constructor = WithIntegrationsMetrics;

    WithIntegrationsMetrics.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/metrics/integrations',
        defaultValue: {
          errors: 0,
          id: '-1',
          integrationDeploymentMetrics: [],
          lastProcessed: ("" + (Date.now())),
          messages: 0,
          metricsProvider: 'null',
          start: ("" + (Date.now())),
          topIntegrations: {}
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        if (this$1.props.disableUpdates) {
          return this$1.props.children(response);
        }

        return React.createElement(WithPolling, {
          read: read,
          polling: 5000
        }, function () { return this$1.props.children(response); });
      });
    };

    return WithIntegrationsMetrics;
  }(React.Component));

  function getConnectionsForDisplay(connections) {
    return connections.filter(function (c) { return !c.metadata || !c.metadata['hide-from-connection-pages']; });
  }
  function getConnectionsWithFromAction(connections) {
    return connections.filter(function (connection) {
      if (!connection.connector) {
        // safety net
        return true;
      }

      return connection.connector.actions.some(function (action) {
        return action.pattern === 'From';
      });
    });
  }
  function getConnectionsWithToAction(connections) {
    return connections.filter(function (connection) {
      if (!connection.connector) {
        // safety net
        return true;
      }

      if (connection.connectorId === 'api-provider') {
        // api provider can be used only for From actions
        return false;
      }

      return connection.connector.actions.some(function (action) {
        return action.pattern === 'To';
      });
    });
  }
  function transformResponse(response) {
    return Object.assign({}, response,
      {data: {
        connectionsForDisplay: getConnectionsForDisplay(response.data.items),
        connectionsWithFromAction: getConnectionsWithFromAction(response.data.items),
        connectionsWithToAction: getConnectionsWithToAction(response.data.items),
        dangerouslyUnfilteredConnections: response.data.items,
        totalCount: response.data.totalCount
      }});
  }
  var WithConnections = /*@__PURE__*/(function (superclass) {
    function WithConnections () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithConnections.__proto__ = superclass;
    WithConnections.prototype = Object.create( superclass && superclass.prototype );
    WithConnections.prototype.constructor = WithConnections;

    WithConnections.prototype.changeFilter = function changeFilter (change) {
      return change.kind.startsWith('connection');
    };

    WithConnections.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/connections',
        defaultValue: {
          items: [],
          totalCount: 0
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        if (this$1.props.disableUpdates) {
          return this$1.props.children(transformResponse(response));
        }

        return React.createElement(ServerEventsContext.Consumer, null, function (ref) {
          var registerChangeListener = ref.registerChangeListener;
          var unregisterChangeListener = ref.unregisterChangeListener;

          return React.createElement(WithChangeListener, {
          read: read,
          registerChangeListener: registerChangeListener,
          unregisterChangeListener: unregisterChangeListener,
          filter: this$1.changeFilter
        }, function () { return this$1.props.children(transformResponse(response)); });
        });
      });
    };

    return WithConnections;
  }(React.Component));

  function getActionsWithFrom(actions) {
    if ( actions === void 0 ) actions = [];

    return actions.filter(function (a) { return a.pattern === 'From'; });
  }
  function getActionsWithTo(actions) {
    if ( actions === void 0 ) actions = [];

    return actions.filter(function (a) { return a.pattern === 'To'; });
  }
  function getConnectionConnector(connection) {
    if (!connection.connector) {
      throw Error(("FATAL: Connection " + (connection.id) + " doesn't have a connector"));
    }

    return connection.connector;
  }
  function getConnectorActions(connector) {
    return connector.actions;
  }
  function getActionById(actions, actionId) {
    var action = actions.find(function (a) { return a.id === actionId; });

    if (!action) {
      throw Error(("FATAL: Action " + actionId + " not found"));
    }

    return action;
  }
  function getActionDescriptor(action) {
    if (!action.descriptor) {
      throw Error(("FATAL: Action " + (action.id) + " doesn't have any descriptor"));
    }

    return action.descriptor;
  }
  function getActionSteps(descriptor) {
    if (!descriptor.propertyDefinitionSteps) {
      throw Error("FATAL: Descriptor doesn't have any definition");
    }

    return descriptor.propertyDefinitionSteps;
  }
  function getActionStep(steps, step) {
    if (step > steps.length - 1) {
      throw Error(("FATAL: Step " + step + " does not exist in the descriptor steps"));
    }

    return steps[step];
  }
  function getActionStepDefinition(step) {
    if (!step.properties) {
      throw Error(("FATAL: Step " + step + " does not have valid properties"));
    }

    return step.properties;
  }

  var serializeIntegration = function (i) { return btoa(encodeURIComponent(JSON.stringify(i))); };

  var deserializeIntegration = function (i) { return JSON.parse(decodeURIComponent(atob(i))); };

  var WithConnection = /*@__PURE__*/(function (superclass) {
    function WithConnection () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithConnection.__proto__ = superclass;
    WithConnection.prototype = Object.create( superclass && superclass.prototype );
    WithConnection.prototype.constructor = WithConnection;

    WithConnection.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: ("/connections/" + (this.props.id)),
        defaultValue: {
          name: ''
        },
        initialValue: this.props.initialValue
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.children(Object.assign({}, response,
        {data: Object.assign({}, response.data,
          {actionsWithFrom: getActionsWithFrom(response.data.connector ? response.data.connector.actions : []),
          actionsWithTo: getActionsWithTo(response.data.connector ? response.data.connector.actions : [])})}));
      });
    };

    return WithConnection;
  }(React.Component));

  var WithConnectors = /*@__PURE__*/(function (superclass) {
    function WithConnectors () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithConnectors.__proto__ = superclass;
    WithConnectors.prototype = Object.create( superclass && superclass.prototype );
    WithConnectors.prototype.constructor = WithConnectors;

    WithConnectors.prototype.changeFilter = function changeFilter (change) {
      return change.kind.startsWith('connector');
    };

    WithConnectors.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(SyndesisFetch, {
        url: '/connectors',
        defaultValue: {
          items: [],
          totalCount: 0
        }
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        if (this$1.props.disableUpdates) {
          return this$1.props.children(response);
        }

        return React.createElement(ServerEventsContext.Consumer, null, function (ref) {
          var registerChangeListener = ref.registerChangeListener;
          var unregisterChangeListener = ref.unregisterChangeListener;

          return React.createElement(WithChangeListener, {
          read: read,
          registerChangeListener: registerChangeListener,
          unregisterChangeListener: unregisterChangeListener,
          filter: this$1.changeFilter
        }, function () { return this$1.props.children(response); });
        });
      });
    };

    return WithConnectors;
  }(React.Component));

  var RECONNECT_TIME = 5000;
  var WithServerEvents = /*@__PURE__*/(function (superclass) {
    function WithServerEvents(props) {
      superclass.call(this, props);
      this.starting = false;
      this.started = false;
      this.unmounting = false;
      this.retries = 0;
      this.preferredProtocol = '';
      this.changeListeners = [];
      this.messageListeners = [];
      this.registerChangeListener = this.registerChangeListener.bind(this);
      this.registerMessageListener = this.registerMessageListener.bind(this);
      this.unregisterChangeListener = this.unregisterChangeListener.bind(this);
      this.unregisterMessageListener = this.unregisterMessageListener.bind(this);
    }

    if ( superclass ) WithServerEvents.__proto__ = superclass;
    WithServerEvents.prototype = Object.create( superclass && superclass.prototype );
    WithServerEvents.prototype.constructor = WithServerEvents;

    WithServerEvents.prototype.registerChangeListener = function registerChangeListener (listener) {
      this.changeListeners = this.changeListeners.concat( [listener]);
    };

    WithServerEvents.prototype.registerMessageListener = function registerMessageListener (listener) {
      this.messageListeners = this.messageListeners.concat( [listener]);
    };

    WithServerEvents.prototype.unregisterChangeListener = function unregisterChangeListener (listener) {
      this.changeListeners = this.changeListeners.filter(function (l) { return l !== listener; });
    };

    WithServerEvents.prototype.unregisterMessageListener = function unregisterMessageListener (listener) {
      this.messageListeners = this.messageListeners.filter(function (l) { return l !== listener; });
    };

    WithServerEvents.prototype.componentDidMount = function componentDidMount () {
      try {
        var _this = this;

        _this.start();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithServerEvents.prototype.componentWillUnmount = function componentWillUnmount () {
      try {
        var _this2 = this;

        _this2.unmounting = true;

        _this2.close();

        _this2.changeListeners = [];
        _this2.messageListeners = [];
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithServerEvents.prototype.render = function render () {
      return this.props.children({
        registerChangeListener: this.registerChangeListener,
        registerMessageListener: this.registerMessageListener,
        unregisterChangeListener: this.unregisterChangeListener,
        unregisterMessageListener: this.unregisterMessageListener
      });
    };

    WithServerEvents.prototype.close = function close () {
      this.started = false;
      this.starting = false;

      if (this.webSocket) {
        this.webSocket.close();
        this.webSocket = undefined;
      }

      if (this.eventSource) {
        this.eventSource.close();
        this.eventSource = undefined;
      }
    };

    WithServerEvents.prototype.start = function start () {
      this.startConnection(this.retries % 2 === 0);
    };

    WithServerEvents.prototype.onFailure = function onFailure (error) {
      var this$1 = this;

      this.close();

      if (this.unmounting) {
        return;
      }

      this.retries++; // Initialy retry very quickly.

      var reconnectIn = RECONNECT_TIME;

      if (this.retries < 3) {
        reconnectIn = 1;
      }

      setTimeout(function () {
        // console.log('Reconnecting');
        switch (this$1.preferredProtocol) {
          // Once we find a protocol that works, keep using it.
          case 'ws':
            this$1.startConnection(true);
            break;

          case 'es':
            this$1.startConnection(false);
            break;

          default:
            // Keep flipping between WS and ES untill we find one that works.
            this$1.startConnection(this$1.retries % 2 === 0);
            break;
        }
      }, reconnectIn);
    };

    WithServerEvents.prototype.startConnection = function startConnection (connectUsingWebSockets) {
      try {
        var _this3 = this;

        if (_this3.starting || _this3.started || _this3.unmounting) {
          return;
        }

        _this3.starting = true;
        return _catch(function () {
          return Promise.resolve(callFetch({
            body: '',
            headers: _this3.props.headers,
            method: 'POST',
            url: ((_this3.props.apiUri) + "/event/reservations")
          })).then(function (response) {
            return Promise.resolve(response.json()).then(function (reservation) {
              reservation = reservation.data;

              if (connectUsingWebSockets) {
                var wsApiEndpoint = _this3.props.apiUri.replace(/^http/, 'ws');

                wsApiEndpoint += '/event/streams.ws/' + reservation; // console.log('Connecting using web socket');

                _this3.starting = false;
                _this3.started = true;

                _this3.connectWebSocket(wsApiEndpoint);
              } else {
                _this3.starting = false;
                _this3.started = true; // console.log('Connecting using server side events');

                _this3.connectEventSource(_this3.props.apiUri + '/event/streams/' + reservation);
              }
            });
          });
        }, function (error) {
          _this3.onFailure(error);

          throw error;
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithServerEvents.prototype.postMessageEvent = function postMessageEvent (messageEvent) {
      this.messageListeners.forEach(function (listener) {
        listener(messageEvent);
      });
    };

    WithServerEvents.prototype.postChangeEvent = function postChangeEvent (changeEvent) {
      this.changeListeners.forEach(function (listener) {
        listener(changeEvent);
      });
    };

    WithServerEvents.prototype.connectEventSource = function connectEventSource (url) {
      var this$1 = this;

      this.eventSource = new EventSource(url);
      this.eventSource.addEventListener('message', function (event) {
        this$1.started = true;
        this$1.starting = false;
        this$1.preferredProtocol = 'es'; // console.log('sse.message: ', event.data);

        this$1.postMessageEvent(event);
      });
      this.eventSource.addEventListener('change-event', function (event) {
        this$1.started = true;
        var value = JSON.parse(event.data); // console.log('sse.change-event: ', value);

        this$1.postChangeEvent(value);
      });

      var onError = function (event) {
        // console.log('sse.close: ', event);
        this$1.onFailure(event);
      };

      this.eventSource.addEventListener('close', onError);
      this.eventSource.addEventListener('error', onError);
      return this.eventSource;
    };

    WithServerEvents.prototype.connectWebSocket = function connectWebSocket (url) {
      var this$1 = this;

      this.webSocket = new WebSocket(url);

      this.webSocket.onmessage = function (event) {
        this$1.started = true;
        this$1.starting = false;
        var messageEvent = JSON.parse(event.data);

        switch (messageEvent.event) {
          case 'message':
            this$1.preferredProtocol = 'ws'; // console.log('ws.message: ', messageEvent.data);

            this$1.postMessageEvent(messageEvent);
            break;

          case 'change-event':
            var value = JSON.parse(messageEvent.data); // console.log('ws.change-event: ', value);

            this$1.postChangeEvent(value);
            break;

          default: // I guess we don't care what happens here...
          // console.log('ws.unknown-message: ', event);

        }
      };

      this.webSocket.onclose = function (event) {
        // console.log('ws.onclose: ', event);
        this$1.onFailure(event);
      };

      return this.webSocket;
    };

    return WithServerEvents;
  }(React.Component));

  /**
   * A component that fetches the virtualization views with the specified identifier.
   * @see [virtualizationId]{@link IWithViewProps#virtualizationId}
   */

  var WithViews = /*@__PURE__*/(function (superclass) {
    function WithViews () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithViews.__proto__ = superclass;
    WithViews.prototype = Object.create( superclass && superclass.prototype );
    WithViews.prototype.constructor = WithViews;

    WithViews.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(DVFetch, {
        url: ("workspace/vdbs/" + (this.props.virtualizationId) + "vdb/Models/views/Views"),
        defaultValue: [],
        initialValue: this.props.initialValue
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.children(response);
      });
    };

    return WithViews;
  }(React.Component));

  var WORKSPACE_ROOT = '/tko:komodo/tko:workspace/';
  var WithVirtualizationHelpersWrapped = /*@__PURE__*/(function (superclass) {
    function WithVirtualizationHelpersWrapped(props) {
      superclass.call(this, props);
      this.createVirtualization = this.createVirtualization.bind(this);
      this.deleteVirtualization = this.deleteVirtualization.bind(this);
      this.publishVirtualization = this.publishVirtualization.bind(this);
      this.unpublishServiceVdb = this.unpublishServiceVdb.bind(this);
    }

    if ( superclass ) WithVirtualizationHelpersWrapped.__proto__ = superclass;
    WithVirtualizationHelpersWrapped.prototype = Object.create( superclass && superclass.prototype );
    WithVirtualizationHelpersWrapped.prototype.constructor = WithVirtualizationHelpersWrapped;
    /**
     * Creates a virtualization with the specified name and description
     * @param virtName the name of the virtualization to create
     * @param virtDesc the description (optional) of the virtualization to create
     */


    WithVirtualizationHelpersWrapped.prototype.createVirtualization = function createVirtualization (virtName, virtDesc) {
      try {
        var _this = this;

        var newVirtualization = {
          keng__dataPath: ("" + WORKSPACE_ROOT + (_this.props.username) + "/" + virtName),
          keng__id: ("" + virtName),
          tko__description: virtDesc ? ("" + virtDesc) : ''
        };
        return Promise.resolve(callFetch({
          body: newVirtualization,
          headers: {},
          method: 'POST',
          url: ((_this.props.dvApiUri) + "workspace/dataservices/" + virtName)
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * Deletes the virtualization with the specified name.
     * @param virtualizationName the name of the virtualization being deleted
     */


    WithVirtualizationHelpersWrapped.prototype.deleteVirtualization = function deleteVirtualization (virtualizationName) {
      try {
        var _this2 = this;

        return Promise.resolve(callFetch({
          headers: {},
          method: 'DELETE',
          url: ((_this2.props.dvApiUri) + "workspace/dataservices/" + virtualizationName)
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * Publish the virtualization with the specified name.
     * @param virtualizationName the name of the virtualization being published
     */


    WithVirtualizationHelpersWrapped.prototype.publishVirtualization = function publishVirtualization (virtualizationName) {
      try {
        var _this3 = this;

        var pubVirtualization = {
          name: ("" + virtualizationName)
        };
        return Promise.resolve(callFetch({
          body: pubVirtualization,
          headers: {},
          method: 'POST',
          url: ((_this3.props.dvApiUri) + "metadata/publish")
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };
    /**
     * Unpublish the Service VDB with the specified name.
     * @param vdbName the name of the vdb associated with the service
     */


    WithVirtualizationHelpersWrapped.prototype.unpublishServiceVdb = function unpublishServiceVdb (vdbName) {
      try {
        var _this4 = this;

        return Promise.resolve(callFetch({
          headers: {},
          method: 'DELETE',
          url: ((_this4.props.dvApiUri) + "metadata/publish/" + vdbName)
        })).then(function (response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return Promise.resolve();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    WithVirtualizationHelpersWrapped.prototype.render = function render () {
      return this.props.children({
        createVirtualization: this.createVirtualization,
        deleteVirtualization: this.deleteVirtualization,
        publishVirtualization: this.publishVirtualization,
        unpublishServiceVdb: this.unpublishServiceVdb
      });
    };

    return WithVirtualizationHelpersWrapped;
  }(React.Component));
  var WithVirtualizationHelpers = function (props) { return React.createElement(ApiContext.Consumer, null, function (apiContext) { return React.createElement(WithVirtualizationHelpersWrapped, Object.assign({}, props, apiContext)); }); };

  /**
   * A component that fetches the virtualization with the specified identifier.
   * @see [virtualizationId]{@link IWithVirtualizationProps#virtualizationId}
   */

  var WithVirtualization = /*@__PURE__*/(function (superclass) {
    function WithVirtualization () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithVirtualization.__proto__ = superclass;
    WithVirtualization.prototype = Object.create( superclass && superclass.prototype );
    WithVirtualization.prototype.constructor = WithVirtualization;

    WithVirtualization.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(DVFetch, {
        url: ("workspace/dataservices/" + (this.props.virtualizationId)),
        defaultValue: {
          connections: 0,
          drivers: 0,
          keng___links: [],
          keng__baseUri: '',
          keng__dataPath: '',
          keng__hasChildren: false,
          keng__id: '',
          keng__kType: '',
          publishedState: 'NOTFOUND',
          serviceVdbName: '',
          serviceVdbVersion: '',
          serviceViewDefinitions: [],
          serviceViewModel: '',
          tko__description: ''
        },
        initialValue: this.props.initialValue
      }, function (ref) {
        var response = ref.response;

        return this$1.props.children(response);
      });
    };

    return WithVirtualization;
  }(React.Component));

  var WithVirtualizations = /*@__PURE__*/(function (superclass) {
    function WithVirtualizations () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) WithVirtualizations.__proto__ = superclass;
    WithVirtualizations.prototype = Object.create( superclass && superclass.prototype );
    WithVirtualizations.prototype.constructor = WithVirtualizations;

    WithVirtualizations.prototype.render = function render () {
      var this$1 = this;

      return React.createElement(DVFetch, {
        url: 'workspace/dataservices',
        defaultValue: []
      }, function (ref) {
        var read = ref.read;
        var response = ref.response;

        return this$1.props.children(response);
      });
    };

    return WithVirtualizations;
  }(React.Component));

  exports.ApiContextDefaultValue = ApiContextDefaultValue;
  exports.ApiContext = ApiContext;
  exports.SyndesisFetch = SyndesisFetch;
  exports.callFetch = callFetch;
  exports.DVFetch = DVFetch;
  exports.Fetch = Fetch;
  exports.ServerEventsContextDefaultValue = ServerEventsContextDefaultValue;
  exports.ServerEventsContext = ServerEventsContext;
  exports.Stream = Stream;
  exports.NEW_INTEGRATION = NEW_INTEGRATION;
  exports.WithIntegrationHelpersWrapped = WithIntegrationHelpersWrapped;
  exports.WithIntegrationHelpers = WithIntegrationHelpers;
  exports.WithApiConnectors = WithApiConnectors;
  exports.WithExtension = WithExtension;
  exports.WithExtensionHelpersWrapped = WithExtensionHelpersWrapped;
  exports.WithExtensionHelpers = WithExtensionHelpers;
  exports.WithExtensionIntegrations = WithExtensionIntegrations;
  exports.WithExtensions = WithExtensions;
  exports.WithIntegrations = WithIntegrations;
  exports.WithMonitoredIntegrations = WithMonitoredIntegrations;
  exports.WithIntegrationsMetrics = WithIntegrationsMetrics;
  exports.getConnectionsForDisplay = getConnectionsForDisplay;
  exports.getConnectionsWithFromAction = getConnectionsWithFromAction;
  exports.getConnectionsWithToAction = getConnectionsWithToAction;
  exports.transformResponse = transformResponse;
  exports.WithConnections = WithConnections;
  exports.WithConnection = WithConnection;
  exports.WithConnectors = WithConnectors;
  exports.WithPolling = WithPolling;
  exports.WithChangeListener = WithChangeListener;
  exports.WithServerEvents = WithServerEvents;
  exports.getActionsWithFrom = getActionsWithFrom;
  exports.getActionsWithTo = getActionsWithTo;
  exports.getConnectionConnector = getConnectionConnector;
  exports.getConnectorActions = getConnectorActions;
  exports.getActionById = getActionById;
  exports.getActionDescriptor = getActionDescriptor;
  exports.getActionSteps = getActionSteps;
  exports.getActionStep = getActionStep;
  exports.getActionStepDefinition = getActionStepDefinition;
  exports.serializeIntegration = serializeIntegration;
  exports.deserializeIntegration = deserializeIntegration;
  exports.WithViews = WithViews;
  exports.WithVirtualizationHelpersWrapped = WithVirtualizationHelpersWrapped;
  exports.WithVirtualizationHelpers = WithVirtualizationHelpers;
  exports.WithVirtualization = WithVirtualization;
  exports.WithVirtualizations = WithVirtualizations;

})));
//# sourceMappingURL=api.umd.js.map
