import * as React from 'react';

import { Styled } from './inline-quote.styles';

export type InlineQuoteProps = {
  children: React.ReactNode;
  lang?: string;
};

export const InlineQuote = ({
  children,
  lang = 'en',
  ...props
}: InlineQuoteProps) => (
  <Styled.InlineQuote lang={lang} {...props}>
    {children}
  </Styled.InlineQuote>
);
