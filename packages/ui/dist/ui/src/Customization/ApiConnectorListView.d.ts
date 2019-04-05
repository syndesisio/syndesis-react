import * as React from 'react';
import { IListViewToolbarProps } from '../Shared';
export interface IApiConnectorListViewProps extends IListViewToolbarProps {
    i18nDescription: string;
    i18nEmptyStateInfo: string;
    i18nEmptyStateTitle: string;
    i18nLinkCreateApiConnector: string;
    i18nLinkCreateApiConnectorTip?: string;
    i18nName: string;
    i18nTitle: string;
    linkCreateApiConnector: string;
}
export declare class ApiConnectorListView extends React.Component<IApiConnectorListViewProps> {
    render(): JSX.Element;
    private getCreateConnectorTooltip;
}
