import React, { PropsWithChildren, ReactElement } from 'react';
import css from './badge.module.scss';

export interface IBadgeProps {
  icon?: string;
  onIconClick?: () => void;
}

/**
* Badge Component Description
*/
export const Badge = ({ icon, onIconClick, children }: PropsWithChildren<IBadgeProps>): ReactElement => {
  return (
    <div className={css.badge}>
      <span>{children}</span>
      {!!icon && <i className={`rc-icon rc-icon-${icon}`} onClick={() => onIconClick && onIconClick()} />}
    </div>
  );
};
