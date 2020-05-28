import styled from 'styled-components';

import { mediaQuery, shadow } from '../../../layout/tokens';

export const CoverImage = styled.div`
  border-bottom-width: 1px;
  border-color: var(--colorForegroundSoft);
  border-left-width: 0;
  border-right-width: 1px;
  border-style: solid;
  border-top-width: 1px;
  box-shadow: ${shadow.subtleShade};
  grid-column: 1 / -5;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -9;
  }
`;

export const Styled = {
  CoverImage,
};
