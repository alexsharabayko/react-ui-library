import React from 'react';
import { Tabs } from './tabs.component';
import { withKnobs } from '@storybook/addon-knobs/dist';
import { Tab } from './tab.component';

export default {
    title: 'REACT/Tabs',
    decorators: [withKnobs],
    component: Tabs,
};

export const withParameters = () => (
    <Tabs selectedValue="comments">
        <Tab value="comments" title="Comments">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac sem placerat, ornare ante eget, mollis purus. Aenean tempus, lectus finibus interdum finibus, tortor nunc bibendum enim, sed semper elit tellus ac ligula. Nunc nunc purus, aliquet quis urna a, eleifend tincidunt eros. Curabitur hendrerit lectus eros, ut tristique urna sodales et. Cras maximus dolor tempor, sagittis est sit amet, fringilla felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi mauris ipsum, convallis ac felis gravida, tempus dictum metus. Phasellus accumsan sapien nibh, non rhoncus nisl auctor a. Quisque at ultricies metus. Praesent vitae cursus quam, quis tempor ante.
        </Tab>
        <Tab value="products" title="Similar Products">
            Integer eget convallis purus. In eu mauris at velit blandit pulvinar. Proin facilisis nibh sit amet lorem posuere, quis efficitur dolor eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget condimentum justo. Aenean venenatis felis enim, et pharetra nisi pulvinar a. Curabitur et laoreet nisi, nec auctor ex. Maecenas bibendum, ligula id elementum vehicula, magna elit dapibus tortor, in feugiat odio urna ut lorem.
        </Tab>
    </Tabs>
);

