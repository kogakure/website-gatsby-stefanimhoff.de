import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Headline } from '..';
import type { TypographyProps } from '..';

export default {
  title: 'Typography/Headline',
  component: Headline,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Headline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Headline',
};
