import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostsQueryData } from '../typings/PostsQuery';
import { Layout } from '../global/Layout';
import { Image } from '../components/Image';
import { Headline, SubHeadline } from '../components/Typography';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <Headline>Dynamic Headline</Headline>
      <SubHeadline>Dynamic Subheadline</SubHeadline>
      <Headline
        as="h2"
        fontSize="head"
        color="background"
        bg="primary"
        padding="xl"
      >
        Dynamic Headline with custom props
      </Headline>
      {posts.map(({ node }) => {
        const {
          excerpt,
          fields: { slug },
          frontmatter: { title, description, date },
        } = node;

        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>
              <small>{date}</small>
            </header>
            <section>
              <p>{description || excerpt}</p>
            </section>
          </article>
        );
      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allBlogPosts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/src/posts/" }
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
            date(formatString: "DD.MM.YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
