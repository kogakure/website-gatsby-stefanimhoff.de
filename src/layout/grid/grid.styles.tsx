import styled, { css } from 'styled-components';

import { mediaQuery } from '../tokens';

import { GridProps } from './grid';

export const variants = {
  fullsize: css`
    grid-template-columns: repeat(18, 1fr);
  `,
  regular: css`
    grid-template-columns: repeat(16, 1fr);

    @media (${mediaQuery.tablet}) {
      grid-template-columns: repeat(14, 1fr);
    }
  `,
  narrow: css`
    grid-template-columns: repeat(16, 1fr);

    @media (${mediaQuery.tablet}) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media (${mediaQuery.desktop}) {
      grid-template-columns: repeat(6, 1fr);
    }
  `,
};

const Grid = styled.div<GridProps>`
  ${({ debug }) =>
    debug &&
    css`
      background-color: var(--colorForegroundFeather);
      border: 1px dotted darkgrey;
    `};
  ${({ variant }) => variant && variants[variant]}
  ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: clamp(25px, 5.55vw, 100px);
    `}
  display: grid;
  width: 100%;
`;

export const Styled = {
  Grid,
};
