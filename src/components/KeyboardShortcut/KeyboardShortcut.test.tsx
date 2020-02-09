import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { KeyboardShortcut } from '.';

describe('KeyboardShortcut', () => {
  test('renders correctly', () => {
    const { container } = render(<KeyboardShortcut />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<KeyboardShortcut />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
