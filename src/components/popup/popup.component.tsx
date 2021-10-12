import React, { MutableRefObject, PropsWithChildren, ReactElement, useRef, useState } from 'react';
import css from './popup.module.scss';
import { useWrapperElement } from '../../hooks/wrapper-element/wrapper-element.hook';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { useGlobalEvent } from '../../hooks/global-event/global-event';

export interface IPopupProps {
  renderActivator: (toggle: () => void, ref: MutableRefObject<HTMLButtonElement>) => ReactElement;
  position: 'bottom' | 'right';
}

/**
 * Popup Component Description
 */
export const Popup = ({ renderActivator, position, children }: PropsWithChildren<IPopupProps>): ReactElement => {
  const [show, setShow] = useState(false);
  const wrapperRef = useWrapperElement('rc-popup-wrapper');
  const activatorRef = useRef<HTMLButtonElement>();
  const toggle = () => setShow(!show);
  const activator = renderActivator(toggle, activatorRef);
  const popupClasses = classNames(css.popup, {
    [css.bottom]: position === 'bottom',
    [css.right]: position === 'right',
  });
  let top = 0;
  let left = 0;

  if (show && activatorRef.current) {
    const rect = activatorRef.current.getBoundingClientRect();

    if (position === 'bottom') {
      left = rect.left;
      top = rect.top + rect.height;
    } else if (position === 'right') {
      left = rect.left + rect.width;
      top = rect.top;
    }
  }

  useGlobalEvent('click', (event: MouseEvent) => {
    if (!wrapperRef.current.contains(event.target as any)) {
      setShow(false);
    }
  }, { deps: [show], condition: show });

  return (
    <>
      {activator}

      {show && createPortal((
        <div className={popupClasses} style={{ top, left }}>
          <div className={css.content}>
            {children}
          </div>
        </div>
      ), wrapperRef.current)}
    </>
  );
};
