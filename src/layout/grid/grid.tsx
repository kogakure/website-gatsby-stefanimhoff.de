import * as React from 'react';

import { StyledSystemProps } from '../../typings/styled-system';

import { Styled } from './grid.styles';

export const Grid: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <Styled.Grid {...props}>{children}</Styled.Grid>
);
