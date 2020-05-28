import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

export const Title = styled.div`
  grid-column: 2 / -2;
  grid-row: 1;

  @media (${mediaQuery.desktop}) {
    grid-column: 3 / -3;
  }
`;

export const Styled = {
  Title,
};
