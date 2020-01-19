require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const acronyms = require('./acronyms.json');

const siteMetadata = {
  title: 'Stefan Imhoff - Developer/Designer from Hamburg, Germany',
  titleTemplate: '%s · Stefan Imhoff',
  description:
    'Front-End Web Developer / Designer / Minimalist / Introvert / Japanophile',
  image: '/banner.png',
  twitterUsername: '@kogakure',
  author: 'Stefan Imhoff',
  language: 'en',
  siteUrl: 'https://www.stefanimhoff.de',
  feedUrl: 'https://feeds.feedburner.com/stefanimhoff',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-remark-reading-time',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Playfair Display', 'Playfair Display SC'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/default.tsx'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'One Dark Pro',
              wrapperClassName: 'code-block',
              injectStyles: true,
              extensions: [
                {
                  identifier: 'zhuangtongfa.Material-theme',
                  version: '3.2.1',
                },
                {
                  identifier: 'mrmlnc.vscode-apache',
                  version: '1.2.0',
                },
              ],
              extensionDataDirectory: path.resolve('extensions'),
              languageAliases: {},
              replaceColor: x => x,
              getLineClassName: ({
                content,
                index,
                language,
                codeFenceOptions,
              }) => '',
              logLevel: 'error',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              withWebP: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: null,
              rel: 'nofollow noopener noreferrer external',
            },
          },
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Stefan Imhoff',
        short_name: 'Stefan Imhoff',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'content/assets/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
      },
    },
  ],
};
