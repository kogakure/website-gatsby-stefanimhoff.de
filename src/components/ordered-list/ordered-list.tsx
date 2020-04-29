import * as React from 'react';

import { Styled } from './ordered-list.styles';

const OrderedList: React.FC = ({ children, ...props }) => (
  <Styled.OrderedListContainer {...props}>
    {children}
  </Styled.OrderedListContainer>
);

OrderedList.defaultProps = {
  fontSize: 3,
};

export { OrderedList };
