import * as React from 'react';

import { Styled } from './title.styles';

type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => (
  <Styled.Title>{children}</Styled.Title>
);
