import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PostQueryData } from '../typings/PostQuery';
import { PostPageContextData } from '../typings/PostPageContext';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { LocalizedDate } from '../components/LocalizedDate';
import { MDXProviderContainer } from '../components/MDXProviderContainer';

interface BlogPostTemplateProps {
  readonly data: PostQueryData;
  readonly pageContext: PostPageContextData;
}

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const {
    body,
    frontmatter: { title, date, description, cover },
    fields: {
      readingTime: { text, words },
      language,
      robots,
      slug,
    },
  } = data.mdx;
  const { previous, next } = pageContext;
  const imageURL = cover ? cover.publicURL : undefined;

  return (
    <Layout>
      <SEO
        article
        description={description}
        image={imageURL}
        language={language}
        pathname={slug}
        robots={robots}
        title={title}
      />
      <article>
        <header>
          <h1>{title}</h1>
          <LocalizedDate date={date} />
          <div>
            {words} words, {text}
          </div>
        </header>
        <MDXProviderContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProviderContainer>
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
        date
        description
        cover {
          publicURL
        }
      }
      fields {
        slug
        language
        robots
        readingTime {
          text
          words
        }
      }
    }
  }
`;
