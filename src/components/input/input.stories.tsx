import React from 'react';
import { Input } from './input.component';
import { text, withKnobs } from '@storybook/addon-knobs/dist';

export default {
    title: 'REACT/Input',
    decorators: [withKnobs],
    component: Input,
};

export const withParameters = () => (
    <Input icon={text('Icon', 'search')} defaultValue={text('Value', '')} placeholder="Search" />
);

