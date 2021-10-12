import React, { PropsWithChildren, ReactElement, useState } from 'react';
import css from './filter.module.scss';
import { Popup } from '../popup/popup.component';
import { Button } from '../button/button.component';
import { FilterGroup } from './filter-group.component';
import { useChildrenProps } from '../../hooks/children-props/children-props';
import { FilterItem } from './filter-item.component';
import { IFilterGroup, IFilterGroupWithItems, IFilterItem, ISelectedFilters } from './filter.domain';
import { FilterLabels } from './componets/filter-labels.component';
import { FilterBody } from './componets/filter-body.component';

export interface IFilterProps {
}

/**
 * Filter Component Description
 */
export const Filter = ({ children }: PropsWithChildren<IFilterProps>): ReactElement => {
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({});
  const filterGroups = useChildrenProps<PropsWithChildren<IFilterGroup>>(children, FilterGroup);
  const filterGroupsWithItems = filterGroups.map<IFilterGroupWithItems>(filterGroup => {
    return {
      ...filterGroup,
      items: useChildrenProps<PropsWithChildren<IFilterItem>>(filterGroup.children, FilterItem),
    };
  });

  const toggleCriteria = ({ criteria, multiple }: IFilterGroup, { value }: IFilterItem): void => {
    const selectedFiltersCopy = { ...selectedFilters };
    const values = selectedFiltersCopy[criteria];

    if (values) {
      if (values.includes(value)) {
        selectedFiltersCopy[criteria] = selectedFiltersCopy[criteria].filter(v => v !== value);

        if (!selectedFiltersCopy[criteria].length) {
          delete selectedFiltersCopy[criteria];
        }
      } else {
        selectedFiltersCopy[criteria] = multiple ? selectedFiltersCopy[criteria].concat([value]) : [value];
      }
    } else {
      selectedFiltersCopy[criteria] = [value];
    }

    setSelectedFilters(selectedFiltersCopy);
  };

  const clearCriteria = (criteria: string) => {
    const selectedFiltersCopy = { ...selectedFilters };
    delete selectedFiltersCopy[criteria];
    setSelectedFilters(selectedFiltersCopy);
  };

  return (
    <div className={css.wrapper}>
      <Popup
        renderActivator={(toggle, ref) => (
          <div className={css.controls}>
            <Button onClick={toggle} ref={ref}>
              <i className="rc-icon rc-icon-plus rc-m-r-5"/>
              <span>Add Filter</span>
            </Button>

            <FilterLabels
              selectedFilters={selectedFilters}
              filterGroupsWithItems={filterGroupsWithItems}
              onClearClick={clearCriteria}
            />
          </div>
        )}
        position="bottom"
      >
        <FilterBody
          filterGroupsWithItems={filterGroupsWithItems}
          selectedFilters={selectedFilters}
          onToggle={toggleCriteria}
        />
      </Popup>
    </div>
  );
};
