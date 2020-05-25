import * as React from 'react';

import { Styled, variants } from './column.styles';

export type ColumnVariants = keyof typeof variants;
export type ColumnProps = {
  variant?: ColumnVariants;
};

export const Column: React.FC<ColumnProps> = ({
  variant = 'fullsize',
  children,
  ...props
}) => (
  <Styled.Column variant={variant} {...props}>
    {children}
  </Styled.Column>
);
