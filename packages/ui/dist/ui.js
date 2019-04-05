function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactRouter = require('react-router');
var Dropzone = _interopDefault(require('react-dropzone'));
var reactVirtualized = require('react-virtualized');
var classnames = _interopDefault(require('classnames'));
var reactRouterDom = require('react-router-dom');
var patternflyReact = require('patternfly-react');
var React = require('react');
var ContentLoader = _interopDefault(require('react-content-loader'));

var ConnectionCard = /*@__PURE__*/(function (superclass) {
  function ConnectionCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionCard.__proto__ = superclass;
  ConnectionCard.prototype = Object.create( superclass && superclass.prototype );
  ConnectionCard.prototype.constructor = ConnectionCard;

  ConnectionCard.prototype.render = function render () {
    return React.createElement(reactRouterDom.Link, {
      to: this.props.href,
      className: 'connection-card'
    }, React.createElement(patternflyReact.Card, {
      matchHeight: true
    }, React.createElement(patternflyReact.Card.Body, null, React.createElement("div", {
      className: 'connection-card__content'
    }, React.createElement("div", {
      className: "connection-card__icon"
    }, React.createElement("img", {
      src: this.props.icon,
      alt: this.props.name,
      width: 46
    })), React.createElement("div", {
      className: "connection-card__title h2",
      "data-testid": "connection-card-title"
    }, this.props.name), React.createElement("p", {
      className: "connection-card__description"
    }, this.props.description)))));
  };

  return ConnectionCard;
}(React.PureComponent));

var ConnectionsGrid = /*@__PURE__*/(function (superclass) {
  function ConnectionsGrid () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsGrid.__proto__ = superclass;
  ConnectionsGrid.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsGrid.prototype.constructor = ConnectionsGrid;

  ConnectionsGrid.prototype.render = function render () {
    return React.createElement(patternflyReact.CardGrid, {
      fluid: true,
      matchHeight: true
    }, React.createElement(patternflyReact.CardGrid.Row, null, this.props.children));
  };

  return ConnectionsGrid;
}(React.Component));

var ConnectionsGridCell = /*@__PURE__*/(function (superclass) {
  function ConnectionsGridCell () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsGridCell.__proto__ = superclass;
  ConnectionsGridCell.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsGridCell.prototype.constructor = ConnectionsGridCell;

  ConnectionsGridCell.prototype.render = function render () {
    return React.createElement(patternflyReact.CardGrid.Col, {
      xs: 6,
      md: 3
    }, this.props.children);
  };

  return ConnectionsGridCell;
}(React.Component));

var ConnectionSkeleton = function (props) { return React.createElement(patternflyReact.Card, {
  matchHeight: true
}, React.createElement(patternflyReact.Card.Body, null, React.createElement(patternflyReact.EmptyState, null, React.createElement(ContentLoader, Object.assign({
  height: 300,
  width: 200,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), React.createElement("circle", {
  cx: "100",
  cy: "50",
  r: "40"
}), React.createElement("rect", {
  x: "5",
  y: "125",
  rx: "5",
  ry: "5",
  width: "190",
  height: "30"
}), React.createElement("rect", {
  x: "25",
  y: "180",
  rx: "5",
  ry: "5",
  width: "150",
  height: "15"
}), React.createElement("rect", {
  x: "40",
  y: "205",
  rx: "5",
  ry: "5",
  width: "120",
  height: "15"
}))))); };

var AppLayout = /*@__PURE__*/(function (superclass) {
  function AppLayout () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) AppLayout.__proto__ = superclass;
  AppLayout.prototype = Object.create( superclass && superclass.prototype );
  AppLayout.prototype.constructor = AppLayout;

  AppLayout.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(patternflyReact.VerticalNav, {
      navCollapsed: !this.props.showNavigation,
      onCollapse: this.props.onNavigationCollapse,
      onExpand: this.props.onNavigationExpand
    }, React.createElement(patternflyReact.VerticalNav.Masthead, {
      iconImg: this.props.pictograph,
      titleImg: this.props.typogram,
      title: this.props.appTitle,
      href: this.props.logoHref
    }, React.createElement(patternflyReact.Masthead.Collapse, null, this.props.appNav)), this.props.verticalNav), React.createElement("div", {
      className: "container-pf-nav-pf-vertical"
    }, this.props.children));
  };

  return AppLayout;
}(React.Component));

// tslint:disable react-unused-props-and-state
/**
 * A component to show breadcrumbs. All its children will be wrapped in a tag
 * that will automatically handle the active/inactive state by setting the
 * appropriate class to the wrapper.
 *
 * It's suggested to use only anchors or spans as children node.
 */

var AppTopMenu = function (ref) {
  var username = ref.username;
  var children = ref.children;

  return React.createElement(patternflyReact.Masthead.Dropdown, {
  id: "app-user-dropdown",
  title: [React.createElement("span", {
    className: "dropdown-title",
    key: "dropdown-title"
  }, React.createElement(patternflyReact.Icon, {
    type: 'fa',
    name: 'user'
  }), "\u00A0", username)]
}, children);
};

// tslint:disable react-unused-props-and-state
// remove the above line after this goes GA https://github.com/Microsoft/tslint-microsoft-contrib/pull/824
function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var ButtonLink = function (ref) {
  var onClick = ref.onClick;
  var href = ref.href;
  var className = ref.className;
  var disabled = ref.disabled;
  var as = ref.as; if ( as === void 0 ) as = 'default';
  var size = ref.size;
  var children = ref.children;
  var rest = objectWithoutProperties( ref, ["onClick", "href", "className", "disabled", "as", "size", "children"] );
  var props = rest;

  className = classnames('btn', ("btn-" + as), className, {
    'btn-lg': size === 'lg',
    'btn-sm': size === 'sm',
    'btn-xs': size === 'xs'
  });
  return href ? React.createElement(reactRouterDom.Link, Object.assign({
    to: href,
    onClick: onClick,
    className: className
  }, props), children) : React.createElement("button", {
    onClick: onClick,
    className: className,
    disabled: disabled || !onClick && !href
  }, children);
};

// tslint:disable react-unused-props-and-state
/**
 * A component to show breadcrumbs. All its children will be wrapped in a tag
 * that will automatically handle the active/inactive state by setting the
 * appropriate class to the wrapper.
 *
 * It's suggested to use only anchors or spans as children node.
 */

var Breadcrumb = function (ref) {
  var children = ref.children;

  return React.createElement(patternflyReact.Breadcrumb, {
  style: {
    background: '#fff',
    margin: 0,
    paddingLeft: '15px'
  }
}, React.Children.map(children, function (c, idx) { return React.createElement("li", {
  className: React.Children.count(children) - 1 === idx ? 'active' : '',
  key: idx
}, c); }));
};

// tslint:disable react-unused-props-and-state
// remove the above line after this goes GA https://github.com/Microsoft/tslint-microsoft-contrib/pull/824
function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Container = function (ref) {
  var children = ref.children;
  var className = ref.className;
  var rest = objectWithoutProperties$1( ref, ["children", "className"] );
  var props = rest;

  return React.createElement("div", Object.assign({
  className: classnames('container-fluid', className)
}, props), children);
};

var Loader = /*@__PURE__*/(function (superclass) {
  function Loader () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Loader.__proto__ = superclass;
  Loader.prototype = Object.create( superclass && superclass.prototype );
  Loader.prototype.constructor = Loader;

  Loader.prototype.render = function render () {
    return React.createElement("div", {
      className: classnames('Loader', {
        'is-block': !this.props.inline,
        'is-inline': this.props.inline
      })
    }, React.createElement(patternflyReact.Spinner, {
      loading: this.props.loading,
      size: this.props.size,
      inline: this.props.inline,
      inverse: this.props.inverse
    }));
  };

  return Loader;
}(React.PureComponent));
Loader.defaultProps = {
  inline: false,
  inverse: false,
  loading: true,
  size: 'lg'
};

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

function joinClassnames() {
  var classnames$$1 = [], len = arguments.length;
  while ( len-- ) classnames$$1[ len ] = arguments[ len ];

  return classnames$$1.filter(function (i) { return i; }).join(' ');
}

var PfNavLink = function (ref) {
  var activeClassName = ref.activeClassName; if ( activeClassName === void 0 ) activeClassName = 'active';
  var activeStyle = ref.activeStyle;
  var classNameProp = ref.className;
  var exact = ref.exact;
  var isActiveProp = ref.isActive;
  var location = ref.location;
  var strict = ref.strict;
  var styleProp = ref.style;
  var to = ref.to;
  var label = ref.label;
  var children = ref.children;
  var rest$1 = objectWithoutProperties$2( ref, ["activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "label", "children"] );
  var rest = rest$1;

  var path = typeof to === 'object' ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  var NavLinkChildren = function (ref) {
    var childLocation = ref.location;
    var match = ref.match;

    var isActive = !!(isActiveProp ? isActiveProp(match, childLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object.assign({}, styleProp,
      activeStyle) : styleProp;
    return React.createElement("li", {
      className: className
    }, React.createElement(reactRouterDom.Link, Object.assign({
      style: style,
      to: to,
      children: label
    }, rest)), children);
  };

  return React.createElement(reactRouter.Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: NavLinkChildren
  });
};

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

function PfVerticalNavItem(ref) {
  var className = ref.className;
  var exact = ref.exact;
  var isActiveProp = ref.isActive;
  var icon = ref.icon;
  var location = ref.location;
  var strict = ref.strict;
  var to = ref.to;
  var label = ref.label;
  var children = ref.children;
  var rest$1 = objectWithoutProperties$3( ref, ["className", "exact", "isActive", "icon", "location", "strict", "to", "label", "children"] );
  var rest = rest$1;

  var path = typeof to === 'object' ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

  var NavLinkChildren = function (ref) {
    var childLocation = ref.location;
    var match = ref.match;

    var isActive = !!(isActiveProp ? isActiveProp(match, childLocation) : match);
    return React.createElement("li", {
      className: classnames('list-group-item', {
        active: isActive
      })
    }, React.createElement(reactRouterDom.Link, Object.assign({
      to: to,
      children: React.createElement(React.Fragment, null, React.createElement("span", {
        className: icon
      }), React.createElement("span", {
        className: "list-group-item-value"
      }, label), React.createElement("div", {
        className: "badge-container-pf"
      }))
    }, rest)), children);
  };

  return React.createElement(reactRouter.Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: NavLinkChildren
  });
}

PfVerticalNavItem.displayName = patternflyReact.VerticalNav.Item.displayName;

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TabBar = function (ref) {
  var children = ref.children;
  var rest = objectWithoutProperties$4( ref, ["children"] );
  var props = rest;

  return React.createElement(patternflyReact.Nav, Object.assign({
  bsClass: "nav nav-tabs nav-tabs-pf"
}, props), children);
};

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TabBarItem = function (ref) {
  var label = ref.label;
  var to = ref.to;
  var rest = objectWithoutProperties$5( ref, ["label", "to"] );
  var props = rest;

  return React.createElement(PfNavLink, Object.assign({
  label: label,
  to: to
}, props));
};

// tslint:disable react-unused-props-and-state
var WizardStep = function (ref) {
  var isActive = ref.isActive;
  var isDisabled = ref.isDisabled;
  var isAlt = ref.isAlt; if ( isAlt === void 0 ) isAlt = false;
  var onClick = ref.onClick;
  var step = ref.step;
  var title = ref.title;
  var subSteps = ref.subSteps; if ( subSteps === void 0 ) subSteps = [];
  var activeSubstep = ref.activeSubstep; if ( activeSubstep === void 0 ) activeSubstep = 0;

  return React.createElement("li", {
  className: ((isAlt ? 'wizard-pf-step-alt' : 'wizard-pf-step') + " " + (isActive ? 'active' : '') + " " + (isDisabled ? 'disabled' : '')),
  onClick: onClick
}, React.createElement("a", null, React.createElement("span", {
  className: ("wizard-pf-step" + (isAlt ? '-alt' : '') + "-number")
}, step), React.createElement("span", {
  className: ("wizard-pf-step" + (isAlt ? '-alt' : '') + "-title")
}, title), !isAlt && subSteps.map(function (s, idx) { return React.createElement("span", {
  className: ("wizard-pf-step-title-substep " + (idx === activeSubstep ? 'active' : '')),
  key: idx
}, s); })), isAlt && isActive && React.createElement("ul", null, subSteps.map(function (s, idx) { return React.createElement("li", {
  className: ("wizard-pf-step-alt-substep " + (idx === activeSubstep ? 'active' : 'disabled')),
  key: idx
}, React.createElement("a", null, s)); })));
};

var WizardSteps = /*@__PURE__*/(function (superclass) {
  function WizardSteps () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) WizardSteps.__proto__ = superclass;
  WizardSteps.prototype = Object.create( superclass && superclass.prototype );
  WizardSteps.prototype.constructor = WizardSteps;

  WizardSteps.prototype.render = function render () {
    return React.createElement("div", {
      className: 'wizard-pf-steps'
    }, React.createElement("ul", {
      className: ("wizard-pf-steps-indicator wizard-pf-steps-alt-indicator " + (this.props.active ? 'active' : ''))
    }, this.props.mainSteps), React.createElement("ul", {
      className: ("wizard-pf-steps-alt " + (this.props.active ? '' : 'hidden'))
    }, this.props.altSteps));
  };

  return WizardSteps;
}(React.Component));

/**
 * A modal dialog to display when an object is being deleted.
 */

var DeleteConfirmationDialog = /*@__PURE__*/(function (superclass) {
  function DeleteConfirmationDialog () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) DeleteConfirmationDialog.__proto__ = superclass;
  DeleteConfirmationDialog.prototype = Object.create( superclass && superclass.prototype );
  DeleteConfirmationDialog.prototype.constructor = DeleteConfirmationDialog;

  DeleteConfirmationDialog.prototype.render = function render () {
    return React.createElement(patternflyReact.MessageDialog, {
      accessibleName: "deleteConfirmationDialog",
      accessibleDescription: "deleteConfirmationDialogContent",
      icon: React.createElement(patternflyReact.Icon, {
        type: "pf",
        name: "error-circle-o"
      }),
      onHide: this.props.onCancel,
      primaryAction: this.props.onDelete,
      primaryActionButtonContent: this.props.i18nDeleteButtonText,
      primaryActionButtonBsStyle: "danger",
      primaryContent: React.createElement("p", {
        className: "lead"
      }, this.props.i18nDeleteMessage),
      secondaryAction: this.props.onCancel,
      secondaryActionButtonContent: this.props.i18nCancelButtonText,
      secondaryContent: this.props.i18nDetailsMessage ? React.createElement("p", null, this.props.i18nDetailsMessage) : undefined,
      show: this.props.showDialog,
      title: this.props.i18nTitle
    });
  };

  return DeleteConfirmationDialog;
}(React.Component));

