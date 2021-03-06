import React from 'react';
import { axe } from 'jest-axe';
import * as Gatsby from 'gatsby';

import { render } from '../../services/test-utils';

import { Layout } from '.';

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
  allNavigationYaml: {
    nodes: [
      { text: 'About', url: '/about/' },
      { text: 'Projects', url: '/projects/' },
    ],
  },
}));

describe('Layout', () => {
  test('renders correctly', () => {
    const { container } = render(<Layout>Layout</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "green" renders correctly', () => {
    const { container } = render(<Layout variant="green">Layout</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "blue" renders correctly', () => {
    const { container } = render(<Layout variant="blue">Layout</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('with variant "brown" renders correctly', () => {
    const { container } = render(<Layout variant="brown">Layout</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('is accessible', async () => {
    const { container } = render(<Layout>Layout</Layout>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
