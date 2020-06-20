import styled from 'styled-components';

import { mediaQuery, space } from '../../../layout/tokens';

const Colors = styled.div`
  display: grid;
  grid-gap: ${space[5]};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding-left: 5.55vw;
  padding-right: 5.55vw;
  width: 100%;

  @media (${mediaQuery.tablet}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Styled = {
  Colors,
};
