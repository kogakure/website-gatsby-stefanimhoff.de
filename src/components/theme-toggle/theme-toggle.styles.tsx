import styled from 'styled-components';

import { Sun, Moon } from '../icons';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
  position: relative;
  width: 40px;
`;

export const SunIcon = styled(Sun)`
  background-color: var(--colorBackground);
  fill: var(--colorText);
  font-size: 1.5rem;
  left: 7px;
  opacity: var(--opacityLight);
  position: absolute;
  top: 7px;
`;

export const MoonIcon = styled(Moon)`
  background-color: var(--colorBackground);
  fill: var(--colorText);
  font-size: 1.5rem;
  left: 7px;
  opacity: var(--opacityDark);
  position: absolute;
  top: 7px;
`;

export const Styled = {
  Button,
  SunIcon,
  MoonIcon,
};
