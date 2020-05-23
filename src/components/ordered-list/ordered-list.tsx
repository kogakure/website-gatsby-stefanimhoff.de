import * as React from 'react';

import { Styled } from './ordered-list.styles';

export const OrderedList: React.FC = ({ children, ...props }) => (
  <Styled.OrderedListContainer {...props}>
    {children}
  </Styled.OrderedListContainer>
);
