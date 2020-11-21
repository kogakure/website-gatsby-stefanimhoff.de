import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { NetflixFlag } from '.';

describe('Flag', () => {
  test('renders correctly', () => {
    const { container } = render(<NetflixFlag id="80014749" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<NetflixFlag id="80014749" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
