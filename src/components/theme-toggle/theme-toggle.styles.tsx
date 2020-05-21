import styled from 'styled-components';

import { Circle } from '../icons';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
  position: relative;
  width: 40px;
`;

export const CircleIcon = styled(Circle)`
  background-color: var(--colorBackground);
  fill: var(--colorText);
  font-size: 1rem;
  left: 12px;
  position: absolute;
  top: 12px;
`;

export const Styled = {
  Button,
  CircleIcon,
};
