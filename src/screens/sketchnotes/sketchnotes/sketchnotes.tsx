import * as React from 'react';

import { Styled } from './sketchnotes.styles';

export const Sketchnotes: React.FC = ({ children }) => (
  <Styled.Sketchnotes>{children}</Styled.Sketchnotes>
);
