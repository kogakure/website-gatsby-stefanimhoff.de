import styled from 'styled-components';

import { Sun, Moon } from '../Icons';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

export const SunIcon = styled(Sun)`
  display: ${({ theme }) => (theme === 'light' ? 'none' : 'block')};
  font-size: 1.5rem;
`;

export const MoonIcon = styled(Moon)`
  display: ${({ theme }) => (theme === 'dark' ? 'none' : 'block')};
  font-size: 1.5rem;
`;

export const Styled = {
  Button,
  SunIcon,
  MoonIcon,
};
