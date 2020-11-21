import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AmazonBook } from '.';
import type { AmazonBookProps } from '.';

export default {
  title: 'Misc/AmazonBook',
  component: AmazonBook,
} as Meta;

const props = {
  alt: 'Meditations by Marcus Aurelius',
  asin: '0812968255',
};

const Template: Story<AmazonBookProps> = (args) => <AmazonBook {...args} />;

export const Default = Template.bind({});
Default.args = props;

export const Small = Template.bind({});
Small.args = {
  ...props,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...props,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...props,
  size: 'large',
};
