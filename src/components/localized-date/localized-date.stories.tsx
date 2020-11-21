import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LocalizedDate } from '.';
import type { LocalizedDateProps } from '.';

const date = '2020-01-17T18:00:00';

export default {
  title: 'Helpers/Localized Date',
  component: LocalizedDate,
} as Meta;

const Template: Story<LocalizedDateProps> = (args) => (
  <LocalizedDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date,
};
