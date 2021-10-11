import React from 'react';
import { Button } from './button.component';
import { text, withKnobs } from '@storybook/addon-knobs/dist';
import { action } from '@storybook/addon-actions';

const onClick = action('On Click Handler');

export default {
  title: 'REACT/Button',
  decorators: [withKnobs],
  component: Button,
};

export const withParameters = () => (
  <Button onClick={onClick}>
    <i className="rc-icon rc-icon-plus rc-m-r-5" />
    <span>{text('Content', 'Hello Button!')}</span>
  </Button>
);
