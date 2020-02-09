import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Sample } from '.';

describe('Sample', () => {
  test('renders correctly', () => {
    const { container } = render(<Sample />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Sample />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
