import React, { ReactElement } from 'react';
import css from '../filter.module.scss';
import { Tabs } from '../../tabs/tabs.component';
import { IFilterGroup, IFilterGroupWithItems, IFilterItem, ISelectedFilters } from '../filter.domain';
import { Input } from '../../input/input.component';
import { Tab } from '../../tabs/tab.component';

export interface IFilterBodyProps {
  filterGroupsWithItems: IFilterGroupWithItems[];
  selectedFilters: ISelectedFilters;
  onToggle: (filterGroup: IFilterGroup, filterItem: IFilterItem) => void;
}

/**
 * FilterBody Component Description
 */
export const FilterBody = ({ filterGroupsWithItems, selectedFilters, onToggle }: IFilterBodyProps): ReactElement => {
  return (
    <div className={css.content}>
      <Tabs selectedValue={filterGroupsWithItems[0].criteria}>
        {filterGroupsWithItems.map(filterGroup => {
          return (
            <Tab key={filterGroup.criteria} value={filterGroup.criteria} title={filterGroup.title}>
              <ul>
                <div className="rc-m-b-15">
                  <Input icon="search" placeholder="Search options"/>
                </div>

                {filterGroup.items.map(filterItem => {
                  const selected = selectedFilters[filterGroup.criteria]?.includes(filterItem.value);

                  return (
                    <li key={filterItem.value} onClick={() => onToggle(filterGroup, filterItem)}>
                      {typeof filterItem.children === 'function' ? filterItem.children(selected) : filterItem.children}
                    </li>
                  );
                })}
              </ul>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};
