import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const PortraitPhoto = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "portrait-stefan-imhoff.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={placeholderImage.childImageSharp.fluid} />;
};
