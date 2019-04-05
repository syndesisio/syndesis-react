import { IntegrationMetricsSummary } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IWithIntegrationsMetricsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IntegrationMetricsSummary>): any;
}
export declare class WithIntegrationsMetrics extends React.Component<IWithIntegrationsMetricsProps> {
    render(): JSX.Element;
}
