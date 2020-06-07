import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const AboutMe = styled.div`
  align-self: center;
  grid-column: 2 / -2;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 12 / -2;
    grid-row: 2;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 13 / -3;
  }
`;

export const Styled = {
  AboutMe,
};
