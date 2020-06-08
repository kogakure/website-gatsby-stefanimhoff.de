import * as React from 'react';

import { Styled } from './haiku-grid.styles';

export const HaikuGrid: React.FC = ({ children }) => (
  <Styled.Grid>{children}</Styled.Grid>
);
