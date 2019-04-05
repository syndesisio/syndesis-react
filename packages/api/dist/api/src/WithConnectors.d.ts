import { Connector } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export interface IConnectorsResponse {
    items: Connector[];
    totalCount: number;
}
export interface IWithConnectorsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IConnectorsResponse>): any;
}
export declare class WithConnectors extends React.Component<IWithConnectorsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
