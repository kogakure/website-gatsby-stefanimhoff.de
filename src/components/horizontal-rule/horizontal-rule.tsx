import * as React from 'react';

import { Styled } from './horizontal-rule.styles';

export type HorizontalRuleProps = {
  noMargin?: boolean;
};

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  noMargin,
  ...props
}) => <Styled.HorizontalRule noMargin={noMargin} {...props} />;
