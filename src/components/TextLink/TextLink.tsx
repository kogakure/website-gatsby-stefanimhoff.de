import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

import { StyledSystemProps } from '../../typings/StyleSystem';

import { Styled } from './TextLink.styles';

interface TextLinkProps {
  href?: string;
  to?: string;
}

/* eslint-disable @typescript-eslint/indent, @typescript-eslint/no-explicit-any */
export type TextLinkAnchorProps = TextLinkProps &
  StyledSystemProps &
  Omit<GatsbyLinkProps<any>, 'to'>;
/* eslint-enable */

const TextLink: React.FC<TextLinkAnchorProps> = ({
  activeClassName,
  children,
  href,
  innerRef,
  onClick,
  partiallyActive,
  replace,
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
    </Styled.TextLinkRouter>
  ) : (
    <Styled.TextLinkHref href={href} {...props}>
      {children}
    </Styled.TextLinkHref>
  );

const BlockLink = ({ ...props }) => (
  <p>
    <TextLink {...props} />
  </p>
);

TextLink.defaultProps = {
  fontSize: 3,
  fontWeight: 1,
};

export { TextLink, BlockLink };