/**
 * A component that can be used to upload files. Files can be uploaded by clicking in the drop zone or by
 * drag and dropping files into the drop zone.
 */

var DndFileChooser = /*@__PURE__*/(function (superclass) {
  function DndFileChooser(props) {
    superclass.call(this, props); // set up initial state

    this.state = {
      files: [],
      notifications: []
    };
    this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    this.handleRejectedFiles = this.handleRejectedFiles.bind(this);
  }

  if ( superclass ) DndFileChooser.__proto__ = superclass;
  DndFileChooser.prototype = Object.create( superclass && superclass.prototype );
  DndFileChooser.prototype.constructor = DndFileChooser;
  /**
   * Obtains an element that lists the names of the files that have been uploaded.
   */


  DndFileChooser.prototype.getSelectedFileMessage = function getSelectedFileMessage () {
    // one file uploaded
    if (this.state.files.length === 1) {
      return React.createElement(Container, null, this.state.files[0].name);
    } // multiple files uploaded


    if (this.state.files.length > 1) {
      return React.createElement("ul", null, this.state.files.map(function (file, index) { return React.createElement("li", {
        key: index
      }, file.name); }));
    } // no files uploaded


    return React.createElement(Container, null, this.props.i18nNoFileSelectedMessage);
  };
  /**
   * Obtains an element that indicates the if the upload was successful.
   */


  DndFileChooser.prototype.getUploadMessage = function getUploadMessage () {
    if (this.props.i18nUploadSuccessMessage) {
      return React.createElement("span", {
        className: "dnd-file-chooser__uploadMessage"
      }, React.createElement(patternflyReact.Icon, {
        type: "pf",
        name: "ok"
      }), "\u00A0", this.props.i18nUploadSuccessMessage);
    }

    if (this.props.i18nUploadFailedMessage) {
      return React.createElement("span", {
        className: "dnd-file-chooser__uploadMessage"
      }, React.createElement(patternflyReact.Icon, {
        type: "pf",
        name: "error-circle-o"
      }), "\u00A0", this.props.i18nUploadFailedMessage);
    } // no message


    return React.createElement(Container, null);
  };
  /**
   * Callback for when one or more files were uploaded successfully.
   * @param acceptedFiles the files that have been uploaded
   */


  DndFileChooser.prototype.handleAcceptedFiles = function handleAcceptedFiles (acceptedFiles) {
    this.setState(Object.assign({}, this.state,
      {files: acceptedFiles}));
    this.props.onUploadAccepted(acceptedFiles); // notify callback
  };
  /**
   * Callback for when one or more files were rejected.
   * @param rejectedFiles the files that were rejected
   */


  DndFileChooser.prototype.handleRejectedFiles = function handleRejectedFiles (rejectedFiles) {
    var this$1 = this;

    var notifications = rejectedFiles.map(function (file) { return ({
      key: file.name,
      message: this$1.props.onUploadRejected(file.name),
      type: 'error'
    }); }); // If single file dropped then all files will be cleared. If multiple allowed, and multiple dropped,
    // and some are accepted and some are rejected, the accepted files will still be uploaded because the
    // handleAcceptedFiles is called after this method.

    this.setState(Object.assign({}, this.state,
      {files: [],
      notifications: this.state.notifications.concat( notifications)}));
  };

  DndFileChooser.prototype.render = function render () {
    var this$1 = this;

    return React.createElement(Dropzone, {
      accept: this.props.fileExtensions,
      disabled: this.props.disableDropzone,
      multiple: this.props.allowMultiple,
      onDropAccepted: this.handleAcceptedFiles,
      onDropRejected: this.handleRejectedFiles
    }, function (ref) {
      var getRootProps = ref.getRootProps;
      var getInputProps = ref.getInputProps;

      return React.createElement(Container, null, React.createElement(patternflyReact.Grid, Object.assign({
      disabled: this$1.props.disableDropzone,
      fluid: true,
      className: "dnd-file-chooser"
    }, getRootProps({
      refKey: 'dnd-file-chooser'
    })), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      className: "dnd-file-chooser__instructions",
      dangerouslySetInnerHTML: {
        __html: this$1.props.i18nInstructions
      }
    })), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, null, React.createElement("input", Object.assign({}, getInputProps())))), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      className: "dnd-file-chooser__selectedFileLabel",
      xs: 3
    }, this$1.props.i18nSelectedFileLabel), React.createElement(patternflyReact.Grid.Col, {
      className: "dnd-file-chooser__selectedFile",
      xs: 6
    }, this$1.getSelectedFileMessage()), React.createElement(patternflyReact.Grid.Col, {
      xs: 3
    }, this$1.getUploadMessage())), this$1.props.i18nHelpMessage ? React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      className: "dnd-file-chooser__helpText"
    }, this$1.props.i18nHelpMessage)) : null));
    });
  };

  return DndFileChooser;
}(React.Component)); // setup default prop values

DndFileChooser.defaultProps = {
  allowMultiple: false
};

var ListViewToolbar = /*@__PURE__*/(function (superclass) {
  function ListViewToolbar() {
    var this$1 = this;

    superclass.apply(this, arguments);

    this.renderInput = function () {
      var ref = this$1.props;
      var currentFilterType = ref.currentFilterType;
      var currentValue = ref.currentValue;

      if (!currentFilterType) {
        return null;
      }

      if (currentFilterType.filterType === 'select') {
        return React.createElement(patternflyReact.Filter.ValueSelector, {
          filterValues: currentFilterType.filterValues,
          currentValue: currentValue,
          onFilterValueSelected: this$1.props.onFilterValueSelected
        });
      } else {
        return React.createElement(patternflyReact.FormControl, {
          type: currentFilterType.filterType,
          value: currentValue,
          placeholder: currentFilterType.placeholder,
          onChange: this$1.props.onUpdateCurrentValue,
          onKeyPress: this$1.props.onValueKeyPress
        });
      }
    };
  }

  if ( superclass ) ListViewToolbar.__proto__ = superclass;
  ListViewToolbar.prototype = Object.create( superclass && superclass.prototype );
  ListViewToolbar.prototype.constructor = ListViewToolbar;

  ListViewToolbar.prototype.render = function render () {
    var this$1 = this;

    return React.createElement(patternflyReact.Toolbar, null, React.createElement(patternflyReact.Filter, null, React.createElement(patternflyReact.Filter.TypeSelector, {
      filterTypes: this.props.filterTypes,
      currentFilterType: this.props.currentFilterType.title,
      onFilterTypeSelected: this.props.onSelectFilterType
    }), this.renderInput()), React.createElement(patternflyReact.Sort, null, React.createElement(patternflyReact.Sort.TypeSelector, {
      sortTypes: this.props.sortTypes,
      currentSortType: this.props.currentSortType,
      onSortTypeSelected: this.props.onUpdateCurrentSortType
    }), React.createElement(patternflyReact.Sort.DirectionSelector, {
      isNumeric: false,
      isAscending: this.props.isSortAscending,
      onClick: this.props.onToggleCurrentSortDirection
    })), React.createElement(patternflyReact.Toolbar.RightContent, null, this.props.children), React.createElement(patternflyReact.Toolbar.Results, null, React.createElement("h5", null, this.props.i18nResultsCount), this.props.activeFilters && this.props.activeFilters.length > 0 && React.createElement(React.Fragment, null, React.createElement(patternflyReact.Filter.ActiveLabel, null, "Active Filters:"), React.createElement(patternflyReact.Filter.List, null, this.props.activeFilters.map(function (item, index) { return React.createElement(patternflyReact.Filter.Item, {
      key: index,
      onRemove: this$1.props.onRemoveFilter,
      filterData: item
    }, item.title, "=", item.value); })), React.createElement("a", {
      onClick: this.props.onClearFilters
    }, "Clear All Filters"))));
  };

  return ListViewToolbar;
}(React.Component));

var LogViewer = /*@__PURE__*/(function (superclass) {
  function LogViewer(props) {
    var this$1 = this;

    superclass.call(this, props);
    this.state = {
      count: 0,
      followScroll: true,
      previousCount: 0
    };

    this.renderRow = function (ref) {
      var index = ref.index;
      var style = ref.style;
      var parent = ref.parent;

      return React.createElement(reactVirtualized.CellMeasurer, {
      cache: this$1.cellMeasurerCache,
      columnIndex: 0,
      key: index,
      rowIndex: index,
      parent: parent
    }, React.createElement("div", {
      className: 'LogViewerRow',
      style: style
    }, React.createElement("span", {
      className: "LogViewerRow_number"
    }, index + 1), React.createElement("span", {
      className: "LogViewerRow_content"
    }, this$1.props.data[index])));
    };

    this.toggleFollow = function () {
      this$1.setState({
        followScroll: !this$1.state.followScroll
      });
    };

    this.cellMeasurerCache = new reactVirtualized.CellMeasurerCache({
      fixedWidth: true,
      minHeight: 20
    });
  }

  if ( superclass ) LogViewer.__proto__ = superclass;
  LogViewer.prototype = Object.create( superclass && superclass.prototype );
  LogViewer.prototype.constructor = LogViewer;

  LogViewer.getDerivedStateFromProps = function getDerivedStateFromProps (ref, state) {
    var data = ref.data;

    return Object.assign({}, state,
      {count: data.length,
      previousCount: state.followScroll ? state.count : state.previousCount});
  };

  LogViewer.prototype.render = function render () {
    var this$1 = this;

    return React.createElement(React.Fragment, null, React.createElement(patternflyReact.Row, {
      className: 'LogViewer'
    }, React.createElement(patternflyReact.Col, {
      sm: 12
    }, React.createElement(reactVirtualized.AutoSizer, {
      disableHeight: !!this.props.height,
      disableWidth: !!this.props.width
    }, function (ref) {
      var width = ref.width;
      var height = ref.height;

      return React.createElement(reactVirtualized.List, {
      deferredMeasurementCache: this$1.cellMeasurerCache,
      height: this$1.props.height || height,
      rowCount: this$1.props.data.length,
      rowHeight: this$1.cellMeasurerCache.rowHeight,
      rowRenderer: this$1.renderRow,
      scrollToLine: this$1.state.count,
      scrollToIndex: this$1.state.followScroll ? this$1.state.count - 1 : -1,
      width: this$1.props.width || width
    });
    }))), React.createElement(patternflyReact.Row, null, React.createElement(patternflyReact.Col, {
      sm: 12
    }, React.createElement(patternflyReact.Switch, {
      id: 'toggle-follow',
      labelText: 'Follow logs',
      onChange: this.toggleFollow,
      value: this.state.followScroll
    }))));
  };

  return LogViewer;
}(React.Component));
LogViewer.defaultProps = {
  height: 300
};

var Notifications = /*@__PURE__*/(function (superclass) {
  function Notifications () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Notifications.__proto__ = superclass;
  Notifications.prototype = Object.create( superclass && superclass.prototype );
  Notifications.prototype.constructor = Notifications;

  Notifications.prototype.render = function render () {
    var this$1 = this;

    return React.createElement(patternflyReact.ToastNotificationList, {
      className: "app__notificationList"
    }, this.props.notifications.map(function (notification) { return React.createElement(patternflyReact.TimedToastNotification, {
      key: notification.key,
      type: notification.type,
      persistent: false,
      onDismiss: this$1.props.removeNotificationAction.bind(this$1, notification),
      timerdelay: this$1.props.notificationTimerDelay
    }, React.createElement(Container, {
      dangerouslySetInnerHTML: {
        __html: notification.message
      }
    })); }));
  };

  return Notifications;
}(React.Component));

var UnrecoverableError = function (ref) {
  var i18nTitle = ref.i18nTitle;
  var i18nInfo = ref.i18nInfo;
  var i18nHelp = ref.i18nHelp;
  var i18nRefreshLabel = ref.i18nRefreshLabel;
  var i18nReportIssue = ref.i18nReportIssue;
  var i18nShowErrorInfoLabel = ref.i18nShowErrorInfoLabel;
  var error = ref.error;
  var errorInfo = ref.errorInfo;

  var ref$1 = React.useState(false);
  var showErrorInfo = ref$1[0];
  var setShowErrorInfo = ref$1[1];

  var toggleErrorInfo = function () { return setShowErrorInfo(!showErrorInfo); };

  return React.createElement(Container, null, React.createElement(patternflyReact.EmptyState, null, React.createElement(patternflyReact.EmptyState.Icon, {
    name: 'error-circle-o'
  }), React.createElement(patternflyReact.EmptyState.Title, null, i18nTitle), React.createElement(patternflyReact.EmptyState.Info, null, i18nInfo), React.createElement(patternflyReact.EmptyState.Help, null, i18nHelp), React.createElement(patternflyReact.EmptyState.Action, null, React.createElement(ButtonLink, {
    href: '.',
    as: 'primary',
    size: 'lg'
  }, i18nRefreshLabel)), React.createElement(patternflyReact.EmptyState.Action, {
    secondary: true
  }, error && React.createElement(ButtonLink, {
    onClick: toggleErrorInfo
  }, i18nShowErrorInfoLabel), React.createElement("a", {
    className: 'btn btn-default',
    href: 'https://github.com/syndesisio/syndesis/issues/new?template=simple.md&labels=cat/bug&title=Error%20report'
  }, i18nReportIssue)), showErrorInfo && error && React.createElement(patternflyReact.EmptyState.Help, {
    style: {
      textAlign: 'left'
    }
  }, React.createElement("p", null, error.name, ": ", error.message), errorInfo && React.createElement("pre", null, errorInfo.componentStack))));
};

var ConnectionsListView = /*@__PURE__*/(function (superclass) {
  function ConnectionsListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsListView.__proto__ = superclass;
  ConnectionsListView.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsListView.prototype.constructor = ConnectionsListView;

  ConnectionsListView.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(ButtonLink, {
      href: this.props.linkToConnectionCreate,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection))), React.createElement(Container, null, this.props.children));
  };

  return ConnectionsListView;
}(React.Component));

