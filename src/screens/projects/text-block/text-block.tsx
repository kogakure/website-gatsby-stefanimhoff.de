import * as React from 'react';

import { Styled } from './text-block.styles';

export const TextBlock: React.FC = ({ children, ...props }) => (
  <Styled.Text {...props}>{children}</Styled.Text>
);
