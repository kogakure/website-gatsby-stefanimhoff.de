import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';

import { DownloadLink } from '.';

describe('DownloadLink', () => {
  test('renders correctly', () => {
    const { container } = render(<DownloadLink to="/" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with custom text renders correctly', () => {
    const { container } = render(<DownloadLink to="/">Download</DownloadLink>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<DownloadLink to="/" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
