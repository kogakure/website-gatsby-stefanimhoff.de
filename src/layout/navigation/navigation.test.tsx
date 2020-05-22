import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../services/test-utils';

import { Navigation } from './navigation';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  navigationYaml: {
    navigation: [
      { text: 'About', url: '/about/' },
      { text: 'Projects', url: '/projects/' },
    ],
  },
}));

describe('Navigation', () => {
  test('renders correctly', () => {
    const { container } = render(<Navigation />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Navigation />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
