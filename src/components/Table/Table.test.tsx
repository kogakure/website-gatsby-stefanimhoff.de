import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Default as Table } from './Table.stories';

describe('Table', () => {
  test('renders correctly', () => {
    const { container } = render(<Table />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Table />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
