import * as React from 'react';
import { Form, FormGroup } from 'patternfly-react';
import {
  getFormControl,
  getNormalizedControlType,
} from '../../src/FormBuilder/FormUtils';
import { FormControlHelp } from '../../src/FormBuilder/FormControlHelp.component';

// formControl renders the actual labels and form controls
const formControl = ({ formControlProperty, properties }: any): JSX.Element => {
  let id = `${formControlProperty}-control-id`;
  let type = getNormalizedControlType(properties.type);

  return (
    <div>
      <label htmlFor={id} className="control-label col-sm-3">
        {properties.displayName}
        {properties.labelHint && <FormControlHelp />}
      </label>

      <div className="col-sm-9">
        {getFormControl({ type, id, properties })}
        <p className="help-block">{properties.description}</p>
      </div>
    </div>
  );
};

// formGroup renders a group of related form elements
const formGroup = ({ formControlProperty, children }: any): JSX.Element => {
  return <FormGroup key={formControlProperty}>{children}</FormGroup>;
};

// formBuilder takes a properties object and dynamically builds a patternfly react form
export const formBuilder = (properties: object): JSX.Element => {
  let formGroups: any = [];
  for (const propertyName in properties) {
    formGroups.push(
      formGroup({
        formControlProperty: propertyName,
        children: formControl({
          formControlProperty: propertyName,
          properties: properties[propertyName],
        }),
      })
    );
  }

  return <Form horizontal>{formGroups}</Form>;
};
