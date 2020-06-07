import * as React from 'react';

import { Styled } from './ordered-list.styles';

export type OrderedListProps = {
  noMargin?: boolean;
};

export const OrderedList: React.FC<OrderedListProps> = ({
  children,
  ...props
}) => (
  <Styled.OrderedListContainer {...props}>
    {children}
  </Styled.OrderedListContainer>
);
