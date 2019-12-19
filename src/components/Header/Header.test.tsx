import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../utils/test-utils';

import { Header } from './Header';

describe('Header', () => {
  test('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders correctly with prop siteTitle', () => {
    const siteTitle = 'I am the title of the site';
    const { container } = render(<Header siteTitle={siteTitle} />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent(siteTitle);
  });

  test('is accessible', async () => {
    const siteTitle = 'I am an accessible Title';
    const { container } = render(<Header siteTitle={siteTitle} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
