import * as React from 'react';
export interface IIntegrationBoardProps {
    pendingIntegrations: number;
    runningIntegrations: number;
    stoppedIntegrations: number;
    i18nIntegrationStatePending: string;
    i18nIntegrationStateRunning: string;
    i18nIntegrationStateStopped: string;
    i18nIntegrations: string;
    i18nTitle: string;
    i18nTotal: string;
}
export declare class IntegrationBoard extends React.PureComponent<IIntegrationBoardProps> {
    render(): JSX.Element;
}
