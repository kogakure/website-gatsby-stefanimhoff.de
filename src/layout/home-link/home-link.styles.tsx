import styled from 'styled-components';
import { Link } from 'gatsby';

import { ArrowLeft } from '../../components/icons';

const Arrow = styled(ArrowLeft)`
  fill: var(--colorText);
  font-size: 1.2rem;
`;

const ArrowLink = styled(Link)`
  transition: transform 500ms ease-in-out 0ms;

  &:hover,
  &:focus {
    transform: translate3D(-0.25rem, 0, 0);
  }
`;

export const Styled = { Arrow, ArrowLink };
