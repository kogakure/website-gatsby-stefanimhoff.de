import React from 'react';
import { graphql } from 'gatsby';

import { HaikuPageContextData, HaikuQueryData } from '../typings/graphql';
import { Layout, SEO } from '../layout';
import { Verse } from '../components/verse';

export type HaikuTemplateProps = {
  readonly data: HaikuQueryData;
  readonly pageContext: HaikuPageContextData;
};

const HaikuTemplate = ({ data, pageContext }: HaikuTemplateProps) => {
  const { slug } = pageContext;
  const {
    nodes: [{ de, en }],
  } = data.allHaikuYaml;

  return (
    <Layout homeTo="/haiku/" variant="green">
      <SEO title={`Haiku ${slug}`} />
      <Verse>{de}</Verse>
      <Verse>{en}</Verse>
    </Layout>
  );
};

export default HaikuTemplate;

export const pageQuery = graphql`
  query HaikuBySlug($slug: String!) {
    allHaikuYaml(filter: { id: { eq: $slug } }) {
      nodes {
        id
        de
        en
      }
    }
  }
`;
