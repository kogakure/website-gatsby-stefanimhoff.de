import * as React from 'react';

import { AmazonBook } from '../../../components/amazon-book';

import { Styled } from './books.styles';

export const Books: React.FC = () => (
  <Styled.Books data-sal="slide-up" data-sal-duration="800">
    <AmazonBook
      asin="0140441859"
      alt="The Narrow Road to the Deep North and Other Travel Sketches"
    />
    <AmazonBook asin="0140444599" alt="On Love and Barley: Haiku of Basho" />
  </Styled.Books>
);
