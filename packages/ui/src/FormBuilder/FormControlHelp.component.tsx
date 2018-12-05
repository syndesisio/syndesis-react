import * as React from 'react';

export class FormControlHelp extends React.Component<{}> {
  public render() {
    return (
      <button
        type="button"
        className="popover-pf-info btn btn-link"
        aria-label="Help Text"
      >
        <span aria-hidden="true" className="pficon pficon-info" />
      </button>
    );
  }
}
