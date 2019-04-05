import { Route } from 'react-router';
import Dropzone from 'react-dropzone';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, CardGrid, EmptyState, Masthead, VerticalNav, Icon, Breadcrumb, Spinner, Nav, MessageDialog, Grid, Filter, FormControl, Sort, Toolbar, Col, Row, Switch, TimedToastNotification, ToastNotificationList, CardBody, CardHeading, CardTitle, Button, ListViewInfoItem, ListViewItem, OverlayTrigger, Tooltip, ListView, Alert, Table, AggregateStatusCount, AggregateStatusNotification, AggregateStatusNotifications, DonutChart, patternfly, DropdownKebab, MenuItem, Overlay, Popover, ProgressBar, Label, ListViewIcon } from 'patternfly-react';
import { createElement, PureComponent, Component, Fragment, createRef, Children, useState } from 'react';
import ContentLoader from 'react-content-loader';

var ConnectionCard = /*@__PURE__*/(function (superclass) {
  function ConnectionCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionCard.__proto__ = superclass;
  ConnectionCard.prototype = Object.create( superclass && superclass.prototype );
  ConnectionCard.prototype.constructor = ConnectionCard;

  ConnectionCard.prototype.render = function render () {
    return createElement(Link, {
      to: this.props.href,
      className: 'connection-card'
    }, createElement(Card, {
      matchHeight: true
    }, createElement(Card.Body, null, createElement("div", {
      className: 'connection-card__content'
    }, createElement("div", {
      className: "connection-card__icon"
    }, createElement("img", {
      src: this.props.icon,
      alt: this.props.name,
      width: 46
    })), createElement("div", {
      className: "connection-card__title h2",
      "data-testid": "connection-card-title"
    }, this.props.name), createElement("p", {
      className: "connection-card__description"
    }, this.props.description)))));
  };

  return ConnectionCard;
}(PureComponent));

var ConnectionsGrid = /*@__PURE__*/(function (superclass) {
  function ConnectionsGrid () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsGrid.__proto__ = superclass;
  ConnectionsGrid.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsGrid.prototype.constructor = ConnectionsGrid;

  ConnectionsGrid.prototype.render = function render () {
    return createElement(CardGrid, {
      fluid: true,
      matchHeight: true
    }, createElement(CardGrid.Row, null, this.props.children));
  };

  return ConnectionsGrid;
}(Component));

var ConnectionsGridCell = /*@__PURE__*/(function (superclass) {
  function ConnectionsGridCell () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsGridCell.__proto__ = superclass;
  ConnectionsGridCell.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsGridCell.prototype.constructor = ConnectionsGridCell;

  ConnectionsGridCell.prototype.render = function render () {
    return createElement(CardGrid.Col, {
      xs: 6,
      md: 3
    }, this.props.children);
  };

  return ConnectionsGridCell;
}(Component));

