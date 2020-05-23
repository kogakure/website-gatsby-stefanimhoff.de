import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { UpLink } from './up-link';

describe('UpLink', () => {
  test('renders correctly', () => {
    const { container } = render(<UpLink />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<UpLink />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
