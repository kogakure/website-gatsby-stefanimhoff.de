import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { OrderedList } from '.';

describe('OrderedList', () => {
  test('renders correctly', () => {
    const { container } = render(
      <OrderedList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </OrderedList>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(
      <OrderedList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </OrderedList>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