var ConnectionSkeleton = function (props) { return createElement(Card, {
  matchHeight: true
}, createElement(Card.Body, null, createElement(EmptyState, null, createElement(ContentLoader, Object.assign({
  height: 300,
  width: 200,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), createElement("circle", {
  cx: "100",
  cy: "50",
  r: "40"
}), createElement("rect", {
  x: "5",
  y: "125",
  rx: "5",
  ry: "5",
  width: "190",
  height: "30"
}), createElement("rect", {
  x: "25",
  y: "180",
  rx: "5",
  ry: "5",
  width: "150",
  height: "15"
}), createElement("rect", {
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
    return createElement(Fragment, null, createElement(VerticalNav, {
      navCollapsed: !this.props.showNavigation,
      onCollapse: this.props.onNavigationCollapse,
      onExpand: this.props.onNavigationExpand
    }, createElement(VerticalNav.Masthead, {
      iconImg: this.props.pictograph,
      titleImg: this.props.typogram,
      title: this.props.appTitle,
      href: this.props.logoHref
    }, createElement(Masthead.Collapse, null, this.props.appNav)), this.props.verticalNav), createElement("div", {
      className: "container-pf-nav-pf-vertical"
    }, this.props.children));
  };

  return AppLayout;
}(Component));

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

  return createElement(Masthead.Dropdown, {
  id: "app-user-dropdown",
  title: [createElement("span", {
    className: "dropdown-title",
    key: "dropdown-title"
  }, createElement(Icon, {
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
  return href ? createElement(Link, Object.assign({
    to: href,
    onClick: onClick,
    className: className
  }, props), children) : createElement("button", {
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

var Breadcrumb$1 = function (ref) {
  var children = ref.children;

  return createElement(Breadcrumb, {
  style: {
    background: '#fff',
    margin: 0,
    paddingLeft: '15px'
  }
}, Children.map(children, function (c, idx) { return createElement("li", {
  className: Children.count(children) - 1 === idx ? 'active' : '',
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

  return createElement("div", Object.assign({
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
    return createElement("div", {
      className: classnames('Loader', {
        'is-block': !this.props.inline,
        'is-inline': this.props.inline
      })
    }, createElement(Spinner, {
      loading: this.props.loading,
      size: this.props.size,
      inline: this.props.inline,
      inverse: this.props.inverse
    }));
  };

  return Loader;
}(PureComponent));
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
    return createElement("li", {
      className: className
    }, createElement(Link, Object.assign({
      style: style,
      to: to,
      children: label
    }, rest)), children);
  };

  return createElement(Route, {
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
    return createElement("li", {
      className: classnames('list-group-item', {
        active: isActive
      })
    }, createElement(Link, Object.assign({
      to: to,
      children: createElement(Fragment, null, createElement("span", {
        className: icon
      }), createElement("span", {
        className: "list-group-item-value"
      }, label), createElement("div", {
        className: "badge-container-pf"
      }))
    }, rest)), children);
  };

  return createElement(Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: NavLinkChildren
  });
}

PfVerticalNavItem.displayName = VerticalNav.Item.displayName;

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TabBar = function (ref) {
  var children = ref.children;
  var rest = objectWithoutProperties$4( ref, ["children"] );
  var props = rest;

  return createElement(Nav, Object.assign({
  bsClass: "nav nav-tabs nav-tabs-pf"
}, props), children);
};

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var TabBarItem = function (ref) {
  var label = ref.label;
  var to = ref.to;
  var rest = objectWithoutProperties$5( ref, ["label", "to"] );
  var props = rest;

  return createElement(PfNavLink, Object.assign({
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

  return createElement("li", {
  className: ((isAlt ? 'wizard-pf-step-alt' : 'wizard-pf-step') + " " + (isActive ? 'active' : '') + " " + (isDisabled ? 'disabled' : '')),
  onClick: onClick
}, createElement("a", null, createElement("span", {
  className: ("wizard-pf-step" + (isAlt ? '-alt' : '') + "-number")
}, step), createElement("span", {
  className: ("wizard-pf-step" + (isAlt ? '-alt' : '') + "-title")
}, title), !isAlt && subSteps.map(function (s, idx) { return createElement("span", {
  className: ("wizard-pf-step-title-substep " + (idx === activeSubstep ? 'active' : '')),
  key: idx
}, s); })), isAlt && isActive && createElement("ul", null, subSteps.map(function (s, idx) { return createElement("li", {
  className: ("wizard-pf-step-alt-substep " + (idx === activeSubstep ? 'active' : 'disabled')),
  key: idx
}, createElement("a", null, s)); })));
};

var WizardSteps = /*@__PURE__*/(function (superclass) {
  function WizardSteps () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) WizardSteps.__proto__ = superclass;
  WizardSteps.prototype = Object.create( superclass && superclass.prototype );
  WizardSteps.prototype.constructor = WizardSteps;

  WizardSteps.prototype.render = function render () {
    return createElement("div", {
      className: 'wizard-pf-steps'
    }, createElement("ul", {
      className: ("wizard-pf-steps-indicator wizard-pf-steps-alt-indicator " + (this.props.active ? 'active' : ''))
    }, this.props.mainSteps), createElement("ul", {
      className: ("wizard-pf-steps-alt " + (this.props.active ? '' : 'hidden'))
    }, this.props.altSteps));
  };

  return WizardSteps;
}(Component));

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
    return createElement(MessageDialog, {
      accessibleName: "deleteConfirmationDialog",
      accessibleDescription: "deleteConfirmationDialogContent",
      icon: createElement(Icon, {
        type: "pf",
        name: "error-circle-o"
      }),
      onHide: this.props.onCancel,
      primaryAction: this.props.onDelete,
      primaryActionButtonContent: this.props.i18nDeleteButtonText,
      primaryActionButtonBsStyle: "danger",
      primaryContent: createElement("p", {
        className: "lead"
      }, this.props.i18nDeleteMessage),
      secondaryAction: this.props.onCancel,
      secondaryActionButtonContent: this.props.i18nCancelButtonText,
      secondaryContent: this.props.i18nDetailsMessage ? createElement("p", null, this.props.i18nDetailsMessage) : undefined,
      show: this.props.showDialog,
      title: this.props.i18nTitle
    });
  };

  return DeleteConfirmationDialog;
}(Component));

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
      return createElement(Container, null, this.state.files[0].name);
    } // multiple files uploaded


    if (this.state.files.length > 1) {
      return createElement("ul", null, this.state.files.map(function (file, index) { return createElement("li", {
        key: index
      }, file.name); }));
    } // no files uploaded


    return createElement(Container, null, this.props.i18nNoFileSelectedMessage);
  };
  /**
   * Obtains an element that indicates the if the upload was successful.
   */


  DndFileChooser.prototype.getUploadMessage = function getUploadMessage () {
    if (this.props.i18nUploadSuccessMessage) {
      return createElement("span", {
        className: "dnd-file-chooser__uploadMessage"
      }, createElement(Icon, {
        type: "pf",
        name: "ok"
      }), "\u00A0", this.props.i18nUploadSuccessMessage);
    }

    if (this.props.i18nUploadFailedMessage) {
      return createElement("span", {
        className: "dnd-file-chooser__uploadMessage"
      }, createElement(Icon, {
        type: "pf",
        name: "error-circle-o"
      }), "\u00A0", this.props.i18nUploadFailedMessage);
    } // no message


    return createElement(Container, null);
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

    return createElement(Dropzone, {
      accept: this.props.fileExtensions,
      disabled: this.props.disableDropzone,
      multiple: this.props.allowMultiple,
      onDropAccepted: this.handleAcceptedFiles,
      onDropRejected: this.handleRejectedFiles
    }, function (ref) {
      var getRootProps = ref.getRootProps;
      var getInputProps = ref.getInputProps;

      return createElement(Container, null, createElement(Grid, Object.assign({
      disabled: this$1.props.disableDropzone,
      fluid: true,
      className: "dnd-file-chooser"
    }, getRootProps({
      refKey: 'dnd-file-chooser'
    })), createElement(Grid.Row, null, createElement(Grid.Col, {
      className: "dnd-file-chooser__instructions",
      dangerouslySetInnerHTML: {
        __html: this$1.props.i18nInstructions
      }
    })), createElement(Grid.Row, null, createElement(Grid.Col, null, createElement("input", Object.assign({}, getInputProps())))), createElement(Grid.Row, null, createElement(Grid.Col, {
      className: "dnd-file-chooser__selectedFileLabel",
      xs: 3
    }, this$1.props.i18nSelectedFileLabel), createElement(Grid.Col, {
      className: "dnd-file-chooser__selectedFile",
      xs: 6
    }, this$1.getSelectedFileMessage()), createElement(Grid.Col, {
      xs: 3
    }, this$1.getUploadMessage())), this$1.props.i18nHelpMessage ? createElement(Grid.Row, null, createElement(Grid.Col, {
      className: "dnd-file-chooser__helpText"
    }, this$1.props.i18nHelpMessage)) : null));
    });
  };

  return DndFileChooser;
}(Component)); // setup default prop values

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
        return createElement(Filter.ValueSelector, {
          filterValues: currentFilterType.filterValues,
          currentValue: currentValue,
          onFilterValueSelected: this$1.props.onFilterValueSelected
        });
      } else {
        return createElement(FormControl, {
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

    return createElement(Toolbar, null, createElement(Filter, null, createElement(Filter.TypeSelector, {
      filterTypes: this.props.filterTypes,
      currentFilterType: this.props.currentFilterType.title,
      onFilterTypeSelected: this.props.onSelectFilterType
    }), this.renderInput()), createElement(Sort, null, createElement(Sort.TypeSelector, {
      sortTypes: this.props.sortTypes,
      currentSortType: this.props.currentSortType,
      onSortTypeSelected: this.props.onUpdateCurrentSortType
    }), createElement(Sort.DirectionSelector, {
      isNumeric: false,
      isAscending: this.props.isSortAscending,
      onClick: this.props.onToggleCurrentSortDirection
    })), createElement(Toolbar.RightContent, null, this.props.children), createElement(Toolbar.Results, null, createElement("h5", null, this.props.i18nResultsCount), this.props.activeFilters && this.props.activeFilters.length > 0 && createElement(Fragment, null, createElement(Filter.ActiveLabel, null, "Active Filters:"), createElement(Filter.List, null, this.props.activeFilters.map(function (item, index) { return createElement(Filter.Item, {
      key: index,
      onRemove: this$1.props.onRemoveFilter,
      filterData: item
    }, item.title, "=", item.value); })), createElement("a", {
      onClick: this.props.onClearFilters
    }, "Clear All Filters"))));
  };

  return ListViewToolbar;
}(Component));

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

      return createElement(CellMeasurer, {
      cache: this$1.cellMeasurerCache,
      columnIndex: 0,
      key: index,
      rowIndex: index,
      parent: parent
    }, createElement("div", {
      className: 'LogViewerRow',
      style: style
    }, createElement("span", {
      className: "LogViewerRow_number"
    }, index + 1), createElement("span", {
      className: "LogViewerRow_content"
    }, this$1.props.data[index])));
    };

    this.toggleFollow = function () {
      this$1.setState({
        followScroll: !this$1.state.followScroll
      });
    };

    this.cellMeasurerCache = new CellMeasurerCache({
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

    return createElement(Fragment, null, createElement(Row, {
      className: 'LogViewer'
    }, createElement(Col, {
      sm: 12
    }, createElement(AutoSizer, {
      disableHeight: !!this.props.height,
      disableWidth: !!this.props.width
    }, function (ref) {
      var width = ref.width;
      var height = ref.height;

      return createElement(List, {
      deferredMeasurementCache: this$1.cellMeasurerCache,
      height: this$1.props.height || height,
      rowCount: this$1.props.data.length,
      rowHeight: this$1.cellMeasurerCache.rowHeight,
      rowRenderer: this$1.renderRow,
      scrollToLine: this$1.state.count,
      scrollToIndex: this$1.state.followScroll ? this$1.state.count - 1 : -1,
      width: this$1.props.width || width
    });
    }))), createElement(Row, null, createElement(Col, {
      sm: 12
    }, createElement(Switch, {
      id: 'toggle-follow',
      labelText: 'Follow logs',
      onChange: this.toggleFollow,
      value: this.state.followScroll
    }))));
  };

  return LogViewer;
}(Component));
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

    return createElement(ToastNotificationList, {
      className: "app__notificationList"
    }, this.props.notifications.map(function (notification) { return createElement(TimedToastNotification, {
      key: notification.key,
      type: notification.type,
      persistent: false,
      onDismiss: this$1.props.removeNotificationAction.bind(this$1, notification),
      timerdelay: this$1.props.notificationTimerDelay
    }, createElement(Container, {
      dangerouslySetInnerHTML: {
        __html: notification.message
      }
    })); }));
  };

  return Notifications;
}(Component));

var UnrecoverableError = function (ref) {
  var i18nTitle = ref.i18nTitle;
  var i18nInfo = ref.i18nInfo;
  var i18nHelp = ref.i18nHelp;
  var i18nRefreshLabel = ref.i18nRefreshLabel;
  var i18nReportIssue = ref.i18nReportIssue;
  var i18nShowErrorInfoLabel = ref.i18nShowErrorInfoLabel;
  var error = ref.error;
  var errorInfo = ref.errorInfo;

  var ref$1 = useState(false);
  var showErrorInfo = ref$1[0];
  var setShowErrorInfo = ref$1[1];

  var toggleErrorInfo = function () { return setShowErrorInfo(!showErrorInfo); };

  return createElement(Container, null, createElement(EmptyState, null, createElement(EmptyState.Icon, {
    name: 'error-circle-o'
  }), createElement(EmptyState.Title, null, i18nTitle), createElement(EmptyState.Info, null, i18nInfo), createElement(EmptyState.Help, null, i18nHelp), createElement(EmptyState.Action, null, createElement(ButtonLink, {
    href: '.',
    as: 'primary',
    size: 'lg'
  }, i18nRefreshLabel)), createElement(EmptyState.Action, {
    secondary: true
  }, error && createElement(ButtonLink, {
    onClick: toggleErrorInfo
  }, i18nShowErrorInfoLabel), createElement("a", {
    className: 'btn btn-default',
    href: 'https://github.com/syndesisio/syndesis/issues/new?template=simple.md&labels=cat/bug&title=Error%20report'
  }, i18nReportIssue)), showErrorInfo && error && createElement(EmptyState.Help, {
    style: {
      textAlign: 'left'
    }
  }, createElement("p", null, error.name, ": ", error.message), errorInfo && createElement("pre", null, errorInfo.componentStack))));
};

var ConnectionsListView = /*@__PURE__*/(function (superclass) {
  function ConnectionsListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsListView.__proto__ = superclass;
  ConnectionsListView.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsListView.prototype.constructor = ConnectionsListView;

  ConnectionsListView.prototype.render = function render () {
    return createElement(Fragment, null, createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(ButtonLink, {
      href: this.props.linkToConnectionCreate,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection))), createElement(Container, null, this.props.children));
  };

  return ConnectionsListView;
}(Component));

var ApiConnectorDetailCard = /*@__PURE__*/(function (superclass) {
  function ApiConnectorDetailCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorDetailCard.__proto__ = superclass;
  ApiConnectorDetailCard.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorDetailCard.prototype.constructor = ApiConnectorDetailCard;

  ApiConnectorDetailCard.prototype.render = function render () {
    return createElement(Card, {
      className: "api-connector-card"
    }, createElement(CardBody, null, createElement("div", {
      className: 'api-connector-card__content'
    }, createElement("div", null, createElement("img", {
      className: "api-connector-card__icon",
      src: this.props.icon,
      alt: this.props.name
    })), createElement("div", {
      className: "api-connector__title h2",
      "data-testid": "api-connector-card-title"
    }, this.props.name), createElement("p", {
      className: "api-connector-card__description"
    }, this.props.description))));
  };

  return ApiConnectorDetailCard;
}(Component));

var ApiConnectorInfo = /*@__PURE__*/(function (superclass) {
  function ApiConnectorInfo () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorInfo.__proto__ = superclass;
  ApiConnectorInfo.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorInfo.prototype.constructor = ApiConnectorInfo;

  ApiConnectorInfo.prototype.render = function render () {
    return createElement("div", null, "ApiConnectorInfo content goes here");
  };

  return ApiConnectorInfo;
}(Component));

var ApiConnectorReview = /*@__PURE__*/(function (superclass) {
  function ApiConnectorReview () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorReview.__proto__ = superclass;
  ApiConnectorReview.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorReview.prototype.constructor = ApiConnectorReview;

  ApiConnectorReview.prototype.render = function render () {
    return createElement("div", null, "ApiConnectorReview content goes here");
  };

  return ApiConnectorReview;
}(Component));

var ApiConnectorDetail = /*@__PURE__*/(function (superclass) {
  function ApiConnectorDetail () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ApiConnectorDetail.__proto__ = superclass;
  ApiConnectorDetail.prototype = Object.create( superclass && superclass.prototype );
  ApiConnectorDetail.prototype.constructor = ApiConnectorDetail;

  ApiConnectorDetail.prototype.render = function render () {
    return createElement(CardGrid, {
      fluid: true
    }, createElement(CardGrid.Row, null, createElement(CardGrid.Col, {
      xs: 12,
      md: 3
    }, createElement(ApiConnectorDetailCard, {
      description: this.props.description,
      icon: this.props.icon,
      name: this.props.name
    })), createElement(CardGrid.Col, {
      xs: 12,
      md: 7
    }, createElement(Card, null, createElement(CardHeading, null, createElement(CardTitle, null, this.props.name)), createElement(CardBody, null, createElement(ApiConnectorInfo, null), createElement(ApiConnectorReview, null))))));
  };

  return ApiConnectorDetail;
}(Component));

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
    return createElement(Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ApiConnectorListItem.prototype.getDetailsTooltip = function getDetailsTooltip () {
    return createElement(Tooltip, {
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
    return createElement(ListViewItem, {
      actions: createElement("div", {
        className: "form-group"
      }, createElement(OverlayTrigger, {
        overlay: this.getDetailsTooltip(),
        placement: "top"
      }, createElement(Button, {
        bsStyle: "default",
        onClick: this.handleDetails
      }, this.props.i18nDetails)), createElement(OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "top"
      }, createElement(Button, {
        bsStyle: "default",
        disabled: this.props.usedBy !== 0,
        onClick: this.handleDelete
      }, this.props.i18nDelete))),
      additionalInfo: [createElement(ListViewInfoItem, {
        key: 1
      }, this.props.i18nUsedByMessage)],
      description: this.props.apiConnectorDescription ? this.props.apiConnectorDescription : '',
      heading: this.props.apiConnectorName,
      hideCloseIcon: true,
      leftContent: this.props.apiConnectorIcon ? createElement("div", {
        className: "blank-slate-pf-icon"
      }, createElement("img", {
        src: this.props.apiConnectorIcon,
        alt: this.props.apiConnectorName,
        width: 46
      })) : null,
      stacked: true
    });
  };

  return ApiConnectorListItem;
}(Component));

// tslint:disable react-unused-props-and-state
var ApiConnectorListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), createElement("rect", {
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
    return createElement(Fragment, null, createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(OverlayTrigger, {
      overlay: this.getCreateConnectorTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateApiConnector,
      as: 'primary'
    }, this.props.i18nLinkCreateApiConnector)))), createElement(Container, null, createElement("h1", null, this.props.i18nTitle), createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.props.i18nDescription
      }
    }), this.props.children ? createElement(ListView, null, this.props.children) : createElement(EmptyState, null, createElement(EmptyState.Icon, null), createElement(EmptyState.Title, null, this.props.i18nEmptyStateTitle), createElement(EmptyState.Info, null, this.props.i18nEmptyStateInfo), createElement(EmptyState.Action, null, createElement(OverlayTrigger, {
      overlay: this.getCreateConnectorTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateApiConnector,
      as: 'primary'
    }, this.props.i18nLinkCreateApiConnector))))));
  };

  ApiConnectorListView.prototype.getCreateConnectorTooltip = function getCreateConnectorTooltip () {
    return createElement(Tooltip, {
      id: "createTip"
    }, this.props.i18nLinkCreateApiConnectorTip ? this.props.i18nLinkCreateApiConnectorTip : this.props.i18nLinkCreateApiConnector);
  };

  return ApiConnectorListView;
}(Component));

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
    return createElement(Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ExtensionDetail.prototype.getUpdateTooltip = function getUpdateTooltip () {
    return createElement(Tooltip, {
      id: "updateTip"
    }, this.props.i18nUpdateTip ? this.props.i18nUpdateTip : this.props.i18nUpdate);
  };

  ExtensionDetail.prototype.showDeleteDialog = function showDeleteDialog () {
    this.setState({
      showDeleteDialog: true
    });
  };

  ExtensionDetail.prototype.render = function render () {
    return createElement(Fragment, null, createElement(DeleteConfirmationDialog, {
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.doCancel,
      onDelete: this.doDelete
    }), createElement(Card, {
      matchHeight: true
    }, createElement(CardHeading, null, createElement(CardTitle, null, createElement(Row, null, createElement("h1", {
      className: 'col-sm-8 extension-detail__extensionTitle'
    }, this.props.extensionName, createElement("span", {
      className: 'extension-detail__extensionId'
    }, this.props.i18nIdMessage)), createElement("div", {
      className: "col-sm-4 text-right extension-detail__titleButtons"
    }, createElement(OverlayTrigger, {
      overlay: this.getUpdateTooltip(),
      placement: "top"
    }, createElement(Button, {
      bsStyle: "primary",
      onClick: this.props.onUpdate
    }, this.props.i18nUpdate)), createElement(OverlayTrigger, {
      overlay: this.getDeleteTooltip(),
      placement: "top"
    }, createElement(Button, {
      bsStyle: "default",
      disabled: this.props.extensionUses !== 0,
      onClick: this.showDeleteDialog
    }, this.props.i18nDelete)))))), createElement(CardBody, null, createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nOverviewSectionTitle), this.props.overviewSection, createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nSupportsSectionTitle), this.props.supportsSection, createElement("h3", {
      className: "extension-detail__sectionHeading"
    }, this.props.i18nUsageSectionTitle), this.props.integrationsSection)));
  };

  return ExtensionDetail;
}(Component));

