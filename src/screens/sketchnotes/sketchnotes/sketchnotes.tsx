import * as React from 'react';

import { Styled } from './sketchnotes.styles';

type SketchnotesProps = {
  children: React.ReactNode;
};

export const Sketchnotes = ({ children }: SketchnotesProps) => (
  <Styled.Sketchnotes>{children}</Styled.Sketchnotes>
);
