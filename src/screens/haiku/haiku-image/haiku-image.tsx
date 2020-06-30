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
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Styled.HaikuImageContainer>
      <Styled.HaikuImage fluid={fluid} />
    </Styled.HaikuImageContainer>
  );
};
