import * as React from 'react';

import { Styled } from './text-block.styles';

type TextBlockProps = {
  children: React.ReactNode;
};

export const TextBlock = ({ children, ...props }: TextBlockProps) => (
  <Styled.Text {...props}>{children}</Styled.Text>
);
