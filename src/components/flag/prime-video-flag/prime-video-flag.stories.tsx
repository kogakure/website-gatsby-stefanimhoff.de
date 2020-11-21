import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PrimeVideoFlag } from '.';
import type { PrimeVideoFlagProps } from '.';

export default {
  title: 'Misc/Flag/PrimeVideoFlag',
  component: PrimeVideoFlag,
} as Meta;

const Template: Story<PrimeVideoFlagProps> = (args) => (
  <PrimeVideoFlag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'B0874XF36P',
};
