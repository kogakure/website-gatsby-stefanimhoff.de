import * as React from 'react';

import { Styled } from './variable.styles';

export type VariableProps = {
  children: React.ReactNode;
};

export const Variable = ({ children, ...props }: VariableProps) => (
  <Styled.Variable {...props}>{children}</Styled.Variable>
);
