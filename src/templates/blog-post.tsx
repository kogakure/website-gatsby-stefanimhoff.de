import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '../components/Layout';
import { PostQueryData } from '../typings/PostQuery';
import { PostPageContextData } from '../typings/PostPageContext';
import { Demo } from '../components/Demo';

const shortcodes = {
  Demo,
  h2: Demo,
};

interface BlogPostTemplateProps {
  readonly data: PostQueryData;
  readonly pageContext: PostPageContextData;
}

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const {
    body,
    frontmatter: { title, date },
    fields: {
      readingTime: { text, words },
    },
  } = data.mdx;
  const { previous, next } = pageContext;

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
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.node.fields.slug}>
                <p>Previous: {previous.node.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}

        {next === false ? null : (
          <>
            {next && (
              <Link to={next.node.fields.slug}>
                <p>Next: {next.node.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
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
        readingTime {
          text
          words
        }
      }
    }
  }
`;
