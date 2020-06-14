import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../../services/test-utils';

import { AllPosts } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  allJournalPosts: {
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
  describe('AllPosts', () => {
    test('renders correctly', () => {
      const { container } = render(<AllPosts />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<AllPosts />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
