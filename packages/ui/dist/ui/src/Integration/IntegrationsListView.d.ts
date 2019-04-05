import * as React from 'react';
import { IListViewToolbarProps } from '../Shared';
export interface IIntegrationsListViewProps extends IListViewToolbarProps {
    linkToIntegrationImport: string;
    linkToIntegrationCreation: string;
    i18nImport: string;
    i18nLinkCreateConnection: string;
}
export declare class IntegrationsListView extends React.Component<IIntegrationsListViewProps> {
    render(): JSX.Element;
}
