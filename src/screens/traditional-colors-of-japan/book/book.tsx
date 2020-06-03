import * as React from 'react';

import { AmazonBook } from '../../../components/amazon-book';

import { Styled } from './book.styles';

export const Book: React.FC = () => (
  <Styled.Book>
    <AmazonBook
      alt="Book: The Traditional Colors of Japan"
      asin="475624100X"
      size="large"
    />
  </Styled.Book>
);
