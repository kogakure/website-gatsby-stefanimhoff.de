/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components';

import { transitionDuration } from '../../layout/tokens';

import { AnimationDirection } from '.';

const Icon = styled.span<{ animation: AnimationDirection }>`
  display: inline-flex;
  fill: var(--colorForeground);
  margin-left: 0.2em;
  position: relative;
  top: 0.2em;
  transition-duration: ${transitionDuration[5]};
  transition-property: transform;
  transition-timing-function: ease-in-out;

  a:hover &,
  a:active &,
  a:focus & {
    ${({ animation }) =>
      animation === 'right' &&
      css`
        transform: translate3D(0.25rem, 0, 0);
      `}
    ${({ animation }) =>
      animation === 'down' &&
      css`
        transform: translate3D(0, 0.25rem, 0);
      `}
  }
`;

export const Styled = {
  Icon,
};
