import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostsQueryData } from '../typings/PostsQuery';
import { Layout } from '../components/Layout';
import { LocalizedDate } from '../components/LocalizedDate';
import { Image } from '../components/Image';
import { Title, Headline, Subline, Paragraph } from '../components/Typography';
import { SEO } from '../components/SEO';
import { ArrowUp } from '../components/Icons';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      <Title>Title</Title>
      <Headline>Headline</Headline>
      <Subline>Subline</Subline>
      <Paragraph>This is Paragraph text. With a lot of words.</Paragraph>
      <ArrowUp />
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
              <LocalizedDate date={date} />
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
      <Link to="/styleguide/">Styleguide</Link>&nbsp;
      <Link to="/page-2/">Go to page 2</Link>&nbsp;
      <Link to="/page-markdown/">Go to Markdown Page</Link>
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
