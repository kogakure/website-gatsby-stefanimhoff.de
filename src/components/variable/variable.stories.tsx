import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Variable } from '.';
import type { VariableProps } from '.';

export default {
  title: 'Text Styles/Code/Variable',
  component: Variable,
} as Meta;

const Template: Story<VariableProps> = (args) => (
  <Paragraph>
    <Variable {...args} />
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  children: 'myVariable',
};
