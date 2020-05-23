import * as React from 'react';

import { Styled } from './variable.styles';

export const Variable: React.FC = ({ children, ...props }) => (
  <Styled.Variable {...props}>{children}</Styled.Variable>
);
