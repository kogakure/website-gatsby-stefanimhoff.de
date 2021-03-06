import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { ImageBlock, SmallPrint, TextBlock } from '..';

import { Styled } from './hamburg-blog.styles';

export const HamburgBlog = () => {
  const {
    hamburgBlog: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      hamburgBlog: file(relativePath: { eq: "projects/hamburg-blog.jpg" }) {
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
        <SmallPrint>Web Design / Web Development / Photography</SmallPrint>
        <Headline>
          Exploring Hamburg
          <Emojify emoji="🚢" />
        </Headline>
        <Paragraph>
          I created this{' '}
          <TextLink href="https://hamburg.stefanimhoff.de/">
            Photography Blog
          </TextLink>{' '}
          for one of my hobbies: I explore the city Hamburg, mostly walking,
          sometimes biking to find out more about the individual districts and
          to shoot photos.
        </Paragraph>
        <MoreLink
          to="/showcase/hamburg-blog/"
          aria-label="See the showcase Exploring Hamburg"
        />
      </TextBlock>
      <ImageBlock data-sal="slide-up" data-sal-duration="800">
        <Styled.Image fluid={fluid} />
      </ImageBlock>
    </Row>
  );
};
