import styled from 'styled-components';

import { fontSize, mediaQuery, space } from '../../layout/tokens';

type OrderedListTransientProps = {
  $noMargin?: boolean;
};

const OrderedListContainer = styled.ol<OrderedListTransientProps>`
  font-size: ${fontSize[3]};
  margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : space[12])};
  padding-left: 1em;

  @media (${mediaQuery.tablet}) {
    padding-left: 0;
  }

  li & {
    margin-bottom: 0;
    padding-left: 2rem;
  }
`;

export const Styled = {
  OrderedListContainer,
};
