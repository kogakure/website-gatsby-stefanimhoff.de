import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

export const Summary = styled.section`
  grid-column: 1 / -1;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / 9;
  }
`;

export const Styled = {
  Summary,
};
