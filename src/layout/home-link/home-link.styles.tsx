import styled from 'styled-components';
import { Link } from 'gatsby';

import { transitionDuration } from '../../layout/tokens';
import { ArrowLeft } from '../../components/icons';

const Button = styled.button`
  align-items: center;
  background: red;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: 0;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

const Arrow = styled(ArrowLeft)`
  fill: var(--colorForeground);
  font-size: 20px;
  height: 20px;
  width: 20px;
`;

const ArrowLink = styled(Link)`
  transition-duration: ${transitionDuration[5]};
  transition-property: transform;
  transition-timing-function: ease-in-out;

  &:hover,
  &:focus {
    transform: translate3D(-0.25rem, 0, 0);
  }
`;

export const Styled = {
  Arrow,
  ArrowLink,
  Button,
};
