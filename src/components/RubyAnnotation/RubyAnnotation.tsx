import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import { Styled } from './RubyAnnotation.styles';

type RubyAnnotationProps = {
  base: string;
  text: string;
};

type StyledRubyAnnotationProps = RubyAnnotationProps & StyledSystemProps;

const RubyAnnotation: React.FC<StyledRubyAnnotationProps> = ({
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

export { RubyAnnotation };
