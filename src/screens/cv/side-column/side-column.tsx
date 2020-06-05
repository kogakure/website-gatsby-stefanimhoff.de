import * as React from 'react';

import { Styled } from './side-column.styles';

export const SideColumn: React.FC = ({ children }) => (
  <Styled.SideColumn>{children}</Styled.SideColumn>
);
