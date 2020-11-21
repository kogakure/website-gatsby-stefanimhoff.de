import * as React from 'react';

import { Styled } from './small-print.styles';

type SmallPrintProps = {
  children: React.ReactNode;
};

export const SmallPrint = ({ children }: SmallPrintProps) => (
  <Styled.Text>{children}</Styled.Text>
);
