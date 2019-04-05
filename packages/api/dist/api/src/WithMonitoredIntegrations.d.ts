import { IntegrationMonitoring, IntegrationWithMonitoring } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IIntegrationsResponse } from './WithIntegrations';
import { IChangeEvent } from './WithServerEvents';
export interface IMonitoredIntegrationsResponse {
    items: IntegrationWithMonitoring[];
    totalCount: number;
}
export interface IWithMonitoredIntegrationsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IMonitoredIntegrationsResponse>): any;
}
export declare class WithMonitoredIntegrations extends React.Component<IWithMonitoredIntegrationsProps> {
    changeFilter(change: IChangeEvent): boolean;
    getMonitoredIntegrations(integrations: IIntegrationsResponse, response: IFetchState<IntegrationMonitoring[]>): IMonitoredIntegrationsResponse;
    render(): JSX.Element;
}
