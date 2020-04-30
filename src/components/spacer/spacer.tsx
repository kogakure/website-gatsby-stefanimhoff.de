import * as React from 'react';
import {
  BorderProps,
  PaddingBottomProps,
  PaddingLeftProps,
  PaddingProps,
  PaddingRightProps,
  PaddingTopProps,
} from 'styled-system';

import { Styled } from './spacer.styles';

export type SpacerProps =
  | BorderProps
  | PaddingBottomProps
  | PaddingLeftProps
  | PaddingProps
  | PaddingRightProps
  | PaddingTopProps;

export const Spacer: React.FC<SpacerProps> = ({ children, ...props }) => (
  <Styled.Spacer {...props}>{children}</Styled.Spacer>
);
