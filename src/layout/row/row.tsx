import * as React from 'react';

import { Styled, variants, verticalVariants } from './row.styles';

export type RepeatVariant = 'auto-fit' | 'auto-fill';
export type VerticalVariant = keyof typeof verticalVariants;
export type RowVariant = keyof typeof variants;
export type RowProps = {
  debug?: boolean;
  marginBottom?: boolean;
  minWidth?: string;
  repeat?: RepeatVariant;
  variant?: RowVariant;
  vertical?: VerticalVariant;
};

export const Row: React.FC<RowProps> = ({
  children,
  debug,
  marginBottom,
  minWidth = '15rem',
  repeat = 'auto-fit',
  variant = 'center',
  vertical = 'start',
  ...props
}) => (
  <Styled.Row debug={debug} marginBottom={marginBottom} {...props}>
    <Styled.Grid
      minWidth={minWidth}
      repeat={repeat}
      variant={variant}
      vertical={vertical}
    >
      {children}
    </Styled.Grid>
  </Styled.Row>
);
