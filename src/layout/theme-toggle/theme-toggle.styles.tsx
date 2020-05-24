import styled from 'styled-components';

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
  fill: var(--colorText);
  font-size: 1rem;
`;

export const Styled = {
  Button,
  CircleIcon,
};
