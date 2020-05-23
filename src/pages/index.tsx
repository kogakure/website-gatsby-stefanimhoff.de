import React from 'react';
import { graphql } from 'gatsby';

import { PostsQueryData } from '../typings/posts-query';
import { Layout, SEO } from '../layout';
import { LocalizedDate } from '../components/localized-date';
import { TextLink } from '../components/text-link';
import { Subline } from '../components/typography';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      {posts.map(({ node }) => {
        const {
          excerpt,
          fields: { slug },
          frontmatter: { title, description, date },
        } = node;

        return (
          <article key={slug}>
            <header>
              <Subline>
                <TextLink to={slug}>{title}</TextLink>
              </Subline>
              <LocalizedDate date={date} />
            </header>
            <section>
              <p>{description || excerpt}</p>
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allBlogPosts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fileAbsolutePath
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`;
