import * as React from 'react';

import { AmazonBook } from '../../../components/amazon-book';

import { Styled } from './books.styles';

export const Books: React.FC = () => (
  <Styled.Books data-sal="slide-up" data-sal-duration="800">
    <AmazonBook
      alt="Book: The Traditional Colors of Japan"
      asin="475624100X"
      size="large"
    />
    <AmazonBook
      alt="Book: Traditional Japanese Color Palette"
      asin="475624114X"
      size="large"
    />
  </Styled.Books>
);
