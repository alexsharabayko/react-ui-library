import React, { ReactElement, useState } from 'react';
import css from './example.module.scss';
import { INTEGRATIONS, TASKS, USERS } from './example.domain';
import { FilterGroup } from '../../components/filter/filter-group.component';
import { FilterItem } from '../../components/filter/filter-item.component';
import { Filter } from '../../components/filter/filter.component';
import classNames from 'classnames';
import { ISelectedFilters } from '../../components/filter/filter.domain';

export interface IExampleProps {
}

/**
 * Example Component Description
 */
export const Example = ({}: IExampleProps): ReactElement => {
  const [selectedFilters, setSelectedFilters] = useState<ISelectedFilters>({});
  const criteria = Object.keys(selectedFilters);
  console.log(criteria);
  const filteredTasks = TASKS.filter(task => {
    return criteria.every(c => selectedFilters[c].includes((task as any)[c]))
  });

  return (
    <div className={css.wrapper}>
      <header className="rc-m-b-20">
        <h1 className="rc-m-b-15">Tasks</h1>

        <div>
          <Filter onUpdate={setSelectedFilters}>
            <FilterGroup criteria="userId" title="Users" multiple={true}>
              {USERS.map(user => {
                return (
                  <FilterItem key={user.id} value={user.id} title={user.name}>
                    {(selected: boolean) => {
                      const itemClasses = classNames(css.filterItem, {
                        [css.selected]: selected,
                      });

                      return (
                        <div className={itemClasses}>
                          <img className="rc-m-r-5" src={user.avatarSrc} alt={user.name}/>
                          <span>{user.name}</span>
                        </div>
                      );
                    }}
                  </FilterItem>
                );
              })}
            </FilterGroup>
            <FilterGroup criteria="integrationId" title="Integrations">
              {INTEGRATIONS.map(user => {
                return (
                  <FilterItem key={user.id} value={user.id} title={user.title}>
                    {(selected: boolean) => {
                      const itemClasses = classNames(css.filterItem, {
                        [css.selected]: selected,
                      });

                      return (
                        <div className={itemClasses}>
                          <img className="rc-m-r-5" src={user.imageSrc} alt={user.title}/>
                          <span>{user.title}</span>
                        </div>
                      );
                    }}
                  </FilterItem>
                );
              })}
            </FilterGroup>
          </Filter>
        </div>
      </header>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Completed</th>
            <th>Cpu</th>
            <th>User</th>
            <th>Integration</th>
          </tr>
        </thead>
        <tbody>
        {filteredTasks.map(task => {
          const userName = USERS.find(u => u.id === task.userId)?.name;
          const integrationTitle = INTEGRATIONS.find(i => i.id === task.integrationId)?.title;

          return (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.completed ? 'Done' : 'In Progress'}</td>
              <td>{task.cpu}</td>
              <td>{userName}</td>
              <td>{integrationTitle}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};
