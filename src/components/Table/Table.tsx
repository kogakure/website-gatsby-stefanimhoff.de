import * as React from 'react';

import { Styled } from './Table.styles';

const Table: React.FC = ({ children, ...props }) => (
  <Styled.Table {...props}>{children}</Styled.Table>
);

export { Table };
