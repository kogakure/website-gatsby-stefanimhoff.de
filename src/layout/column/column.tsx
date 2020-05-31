import * as React from 'react';

import { LayoutSize } from '..';

import { Styled } from './column.styles';

export type ColumnProps = {
  debug?: boolean;
  size?: LayoutSize;
};

export const Column: React.FC<ColumnProps> = ({
  children,
  debug = false,
  size = 'fullsize',
  ...props
}) => (
  <Styled.Column debug={debug} size={size} {...props}>
    {children}
  </Styled.Column>
);
