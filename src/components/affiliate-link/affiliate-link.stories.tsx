import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AffiliateLink } from '.';
import type { AffiliateLinkProps } from '.';

export default {
  title: 'Misc/AffiliateLink',
  component: AffiliateLink,
} as Meta;

const Template: Story<AffiliateLinkProps> = (args) => (
  <AffiliateLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Affiliate Link',
  asin: 'B07NWN6KD6',
};
