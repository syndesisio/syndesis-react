import { Connector } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export interface IApiConnectorsResponse {
    items: Connector[];
    totalCount: number;
}
export interface IWithApiConnectorsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IApiConnectorsResponse>): any;
}
export declare class WithApiConnectors extends React.Component<IWithApiConnectorsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
