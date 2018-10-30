import { IIntegrationsMetrics } from '../containers';
import { useApi } from './useApi';

export function useIntegrationsMetrics() {
  return useApi<IIntegrationsMetrics>('/api/v1/metrics/integrations', {
    errors: 0,
    lastProcessed: 0,
    messages: 0,
    metricsProvider: '',
    start: 0,
    topIntegrations: {},
  });
}