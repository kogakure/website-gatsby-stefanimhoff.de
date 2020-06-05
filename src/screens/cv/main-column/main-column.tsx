import * as React from 'react';

import { Styled } from './main-column.styles';

export const MainColumn: React.FC = ({ children }) => (
  <Styled.MainColumn>{children}</Styled.MainColumn>
);
