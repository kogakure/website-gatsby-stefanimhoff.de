import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const AboutWebsite = styled.section`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 5 / 13;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 7 / 12;
  }
`;

export const Styled = {
  AboutWebsite,
};
