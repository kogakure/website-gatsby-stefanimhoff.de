import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './osteopathie-hamburg.styles';

export const OsteopathieHamburg: React.FC = () => {
  const {
    osteopathieHamburg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      osteopathieHamburg: file(
        relativePath: { eq: "projects/osteopathie-hamburg.jpg" }
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
    <Row variant="equal" vertical="center">
      <Styled.Image fluid={fluid} />
      <TextBlock>
        <SmallPrint>Web Design / Web Development</SmallPrint>
        <Headline>Osteopathie-Institut Hamburg</Headline>
        <Paragraph>
          I created this website for the{' '}
          <strong>Osteopathie-Institut Hamburg</strong> in <strong>2010</strong>{' '}
          as one of my last websites before I started working as a{' '}
          <em>Frontend Engineer</em> for XING.
        </Paragraph>
        <MoreLink
          to="/showcase/osteopathie-hamburg/"
          aria-label="See the showcase Osteopathie-Institut Hamburg"
        />
      </TextBlock>
    </Row>
  );
};
