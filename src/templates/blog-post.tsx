import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../global/Layout';
import { PostQueryData } from '../typings/PostQuery';

const BlogPostTemplate = ({ data }: PostQueryData) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark;

  return (
    <Layout>
      <article>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
