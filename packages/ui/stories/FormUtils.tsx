import * as React from 'react';

export const getFormControl = (type, controlId, properties) => {
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

export const createInput = (type, id, properties) => {
  return (
    <input
      id={id}
      type={type}
      value={properties.defaultValue}
      className="form-control"
    />
  );
};

export const createSelect = id => {
  return (
    <select id={id} className="form-control">
      <option selected disabled>
        Select an option
      </option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
    </select>
  );
};

export const createTextArea = id => {
  return <textarea id={id} className="form-control" />;
};

export const createCheckbox = id => {
  return <input id={id} type="checkbox" className="form-control" />;
};

export const createDuration = id => {
  return <input id={id} type="duration" className="form-control" />;
};
