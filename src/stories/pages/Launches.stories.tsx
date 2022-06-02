import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Launches from "../../pages/launches";

export default {
    title: 'Example/Launches',
    component: Launches,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Launches>;

const Template: ComponentStory<typeof Launches> = (args) => <Launches {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
