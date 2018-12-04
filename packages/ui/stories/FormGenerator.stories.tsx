import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Form, FormGroup } from 'patternfly-react';
import { StoryHelper } from '../.storybook/StoryHelper';
import { formData } from './FormGenerator.data';
import { getFormControl } from './FormUtils';

const stories = storiesOf('Components', module);

interface IFormControl {
  componentProperty: boolean;
  defaultValue: string | number | string[] | undefined;
  deprecated: boolean;
  description: string;
  displayName: string;
  group: string;
  javaType: string;
  kind: string;
  label: string;
  required: boolean;
  secret: boolean;
  type: string;
  tags: string[];
  order: number;
}

const getNormalizedControlType = type => {
  let fieldType = (type || '').toLowerCase();

  switch (fieldType) {
    // native input field types
    case 'checkbox':
    case 'color':
    case 'date':
    case 'datetime-local':
    case 'duration':
    case 'email':
    case 'file':
    case 'hidden':
    case 'month':
    case 'number':
    case 'password':
    case 'range':
    case 'tel':
    case 'url':
    case 'week':
    case 'search':
    case 'select':
    case 'textarea':
    case 'time':
      break;
    case 'boolean': {
      fieldType = 'checkbox';
      break;
    }
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

const formControl = (properties: IFormControl, controlKey: string) => {
  let controlId = `${controlKey}-control-id`;
  let type = getNormalizedControlType(properties.type);

  return (
    <React.Fragment>
      <label htmlFor={controlId} className="control-label col-sm-3">
        {properties.displayName}
      </label>

      <div className="col-sm-9">
        {/* <input id={controlId} type={type} value={value} className="form-control" /> */}
        {getFormControl(type, controlId, properties)}
        <p className="help-block">{properties.description}</p>
      </div>
    </React.Fragment>
  );
};

// formGroup renders a group of related form elements
const formGroup = (children: JSX.Element) => {
  return <FormGroup>{children}</FormGroup>;
};

// formBuilder takes a properties object and dynamically builds a patternfly react form
const formBuilder = (properties: Object) => {
  let formFields: any = [];
  for (const key in properties) {
    // formFields.push(formGroup(formControl({ controlKey: key, properties: properties[key] })));
    formFields.push(formGroup(formControl(properties[key], key)));
  }
  return <Form horizontal>{formFields}</Form>;
};

stories
  .addDecorator(story => <StoryHelper>{story()}</StoryHelper>)
  .add('FormGenerator', () => (
    <React.Fragment>{formBuilder(formData.properties)}</React.Fragment>
  ));
