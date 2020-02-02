import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostsQueryData } from '../typings/PostsQuery';
import { Layout } from '../components/Layout';
import { LocalizedDate } from '../components/LocalizedDate';
import { Image } from '../components/Image';
import { Typography } from '../components/Typography';
import { SEO } from '../components/SEO';
import { ArrowUp } from '../components/Icons';

const { Title, Headline, Subline, Paragraph, TextLink } = Typography;

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      <Title>Title</Title>
      <Headline>Headline</Headline>
      <Subline>Subline</Subline>
      <Paragraph>This is Paragraph text. With a lot of words.</Paragraph>
      <TextLink href="https://www.google.de">Link to Google</TextLink>
      <br />
      <TextLink to="/post-1/">Gatsby Link</TextLink>
      <br />
      <TextLink to="/post-2/" onClick={() => console.log('Click')}>
        Gatsby Link and onClick
      </TextLink>
      <br />
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
      <Link to="/styleguide/">Styleguide</Link>
      <br />
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/page-markdown/">Go to Markdown Page</Link>
      <br />
      <Link to="https://google.com">Go to Google</Link>
      <br />
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
