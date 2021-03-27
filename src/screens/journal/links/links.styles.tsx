import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Links = styled.div`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 12 / span 5;
    grid-row: 3;
    margin-top: clamp(25px, 5.55vw, 100px);
  }
`;

export const Styled = {
  Links,
};
