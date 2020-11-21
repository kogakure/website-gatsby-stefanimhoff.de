import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DownloadLink } from '.';
import type { DownloadLinkProps } from '.';

export default {
  title: 'Text Styles/Download Link',
  component: DownloadLink,
  argTypes: {
    block: { control: 'boolean' },
  },
} as Meta;

const Template: Story<DownloadLinkProps> = (args) => <DownloadLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
};

export const CustomText = Template.bind({});
CustomText.args = {
  children: 'Download Now!',
  to: '/',
};
