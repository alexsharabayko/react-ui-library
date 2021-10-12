import React, { PropsWithChildren, ReactElement } from 'react';
import css from './tabs.module.scss';

export interface ITabProps {
  value: string;
  title: string;
}

/**
* Tab Component Description
*/
export const Tab = ({ children }: PropsWithChildren<ITabProps>): ReactElement => {
  return (
    <div>
      {children}
    </div>
  );
};
