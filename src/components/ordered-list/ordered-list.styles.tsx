import styled from 'styled-components';

import { fontSize, mediaQuery, space } from '../../layout/tokens';

const OrderedListContainer = styled.ol`
  font-size: ${fontSize[3]};
  margin-bottom: ${space[12]};
  padding-left: 1em;

  @media (${mediaQuery.tablet}) {
    padding-left: 0;
  }

  li & {
    padding-left: 2rem;
  }
`;

export const Styled = {
  OrderedListContainer,
};
