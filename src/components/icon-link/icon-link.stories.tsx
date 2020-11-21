import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';
import { ArrowRight, Download } from '../icons';

import { IconLink } from '.';
import type { IconLinkProps } from '.';

export default {
  title: 'Text Styles/Icon Link',
  component: IconLink,
} as Meta;

const Template: Story<IconLinkProps> = (args) => (
  <Paragraph>
    <IconLink {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Icon Link',
  to: '/',
  icon: <ArrowRight />,
};

export const AnimationRight = Template.bind({});
AnimationRight.args = {
  children: 'Icon Link',
  to: '/',
  icon: <ArrowRight />,
  animation: 'right',
};

export const AnimationDown = Template.bind({});
AnimationDown.args = {
  children: 'Icon Link',
  to: '/',
  icon: <Download />,
  animation: 'down',
};
