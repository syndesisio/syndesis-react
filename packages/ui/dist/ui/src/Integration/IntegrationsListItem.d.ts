import * as React from 'react';
import { IntegrationState } from './models';
export interface IIntegrationsListItemProps {
    integrationName: string;
    currentState: IntegrationState;
    targetState: IntegrationState;
    isConfigurationRequired: boolean;
    monitoringValue?: string;
    monitoringCurrentStep?: number;
    monitoringTotalSteps?: number;
    monitoringLogUrl?: string;
    startConnectionIcon: string;
    finishConnectionIcon: string;
    actions: any;
    i18nConfigurationRequired: string;
    i18nError: string;
    i18nPublished: string;
    i18nProgressPending: string;
    i18nProgressStarting: string;
    i18nProgressStopping: string;
    i18nUnpublished: string;
    i18nLogUrlText: string;
}
export declare class IntegrationsListItem extends React.Component<IIntegrationsListItemProps> {
    render(): JSX.Element;
}
