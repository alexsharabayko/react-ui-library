import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useState } from 'react';
import css from './tabs.module.scss';
import { Tab } from './tab.component';
import { ITabsChild } from './tabs.domain';
import { TabsNav } from './components/tabs-nav.component';

export interface ITabsProps {
  selectedValue: string;
  onSelect?: (value: string) => void;
}

/**
* Tabs Component Description
*/
export const Tabs = ({ children, selectedValue, onSelect }: PropsWithChildren<ITabsProps>): ReactElement => {
  const [currentValue, setCurrentValue] = useState<string>();
  const tabsChildren: ITabsChild[] = React.Children.toArray(children).reduce<ITabsChild[]>((arr, elem) => {
    if (React.isValidElement(elem) && elem.type === Tab) {
      arr.push({
        title: elem.props.title,
        value: elem.props.value,
        children: elem.props.children,
      });
    }

    return arr;
  }, []);

  if (!tabsChildren.length) {
    return;
  }

  const selectedTab = tabsChildren.find(i => i.value === currentValue) || tabsChildren[0];

  const handleSelect = (value: string) => {
    setCurrentValue(value);
    onSelect && onSelect(value);
  };

  useEffect(() => setCurrentValue(selectedValue), [selectedValue]);

  return (
    <section>
      <TabsNav tabsChildren={tabsChildren} selectedValue={currentValue} onSelect={handleSelect} />

      <div className={css.content}>
        {selectedTab.children}
      </div>
    </section>
  );
};
