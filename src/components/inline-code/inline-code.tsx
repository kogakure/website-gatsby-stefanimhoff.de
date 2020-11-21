import * as React from 'react';

import { Styled } from './inline-code.styles';

export type InlineCodeProps = {
  children: React.ReactNode;
};

export const InlineCode = ({ children, ...props }: InlineCodeProps) => (
  <Styled.InlineCode {...props}>{children}</Styled.InlineCode>
);
