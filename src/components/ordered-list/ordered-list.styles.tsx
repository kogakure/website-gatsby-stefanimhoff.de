import styled from 'styled-components';
import { fontSize } from 'styled-system';

const OrderedListContainer = styled.ol`
  ${fontSize};
  padding-left: 0;

  li & {
    padding-left: 2rem;
  }
`;

export const Styled = {
  OrderedListContainer,
};
