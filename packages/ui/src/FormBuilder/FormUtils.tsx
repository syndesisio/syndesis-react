import * as React from 'react';

export interface ISynFormControl {
  componentProperty?: boolean;
  defaultValue?: string;
  deprecated?: boolean;
  description?: string;
  displayName?: string;
  group?: string;
  javaType?: string;
  kind?: string;
  label?: string;
  labelHint?: string;
  controlHint?: string;
  required?: boolean;
  secret?: boolean;
  type?: string;
  tags?: string[];
  order?: number;
}

export const getNormalizedControlType = (type: string = ''): string => {
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

export const getFormControl = (
  type: string,
  controlId: string,
  properties: ISynFormControl
): JSX.Element => {
  let formField;
  switch (type) {
    case 'select': {
      formField = createSelect(controlId);
      break;
    }
    case 'textarea': {
      formField = createTextArea(controlId);
      break;
    }
    case 'checkbox': {
      formField = createCheckbox(controlId);
      break;
    }
    case 'radio': {
      formField = createRadio(controlId, controlId);
      break;
    }
    case 'duration': {
      formField = createDuration(controlId);
      break;
    }
    default: {
      formField = createInput(type, controlId, properties);
    }
  }
  return formField;
};

export const createInput = (
  type: string,
  id: string,
  properties: ISynFormControl
): JSX.Element => {
  return (
    <input
      id={id}
      type={type}
      defaultValue={properties.defaultValue}
      className="form-control"
    />
  );
};

export const createSelect = (id: string): JSX.Element => {
  return (
    <select id={id} className="form-control">
      <option disabled>Type specification not required</option>
      <option>JSON Schema</option>
      <option>JSON Instance</option>
      <option>XML Schema</option>
      <option>XML Instance</option>
    </select>
  );
};

export const createTextArea = (id: string): JSX.Element => {
  return <textarea id={id} className="form-control" />;
};

export const createCheckbox = (id: string): JSX.Element => {
  return <input id={id} type="checkbox" className="form-control" />;
};

export const createRadio = (id: string, name: string): JSX.Element => {
  return <input id={id} type="radio" name={name} className="form-control" />;
};

export const createDuration = (id: string): JSX.Element => {
  return <input id={id} type="duration" className="form-control" />;
};
