import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import { ArrowLeftS, ArrowRightS } from '../../components/icons';

import type { PaginationProps } from '.';

export const variants = {
  left: css`
    left: 1rem;
  `,
  right: css`
    right: 1rem;
  `,
};

const link = css`
  border-radius: 50%;
  position: fixed;
  top: calc(50% - 20px);
`;

const pagination = css`
  align-items: center;
  background-color: var(--colorForegroundFeather);
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  transition-duration: 500ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: 40px;

  a:hover &,
  a:focus & {
    background-color: var(--colorForegroundSoft);
  }
`;

const Link = styled(GatsbyLink)<PaginationProps>`
  ${link};
  ${({ variant }) => variant && variants[variant]}
`;

const Pagination = styled.div<PaginationProps & { hideOnScroll: boolean }>`
  ${pagination};
  ${({ hideOnScroll }) =>
    hideOnScroll
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

const LeftArrow = styled(ArrowLeftS)`
  fill: var(--colorForeground);
`;

const RightArrow = styled(ArrowRightS)`
  fill: var(--colorForeground);
`;

export const Styled = {
  LeftArrow,
  Link,
  Pagination,
  RightArrow,
};
