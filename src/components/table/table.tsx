import * as React from 'react';

import { Styled } from './table.styles';

export const Table: React.FC = ({ children, ...props }) => (
  <Styled.Table {...props}>{children}</Styled.Table>
);
