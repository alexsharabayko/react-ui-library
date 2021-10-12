import { MutableRefObject, useEffect, useRef } from 'react';

export const useWrapperElement = (selector: string): MutableRefObject<HTMLElement> => {
  const wrapperRef = useRef<HTMLElement>(document.createElement(selector));

  useEffect(() => {
    document.body.appendChild(wrapperRef.current);

    return () => {
      document.body.removeChild(wrapperRef.current);
    }
  });

  return wrapperRef;
};
