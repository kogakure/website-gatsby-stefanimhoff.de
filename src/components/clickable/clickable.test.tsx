import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Clickable } from '.';

describe('ThemeToggle', () => {
  test('renders correctly', () => {
    const { container } = render(<Clickable text="Click Me" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Clickable text="Click Me" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
