import * as React from 'react';

import { Styled, variants } from './column.styles';

export type ColumnVariants = keyof typeof variants;
export type ColumnProps = {
  variant?: ColumnVariants;
  debug?: boolean;
};

export const Column: React.FC<ColumnProps> = ({
  debug,
  variant = 'fullsize',
  children,
  ...props
}) => (
  <Styled.Column debug={debug} variant={variant} {...props}>
    {children}
  </Styled.Column>
);
