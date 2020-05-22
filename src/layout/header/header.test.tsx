import React from 'react';
import { axe } from 'jest-axe';

import { render } from '../../services/test-utils';
import { darkTheme } from '..';

import { Header } from './header';

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

  test('renders correctly with dark theme', () => {
    const { container } = render(<Header siteTitle="Dark Theme" />, {
      theme: darkTheme,
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const siteTitle = 'I am an accessible Title';
    const { container } = render(<Header siteTitle={siteTitle} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
