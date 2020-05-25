import styled, { css } from 'styled-components';

import { mediaQuery } from '../tokens';

import { ColumnProps } from './column';

export const variants = {
  fullsize: css`
    grid-column: 1 / -1;
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
  regular: css`
    grid-column: 2 / -2;

    @media (${mediaQuery.tablet}) {
      grid-column: 3 / -3;
    }

    @media (${mediaQuery.desktop}) {
      grid-column: 6 / -6;
    }
  `,
};

const Column = styled.div<ColumnProps>`
  ${({ variant }) => variant && variants[variant]}
  width: 100%;
`;

export const Styled = {
  Column,
};
