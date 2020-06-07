import * as React from 'react';

import { Styled } from './unordered-list.styles';

export type UnorderedListProps = {
  noMargin?: boolean;
};

export const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  ...props
}) => (
  <Styled.UnorderedListContainer {...props}>
    {children}
  </Styled.UnorderedListContainer>
);
