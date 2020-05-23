import * as React from 'react';

import { Styled } from './sample.styles';

export const Sample: React.FC = ({ children, ...props }) => (
  <Styled.Sample {...props}>{children}</Styled.Sample>
);
