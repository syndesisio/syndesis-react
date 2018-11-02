import * as React from 'react';
import { Dashboard } from '../../../components/index';
import {
  IIntegration,
  IIntegrationsMetricsTopIntegration,
  IMonitoredIntegration,
  WithConnections,
  WithIntegrationsMetrics,
  WithMonitoredIntegrations
} from '../../../containers/index';

export interface IIntegrationCountsByState {
  Error: number;
  Pending: number;
  Published: number;
  Unpublished: number;
}

export function getIntegrationsCountsByState(
  integrations: IMonitoredIntegration[]
): IIntegrationCountsByState {
  return integrations.reduce(
    (counts, mi) => {
      const stateCount = counts[mi.integration.currentState] || 0;
      return {
        ...counts,
        [mi.integration.currentState]: stateCount + 1
      };
    },
    {
      Error: 0,
      Pending: 0,
      Published: 0,
      Unpublished: 0
    } as IIntegrationCountsByState
  );
}

export function getTimestamp(integration: IIntegration) {
  return integration.updatedAt !== 0
    ? integration.updatedAt
    : integration.createdAt;
}

export function byTimestamp(a: IIntegration, b: IIntegration) {
  const aTimestamp = getTimestamp(a);
  const bTimestamp = getTimestamp(b);
  return bTimestamp - aTimestamp;
}

export function getRecentlyUpdatedIntegrations(
  integrations: IMonitoredIntegration[]
): IIntegration[] {
  return integrations
    .map(mi => mi.integration)
    .sort(byTimestamp)
    .slice(0, 5);
}

export function getTopIntegrations(
  integrations: IMonitoredIntegration[],
  topIntegrations: IIntegrationsMetricsTopIntegration = {}
): IMonitoredIntegration[] {
  const topIntegrationsArray = Object.keys(topIntegrations)
    .map(key => {
      return {
        count: topIntegrations[key],
        id: key
      } as any;
    })
    .sort((a, b) => {
      return b.count - a.count;
    });

  return integrations
    .sort((miA, miB) => byTimestamp(miA.integration, miB.integration))
    .sort((a, b) => {
      const index = topIntegrationsArray.findIndex(
        i => i.id === b.integration.id
      );
      return index === -1 ? topIntegrationsArray.length + 1 : index;
    })
    .reverse()
    .slice(0, 5);
}

export default () => (
  <WithMonitoredIntegrations>
    {({ data: integrationsData, hasData: hasIntegrations }) => (
      <WithIntegrationsMetrics>
        {({ data: metricsData, hasData: hasMetrics }) => (
          <WithConnections>
            {({ data: connectionsData, hasData: hasConnections }) => {
              const integrationStatesCount = getIntegrationsCountsByState(
                integrationsData.items
              );
              return (
                <Dashboard
                  integrationsLoaded={hasIntegrations}
                  connectionsLoaded={hasConnections}
                  metricsLoaded={hasMetrics}
                  integrationsCount={integrationsData.totalCount}
                  integrationsErrorCount={integrationStatesCount.Error}
                  connections={connectionsData.items}
                  connectionsCount={connectionsData.totalCount}
                  metrics={metricsData}
                  runningIntegrations={integrationStatesCount.Published}
                  stoppedIntegrations={integrationStatesCount.Unpublished}
                  pendingIntegrations={integrationStatesCount.Pending}
                  recentlyUpdatedIntegrations={getRecentlyUpdatedIntegrations(
                    integrationsData.items
                  )}
                  topIntegrations={getTopIntegrations(
                    integrationsData.items,
                    metricsData.topIntegrations
                  )}
                />
              );
            }}
          </WithConnections>
        )}
      </WithIntegrationsMetrics>
    )}
  </WithMonitoredIntegrations>
);
