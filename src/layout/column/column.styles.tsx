import styled, { css } from 'styled-components';

import { mediaQuery } from '../tokens';

import type { ColumnProps } from '.';

export const sizes = {
  fullsize: css`
    grid-column: 1 / -1;
  `,
  regular: css`
    grid-column: 2 / -2;

    @media (${mediaQuery.tablet}) {
      grid-column: 3 / -3;
    }
  `,
  narrow: css`
    grid-column: 2 / -2;

    @media (${mediaQuery.tablet}) {
      grid-column: 6 / -6;
    }

    @media (${mediaQuery.desktop}) {
      grid-column: 7 / -7;
    }
  `,
};

const Column = styled.div<ColumnProps>`
  ${({ debug }) =>
    debug &&
    css`
      background-color: var(--colorForegroundFeather);
      border-color: red;
      border-style: solid;
      border-width: 1px;
      width: 100%;
    `};
  ${({ size }) => size && sizes[size]}
  width: 100%;
`;

export const Styled = {
  Column,
};
