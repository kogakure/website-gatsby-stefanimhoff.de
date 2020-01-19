import React from 'react';
import { Link, graphql } from 'gatsby';

import { PostsQueryData } from '../typings/PostsQuery';
import { Layout } from '../components/Layout';
import { LocalizedDate } from '../components/LocalizedDate';
import { Image } from '../components/Image';
import { Headline, SubHeadline } from '../components/Typography';
import { SEO } from '../components/SEO';
import { Emojify } from '../components/Emojify';
import { ArrowUp } from '../components/Icons';
import { ColorSwatch } from '../components/ColorSwatch';

const IndexPage = ({ data }: PostsQueryData) => {
  const posts = data.allBlogPosts.edges;

  return (
    <Layout>
      <SEO homepage />
      <Headline>
        Headline <Emojify emoji="😎" />
      </Headline>
      <SubHeadline>Subheadline</SubHeadline>
      <p>This is a text</p>
      <ColorSwatch
        color="#005CAF"
        name="Lapis Lazuli"
        description="The soft, slightly purplish blue associated with the semi-precious stone."
      />
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
      <Link to="/page-2/">Go to page 2</Link> –
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
