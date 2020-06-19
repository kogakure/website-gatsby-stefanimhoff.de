import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './iga-ninja-font.styles';

export const IgaNinjaFont: React.FC = () => {
  const {
    igaNinjaFont: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      igaNinjaFont: file(
        relativePath: { eq: "projects/ingo-iga-ninja-cipher.jpg" }
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
    <Row variant="equal" vertical="center">
      <TextBlock>
        <SmallPrint>Type Design / Graphic Design</SmallPrint>
        <Headline>Ingo: Iga Ninja Cipher Font</Headline>
        <Paragraph>
          The <em>Iga Ninja Cipher Font</em> was created by me of an image
          provided by the <strong>Iga Ninja Museum</strong> in Japan and is said
          to be a font for correspondence in cipher. It was a fun personal
          project to learn how to create a typeface.
        </Paragraph>
        <MoreLink block href="https://github.com/kogakure/font-ingo">
          GitHub
        </MoreLink>
      </TextBlock>
      <Styled.Image fluid={fluid} />
    </Row>
  );
};
