import * as React from 'react';

import { StyledSystemProps } from '../../typings/styled-system';

import { Styled } from './inline-quote.styles';

export type InlineQuoteProps = {
  lang?: string;
};

export type StyledInlineQuoteProps = InlineQuoteProps & StyledSystemProps;

export const InlineQuote: React.FC<StyledInlineQuoteProps> = ({
  children,
  lang = 'en',
  ...props
}) => (
  <Styled.InlineQuote lang={lang} {...props}>
    {children}
  </Styled.InlineQuote>
);
