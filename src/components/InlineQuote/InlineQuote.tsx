import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import { Styled } from './InlineQuote.styles';

interface InlineQuoteProps {
  lang?: string;
}

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
