import * as React from 'react';
import { GatsbyLinkProps } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

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
}) => {
  const [hideOnScroll, setHideOnScroll] = React.useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y >= prevPos.y;
    if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  });

  return (
    <Styled.Link aria-label={text} title={text} to={to} variant={variant}>
      <Styled.Pagination
        hideOnScroll={hideOnScroll}
        variant={variant}
        {...props}
      >
        {variant === 'left' && <Styled.LeftArrow aria-hidden="true" />}
        {variant === 'right' && <Styled.RightArrow aria-hidden="true" />}
      </Styled.Pagination>
    </Styled.Link>
  );
};
