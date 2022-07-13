import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Canvas from './canvas';

export default {
  title: '3d/Canvas',
  component: Canvas,
} as ComponentMeta<typeof Canvas>;

const Template: ComponentStory<typeof Canvas> = (args) => <Canvas {...args} />;

export const CanvasComponent = Template.bind({});
CanvasComponent.args = {};
