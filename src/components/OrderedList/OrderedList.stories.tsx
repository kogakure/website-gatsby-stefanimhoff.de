import React from 'react';

import { OrderedList } from '.';

export default {
  component: OrderedList,
  title: 'Lists/Ordered List',
};

export const Default = () => (
  <OrderedList>
    <li>
      Early Stoics
      <OrderedList>
        <li>Zeno of Citium</li>
        <li>Chrysippus</li>
        <li>Chrysippus</li>
      </OrderedList>
    </li>
  </OrderedList>
);
