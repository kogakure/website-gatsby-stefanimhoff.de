import * as React from 'react';

import { Styled } from './side-column.styles';

type SideColumnProps = {
  children?: React.ReactNode;
};

export const SideColumn = ({ children }: SideColumnProps) => (
  <Styled.SideColumn>{children}</Styled.SideColumn>
);
