import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Banner } from '.';
import type { BannerProps } from '.';

export default {
  title: 'Misc/Banner',
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Banner',
};
