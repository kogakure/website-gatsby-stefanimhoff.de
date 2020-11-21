import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { MoreLink } from '.';

describe('MoreLink', () => {
  test('renders correctly', () => {
    const { container } = render(<MoreLink to="/" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with custom text renders correctly', () => {
    const { container } = render(<MoreLink to="/">Custom Text</MoreLink>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<MoreLink to="/" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
