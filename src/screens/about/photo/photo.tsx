import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Styled } from './photo.styles';

export const Photo: React.FC = () => {
  const {
    portraitImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "portrait-stefan-imhoff.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Styled.PortraitPhotoContainer>
      <Styled.PortraitPhoto fluid={fluid} />
    </Styled.PortraitPhotoContainer>
  );
};
