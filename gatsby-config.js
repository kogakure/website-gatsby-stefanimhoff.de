require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Stefan Imhoff - Developer/Designer from Hamburg, Germany',
    description:
      'Front-End Web Developer / Designer / Minimalist / Introvert / Japanophile',
    author: 'Stefan Imhoff',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
