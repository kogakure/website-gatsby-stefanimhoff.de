import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { SmallPrint, ImageBlock, TextBlock } from '..';

import { Styled } from './martial-arts-website.styles';

export const MartialArtsWebsite = () => {
  const {
    martialArtsWebsite: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      martialArtsWebsite: file(
        relativePath: { eq: "projects/martial-arts-website.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 930) {
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
        <SmallPrint>Web Design / Web Development / Writing</SmallPrint>
        <Headline>
          Martial Arts Website
          <Emojify emoji="👊" />
        </Headline>
        <Paragraph>
          My{' '}
          <TextLink href="https://www.kogakure.de/">
            Martial Arts Online Magazine
          </TextLink>{' '}
          with the topic of <em>Ninja</em> &amp; <em>Ninjutsu</em> was first
          launched in <strong>1999</strong> and is my oldest and most visited
          website. The current design is already the <strong>7th</strong>{' '}
          iteration of the design.
        </Paragraph>
        <MoreLink
          to="/showcase/kogakure/"
          aria-label="See the showcase Martial Arts Online Magazine"
        />
      </TextBlock>
    </Row>
  );
};
