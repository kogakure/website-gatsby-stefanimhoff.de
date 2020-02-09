import * as React from 'react';

import { Styled } from './OrderedList.styles';

const OrderedList: React.FC = ({ children, ...props }) => (
  <Styled.OrderedListContainer {...props}>
    {children}
  </Styled.OrderedListContainer>
);

OrderedList.defaultProps = {
  fontSize: 3,
};

export { OrderedList };
