import * as React from 'react';

import { Styled } from './variable.styles';

export const Variable: React.FC = ({ children, ...props }) => (
  <Styled.Variable className="one-dark-pro" {...props}>
    {children}
  </Styled.Variable>
);

Variable.defaultProps = {
  borderRadius: 3,
  fontSize: 2,
  paddingX: 3,
  paddingY: 1,
};
