import * as React from 'react';

import { Styled } from './text-block.styles';

export const TextBlock: React.FC = ({ children }) => (
  <Styled.Text>{children}</Styled.Text>
);
