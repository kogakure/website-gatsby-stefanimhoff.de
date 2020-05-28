import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';
import { Verse } from '../../../components/verse';

export const Haiku = styled(Verse)`
  grid-column: 1 / -1;
  grid-row: 2;
  z-index: 1;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -6;
  }
`;

export const Styled = {
  Haiku,
};
