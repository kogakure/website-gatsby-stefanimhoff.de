require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  title: 'Stefan Imhoff - Frontend Developer from Hamburg, Germany',
  titleTemplate: '%s · Stefan Imhoff',
  description:
    'Front-End Web Developer / Designer / Minimalist / Introvert / Japanophile',
  image: '/banner.png',
  twitterUsername: '@kogakure',
  author: 'Stefan Imhoff',
  language: 'en',
  siteUrl: 'https://www.stefanimhoff.de',
  feedUrl: 'https://www.stefanimhoff.de/index.xml',
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-remark-reading-time',
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'showcases',
        path: `${__dirname}/content/showcases/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sketchnotes',
        path: `${__dirname}/content/sketchnotes/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/assets/images/`,
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
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [
                'png',
                'jpg',
                'jpeg',
                'bmp',
                'tiff',
                'svg',
              ],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: true,
              loading: 'lazy',
              maxWidth: 1000,
              showCaptions: ['title'],
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
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(
          './src/layout/page-transition/transition-layout.tsx'
        ),
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        disable: false,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.stefanimhoff.de',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              author
              description
              language
              siteUrl
              title
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                author: site.siteMetadata.author,
                language: site.siteMetadata.language,
                data: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMdx(
                  filter: {
                    fileAbsolutePath: {
                      regex: "/content/posts/"
                    }, 
                    frontmatter: {
                      published: {
                        eq: true
                      }
                    }
                  }, 
                  sort: {
                    order: DESC, 
                    fields: [frontmatter___date]}, 
                    limit: 15) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
          `,
            output: '/index.xml',
            title: 'Stefan Imhoff',
            site_url: 'https://www.stefanimhoff.de/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/imprint/', '/cv/', '/styleguide/'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stefanimhoff.de',
        sitemap: 'https://www.stefanimhoff.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Stefan Imhoff',
        short_name: 'Stefan Imhoff',
        start_url: '/',
        background_color: '#E7E6E4',
        theme_color: '#E7E6E4',
        display: 'standalone',
        icon: 'content/assets/images/logo/icon.svg',
        icon_options: {
          purpose: 'maskable',
        },
        cache_busting_mode: 'none',
      },
    },
    'gatsby-plugin-offline',
  ],
};
