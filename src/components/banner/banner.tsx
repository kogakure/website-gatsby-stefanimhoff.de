import * as React from 'react';

import { Styled } from './banner.styles';

export const Banner: React.FC = ({ children, ...props }) => (
  <Styled.Banner {...props}>{children}</Styled.Banner>
);
