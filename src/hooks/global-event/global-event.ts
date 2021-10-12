import { useEffect } from 'react';

interface IOptions {
  deps?: any[];
  condition?: boolean
}

export const useGlobalEvent = (eventName: string, callback: (e: Event) => void, options?: IOptions): void => {
  const { condition, deps } = options || {};

  useEffect(() => {
    if (condition !== false) {
      document.body.addEventListener(eventName, callback);
    }

    return () => document.body.removeEventListener(eventName, callback);
  }, deps || []);
};
