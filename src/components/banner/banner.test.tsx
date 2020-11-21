import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { Banner } from '.';

describe('Banner', () => {
  test('renders correctly', () => {
    const { container } = render(<Banner>Banner</Banner>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Banner>Banner</Banner>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
