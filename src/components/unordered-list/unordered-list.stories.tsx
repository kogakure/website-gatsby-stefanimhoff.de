import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UnorderedList } from '.';
import type { UnorderedListProps } from '.';

export default {
  title: 'Lists/Unordered List',
  component: UnorderedList,
} as Meta;

const Template: Story<UnorderedListProps> = (args) => (
  <UnorderedList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <li>
      Vegetables
      <UnorderedList>
        <li>Tomatoe</li>
        <li>Onion</li>
        <li>Potatoe</li>
      </UnorderedList>
    </li>
  ),
};
