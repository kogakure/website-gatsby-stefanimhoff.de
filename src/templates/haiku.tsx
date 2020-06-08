import React from 'react';
import { graphql } from 'gatsby';

import { HaikuPageContextData, HaikuQueryData } from '../typings/graphql';
import { MinimalLayout, SEO } from '../layout';
import { HaikuGrid, HaikuCell } from '../screens/haiku';

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
    <MinimalLayout homeTo="/haiku/" variant="green">
      <SEO title={`Haiku ${slug}`} />
      <HaikuGrid>
        <HaikuCell>{de}</HaikuCell>
        <HaikuCell dark>{en}</HaikuCell>
      </HaikuGrid>
    </MinimalLayout>
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
