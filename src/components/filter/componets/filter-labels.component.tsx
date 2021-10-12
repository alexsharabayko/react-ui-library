import React, { ReactElement } from 'react';
import { Badge } from '../../badge/badge.component';
import { IFilterGroupWithItems, ISelectedFilters } from '../filter.domain';
import css from '../filter.module.scss';

export interface IFilterLabelsProps {
  selectedFilters: ISelectedFilters;
  filterGroupsWithItems: IFilterGroupWithItems[];
  onClearClick: (criteria: string) => void;
}

/**
 * FilterLabels Component Description
 */
export const FilterLabels = ({ selectedFilters, filterGroupsWithItems, onClearClick }: IFilterLabelsProps): ReactElement => {
  const keys = Object.keys(selectedFilters);

  if (!keys.length) {
    return null;
  }

  return (
        <ul className={css.labels}>
          {keys.map(criteria => {
            const filterGroup = filterGroupsWithItems.find(fg => fg.criteria === criteria);
            const criteriaTitle = filterGroup?.title;
            const valuesTitles = selectedFilters[criteria].map(value => filterGroup.items.find(i => i.value === value)?.title);

            return (
              <li key={criteria} className={css.label}>
                <Badge icon="x-circle" onIconClick={() => onClearClick(criteria)}>
                  {criteriaTitle}: {valuesTitles.join(', ')}
                </Badge>
              </li>
            );
          })}
        </ul>
  );
};
