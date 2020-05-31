import styled, { css } from 'styled-components';

import { radius } from '../../layout/tokens';

import { FlagProps } from '.';

export const variants = {
  default: css`
    background-color: lightgrey;
    border-color: darkgrey;
    color: black;
  `,
  netflix: css`
    background-color: rgb(207, 0, 0);
    border-color: rgb(207, 0, 0);
    color: white;
  `,
  primevideo: css`
    background-color: rgb(73, 163, 221);
    border-color: rgb(73, 163, 221);
    color: black;
  `,
};

const baseFlag = css`
  border-radius: ${radius[1]};
  border-style: solid;
  border-width: 1px;
  font-family: 'Fira Code', 'Operator', 'Hasklig', 'Monoid', monospace;
  font-size: 0.7em;
  padding-bottom: 0em;
  padding-left: 0.3em;
  padding-right: 0.3em;
  padding-top: 0.1em;
`;

const Flag = styled.span<FlagProps>`
  ${baseFlag};
  ${({ variant }) => variant && variants[variant]};
`;

const LinkedFlag = styled.a<FlagProps>`
  ${baseFlag};
  ${({ variant }) => variant && variants[variant]};
  text-decoration: none;
`;

export const Styled = {
  Flag,
  LinkedFlag,
};
