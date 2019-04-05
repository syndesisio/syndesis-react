import * as React from 'react';
import { IListViewToolbarProps } from '../Shared';
export interface IConnectionsListViewProps extends IListViewToolbarProps {
    linkToConnectionCreate: string;
    i18nLinkCreateConnection: string;
}
export declare class ConnectionsListView extends React.Component<IConnectionsListViewProps> {
    render(): JSX.Element;
}
