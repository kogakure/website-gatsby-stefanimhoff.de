import * as React from 'react';

import {
  Styled,
  horizontalVariants,
  variants,
  verticalVariants,
} from './row.styles';

export type RepeatVariant = 'auto-fit' | 'auto-fill';
export type VerticalVariant = keyof typeof verticalVariants;
export type HorizontalVariant = keyof typeof horizontalVariants;
export type RowVariant = keyof typeof variants;
export type RowProps = {
  debug?: boolean;
  horizontal?: HorizontalVariant;
  marginBottom?: boolean;
  maxWidth?: string;
  minWidth?: string;
  repeat?: RepeatVariant;
  variant?: RowVariant;
  vertical?: VerticalVariant;
};

export const Row: React.FC<RowProps> = ({
  children,
  debug,
  horizontal = 'center',
  marginBottom,
  maxWidth = '1fr',
  minWidth = '15rem',
  repeat = 'auto-fit',
  variant = 'center',
  vertical = 'start',
  ...props
}) => (
  <Styled.Row debug={debug} marginBottom={marginBottom} {...props}>
    <Styled.Grid
      horizontal={horizontal}
      maxWidth={maxWidth}
      minWidth={minWidth}
      repeat={repeat}
      variant={variant}
      vertical={vertical}
    >
      {children}
    </Styled.Grid>
  </Styled.Row>
);
