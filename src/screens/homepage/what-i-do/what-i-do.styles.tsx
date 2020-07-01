import styled from 'styled-components';

import { mediaQuery, space } from '../../../layout/tokens';

const WhatIDo = styled.div`
  grid-column: 2 / -2;
  grid-row: 4;

  @media (${mediaQuery.tablet}) {
    grid-column: 3 / -3;
    grid-row: 3;
  }

  @media (${mediaQuery.desktop}) {
    grid-column: 5 / -5;
  }
`;

const Text = styled.div`
  column-count: 1;
  column-gap: 2.775vw;
  margin-bottom: ${space[10]};

  @media (${mediaQuery.tablet}) {
    column-count: 2;
  }
`;

export const Styled = {
  WhatIDo,
  Text,
};
