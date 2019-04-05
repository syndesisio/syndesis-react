import { IntegrationOverview } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export interface IIntegrationsResponse {
    items: IntegrationOverview[];
    totalCount: number;
}
export interface IWithIntegrationsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IIntegrationsResponse>): any;
}
export declare class WithIntegrations extends React.Component<IWithIntegrationsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
