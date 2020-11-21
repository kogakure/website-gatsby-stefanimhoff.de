import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Mark } from '.';
import type { MarkProps } from '.';

export default {
  title: 'Text Styles/Mark',
  component: Mark,
} as Meta;

const Template: Story<MarkProps> = (args) => (
  <Paragraph>
    <Mark {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is marked text.',
};
