import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostsQueryData } from '../typings/PostsQuery';
import { Layout } from '../global/Layout';
import { Image } from '../components/Image';
import { Headline, P } from '../components/Typography';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Headline as="h1">Hello World!</Headline>
      <P>Welcome to your new Gatsby site.</P>
      <P>Now go build something great.</P>
      {posts.map(({ node }) => {
        const {
          excerpt,
          fields: { slug },
          frontmatter: { title, description, date },
        } = node;

        return (
          <article key={slug}>
            <header>
              <h3>
                <Link to={slug}>{title}</Link>
              </h3>
              <small>{date}</small>
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: description || excerpt }} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
