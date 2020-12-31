import * as React from 'react';

import { Styled } from './text-link.styles';

export type TextLinkProps = {
  children?: React.ReactNode;
  block?: boolean;
  href?: string;
  to?: string;
  target?: string;
};

export const TextLink = ({
  block = false,
  children,
  href,
  to,
  ...props
}: TextLinkProps) =>
  to ? (
    <Styled.TextLinkRouter $block={block} to={to} {...props}>
      {children}
    </Styled.TextLinkRouter>
  ) : (
    <Styled.TextLinkHref
      $block={block}
      href={href}
      rel="nofollow noopener noreferrer external"
      {...props}
    >
      {children}
    </Styled.TextLinkHref>
  );
