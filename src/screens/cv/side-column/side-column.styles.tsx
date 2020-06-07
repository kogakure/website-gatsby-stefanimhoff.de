import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const SideColumn = styled.aside`
  grid-column: 1 / -1;

  @media (${mediaQuery.tablet}) {
    grid-column: 10 / -1;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 10 / -1;
  }
`;

export const Styled = {
  SideColumn,
};
