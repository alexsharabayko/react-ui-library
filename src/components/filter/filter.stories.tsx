import React from 'react';
import { Filter } from './filter.component';
import { withKnobs } from '@storybook/addon-knobs/dist';
import { FilterGroup } from './filter-group.component';
import { FilterItem } from './filter-item.component';

export default {
  title: 'REACT/Filter',
  decorators: [withKnobs],
  component: Filter,
};

export const withParameters = () => (
  <Filter>
    <FilterGroup criteria="users" title="Users" multiple={true}>
      <FilterItem value="1" title="Louie Popp">
        {(selected: boolean) => <span style={{ color: selected ? 'green' : 'black' }}>Louie Popp</span>}
      </FilterItem>
      <FilterItem value="2" title="Jonas Rafn">
        {(selected: boolean) => <span style={{ color: selected ? 'green' : 'black' }}>Jonas Rafn</span>}
      </FilterItem>
      <FilterItem value="3" title="Fiona Rakipi">
        {(selected: boolean) => <span style={{ color: selected ? 'green' : 'black' }}>Fiona Rakipi</span>}
      </FilterItem>
      <FilterItem value="4" title="Martin Navne">
        {(selected: boolean) => <span style={{ color: selected ? 'green' : 'black' }}>Martin Navne</span>}
      </FilterItem>
    </FilterGroup>
    <FilterGroup criteria="integrations" title="Integrations">
      <FilterItem value="1" title="ActiveCampaign">ActiveCampaign</FilterItem>
      <FilterItem value="2" title="Google Analytics">GoogleAnalytics</FilterItem>
      <FilterItem value="3" title="Instagram">Instagram</FilterItem>
      <FilterItem value="4" title="Woocommerce">Woocommerce</FilterItem>
    </FilterGroup>
  </Filter>
);

