import * as React from 'react';

import { StyledSystemProps } from '../../typings/styled-system';

import { Styled } from './inline-quote.styles';

type InlineQuoteProps = {
  lang?: string;
};

type StyledInlineQuoteProps = InlineQuoteProps & StyledSystemProps;

const InlineQuote: React.FC<StyledInlineQuoteProps> = ({
  children,
  lang = 'en',
  ...props
}) => (
  <Styled.InlineQuote lang={lang} {...props}>
    {children}
  </Styled.InlineQuote>
);

export { InlineQuote };
