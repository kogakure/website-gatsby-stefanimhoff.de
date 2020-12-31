import { graphql, useStaticQuery } from 'gatsby';

import { PostsQueryData } from '../typings/graphql';

export const useHomepageJournalPostsQuery = () => {
  const { homepageJournalPosts }: PostsQueryData = useStaticQuery(graphql`
    {
      homepageJournalPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 6
      ) {
        edges {
          node {
            excerpt(pruneLength: 180, truncate: true)
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `);

  return { homepageJournalPosts };
};
