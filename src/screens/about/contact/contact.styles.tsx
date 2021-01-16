import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Contact = styled.section`
  grid-column: 2 / -2;
  grid-row: 5;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / 11;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / 9;
  }
`;

export const Styled = {
  Contact,
};
