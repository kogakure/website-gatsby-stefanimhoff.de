import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

export const AboutMe = styled.section`
  grid-column: 2 / -2;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 6 / 14;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 8 / 13;
  }
`;

export const Styled = {
  AboutMe,
};
