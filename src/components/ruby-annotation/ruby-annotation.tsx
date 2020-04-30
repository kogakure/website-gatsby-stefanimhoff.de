import * as React from 'react';

import { StyledSystemProps } from '../../typings/styled-system';

import { Styled } from './ruby-annotation.styles';

export type RubyAnnotationProps = {
  base: string;
  text: string;
};

export type StyledRubyAnnotationProps = RubyAnnotationProps & StyledSystemProps;

export const RubyAnnotation: React.FC<StyledRubyAnnotationProps> = ({
  base,
  text,
  ...props
}) => (
  <Styled.Ruby {...props}>
    {base}
    <Styled.Parenthesis>（</Styled.Parenthesis>
    <Styled.Text>{text}</Styled.Text>
    <Styled.Parenthesis>）</Styled.Parenthesis>
  </Styled.Ruby>
);

RubyAnnotation.defaultProps = {
  fontSize: 3,
};
