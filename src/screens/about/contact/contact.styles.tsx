import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

export const Contact = styled.section`
  grid-column: 2 / -2;
  grid-row: 5;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / 8;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / 8;
  }
`;

export const Styled = {
  Contact,
};
