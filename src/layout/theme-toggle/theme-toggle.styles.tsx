import styled from 'styled-components';

import { Circle } from '../../components/icons';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
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
