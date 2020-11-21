import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { ImageBlock, SmallPrint, TextBlock } from '..';

import { Styled } from './osteopathie-hamburg.styles';

export const OsteopathieHamburg = () => {
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
      <ImageBlock data-sal="slide-up" data-sal-duration="800">
        <Styled.Image fluid={fluid} />
      </ImageBlock>
      <TextBlock data-sal="slide-up" data-sal-duration="800">
        <SmallPrint>Web Design / Web Development</SmallPrint>
        <Headline>
          Osteopathie-Institut Hamburg
          <Emojify emoji="🦴" />
        </Headline>
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
