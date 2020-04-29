import * as React from 'react';

import { Styled } from './inline-code.styles';

const InlineCode: React.FC = ({ children, ...props }) => (
  <Styled.InlineCode className="one-dark-pro" {...props}>
    {children}
  </Styled.InlineCode>
);

InlineCode.defaultProps = {
  borderRadius: 3,
  fontSize: 2,
  paddingX: 3,
  paddingY: 1,
};

export { InlineCode };
