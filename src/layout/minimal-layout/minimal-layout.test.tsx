import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../services/test-utils';

import { MinimalLayout } from '.';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: 'Author',
      description: 'Description',
      feedUrl: 'http://localhost/feed.xml',
      image: '/banner.png',
      language: 'en',
      siteUrl: 'http://localhost',
      title: 'Title',
      titleTemplate: '%s · Name',
      twitterUsername: '@twitter',
    },
  },
}));

describe('MinimalLayout', () => {
  test('renders correctly', () => {
    const { container } = render(<MinimalLayout />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "green" renders correctly', () => {
    const { container } = render(<MinimalLayout variant="green" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "blue" renders correctly', () => {
    const { container } = render(<MinimalLayout variant="blue" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "brown" renders correctly', () => {
    const { container } = render(<MinimalLayout variant="brown" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<MinimalLayout />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
