import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../../services/test-utils';

import { Links } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allLinkPosts: {
    edges: [
      {
        node: {
          fields: {
            slug: '/post-1',
          },
          frontmatter: {
            title: 'Post 1',
          },
        },
      },
    ],
  },
}));

describe('Journal', () => {
  describe('Links', () => {
    test('renders correctly', () => {
      const { container } = render(<Links />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Links />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
