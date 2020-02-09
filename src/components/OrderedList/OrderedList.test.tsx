import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { OrderedList } from '.';

describe('OrderedList', () => {
  test('renders correctly', () => {
    const { container } = render(<OrderedList />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<OrderedList />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
