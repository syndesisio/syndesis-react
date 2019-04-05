import * as React from 'react';
import './TopIntegrations.css';
export interface ITopIntegrationsProps {
    i18nLast30Days: string;
    i18nLast60Days: string;
    i18nLast90Days: string;
    i18nTitle: string;
}
export declare class TopIntegrationsCard extends React.Component<ITopIntegrationsProps> {
    render(): JSX.Element;
}
