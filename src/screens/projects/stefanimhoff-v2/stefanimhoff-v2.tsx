import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './stefanimhoff-v2.styles';

export const StefanImhoffV2: React.FC = () => {
  const {
    stefanImhoffV2: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      stefanImhoffV2: file(
        relativePath: { eq: "projects/stefanimhoff-v2.jpg" }
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
        <Headline>Personal Website &amp; Blog</Headline>
        <Paragraph>
          My Personal Website and blog first launched in <strong>2006</strong>{' '}
          and is the website you’re looking at. The previous design was the{' '}
          <strong>2nd</strong> iteration of the design.
        </Paragraph>
        <MoreLink to="/showcase/stefanimhoff-v2/" />
      </TextBlock>
    </Row>
  );
};
