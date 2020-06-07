import React from 'react';

import { UnorderedList } from '.';

export default {
  component: UnorderedList,
  title: 'Lists/Unordered List',
};

export const Default = () => (
  <UnorderedList>
    <li>
      Vegetables
      <UnorderedList>
        <li>Tomatoe</li>
        <li>Onion</li>
        <li>Potatoe</li>
      </UnorderedList>
    </li>
  </UnorderedList>
);

export const NoMargin = () => (
  <UnorderedList noMargin>
    <li>
      Vegetables
      <UnorderedList>
        <li>Tomatoe</li>
        <li>Onion</li>
        <li>Potatoe</li>
      </UnorderedList>
    </li>
  </UnorderedList>
);
