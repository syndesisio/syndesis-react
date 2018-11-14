import { ConnectionOverview } from "@syndesis/models";
import * as React from 'react';
import { IRestState } from "./Rest";
import { SyndesisRest } from "./SyndesisRest";

export interface IConnectionsResponse {
  items: ConnectionOverview[];
  totalCount: number;
}

export interface IWithConnectionsProps {
  children(props: IRestState<IConnectionsResponse>): any;
}

export class WithConnections extends React.Component<IWithConnectionsProps> {
  public render() {
    return (
      <SyndesisRest<IConnectionsResponse>
        url={'/api/v1/connections'}
        poll={5000}
        defaultValue={{
          items: [],
          totalCount: 0
        }}
      >
        {response => this.props.children(response)}
      </SyndesisRest>
    );
  }
}