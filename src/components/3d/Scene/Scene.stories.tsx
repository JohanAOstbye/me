import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Scene from './Scene';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '3D/Scene',
  component: Scene,
} as ComponentMeta<typeof Scene>;

const Template: ComponentStory<typeof Scene> = (args) => <Scene />;

export const SScene = Template.bind({});
