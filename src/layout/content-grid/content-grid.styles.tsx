import styled, { css } from 'styled-components';

import { mediaQuery } from '../tokens';

import type { ContentGridProps } from './content-grid';

export const sizes = {
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

const ContentGrid = styled.div<ContentGridProps>`
  ${({ debug }) =>
    debug &&
    css`
      background-color: var(--colorForegroundFeather);
      border-color: blue;
      border-style: dashed;
      border-width: 1px;
    `};
  ${({ size }) => size && sizes[size]}
  ${({ rowGap }) =>
    rowGap &&
    css`
      row-gap: clamp(25px, 5.55vw, 100px);
    `}
  display: grid;
  width: 100%;
`;

export const Styled = {
  ContentGrid,
};
