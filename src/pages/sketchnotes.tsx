import React from 'react';
import { graphql } from 'gatsby';

import { SketchnotesQueryData } from '../typings/graphql';
import { Layout, ContentGrid, SEO } from '../layout';
import { Body, Sketchnote, Sketchnotes, Title } from '../screens/sketchnotes';
import { Headline } from '../components/typography';

const SketchnotesPage = ({ data }: SketchnotesQueryData) => {
  const sketchnotes = data.sketchnotes.edges;

  return (
    <Layout variant="brown" size="regular" homeTo="/projects/">
      <SEO title="Sketchnotes" />
      <ContentGrid rowGap size="regular">
        <Title>Sketchnotes</Title>
        <Sketchnotes>
          {sketchnotes.map(({ node }) => {
            const {
              body,
              frontmatter: { title },
            } = node;

            return (
              <article>
                <Headline>{title}</Headline>
                <Sketchnote>
                  <Body>{body}</Body>
                </Sketchnote>
              </article>
            );
          })}
        </Sketchnotes>
      </ContentGrid>
    </Layout>
  );
};

export default SketchnotesPage;

export const pageQuery = graphql`
  query {
    sketchnotes: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/sketchnotes/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          body
        }
      }
    }
  }
`;
