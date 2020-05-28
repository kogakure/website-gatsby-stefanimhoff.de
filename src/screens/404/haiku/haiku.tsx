import * as React from 'react';

import { Styled } from './haiku.styles';

export const Haiku: React.FC = () => (
  <Styled.Haiku variant="left">
    You searched for something.
    <br />
    It might have once been here.
    <br />
    But now it’s gone.
  </Styled.Haiku>
);
