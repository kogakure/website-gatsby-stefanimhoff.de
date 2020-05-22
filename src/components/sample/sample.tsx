import * as React from 'react';

import { Styled } from './sample.styles';

export const Sample: React.FC = ({ children, ...props }) => (
  <Styled.Sample className="one-dark-pro" {...props}>
    {children}
  </Styled.Sample>
);

Sample.defaultProps = {
  borderRadius: 3,
  fontSize: 2,
  paddingX: 3,
  paddingY: 1,
};