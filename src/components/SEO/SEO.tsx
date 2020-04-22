import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadataQuery } from '../../hooks';
import { SiteMetadataQueryData } from '../../typings/SiteMetadataQueryData';

interface SEOProps {
  article?: boolean;
  bodyClass?: string;
  description?: string;
  homepage?: boolean;
  image?: string;
  language?: string;
  pathname?: string;
  robots?: string;
  title?: string;
}

const SEO = ({
  article = false,
  bodyClass,
  description,
  homepage = false,
  image,
  language,
  pathname,
  robots = 'all',
  title,
}: SEOProps) => {
  const { site }: SiteMetadataQueryData = useSiteMetadataQuery();
  const {
    author,
    description: defaultDescription,
    feedUrl,
    image: defaultImage,
    language: defaultLanguage,
    siteUrl,
    title: defaultTitle,
    titleTemplate,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    description: description || defaultDescription,
    feedUrl,
    humans: `${siteUrl}/humans.txt`,
    image: `${siteUrl}${image || defaultImage}`,
    language: language || defaultLanguage,
    title: title || defaultTitle,
    titleTemplate: homepage ? '' : titleTemplate,
    url: `${siteUrl}${pathname || '/'}`,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
        <html lang={seo.language} />
        {bodyClass && <body className={bodyClass} />}
        // Author
        <meta name="author" content={author} />
        // Description
        <meta name="description" content={seo.description} />
        // OpenGraph
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        // Twitter Card
        {twitterUsername && (
          <meta name="twitter:site" content={twitterUsername} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.url && <meta name="twitter:url" content={seo.url} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <meta name="robots" content={robots} />
        // Mobile Tags
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        // Turn off autolinking of numbers and addresses
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        // Font smoothing for IE
        <meta httpEquiv="cleartype" content="on" />
        // RSS/Atom Feed
        <link
          href={seo.feedUrl}
          rel="alternate"
          title="Stefan Imhoff"
          type="application/rss+xml"
        />
        // Humans.txt
        <link type="text/plain" rel="author" href={seo.humans} />
      </Helmet>
    </>
  );
};

export { SEO };
