import styled from 'styled-components';

import {
  borderStyle,
  borderWidth,
  fontSize,
  mediaQuery,
  radius,
} from '../../layout/tokens';

const UnorderedListContainer = styled.ul`
  font-size: ${fontSize[3]};
  list-style-type: circle;
  padding-left: 1.2em;

  @media (${mediaQuery.tablet}) {
    padding-left: 0;
  }

  li & {
    padding-left: 2rem;
  }

  &.contains-task-list {
    list-style-type: none;
  }

  @supports (appearance: none) {
    input[type='checkbox'] {
      appearance: none;
      background: transparent;
      border-color: var(--colorTextSoftInverse);
      border-radius: ${radius[25]};
      border-style: ${borderStyle.solid};
      border-width: ${borderWidth[10]};
      cursor: pointer;
      display: inline-block;
      height: 1em;
      margin: 0;
      outline: none;
      position: relative;
      top: 0.3em;
      vertical-align: top;
      width: 1em;

      &:after {
        border-bottom-width: ${borderWidth[15]};
        border-color: var(--colorText);
        border-left-color: transparent;
        border-left-width: 0;
        border-right-width: ${borderWidth[15]};
        border-style: ${borderStyle.solid};
        border-top-color: transparent;
        border-top-width: 0;
        content: '';
        display: block;
        height: 0.5em;
        left: 0.25em;
        opacity: var(--opacity, 0);
        position: absolute;
        top: 0.1em;
        transform: rotate(var(--rotate, 0deg));
        width: 0.3em;
      }

      &:checked {
        --rotate: 43deg;
        --opacity: 1;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;

export const Styled = {
  UnorderedListContainer,
};
