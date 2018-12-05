import * as React from 'react';
import { Form, FormGroup } from 'patternfly-react';
import {
  getFormControl,
  getNormalizedControlType,
} from '../../src/FormBuilder/FormUtils';

// formControl renders the actual labels and form controls
const formControl = ({ formControlProperty, properties }: any): JSX.Element => {
  let controlId = `${formControlProperty}-control-id`;
  let type = getNormalizedControlType(properties.type);

  return (
    <div>
      <label htmlFor={controlId} className="control-label col-sm-3">
        {properties.displayName}
      </label>

      <div className="col-sm-9">
        {getFormControl(type, controlId, properties)}
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

  // formGroups.push(
  //   formGroup({
  //     formControlProperty: 'host',
  //     children: formControl({
  //       formControlProperty: 'host',
  //       properties: {
  //         componentProperty: true,
  //         defaultValue: 'https://us.api.concursolutions.com',
  //         deprecated: false,
  //         description:
  //           'API Endpoint used to access Concur instance in the form of https://hostname:port. This value depends on the geolocation received from Concur upon registration.',
  //         displayName: 'API Endpoint',
  //         group: 'producer',
  //         javaType: 'java.lang.String',
  //         kind: 'property',
  //         label: 'producer',
  //         required: true,
  //         secret: false,
  //         type: 'string',
  //         tags: ['host'],
  //         order: 10,
  //       }
  //     })
  //   })
  // );

  return <Form horizontal>{formGroups}</Form>;
};
