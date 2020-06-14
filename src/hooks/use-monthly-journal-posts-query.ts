import { graphql, useStaticQuery } from 'gatsby';

import { MonthlyJournalPostsQueryData } from '../typings/graphql';

export const useMonthlyJournalPostsQuery = () => {
  const {
    allMonthlyJournalPosts,
  }: MonthlyJournalPostsQueryData = useStaticQuery(graphql`
    {
      allMonthlyJournalPosts: allMdx(
        filter: {
          frontmatter: {
            published: { eq: true }
            categories: { eq: "monthly" }
          }
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

  return { allMonthlyJournalPosts };
};
