var formik = require('formik');
var patternflyReact = require('patternfly-react');
var React = require('react');

function getValidationState(ref) {
  var form = ref.form;
  var field = ref.field;

  return form.touched[field.name] && form.errors[field.name] ? 'error' : form.touched[field.name] ? 'success' : null;
}

var FormInputComponent = function (props) { return React.createElement(patternflyReact.FormGroup, {
  controlId: props.field.name,
  validationState: getValidationState(props)
}, React.createElement(patternflyReact.ControlLabel, null, props.property.displayName), React.createElement(patternflyReact.FormControl, Object.assign({}, props.field, {
  "data-testid": props.field.name,
  disabled: props.form.isSubmitting || props.property.disabled,
  placeholder: props.property.placeholder,
  type: props.type || 'text',
  onChange: props.field.onChange
})), React.createElement(patternflyReact.HelpBlock, null, props.property.description, props.form.errors[props.field.name])); };

var FormSelectComponent = function (props) { return React.createElement(patternflyReact.FormGroup, {
  controlId: props.field.name,
  validationState: getValidationState(props)
}, React.createElement(patternflyReact.ControlLabel, null, props.property.displayName), React.createElement(patternflyReact.FormControl, Object.assign({}, props.field, {
  "data-testid": props.field.name,
  disabled: props.form.isSubmitting || props.property.disabled,
  componentClass: "select"
}), props.property.enum && props.property.enum.map(function (opt) { return React.createElement("option", {
  key: opt.value,
  value: opt.value
}, opt.label); })), React.createElement(patternflyReact.HelpBlock, null, props.property.description, props.form.errors[props.field.name])); };

var FormTextAreaComponent = function (props) { return React.createElement(patternflyReact.FormGroup, {
  controlId: props.field.name,
  validationState: getValidationState(props)
}, React.createElement(patternflyReact.ControlLabel, null, props.property.displayName), React.createElement(patternflyReact.FormControl, Object.assign({}, props.field, {
  "data-testid": props.field.name,
  disabled: props.form.isSubmitting || props.property.disabled,
  componentClass: "textarea"
})), React.createElement(patternflyReact.HelpBlock, null, props.property.description, props.form.errors[props.field.name])); };

var FormCheckboxComponent = function (props) { return React.createElement(patternflyReact.FormGroup, {
  controlId: props.field.name,
  validationState: getValidationState(props)
}, React.createElement(patternflyReact.Checkbox, Object.assign({}, props.field, {
  id: props.field.name,
  checked: props.field.value,
  "data-testid": props.field.name,
  disabled: props.form.isSubmitting || props.property.disabled
}), props.property.displayName), React.createElement(patternflyReact.HelpBlock, null, props.property.description, props.form.errors[props.field.name])); };

var FormHiddenComponent = function (props) { return React.createElement("div", null, React.createElement("input", Object.assign({
  type: props.type,
  id: props.name,
  "data-testid": props.name
}, props.field)), props.form.touched[props.field.name] && props.form.errors[props.field.name] && React.createElement("div", {
  className: "error"
}, props.form.errors[props.field.name])); };

