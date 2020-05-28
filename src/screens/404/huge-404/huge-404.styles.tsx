import styled from 'styled-components';

import {
  fontSize,
  fontWeight,
  lineHeight,
  mediaQuery,
} from '../../../layout/tokens';

export const Huge404 = styled.span`
  color: var(--colorForegroundFeather);
  font-size: ${fontSize[9]};
  font-weight: ${fontWeight.black};
  grid-column: -6 / -1;
  grid-row: 2 / 4;
  line-height: ${lineHeight[1]};
  text-align: right;
  writing-mode: vertical-lr;
  z-index: 0;

  @media (${mediaQuery.desktop}) {
    grid-column: -6 / -2;
    grid-row: 1 / 4;
  }
`;

export const Styled = {
  Huge404,
};
