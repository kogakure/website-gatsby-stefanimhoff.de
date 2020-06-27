import styled, { css } from 'styled-components';

import { radius } from '../../layout/tokens';

const borderRadius = css`
  border-bottom-left-radius: ${radius[1]};
  border-bottom-right-radius: ${radius[1]};
  border-top-left-radius: ${radius[1]};
  border-top-right-radius: ${radius[1]};
`;

const baseBook = css`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */
  box-shadow: 0 0.1em 0.5em rgba(0, 0, 0, 0.5);
  display: inline-flex;
  position: relative;
  transition-duration: 500ms;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  vertical-align: bottom;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &::before {
    ${borderRadius};
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 90%
    );
    box-shadow: 0.1em 0 rgba(0, 0, 0, 0.1), 2px 0 0px rgba(255, 255, 255, 0.1);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 0.5em;
    z-index: 2;
  }

  &::after {
    border-radius: 4em / 2em;
    bottom: 1em;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.8);
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 50%;
    top: 1em;
    transition-duration: 500ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    z-index: -1;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`;

const Book = styled.div`
  ${baseBook};
`;

const LinkedBook = styled.a`
  ${baseBook};
`;

const Cover = styled.img`
  ${borderRadius};
  display: block;
  position: relative;
`;

export const Styled = {
  Book,
  Cover,
  LinkedBook,
};