var ApiConnectorDetailCard = /*@__PURE__*/(function (superclass) {
  function ApiConnectorDetailCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorDetailCard.__proto__ = superclass;
  ApiConnectorDetailCard.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorDetailCard.prototype.constructor = ApiConnectorDetailCard;

  ApiConnectorDetailCard.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, {
      className: "api-connector-card"
    }, React.createElement(patternflyReact.CardBody, null, React.createElement("div", {
      className: 'api-connector-card__content'
    }, React.createElement("div", null, React.createElement("img", {
      className: "api-connector-card__icon",
      src: this.props.icon,
      alt: this.props.name
    })), React.createElement("div", {
      className: "api-connector__title h2",
      "data-testid": "api-connector-card-title"
    }, this.props.name), React.createElement("p", {
      className: "api-connector-card__description"
    }, this.props.description))));
  };

  return ApiConnectorDetailCard;
}(React.Component));

var ApiConnectorInfo = /*@__PURE__*/(function (superclass) {
  function ApiConnectorInfo () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorInfo.__proto__ = superclass;
  ApiConnectorInfo.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorInfo.prototype.constructor = ApiConnectorInfo;

  ApiConnectorInfo.prototype.render = function render () {
    return React.createElement("div", null, "ApiConnectorInfo content goes here");
  };

  return ApiConnectorInfo;
}(React.Component));

var ApiConnectorReview = /*@__PURE__*/(function (superclass) {
  function ApiConnectorReview () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorReview.__proto__ = superclass;
  ApiConnectorReview.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorReview.prototype.constructor = ApiConnectorReview;

  ApiConnectorReview.prototype.render = function render () {
    return React.createElement("div", null, "ApiConnectorReview content goes here");
  };

  return ApiConnectorReview;
}(React.Component));

var ApiConnectorDetail = /*@__PURE__*/(function (superclass) {
  function ApiConnectorDetail () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorDetail.__proto__ = superclass;
  ApiConnectorDetail.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorDetail.prototype.constructor = ApiConnectorDetail;

  ApiConnectorDetail.prototype.render = function render () {
    return React.createElement(patternflyReact.CardGrid, {
      fluid: true
    }, React.createElement(patternflyReact.CardGrid.Row, null, React.createElement(patternflyReact.CardGrid.Col, {
      xs: 12,
      md: 3
    }, React.createElement(ApiConnectorDetailCard, {
      description: this.props.description,
      icon: this.props.icon,
      name: this.props.name
    })), React.createElement(patternflyReact.CardGrid.Col, {
      xs: 12,
      md: 7
    }, React.createElement(patternflyReact.Card, null, React.createElement(patternflyReact.CardHeading, null, React.createElement(patternflyReact.CardTitle, null, this.props.name)), React.createElement(patternflyReact.CardBody, null, React.createElement(ApiConnectorInfo, null), React.createElement(ApiConnectorReview, null))))));
  };

  return ApiConnectorDetail;
}(React.Component));

var ApiConnectorListItem = /*@__PURE__*/(function (superclass) {
  function ApiConnectorListItem(props) {
    superclass.call(this, props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  if ( superclass ) ApiConnectorListItem.__proto__ = superclass;
  ApiConnectorListItem.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorListItem.prototype.constructor = ApiConnectorListItem;

  ApiConnectorListItem.prototype.getDeleteTooltip = function getDeleteTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ApiConnectorListItem.prototype.getDetailsTooltip = function getDetailsTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "detailsTip"
    }, this.props.i18nDetailsTip ? this.props.i18nDetailsTip : this.props.i18nDetails);
  };

  ApiConnectorListItem.prototype.handleDelete = function handleDelete () {
    this.props.onDelete(this.props.apiConnectorId);
  };

  ApiConnectorListItem.prototype.handleDetails = function handleDetails () {
    this.props.onDetails(this.props.apiConnectorId);
  };

  ApiConnectorListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListViewItem, {
      actions: React.createElement("div", {
        className: "form-group"
      }, React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getDetailsTooltip(),
        placement: "top"
      }, React.createElement(patternflyReact.Button, {
        bsStyle: "default",
        onClick: this.handleDetails
      }, this.props.i18nDetails)), React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "top"
      }, React.createElement(patternflyReact.Button, {
        bsStyle: "default",
        disabled: this.props.usedBy !== 0,
        onClick: this.handleDelete
      }, this.props.i18nDelete))),
      additionalInfo: [React.createElement(patternflyReact.ListViewInfoItem, {
        key: 1
      }, this.props.i18nUsedByMessage)],
      description: this.props.apiConnectorDescription ? this.props.apiConnectorDescription : '',
      heading: this.props.apiConnectorName,
      hideCloseIcon: true,
      leftContent: this.props.apiConnectorIcon ? React.createElement("div", {
        className: "blank-slate-pf-icon"
      }, React.createElement("img", {
        src: this.props.apiConnectorIcon,
        alt: this.props.apiConnectorName,
        width: 46
      })) : null,
      stacked: true
    });
  };

  return ApiConnectorListItem;
}(React.Component));

// tslint:disable react-unused-props-and-state
var ApiConnectorListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return React.createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, React.createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "175",
  rx: "5",
  ry: "5",
  width: "85",
  height: "15"
}));
};

var ApiConnectorListView = /*@__PURE__*/(function (superclass) {
  function ApiConnectorListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorListView.__proto__ = superclass;
  ApiConnectorListView.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorListView.prototype.constructor = ApiConnectorListView;

  ApiConnectorListView.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateConnectorTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateApiConnector,
      as: 'primary'
    }, this.props.i18nLinkCreateApiConnector)))), React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle), React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.props.i18nDescription
      }
    }), this.props.children ? React.createElement(patternflyReact.ListView, null, this.props.children) : React.createElement(patternflyReact.EmptyState, null, React.createElement(patternflyReact.EmptyState.Icon, null), React.createElement(patternflyReact.EmptyState.Title, null, this.props.i18nEmptyStateTitle), React.createElement(patternflyReact.EmptyState.Info, null, this.props.i18nEmptyStateInfo), React.createElement(patternflyReact.EmptyState.Action, null, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateConnectorTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateApiConnector,
      as: 'primary'
    }, this.props.i18nLinkCreateApiConnector))))));
  };

  ApiConnectorListView.prototype.getCreateConnectorTooltip = function getCreateConnectorTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "createTip"
    }, this.props.i18nLinkCreateApiConnectorTip ? this.props.i18nLinkCreateApiConnectorTip : this.props.i18nLinkCreateApiConnector);
  };

  return ApiConnectorListView;
}(React.Component));

var ExtensionDetail = /*@__PURE__*/(function (superclass) {
  function ExtensionDetail(props) {
    superclass.call(this, props);
    this.state = {
      showDeleteDialog: false
    };
    this.doCancel = this.doCancel.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
  }

  if ( superclass ) ExtensionDetail.__proto__ = superclass;
  ExtensionDetail.prototype = Object.create( superclass && superclass.prototype );
  ExtensionDetail.prototype.constructor = ExtensionDetail;

  ExtensionDetail.prototype.doCancel = function doCancel () {
    this.setState({
      showDeleteDialog: false
    });
  };

  ExtensionDetail.prototype.doDelete = function doDelete () {
    this.setState({
      showDeleteDialog: false
    }); // TODO: disable components while delete is processing

    this.props.onDelete();
  };

  ExtensionDetail.prototype.getDeleteTooltip = function getDeleteTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ExtensionDetail.prototype.getUpdateTooltip = function getUpdateTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "updateTip"
    }, this.props.i18nUpdateTip ? this.props.i18nUpdateTip : this.props.i18nUpdate);
  };

  ExtensionDetail.prototype.showDeleteDialog = function showDeleteDialog () {
    this.setState({
      showDeleteDialog: true
    });
  };

  ExtensionDetail.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(DeleteConfirmationDialog, {
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.doCancel,
      onDelete: this.doDelete
    }), React.createElement(patternflyReact.Card, {
      matchHeight: true
    }, React.createElement(patternflyReact.CardHeading, null, React.createElement(patternflyReact.CardTitle, null, React.createElement(patternflyReact.Row, null, React.createElement("h1", {
      className: 'col-sm-8 extension-detail__extensionTitle'
    }, this.props.extensionName, React.createElement("span", {
      className: 'extension-detail__extensionId'
    }, this.props.i18nIdMessage)), React.createElement("div", {
      className: "col-sm-4 text-right extension-detail__titleButtons"
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getUpdateTooltip(),
      placement: "top"
    }, React.createElement(patternflyReact.Button, {
      bsStyle: "primary",
      onClick: this.props.onUpdate
    }, this.props.i18nUpdate)), React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getDeleteTooltip(),
      placement: "top"
    }, React.createElement(patternflyReact.Button, {
      bsStyle: "default",
      disabled: this.props.extensionUses !== 0,
      onClick: this.showDeleteDialog
    }, this.props.i18nDelete)))))), React.createElement(patternflyReact.CardBody, null, React.createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nOverviewSectionTitle), this.props.overviewSection, React.createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nSupportsSectionTitle), this.props.supportsSection, React.createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nUsageSectionTitle), this.props.integrationsSection)));
  };

  return ExtensionDetail;
}(React.Component));

var ExtensionImportCard = /*@__PURE__*/(function (superclass) {
  function ExtensionImportCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionImportCard.__proto__ = superclass;
  ExtensionImportCard.prototype = Object.create( superclass && superclass.prototype );
  ExtensionImportCard.prototype.constructor = ExtensionImportCard;

  ExtensionImportCard.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, null, React.createElement(patternflyReact.Card.Heading, null, React.createElement(patternflyReact.Card.Title, null, this.props.i18nTitle)), React.createElement(patternflyReact.Card.Body, null, React.createElement("p", null, this.props.i18nImportInstructions), this.props.i18nAlertMessage ? React.createElement(patternflyReact.Alert, {
      type: 'error'
    }, React.createElement("span", null, this.props.i18nAlertMessage)) : null, React.createElement(DndFileChooser, {
      disableDropzone: this.props.dndDisabled,
      fileExtensions: '.jar',
      i18nHelpMessage: this.props.i18nDndHelpMessage,
      i18nInstructions: this.props.i18nDndInstructions,
      i18nNoFileSelectedMessage: this.props.i18nDndNoFileSelectedMessage,
      i18nSelectedFileLabel: this.props.i18nDndSelectedFileLabel,
      i18nUploadFailedMessage: this.props.i18nDndUploadFailedMessage,
      i18nUploadSuccessMessage: this.props.i18nDndUploadSuccessMessage,
      onUploadAccepted: this.props.onDndUploadAccepted,
      onUploadRejected: this.props.onDndUploadRejected
    })));
  };

  return ExtensionImportCard;
}(React.Component));

/**
 * A component that displays the extension import review information.
 */

var ExtensionImportReview = /*@__PURE__*/(function (superclass) {
  function ExtensionImportReview(props) {
    superclass.call(this, props);
    this.handleImport = this.handleImport.bind(this);
  }

  if ( superclass ) ExtensionImportReview.__proto__ = superclass;
  ExtensionImportReview.prototype = Object.create( superclass && superclass.prototype );
  ExtensionImportReview.prototype.constructor = ExtensionImportReview;

  ExtensionImportReview.prototype.getActions = function getActions () {
    var this$1 = this;

    if (!this.props.actions) {
      return React.createElement(patternflyReact.Grid.Col, null);
    }

    return React.createElement(Container, null, this.props.actions ? this.props.actions.map(function (action, index) { return index === 0 ? React.createElement(patternflyReact.Grid.Col, {
      key: 0,
      dangerouslySetInnerHTML: {
        __html: this$1.props.i18nActionText(action.name, action.description)
      }
    }) : React.createElement(patternflyReact.Grid.Row, {
      key: index
    }, React.createElement(patternflyReact.Grid.Col, {
      key: 0,
      xs: 2
    }), React.createElement(patternflyReact.Grid.Col, {
      key: 1,
      dangerouslySetInnerHTML: {
        __html: this$1.props.i18nActionText(action.name, action.description)
      }
    })); }) : null);
  };

  ExtensionImportReview.prototype.handleImport = function handleImport () {
    return this.props.onImport(this.props.extensionId);
  };

  ExtensionImportReview.prototype.render = function render () {
    return React.createElement(patternflyReact.Grid, {
      className: "extension-import-review__container"
    }, React.createElement(patternflyReact.Grid.Row, {
      className: "extension-import-review__title"
    }, this.props.i18nTitle), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nIdLabel), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionId)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nNameLabel), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionName)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nDescriptionLabel), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionDescription ? this.props.extensionDescription : null)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nTypeLabel), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.i18nExtensionTypeMessage)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nActionsLabel), this.getActions()), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xsOffset: 2
    }, React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, null, React.createElement(Container, {
      className: "extension-import-review__buttonBar"
    }, React.createElement(patternflyReact.Button, {
      bsStyle: "primary",
      onClick: this.handleImport
    }, this.props.i18nImport), React.createElement(ButtonLink, {
      className: "extension-import-review__cancelButton",
      href: this.props.cancelLink,
      as: 'default'
    }, this.props.i18nCancel)))))));
  };

  return ExtensionImportReview;
}(React.Component));

var ExtensionIntegrationsTable = /*@__PURE__*/(function (superclass) {
  function ExtensionIntegrationsTable () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionIntegrationsTable.__proto__ = superclass;
  ExtensionIntegrationsTable.prototype = Object.create( superclass && superclass.prototype );
  ExtensionIntegrationsTable.prototype.constructor = ExtensionIntegrationsTable;

  ExtensionIntegrationsTable.prototype.getColumns = function getColumns () {
    var this$1 = this;

    var headerFormat = function (value) { return React.createElement(patternflyReact.Table.Heading, null, value); };

    var clickableValueFormat = function (value, ref) {
      var rowData = ref.rowData;

      // rowData is an Integration type so 'name' property is what makes the integration unique
      var onClick = function () { return this$1.onIntegrationSelected(rowData.name); };

      return React.createElement(patternflyReact.Table.Cell, null, React.createElement("a", {
        href: "javascript:void(0)",
        onClick: onClick
      }, value));
    }; // Creates 2 columns:
    // 1. first column is integration name
    // 2. second column is optional integration description.


    return [{
      cell: {
        formatters: [clickableValueFormat]
      },
      header: {
        formatters: [headerFormat],
        label: this.props.i18nName
      },
      property: 'name'
    }, {
      cell: {
        formatters: [function (value) { return React.createElement(patternflyReact.Table.Cell, null, value); }]
      },
      header: {
        formatters: [headerFormat],
        label: this.props.i18nDescription
      },
      property: 'description'
    }];
  };

  ExtensionIntegrationsTable.prototype.onIntegrationSelected = function onIntegrationSelected (integrationId) {
    this.props.onSelectIntegration(integrationId);
  };

  ExtensionIntegrationsTable.prototype.render = function render () {
    return React.createElement("div", {
      className: "extension-group"
    }, React.createElement(patternflyReact.Row, null, React.createElement("div", {
      className: "col-xs-offset-1 col-xs-11"
    }, React.createElement("p", null, this.props.i18nUsageMessage), this.props.data.length !== 0 ? React.createElement(patternflyReact.Table.PfProvider, {
      striped: true,
      bordered: true,
      hover: true,
      columns: this.getColumns()
    }, React.createElement(patternflyReact.Table.Header, null), React.createElement(patternflyReact.Table.Body, {
      rows: this.props.data,
      rowKey: "name"
    })) : null)));
  };

  return ExtensionIntegrationsTable;
}(React.Component));

