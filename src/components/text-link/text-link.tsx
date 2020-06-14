import * as React from 'react';

import { Styled } from './text-link.styles';

export type TextLinkProps = {
  href?: string;
  to?: string;
};

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  to,
  ...props
}) =>
  to ? (
    <Styled.TextLinkRouter to={to} {...props}>
      {children}
    </Styled.TextLinkRouter>
  ) : (
    <Styled.TextLinkHref
      href={href}
      rel="nofollow noopener noreferrer external"
      {...props}
    >
      {children}
    </Styled.TextLinkHref>
  );

export const BlockLink = ({ ...props }) => (
  <p>
    <TextLink {...props} />
  </p>
);
