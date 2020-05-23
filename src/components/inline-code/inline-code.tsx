import * as React from 'react';

import { Styled } from './inline-code.styles';

export const InlineCode: React.FC = ({ children, ...props }) => (
  <Styled.InlineCode {...props}>{children}</Styled.InlineCode>
);
