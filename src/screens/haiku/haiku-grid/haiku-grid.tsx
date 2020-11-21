import * as React from 'react';

import { Styled } from './haiku-grid.styles';

type HaikuGridProps = {
  children?: React.ReactNode;
};

export const HaikuGrid = ({ children }: HaikuGridProps) => (
  <Styled.Grid>{children}</Styled.Grid>
);
