import * as React from 'react';
import { Form, FormGroup } from 'patternfly-react';
import {
  getFormControl,
  ISynFormControl,
} from '../../src/FormBuilder/FormUtils';

const getNormalizedControlType = (type: string = ''): string => {
  let fieldType: string = type.toLowerCase();

  switch (fieldType) {
    // native input field types
    case 'checkbox':
    case 'color':
    case 'date':
    case 'datetime-local':
    case 'email':
    case 'file':
    case 'hidden':
    case 'month':
    case 'number':
    case 'password':
    case 'radio':
    case 'range':
    case 'tel':
    case 'url':
    case 'week':
    case 'search':
    case 'select':
    case 'textarea':
    case 'time':
      break;
    // account for some aliases the back end may supply
    case 'boolean': {
      fieldType = 'checkbox';
      break;
    }
    case 'duration':
    case 'int':
    case 'integer': {
      fieldType = 'number';
      break;
    }
    default: {
      fieldType = 'text';
    }
  }

  return fieldType;
};

// formControl renders the actual labels and form controls
const formControl = (
  properties: ISynFormControl,
  controlKey: string
): JSX.Element => {
  let controlId = `${controlKey}-control-id`;
  let type = getNormalizedControlType(properties.type);

  return (
    <React.Fragment>
      <label htmlFor={controlId} className="control-label col-sm-3">
        {properties.displayName}
      </label>

      <div className="col-sm-9">
        {getFormControl(type, controlId, properties)}
        <p className="help-block">{properties.description}</p>
      </div>
    </React.Fragment>
  );
};

// formGroup renders a group of related form elements
const formGroup = (children: JSX.Element, property: string): JSX.Element => {
  return <FormGroup key={property}>{children}</FormGroup>;
};

// formBuilder takes a properties object and dynamically builds a patternfly react form
export const formBuilder = (properties: object): JSX.Element => {
  let formFields: any = [];
  for (const property in properties) {
    // formFields.push(formGroup(formControl({ controlKey: key, properties: properties[key] })));
    formFields.push(
      formGroup(formControl(properties[property], property), property)
    );
  }
  return <Form horizontal>{formFields}</Form>;
};
