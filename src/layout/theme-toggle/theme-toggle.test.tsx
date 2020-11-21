/* eslint-disable no-underscore-dangle */
import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { ThemeToggle } from '.';

describe('ThemeToggle', () => {
  test('renders correctly', () => {
    const { container } = render(<ThemeToggle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<ThemeToggle />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
