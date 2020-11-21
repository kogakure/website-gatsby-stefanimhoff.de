import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Mark } from '.';

describe('Mark', () => {
  test('renders correctly', () => {
    const { container } = render(<Mark>Mark</Mark>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Mark>Mark</Mark>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
