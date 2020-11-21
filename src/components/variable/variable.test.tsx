import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Variable } from '.';

describe('Variable', () => {
  test('renders correctly', () => {
    const { container } = render(<Variable>Variable</Variable>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Variable>Variable</Variable>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
