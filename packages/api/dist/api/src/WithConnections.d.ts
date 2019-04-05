import { ConnectionOverview } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export declare function getConnectionsForDisplay(connections: ConnectionOverview[]): ConnectionOverview[];
export declare function getConnectionsWithFromAction(connections: ConnectionOverview[]): ConnectionOverview[];
export declare function getConnectionsWithToAction(connections: ConnectionOverview[]): ConnectionOverview[];
export interface IConnectionsFetchResponse {
    readonly items: ConnectionOverview[];
    readonly totalCount: number;
}
export interface IConnectionsResponse {
    readonly connectionsForDisplay: ConnectionOverview[];
    readonly connectionsWithToAction: ConnectionOverview[];
    readonly connectionsWithFromAction: ConnectionOverview[];
    readonly dangerouslyUnfilteredConnections: ConnectionOverview[];
    readonly totalCount: number;
}
export interface IWithConnectionsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IConnectionsResponse>): any;
}
export declare function transformResponse(response: IFetchState<IConnectionsFetchResponse>): IFetchState<IConnectionsResponse>;
export declare class WithConnections extends React.Component<IWithConnectionsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
