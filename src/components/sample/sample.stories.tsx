import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Sample } from '.';
import type { SampleProps } from '.';

export default {
  title: 'Text Styles/Code/Sample',
  component: Sample,
} as Meta;

const Template: Story<SampleProps> = (args) => (
  <Paragraph>
    <Sample {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Error -1',
};
