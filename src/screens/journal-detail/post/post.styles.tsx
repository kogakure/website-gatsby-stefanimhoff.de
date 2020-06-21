import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Post = styled.div`
  grid-column: 2 / -2;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -7;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / -7;
  }
`;

export const Styled = {
  Post,
};
