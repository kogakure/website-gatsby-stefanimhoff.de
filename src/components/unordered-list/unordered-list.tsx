import * as React from 'react';

import { Styled } from './unordered-list.styles';

export const UnorderedList: React.FC = ({ children, ...props }) => (
  <Styled.UnorderedListContainer {...props}>
    {children}
  </Styled.UnorderedListContainer>
);
