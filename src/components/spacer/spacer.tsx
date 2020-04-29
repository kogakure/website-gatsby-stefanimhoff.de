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

type SpacerProps =
  | BorderProps
  | PaddingBottomProps
  | PaddingLeftProps
  | PaddingProps
  | PaddingRightProps
  | PaddingTopProps;

const Spacer: React.FC<SpacerProps> = ({ children, ...props }) => (
  <Styled.Spacer {...props}>{children}</Styled.Spacer>
);

export { Spacer };
