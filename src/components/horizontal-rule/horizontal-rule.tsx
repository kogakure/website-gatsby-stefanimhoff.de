import * as React from 'react';

import { Styled } from './horizontal-rule.styles';

export type HorizontalRuleProps = {
  noMargin?: boolean;
};

export const HorizontalRule = ({ noMargin, ...props }: HorizontalRuleProps) => (
  <Styled.HorizontalRule $noMargin={noMargin} {...props} />
);
