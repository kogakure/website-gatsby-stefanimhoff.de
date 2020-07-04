import styled, { css } from 'styled-components';

import { radius } from '../../layout/tokens';

const baseFlag = css`
  background-color: lightgrey;
  border-color: darkgrey;
  border-radius: ${radius[1]};
  border-style: solid;
  border-width: 1px;
  color: black;
  font-family: 'Fira Code', 'Operator', 'Hasklig', 'Monoid', monospace;
  font-size: 0.7em;
  padding-bottom: 0em;
  padding-left: 0.3em;
  padding-right: 0.3em;
  padding-top: 0.1em;
`;

const Flag = styled.span`
  ${baseFlag};
`;

const LinkedFlag = styled.a`
  ${baseFlag};
  text-decoration: none;
`;

const Hidden = styled.span`
  display: none;
`;

export const Styled = {
  Flag,
  LinkedFlag,
  Hidden,
};
