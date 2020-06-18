import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './book-cover.styles';

export const BookCover: React.FC = () => {
  const {
    bookCover: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      bookCover: file(relativePath: { eq: "projects/book-cover.jpg" }) {
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
      <Styled.BookCover fluid={fluid} />
      <TextBlock>
        <SmallPrint>Graphic Design</SmallPrint>
        <Headline>Book Cover</Headline>
        <Paragraph>
          I designed this book cover for my book <cite>kogakure</cite>, which I
          wrote in 2017. It’s a book in German about the Ninja and their secret
          art of Ninjutsu. The book was written with{' '}
          <TextLink href="https://www.gitbook.com/">GitBook</TextLink> and can
          be read or downloaded for free as PDF, ePub or Mobi eBook.
        </Paragraph>
        <MoreLink block href="https://book.kogakure.de/">
          Read Book
        </MoreLink>
      </TextBlock>
    </Row>
  );
};
