import * as React from 'react';

import { Styled } from './ruby-annotation.styles';

export type RubyAnnotationProps = {
  base: string;
  text: string;
};

export const RubyAnnotation = ({
  base,
  text,
  ...props
}: RubyAnnotationProps) => (
  <Styled.Ruby {...props}>
    {base}
    <rp>（</rp>
    <rt>{text}</rt>
    <rp>）</rp>
  </Styled.Ruby>
);
