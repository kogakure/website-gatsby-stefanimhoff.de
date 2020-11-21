import * as React from 'react';

import { LayoutSize } from '..';

import { Styled } from './column.styles';

export type ColumnProps = {
  children: React.ReactNode;
  debug?: boolean;
  size?: LayoutSize;
};

export const Column = ({
  children,
  debug = false,
  size = 'fullsize',
  ...props
}: ColumnProps) => (
  <Styled.Column debug={debug} size={size} {...props}>
    {children}
  </Styled.Column>
);
