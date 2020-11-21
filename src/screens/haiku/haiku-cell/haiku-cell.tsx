import * as React from 'react';

import { Styled } from './haiku-cell.styles';

export type HaikuCellProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export const HaikuCell = ({ dark, children }: HaikuCellProps) => (
  <Styled.Cell dark={dark}>
    <Styled.PreFormated>{children}</Styled.PreFormated>
  </Styled.Cell>
);