var ExtensionImportCard = /*@__PURE__*/(function (superclass) {
  function ExtensionImportCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionImportCard.__proto__ = superclass;
  ExtensionImportCard.prototype = Object.create( superclass && superclass.prototype );
  ExtensionImportCard.prototype.constructor = ExtensionImportCard;

  ExtensionImportCard.prototype.render = function render () {
    return createElement(Card, null, createElement(Card.Heading, null, createElement(Card.Title, null, this.props.i18nTitle)), createElement(Card.Body, null, createElement("p", null, this.props.i18nImportInstructions), this.props.i18nAlertMessage ? createElement(Alert, {
      type: 'error'
    }, createElement("span", null, this.props.i18nAlertMessage)) : null, createElement(DndFileChooser, {
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
}(Component));

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
      return createElement(Grid.Col, null);
    }

    return createElement(Container, null, this.props.actions ? this.props.actions.map(function (action, index) { return index === 0 ? createElement(Grid.Col, {
      key: 0,
      dangerouslySetInnerHTML: {
        __html: this$1.props.i18nActionText(action.name, action.description)
      }
    }) : createElement(Grid.Row, {
      key: index
    }, createElement(Grid.Col, {
      key: 0,
      xs: 2
    }), createElement(Grid.Col, {
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
    return createElement(Grid, {
      className: "extension-import-review__container"
    }, createElement(Grid.Row, {
      className: "extension-import-review__title"
    }, this.props.i18nTitle), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nIdLabel), createElement(Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionId)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nNameLabel), createElement(Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionName)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nDescriptionLabel), createElement(Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.extensionDescription ? this.props.extensionDescription : null)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nTypeLabel), createElement(Grid.Col, {
      className: "extension-import-review__propertyValue"
    }, this.props.i18nExtensionTypeMessage)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-import-review__propertyLabel"
    }, this.props.i18nActionsLabel), this.getActions()), createElement(Grid.Row, null, createElement(Grid.Col, {
      xsOffset: 2
    }, createElement(Grid.Row, null, createElement(Grid.Col, null, createElement(Container, {
      className: "extension-import-review__buttonBar"
    }, createElement(Button, {
      bsStyle: "primary",
      onClick: this.handleImport
    }, this.props.i18nImport), createElement(ButtonLink, {
      className: "extension-import-review__cancelButton",
      href: this.props.cancelLink,
      as: 'default'
    }, this.props.i18nCancel)))))));
  };

  return ExtensionImportReview;
}(Component));

