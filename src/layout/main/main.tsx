import * as React from 'react';

import { Grid } from '../grid';

import { Styled, sizes } from './main.styles';

export type MainSize = keyof typeof sizes;
export type MainProps = {
  size: MainSize;
};

export const Main: React.FC<MainProps> = ({ children, size, ...props }) => (
  <Grid>
    <Styled.Main size={size} {...props}>
      {children}
    </Styled.Main>
  </Grid>
);
