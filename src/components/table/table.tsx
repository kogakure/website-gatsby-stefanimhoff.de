import * as React from 'react';

import { Styled } from './table.styles';

export type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children, ...props }: TableProps) => (
  <Styled.Table {...props}>{children}</Styled.Table>
);
