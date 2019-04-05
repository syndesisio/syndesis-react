(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-fast-compare')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-fast-compare'], factory) :
  (factory((global.atlasmapAdapter = {}),global.react,global.equal));
}(this, (function (exports,React,equal) {
  equal = equal && equal.hasOwnProperty('default') ? equal['default'] : equal;

  function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
  /* tslint:disable */

  var runtime = require('file-loader?name=atlasmap-runtime.js!@syndesis/atlasmap-assembly/dist/atlasmap/runtime.js');

  var polyfills = require('file-loader?name=atlasmap-polyfills.js!@syndesis/atlasmap-assembly/dist/atlasmap/polyfills.js');

  var styles = require('file-loader?name=atlasmap-styles.js!@syndesis/atlasmap-assembly/dist/atlasmap/styles.js');

  var scripts = require('file-loader?name=atlasmap-scripts.js!@syndesis/atlasmap-assembly/dist/atlasmap/scripts.js');

  var vendor = require('file-loader?name=atlasmap-vendor.js!@syndesis/atlasmap-assembly/dist/atlasmap/vendor.js');

  var main = require('file-loader?name=atlasmap-main.js!@syndesis/atlasmap-assembly/dist/atlasmap/main.js');

  (function (DocumentType) {
    DocumentType["JAVA"] = "Java";
    DocumentType["XML"] = "XML";
    DocumentType["XSD"] = "XSD";
    DocumentType["JSON"] = "JSON";
    DocumentType["CORE"] = "Core";
    DocumentType["CSV"] = "CSV";
    DocumentType["CONSTANT"] = "Constants";
    DocumentType["PROPERTY"] = "Property";
  })(exports.DocumentType || (exports.DocumentType = {}));

  (function (InspectionType) {
    InspectionType["JAVA_CLASS"] = "JAVA_CLASS";
    InspectionType["SCHEMA"] = "SCHEMA";
    InspectionType["INSTANCE"] = "INSTANCE";
    InspectionType["UNKNOWN"] = "UNKNOWN";
  })(exports.InspectionType || (exports.InspectionType = {}));

  var DataMapperAdapter = /*@__PURE__*/(function (superclass) {
    function DataMapperAdapter(props) {
      superclass.call(this, props);
      this.iframe = null;
      this.messageChannel = new MessageChannel();
      this.onIframeLoad = this.onIframeLoad.bind(this);
      this.onMessages = this.onMessages.bind(this);
    }

    if ( superclass ) DataMapperAdapter.__proto__ = superclass;
    DataMapperAdapter.prototype = Object.create( superclass && superclass.prototype );
    DataMapperAdapter.prototype.constructor = DataMapperAdapter;

    DataMapperAdapter.prototype.componentDidMount = function componentDidMount () {
      if (this.iframe) {
        this.iframe.addEventListener('load', this.onIframeLoad);
      }
    };

    DataMapperAdapter.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
      var ref = this.props;
      var _ = ref.onMappings;
      var rest = objectWithoutProperties( ref, ["onMappings"] );
      var prevPayload = rest;
      var __ = nextProps.onMappings;
      var rest$1 = objectWithoutProperties( nextProps, ["onMappings"] );
      var nextPayload = rest$1;

      if (!equal(prevPayload, nextPayload)) {
        this.updateDataMapperApp(nextPayload);
      }
    };

    DataMapperAdapter.prototype.shouldComponentUpdate = function shouldComponentUpdate () {
      return false;
    };

    DataMapperAdapter.prototype.componentWillUnmount = function componentWillUnmount () {
      if (this.iframe) {
        this.iframe.removeEventListener('load', this.onIframeLoad);
      }
    };

    DataMapperAdapter.prototype.onIframeLoad = function onIframeLoad () {
      this.messagePort = this.messageChannel.port1;
      this.messagePort.onmessage = this.onMessages;
      this.iframe.contentWindow.postMessage('init', '*', [this.messageChannel.port2]);
    };

    DataMapperAdapter.prototype.onMessages = function onMessages (event) {
      switch (event.data.message) {
        case 'ready':
          {
            var ref = this.props;
            var onMappings = ref.onMappings;
            var rest = objectWithoutProperties( ref, ["onMappings"] );
            var payload = rest;
            this.updateDataMapperApp(payload);
            break;
          }

        case 'mappings':
          {
            var payload$1 = event.data.payload;
            this.props.onMappings(payload$1.mappings);
            break;
          }
      }
    };

    DataMapperAdapter.prototype.updateDataMapperApp = function updateDataMapperApp (props) {
      if (this.messagePort) {
        var message = {
          message: 'update',
          payload: {
            documentId: props.documentId,
            inputDataShape: props.inputDataShape,
            inputDescription: props.inputDescription,
            inputDocumentType: props.inputDocumentType,
            inputInspectionType: props.inputInspectionType,
            inputName: props.inputName,
            mappings: props.mappings,
            outputDataShape: props.outputDataShape,
            outputDescription: props.outputDescription,
            outputDocumentType: props.outputDocumentType,
            outputInspectionType: props.outputInspectionType,
            outputName: props.outputName
          }
        };
        this.messagePort.postMessage(message);
      }
    };

    DataMapperAdapter.prototype.render = function render () {
      var this$1 = this;

      var srcDoc = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Atlasmap</title>\n  <base href=\"/dm\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n<body style=\"background: transparent;\">\n  <app-root></app-root>\n  <script type=\"text/javascript\" src=\"" + runtime + "\"></script>\n  <script type=\"text/javascript\" src=\"" + polyfills + "\"></script>\n  <script type=\"text/javascript\" src=\"" + styles + "\"></script>\n  <script type=\"text/javascript\" src=\"" + scripts + "\"></script>\n  <script type=\"text/javascript\" src=\"" + vendor + "\"></script>\n  <script type=\"text/javascript\" src=\"" + main + "\"></script></body>\n</html>\n\n"; // bypass some odd typing incompatibility with base React when using "exotic"
      // html attributes

      var extraProps = {
        allowtransparency: ''
      };
      return React.createElement("iframe", Object.assign({
        srcDoc: srcDoc,
        style: {
          width: '100%',
          height: '100%'
        },
        frameBorder: 0
      }, extraProps, {
        ref: function (el) { return this$1.iframe = el; }
      }));
    };

    return DataMapperAdapter;
  }(React.Component));

  exports.DataMapperAdapter = DataMapperAdapter;

})));
//# sourceMappingURL=atlasmap-adapter.umd.js.map
