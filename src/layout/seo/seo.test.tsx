import React from 'react';
import * as Gatsby from 'gatsby';

import { render, waitFor } from '../../services/test-utils';

import { SEO } from './seo';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

function getMeta(metaName: string) {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i += 1) {
    if (
      metas[i].getAttribute('name') === metaName ||
      metas[i].getAttribute('property') === metaName
    ) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
}

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

describe('SEO', () => {
  test('renders correctly', async () => {
    render(<SEO />);
    const title = document.getElementsByTagName('title');

    await waitFor(() => expect(title[0].innerHTML).toEqual('Title · Name'));
    await waitFor(() => expect(getMeta('author')).toEqual('Author'));
    await waitFor(() => expect(getMeta('description')).toEqual('Description'));
    await waitFor(() => expect(getMeta('robots')).toEqual('all'));
    await waitFor(() => expect(getMeta('og:title')).toEqual('Title'));
    await waitFor(() => expect(getMeta('og:url')).toEqual('http://localhost/'));
    await waitFor(() =>
      expect(getMeta('og:description')).toEqual('Description')
    );
    await waitFor(() =>
      expect(getMeta('og:image')).toEqual('http://localhost/banner.png')
    );
    await waitFor(() => expect(getMeta('twitter:site')).toEqual('@twitter'));
    await waitFor(() => expect(getMeta('twitter:title')).toEqual('Title'));
    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual('Description')
    );
    await waitFor(() =>
      expect(getMeta('twitter:url')).toEqual('http://localhost/')
    );
    await waitFor(() =>
      expect(getMeta('twitter:image')).toEqual('http://localhost/banner.png')
    );
  });

  test('renders correctly with article property', async () => {
    render(<SEO article />);

    await waitFor(() => expect(getMeta('og:type')).toEqual('article'));
  });

  test('renders correctly with bodyClass property', async () => {
    render(<SEO bodyClass="my-class" />);
    const body = document.getElementsByTagName('body');

    await waitFor(() => expect(body[0].className).toEqual('my-class'));
  });

  test('renders correctly with description property', async () => {
    const customDescription = 'My custom description';

    render(<SEO description={customDescription} />);

    await waitFor(() =>
      expect(getMeta('description')).toEqual(customDescription)
    );
    await waitFor(() =>
      expect(getMeta('og:description')).toEqual(customDescription)
    );
    await waitFor(() =>
      expect(getMeta('twitter:description')).toEqual(customDescription)
    );
  });

  test('renders correctly with homepage property', async () => {
    render(<SEO homepage />);
    const title = document.getElementsByTagName('title');

    await waitFor(() => expect(title[0].innerHTML).toEqual('Title'));
  });

  test('renders correctly with image property', async () => {
    const customImage = '/image.jpg';

    render(<SEO image={customImage} />);

    await waitFor(() =>
      expect(getMeta('og:image')).toEqual(`http://localhost${customImage}`)
    );
    await waitFor(() =>
      expect(getMeta('twitter:image')).toEqual(`http://localhost${customImage}`)
    );
  });

  test('renders correctly with language property', async () => {
    render(<SEO language="de" />);

    const html = document.getElementsByTagName('html');

    await waitFor(() => expect(html[0].lang).toEqual('de'));
  });

  test('renders correctly with pathname property', async () => {
    const customPath = '/path';

    render(<SEO pathname={customPath} />);

    await waitFor(() =>
      expect(getMeta('og:url')).toEqual(`http://localhost${customPath}`)
    );
    await waitFor(() =>
      expect(getMeta('twitter:url')).toEqual(`http://localhost${customPath}`)
    );
  });

  test('renders correctly with robots property', async () => {
    const customRobots = 'noindex,nofollow';

    render(<SEO robots={customRobots} />);

    await waitFor(() => expect(getMeta('robots')).toEqual(customRobots));
  });

  test('renders correctly with titleproperty', async () => {
    const customTitle = 'Custom Title';

    render(<SEO title={customTitle} />);
    const title = document.getElementsByTagName('title');

    await waitFor(() =>
      expect(title[0].innerHTML).toEqual(`${customTitle} · Name`)
    );
  });
});
