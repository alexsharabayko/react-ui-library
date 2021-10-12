import React from 'react';
import { Example } from './example.component';
import { withKnobs } from '@storybook/addon-knobs/dist';

export default {
    title: 'REACT/Example',
    decorators: [withKnobs],
    component: Example,
};

export const withParameters = () => (
    <Example />
);

