import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PostPageContextData } from '../typings/post-page-context';
import { PostQueryData } from '../typings/post-query';
import { Layout, SEO } from '../layout';
import { MDXProviderContainer } from '../layout/mdx-provider-container';
import { Attribution } from '../components/attribution';
import { LocalizedDate } from '../components/localized-date';
import { Typography } from '../components/typography';

const { Title } = Typography;

export type BlogPostTemplateProps = {
  readonly data: PostQueryData;
  readonly pageContext: PostPageContextData;
};

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const {
    body,
    frontmatter: { title, date, description, cover, attribution },
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
          <Title>{title}</Title>
          <LocalizedDate date={date} />
          <div>
            {words} words, {text}
          </div>
        </header>
        <MDXProviderContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProviderContainer>
        {attribution && <Attribution data={attribution} />}
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
        attribution {
          title
          author
          url
        }
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
