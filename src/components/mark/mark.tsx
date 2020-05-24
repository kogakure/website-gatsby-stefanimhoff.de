import * as React from 'react';

import { Styled } from './mark.styles';

export const Mark: React.FC = ({ children, ...props }) => (
  <Styled.Mark {...props}>{children}</Styled.Mark>
);
