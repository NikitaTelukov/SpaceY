import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomFormSection from "@components/BottomFormSection/BottomFormSection";
export default {
    title: 'Example/BottomFormSection',
    component: BottomFormSection,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof BottomFormSection>;

const Template: ComponentStory<typeof BottomFormSection> = (args) => <BottomFormSection {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
