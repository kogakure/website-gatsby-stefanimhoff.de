import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '../global/Layout';
import { PostQueryData } from '../typings/PostQuery';

const BlogPostTemplate = ({ data }: PostQueryData) => {
  const {
    body,
    frontmatter: { title, date },
  } = data.mdx;

  return (
    <Layout>
      <article>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
        </header>
        <MDXRenderer>{body}</MDXRenderer>
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
    }
  }
`;
