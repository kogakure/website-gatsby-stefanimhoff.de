import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../../services/test-utils';

import { Monthly } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allMonthlyJournalPosts: {
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
  describe('Monthly', () => {
    test('renders correctly', () => {
      const { container } = render(<Monthly />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Monthly />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
