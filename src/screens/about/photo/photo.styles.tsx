import styled from 'styled-components';

import { mediaQuery, shadow } from '../../../layout/tokens';

const Photo = styled.div`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  grid-column: 1 / 12;
  grid-row: 2;
  transition-duration: 500ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${shadow.subtleShade};
  }

  @media (${mediaQuery.tablet}) {
    border-left-width: 1px;
    grid-column: 4 / 10;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / 10;
  }
`;

export const Styled = {
  Photo,
};