var ExtensionListItem = /*@__PURE__*/(function (superclass) {
  function ExtensionListItem(props) {
    superclass.call(this, props);
    this.state = {
      showDeleteDialog: false
    };
    this.doCancel = this.doCancel.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  if ( superclass ) ExtensionListItem.__proto__ = superclass;
  ExtensionListItem.prototype = Object.create( superclass && superclass.prototype );
  ExtensionListItem.prototype.constructor = ExtensionListItem;

  ExtensionListItem.prototype.doCancel = function doCancel () {
    this.setState({
      showDeleteDialog: false
    });
  };

  ExtensionListItem.prototype.doDelete = function doDelete () {
    this.setState({
      showDeleteDialog: false
    }); // TODO: disable components while delete is processing

    this.props.onDelete(this.props.extensionId);
  };

  ExtensionListItem.prototype.getDeleteTooltip = function getDeleteTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ExtensionListItem.prototype.getDetailsTooltip = function getDetailsTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "detailsTip"
    }, this.props.i18nDetailsTip ? this.props.i18nDetailsTip : this.props.i18nDetails);
  };

  ExtensionListItem.prototype.getUpdateTooltip = function getUpdateTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "updateTip"
    }, this.props.i18nUpdateTip ? this.props.i18nUpdateTip : this.props.i18nUpdate);
  };

  ExtensionListItem.prototype.handleUpdate = function handleUpdate () {
    if (this.props.extensionId) {
      this.props.onUpdate(this.props.extensionId);
    }
  };

  ExtensionListItem.prototype.showDeleteDialog = function showDeleteDialog () {
    this.setState({
      showDeleteDialog: true
    });
  };

  ExtensionListItem.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(DeleteConfirmationDialog // extensionId={this.props.extensionId}
    , {
      // extensionId={this.props.extensionId}
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.doCancel,
      onDelete: this.doDelete
    }), React.createElement(patternflyReact.ListViewItem, {
      actions: React.createElement("div", {
        className: "form-group"
      }, React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getDetailsTooltip(),
        placement: "top"
      }, React.createElement(ButtonLink, {
        href: this.props.detailsPageLink,
        as: 'primary'
      }, this.props.i18nDetails)), React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getUpdateTooltip(),
        placement: "top"
      }, React.createElement(patternflyReact.Button, {
        bsStyle: "default",
        onClick: this.handleUpdate
      }, this.props.i18nUpdate)), React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "top"
      }, React.createElement(patternflyReact.Button, {
        bsStyle: "default",
        disabled: this.props.usedBy !== 0,
        onClick: this.showDeleteDialog
      }, this.props.i18nDelete))),
      additionalInfo: [React.createElement(patternflyReact.ListViewInfoItem, {
        key: 1
      }, this.props.i18nExtensionType), React.createElement(patternflyReact.ListViewInfoItem, {
        key: 2
      }, this.props.i18nUsedByMessage)],
      description: this.props.extensionDescription ? this.props.extensionDescription : '',
      heading: this.props.extensionName,
      hideCloseIcon: true,
      leftContent: this.props.extensionIcon ? React.createElement("div", {
        className: "blank-slate-pf-icon"
      }, React.createElement("img", {
        src: this.props.extensionIcon,
        alt: this.props.extensionName,
        width: 46
      })) : null,
      stacked: true
    }));
  };

  return ExtensionListItem;
}(React.Component));

// tslint:disable react-unused-props-and-state
var ExtensionListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return React.createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, React.createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "175",
  rx: "5",
  ry: "5",
  width: "85",
  height: "15"
}));
};

var ExtensionListView = /*@__PURE__*/(function (superclass) {
  function ExtensionListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionListView.__proto__ = superclass;
  ExtensionListView.prototype = Object.create( superclass && superclass.prototype );
  ExtensionListView.prototype.constructor = ExtensionListView;

  ExtensionListView.prototype.getImportTooltip = function getImportTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "importTip"
    }, this.props.i18nLinkImportExtensionTip ? this.props.i18nLinkImportExtensionTip : this.props.i18nLinkImportExtension);
  };

  ExtensionListView.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getImportTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkImportExtension,
      as: 'primary'
    }, this.props.i18nLinkImportExtension)))), React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle), React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.props.i18nDescription
      }
    }), this.props.children ? React.createElement(patternflyReact.ListView, null, this.props.children) : React.createElement(patternflyReact.EmptyState, null, React.createElement(patternflyReact.EmptyState.Icon, null), React.createElement(patternflyReact.EmptyState.Title, null, this.props.i18nEmptyStateTitle), React.createElement(patternflyReact.EmptyState.Info, null, this.props.i18nEmptyStateInfo), React.createElement(patternflyReact.EmptyState.Action, null, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getImportTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkImportExtension,
      as: 'primary'
    }, this.props.i18nLinkImportExtension))))));
  };

  return ExtensionListView;
}(React.Component));

/**
 * A component that displays the overview section of the extension details page.
 */

var ExtensionOverview = /*@__PURE__*/(function (superclass) {
  function ExtensionOverview () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionOverview.__proto__ = superclass;
  ExtensionOverview.prototype = Object.create( superclass && superclass.prototype );
  ExtensionOverview.prototype.constructor = ExtensionOverview;

  ExtensionOverview.prototype.render = function render () {
    return React.createElement(patternflyReact.Grid, null, React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nName), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.extensionName)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nDescription), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.extensionDescription ? this.props.extensionDescription : null)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nType), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.i18nTypeMessage)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nLastUpdate), React.createElement(patternflyReact.Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.i18nLastUpdateDate ? this.props.i18nLastUpdateDate : null)));
  };

  return ExtensionOverview;
}(React.Component));

/**
 * A component that displays the support section of the extension details page.
 */

var ExtensionSupports = /*@__PURE__*/(function (superclass) {
  function ExtensionSupports () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionSupports.__proto__ = superclass;
  ExtensionSupports.prototype = Object.create( superclass && superclass.prototype );
  ExtensionSupports.prototype.constructor = ExtensionSupports;

  ExtensionSupports.prototype.render = function render () {
    return React.createElement("div", {
      className: "extension-group"
    }, this.props.extensionActions.length !== 0 ? React.createElement(patternflyReact.Row, null, React.createElement("div", {
      className: "col-xs-offset-1 col-xs-11"
    }, this.props.extensionActions.map(function (action, index) { return React.createElement("div", {
      key: index
    }, React.createElement("strong", null, action.name), " - ", action.description); }))) : null);
  };

  return ExtensionSupports;
}(React.Component));

var AggregatedMetricCard = /*@__PURE__*/(function (superclass) {
  function AggregatedMetricCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) AggregatedMetricCard.__proto__ = superclass;
  AggregatedMetricCard.prototype = Object.create( superclass && superclass.prototype );
  AggregatedMetricCard.prototype.constructor = AggregatedMetricCard;

  AggregatedMetricCard.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, React.createElement(patternflyReact.Card.Title, null, React.createElement(patternflyReact.AggregateStatusCount, null, React.createElement("span", {
      "data-testid": "aggregate-title"
    }, this.props.title))), React.createElement(patternflyReact.Card.Body, null, React.createElement(patternflyReact.AggregateStatusNotifications, null, React.createElement(patternflyReact.AggregateStatusNotification, null, React.createElement(patternflyReact.Icon, {
      type: "pf",
      name: "ok"
    }), React.createElement("span", {
      "data-testid": "aggregate-ok-count"
    }, this.props.ok), ' '), React.createElement(patternflyReact.AggregateStatusNotification, null, React.createElement(patternflyReact.Icon, {
      type: "pf",
      name: "error-circle-o"
    }), React.createElement("span", {
      "data-testid": "aggregate-error-count"
    }, this.props.error)))));
  };

  return AggregatedMetricCard;
}(React.PureComponent));

var ConnectionsMetric = /*@__PURE__*/(function (superclass) {
  function ConnectionsMetric () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsMetric.__proto__ = superclass;
  ConnectionsMetric.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsMetric.prototype.constructor = ConnectionsMetric;

  ConnectionsMetric.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, React.createElement(patternflyReact.Card.Title, null, this.props.i18nTitle));
  };

  return ConnectionsMetric;
}(React.PureComponent));

var Dashboard = /*@__PURE__*/(function (superclass) {
  function Dashboard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Dashboard.__proto__ = superclass;
  Dashboard.prototype = Object.create( superclass && superclass.prototype );
  Dashboard.prototype.constructor = Dashboard;

  Dashboard.prototype.render = function render () {
    return React.createElement(Container, null, React.createElement(patternflyReact.Grid, {
      fluid: true
    }, React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      sm: 12
    }, React.createElement("div", {
      className: 'Dashboard-header'
    }, React.createElement("h1", {
      className: 'Dashboard-header__title'
    }, this.props.i18nTitle), React.createElement("div", {
      className: "Dashboard-header__actions"
    }, React.createElement(ButtonLink, {
      href: this.props.linkToIntegrations
    }, this.props.i18nLinkToIntegrations), React.createElement(ButtonLink, {
      href: this.props.linkToIntegrationCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateIntegration)))))), React.createElement(patternflyReact.CardGrid, {
      fluid: true,
      matchHeight: true
    }, React.createElement(patternflyReact.CardGrid.Row, null, React.createElement(patternflyReact.CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.integrationsOverview), React.createElement(patternflyReact.CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.connectionsOverview), React.createElement(patternflyReact.CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.messagesOverview), React.createElement(patternflyReact.CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.uptimeOverview))), React.createElement(patternflyReact.Grid, {
      fluid: true
    }, React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      sm: 12
    }, this.props.topIntegrations)), React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      sm: 12,
      md: 6
    }, this.props.integrationBoard), React.createElement(patternflyReact.Grid.Col, {
      sm: 12,
      md: 6
    }, this.props.integrationUpdates))), React.createElement(patternflyReact.Grid, {
      fluid: true,
      style: {
        marginTop: '20px'
      }
    }, React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
      sm: 12
    }, React.createElement("div", {
      className: 'Dashboard-header'
    }, React.createElement("h1", {
      className: 'Dashboard-header__title'
    }, this.props.i18nConnections), React.createElement("div", {
      className: "Dashboard-header__actions"
    }, React.createElement(reactRouterDom.Link, {
      to: this.props.linkToConnections
    }, this.props.i18nLinkToConnections), React.createElement(ButtonLink, {
      href: this.props.linkToConnectionCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection)))))), React.createElement(patternflyReact.CardGrid, {
      fluid: true,
      matchHeight: true
    }, React.createElement(patternflyReact.CardGrid.Row, null, this.props.connections)));
  };

  return Dashboard;
}(React.PureComponent));

var IntegrationBoard = /*@__PURE__*/(function (superclass) {
  function IntegrationBoard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationBoard.__proto__ = superclass;
  IntegrationBoard.prototype = Object.create( superclass && superclass.prototype );
  IntegrationBoard.prototype.constructor = IntegrationBoard;

  IntegrationBoard.prototype.render = function render () {
    var data = {
      colors: {
        Pending: patternflyReact.patternfly.pfPaletteColors.black200,
        Published: patternflyReact.patternfly.pfPaletteColors.blue400,
        Stopped: patternflyReact.patternfly.pfPaletteColors.black300
      },
      columns: [[this.props.i18nIntegrationStateRunning, this.props.runningIntegrations], [this.props.i18nIntegrationStateStopped, this.props.stoppedIntegrations], [this.props.i18nIntegrationStatePending, this.props.pendingIntegrations]],
      type: 'donut'
    };
    return React.createElement(patternflyReact.Card, null, React.createElement(patternflyReact.Card.Heading, null, React.createElement(patternflyReact.Card.Title, null, this.props.i18nTitle)), React.createElement(patternflyReact.Card.Body, null, React.createElement(patternflyReact.DonutChart, {
      id: "integration-board",
      size: {
        height: 120
      },
      data: data,
      tooltip: {
        contents: patternflyReact.patternfly.pfDonutTooltipContents,
        show: true
      },
      title: {
        secondary: this.props.i18nIntegrations,
        type: this.props.i18nTotal
      },
      legend: {
        show: true,
        position: 'right'
      }
    })));
  };

  return IntegrationBoard;
}(React.PureComponent));

var RecentUpdatesCard = /*@__PURE__*/(function (superclass) {
  function RecentUpdatesCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) RecentUpdatesCard.__proto__ = superclass;
  RecentUpdatesCard.prototype = Object.create( superclass && superclass.prototype );
  RecentUpdatesCard.prototype.constructor = RecentUpdatesCard;

  RecentUpdatesCard.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, {
      accented: false
    }, React.createElement(patternflyReact.Card.Heading, null, React.createElement(patternflyReact.Card.Title, null, this.props.i18nTitle)), React.createElement(patternflyReact.Card.Body, null, this.props.children));
  };

  return RecentUpdatesCard;
}(React.Component));

// tslint:disable react-unused-props-and-state
var IntegrationActionSelectorCard = function (ref) {
  var content = ref.content;
  var title = ref.title;

  return React.createElement("div", {
  className: "card-pf"
}, React.createElement("div", {
  className: "card-pf-title"
}, title), React.createElement("div", {
  className: "card-pf-body"
}, content));
};

