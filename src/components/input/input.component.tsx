import React, { InputHTMLAttributes, ReactElement } from 'react';
import css from './input.module.scss';
import classNames from 'classnames';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

/**
* Input Component Description
*/
export const Input = ({ icon, ...rest }: IInputProps): ReactElement => {
  const inputClasses = classNames(css.input, {
    [css.withIcon]: !!icon,
  });

  return (
    <div className={css.wrapper}>
      {icon && <i className={`rc-icon rc-icon-${icon}`} />}
      <input className={inputClasses} {...rest} />
    </div>
  );
};
