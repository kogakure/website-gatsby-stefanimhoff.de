import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './koi-illustration.styles';

export const KoiIllustration: React.FC = () => {
  const {
    koiIllustration: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      koiIllustration: file(
        relativePath: { eq: "projects/koi-illustration.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Row variant="bigLeft">
        <Styled.Image fluid={fluid} />
      </Row>
      <Row variant="rightOnly">
        <TextBlock>
          <SmallPrint>Illustration / Painting</SmallPrint>
          <Headline>Koi Illustration</Headline>
          <Paragraph>
            I created this illustration for a previous version of my website in
            2007 with a pencil on paper and then brought it into Adobe
            Photoshop, where all coloring was done.
          </Paragraph>
          <MoreLink block to="/showcase/koi-illustration/" />
        </TextBlock>
      </Row>
    </>
  );
};
