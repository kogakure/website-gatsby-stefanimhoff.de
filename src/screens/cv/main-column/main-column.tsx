import * as React from 'react';

import { Styled } from './main-column.styles';

type MainColumnProps = {
  children?: React.ReactNode;
};

export const MainColumn = ({ children }: MainColumnProps) => (
  <Styled.MainColumn>{children}</Styled.MainColumn>
);