var FormBuilder = /*@__PURE__*/(function (superclass) {
  function FormBuilder() {
    var this$1 = this;

    superclass.apply(this, arguments);
    /**
     * Converts a property configuration to some kind of input field
     * @param props
     */

    this.getField = function (props) {
      // Massage the value in the definition to an input type
      var type = this$1.massageType(props.property);
      var componentTypemaps = {
        checkbox: FormCheckboxComponent,
        hidden: FormHiddenComponent,
        select: FormSelectComponent,
        textarea: FormTextAreaComponent
      };

      var validate = function (value) {
        if (props.property.required && !value) {
          return this$1.props.i18nRequiredProperty;
        }

        return undefined;
      };

      return React.createElement(formik.Field, Object.assign({
        key: props.property.name,
        name: props.property.name,
        type: type,
        validate: validate
      }, props, {
        component: componentTypemaps[type] || FormInputComponent
      }));
    };
  }

  if ( superclass ) FormBuilder.__proto__ = superclass;
  FormBuilder.prototype = Object.create( superclass && superclass.prototype );
  FormBuilder.prototype.constructor = FormBuilder;

  FormBuilder.prototype.render = function render () {
    var fields = this.enrichAndOrderProperties(this.props.definition);
    var massagedValue = this.sanitizeValues(this.props.definition, this.props.initialValue);
    return this.props.children({
      fields: fields,
      getField: this.getField,
      initialValue: massagedValue,
      onSave: this.props.onSave
    });
  };
  /**
   * Ensure that the input values match the property definitions
   */


  FormBuilder.prototype.sanitizeValues = function sanitizeValues (definition, initialValue) {
    var this$1 = this;

    return Object.keys(definition).reduce(function (result, key) {
      var obj;

      var prop = definition[key];
      var value = this$1.massageValue(prop, initialValue[key]);

      if (value == null) {
        value = this$1.massageValue(prop, prop.defaultValue);
      }

      return Object.assign({}, result,
        ( obj = {}, obj[key] = value, obj ));
    }, {});
  };
  /**
   * Add the 'name' field from the property ID and sort them by the 'order' property
   */


  FormBuilder.prototype.enrichAndOrderProperties = function enrichAndOrderProperties (definition) {
    var this$1 = this;

    return Object.keys(definition).map(function (key) { return (Object.assign({}, definition[key],
      {name: key,
      required: this$1.massageRequired(definition[key]),
      type: this$1.massageType(definition[key])})); }).sort(function (a, b) {
      var aOrder = a.order || 0;
      var bOrder = b.order || 0;
      return aOrder - bOrder;
    });
  };
  /**
   * Converts various values passed into the property type to known input types
   *
   * @param property
   */


  FormBuilder.prototype.massageType = function massageType (property) {
    var type = property.type || 'text';

    switch (type) {
      case 'int':
      case 'integer':
      case 'long':
        type = 'number';
        break;

      case 'string':
        type = 'text';
        break;

      case 'boolean':
        type = 'checkbox';
    }

    if (property.enum && property.enum.length) {
      type = 'select';
    }

    if (property.secret) {
      type = 'password';
    }

    return type;
  };
  /**
   * Ensure that the 'required' property is false for checkboxes and hidden fields
   *
   * This is a candidate for removal in the future, as it's a workaround
   *
   * @param property
   */


  FormBuilder.prototype.massageRequired = function massageRequired (property) {
    switch (property.type) {
      case 'boolean':
      case 'checkbox':
      case 'hidden':
        return false;

      default:
        return property.required;
    }
  };
  /**
   * Converts the given value from a string to the type defined in the property definition
   *
   * This is a candidate for removal as it's a workaround
   *
   * @param property
   * @param value
   */


  FormBuilder.prototype.massageValue = function massageValue (property, value) {
    if (value === undefined || value === null) {
      return value;
    }

    switch (property.type) {
      case 'number':
        return parseInt(value, 10);

      case 'boolean':
      case 'checkbox':
        return String(value).toLocaleLowerCase() === 'true';

      default:
        return value;
    }
  };

  return FormBuilder;
}(React.Component));

var AutoForm = /*@__PURE__*/(function (superclass) {
  function AutoForm () {
    superclass.apply(this, arguments);
  }

  if ( superclass ) AutoForm.__proto__ = superclass;
  AutoForm.prototype = Object.create( superclass && superclass.prototype );
  AutoForm.prototype.constructor = AutoForm;

  AutoForm.prototype.render = function render () {
    var this$1 = this;

    return React.createElement(React.Fragment, null, React.createElement(FormBuilder, {
      definition: this.props.definition,
      initialValue: this.props.initialValue,
      onSave: this.props.onSave,
      i18nRequiredProperty: this.props.i18nRequiredProperty
    }, function (ref) {
      var initialValue = ref.initialValue;
      var fields = ref.fields;
      var onSave = ref.onSave;
      var getField = ref.getField;

      return React.createElement(formik.Formik, {
      initialValues: initialValue,
      onSubmit: onSave,
      validate: this$1.props.validate
    }, function (ref) {
      var handleSubmit = ref.handleSubmit;
      var values = ref.values;
      var touched = ref.touched;
      var errors = ref.errors;
      var isValid = ref.isValid;
      var isValidating = ref.isValidating;
      var isSubmitting = ref.isSubmitting;
      var resetForm = ref.resetForm;
      var submitForm = ref.submitForm;

      return this$1.props.children({
      errors: errors,
      fields: React.createElement(React.Fragment, null, fields.map(function (property) { return getField({
        errors: errors,
        property: property,
        touched: touched,
        value: (values || {})[property.name]
      }); })),
      handleSubmit: handleSubmit,
      isSubmitting: isSubmitting,
      isValid: isValid,
      isValidating: isValidating,
      resetForm: resetForm,
      submitForm: submitForm,
      values: values
    });
      });
    }));
  };

  return AutoForm;
}(React.Component));

exports.AutoForm = AutoForm;
//# sourceMappingURL=auto-form.js.map