var IntegrationDetailDescription = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailDescription () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailDescription.__proto__ = superclass;
  IntegrationDetailDescription.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailDescription.prototype.constructor = IntegrationDetailDescription;

  IntegrationDetailDescription.prototype.render = function render () {
    return React.createElement("div", null, this.props.description ? React.createElement("p", null, this.props.description, "\u00A0", React.createElement(patternflyReact.Icon, {
      name: 'pencil'
    })) : null);
  };

  return IntegrationDetailDescription;
}(React.PureComponent));

var IntegrationDetailEditableName = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailEditableName () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailEditableName.__proto__ = superclass;
  IntegrationDetailEditableName.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailEditableName.prototype.constructor = IntegrationDetailEditableName;

  IntegrationDetailEditableName.prototype.render = function render () {
    return React.createElement(React.Fragment, null, this.props.name ? React.createElement(React.Fragment, null, React.createElement("h1", null, this.props.name, "\u00A0"), React.createElement(patternflyReact.Icon, {
      name: 'pencil'
    })) : null);
  };

  return IntegrationDetailEditableName;
}(React.PureComponent));

var IntegrationDetailHistoryListView = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailHistoryListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailHistoryListView.__proto__ = superclass;
  IntegrationDetailHistoryListView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailHistoryListView.prototype.constructor = IntegrationDetailHistoryListView;

  IntegrationDetailHistoryListView.prototype.render = function render () {
    return React.createElement(patternflyReact.Grid, {
      fluid: true,
      key: 1,
      className: "integration-detail-history-list-view"
    }, this.props.integrationIsDraft ? React.createElement(patternflyReact.Grid.Row, {
      className: "show-grid"
    }, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      md: 2,
      className: "integration-detail-history-list-view__description"
    }, this.props.i18nTextDraft, ":"), React.createElement(patternflyReact.Grid.Col, {
      xs: 10,
      md: 10
    }, React.createElement(patternflyReact.ListViewItem, {
      key: 1,
      heading: this.props.i18nTextDraft,
      actions: React.createElement(React.Fragment, null, React.createElement(patternflyReact.Button, null, this.props.i18nTextBtnPublish), React.createElement(patternflyReact.Button, null, this.props.i18nTextBtnEdit)),
      stacked: false
    }))) : null, this.props.children ? React.createElement(patternflyReact.Grid.Row, {
      className: "show-grid"
    }, React.createElement(patternflyReact.Grid.Col, {
      xs: 2,
      md: 2,
      className: "integration-detail-history-list-view__description"
    }, React.createElement("span", null, this.props.i18nTextHistory, ":")), React.createElement(patternflyReact.Grid.Col, {
      xs: 10,
      md: 10
    }, this.props.children ? React.createElement(patternflyReact.ListView, null, this.props.children) : null)) : null);
  };

  return IntegrationDetailHistoryListView;
}(React.Component));

var IntegrationDetailHistoryListViewItem = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailHistoryListViewItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailHistoryListViewItem.__proto__ = superclass;
  IntegrationDetailHistoryListViewItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailHistoryListViewItem.prototype.constructor = IntegrationDetailHistoryListViewItem;

  IntegrationDetailHistoryListViewItem.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(patternflyReact.ListViewItem, {
      key: 1,
      heading: React.createElement("span", null, React.createElement("span", null, this.props.i18nTextVersion, ":"), ' ', this.props.integrationVersion),
      actions: React.createElement(patternflyReact.DropdownKebab, {
        id: "historyactions",
        pullRight: true
      }, React.createElement(patternflyReact.MenuItem, null, this.props.i18nTextHistoryMenuReplaceDraft), React.createElement(patternflyReact.MenuItem, null, this.props.i18nTextHistoryMenuUnpublish)),
      additionalInfo: [React.createElement(patternflyReact.ListViewInfoItem, {
        key: 1
      }, this.props.i18nTextLastPublished, this.props.integrationUpdatedAt)],
      leftContent: React.createElement(patternflyReact.ListView.Icon, {
        type: "pf",
        name: "ok",
        size: "sm",
        className: "list-view-pf-icon-success"
      }),
      stacked: false
    }));
  };

  return IntegrationDetailHistoryListViewItem;
}(React.Component));

var IntegrationDetailInfo = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailInfo () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailInfo.__proto__ = superclass;
  IntegrationDetailInfo.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailInfo.prototype.constructor = IntegrationDetailInfo;

  IntegrationDetailInfo.prototype.render = function render () {
    return React.createElement("div", {
      className: "integration-detail-info"
    }, React.createElement(IntegrationDetailEditableName, {
      name: this.props.name
    }), this.props.version ? React.createElement(React.Fragment, null, React.createElement("span", {
      className: "pficon pficon-ok"
    }), "\u00A0Published version ", this.props.version) : 'Stopped');
  };

  return IntegrationDetailInfo;
}(React.PureComponent));

var IntegrationEditorActionsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorActionsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorActionsListItem.__proto__ = superclass;
  IntegrationEditorActionsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorActionsListItem.prototype.constructor = IntegrationEditorActionsListItem;

  IntegrationEditorActionsListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.integrationDescription,
      stacked: true
    });
  };

  return IntegrationEditorActionsListItem;
}(React.Component));

/**
 * A component to render a list of actions, to be used in the integration
 * editor.
 * @see [i18nTitle]{@link IIntegrationEditorChooseActionProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorChooseActionProps#i18nSubtitle}
 */

var IntegrationEditorChooseAction = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorChooseAction () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorChooseAction.__proto__ = superclass;
  IntegrationEditorChooseAction.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorChooseAction.prototype.constructor = IntegrationEditorChooseAction;

  IntegrationEditorChooseAction.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle, " - Choose Action"), React.createElement("p", null, this.props.i18nSubtitle)), React.createElement(Container, null, React.createElement(patternflyReact.ListView, null, this.props.children)));
  };

  return IntegrationEditorChooseAction;
}(React.Component));

/**
 * A component to render a list of connections, to be used in the integration
 * editor.
 *
 * @see [i18nTitle]{@link IIntegrationEditorChooseConnection#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorChooseConnection#i18nSubtitle}
 */

var IntegrationEditorChooseConnection = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorChooseConnection () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorChooseConnection.__proto__ = superclass;
  IntegrationEditorChooseConnection.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorChooseConnection.prototype.constructor = IntegrationEditorChooseConnection;

  IntegrationEditorChooseConnection.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle), React.createElement("p", null, this.props.i18nSubtitle)), React.createElement(Container, null, React.createElement(patternflyReact.ListView, null, this.props.children)));
  };

  return IntegrationEditorChooseConnection;
}(React.Component));

var IntegrationEditorConnectionsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorConnectionsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorConnectionsListItem.__proto__ = superclass;
  IntegrationEditorConnectionsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorConnectionsListItem.prototype.constructor = IntegrationEditorConnectionsListItem;

  IntegrationEditorConnectionsListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.integrationDescription,
      leftContent: this.props.icon,
      stacked: true
    });
  };

  return IntegrationEditorConnectionsListItem;
}(React.Component));

/**
 * A component to render a save form, to be used in the integration
 * editor. This does *not* build the form itself, form's field should be passed
 * as the `children` value.
 * @see [i18nTitle]{@link IIntegrationEditorFormProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorFormProps#i18nSubtitle}
 */

var IntegrationEditorForm = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorForm () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorForm.__proto__ = superclass;
  IntegrationEditorForm.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorForm.prototype.constructor = IntegrationEditorForm;

  IntegrationEditorForm.prototype.render = function render () {
    return React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle, " - Choose Action"), React.createElement("p", null, this.props.i18nSubtitle), React.createElement("form", {
      className: "form-horizontal required-pf",
      role: "form",
      onSubmit: this.props.handleSubmit
    }, React.createElement("div", {
      className: "row row-cards-pf"
    }, React.createElement("div", {
      className: "card-pf"
    }, this.props.i18nFormTitle && React.createElement("div", {
      className: "card-pf-title"
    }, this.props.i18nFormTitle), React.createElement("div", {
      className: "card-pf-body"
    }, React.createElement(Container, null, this.props.children))))));
  };

  return IntegrationEditorForm;
}(React.Component));

// tslint:disable react-unused-props-and-state
/**
 * Provides the layout for the integration editor. It uses the PatternFly Wizard
 * component under the hood.
 * The footer is pre-defined and follows the PF Wizard pattern, with
 * Cancel/Previous/Next buttons.
 *
 * @todo in the CSS we use hardcoded values for the heights of various
 * elements of the page to be able to size the element to take all the available
 * height and show the right scrollbars.
 * We should really find a smarter way to handle this.
 */

var IntegrationEditorLayout = function (ref) {
  var header = ref.header;
  var sidebar = ref.sidebar;
  var content = ref.content;
  var onCancel = ref.onCancel;
  var onBack = ref.onBack;
  var onNext = ref.onNext;
  var cancelHref = ref.cancelHref;
  var backHref = ref.backHref;
  var nextHref = ref.nextHref;
  var isNextLoading = ref.isNextLoading;
  var isNextDisabled = ref.isNextDisabled;
  var isLastStep = ref.isLastStep; if ( isLastStep === void 0 ) isLastStep = false;

  return React.createElement("div", {
    className: classnames('wizard-pf-body integration-editor-layout', {
      'has-footer': true
    })
  }, header, React.createElement("div", {
    className: "wizard-pf-row integration-editor-layout__body"
  }, React.createElement("div", {
    className: "wizard-pf-sidebar"
  }, sidebar), React.createElement("div", {
    className: 'wizard-pf-main cards-pf integration-editor-layout__contentWrapper'
  }, React.createElement("div", {
    className: "integration-editor-layout__content"
  }, content))), React.createElement("div", {
    className: "wizard-pf-footer integration-editor-layout__footer"
  }, React.createElement(ButtonLink, {
    onClick: onBack,
    href: backHref,
    className: 'wizard-pf-back'
  }, React.createElement("i", {
    className: "fa fa-angle-left"
  }), " Back"), React.createElement(ButtonLink, {
    onClick: onNext,
    href: nextHref,
    as: 'primary',
    className: 'wizard-pf-next',
    disabled: isNextLoading || isNextDisabled
  }, isNextLoading ? React.createElement(Loader, {
    size: 'xs',
    inline: true
  }) : null, isLastStep ? 'Done' : React.createElement(React.Fragment, null, "Next ", React.createElement("i", {
    className: "fa fa-angle-right"
  }))), React.createElement(ButtonLink, {
    onClick: onCancel,
    href: cancelHref,
    className: 'wizard-pf-cancel'
  }, "Cancel")));
};

/**
 * A component to render an alert for unconfigurable actions.
 * @see [i18nTitle]{@link IIntegrationEditorNothingToConfigureProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorNothingToConfigureProps#i18nSubtitle}
 * @see [i18nAlert]{@link IIntegrationEditorNothingToConfigureProps#i18nAlert}
 */

var IntegrationEditorNothingToConfigure = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorNothingToConfigure () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorNothingToConfigure.__proto__ = superclass;
  IntegrationEditorNothingToConfigure.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorNothingToConfigure.prototype.constructor = IntegrationEditorNothingToConfigure;

  IntegrationEditorNothingToConfigure.prototype.render = function render () {
    return React.createElement(Container, null, React.createElement("h1", null, this.props.i18nTitle, " - Choose Action"), React.createElement("p", null, this.props.i18nSubtitle), React.createElement(Container, null, React.createElement("div", {
      className: "row row-cards-pf"
    }, React.createElement("div", {
      className: "card-pf"
    }, React.createElement("div", {
      className: "card-pf-body"
    }, React.createElement(Container, null, React.createElement("p", {
      className: "alert alert-info"
    }, React.createElement("span", {
      className: "pficon pficon-info"
    }), this.props.i18nAlert)))))));
  };

  return IntegrationEditorNothingToConfigure;
}(React.Component));

var IntegrationEditorStepsList = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorStepsList () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorStepsList.__proto__ = superclass;
  IntegrationEditorStepsList.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorStepsList.prototype.constructor = IntegrationEditorStepsList;

  IntegrationEditorStepsList.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView, {
      style: {
        background: 'transparent'
      }
    }, this.props.children);
  };

  return IntegrationEditorStepsList;
}(React.Component));

var IntegrationEditorStepsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorStepsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorStepsListItem.__proto__ = superclass;
  IntegrationEditorStepsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorStepsListItem.prototype.constructor = IntegrationEditorStepsListItem;

  IntegrationEditorStepsListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView.Item, {
      actions: this.props.actions,
      heading: this.props.stepName,
      description: this.props.stepDescription,
      leftContent: this.props.icon,
      stacked: true,
      hideCloseIcon: true
    });
  };

  return IntegrationEditorStepsListItem;
}(React.Component));

