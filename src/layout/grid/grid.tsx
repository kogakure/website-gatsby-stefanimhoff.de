import * as React from 'react';

import { StyledComponentProps } from '../../typings/styled-components';

import { Styled } from './grid.styles';

export const Grid: React.FC<StyledComponentProps> = ({
  children,
  ...props
}) => <Styled.Grid {...props}>{children}</Styled.Grid>;
