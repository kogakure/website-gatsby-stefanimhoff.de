import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { ImageBlock, SmallPrint, TextBlock } from '..';

import { Styled } from './book-kogakure.styles';

export const BookKogakure: React.FC = () => {
  const {
    bookKogakure: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      bookKogakure: file(relativePath: { eq: "projects/book-kogakure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Row marginBottom variant="equal" vertical="center">
      <TextBlock data-sal="slide-up" data-sal-duration="800">
        <SmallPrint>Writing / Graphic Design</SmallPrint>
        <Headline>
          Book &amp; Book Cover
          <Emojify emoji="📖" />
        </Headline>
        <Paragraph>
          I wrote this book in <strong>2017</strong> out of the articles I’ve
          written on my{' '}
          <TextLink href="https://www.kogakure.de/">
            Martial Arts website
          </TextLink>{' '}
          in the last 20 years. It’s a book in German about the Ninja and their
          secret art of Ninjutsu.
        </Paragraph>
        <Paragraph>
          I also designed the book cover for my book. The book was written with{' '}
          <TextLink href="https://www.gitbook.com/">GitBook</TextLink> and can
          be read or downloaded for free as PDF, ePub or Mobi eBook.
        </Paragraph>
        <MoreLink href="https://book.kogakure.de/">Read Book</MoreLink>
      </TextBlock>
      <ImageBlock data-sal="slide-up" data-sal-duration="800">
        <Styled.Image fluid={fluid} />
      </ImageBlock>
    </Row>
  );
};
