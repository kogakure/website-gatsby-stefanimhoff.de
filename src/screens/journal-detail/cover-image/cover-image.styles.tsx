import styled from 'styled-components';
import Img from 'gatsby-image';

import { mediaQuery, shadow } from '../../../layout/tokens';

const CoverImage = styled(Img)`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  grid-column: 1 / -3;
  grid-row: 3;
  height: 55vw;
  object-fit: cover;
  transition-duration: 500ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${shadow.subtleShade};
  }

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -7;
    grid-row: 2;
    height: 40vw;
  }
`;

export const Styled = {
  CoverImage,
};
