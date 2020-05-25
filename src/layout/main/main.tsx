import * as React from 'react';

import { Styled } from './main.styles';

export const Main: React.FC = ({ children, ...props }) => (
  <Styled.Main {...props}>
    <Styled.Grid>{children}</Styled.Grid>
  </Styled.Main>
);
