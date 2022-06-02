import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlanetInfo from "@components/PlanetInfo/PlanetInfo";

export default {
    title: 'Example/PlanetInfo',
    component: PlanetInfo,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof PlanetInfo>;

const Template: ComponentStory<typeof PlanetInfo> = (args) => <PlanetInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
