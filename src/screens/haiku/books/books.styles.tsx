import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Books = styled.div`
  align-items: start;
  column-gap: 3vw;
  display: grid;
  grid-column: 2 / -2;
  grid-row: 5;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (${mediaQuery.tablet}) {
    grid-column: 10 / -4;
    grid-row: 4;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 12 / 15;
  }
`;

export const Styled = {
  Books,
};
