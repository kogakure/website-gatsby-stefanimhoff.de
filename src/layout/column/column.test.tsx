import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Column } from './column';

describe('Column', () => {
  test('renders correctly', () => {
    const { container } = render(<Column />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Column />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
