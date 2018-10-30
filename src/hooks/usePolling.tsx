import { useEffect } from 'react';

export function usePolling(functions: any, interval: number) {
  const funArray = Array.isArray(functions) ? functions : [functions];

  function poller() {
    funArray.map(f => f());
  }

  useEffect(
    () => {
      const pollingInterval = setInterval(poller, interval);
      poller();
      return function cleanup() {
        clearInterval(pollingInterval);
      }
    },
    // this is a bit tricky, we have to tell the useEffect not to rerun it unless
    // the functions to be polled did change. But how to know if they changed?
    // Using the length of the array now, but this is probably not the greatest way
    // to solve this.
    [funArray.length]
  );
}