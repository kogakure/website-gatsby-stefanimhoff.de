import styled from 'styled-components';

import { fontSize, mediaQuery, space } from '../../layout/tokens';

import { OrderedListProps } from './ordered-list';

const OrderedListContainer = styled.ol<OrderedListProps>`
  font-size: ${fontSize[3]};
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : space[12])};
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
