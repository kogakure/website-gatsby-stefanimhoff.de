import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { PostsQueryData } from '../typings/graphql';
import { Layout, SEO } from '../layout';
import { LocalizedDate } from '../components/localized-date';
import { TextLink } from '../components/text-link';
import { Subheadline } from '../components/typography';

const Wrapper = styled.div`
  grid-column: 3 / 13;
  grid-row: 1;
`;

const Aside = styled.aside`
  grid-column: 13 / -3;
  grid-row: 1;
`;

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      <Aside>
        Some content in a sidebar, just to show the possibilities of the grid.
      </Aside>
      <Wrapper>
        {posts.map(({ node }) => {
          const {
            excerpt,
            fields: { slug },
            frontmatter: { title, description, date },
          } = node;

          return (
            <article key={slug}>
              <header>
                <Subheadline>
                  <TextLink to={slug}>{title}</TextLink>
                </Subheadline>
                <LocalizedDate date={date} />
              </header>
              <section>
                <p>{description || excerpt}</p>
              </section>
            </article>
          );
        })}
      </Wrapper>
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
