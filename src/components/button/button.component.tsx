import React, { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import css from './button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = ({ children, ...rest }: PropsWithChildren<IButtonProps>): ReactElement => {
  return (
    <button {...rest} className={css.btn}>
      {children}
    </button>
  );
};
