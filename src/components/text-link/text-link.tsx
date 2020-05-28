import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

import { StyledComponentProps } from '../../typings/styled-components';

import { Styled } from './text-link.styles';

export type TextLinkProps = {
  href?: string;
  showIcon?: boolean;
  to?: string;
};

/* eslint-disable */
export type TextLinkAnchorProps = TextLinkProps &
  StyledComponentProps &
  Omit<GatsbyLinkProps<any>, 'to'>;
/* eslint-enable */

export const TextLink: React.FC<TextLinkAnchorProps> = ({
  activeClassName,
  children,
  href,
  innerRef,
  onClick,
  partiallyActive,
  replace,
  showIcon,
  to,
  ...props
}) =>
  to ? (
    <Styled.TextLinkRouter
      to={to}
      activeClassName={activeClassName}
      innerRef={innerRef}
      onClick={onClick}
      partiallyActive={partiallyActive}
      replace={replace}
      {...props}
    >
      {children}
      {showIcon && <Styled.ArrowIcon />}
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
