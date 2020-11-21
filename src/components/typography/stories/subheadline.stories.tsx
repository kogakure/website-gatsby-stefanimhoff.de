import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Subheadline } from '..';
import type { TypographyProps } from '..';

export default {
  title: 'Typography/Subheadline',
  component: Subheadline,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Subheadline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Subheadline',
};
