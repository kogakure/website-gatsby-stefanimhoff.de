import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../services/test-utils';

import { Header } from './header';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  navigationYaml: {
    navigation: [
      { text: 'About', url: '/about/' },
      { text: 'Projects', url: '/projects/' },
    ],
  },
}));

describe('Header', () => {
  test('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
