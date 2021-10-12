import React, { useState } from 'react';
import { Popup } from './popup.component';
import { select, withKnobs } from '@storybook/addon-knobs/dist';
import { Button } from '../button/button.component';

export default {
    title: 'REACT/Popup',
    decorators: [withKnobs],
    component: Popup,
};

export const withParameters = () => {
    return (
      <Popup
        renderActivator={(toggle, ref) => <Button onClick={toggle} ref={ref}>Toggle Popup</Button>}
        position={select('Position', ['bottom', 'right'], 'bottom')}
      >
          <div style={{ width: 300, padding: 15 }}>
              Etiam sit amet ex vitae metus ultricies sagittis. Praesent quis leo in neque posuere consequat. Quisque lorem metus, accumsan sed lectus sed, venenatis rutrum turpis. Etiam ultrices vitae turpis eu consequat. Pellentesque nec ante tempus, facilisis mauris a, suscipit nunc. Vivamus tincidunt justo quis nisl facilisis, id venenatis tellus vulputate. Nam tristique velit eget eros semper interdum. Aenean ultrices ut ligula quis sollicitudin.
          </div>
      </Popup>
    );
};