var ExtensionIntegrationsTable = /*@__PURE__*/(function (superclass) {
  function ExtensionIntegrationsTable () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ExtensionIntegrationsTable.__proto__ = superclass;
  ExtensionIntegrationsTable.prototype = Object.create( superclass && superclass.prototype );
  ExtensionIntegrationsTable.prototype.constructor = ExtensionIntegrationsTable;

  ExtensionIntegrationsTable.prototype.getColumns = function getColumns () {
    var this$1 = this;

    var headerFormat = function (value) { return createElement(Table.Heading, null, value); };

    var clickableValueFormat = function (value, ref) {
      var rowData = ref.rowData;

      // rowData is an Integration type so 'name' property is what makes the integration unique
      var onClick = function () { return this$1.onIntegrationSelected(rowData.name); };

      return createElement(Table.Cell, null, createElement("a", {
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
        formatters: [function (value) { return createElement(Table.Cell, null, value); }]
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
    return createElement("div", {
      className: "extension-group"
    }, createElement(Row, null, createElement("div", {
      className: "col-xs-offset-1 col-xs-11"
    }, createElement("p", null, this.props.i18nUsageMessage), this.props.data.length !== 0 ? createElement(Table.PfProvider, {
      striped: true,
      bordered: true,
      hover: true,
      columns: this.getColumns()
    }, createElement(Table.Header, null), createElement(Table.Body, {
      rows: this.props.data,
      rowKey: "name"
    })) : null)));
  };

  return ExtensionIntegrationsTable;
}(Component));

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
    return createElement(Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ExtensionListItem.prototype.getDetailsTooltip = function getDetailsTooltip () {
    return createElement(Tooltip, {
      id: "detailsTip"
    }, this.props.i18nDetailsTip ? this.props.i18nDetailsTip : this.props.i18nDetails);
  };

  ExtensionListItem.prototype.getUpdateTooltip = function getUpdateTooltip () {
    return createElement(Tooltip, {
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
    return createElement(Fragment, null, createElement(DeleteConfirmationDialog // extensionId={this.props.extensionId}
    , {
      // extensionId={this.props.extensionId}
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.doCancel,
      onDelete: this.doDelete
    }), createElement(ListViewItem, {
      actions: createElement("div", {
        className: "form-group"
      }, createElement(OverlayTrigger, {
        overlay: this.getDetailsTooltip(),
        placement: "top"
      }, createElement(ButtonLink, {
        href: this.props.detailsPageLink,
        as: 'primary'
      }, this.props.i18nDetails)), createElement(OverlayTrigger, {
        overlay: this.getUpdateTooltip(),
        placement: "top"
      }, createElement(Button, {
        bsStyle: "default",
        onClick: this.handleUpdate
      }, this.props.i18nUpdate)), createElement(OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "top"
      }, createElement(Button, {
        bsStyle: "default",
        disabled: this.props.usedBy !== 0,
        onClick: this.showDeleteDialog
      }, this.props.i18nDelete))),
      additionalInfo: [createElement(ListViewInfoItem, {
        key: 1
      }, this.props.i18nExtensionType), createElement(ListViewInfoItem, {
        key: 2
      }, this.props.i18nUsedByMessage)],
      description: this.props.extensionDescription ? this.props.extensionDescription : '',
      heading: this.props.extensionName,
      hideCloseIcon: true,
      leftContent: this.props.extensionIcon ? createElement("div", {
        className: "blank-slate-pf-icon"
      }, createElement("img", {
        src: this.props.extensionIcon,
        alt: this.props.extensionName,
        width: 46
      })) : null,
      stacked: true
    }));
  };

  return ExtensionListItem;
}(Component));

// tslint:disable react-unused-props-and-state
var ExtensionListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), createElement("rect", {
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
    return createElement(Tooltip, {
      id: "importTip"
    }, this.props.i18nLinkImportExtensionTip ? this.props.i18nLinkImportExtensionTip : this.props.i18nLinkImportExtension);
  };

  ExtensionListView.prototype.render = function render () {
    return createElement(Fragment, null, createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(OverlayTrigger, {
      overlay: this.getImportTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkImportExtension,
      as: 'primary'
    }, this.props.i18nLinkImportExtension)))), createElement(Container, null, createElement("h1", null, this.props.i18nTitle), createElement("div", {
      dangerouslySetInnerHTML: {
        __html: this.props.i18nDescription
      }
    }), this.props.children ? createElement(ListView, null, this.props.children) : createElement(EmptyState, null, createElement(EmptyState.Icon, null), createElement(EmptyState.Title, null, this.props.i18nEmptyStateTitle), createElement(EmptyState.Info, null, this.props.i18nEmptyStateInfo), createElement(EmptyState.Action, null, createElement(OverlayTrigger, {
      overlay: this.getImportTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkImportExtension,
      as: 'primary'
    }, this.props.i18nLinkImportExtension))))));
  };

  return ExtensionListView;
}(Component));

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
    return createElement(Grid, null, createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nName), createElement(Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.extensionName)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nDescription), createElement(Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.extensionDescription ? this.props.extensionDescription : null)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nType), createElement(Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.i18nTypeMessage)), createElement(Grid.Row, null, createElement(Grid.Col, {
      xs: 2,
      className: "extension-overview__propertyLabel"
    }, this.props.i18nLastUpdate), createElement(Grid.Col, {
      className: "extension-overview__propertyValue"
    }, this.props.i18nLastUpdateDate ? this.props.i18nLastUpdateDate : null)));
  };

  return ExtensionOverview;
}(Component));

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
    return createElement("div", {
      className: "extension-group"
    }, this.props.extensionActions.length !== 0 ? createElement(Row, null, createElement("div", {
      className: "col-xs-offset-1 col-xs-11"
    }, this.props.extensionActions.map(function (action, index) { return createElement("div", {
      key: index
    }, createElement("strong", null, action.name), " - ", action.description); }))) : null);
  };

  return ExtensionSupports;
}(Component));

var AggregatedMetricCard = /*@__PURE__*/(function (superclass) {
  function AggregatedMetricCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) AggregatedMetricCard.__proto__ = superclass;
  AggregatedMetricCard.prototype = Object.create( superclass && superclass.prototype );
  AggregatedMetricCard.prototype.constructor = AggregatedMetricCard;

  AggregatedMetricCard.prototype.render = function render () {
    return createElement(Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, createElement(Card.Title, null, createElement(AggregateStatusCount, null, createElement("span", {
      "data-testid": "aggregate-title"
    }, this.props.title))), createElement(Card.Body, null, createElement(AggregateStatusNotifications, null, createElement(AggregateStatusNotification, null, createElement(Icon, {
      type: "pf",
      name: "ok"
    }), createElement("span", {
      "data-testid": "aggregate-ok-count"
    }, this.props.ok), ' '), createElement(AggregateStatusNotification, null, createElement(Icon, {
      type: "pf",
      name: "error-circle-o"
    }), createElement("span", {
      "data-testid": "aggregate-error-count"
    }, this.props.error)))));
  };

  return AggregatedMetricCard;
}(PureComponent));

var ConnectionsMetric = /*@__PURE__*/(function (superclass) {
  function ConnectionsMetric () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) ConnectionsMetric.__proto__ = superclass;
  ConnectionsMetric.prototype = Object.create( superclass && superclass.prototype );
  ConnectionsMetric.prototype.constructor = ConnectionsMetric;

  ConnectionsMetric.prototype.render = function render () {
    return createElement(Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, createElement(Card.Title, null, this.props.i18nTitle));
  };

  return ConnectionsMetric;
}(PureComponent));

var Dashboard = /*@__PURE__*/(function (superclass) {
  function Dashboard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) Dashboard.__proto__ = superclass;
  Dashboard.prototype = Object.create( superclass && superclass.prototype );
  Dashboard.prototype.constructor = Dashboard;

  Dashboard.prototype.render = function render () {
    return createElement(Container, null, createElement(Grid, {
      fluid: true
    }, createElement(Grid.Row, null, createElement(Grid.Col, {
      sm: 12
    }, createElement("div", {
      className: 'Dashboard-header'
    }, createElement("h1", {
      className: 'Dashboard-header__title'
    }, this.props.i18nTitle), createElement("div", {
      className: "Dashboard-header__actions"
    }, createElement(ButtonLink, {
      href: this.props.linkToIntegrations
    }, this.props.i18nLinkToIntegrations), createElement(ButtonLink, {
      href: this.props.linkToIntegrationCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateIntegration)))))), createElement(CardGrid, {
      fluid: true,
      matchHeight: true
    }, createElement(CardGrid.Row, null, createElement(CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.integrationsOverview), createElement(CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.connectionsOverview), createElement(CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.messagesOverview), createElement(CardGrid.Col, {
      sm: 6,
      md: 3
    }, this.props.uptimeOverview))), createElement(Grid, {
      fluid: true
    }, createElement(Grid.Row, null, createElement(Grid.Col, {
      sm: 12
    }, this.props.topIntegrations)), createElement(Grid.Row, null, createElement(Grid.Col, {
      sm: 12,
      md: 6
    }, this.props.integrationBoard), createElement(Grid.Col, {
      sm: 12,
      md: 6
    }, this.props.integrationUpdates))), createElement(Grid, {
      fluid: true,
      style: {
        marginTop: '20px'
      }
    }, createElement(Grid.Row, null, createElement(Grid.Col, {
      sm: 12
    }, createElement("div", {
      className: 'Dashboard-header'
    }, createElement("h1", {
      className: 'Dashboard-header__title'
    }, this.props.i18nConnections), createElement("div", {
      className: "Dashboard-header__actions"
    }, createElement(Link, {
      to: this.props.linkToConnections
    }, this.props.i18nLinkToConnections), createElement(ButtonLink, {
      href: this.props.linkToConnectionCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection)))))), createElement(CardGrid, {
      fluid: true,
      matchHeight: true
    }, createElement(CardGrid.Row, null, this.props.connections)));
  };

  return Dashboard;
}(PureComponent));

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
        Pending: patternfly.pfPaletteColors.black200,
        Published: patternfly.pfPaletteColors.blue400,
        Stopped: patternfly.pfPaletteColors.black300
      },
      columns: [[this.props.i18nIntegrationStateRunning, this.props.runningIntegrations], [this.props.i18nIntegrationStateStopped, this.props.stoppedIntegrations], [this.props.i18nIntegrationStatePending, this.props.pendingIntegrations]],
      type: 'donut'
    };
    return createElement(Card, null, createElement(Card.Heading, null, createElement(Card.Title, null, this.props.i18nTitle)), createElement(Card.Body, null, createElement(DonutChart, {
      id: "integration-board",
      size: {
        height: 120
      },
      data: data,
      tooltip: {
        contents: patternfly.pfDonutTooltipContents,
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
}(PureComponent));

var RecentUpdatesCard = /*@__PURE__*/(function (superclass) {
  function RecentUpdatesCard () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) RecentUpdatesCard.__proto__ = superclass;
  RecentUpdatesCard.prototype = Object.create( superclass && superclass.prototype );
  RecentUpdatesCard.prototype.constructor = RecentUpdatesCard;

  RecentUpdatesCard.prototype.render = function render () {
    return createElement(Card, {
      accented: false
    }, createElement(Card.Heading, null, createElement(Card.Title, null, this.props.i18nTitle)), createElement(Card.Body, null, this.props.children));
  };

  return RecentUpdatesCard;
}(Component));

// tslint:disable react-unused-props-and-state
var IntegrationActionSelectorCard = function (ref) {
  var content = ref.content;
  var title = ref.title;

  return createElement("div", {
  className: "card-pf"
}, createElement("div", {
  className: "card-pf-title"
}, title), createElement("div", {
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
    return createElement("div", null, this.props.description ? createElement("p", null, this.props.description, "\u00A0", createElement(Icon, {
      name: 'pencil'
    })) : null);
  };

  return IntegrationDetailDescription;
}(PureComponent));

var IntegrationDetailEditableName = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailEditableName () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailEditableName.__proto__ = superclass;
  IntegrationDetailEditableName.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailEditableName.prototype.constructor = IntegrationDetailEditableName;

  IntegrationDetailEditableName.prototype.render = function render () {
    return createElement(Fragment, null, this.props.name ? createElement(Fragment, null, createElement("h1", null, this.props.name, "\u00A0"), createElement(Icon, {
      name: 'pencil'
    })) : null);
  };

  return IntegrationDetailEditableName;
}(PureComponent));

var IntegrationDetailHistoryListView = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailHistoryListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailHistoryListView.__proto__ = superclass;
  IntegrationDetailHistoryListView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailHistoryListView.prototype.constructor = IntegrationDetailHistoryListView;

  IntegrationDetailHistoryListView.prototype.render = function render () {
    return createElement(Grid, {
      fluid: true,
      key: 1,
      className: "integration-detail-history-list-view"
    }, this.props.integrationIsDraft ? createElement(Grid.Row, {
      className: "show-grid"
    }, createElement(Grid.Col, {
      xs: 2,
      md: 2,
      className: "integration-detail-history-list-view__description"
    }, this.props.i18nTextDraft, ":"), createElement(Grid.Col, {
      xs: 10,
      md: 10
    }, createElement(ListViewItem, {
      key: 1,
      heading: this.props.i18nTextDraft,
      actions: createElement(Fragment, null, createElement(Button, null, this.props.i18nTextBtnPublish), createElement(Button, null, this.props.i18nTextBtnEdit)),
      stacked: false
    }))) : null, this.props.children ? createElement(Grid.Row, {
      className: "show-grid"
    }, createElement(Grid.Col, {
      xs: 2,
      md: 2,
      className: "integration-detail-history-list-view__description"
    }, createElement("span", null, this.props.i18nTextHistory, ":")), createElement(Grid.Col, {
      xs: 10,
      md: 10
    }, this.props.children ? createElement(ListView, null, this.props.children) : null)) : null);
  };

  return IntegrationDetailHistoryListView;
}(Component));

