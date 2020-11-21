import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { PrimeVideoFlag } from '.';

describe('PrimeVideoFlag', () => {
  test('renders correctly', () => {
    const { container } = render(<PrimeVideoFlag id="B0874XF36P" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<PrimeVideoFlag id="B0874XF36P" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
