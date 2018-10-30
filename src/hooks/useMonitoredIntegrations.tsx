import { IIntegration, IIntegrationMonitoring, IMonitoredIntegration } from '../containers';
import { useApi } from './useApi';
import { useIntegrations } from './useIntegrations';

export function useMonitoredIntegrations() {
  const integrationsApi = useIntegrations();
  const monitoringApi = useApi<IIntegrationMonitoring[]>('/api/v1/monitoring/integrations', []);

  function read() {
    integrationsApi.read();
    monitoringApi.read();
  }

  return {
    data: {
      items: integrationsApi.data.items.map((i: IIntegration): IMonitoredIntegration => ({
        integration: i,
        monitoring: monitoringApi.data.find((m: IIntegrationMonitoring) => m.integrationId === i.id)
      })),
      totalCount: integrationsApi.data.totalCount,
    },
    error: integrationsApi.error,
    hasData: integrationsApi.hasData,
    loading: integrationsApi.loading,
    read
  }
};