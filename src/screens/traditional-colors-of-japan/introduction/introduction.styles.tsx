import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Introduction = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  margin-bottom: 0;
  z-index: 1;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / 10;
  }

  @media (${mediaQuery.desktop}) {
    align-content: center;
    display: grid;
  }
`;

export const Styled = {
  Introduction,
};
