import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Grid } from './grid';

describe('Grid', () => {
  test('renders correctly', () => {
    const { container } = render(<Grid />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Grid />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
