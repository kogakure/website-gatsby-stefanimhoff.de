import styled from 'styled-components';
import { fontSize, borderRadius, padding } from 'styled-system';

const Sample = styled.samp`
  ${fontSize};
  ${borderRadius};
  ${padding};

  &.one-dark-pro {
    color: #fff;
  }
`;

export const Styled = {
  Sample,
};
