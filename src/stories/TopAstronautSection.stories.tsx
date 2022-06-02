import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopAstronautSection from "@components/TopAstronautSection/TopAstronautSection";

export default {
    title: 'Example/TopAstronautSection',
    component: TopAstronautSection,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TopAstronautSection>;

const Template: ComponentStory<typeof TopAstronautSection> = (args) => <TopAstronautSection {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
