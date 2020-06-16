import React from 'react';
import { graphql } from 'gatsby';

import { ContentGrid, Layout, SEO } from '../layout';
import { PostsQueryData } from '../typings/graphql';
import { LocalizedDate } from '../components/localized-date';
import { TextLink } from '../components/text-link';
import { Subheadline } from '../components/typography';
import { AboutMe, Title, CoverImage, WhatIDo } from '../screens/homepage';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.homepageJournalPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      <ContentGrid rowGap>
        <Title />
        <CoverImage />
        <AboutMe />
        <WhatIDo />
      </ContentGrid>
      <br />
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
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    homepageJournalPosts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
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
