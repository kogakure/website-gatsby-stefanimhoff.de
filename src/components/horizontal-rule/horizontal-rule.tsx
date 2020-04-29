import * as React from 'react';

import { Styled } from './horizontal-rule.styles';

const HorizontalRule: React.FC = ({ ...props }) => (
  <Styled.HorizontalRule {...props} />
);

HorizontalRule.defaultProps = {
  my: 14,
};

export { HorizontalRule };
