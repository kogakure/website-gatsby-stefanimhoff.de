import * as React from 'react';

import { Styled } from './main.styles';

export type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children, ...props }: MainProps) => (
  <Styled.Main {...props}>
    <Styled.Grid>{children}</Styled.Grid>
  </Styled.Main>
);
