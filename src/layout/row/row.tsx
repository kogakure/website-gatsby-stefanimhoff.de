import * as React from 'react';

import { Styled, variants } from './row.styles';

export type RowVariant = keyof typeof variants;
export type RowProps = {
  variant?: RowVariant;
  marginBottom?: boolean;
  debug?: boolean;
};

export const Row: React.FC<RowProps> = ({
  children,
  debug,
  marginBottom,
  variant = 'center',
  ...props
}) => (
  <Styled.Row debug={debug} marginBottom={marginBottom} {...props}>
    <Styled.Grid variant={variant}>{children}</Styled.Grid>
  </Styled.Row>
);
