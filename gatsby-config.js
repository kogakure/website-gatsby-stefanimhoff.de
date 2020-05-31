require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
          families: ['Playfair Display Webfont', 'Playfair Display SC Webfont'],
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
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>',
              className: 'autolink',
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Noctis Minimus',
              wrapperClassName: 'code-block',
              injectStyles: true,
              extensions: ['noctis-theme', 'vscode-apache'],
              languageAliases: {},
              replaceColor: (x) => x,
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
              linkImagesToOriginal: false,
              loading: 'lazy',
              maxWidth: 1200,
              showCaptions: ['title'],
              tracedSVG: {
                color: 'lightgray',
                turnPolicy: 'TURNPOLICY_MAJORITY',
              },
              withWebP: true,
              wrapperStyle: 'margin-bottom: clamp(2.074rem, 4.44vw, 2.488rem)',
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
  ],
};
