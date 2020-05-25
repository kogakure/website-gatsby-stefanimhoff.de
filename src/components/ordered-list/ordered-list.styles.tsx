import styled from 'styled-components';

import { fontSize, mediaQuery } from '../../layout/tokens';

const OrderedListContainer = styled.ol`
  font-size: ${fontSize[3]};
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
