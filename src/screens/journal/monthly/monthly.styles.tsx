import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Monthly = styled.div`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 11 / span 6;
    grid-row: 3;
    margin-top: clamp(25px, 5.55vw, 100px);
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 11 / span 5;
  }
`;

export const Styled = {
  Monthly,
};
