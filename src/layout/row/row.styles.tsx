import styled, { css } from 'styled-components';

import { space } from '../tokens';

import { RowProps } from '.';

export const variants = {
  center: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      justify-items: center;
    `,
  },
  rightDown: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      align-items: start;
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);

      & > *:last-child {
        margin-top: 11vw;
      }
    `,
  },
  leftDown: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      align-items: start;
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);

      & > *:first-child {
        margin-top: 11vw;
      }
    `,
  },
  leftOnly: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);

      & > * {
        grid-column: 1;
      }
    `,
  },
  rightOnly: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);

      & > * {
        grid-column: 2;
      }
    `,
  },
  bigRight: {
    row: css`
      grid-column: 6 / -1;
    `,
    grid: null,
  },
  bigLeft: {
    row: css`
      grid-column: 1 / -6;
    `,
    grid: null,
  },
  start: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      align-items: start;
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);
    `,
  },
  middle: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      align-items: center;
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);
    `,
  },
  end: {
    row: css`
      grid-column: 2 / -2;
    `,
    grid: css`
      align-items: end;
      column-gap: 5.55vw;
      grid-template-columns: repeat(2, 1fr);
    `,
  },
  fullsize: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: null,
  },
  variableStart: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      align-items: start;
      display: flex;
      flex-wrap: wrap;
      gap: 5.55vw;

      & > * {
        flex-grow: 1;
      }
    `,
  },
  variableMiddle: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 5.55vw;

      & > * {
        flex-grow: 1;
      }
    `,
  },
  variableEnd: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      align-items: end;
      display: flex;
      flex-wrap: wrap;
      gap: 5.55vw;

      & > * {
        flex-grow: 1;
      }
    `,
  },
};

const Row = styled.section<{ debug?: boolean; marginBottom?: boolean }>`
  ${({ debug }) =>
    debug &&
    css`
      background-color: var(--colorForegroundFeather);
      border-color: green;
      border-style: dotted;
      border-width: 1px;
      width: 100%;
    `};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${space[13]}`};
  display: grid;
  grid-column: 2 / -2;
  grid-template-columns: repeat(18, 1fr);
`;

const Grid = styled.div<RowProps>`
  display: grid;
  ${({ variant }) => variant && variants[variant].row};
  ${({ variant }) => variant && variants[variant].grid};
`;

export const Styled = {
  Grid,
  Row,
};
