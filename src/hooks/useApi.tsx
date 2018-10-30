import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { AuthContext } from '../auth';
import { callFetch } from '../containers';

export function useApi<T>(url: string, initialData: T) {
  const appContext = useContext(AppContext);
  const authContext = useContext(AuthContext);

  const [data, setData] = useState(initialData);
  const [hasData, setHasData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function read() {
    setLoading(true);
    try {
      const response = await callFetch({
        contentType: 'application/json; charset=utf-8',
        headers: {
          'SYNDESIS-XSRF-TOKEN': 'awesome',
          'X-Forwarded-Access-Token': `${authContext.token}`,
          'X-Forwarded-User': 'admin'
        },
        method: 'GET',
        url: `${appContext.apiUri}${url}`,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setData(await response.json());
      setLoading(false);
      setError(false);
      setHasData(true);
    } catch (e) {
      setData(initialData);
      setLoading(false);
      setError(true);
    }
  }

  return {data, hasData, loading, error, read};
}