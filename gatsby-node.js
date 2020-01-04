const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const filePath = createFilePath({ node, getNode });
    const cleanFilePath = filePath.replace(/\/\d{4}/, '');
    const { language, robots } = node.frontmatter;

    createNodeField({
      name: 'slug',
      node,
      value: cleanFilePath,
    });

    createNodeField({
      name: 'language',
      node,
      value: language || 'en',
    });

    createNodeField({
      name: 'robots',
      node,
      value: robots || 'all',
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');
  const result = await graphql(`
    {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              language
              robots
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};
