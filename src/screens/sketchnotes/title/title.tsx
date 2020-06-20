import * as React from 'react';

import { Styled } from './title.styles';

export const Title: React.FC = ({ children }) => (
  <Styled.Title>{children}</Styled.Title>
);
