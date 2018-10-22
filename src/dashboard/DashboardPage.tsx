import * as React from 'react';
import { Dashboard } from '../components';
import { WithConnections, WithIntegrationsMetrics, WithMonitoredIntegrations } from '../containers';

export const DashboardPage = () => (
  <WithMonitoredIntegrations>
    {({integrationsCount, integrations}) =>
      <WithIntegrationsMetrics>
        {metrics =>
          <WithConnections>
            {({connectionsCount, connections}) =>
              <Dashboard
                monitoredIntegrations={integrations}
                integrationsCount={integrationsCount}
                connections={connections}
                connectionsCount={connectionsCount}
                metrics={metrics}
              />
            }
          </WithConnections>
        }
      </WithIntegrationsMetrics>
    }
  </WithMonitoredIntegrations>
);