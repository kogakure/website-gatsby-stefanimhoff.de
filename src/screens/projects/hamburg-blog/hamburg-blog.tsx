import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './hamburg-blog.styles';

export const HamburgBlog: React.FC = () => {
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
      <TextBlock>
        <SmallPrint>Web Design / Web Development / Photography</SmallPrint>
        <Headline>Exploring Hamburg</Headline>
        <Paragraph>
          I created this{' '}
          <TextLink href="https://hamburg.stefanimhoff.de/">
            Photography Blog
          </TextLink>{' '}
          for one of my hobbies: I explore the city Hamburg, mostly walking,
          sometimes biking to find out more about the individual districts and
          to shoot photos.
        </Paragraph>
        <MoreLink to="/showcase/hamburg-blog/" />
      </TextBlock>
      <Styled.Image fluid={fluid} />
    </Row>
  );
};
