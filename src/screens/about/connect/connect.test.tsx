import React from 'react';
import * as Gatsby from 'gatsby';
import { axe } from 'jest-axe';

import { render } from '../../../services/test-utils';

import { Connect } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allSocialMediaYaml: {
    nodes: [
      { text: 'Instagram', url: 'https://www.instagram.com/kogakure/' },
      { text: 'Twitter', url: 'https://twitter.com/kogakure' },
    ],
  },
}));

describe('About', () => {
  describe('Connect', () => {
    test('renders correctly', () => {
      const { container } = render(<Connect />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Connect />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
