import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

export const Personal = styled.section`
  grid-column: 1 / -1;

  @media (${mediaQuery.tablet}) {
    grid-column: 10 / -1;
  }
`;

export const Styled = {
  Personal,
};
