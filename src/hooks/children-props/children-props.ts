import React, { ComponentClass, FunctionComponent, ReactNode, useMemo } from 'react';

export const useChildrenProps = <T = any>(children: ReactNode, Component: ComponentClass | FunctionComponent): T[] => {
  return useMemo(() => {
    return React.Children.toArray(children).reduce<T[]>((arr, elem) => {
      if (React.isValidElement(elem) && elem.type === Component) {
        arr.push(elem.props);
      }

      return arr;
    }, []);
  }, [children]);
};
