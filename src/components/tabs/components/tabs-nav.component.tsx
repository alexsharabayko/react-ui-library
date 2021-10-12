import React, { ReactElement, ReactNode } from 'react';
import css from '../tabs.module.scss';
import classNames from 'classnames';
import { ITabsChild } from '../tabs.domain';

export interface ITabsNavProps {
  tabsChildren: ITabsChild[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

/**
* Tabs Component Description
*/
export const TabsNav = ({ tabsChildren, selectedValue, onSelect }: ITabsNavProps): ReactElement => {
  const handleItemClick = (tabsChild: ITabsChild) => {
    if (tabsChild.value !== selectedValue) {
      onSelect(tabsChild.value);
    }
  };

  return (
    <ul className={css.nav}>
      {tabsChildren.map(tabsChild => {
        const itemClasses = classNames(css.navItem, {
          [css.selected]: tabsChild.value === selectedValue,
        });

        return (
          <li key={tabsChild.value} className={itemClasses} onClick={() => handleItemClick(tabsChild)}>
            {tabsChild.title}
          </li>
        );
      })}
    </ul>
  );
};
