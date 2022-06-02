import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from "../../pages";

export default {
    title: 'Example/Home',
    component: Home,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