var IntegrationFlowAddStep = /*@__PURE__*/(function (superclass) {
  function IntegrationFlowAddStep(props) {
    superclass.call(this, props);
    this.state = {
      forceTooltip: false,
      showTooltip: false
    };
    this.containerRef = React.createRef();
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  if ( superclass ) IntegrationFlowAddStep.__proto__ = superclass;
  IntegrationFlowAddStep.prototype = Object.create( superclass && superclass.prototype );
  IntegrationFlowAddStep.prototype.constructor = IntegrationFlowAddStep;

  IntegrationFlowAddStep.prototype.showTooltip = function showTooltip () {
    this.setState({
      showTooltip: true
    });
  };

  IntegrationFlowAddStep.prototype.hideTooltip = function hideTooltip () {
    this.setState({
      showTooltip: false
    });
  };

  IntegrationFlowAddStep.prototype.toggleTooltip = function toggleTooltip () {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  };

  IntegrationFlowAddStep.prototype.render = function render () {
    return React.createElement("div", {
      className: 'integration-flow-add-step',
      onMouseEnter: this.showTooltip,
      onMouseLeave: this.hideTooltip,
      onTouchStart: this.toggleTooltip
    }, React.createElement("div", {
      className: 'integration-flow-add-step__iconWrapper',
      ref: this.containerRef
    }, React.createElement("div", {
      className: 'integration-flow-add-step__icon'
    }, React.createElement("i", {
      className: "fa fa-plus-square"
    }))), this.props.showDetails && this.props.children, React.createElement(patternflyReact.Overlay, {
      placement: "top",
      rootClose: false,
      show: this.props.forceTooltip || this.state.showTooltip,
      target: this.containerRef.current,
      container: this
    }, React.createElement(patternflyReact.Popover, {
      id: 'integration-flow-add-step',
      className: 'integration-flow-add-step__links'
    }, this.props.addStepHref && this.props.i18nAddStep && React.createElement(reactRouterDom.Link, {
      to: this.props.addStepHref
    }, this.props.i18nAddStep), this.props.addConnectionHref && this.props.i18nAddConnection && React.createElement(reactRouterDom.Link, {
      to: this.props.addConnectionHref
    }, this.props.i18nAddConnection))));
  };

  return IntegrationFlowAddStep;
}(React.Component));
IntegrationFlowAddStep.defaultProps = {
  active: false
};

var IntegrationFlowStep = /*@__PURE__*/(function (superclass) {
  function IntegrationFlowStep () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationFlowStep.__proto__ = superclass;
  IntegrationFlowStep.prototype = Object.create( superclass && superclass.prototype );
  IntegrationFlowStep.prototype.constructor = IntegrationFlowStep;

  IntegrationFlowStep.prototype.render = function render () {
    var tooltip = React.createElement(patternflyReact.Tooltip, {
      id: 'integration-flow-step'
    }, this.props.i18nTooltip);
    var icon = React.createElement("div", {
      className: 'integration-flow-step__icon'
    }, this.props.icon);
    return React.createElement("div", {
      className: classnames('integration-flow-step', {
        'is-active': this.props.active,
        'is-expanded': this.props.showDetails
      })
    }, this.props.showDetails ? React.createElement(React.Fragment, null, React.createElement("div", {
      className: 'integration-flow-step__iconWrapper'
    }, icon), this.props.children) : React.createElement("div", {
      className: 'integration-flow-step__iconWrapper'
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: tooltip,
      placement: "right",
      trigger: ['hover', 'focus'],
      rootClose: false
    }, icon)));
  };

  return IntegrationFlowStep;
}(React.Component));
IntegrationFlowStep.defaultProps = {
  active: false
};

var Title = function (ref) {
  var children = ref.children;

  return React.createElement("div", {
  className: 'integration-flow-step-details__title'
}, children);
};

var GenericDescription = function (ref) {
  var children = ref.children;

  return React.createElement("div", {
  className: 'integration-flow-step-details__body'
}, children);
};

var StepOverview = function (ref) {
  var nameI18nLabel = ref.nameI18nLabel;
  var name = ref.name;
  var actionI18nLabel = ref.actionI18nLabel;
  var action = ref.action;
  var dataTypeI18nLabel = ref.dataTypeI18nLabel;
  var dataType = ref.dataType;

  return React.createElement("div", {
  className: 'integration-flow-step-details__body'
}, React.createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, React.createElement("dt", null, nameI18nLabel), React.createElement("dd", null, name)), React.createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, React.createElement("dt", null, actionI18nLabel), React.createElement("dd", null, action)), React.createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, React.createElement("dt", null, dataTypeI18nLabel), React.createElement("dd", null, dataType)));
};
/**
 * A render prop component that provides the right components than can be used
 * inside a step element of the integration editor sidebar.
 */


var IntegrationFlowStepDetails = /*@__PURE__*/(function (superclass) {
  function IntegrationFlowStepDetails () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationFlowStepDetails.__proto__ = superclass;
  IntegrationFlowStepDetails.prototype = Object.create( superclass && superclass.prototype );
  IntegrationFlowStepDetails.prototype.constructor = IntegrationFlowStepDetails;

  IntegrationFlowStepDetails.prototype.render = function render () {
    return React.createElement("div", {
      className: classnames('integration-flow-step-details', {
        'is-active': this.props.active
      })
    }, this.props.children({
      GenericDescription: GenericDescription,
      StepOverview: StepOverview,
      Title: Title
    }));
  };

  return IntegrationFlowStepDetails;
}(React.Component));
IntegrationFlowStepDetails.defaultProps = {
  active: false
};

// tslint:disable react-unused-props-and-state
/**
 * A component to show an unconfigured (or being configured) step in the
 * sidebar of the integration editor.
 *
 * @see [icon]{@link IIntegrationFlowStepProps#icon}
 * @see [active]{@link IIntegrationFlowStepProps#active}
 * @see [i18nTitle]{@link IIntegrationFlowStepGenericProps#i18nTitle}
 * @see [i18nTooltip]{@link IIntegrationFlowStepProps#i18nTooltip}
 * @see [showDetails]{@link IIntegrationFlowStepProps#showDetails}
 * @see [description]{@link IIntegrationFlowStepGenericProps#description}
 * @see [href]{@link IIntegrationFlowStepProps#href}
 */

var IntegrationFlowStepGeneric = function (ref) {
  var icon = ref.icon;
  var active = ref.active; if ( active === void 0 ) active = false;
  var i18nTitle = ref.i18nTitle;
  var i18nTooltip = ref.i18nTooltip;
  var showDetails = ref.showDetails;
  var description = ref.description;

  return React.createElement(IntegrationFlowStep, {
  icon: icon,
  active: active,
  i18nTooltip: i18nTooltip,
  showDetails: showDetails
}, React.createElement(IntegrationFlowStepDetails, {
  active: active
}, function (ref) {
  var Title = ref.Title;
  var GenericDescription = ref.GenericDescription;

  return React.createElement(React.Fragment, null, React.createElement(Title, null, i18nTitle), React.createElement(GenericDescription, null, description));
  }));
};

// tslint:disable react-unused-props-and-state
/**
 * A component to show an already configured step in the sidebar of the
 * integration editor.
 *
 * @see [i18nTitle]{@link IIntegrationFlowStepWithOverviewProps#i18nTitle}
 * @see [i18nTooltip]{@link IIntegrationFlowStepProps#i18nTooltip}
 * @see [icon]{@link IIntegrationFlowStepProps#icon}
 * @see [active]{@link IIntegrationFlowStepProps#active}
 * @see [showDetails]{@link IIntegrationFlowStepProps#showDetails}
 * @see [name]{@link IIntegrationFlowStepWithOverviewProps#name}
 * @see [action]{@link IIntegrationFlowStepWithOverviewProps#action}
 * @see [dataType]{@link IIntegrationFlowStepWithOverviewProps#dataType}
 * @constructor
 */

var IntegrationFlowStepWithOverview = function (ref) {
  var i18nTitle = ref.i18nTitle;
  var i18nTooltip = ref.i18nTooltip;
  var icon = ref.icon;
  var active = ref.active; if ( active === void 0 ) active = false;
  var showDetails = ref.showDetails;
  var name = ref.name;
  var action = ref.action;
  var dataType = ref.dataType;

  return React.createElement(IntegrationFlowStep, {
  icon: icon,
  active: active,
  i18nTooltip: i18nTooltip,
  showDetails: showDetails
}, React.createElement(IntegrationFlowStepDetails, {
  active: active
}, function (ref) {
  var Title = ref.Title;
  var StepOverview = ref.StepOverview;

  return React.createElement(React.Fragment, null, React.createElement(Title, null, i18nTitle), React.createElement(StepOverview, {
  nameI18nLabel: 'Name:',
  name: name,
  actionI18nLabel: 'Action:',
  action: action,
  dataTypeI18nLabel: 'Data Type:',
  dataType: dataType
}));
  }));
};

// tslint:disable react-unused-props-and-state
var IntegrationIcon = function (ref) {
  var startConnectionIcon = ref.startConnectionIcon;
  var finishConnectionIcon = ref.finishConnectionIcon;

  return React.createElement("div", {
  className: 'integration-icon'
}, React.createElement("img", {
  src: startConnectionIcon,
  className: 'integration-icon__icon'
}), React.createElement("i", {
  className: "fa fa-angle-right integration-icon__divider"
}), React.createElement("img", {
  src: finishConnectionIcon,
  className: 'integration-icon__icon'
}));
};

var IntegrationProgress = /*@__PURE__*/(function (superclass) {
  function IntegrationProgress () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationProgress.__proto__ = superclass;
  IntegrationProgress.prototype = Object.create( superclass && superclass.prototype );
  IntegrationProgress.prototype.constructor = IntegrationProgress;

  IntegrationProgress.prototype.render = function render () {
    return React.createElement("div", {
      className: "integration-progress"
    }, React.createElement("div", null, React.createElement("i", {
      "data-testid": "integration-progress-value"
    }, this.props.value, " ( ", this.props.currentStep, " /", ' ', this.props.totalSteps, " )"), this.props.logUrl && React.createElement("span", {
      "data-testid": "deployment-log-link",
      className: "pull-right"
    }, React.createElement("a", {
      target: "_blank",
      href: this.props.logUrl
    }, this.props.i18nLogUrlText, " ", React.createElement(patternflyReact.Icon, {
      name: 'external-link'
    })))), React.createElement(patternflyReact.ProgressBar, {
      now: this.props.currentStep,
      max: this.props.totalSteps,
      style: {
        height: 6
      }
    }));
  };

  return IntegrationProgress;
}(React.PureComponent));

// Integration states
var PUBLISHED = 'Published';
var UNPUBLISHED = 'Unpublished';
var PENDING = 'Pending';
var ERROR = 'Error'; // Detailed state log link types

var IntegrationStatus = /*@__PURE__*/(function (superclass) {
  function IntegrationStatus () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationStatus.__proto__ = superclass;
  IntegrationStatus.prototype = Object.create( superclass && superclass.prototype );
  IntegrationStatus.prototype.constructor = IntegrationStatus;

  IntegrationStatus.prototype.render = function render () {
    var labelType = this.props.currentState === ERROR ? 'danger' : this.props.currentState === PUBLISHED || this.props.currentState === PENDING ? 'primary' : 'default';
    var label = PENDING; // it's a parachute

    switch (this.props.currentState) {
      case PUBLISHED:
        label = this.props.i18nPublished;
        break;

      case UNPUBLISHED:
        label = this.props.i18nUnpublished;
        break;

      case ERROR:
        label = this.props.i18nError;
        break;
    }

    return React.createElement(patternflyReact.Label, {
      type: labelType
    }, label);
  };

  return IntegrationStatus;
}(React.Component));

var IntegrationStatusDetail = /*@__PURE__*/(function (superclass) {
  function IntegrationStatusDetail () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationStatusDetail.__proto__ = superclass;
  IntegrationStatusDetail.prototype = Object.create( superclass && superclass.prototype );
  IntegrationStatusDetail.prototype.constructor = IntegrationStatusDetail;

  IntegrationStatusDetail.prototype.render = function render () {
    var fallbackText = this.props.i18nProgressPending;

    switch (this.props.targetState) {
      case PUBLISHED:
        fallbackText = this.props.i18nProgressStarting;
        break;

      case UNPUBLISHED:
        fallbackText = this.props.i18nProgressStopping;
        break;
    }

    return React.createElement("div", {
      "data-testid": "integration-status-detail",
      className: 'integration-status-detail'
    }, this.props.value && this.props.currentStep && this.props.totalSteps ? React.createElement(IntegrationProgress, {
      currentStep: this.props.currentStep,
      totalSteps: this.props.totalSteps,
      value: this.props.value,
      logUrl: this.props.logUrl,
      i18nLogUrlText: this.props.i18nLogUrlText
    }) : React.createElement(React.Fragment, null, React.createElement(patternflyReact.Spinner, {
      loading: true,
      inline: true
    }), fallbackText));
  };

  return IntegrationStatusDetail;
}(React.Component));

var IntegrationStepsHorizontalView = /*@__PURE__*/(function (superclass) {
  function IntegrationStepsHorizontalView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationStepsHorizontalView.__proto__ = superclass;
  IntegrationStepsHorizontalView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationStepsHorizontalView.prototype.constructor = IntegrationStepsHorizontalView;

  IntegrationStepsHorizontalView.prototype.render = function render () {
    return React.createElement("div", {
      className: "integration-steps-horizontal-view"
    }, React.createElement(patternflyReact.Grid, {
      fluid: true,
      xs: 4
    }, React.createElement(patternflyReact.Grid.Row, {
      className: "show-grid"
    }, React.createElement(patternflyReact.Grid.Col, {
      sm: 6,
      md: 4
    }, this.props.steps && this.props.steps[0] ? React.createElement(React.Fragment, null, React.createElement(patternflyReact.ListViewIcon, {
      name: 'cube',
      className: "step-icon"
    }), React.createElement("span", null, React.createElement("p", null, this.props.steps[0].name))) : null), this.props.steps && this.props.steps.slice(1).map(function (opt, index) { return React.createElement("div", {
      key: index
    }, React.createElement(patternflyReact.Grid.Col, {
      sm: 6,
      md: 4
    }, React.createElement(patternflyReact.Icon, {
      name: 'angle-right',
      className: "step-arrow"
    })), React.createElement(patternflyReact.Grid.Col, {
      xsHidden: true,
      md: 4
    }, React.createElement("span", null, React.createElement(patternflyReact.Icon, {
      name: 'cube',
      className: "step-icon"
    }), React.createElement("p", {
      key: index
    }, opt.name)))); }))));
  };

  return IntegrationStepsHorizontalView;
}(React.Component));

/**
 * A component to render an expandable container meant to be used to show an
 * integration's steps.
 * @see [children]{@link IIntegrationVerticalFlowProps#children}
 */

var IntegrationVerticalFlow = /*@__PURE__*/(function (superclass) {
  function IntegrationVerticalFlow(props) {
    superclass.call(this, props);
    this.state = {
      expanded: localStorage.getItem('iec-vertical-flow-expanded') === 'y'
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  if ( superclass ) IntegrationVerticalFlow.__proto__ = superclass;
  IntegrationVerticalFlow.prototype = Object.create( superclass && superclass.prototype );
  IntegrationVerticalFlow.prototype.constructor = IntegrationVerticalFlow;

  IntegrationVerticalFlow.prototype.toggleExpanded = function toggleExpanded () {
    var expanded = !this.state.expanded;
    localStorage.setItem('iec-vertical-flow-expanded', expanded ? 'y' : 'n');
    this.setState({
      expanded: expanded
    });
  };

  IntegrationVerticalFlow.prototype.render = function render () {
    return React.createElement("div", {
      className: classnames('integration-vertical-flow', {
        'is-expanded': this.state.expanded
      })
    }, React.createElement("div", {
      className: "integration-vertical-flow__body"
    }, this.props.children(this.state)), React.createElement("div", {
      className: "integration-vertical-flow__expand"
    }, React.createElement(ButtonLink, {
      onClick: this.toggleExpanded
    })));
  };

  return IntegrationVerticalFlow;
}(React.Component));
IntegrationVerticalFlow.defaultProps = {
  disabled: false
};

var IntegrationsList = /*@__PURE__*/(function (superclass) {
  function IntegrationsList () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsList.__proto__ = superclass;
  IntegrationsList.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsList.prototype.constructor = IntegrationsList;

  IntegrationsList.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView, null, this.props.children);
  };

  return IntegrationsList;
}(React.Component));

var IntegrationsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListItem.__proto__ = superclass;
  IntegrationsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListItem.prototype.constructor = IntegrationsListItem;

  IntegrationsListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.isConfigurationRequired ? React.createElement(React.Fragment, null, React.createElement(patternflyReact.Icon, {
        type: 'pf',
        name: 'warning-triangle-o'
      }), this.props.i18nConfigurationRequired) : '',
      additionalInfo: [React.createElement(patternflyReact.ListView.InfoItem, {
        key: 1
      }, this.props.currentState === 'Pending' ? React.createElement(IntegrationStatusDetail, {
        targetState: this.props.targetState,
        value: this.props.monitoringValue,
        currentStep: this.props.monitoringCurrentStep,
        totalSteps: this.props.monitoringTotalSteps,
        logUrl: this.props.monitoringLogUrl,
        i18nProgressPending: this.props.i18nProgressPending,
        i18nProgressStarting: this.props.i18nProgressStarting,
        i18nProgressStopping: this.props.i18nProgressStopping,
        i18nLogUrlText: this.props.i18nLogUrlText
      }) : React.createElement(IntegrationStatus, {
        currentState: this.props.currentState,
        i18nPublished: this.props.i18nPublished,
        i18nUnpublished: this.props.i18nUnpublished,
        i18nError: this.props.i18nError
      }))],
      leftContent: React.createElement(IntegrationIcon, {
        startConnectionIcon: this.props.startConnectionIcon,
        finishConnectionIcon: this.props.finishConnectionIcon
      }),
      stacked: true
    });
  };

  return IntegrationsListItem;
}(React.Component));

var IntegrationsListItemActions = /*@__PURE__*/(function (superclass) {
  function IntegrationsListItemActions () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListItemActions.__proto__ = superclass;
  IntegrationsListItemActions.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListItemActions.prototype.constructor = IntegrationsListItemActions;

  IntegrationsListItemActions.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ButtonLink, {
      href: '#todo'
    }, "View"), React.createElement(patternflyReact.DropdownKebab, {
      id: ("integration-" + (this.props.integrationId) + "-action-menu"),
      pullRight: true
    }, this.props.actions.map(function (a, idx) { return React.createElement("li", {
      role: 'presentation',
      key: idx
    }, a.href ? React.createElement(reactRouterDom.Link, {
      to: a.href,
      onClick: a.onClick,
      role: 'menuitem',
      tabIndex: idx + 1
    }, a.label) : React.createElement("a", {
      href: 'javascript:void(0)',
      onClick: a.onClick,
      role: 'menuitem',
      tabIndex: idx + 1
    }, a.label)); })));
  };

  return IntegrationsListItemActions;
}(React.Component));

var IntegrationsListItemUnreadable = function (ref) {
  var integrationName = ref.integrationName;
  var i18nDescription = ref.i18nDescription;
  var rawObject = ref.rawObject;

  var onClick = function () { return window.alert(rawObject); };

  return React.createElement(patternflyReact.ListView.Item, {
    heading: integrationName,
    actions: React.createElement(ButtonLink, {
      onClick: onClick
    }, "Integration JSON"),
    description: i18nDescription,
    stacked: true
  });
};

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var ItemSkeleton = function () { return React.createElement(ContentLoader, {
  height: 80,
  width: 500,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: {
    height: 80,
    width: '100%'
  }
}, React.createElement("circle", {
  cx: "35",
  cy: "40",
  r: "35"
}), React.createElement("circle", {
  cx: "115",
  cy: "40",
  r: "35"
}), React.createElement("rect", {
  x: "185",
  y: "20",
  rx: "5",
  ry: "5",
  width: 400 * getRandom(0.6, 1),
  height: "18"
}), React.createElement("rect", {
  x: "185",
  y: "55",
  rx: "5",
  ry: "5",
  width: 200 * getRandom(0.6, 1),
  height: "15"
})); };

var IntegrationsListSkeleton = /*@__PURE__*/(function (superclass) {
  function IntegrationsListSkeleton () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListSkeleton.__proto__ = superclass;
  IntegrationsListSkeleton.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListSkeleton.prototype.constructor = IntegrationsListSkeleton;

  IntegrationsListSkeleton.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, React.createElement("div", null, React.createElement(ItemSkeleton, null))), React.createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, React.createElement("div", null, React.createElement(ItemSkeleton, null))), React.createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, React.createElement("div", null, React.createElement(ItemSkeleton, null))));
  };

  return IntegrationsListSkeleton;
}(React.PureComponent));

var IntegrationsListView = /*@__PURE__*/(function (superclass) {
  function IntegrationsListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListView.__proto__ = superclass;
  IntegrationsListView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListView.prototype.constructor = IntegrationsListView;

  IntegrationsListView.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(ButtonLink, {
      href: this.props.linkToIntegrationImport
    }, this.props.i18nImport), React.createElement(ButtonLink, {
      href: this.props.linkToIntegrationCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection))), React.createElement(Container, null, this.props.children));
  };

  return IntegrationsListView;
}(React.Component));

var RecentUpdatesItem = function (ref) {
  var integrationName = ref.integrationName;
  var integrationCurrentState = ref.integrationCurrentState;
  var integrationDate = ref.integrationDate;
  var i18nError = ref.i18nError;
  var i18nPublished = ref.i18nPublished;
  var i18nUnpublished = ref.i18nUnpublished;

  return React.createElement(patternflyReact.Grid.Row, null, React.createElement(patternflyReact.Grid.Col, {
  sm: 5
}, integrationName), React.createElement(patternflyReact.Grid.Col, {
  sm: 3
}, React.createElement(IntegrationStatus, {
  currentState: integrationCurrentState,
  i18nError: i18nError,
  i18nPublished: i18nPublished,
  i18nUnpublished: i18nUnpublished
})), React.createElement(patternflyReact.Grid.Col, {
  sm: 4
}, new Date(integrationDate).toLocaleString()));
};

var RecentUpdatesSkeleton = function (props) { return React.createElement(ContentLoader, Object.assign({
  height: 150,
  width: 350,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), React.createElement("rect", {
  x: "20",
  y: "5",
  rx: "5",
  ry: "5",
  width: "100",
  height: "10"
}), React.createElement("rect", {
  x: "150",
  y: "5",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), React.createElement("rect", {
  x: "250",
  y: "5",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), React.createElement("rect", {
  x: "20",
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "10"
}), React.createElement("rect", {
  x: "150",
  y: "35",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), React.createElement("rect", {
  x: "250",
  y: "35",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), React.createElement("rect", {
  x: "20",
  y: "65",
  rx: "5",
  ry: "5",
  width: "95",
  height: "10"
}), React.createElement("rect", {
  x: "150",
  y: "65",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), React.createElement("rect", {
  x: "250",
  y: "65",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), React.createElement("rect", {
  x: "20",
  y: "95",
  rx: "5",
  ry: "5",
  width: "125",
  height: "10"
}), React.createElement("rect", {
  x: "150",
  y: "95",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), React.createElement("rect", {
  x: "250",
  y: "95",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), React.createElement("rect", {
  x: "20",
  y: "125",
  rx: "5",
  ry: "5",
  width: "65",
  height: "10"
}), React.createElement("rect", {
  x: "150",
  y: "125",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), React.createElement("rect", {
  x: "250",
  y: "125",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
})); };

var TopIntegrationsCard = /*@__PURE__*/(function (superclass) {
  function TopIntegrationsCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) TopIntegrationsCard.__proto__ = superclass;
  TopIntegrationsCard.prototype = Object.create( superclass && superclass.prototype );
  TopIntegrationsCard.prototype.constructor = TopIntegrationsCard;

  TopIntegrationsCard.prototype.render = function render () {
    return React.createElement(patternflyReact.Card, {
      accented: false,
      className: 'TopIntegrationsCard'
    }, React.createElement(patternflyReact.Card.Heading, null, React.createElement(patternflyReact.Card.DropdownButton, {
      id: "cardDropdownButton1",
      title: this.props.i18nLast30Days
    }, React.createElement(patternflyReact.MenuItem, {
      eventKey: "1",
      active: true
    }, this.props.i18nLast30Days), React.createElement(patternflyReact.MenuItem, {
      eventKey: "2"
    }, this.props.i18nLast60Days), React.createElement(patternflyReact.MenuItem, {
      eventKey: "3"
    }, this.props.i18nLast90Days)), React.createElement(patternflyReact.Card.Title, null, this.props.i18nTitle)), React.createElement(patternflyReact.Card.Body, null, this.props.children));
  };

  return TopIntegrationsCard;
}(React.Component));

var UptimeMetric = /*@__PURE__*/(function (superclass) {
  function UptimeMetric () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) UptimeMetric.__proto__ = superclass;
  UptimeMetric.prototype = Object.create( superclass && superclass.prototype );
  UptimeMetric.prototype.constructor = UptimeMetric;

  UptimeMetric.prototype.render = function render () {
    var startAsDate = new Date(this.props.start);
    var startAsHuman = startAsDate.toLocaleString();
    return React.createElement(patternflyReact.Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, React.createElement(patternflyReact.Card.Title, {
      className: 'text-left'
    }, React.createElement("small", {
      className: 'pull-right'
    }, "since ", startAsHuman), React.createElement("div", null, this.props.i18nTitle)), React.createElement(patternflyReact.Card.Body, null, "TODO"));
  };

  return UptimeMetric;
}(React.PureComponent));

var ViewListItem = /*@__PURE__*/(function (superclass) {
  function ViewListItem() {
    var this$1 = this;

    superclass.apply(this, arguments);

    this.handleEdit = function () {
      if (this$1.props.viewName) {
        this$1.props.onEdit(this$1.props.viewName);
      }
    };

    this.handleDelete = function () {
      if (this$1.props.viewName) {
        this$1.props.onDelete(this$1.props.viewName);
      }
    };
  }

  if ( superclass ) ViewListItem.__proto__ = superclass;
  ViewListItem.prototype = Object.create( superclass && superclass.prototype );
  ViewListItem.prototype.constructor = ViewListItem;

  ViewListItem.prototype.render = function render () {
    return React.createElement(patternflyReact.ListViewItem, {
      actions: React.createElement("div", {
        className: "form-group"
      }, React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getEditTooltip(),
        placement: "top"
      }, React.createElement(patternflyReact.Button, {
        bsStyle: "default",
        onClick: this.handleEdit
      }, this.props.i18nEdit)), React.createElement(patternflyReact.DropdownKebab, {
        id: ("view-" + (this.props.viewName) + "-action-menu"),
        pullRight: true
      }, React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "left"
      }, React.createElement(patternflyReact.MenuItem, {
        onClick: this.handleDelete
      }, "Delete")))),
      heading: this.props.viewName,
      description: this.props.viewDescription ? this.props.viewDescription : '',
      hideCloseIcon: true,
      leftContent: this.props.viewIcon ? React.createElement("div", {
        className: "blank-slate-pf-icon"
      }, React.createElement("img", {
        src: this.props.viewIcon,
        alt: this.props.viewName,
        width: 46
      })) : React.createElement(patternflyReact.ListViewIcon, {
        name: 'cube'
      }),
      stacked: false
    });
  };

  ViewListItem.prototype.getDeleteTooltip = function getDeleteTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ViewListItem.prototype.getEditTooltip = function getEditTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "editTip"
    }, this.props.i18nEditTip ? this.props.i18nEditTip : this.props.i18nEdit);
  };

  return ViewListItem;
}(React.Component));

var ViewList = /*@__PURE__*/(function (superclass) {
  function ViewList(props) {
    var this$1 = this;

    superclass.call(this, props);

    this.handleImportView = function () {
      this$1.props.onImportView('');
    };
  }

  if ( superclass ) ViewList.__proto__ = superclass;
  ViewList.prototype = Object.create( superclass && superclass.prototype );
  ViewList.prototype.constructor = ViewList;

  ViewList.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getImportViewTooltip(),
      placement: "top"
    }, React.createElement(patternflyReact.Button, {
      bsStyle: "default",
      to: this.props.i18nImportView,
      onClick: this.handleImportView
    }, this.props.i18nImportView)), React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateViewTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nCreateView)))), this.props.hasListData ? React.createElement(patternflyReact.ListView, null, this.props.children) : React.createElement(patternflyReact.EmptyState, null, React.createElement(patternflyReact.EmptyState.Icon, null), React.createElement(patternflyReact.EmptyState.Title, null, this.props.i18nEmptyStateTitle), React.createElement(patternflyReact.EmptyState.Info, null, this.props.i18nEmptyStateInfo), React.createElement(patternflyReact.EmptyState.Action, null, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateViewTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nCreateView)))));
  };

  ViewList.prototype.getCreateViewTooltip = function getCreateViewTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "createTip"
    }, this.props.i18nCreateViewTip ? this.props.i18nCreateViewTip : this.props.i18nCreateView);
  };

  ViewList.prototype.getImportViewTooltip = function getImportViewTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "importViewTip"
    }, this.props.i18nImportViewTip ? this.props.i18nImportViewTip : this.props.i18nImportView);
  };

  return ViewList;
}(React.Component));

// tslint:disable react-unused-props-and-state
var ViewListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return React.createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, React.createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "175",
  rx: "5",
  ry: "5",
  width: "85",
  height: "15"
}));
};

var NOTFOUND = 'NOTFOUND';
var SUBMITTED = 'SUBMITTED';
var CONFIGURING = 'CONFIGURING';
var BUILDING = 'BUILDING';
var DEPLOYING = 'DEPLOYING';
var RUNNING = 'RUNNING';
var FAILED = 'FAILED';
var CANCELLED = 'CANCELLED'; // Detailed state log link types

