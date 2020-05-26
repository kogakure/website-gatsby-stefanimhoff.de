import * as React from 'react';

import { Styled, variants } from './grid.styles';

export type GridVariants = keyof typeof variants;
export type GridProps = {
  debug?: boolean;
  rowGap?: boolean;
  variant?: GridVariants;
};

export const Grid: React.FC<GridProps> = ({
  children,
  debug,
  rowGap,
  variant = 'fullsize',
  ...props
}) => (
  <Styled.Grid debug={debug} rowGap={rowGap} variant={variant} {...props}>
    {children}
  </Styled.Grid>
);
