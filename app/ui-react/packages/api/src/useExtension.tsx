import * as React from 'react';
import { ApiContext } from './ApiContext';
import { callFetch } from './callFetch';
import { ServerEventsContext } from './ServerEventsContext';

export function useExtensionIntegrations(extensionId: string) {
  const apiContext = React.useContext(ApiContext);
  const serverEventsContext = React.useContext(ServerEventsContext);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<false | Error>(false);
  const [integrations, setIntegrations] = React.useState([]);

  React.useEffect(() => {
    const fetchIntegrations = async () => {
      setLoading(true);
      try {
        const response = await callFetch({
          headers: apiContext.headers,
          method: 'GET',
          url: `${apiContext.apiUri}/extensions/${extensionId}/integrations`,
        });
        const result = await response.json();
        setIntegrations(result);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchIntegrations();
  }, [integrations, loading, error]);

  return { integrations, loading, error };
}
