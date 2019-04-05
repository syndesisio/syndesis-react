import { Action, ConnectionOverview } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IConnectionOverviewExtended extends ConnectionOverview {
    readonly actionsWithFrom: Action[];
    readonly actionsWithTo: Action[];
}
export interface IWithConnectionProps {
    id: string;
    initialValue?: ConnectionOverview;
    children(props: IFetchState<IConnectionOverviewExtended>): any;
}
export declare class WithConnection extends React.Component<IWithConnectionProps> {
    render(): JSX.Element;
}
