import { PropsWithChildren } from 'react';

export interface IFilterGroup {
  criteria: string;
  title: string;
  multiple?: boolean;
}

export interface IFilterItem {
  value: string;
  title: string;
}

export interface IFilterGroupWithItems extends IFilterGroup {
  items: Array<PropsWithChildren<IFilterItem>>;
}

export interface ISelectedFilters {
  [criteria: string]: string[];
}
