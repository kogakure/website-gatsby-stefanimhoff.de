import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../../services/test-utils';

import { Journal } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

jest.mock('../../../services/random-number', () => ({
  getRandomNumber: () => '3',
}));

useStaticQuery.mockImplementation(() => ({
  homepageJournalPosts: {
    edges: [
      {
        node: {
          excerpt: 'This is an excerpt',
          fields: {
            slug: '/post-1',
          },
          frontmatter: {
            title: 'Post 1',
            date: '2020-05-31T16:00:00.000Z',
          },
        },
      },
    ],
  },
}));

describe('Homepage', () => {
  describe('Journal', () => {
    test('renders correctly', () => {
      const { container } = render(<Journal />);

      expect(container.firstChild).toMatchSnapshot();
    });

    test('is accessible', async () => {
      const { container } = render(<Journal />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
