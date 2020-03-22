import styled from 'styled-components';
import { fontSize } from 'styled-system';

const UnorderedListContainer = styled.ul`
  ${fontSize};
  list-style-type: circle;
  padding-left: 0;

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
      border-radius: 0.25em;
      border-style: solid;
      border-width: 0.1em;
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
        border-bottom-width: 0.15em;
        border-color: var(--colorText);
        border-left-color: transparent;
        border-left-width: 0;
        border-right-width: 0.15em;
        border-style: solid;
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
