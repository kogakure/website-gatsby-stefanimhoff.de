import styled from 'styled-components';

import { mediaQuery, shadow } from '../../../layout/tokens';

const CoverImage = styled.div`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  grid-column: 1 / -5;
  grid-row: 2;
  transition-duration: 500ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${shadow.subtleShade};
  }

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -9;
  }
`;

export const Styled = {
  CoverImage,
};
