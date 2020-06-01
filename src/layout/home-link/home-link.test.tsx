import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { HomeLink } from './home-link';

describe('HomeLink', () => {
  test('renders correctly', () => {
    const { container } = render(<HomeLink />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with custom "to" renders correctly', () => {
    const { container } = render(<HomeLink to="/some-page/" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<HomeLink />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
