import styled from 'styled-components';
import { Link } from 'gatsby';

import { ArrowLeft } from '../../components/icons';

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

const Arrow = styled(ArrowLeft)`
  fill: var(--colorText);
  font-size: 1.2rem;
`;

const ArrowLink = styled(Link)`
  transition-duration: 500ms;
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
