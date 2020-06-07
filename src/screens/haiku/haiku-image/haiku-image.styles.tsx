import styled from 'styled-components';

import { mediaQuery, shadow } from '../../../layout/tokens';

const HaikuImage = styled.div`
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  box-shadow: ${shadow.subtleShade};
  grid-column: 1 / -3;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -4;
  }
`;

export const Styled = {
  HaikuImage,
};
