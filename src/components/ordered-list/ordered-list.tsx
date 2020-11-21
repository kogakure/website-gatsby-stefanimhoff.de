import * as React from 'react';

import { Styled } from './ordered-list.styles';

export type OrderedListProps = {
  children: React.ReactNode;
  noMargin?: boolean;
};

export const OrderedList = ({
  children,
  noMargin = false,
  ...props
}: OrderedListProps) => (
  <Styled.OrderedListContainer $noMargin={noMargin} {...props}>
    {children}
  </Styled.OrderedListContainer>
);
