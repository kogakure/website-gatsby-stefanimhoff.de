import * as React from 'react';

import { Styled } from './mark.styles';

export type MarkProps = {
  children: React.ReactNode;
};

export const Mark = ({ children, ...props }: MarkProps) => (
  <Styled.Mark {...props}>{children}</Styled.Mark>
);
