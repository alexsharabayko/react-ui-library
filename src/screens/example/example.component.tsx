import React, { ReactElement } from 'react';
import css from './example.module.scss';
import { IIntegration, INTEGRATIONS, TASKS, USERS } from './example.domain';

export interface IExampleProps {
}

/**
* Example Component Description
*/
export const Example = ({}: IExampleProps): ReactElement => {
  return (
    <div>
      <header className="rc-m-b-20">
        <h1>Tasks</h1>
      </header>
      <table className={css.table}>
        <thead>
          <td>Id</td>
          <td>Name</td>
          <td>Completed</td>
          <td>Cpu</td>
          <td>User</td>
          <td>Integration</td>
        </thead>
        <tbody>
          {TASKS.map(task => {
            const userName = USERS.find(u => u.id === task.userId)?.name;
            const integrationTitle = INTEGRATIONS.find(i => i.id === task.integrationId)?.title;

            return (
              <tr>
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
