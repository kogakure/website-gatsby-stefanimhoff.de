import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NetflixFlag } from '.';
import type { NetflixFlagProps } from '.';

export default {
  title: 'Misc/Flag/NetflixFlag',
  component: NetflixFlag,
} as Meta;

const Template: Story<NetflixFlagProps> = (args) => <NetflixFlag {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '80014749',
};
