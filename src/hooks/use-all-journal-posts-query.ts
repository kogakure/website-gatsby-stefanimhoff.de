import { graphql, useStaticQuery } from 'gatsby';

import { JournalPostsQueryData } from '../typings/graphql';

export const useAllJournalPostsQuery = () => {
  const { allJournalPosts }: JournalPostsQueryData = useStaticQuery(graphql`
    {
      allJournalPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/" }
          frontmatter: {
            published: { eq: true }
            categories: { ne: "monthly" }
          }
        }
        sort: { order: ASC, fields: [frontmatter___title] }
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

  return { allJournalPosts };
};
