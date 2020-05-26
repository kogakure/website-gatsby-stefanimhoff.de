import styled from 'styled-components';

import { transitionDuration } from '../../layout/tokens';
import { Circle } from '../../components/icons';

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

export const CircleIcon = styled(Circle)`
  /* stylelint-disable plugin/no-low-performance-animation-properties */
  fill: var(--colorForeground);
  font-size: 0.8rem;
  transition-duration: ${transitionDuration[5]};
  transition-property: font-size;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    font-size: 1rem;
  }
`;

export const Styled = {
  Button,
  CircleIcon,
};
