import styled from 'styled-components';

import { transitionDuration } from '../../layout/tokens';
import { ArrowUp } from '../../components/icons';

const Button = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

const Arrow = styled(ArrowUp)`
  fill: var(--colorForeground);
  font-size: 20px;
`;

const ArrowLink = styled.a`
  transition-duration: ${transitionDuration[5]};
  transition-property: transform;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    transform: translate3D(0, -0.25rem, 0);
  }
`;

export const Styled = {
  Arrow,
  ArrowLink,
  Button,
};