var IntegrationDetailHistoryListViewItem = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailHistoryListViewItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailHistoryListViewItem.__proto__ = superclass;
  IntegrationDetailHistoryListViewItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailHistoryListViewItem.prototype.constructor = IntegrationDetailHistoryListViewItem;

  IntegrationDetailHistoryListViewItem.prototype.render = function render () {
    return createElement(Fragment, null, createElement(ListViewItem, {
      key: 1,
      heading: createElement("span", null, createElement("span", null, this.props.i18nTextVersion, ":"), ' ', this.props.integrationVersion),
      actions: createElement(DropdownKebab, {
        id: "historyactions",
        pullRight: true
      }, createElement(MenuItem, null, this.props.i18nTextHistoryMenuReplaceDraft), createElement(MenuItem, null, this.props.i18nTextHistoryMenuUnpublish)),
      additionalInfo: [createElement(ListViewInfoItem, {
        key: 1
      }, this.props.i18nTextLastPublished, this.props.integrationUpdatedAt)],
      leftContent: createElement(ListView.Icon, {
        type: "pf",
        name: "ok",
        size: "sm",
        className: "list-view-pf-icon-success"
      }),
      stacked: false
    }));
  };

  return IntegrationDetailHistoryListViewItem;
}(Component));

var IntegrationDetailInfo = /*@__PURE__*/(function (superclass) {
  function IntegrationDetailInfo () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationDetailInfo.__proto__ = superclass;
  IntegrationDetailInfo.prototype = Object.create( superclass && superclass.prototype );
  IntegrationDetailInfo.prototype.constructor = IntegrationDetailInfo;

  IntegrationDetailInfo.prototype.render = function render () {
    return createElement("div", {
      className: "integration-detail-info"
    }, createElement(IntegrationDetailEditableName, {
      name: this.props.name
    }), this.props.version ? createElement(Fragment, null, createElement("span", {
      className: "pficon pficon-ok"
    }), "\u00A0Published version ", this.props.version) : 'Stopped');
  };

  return IntegrationDetailInfo;
}(PureComponent));

var IntegrationEditorActionsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorActionsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorActionsListItem.__proto__ = superclass;
  IntegrationEditorActionsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorActionsListItem.prototype.constructor = IntegrationEditorActionsListItem;

  IntegrationEditorActionsListItem.prototype.render = function render () {
    return createElement(ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.integrationDescription,
      stacked: true
    });
  };

  return IntegrationEditorActionsListItem;
}(Component));

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
    return createElement(Fragment, null, createElement(Container, null, createElement("h1", null, this.props.i18nTitle, " - Choose Action"), createElement("p", null, this.props.i18nSubtitle)), createElement(Container, null, createElement(ListView, null, this.props.children)));
  };

  return IntegrationEditorChooseAction;
}(Component));

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
    return createElement(Fragment, null, createElement(Container, null, createElement("h1", null, this.props.i18nTitle), createElement("p", null, this.props.i18nSubtitle)), createElement(Container, null, createElement(ListView, null, this.props.children)));
  };

  return IntegrationEditorChooseConnection;
}(Component));

var IntegrationEditorConnectionsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorConnectionsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorConnectionsListItem.__proto__ = superclass;
  IntegrationEditorConnectionsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorConnectionsListItem.prototype.constructor = IntegrationEditorConnectionsListItem;

  IntegrationEditorConnectionsListItem.prototype.render = function render () {
    return createElement(ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.integrationDescription,
      leftContent: this.props.icon,
      stacked: true
    });
  };

  return IntegrationEditorConnectionsListItem;
}(Component));

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
    return createElement(Container, null, createElement("h1", null, this.props.i18nTitle, " - Choose Action"), createElement("p", null, this.props.i18nSubtitle), createElement("form", {
      className: "form-horizontal required-pf",
      role: "form",
      onSubmit: this.props.handleSubmit
    }, createElement("div", {
      className: "row row-cards-pf"
    }, createElement("div", {
      className: "card-pf"
    }, this.props.i18nFormTitle && createElement("div", {
      className: "card-pf-title"
    }, this.props.i18nFormTitle), createElement("div", {
      className: "card-pf-body"
    }, createElement(Container, null, this.props.children))))));
  };

  return IntegrationEditorForm;
}(Component));

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

  return createElement("div", {
    className: classnames('wizard-pf-body integration-editor-layout', {
      'has-footer': true
    })
  }, header, createElement("div", {
    className: "wizard-pf-row integration-editor-layout__body"
  }, createElement("div", {
    className: "wizard-pf-sidebar"
  }, sidebar), createElement("div", {
    className: 'wizard-pf-main cards-pf integration-editor-layout__contentWrapper'
  }, createElement("div", {
    className: "integration-editor-layout__content"
  }, content))), createElement("div", {
    className: "wizard-pf-footer integration-editor-layout__footer"
  }, createElement(ButtonLink, {
    onClick: onBack,
    href: backHref,
    className: 'wizard-pf-back'
  }, createElement("i", {
    className: "fa fa-angle-left"
  }), " Back"), createElement(ButtonLink, {
    onClick: onNext,
    href: nextHref,
    as: 'primary',
    className: 'wizard-pf-next',
    disabled: isNextLoading || isNextDisabled
  }, isNextLoading ? createElement(Loader, {
    size: 'xs',
    inline: true
  }) : null, isLastStep ? 'Done' : createElement(Fragment, null, "Next ", createElement("i", {
    className: "fa fa-angle-right"
  }))), createElement(ButtonLink, {
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
    return createElement(Container, null, createElement("h1", null, this.props.i18nTitle, " - Choose Action"), createElement("p", null, this.props.i18nSubtitle), createElement(Container, null, createElement("div", {
      className: "row row-cards-pf"
    }, createElement("div", {
      className: "card-pf"
    }, createElement("div", {
      className: "card-pf-body"
    }, createElement(Container, null, createElement("p", {
      className: "alert alert-info"
    }, createElement("span", {
      className: "pficon pficon-info"
    }), this.props.i18nAlert)))))));
  };

  return IntegrationEditorNothingToConfigure;
}(Component));

var IntegrationEditorStepsList = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorStepsList () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorStepsList.__proto__ = superclass;
  IntegrationEditorStepsList.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorStepsList.prototype.constructor = IntegrationEditorStepsList;

  IntegrationEditorStepsList.prototype.render = function render () {
    return createElement(ListView, {
      style: {
        background: 'transparent'
      }
    }, this.props.children);
  };

  return IntegrationEditorStepsList;
}(Component));

var IntegrationEditorStepsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationEditorStepsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationEditorStepsListItem.__proto__ = superclass;
  IntegrationEditorStepsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationEditorStepsListItem.prototype.constructor = IntegrationEditorStepsListItem;

  IntegrationEditorStepsListItem.prototype.render = function render () {
    return createElement(ListView.Item, {
      actions: this.props.actions,
      heading: this.props.stepName,
      description: this.props.stepDescription,
      leftContent: this.props.icon,
      stacked: true,
      hideCloseIcon: true
    });
  };

  return IntegrationEditorStepsListItem;
}(Component));

var IntegrationFlowAddStep = /*@__PURE__*/(function (superclass) {
  function IntegrationFlowAddStep(props) {
    superclass.call(this, props);
    this.state = {
      forceTooltip: false,
      showTooltip: false
    };
    this.containerRef = createRef();
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
    return createElement("div", {
      className: 'integration-flow-add-step',
      onMouseEnter: this.showTooltip,
      onMouseLeave: this.hideTooltip,
      onTouchStart: this.toggleTooltip
    }, createElement("div", {
      className: 'integration-flow-add-step__iconWrapper',
      ref: this.containerRef
    }, createElement("div", {
      className: 'integration-flow-add-step__icon'
    }, createElement("i", {
      className: "fa fa-plus-square"
    }))), this.props.showDetails && this.props.children, createElement(Overlay, {
      placement: "top",
      rootClose: false,
      show: this.props.forceTooltip || this.state.showTooltip,
      target: this.containerRef.current,
      container: this
    }, createElement(Popover, {
      id: 'integration-flow-add-step',
      className: 'integration-flow-add-step__links'
    }, this.props.addStepHref && this.props.i18nAddStep && createElement(Link, {
      to: this.props.addStepHref
    }, this.props.i18nAddStep), this.props.addConnectionHref && this.props.i18nAddConnection && createElement(Link, {
      to: this.props.addConnectionHref
    }, this.props.i18nAddConnection))));
  };

  return IntegrationFlowAddStep;
}(Component));
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
    var tooltip = createElement(Tooltip, {
      id: 'integration-flow-step'
    }, this.props.i18nTooltip);
    var icon = createElement("div", {
      className: 'integration-flow-step__icon'
    }, this.props.icon);
    return createElement("div", {
      className: classnames('integration-flow-step', {
        'is-active': this.props.active,
        'is-expanded': this.props.showDetails
      })
    }, this.props.showDetails ? createElement(Fragment, null, createElement("div", {
      className: 'integration-flow-step__iconWrapper'
    }, icon), this.props.children) : createElement("div", {
      className: 'integration-flow-step__iconWrapper'
    }, createElement(OverlayTrigger, {
      overlay: tooltip,
      placement: "right",
      trigger: ['hover', 'focus'],
      rootClose: false
    }, icon)));
  };

  return IntegrationFlowStep;
}(Component));
IntegrationFlowStep.defaultProps = {
  active: false
};

var Title = function (ref) {
  var children = ref.children;

  return createElement("div", {
  className: 'integration-flow-step-details__title'
}, children);
};

var GenericDescription = function (ref) {
  var children = ref.children;

  return createElement("div", {
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

  return createElement("div", {
  className: 'integration-flow-step-details__body'
}, createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, createElement("dt", null, nameI18nLabel), createElement("dd", null, name)), createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, createElement("dt", null, actionI18nLabel), createElement("dd", null, action)), createElement("dl", {
  className: 'integration-flow-step-details__overview'
}, createElement("dt", null, dataTypeI18nLabel), createElement("dd", null, dataType)));
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
    return createElement("div", {
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
}(Component));
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

  return createElement(IntegrationFlowStep, {
  icon: icon,
  active: active,
  i18nTooltip: i18nTooltip,
  showDetails: showDetails
}, createElement(IntegrationFlowStepDetails, {
  active: active
}, function (ref) {
  var Title = ref.Title;
  var GenericDescription = ref.GenericDescription;

  return createElement(Fragment, null, createElement(Title, null, i18nTitle), createElement(GenericDescription, null, description));
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

  return createElement(IntegrationFlowStep, {
  icon: icon,
  active: active,
  i18nTooltip: i18nTooltip,
  showDetails: showDetails
}, createElement(IntegrationFlowStepDetails, {
  active: active
}, function (ref) {
  var Title = ref.Title;
  var StepOverview = ref.StepOverview;

  return createElement(Fragment, null, createElement(Title, null, i18nTitle), createElement(StepOverview, {
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

  return createElement("div", {
  className: 'integration-icon'
}, createElement("img", {
  src: startConnectionIcon,
  className: 'integration-icon__icon'
}), createElement("i", {
  className: "fa fa-angle-right integration-icon__divider"
}), createElement("img", {
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
    return createElement("div", {
      className: "integration-progress"
    }, createElement("div", null, createElement("i", {
      "data-testid": "integration-progress-value"
    }, this.props.value, " ( ", this.props.currentStep, " /", ' ', this.props.totalSteps, " )"), this.props.logUrl && createElement("span", {
      "data-testid": "deployment-log-link",
      className: "pull-right"
    }, createElement("a", {
      target: "_blank",
      href: this.props.logUrl
    }, this.props.i18nLogUrlText, " ", createElement(Icon, {
      name: 'external-link'
    })))), createElement(ProgressBar, {
      now: this.props.currentStep,
      max: this.props.totalSteps,
      style: {
        height: 6
      }
    }));
  };

  return IntegrationProgress;
}(PureComponent));

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

    return createElement(Label, {
      type: labelType
    }, label);
  };

  return IntegrationStatus;
}(Component));

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

    return createElement("div", {
      "data-testid": "integration-status-detail",
      className: 'integration-status-detail'
    }, this.props.value && this.props.currentStep && this.props.totalSteps ? createElement(IntegrationProgress, {
      currentStep: this.props.currentStep,
      totalSteps: this.props.totalSteps,
      value: this.props.value,
      logUrl: this.props.logUrl,
      i18nLogUrlText: this.props.i18nLogUrlText
    }) : createElement(Fragment, null, createElement(Spinner, {
      loading: true,
      inline: true
    }), fallbackText));
  };

  return IntegrationStatusDetail;
}(Component));

var IntegrationStepsHorizontalView = /*@__PURE__*/(function (superclass) {
  function IntegrationStepsHorizontalView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationStepsHorizontalView.__proto__ = superclass;
  IntegrationStepsHorizontalView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationStepsHorizontalView.prototype.constructor = IntegrationStepsHorizontalView;

  IntegrationStepsHorizontalView.prototype.render = function render () {
    return createElement("div", {
      className: "integration-steps-horizontal-view"
    }, createElement(Grid, {
      fluid: true,
      xs: 4
    }, createElement(Grid.Row, {
      className: "show-grid"
    }, createElement(Grid.Col, {
      sm: 6,
      md: 4
    }, this.props.steps && this.props.steps[0] ? createElement(Fragment, null, createElement(ListViewIcon, {
      name: 'cube',
      className: "step-icon"
    }), createElement("span", null, createElement("p", null, this.props.steps[0].name))) : null), this.props.steps && this.props.steps.slice(1).map(function (opt, index) { return createElement("div", {
      key: index
    }, createElement(Grid.Col, {
      sm: 6,
      md: 4
    }, createElement(Icon, {
      name: 'angle-right',
      className: "step-arrow"
    })), createElement(Grid.Col, {
      xsHidden: true,
      md: 4
    }, createElement("span", null, createElement(Icon, {
      name: 'cube',
      className: "step-icon"
    }), createElement("p", {
      key: index
    }, opt.name)))); }))));
  };

  return IntegrationStepsHorizontalView;
}(Component));

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
    return createElement("div", {
      className: classnames('integration-vertical-flow', {
        'is-expanded': this.state.expanded
      })
    }, createElement("div", {
      className: "integration-vertical-flow__body"
    }, this.props.children(this.state)), createElement("div", {
      className: "integration-vertical-flow__expand"
    }, createElement(ButtonLink, {
      onClick: this.toggleExpanded
    })));
  };

  return IntegrationVerticalFlow;
}(Component));
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
    return createElement(ListView, null, this.props.children);
  };

  return IntegrationsList;
}(Component));

var IntegrationsListItem = /*@__PURE__*/(function (superclass) {
  function IntegrationsListItem () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListItem.__proto__ = superclass;
  IntegrationsListItem.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListItem.prototype.constructor = IntegrationsListItem;

  IntegrationsListItem.prototype.render = function render () {
    return createElement(ListView.Item, {
      actions: this.props.actions,
      heading: this.props.integrationName,
      description: this.props.isConfigurationRequired ? createElement(Fragment, null, createElement(Icon, {
        type: 'pf',
        name: 'warning-triangle-o'
      }), this.props.i18nConfigurationRequired) : '',
      additionalInfo: [createElement(ListView.InfoItem, {
        key: 1
      }, this.props.currentState === 'Pending' ? createElement(IntegrationStatusDetail, {
        targetState: this.props.targetState,
        value: this.props.monitoringValue,
        currentStep: this.props.monitoringCurrentStep,
        totalSteps: this.props.monitoringTotalSteps,
        logUrl: this.props.monitoringLogUrl,
        i18nProgressPending: this.props.i18nProgressPending,
        i18nProgressStarting: this.props.i18nProgressStarting,
        i18nProgressStopping: this.props.i18nProgressStopping,
        i18nLogUrlText: this.props.i18nLogUrlText
      }) : createElement(IntegrationStatus, {
        currentState: this.props.currentState,
        i18nPublished: this.props.i18nPublished,
        i18nUnpublished: this.props.i18nUnpublished,
        i18nError: this.props.i18nError
      }))],
      leftContent: createElement(IntegrationIcon, {
        startConnectionIcon: this.props.startConnectionIcon,
        finishConnectionIcon: this.props.finishConnectionIcon
      }),
      stacked: true
    });
  };

  return IntegrationsListItem;
}(Component));

