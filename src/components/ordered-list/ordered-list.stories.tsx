import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { OrderedList } from '.';
import type { OrderedListProps } from '.';

export default {
  title: 'Lists/Ordered List',
  component: OrderedList,
} as Meta;

const Template: Story<OrderedListProps> = (args) => <OrderedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <li>
      Early Stoics
      <OrderedList>
        <li>Zeno of Citium</li>
        <li>Chrysippus</li>
        <li>Chrysippus</li>
      </OrderedList>
    </li>
  ),
};
