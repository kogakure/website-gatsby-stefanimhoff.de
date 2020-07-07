import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, ImageBlock, TextBlock } from '..';

import { Styled } from './sketchnotes.styles';

export const Sketchnotes: React.FC = () => {
  const {
    sketchnotesImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      sketchnotesImage: file(relativePath: { eq: "projects/sketchnotes.jpg" }) {
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
      <TextBlock data-sal="slide-up" data-sal-duration="800">
        <SmallPrint>Illustration / Writing</SmallPrint>
        <Headline>
          Sketchnotes
          <Emojify emoji="📝" />
        </Headline>
        <Paragraph>
          One of my passions is <em>Sketchnotes</em> or also called{' '}
          <em>Visual Notetaking</em>. In Sketchnoting you use visual language to
          quickly visualize ideas, notes, or thoughts. I create Sketchnotes
          since I first visited a workshop in <strong>2015</strong>.
        </Paragraph>
        <MoreLink to="/sketchnotes/">See Sketchnotes</MoreLink>
      </TextBlock>
      <ImageBlock data-sal="slide-up" data-sal-duration="800">
        <Styled.Image fluid={fluid} />
      </ImageBlock>
    </Row>
  );
};
