import { Form } from 'patternfly-react';
import * as React from 'react';
import { FormControlHelp } from '../../src/FormBuilder/FormControlHelp.component';
import {
  getFormControl,
  getNormalizedControlType,
  IFormProperties,
} from '../../src/FormBuilder/FormUtils';

// formControl renders the actual labels and form controls
const formControl = ({ formControlProperty, properties }: any): JSX.Element => {
  const id = `${formControlProperty}-control-id`;
  const type = getNormalizedControlType(properties.type);
  return (
    <div>
      <Form.ControlLabel htmlFor={id} bsClass="control-label col-sm-3">
        {properties.displayName}
        {properties.labelHint && <FormControlHelp />}
      </Form.ControlLabel>
      <div className="col-sm-9">
        {getFormControl({ type, id, properties })}
        <p className="help-block">{properties.description}</p>
      </div>
    </div>
  );
};

// formGroup renders a group of related form elements
const formGroup = ({ formControlProperty, children }: any): JSX.Element => {
  return <Form.FormGroup key={formControlProperty}>{children}</Form.FormGroup>;
};

// formBuilder takes a properties object and dynamically builds a patternfly react form
export const formBuilder = (properties: IFormProperties): JSX.Element => {
  const formGroups: any = [];
  for (const propertyName in properties) {
    if (!properties.hasOwnProperty(propertyName)) {
      continue;
    }

    formGroups.push(
      formGroup({
        children: formControl({
          formControlProperty: propertyName,
          properties: properties[propertyName],
        }),
        formControlProperty: propertyName,
      })
    );
  }

  return <Form horizontal={true}>{formGroups}</Form>;
};
