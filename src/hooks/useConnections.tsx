import { IConnection } from '../containers';
import { useApi } from './useApi';

interface IConnectionsResponse {
  items: IConnection[];
  totalCount: number;
}

export function useConnections() {
  return useApi<IConnectionsResponse>('/api/v1/connections', {
    items: [],
    totalCount: 0
  });
}