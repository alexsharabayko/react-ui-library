import { ReactNode } from 'react';

export interface ITabsChild {
  title: string;
  value: string;
  children: ReactNode | undefined;
}
