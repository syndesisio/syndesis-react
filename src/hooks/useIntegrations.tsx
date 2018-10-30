import { IIntegration } from '../containers';
import { useApi } from './useApi';

interface IIntegrationsResponse {
  items: IIntegration[];
  totalCount: number;
}

export function useIntegrations() {
  return useApi<IIntegrationsResponse>('/api/v1/integrations', {
    items: [],
    totalCount: 0
  });
}