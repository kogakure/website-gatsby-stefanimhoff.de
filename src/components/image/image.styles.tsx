import styled from 'styled-components';
import Img from 'gatsby-image';

import { shadow } from '../../layout/tokens';

const Container = styled.div`
  height: 100%;
  position: relative;
  transition-duration: 500ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  width: 100%;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &::after {
    box-shadow: ${shadow.subtleShade};
    content: '';
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition-duration: 500ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`;

const Image = styled(Img)`
  border-color: var(--colorForegroundSoft);
  border-style: solid;
  border-width: 1px;
`;

export const Styled = {
  Image,
  Container,
};
