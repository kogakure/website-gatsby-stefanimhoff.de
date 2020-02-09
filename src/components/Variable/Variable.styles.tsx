import styled from 'styled-components';
import { fontSize, borderRadius, padding } from 'styled-system';

const Variable = styled.var`
  ${fontSize};
  ${borderRadius};
  ${padding};

  &.one-dark-pro {
    color: #fff;
  }
`;

export const Styled = {
  Variable,
};
