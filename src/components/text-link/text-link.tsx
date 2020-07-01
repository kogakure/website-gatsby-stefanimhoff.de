import * as React from 'react';

import { Styled } from './text-link.styles';

export type TextLinkProps = {
  block?: boolean | 0 | 1;
  href?: string;
  to?: string;
  target?: string;
};

export const TextLink: React.FC<TextLinkProps> = ({
  block,
  children,
  href,
  to,
  ...props
}) =>
  to ? (
    // https://github.com/styled-components/styled-components/issues/1198
    <Styled.TextLinkRouter block={block ? 1 : 0} to={to} {...props}>
      {children}
    </Styled.TextLinkRouter>
  ) : (
    <Styled.TextLinkHref
      block={block}
      href={href}
      rel="nofollow noopener noreferrer external"
      {...props}
    >
      {children}
    </Styled.TextLinkHref>
  );
