import * as React from 'react';

import { Styled } from './haiku-cell.styles';

export type HaikuCellProps = {
  dark?: boolean;
};

export const HaikuCell: React.FC<HaikuCellProps> = ({ dark, children }) => (
  <Styled.Cell dark={dark}>
    <Styled.PreFormated>{children}</Styled.PreFormated>
  </Styled.Cell>
);