var IntegrationsListItemActions = /*@__PURE__*/(function (superclass) {
  function IntegrationsListItemActions () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListItemActions.__proto__ = superclass;
  IntegrationsListItemActions.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListItemActions.prototype.constructor = IntegrationsListItemActions;

  IntegrationsListItemActions.prototype.render = function render () {
    return createElement(Fragment, null, createElement(ButtonLink, {
      href: '#todo'
    }, "View"), createElement(DropdownKebab, {
      id: ("integration-" + (this.props.integrationId) + "-action-menu"),
      pullRight: true
    }, this.props.actions.map(function (a, idx) { return createElement("li", {
      role: 'presentation',
      key: idx
    }, a.href ? createElement(Link, {
      to: a.href,
      onClick: a.onClick,
      role: 'menuitem',
      tabIndex: idx + 1
    }, a.label) : createElement("a", {
      href: 'javascript:void(0)',
      onClick: a.onClick,
      role: 'menuitem',
      tabIndex: idx + 1
    }, a.label)); })));
  };

  return IntegrationsListItemActions;
}(Component));

var IntegrationsListItemUnreadable = function (ref) {
  var integrationName = ref.integrationName;
  var i18nDescription = ref.i18nDescription;
  var rawObject = ref.rawObject;

  var onClick = function () { return window.alert(rawObject); };

  return createElement(ListView.Item, {
    heading: integrationName,
    actions: createElement(ButtonLink, {
      onClick: onClick
    }, "Integration JSON"),
    description: i18nDescription,
    stacked: true
  });
};

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var ItemSkeleton = function () { return createElement(ContentLoader, {
  height: 80,
  width: 500,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: {
    height: 80,
    width: '100%'
  }
}, createElement("circle", {
  cx: "35",
  cy: "40",
  r: "35"
}), createElement("circle", {
  cx: "115",
  cy: "40",
  r: "35"
}), createElement("rect", {
  x: "185",
  y: "20",
  rx: "5",
  ry: "5",
  width: 400 * getRandom(0.6, 1),
  height: "18"
}), createElement("rect", {
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
    return createElement(Fragment, null, createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, createElement("div", null, createElement(ItemSkeleton, null))), createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, createElement("div", null, createElement(ItemSkeleton, null))), createElement("div", {
      className: 'list-group-item',
      "data-testid": "integration-list-skeleton"
    }, createElement("div", null, createElement(ItemSkeleton, null))));
  };

  return IntegrationsListSkeleton;
}(PureComponent));

var IntegrationsListView = /*@__PURE__*/(function (superclass) {
  function IntegrationsListView () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) IntegrationsListView.__proto__ = superclass;
  IntegrationsListView.prototype = Object.create( superclass && superclass.prototype );
  IntegrationsListView.prototype.constructor = IntegrationsListView;

  IntegrationsListView.prototype.render = function render () {
    return createElement(Fragment, null, createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(ButtonLink, {
      href: this.props.linkToIntegrationImport
    }, this.props.i18nImport), createElement(ButtonLink, {
      href: this.props.linkToIntegrationCreation,
      as: 'primary'
    }, this.props.i18nLinkCreateConnection))), createElement(Container, null, this.props.children));
  };

  return IntegrationsListView;
}(Component));

var RecentUpdatesItem = function (ref) {
  var integrationName = ref.integrationName;
  var integrationCurrentState = ref.integrationCurrentState;
  var integrationDate = ref.integrationDate;
  var i18nError = ref.i18nError;
  var i18nPublished = ref.i18nPublished;
  var i18nUnpublished = ref.i18nUnpublished;

  return createElement(Grid.Row, null, createElement(Grid.Col, {
  sm: 5
}, integrationName), createElement(Grid.Col, {
  sm: 3
}, createElement(IntegrationStatus, {
  currentState: integrationCurrentState,
  i18nError: i18nError,
  i18nPublished: i18nPublished,
  i18nUnpublished: i18nUnpublished
})), createElement(Grid.Col, {
  sm: 4
}, new Date(integrationDate).toLocaleString()));
};

var RecentUpdatesSkeleton = function (props) { return createElement(ContentLoader, Object.assign({
  height: 150,
  width: 350,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb"
}, props), createElement("rect", {
  x: "20",
  y: "5",
  rx: "5",
  ry: "5",
  width: "100",
  height: "10"
}), createElement("rect", {
  x: "150",
  y: "5",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), createElement("rect", {
  x: "250",
  y: "5",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), createElement("rect", {
  x: "20",
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "10"
}), createElement("rect", {
  x: "150",
  y: "35",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), createElement("rect", {
  x: "250",
  y: "35",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), createElement("rect", {
  x: "20",
  y: "65",
  rx: "5",
  ry: "5",
  width: "95",
  height: "10"
}), createElement("rect", {
  x: "150",
  y: "65",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), createElement("rect", {
  x: "250",
  y: "65",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), createElement("rect", {
  x: "20",
  y: "95",
  rx: "5",
  ry: "5",
  width: "125",
  height: "10"
}), createElement("rect", {
  x: "150",
  y: "95",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), createElement("rect", {
  x: "250",
  y: "95",
  rx: "5",
  ry: "5",
  width: "40",
  height: "10"
}), createElement("rect", {
  x: "20",
  y: "125",
  rx: "5",
  ry: "5",
  width: "65",
  height: "10"
}), createElement("rect", {
  x: "150",
  y: "125",
  rx: "5",
  ry: "5",
  width: "30",
  height: "10"
}), createElement("rect", {
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
    return createElement(Card, {
      accented: false,
      className: 'TopIntegrationsCard'
    }, createElement(Card.Heading, null, createElement(Card.DropdownButton, {
      id: "cardDropdownButton1",
      title: this.props.i18nLast30Days
    }, createElement(MenuItem, {
      eventKey: "1",
      active: true
    }, this.props.i18nLast30Days), createElement(MenuItem, {
      eventKey: "2"
    }, this.props.i18nLast60Days), createElement(MenuItem, {
      eventKey: "3"
    }, this.props.i18nLast90Days)), createElement(Card.Title, null, this.props.i18nTitle)), createElement(Card.Body, null, this.props.children));
  };

  return TopIntegrationsCard;
}(Component));

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
    return createElement(Card, {
      accented: true,
      aggregated: true,
      matchHeight: true
    }, createElement(Card.Title, {
      className: 'text-left'
    }, createElement("small", {
      className: 'pull-right'
    }, "since ", startAsHuman), createElement("div", null, this.props.i18nTitle)), createElement(Card.Body, null, "TODO"));
  };

  return UptimeMetric;
}(PureComponent));

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
    return createElement(ListViewItem, {
      actions: createElement("div", {
        className: "form-group"
      }, createElement(OverlayTrigger, {
        overlay: this.getEditTooltip(),
        placement: "top"
      }, createElement(Button, {
        bsStyle: "default",
        onClick: this.handleEdit
      }, this.props.i18nEdit)), createElement(DropdownKebab, {
        id: ("view-" + (this.props.viewName) + "-action-menu"),
        pullRight: true
      }, createElement(OverlayTrigger, {
        overlay: this.getDeleteTooltip(),
        placement: "left"
      }, createElement(MenuItem, {
        onClick: this.handleDelete
      }, "Delete")))),
      heading: this.props.viewName,
      description: this.props.viewDescription ? this.props.viewDescription : '',
      hideCloseIcon: true,
      leftContent: this.props.viewIcon ? createElement("div", {
        className: "blank-slate-pf-icon"
      }, createElement("img", {
        src: this.props.viewIcon,
        alt: this.props.viewName,
        width: 46
      })) : createElement(ListViewIcon, {
        name: 'cube'
      }),
      stacked: false
    });
  };

  ViewListItem.prototype.getDeleteTooltip = function getDeleteTooltip () {
    return createElement(Tooltip, {
      id: "deleteTip"
    }, this.props.i18nDeleteTip ? this.props.i18nDeleteTip : this.props.i18nDelete);
  };

  ViewListItem.prototype.getEditTooltip = function getEditTooltip () {
    return createElement(Tooltip, {
      id: "editTip"
    }, this.props.i18nEditTip ? this.props.i18nEditTip : this.props.i18nEdit);
  };

  return ViewListItem;
}(Component));

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
    return createElement(Fragment, null, createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(OverlayTrigger, {
      overlay: this.getImportViewTooltip(),
      placement: "top"
    }, createElement(Button, {
      bsStyle: "default",
      to: this.props.i18nImportView,
      onClick: this.handleImportView
    }, this.props.i18nImportView)), createElement(OverlayTrigger, {
      overlay: this.getCreateViewTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nCreateView)))), this.props.hasListData ? createElement(ListView, null, this.props.children) : createElement(EmptyState, null, createElement(EmptyState.Icon, null), createElement(EmptyState.Title, null, this.props.i18nEmptyStateTitle), createElement(EmptyState.Info, null, this.props.i18nEmptyStateInfo), createElement(EmptyState.Action, null, createElement(OverlayTrigger, {
      overlay: this.getCreateViewTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nCreateView)))));
  };

  ViewList.prototype.getCreateViewTooltip = function getCreateViewTooltip () {
    return createElement(Tooltip, {
      id: "createTip"
    }, this.props.i18nCreateViewTip ? this.props.i18nCreateViewTip : this.props.i18nCreateView);
  };

  ViewList.prototype.getImportViewTooltip = function getImportViewTooltip () {
    return createElement(Tooltip, {
      id: "importViewTip"
    }, this.props.i18nImportViewTip ? this.props.i18nImportViewTip : this.props.i18nImportView);
  };

  return ViewList;
}(Component));

