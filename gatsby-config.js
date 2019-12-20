require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const acronyms = require('./acronyms.json');

module.exports = {
  siteMetadata: {
    title: 'Stefan Imhoff - Developer/Designer from Hamburg, Germany',
    description:
      'Front-End Web Developer / Designer / Minimalist / Introvert / Japanophile',
    author: 'Stefan Imhoff',
  },
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
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-smartypants',
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              withWebP: true,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              aliases: { sh: 'bash' },
              showLineNumbers: false,
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
        icon: 'src/assets/images/gatsby-icon.png',
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
