import * as React from 'react';
import './Dashboard.css';
export interface IIntegrationsPageProps {
    linkToIntegrations: string;
    linkToIntegrationCreation: string;
    linkToConnections: string;
    linkToConnectionCreation: string;
    integrationsOverview: JSX.Element;
    connectionsOverview: JSX.Element;
    messagesOverview: JSX.Element;
    uptimeOverview: JSX.Element;
    topIntegrations: JSX.Element;
    integrationBoard: JSX.Element;
    integrationUpdates: JSX.Element;
    connections: JSX.Element;
    i18nConnections: string;
    i18nLinkCreateConnection: string;
    i18nLinkCreateIntegration: string;
    i18nLinkToConnections: string;
    i18nLinkToIntegrations: string;
    i18nTitle: string;
}
export declare class Dashboard extends React.PureComponent<IIntegrationsPageProps> {
    render(): JSX.Element;
}