// tslint:disable react-unused-props-and-state
var ViewListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), createElement("rect", {
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

    return createElement(Label, {
      type: labelType
    }, label);
  };

  return VirtualizationPublishStatus;
}(Component));

var VirtualizationPublishStatusDetail = /*@__PURE__*/(function (superclass) {
  function VirtualizationPublishStatusDetail () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) VirtualizationPublishStatusDetail.__proto__ = superclass;
  VirtualizationPublishStatusDetail.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationPublishStatusDetail.prototype.constructor = VirtualizationPublishStatusDetail;

  VirtualizationPublishStatusDetail.prototype.render = function render () {
    return createElement(Fragment, null, createElement(Spinner, {
      loading: true,
      inline: true
    }), this.props.i18nPublishInProgress, this.props.logUrl && createElement("a", {
      target: "_blank",
      href: this.props.logUrl
    }, this.props.i18nLogUrlText, " ", createElement(Icon, {
      name: 'external-link'
    })));
  };

  return VirtualizationPublishStatusDetail;
}(Component));

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
    return createElement(Tooltip, {
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
    return createElement(Fragment, null, createElement(DeleteConfirmationDialog, {
      i18nCancelButtonText: this.props.i18nCancelText,
      i18nDeleteButtonText: this.props.i18nDelete,
      i18nDeleteMessage: this.props.i18nDeleteModalMessage,
      i18nTitle: this.props.i18nDeleteModalTitle,
      showDialog: this.state.showDeleteDialog,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete
    }), createElement(ListViewItem, {
      actions: createElement("div", {
        className: "form-group"
      }, isInProgress ? createElement(VirtualizationPublishStatusDetail, {
        logUrl: this.props.publishLogUrl,
        i18nPublishInProgress: this.props.i18nPublishInProgress,
        i18nLogUrlText: this.props.i18nPublishLogUrlText
      }) : createElement(VirtualizationPublishStatus, {
        currentState: this.props.currentPublishedState,
        i18nPublished: this.props.i18nPublished,
        i18nUnpublished: this.props.i18nDraft,
        i18nError: this.props.i18nError
      }), createElement(OverlayTrigger, {
        overlay: this.getEditTooltip(),
        placement: "top"
      }, createElement(ButtonLink, {
        href: this.props.detailsPageLink,
        as: 'primary'
      }, this.props.i18nEdit)), createElement(DropdownKebab, {
        id: ("virtualization-" + (this.props.virtualizationName) + "-action-menu"),
        pullRight: true
      }, createElement(MenuItem, {
        onClick: this.showDeleteDialog
      }, this.props.i18nDelete), createElement(MenuItem, {
        onClick: this.handleExport
      }, this.props.i18nExport), createElement(MenuItem, {
        onClick: isPublished ? this.handleUnpublish : this.handlePublish
      }, isPublished ? this.props.i18nUnpublish : this.props.i18nPublish))),
      heading: this.props.virtualizationName,
      description: this.props.virtualizationDescription ? this.props.virtualizationDescription : '',
      hideCloseIcon: true,
      leftContent: this.props.icon ? createElement("div", {
        className: "blank-slate-pf-icon"
      }, createElement("img", {
        src: this.props.icon,
        alt: this.props.virtualizationName,
        width: 46
      })) : createElement(ListViewIcon, {
        name: 'database'
      }),
      stacked: true
    }, this.props.children ? createElement(ListView, null, this.props.children) : null));
  };

  return VirtualizationListItem;
}(Component));

var VirtualizationList = /*@__PURE__*/(function (superclass) {
  function VirtualizationList(props) {
    superclass.call(this, props);
    this.handleImport = this.handleImport.bind(this);
  }

  if ( superclass ) VirtualizationList.__proto__ = superclass;
  VirtualizationList.prototype = Object.create( superclass && superclass.prototype );
  VirtualizationList.prototype.constructor = VirtualizationList;

  VirtualizationList.prototype.getCreateVirtualizationTooltip = function getCreateVirtualizationTooltip () {
    return createElement(Tooltip, {
      id: "createTip"
    }, this.props.i18nLinkCreateVirtualizationTip ? this.props.i18nLinkCreateVirtualizationTip : this.props.i18nLinkCreateVirtualization);
  };

  VirtualizationList.prototype.getImportVirtualizationTooltip = function getImportVirtualizationTooltip () {
    return createElement(Tooltip, {
      id: "importTip"
    }, this.props.i18nImportTip ? this.props.i18nImportTip : this.props.i18nImport);
  };

  VirtualizationList.prototype.handleImport = function handleImport () {
    this.props.onImport('');
  };

  VirtualizationList.prototype.render = function render () {
    return createElement(Fragment, null, createElement(Container, null, createElement("h2", null, this.props.i18nTitle), createElement("h3", null, this.props.i18nDescription)), createElement(ListViewToolbar, Object.assign({}, this.props), createElement("div", {
      className: "form-group"
    }, createElement(OverlayTrigger, {
      overlay: this.getImportVirtualizationTooltip(),
      placement: "top"
    }, createElement(Button, {
      bsStyle: "default",
      to: this.props.i18nImport,
      onClick: this.handleImport
    }, this.props.i18nImport)), createElement(OverlayTrigger, {
      overlay: this.getCreateVirtualizationTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nLinkCreateVirtualization)))), this.props.hasListData ? createElement(ListView, null, this.props.children) : createElement(EmptyState, null, createElement(EmptyState.Icon, null), createElement(EmptyState.Title, null, this.props.i18nEmptyStateTitle), createElement(EmptyState.Info, null, this.props.i18nEmptyStateInfo), createElement(EmptyState.Action, null, createElement(OverlayTrigger, {
      overlay: this.getCreateVirtualizationTooltip(),
      placement: "top"
    }, createElement(ButtonLink, {
      href: this.props.linkCreateHRef,
      as: 'primary'
    }, this.props.i18nLinkCreateVirtualization)))));
  };

  return VirtualizationList;
}(Component));

// tslint:disable react-unused-props-and-state
var VirtualizationListSkeleton = function (ref) {
  var width = ref.width;
  var style = ref.style;

  return createElement(ContentLoader, {
  height: 356,
  width: width,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  style: style
}, createElement("circle", {
  cx: "30",
  cy: "40",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "40",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "35",
  rx: "5",
  ry: "5",
  width: "200",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "35",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "110",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "110",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "105",
  rx: "5",
  ry: "5",
  width: "180",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "105",
  rx: "5",
  ry: "5",
  width: "80",
  height: "15"
}), createElement("circle", {
  cx: "30",
  cy: "180",
  r: "16"
}), createElement("circle", {
  cx: "70",
  cy: "180",
  r: "16"
}), createElement("rect", {
  x: "105",
  y: "175",
  rx: "5",
  ry: "5",
  width: "195",
  height: "15"
}), createElement("rect", {
  x: width - 100,
  y: "175",
  rx: "5",
  ry: "5",
  width: "85",
  height: "15"
}));
};

export { ConnectionCard, ConnectionsGrid, ConnectionsGridCell, ConnectionSkeleton, ConnectionsListView, ApiConnectorDetail, ApiConnectorDetailCard, ApiConnectorInfo, ApiConnectorReview, ApiConnectorListItem, ApiConnectorListSkeleton, ApiConnectorListView, ExtensionDetail, ExtensionImportCard, ExtensionImportReview, ExtensionIntegrationsTable, ExtensionListItem, ExtensionListSkeleton, ExtensionListView, ExtensionOverview, ExtensionSupports, AggregatedMetricCard, ConnectionsMetric, Dashboard, IntegrationBoard, RecentUpdatesCard, RecentUpdatesItem, RecentUpdatesSkeleton, TopIntegrationsCard, UptimeMetric, ViewListItem, ViewList, ViewListSkeleton, VirtualizationListItem, VirtualizationList, VirtualizationListSkeleton, VirtualizationPublishStatus, VirtualizationPublishStatusDetail, IntegrationActionSelectorCard, IntegrationDetailDescription, IntegrationDetailEditableName, IntegrationDetailHistoryListView, IntegrationDetailHistoryListViewItem, IntegrationDetailInfo, IntegrationEditorActionsListItem, IntegrationEditorChooseAction, IntegrationEditorChooseConnection, IntegrationEditorConnectionsListItem, IntegrationEditorForm, IntegrationEditorLayout, IntegrationEditorNothingToConfigure, IntegrationEditorStepsList, IntegrationEditorStepsListItem, IntegrationFlowAddStep, IntegrationFlowStep, IntegrationFlowStepDetails, IntegrationFlowStepGeneric, IntegrationFlowStepWithOverview, IntegrationIcon, IntegrationProgress, IntegrationStatus, IntegrationStatusDetail, IntegrationStepsHorizontalView, IntegrationVerticalFlow, IntegrationsList, IntegrationsListItem, IntegrationsListItemActions, IntegrationsListItemUnreadable, IntegrationsListSkeleton, IntegrationsListView, AppLayout, AppTopMenu, ButtonLink, Breadcrumb$1 as Breadcrumb, Container, Loader, PfNavLink, PfVerticalNavItem, TabBar, TabBarItem, WizardStep, WizardSteps, DeleteConfirmationDialog, DndFileChooser, ListViewToolbar, LogViewer, Notifications, UnrecoverableError };
//# sourceMappingURL=ui.mjs.map
