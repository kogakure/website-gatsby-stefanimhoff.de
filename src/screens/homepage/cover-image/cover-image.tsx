import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Styled } from './cover-image.styles';

export const CoverImage: React.FC = () => {
  const {
    bonsaiImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      bonsaiImage: file(relativePath: { eq: "bonsai.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Styled.ImageContainer>
      <Styled.CoverImage fluid={fluid} />
    </Styled.ImageContainer>
  );
};
