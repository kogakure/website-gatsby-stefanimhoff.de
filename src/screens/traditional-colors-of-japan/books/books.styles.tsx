import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Books = styled.div`
  align-self: start;
  column-gap: 3vw;
  display: grid;
  grid-column: 1 / -1;
  grid-row: 3;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin-bottom: 0;

  @media (${mediaQuery.tablet}) {
    grid-column: 8 / -1;
    grid-row: 2;
    justify-content: end;
  }

  @media (${mediaQuery.tablet}) {
    grid-column: 9 / -1;
  }

  & img {
    height: auto;
    max-width: 100%;
  }
`;

export const Styled = {
  Books,
};
