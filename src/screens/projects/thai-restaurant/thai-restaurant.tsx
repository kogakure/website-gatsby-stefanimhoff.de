import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './thai-restaurant.styles';

export const ThaiRestaurant: React.FC = () => {
  const {
    thaiRestaurant: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      thaiRestaurant: file(
        relativePath: { eq: "projects/thai-restaurant.jpg" }
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
      <TextBlock>
        <SmallPrint>Graphic Design / Web Design / Web Development</SmallPrint>
        <Headline>
          Thai Restaurants Hamburg
          <Emojify emoji="🍜" />
        </Headline>
        <Paragraph>
          I created this small website for three Thai restaurants in Hamburg in{' '}
          <strong>2010</strong>. It was online for nearly ten years and I had a
          lot of fun creating it.
        </Paragraph>
        <MoreLink
          to="/showcase/thai-restaurants-hamburg/"
          aria-label="See the showcase Thai Restaurant Hamburg"
        />
      </TextBlock>
      <Styled.Image fluid={fluid} />
    </Row>
  );
};
