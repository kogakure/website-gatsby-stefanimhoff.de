import * as React from 'react';

import { Styled } from './inline-quote.styles';

export type InlineQuoteProps = {
  lang?: string;
};

export const InlineQuote: React.FC<InlineQuoteProps> = ({
  children,
  lang = 'en',
  ...props
}) => (
  <Styled.InlineQuote lang={lang} {...props}>
    {children}
  </Styled.InlineQuote>
);
