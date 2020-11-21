import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { MoreLink } from '.';
import type { MoreLinkProps } from '.';

export default {
  title: 'Text Styles/More Link',
  component: MoreLink,
} as Meta;

const Template: Story<MoreLinkProps> = (args) => (
  <Paragraph>
    <MoreLink {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
};

export const CustomText = Template.bind({});
CustomText.args = {
  to: '/',
  children: 'Custom Text',
};
