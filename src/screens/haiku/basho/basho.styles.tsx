import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Basho = styled.div`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 2 / 9;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / 11;
  }
`;

export const Styled = {
  Basho,
};
