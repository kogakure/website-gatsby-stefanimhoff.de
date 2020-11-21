import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './koi-illustration.styles';

export const KoiIllustration = () => {
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
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Row variant="bigLeft" data-sal="slide-up" data-sal-duration="800">
        <Styled.Image fluid={fluid} />
      </Row>
      <Row variant="rightOnly">
        <TextBlock data-sal="slide-up" data-sal-duration="800">
          <SmallPrint>Illustration / Painting</SmallPrint>
          <Headline>
            Koi Illustration
            <Emojify emoji="🐠" />
          </Headline>
          <Paragraph>
            I created this illustration for a previous version of my website in{' '}
            <strong>2007</strong> with a pencil on paper and then brought it
            into Adobe Photoshop, where all coloring was done.
          </Paragraph>
          <MoreLink
            block
            to="/showcase/koi-illustration/"
            aria-label="See the showcase Koi Illustration"
          />
        </TextBlock>
      </Row>
    </>
  );
};
