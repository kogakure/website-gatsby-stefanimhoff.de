import * as React from 'react';

import { Styled } from './UnorderedList.styles';

const UnorderedList: React.FC = ({ children, ...props }) => (
  <Styled.UnorderedListContainer {...props}>
    {children}
  </Styled.UnorderedListContainer>
);

UnorderedList.defaultProps = {
  fontSize: 3,
};

export { UnorderedList };