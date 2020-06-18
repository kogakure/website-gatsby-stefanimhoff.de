import * as React from 'react';

import { Styled } from './small-print.styles';

export const SmallPrint: React.FC = ({ children }) => (
  <Styled.Text>{children}</Styled.Text>
);
