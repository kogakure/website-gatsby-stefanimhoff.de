import * as React from 'react';

import { Styled } from './unordered-list.styles';

export type UnorderedListProps = {
  children: React.ReactNode;
  noMargin?: boolean;
};

export const UnorderedList = ({ children, ...props }: UnorderedListProps) => (
  <Styled.UnorderedListContainer {...props}>
    {children}
  </Styled.UnorderedListContainer>
);
