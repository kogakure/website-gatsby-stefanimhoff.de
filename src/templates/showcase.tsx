import React from 'react';
import { graphql } from 'gatsby';

import { PostPageContextData, PostQueryData } from '../typings/graphql';
import { Layout, ContentGrid, SEO, Pagination } from '../layout';
import { Body, Title } from '../screens/showcase';

export type JournalTemplateProps = {
  readonly data: PostQueryData;
  readonly pageContext: PostPageContextData;
};

const ShowcaseTemplate = ({ data, pageContext }: JournalTemplateProps) => {
  const {
    body,
    frontmatter: { title, description },
    fields: { robots, language, slug },
  } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout homeTo="/projects/" size="regular">
      <SEO
        article
        description={description}
        language={language}
        pathname={slug}
        robots={robots}
        title={title}
      />
      <article>
        <ContentGrid rowGap size="regular">
          <Title>{title}</Title>
          <Body body={body} />
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

export default ShowcaseTemplate;

export const pageQuery = graphql`
  query ShowcaseBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        description
      }
      fields {
        slug
        language
        robots
      }
    }
  }
`;
