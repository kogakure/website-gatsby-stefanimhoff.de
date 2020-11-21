import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Title } from '..';
import type { TypographyProps } from '..';

export default {
  title: 'Typography/Title',
  component: Title,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
};
