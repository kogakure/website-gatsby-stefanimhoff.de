import * as React from 'react';

import { Row } from '../../../layout';
import { AmazonBook } from '../../../components/amazon-book';

import { Styled } from './books.styles';

export const Books: React.FC = () => (
  <Styled.Books data-sal="slide-up" data-sal-duration="800">
    <Row variant="variable" minWidth="15em">
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
    </Row>
  </Styled.Books>
);
