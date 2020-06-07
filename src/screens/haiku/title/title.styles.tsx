import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Title = styled.div`
  grid-column: 2 / -2;
  grid-row: 1;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / -6;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / -6;
  }
`;

export const Styled = {
  Title,
};
