import styled from 'styled-components';

import { mediaQuery } from '../../../layout/tokens';

const Text = styled.div`
  padding-left: 5.55vw;
  padding-right: 5.55vw;
  width: 100%;

  @media (${mediaQuery.tablet}) {
    padding: 0;
  }
`;

export const Styled = {
  Text,
};
