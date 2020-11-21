import * as React from 'react';

import { Styled } from './sketchnote.styles';

type SketchnoteProps = {
  children: React.ReactNode;
};

export const Sketchnote = ({ children }: SketchnoteProps) => (
  <Styled.Sketchnote>{children}</Styled.Sketchnote>
);
