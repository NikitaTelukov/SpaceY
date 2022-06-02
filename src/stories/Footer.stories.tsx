import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from "@components/Footer/Footer";
export default {
    title: 'Example/Footer',
    component: Footer,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
