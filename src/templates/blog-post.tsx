import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '../global/Layout';
import { PostQueryData } from '../typings/PostQuery';
import { Demo } from '../components/Demo';

const shortcodes = {
  Demo,
};

const BlogPostTemplate = ({ data }: PostQueryData) => {
  const {
    body,
    frontmatter: { title, date },
    fields: {
      readingTime: { text, words },
    },
  } = data.mdx;

  return (
    <Layout>
      <article>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
          <small>
            {words} words, {text}
          </small>
        </header>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <hr />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
        slug
        readingTime {
          text
          words
        }
      }
    }
  }
`;
