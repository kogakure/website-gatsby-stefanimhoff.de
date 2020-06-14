import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const AllPosts = styled.div`
  grid-column: 2 / -2;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / span 7;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 4 / span 6;
  }
`;

export const Styled = {
  AllPosts,
};
