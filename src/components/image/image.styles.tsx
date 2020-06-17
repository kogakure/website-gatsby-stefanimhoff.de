import styled from 'styled-components';
import Img from 'gatsby-image';

import { shadow } from '../../layout/tokens';

const Image = styled(Img)`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  border-color: var(--colorForegroundSoft);
  border-style: solid;
  border-width: 1px;
  transition-duration: 500ms;
  transition-property: box-shadow;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${shadow.subtleShade};
  }
`;

export const Styled = {
  Image,
};
