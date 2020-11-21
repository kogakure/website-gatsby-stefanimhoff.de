import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProtectedEmail } from '.';
import type { ProtectedEmailProps } from '.';

export default {
  title: 'Helpers/ProtectedEmail',
  component: ProtectedEmail,
} as Meta;

const Template: Story<ProtectedEmailProps> = (args) => (
  <ProtectedEmail {...args} />
);

export const Default = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Email me today!',
};

export const NoKeyDownload = Template.bind({});
NoKeyDownload.args = {
  noKeyDownload: true,
};
