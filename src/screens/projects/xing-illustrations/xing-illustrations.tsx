import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './xing-illustrations.styles';

export const XingIllustrations: React.FC = () => {
  const {
    xingIllustrations: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      xingIllustrations: file(
        relativePath: { eq: "projects/xing-illustrations.jpg" }
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
      <Row
        variant="bigLeft"
        vertical="center"
        data-sal="slide-up"
        data-sal-duration="800"
      >
        <Styled.Image fluid={fluid} />
      </Row>
      <Row variant="rightOnly" data-sal="slide-up" data-sal-duration="800">
        <TextBlock>
          <SmallPrint>Illustration / Icon Design</SmallPrint>
          <Headline>
            XING Onboarding Illustration
            <Emojify emoji="🚀" />
          </Headline>
          <Paragraph>
            I was asked to create three new illustrations that could be used for
            an Onboarding screen on{' '}
            <TextLink href="https://www.xing.com/">XING</TextLink>. I accepted
            the challenge to take over this task outside of my job description
            and finished the whole process from concept, scribbles to final
            illustrations in a day.
          </Paragraph>
          <MoreLink
            to="/showcase/xing-onboarding-illustrations/"
            aria-label="See the showcase XING Onboarding Illustrations"
          />
        </TextBlock>
      </Row>
    </>
  );
};
