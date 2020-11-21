import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SubSubheadline } from '..';
import type { TypographyProps } from '..';

export default {
  title: 'Typography/SubSubheadline',
  component: SubSubheadline,
} as Meta;

const Template: Story<TypographyProps> = (args) => <SubSubheadline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'SubSubheadline',
};
