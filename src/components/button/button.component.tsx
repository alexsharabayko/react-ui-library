import React, { ButtonHTMLAttributes, forwardRef, MutableRefObject, PropsWithChildren, ReactElement } from 'react';
import css from './button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export const Button = forwardRef(({ children, ...rest }: PropsWithChildren<IButtonProps>, ref: MutableRefObject<HTMLButtonElement>): ReactElement => {
  return (
    <button ref={ref} {...rest} className={css.btn}>
      {children}
    </button>
  );
});
