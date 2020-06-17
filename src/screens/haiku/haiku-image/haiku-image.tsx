import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Styled } from './haiku-image.styles';

export const HaikuImage: React.FC = () => {
  const {
    forestImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      forestImage: file(relativePath: { eq: "forest.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Styled.HaikuImage fluid={fluid} />;
};
