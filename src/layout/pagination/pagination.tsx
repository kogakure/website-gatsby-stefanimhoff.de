import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';

import { Styled, variants } from './pagination.styles';

export type PaginationVariant = keyof typeof variants;
export type PaginationProps = {
  text?: string;
  variant: PaginationVariant;
};

/* eslint-disable */
export type LinkWithPaginationProps = PaginationProps &
  Pick<GatsbyLinkProps<any>, 'to'>;
/* eslint-enable */

export const Pagination: React.FC<LinkWithPaginationProps> = ({
  text = '',
  to,
  variant,
  ...props
}) => (
  <Styled.Link aria-label={text} title={text} to={to} variant={variant}>
    <Styled.Pagination variant={variant} {...props}>
      {variant === 'left' && <Styled.LeftArrow aria-hidden="true" />}
      {variant === 'right' && <Styled.RightArrow aria-hidden="true" />}
    </Styled.Pagination>
  </Styled.Link>
);
