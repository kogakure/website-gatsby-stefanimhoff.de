import styled, { css } from 'styled-components';

import { mediaQuery, space } from '../tokens';

import type { RowProps } from '.';

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
  gap: ${space[13]};
`;

export const verticalVariants = {
  initial: css`
    align-items: initial;
  `,
  start: css`
    align-items: start;
  `,
  center: css`
    align-items: center;
  `,
  end: css`
    align-items: end;
  `,
};

export const horizontalVariants = {
  initial: css`
    justify-content: initial;
    justify-items: initial;
  `,
  start: css`
    justify-content: start;
    justify-items: start;
  `,
  center: css`
    justify-content: center;
    justify-items: center;
  `,
  end: css`
    justify-content: end;
    justify-items: end;
  `,
};

export const variants = {
  center: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      justify-content: inherit;
      justify-items: center;
    `,
  },
  rightDown: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
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
  equal: {
    row: css`
      ${defaultRow};
    `,
    grid: css`
      ${gridDefault};
    `,
  },
  fullsize: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
      justify-content: inherit;
      justify-items: inherit;
    `,
  },
  variable: {
    row: css`
      grid-column: 1 / -1;
    `,
    grid: css`
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
  ${({ variant }) =>
    variant === 'bigLeft' || variant === 'bigRight'
      ? null
      : css`
          display: grid;
        `};
  ${({ horizontal }) => horizontal && horizontalVariants[horizontal]};
  ${({ vertical }) => vertical && verticalVariants[vertical]};
  ${({ variant }) => variant && variants[variant].grid};
  ${({ variant }) => variant && variants[variant].row};
  ${({ maxWidth, minWidth, repeat, variant }) =>
    variant === 'variable' &&
    `
      grid-template-columns: repeat(${repeat}, minmax(${minWidth}, ${maxWidth}));
    `}
`;

export const Styled = {
  Grid,
  Row,
};
