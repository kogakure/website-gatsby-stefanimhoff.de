import * as React from 'react';

import { Styled } from './ruby-annotation.styles';

export type RubyAnnotationProps = {
  base: string;
  text: string;
};

export const RubyAnnotation: React.FC<RubyAnnotationProps> = ({
  base,
  text,
  ...props
}) => (
  <Styled.Ruby {...props}>
    {base}
    <rp>（</rp>
    <rt>{text}</rt>
    <rp>）</rp>
  </Styled.Ruby>
);
