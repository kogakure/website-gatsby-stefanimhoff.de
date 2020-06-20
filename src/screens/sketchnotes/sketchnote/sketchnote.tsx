import * as React from 'react';

import { Styled } from './sketchnote.styles';

export const Sketchnote: React.FC = ({ children }) => (
  <Styled.Sketchnote>{children}</Styled.Sketchnote>
);
