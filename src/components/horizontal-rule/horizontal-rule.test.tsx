import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { HorizontalRule } from '.';

describe('HorizontalRule', () => {
  test('renders correctly', () => {
    const { container } = render(<HorizontalRule />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<HorizontalRule />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
