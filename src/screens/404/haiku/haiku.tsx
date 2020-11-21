import * as React from 'react';

import { Styled } from './haiku.styles';

export const Haiku = () => (
  <Styled.Haiku variant="left" data-sal="slide-up" data-sal-duration="800">
    You searched for something.
    <br />
    It might have once been here.
    <br />
    But now it’s gone.
  </Styled.Haiku>
);
