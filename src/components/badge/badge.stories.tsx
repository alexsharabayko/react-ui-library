import React from 'react';
import { Badge } from './badge.component';
import { withKnobs } from '@storybook/addon-knobs/dist';
import { action } from '@storybook/addon-actions';

const onClick = action('On Click');

export default {
    title: 'REACT/Badge',
    decorators: [withKnobs],
    component: Badge,
};

export const withParameters = () => (
    <Badge icon="x-circle" onIconClick={onClick}>
        Integration: Shopify
    </Badge>
);

