import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Flag } from '.';
import type { FlagProps } from '.';

export default {
  component: Flag,
  title: 'Misc/Flag',
} as Meta;

const Template: Story<FlagProps> = (args) => <Flag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
};

export const Linked = Template.bind({});
Linked.args = {
  label: 'link',
  href: 'https://www.stefanimhoff.de',
};
