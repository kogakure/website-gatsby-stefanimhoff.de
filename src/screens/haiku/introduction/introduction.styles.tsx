import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Introduction = styled.div`
  grid-column: 2 / -2;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / -6;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / -6;
  }
`;

export const Styled = {
  Introduction,
};
