import styled, { css } from 'styled-components';

import { mediaQuery, space } from '../tokens';

import { RowProps } from '.';

const defaultRow = css`
  grid-column: 1 / -1;

  @media (${mediaQuery.tablet}) {
    grid-column: 2 / -2;
  }
`;

const gridDefault = css`
  gap: 5.55vw;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (${mediaQuery.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const variableDefault = css`
  display: flex;
  flex-wrap: wrap;
  gap: 5.55vw;
  justify-content: space-around;
`;

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
      ${defaultRow};
    `,
    grid: css`
      align-items: start;
      ${gridDefault};

      & > *:last-child {
        @media (${mediaQuery.tablet}) {
          margin-top: 11vw;
        }
      }
    `,
  },
  leftDown: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      align-items: start;
      ${gridDefault};

      & > *:first-child {
        @media (${mediaQuery.tablet}) {
          margin-top: 11vw;
        }
      }
    `,
  },
  leftOnly: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      ${gridDefault};

      & > * {
        @media (${mediaQuery.tablet}) {
          grid-column: 1;
        }
      }
    `,
  },
  rightOnly: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      ${gridDefault};

      & > * {
        @media (${mediaQuery.tablet}) {
          grid-column: 2;
        }
      }
    `,
  },
  bigRight: {
    row: css`
      grid-column: 1 / -1;

      @media (${mediaQuery.tablet}) {
        grid-column: 6 / -1;
      }
    `,
    grid: null,
  },
  bigLeft: {
    row: css`
      grid-column: 1 / -1;

      @media (${mediaQuery.tablet}) {
        grid-column: 1 / -6;
      }
    `,
    grid: null,
  },
  start: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      align-items: start;
      ${gridDefault};
    `,
  },
  middle: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      align-items: center;
      ${gridDefault};
    `,
  },
  end: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      align-items: end;
      ${gridDefault};
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
      ${variableDefault};
    `,
  },
  variableMiddle: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      align-items: center;
      ${variableDefault};
    `,
  },
  variableEnd: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      align-items: end;
      ${variableDefault};
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
  grid-column: 1 / -1;
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
