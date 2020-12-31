import React from 'react';
import { graphql } from 'gatsby';

import { PostPageContextData, PostQueryData } from '../typings/graphql';
import { Layout, ContentGrid, SEO, Pagination } from '../layout';
import { Footer, Meta, Post, Title } from '../screens/journal-detail';

export type JournalTemplateProps = {
  readonly data: PostQueryData;
  readonly pageContext: PostPageContextData;
};

const JournalTemplate = ({ data, pageContext }: JournalTemplateProps) => {
  const {
    body,
    frontmatter: { title, date, description, attribution },
    fields: {
      readingTime: { text },
      language,
      robots,
      slug,
    },
  } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout homeTo="/journal/">
      <SEO
        article
        description={description}
        language={language}
        pathname={slug}
        robots={robots}
        title={title}
      />
      <article>
        <ContentGrid rowGap size="fullsize">
          <Title>{title}</Title>
          <Meta date={date} readingTime={text} />
          <Post body={body} />
          {attribution && <Footer attribution={attribution} />}
          {previous === false ? null : (
            <>
              {previous && (
                <Pagination
                  text={previous.node.frontmatter.title}
                  to={previous.node.fields.slug}
                  variant="left"
                />
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Pagination
                  text={next.node.frontmatter.title}
                  to={next.node.fields.slug}
                  variant="right"
                />
              )}
            </>
          )}
        </ContentGrid>
      </article>
    </Layout>
  );
};

export default JournalTemplate;

export const pageQuery = graphql`
  query JournalPostBySlug($slug: String!) {
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
