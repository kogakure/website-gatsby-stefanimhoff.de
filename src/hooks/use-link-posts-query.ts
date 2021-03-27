import { graphql, useStaticQuery } from 'gatsby';

import { LinkPostsQueryData } from '../typings/graphql';

export const useLinkPostsQuery = () => {
  const { allLinkPosts }: LinkPostsQueryData = useStaticQuery(graphql`
    {
      allLinkPosts: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, categories: { eq: "links" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return { allLinkPosts };
};
