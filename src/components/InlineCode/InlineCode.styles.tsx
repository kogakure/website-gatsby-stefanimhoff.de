import styled from 'styled-components';
import { fontSize, borderRadius, padding } from 'styled-system';

const InlineCode = styled.code`
  ${fontSize};
  ${borderRadius};
  ${padding};

  &.one-dark-pro {
    color: #fff;
  }
`;

export const Styled = {
  InlineCode,
};
