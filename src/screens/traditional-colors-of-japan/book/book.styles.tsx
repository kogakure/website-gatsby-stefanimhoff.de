import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Book = styled.div`
  align-self: start;
  display: grid;
  grid-column: 1 / -1;
  grid-row: 3;
  justify-content: center;
  margin-bottom: 0;

  @media (${mediaQuery.tablet}) {
    grid-column: 11 / -1;
    grid-row: 2;
    justify-content: end;
  }

  & img {
    height: auto;
    max-width: 100%;
  }
`;

export const Styled = {
  Book,
};