var VirtualizationPublishStatus = /*@__PURE__*/(function (superclass) {
  function VirtualizationPublishStatus () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) VirtualizationPublishStatus.__proto__ = superclass;
  VirtualizationPublishStatus.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationPublishStatus.prototype.constructor = VirtualizationPublishStatus;

  VirtualizationPublishStatus.prototype.render = function render () {
    var labelType = this.props.currentState === FAILED ? 'danger' : this.props.currentState === RUNNING ? 'primary' : 'default';
    var label = DEPLOYING; // default to deploying

    switch (this.props.currentState) {
      case RUNNING:
        label = this.props.i18nPublished;
        break;

      case CANCELLED:
      case NOTFOUND:
        label = this.props.i18nUnpublished;
        break;

      case FAILED:
        label = this.props.i18nError;
        break;

      case SUBMITTED:
      case CONFIGURING:
      case BUILDING:
        label = DEPLOYING;
        break;
    }

    return React.createElement(patternflyReact.Label, {
      type: labelType
    }, label);
  };

  return VirtualizationPublishStatus;
}(React.Component));

var VirtualizationPublishStatusDetail = /*@__PURE__*/(function (superclass) {
  function VirtualizationPublishStatusDetail () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) VirtualizationPublishStatusDetail.__proto__ = superclass;
  VirtualizationPublishStatusDetail.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationPublishStatusDetail.prototype.constructor = VirtualizationPublishStatusDetail;

  VirtualizationPublishStatusDetail.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(patternflyReact.Spinner, {
      loading: true,
      inline: true
    }), this.props.i18nPublishInProgress, this.props.logUrl && React.createElement("a", {
      target: "_blank",
      href: this.props.logUrl
    }, this.props.i18nLogUrlText, " ", React.createElement(patternflyReact.Icon, {
      name: 'external-link'
    })));
  };

  return VirtualizationPublishStatusDetail;
}(React.Component));

var VirtualizationListItem = /*@__PURE__*/(function (superclass) {
  function VirtualizationListItem(props) {
    superclass.call(this, props);
    this.state = {
      showDeleteDialog: false
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUnpublish = this.handleUnpublish.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.showDeleteDialog = this.showDeleteDialog.bind(this);
  }

  if ( superclass ) VirtualizationListItem.__proto__ = superclass;
  VirtualizationListItem.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationListItem.prototype.constructor = VirtualizationListItem;

  VirtualizationListItem.prototype.getEditTooltip = function getEditTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "detailsTip"
    }, this.props.i18nEditTip ? this.props.i18nEditTip : this.props.i18nEdit);
  };

  VirtualizationListItem.prototype.handleCancel = function handleCancel () {
    this.setState({
      showDeleteDialog: false
    });
  };

  VirtualizationListItem.prototype.handleDelete = function handleDelete () {
    this.setState({
      showDeleteDialog: false
    }); // TODO: disable components while delete is processing

    if (this.props.virtualizationName) {
      this.props.onDelete(this.props.virtualizationName);
    }
  };

  VirtualizationListItem.prototype.handleEdit = function handleEdit () {
    if (this.props.virtualizationName) {
      this.props.onEdit(this.props.virtualizationName);
    }
  };

  VirtualizationListItem.prototype.handleExport = function handleExport () {
    if (this.props.virtualizationName) {
      this.props.onExport(this.props.virtualizationName);
    }
  };

  VirtualizationListItem.prototype.handlePublish = function handlePublish () {
    if (this.props.virtualizationName) {
      this.props.onPublish(this.props.virtualizationName);
    }
  };

  VirtualizationListItem.prototype.handleUnpublish = function handleUnpublish () {
    if (this.props.serviceVdbName) {
      this.props.onUnpublish(this.props.serviceVdbName);
    }
  };

  VirtualizationListItem.prototype.showDeleteDialog = function showDeleteDialog () {
    this.setState({
      showDeleteDialog: true
    });
  };

  VirtualizationListItem.prototype.render = function render () {
    var isPublished = this.props.currentPublishedState === RUNNING ? true : false;
    var isInProgress = this.props.currentPublishedState === BUILDING || this.props.currentPublishedState === CONFIGURING || this.props.currentPublishedState === DEPLOYING || this.props.currentPublishedState === SUBMITTED ? true : false;
    return React.createElement(React.Fragment, null, React.createElement(DeleteConfirmationDialog, {
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete
    }), React.createElement(patternflyReact.ListViewItem, {
      actions: React.createElement("div", {
        className: "form-group"
      }, isInProgress ? React.createElement(VirtualizationPublishStatusDetail, {
        logUrl: this.props.publishLogUrl,
        i18nPublishInProgress: this.props.i18nPublishInProgress,
        i18nLogUrlText: this.props.i18nPublishLogUrlText
      }) : React.createElement(VirtualizationPublishStatus, {
        currentState: this.props.currentPublishedState,
        i18nPublished: this.props.i18nPublished,
        i18nUnpublished: this.props.i18nDraft,
        i18nError: this.props.i18nError
      }), React.createElement(patternflyReact.OverlayTrigger, {
        overlay: this.getEditTooltip(),
        placement: "top"
      }, React.createElement(ButtonLink, {
        href: this.props.detailsPageLink,
        as: 'primary'
      }, this.props.i18nEdit)), React.createElement(patternflyReact.DropdownKebab, {
        id: ("virtualization-" + (this.props.virtualizationName) + "-action-menu"),
        pullRight: true
      }, React.createElement(patternflyReact.MenuItem, {
        onClick: this.showDeleteDialog
      }, this.props.i18nDelete), React.createElement(patternflyReact.MenuItem, {
        onClick: this.handleExport
      }, this.props.i18nExport), React.createElement(patternflyReact.MenuItem, {
        onClick: isPublished ? this.handleUnpublish : this.handlePublish
      }, isPublished ? this.props.i18nUnpublish : this.props.i18nPublish))),
      heading: this.props.virtualizationName,
      description: this.props.virtualizationDescription ? this.props.virtualizationDescription : '',
      hideCloseIcon: true,
      leftContent: this.props.icon ? React.createElement("div", {
        className: "blank-slate-pf-icon"
      }, React.createElement("img", {
        src: this.props.icon,
        alt: this.props.virtualizationName,
        width: 46
      })) : React.createElement(patternflyReact.ListViewIcon, {
        name: 'database'
      }),
      stacked: true
    }, this.props.children ? React.createElement(patternflyReact.ListView, null, this.props.children) : null));
  };

  return VirtualizationListItem;
}(React.Component));

var VirtualizationList = /*@__PURE__*/(function (superclass) {
  function VirtualizationList(props) {
    superclass.call(this, props);
    this.handleImport = this.handleImport.bind(this);
  }

  if ( superclass ) VirtualizationList.__proto__ = superclass;
  VirtualizationList.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationList.prototype.constructor = VirtualizationList;

  VirtualizationList.prototype.getCreateVirtualizationTooltip = function getCreateVirtualizationTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "createTip"
    }, this.props.i18nLinkCreateVirtualizationTip ? this.props.i18nLinkCreateVirtualizationTip : this.props.i18nLinkCreateVirtualization);
  };

  VirtualizationList.prototype.getImportVirtualizationTooltip = function getImportVirtualizationTooltip () {
    return React.createElement(patternflyReact.Tooltip, {
      id: "importTip"
    }, this.props.i18nImportTip ? this.props.i18nImportTip : this.props.i18nImport);
  };

  VirtualizationList.prototype.handleImport = function handleImport () {
    this.props.onImport('');
  };

  VirtualizationList.prototype.render = function render () {
    return React.createElement(React.Fragment, null, React.createElement(Container, null, React.createElement("h2", null, this.props.i18nTitle), React.createElement("h3", null, this.props.i18nDescription)), React.createElement(ListViewToolbar, Object.assign({}, this.props), React.createElement("div", {
      className: "form-group"
    }, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getImportVirtualizationTooltip(),
      placement: "top"
    }, React.createElement(patternflyReact.Button, {
      bsStyle: "default",
      to: this.props.i18nImport,
      onClick: this.handleImport
    }, this.props.i18nImport)), React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateVirtualizationTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nLinkCreateVirtualization)))), this.props.hasListData ? React.createElement(patternflyReact.ListView, null, this.props.children) : React.createElement(patternflyReact.EmptyState, null, React.createElement(patternflyReact.EmptyState.Icon, null), React.createElement(patternflyReact.EmptyState.Title, null, this.props.i18nEmptyStateTitle), React.createElement(patternflyReact.EmptyState.Info, null, this.props.i18nEmptyStateInfo), React.createElement(patternflyReact.EmptyState.Action, null, React.createElement(patternflyReact.OverlayTrigger, {
      overlay: this.getCreateVirtualizationTooltip(),
      placement: "top"
    }, React.createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nLinkCreateVirtualization)))));
  };

  return VirtualizationList;
}(React.Component));

// tslint:disable react-unused-props-and-state
var VirtualizationListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return React.createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, React.createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), React.createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), React.createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), React.createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), React.createElement("rect", {
  x: width - 100,
  y: "175",
  rx: "5",
  ry: "5",
  width: "85",
  height: "15"
}));
};

exports.ConnectionCard = ConnectionCard;
exports.ConnectionsGrid = ConnectionsGrid;
exports.ConnectionsGridCell = ConnectionsGridCell;
exports.ConnectionSkeleton = ConnectionSkeleton;
exports.ConnectionsListView = ConnectionsListView;
exports.ApiConnectorDetail = ApiConnectorDetail;
exports.ApiConnectorDetailCard = ApiConnectorDetailCard;
exports.ApiConnectorInfo = ApiConnectorInfo;
exports.ApiConnectorReview = ApiConnectorReview;
exports.ApiConnectorListItem = ApiConnectorListItem;
exports.ApiConnectorListSkeleton = ApiConnectorListSkeleton;
exports.ApiConnectorListView = ApiConnectorListView;
exports.ExtensionDetail = ExtensionDetail;
exports.ExtensionImportCard = ExtensionImportCard;
exports.ExtensionImportReview = ExtensionImportReview;
exports.ExtensionIntegrationsTable = ExtensionIntegrationsTable;
exports.ExtensionListItem = ExtensionListItem;
exports.ExtensionListSkeleton = ExtensionListSkeleton;
exports.ExtensionListView = ExtensionListView;
exports.ExtensionOverview = ExtensionOverview;
exports.ExtensionSupports = ExtensionSupports;
exports.AggregatedMetricCard = AggregatedMetricCard;
exports.ConnectionsMetric = ConnectionsMetric;
exports.Dashboard = Dashboard;
exports.IntegrationBoard = IntegrationBoard;
exports.RecentUpdatesCard = RecentUpdatesCard;
exports.RecentUpdatesItem = RecentUpdatesItem;
exports.RecentUpdatesSkeleton = RecentUpdatesSkeleton;
exports.TopIntegrationsCard = TopIntegrationsCard;
exports.UptimeMetric = UptimeMetric;
exports.ViewListItem = ViewListItem;
exports.ViewList = ViewList;
exports.ViewListSkeleton = ViewListSkeleton;
exports.VirtualizationListItem = VirtualizationListItem;
exports.VirtualizationList = VirtualizationList;
exports.VirtualizationListSkeleton = VirtualizationListSkeleton;
exports.VirtualizationPublishStatus = VirtualizationPublishStatus;
exports.VirtualizationPublishStatusDetail = VirtualizationPublishStatusDetail;
exports.IntegrationActionSelectorCard = IntegrationActionSelectorCard;
exports.IntegrationDetailDescription = IntegrationDetailDescription;
exports.IntegrationDetailEditableName = IntegrationDetailEditableName;
exports.IntegrationDetailHistoryListView = IntegrationDetailHistoryListView;
exports.IntegrationDetailHistoryListViewItem = IntegrationDetailHistoryListViewItem;
exports.IntegrationDetailInfo = IntegrationDetailInfo;
exports.IntegrationEditorActionsListItem = IntegrationEditorActionsListItem;
exports.IntegrationEditorChooseAction = IntegrationEditorChooseAction;
exports.IntegrationEditorChooseConnection = IntegrationEditorChooseConnection;
exports.IntegrationEditorConnectionsListItem = IntegrationEditorConnectionsListItem;
exports.IntegrationEditorForm = IntegrationEditorForm;
exports.IntegrationEditorLayout = IntegrationEditorLayout;
exports.IntegrationEditorNothingToConfigure = IntegrationEditorNothingToConfigure;
exports.IntegrationEditorStepsList = IntegrationEditorStepsList;
exports.IntegrationEditorStepsListItem = IntegrationEditorStepsListItem;
exports.IntegrationFlowAddStep = IntegrationFlowAddStep;
exports.IntegrationFlowStep = IntegrationFlowStep;
exports.IntegrationFlowStepDetails = IntegrationFlowStepDetails;
exports.IntegrationFlowStepGeneric = IntegrationFlowStepGeneric;
exports.IntegrationFlowStepWithOverview = IntegrationFlowStepWithOverview;
exports.IntegrationIcon = IntegrationIcon;
exports.IntegrationProgress = IntegrationProgress;
exports.IntegrationStatus = IntegrationStatus;
exports.IntegrationStatusDetail = IntegrationStatusDetail;
exports.IntegrationStepsHorizontalView = IntegrationStepsHorizontalView;
exports.IntegrationVerticalFlow = IntegrationVerticalFlow;
exports.IntegrationsList = IntegrationsList;
exports.IntegrationsListItem = IntegrationsListItem;
exports.IntegrationsListItemActions = IntegrationsListItemActions;
exports.IntegrationsListItemUnreadable = IntegrationsListItemUnreadable;
exports.IntegrationsListSkeleton = IntegrationsListSkeleton;
exports.IntegrationsListView = IntegrationsListView;
exports.AppLayout = AppLayout;
exports.AppTopMenu = AppTopMenu;
exports.ButtonLink = ButtonLink;
exports.Breadcrumb = Breadcrumb;
exports.Container = Container;
exports.Loader = Loader;
exports.PfNavLink = PfNavLink;
exports.PfVerticalNavItem = PfVerticalNavItem;
exports.TabBar = TabBar;
exports.TabBarItem = TabBarItem;
exports.WizardStep = WizardStep;
exports.WizardSteps = WizardSteps;
exports.DeleteConfirmationDialog = DeleteConfirmationDialog;
exports.DndFileChooser = DndFileChooser;
exports.ListViewToolbar = ListViewToolbar;
exports.LogViewer = LogViewer;
exports.Notifications = Notifications;
exports.UnrecoverableError = UnrecoverableError;
//# sourceMappingURL=ui.js.map
