import styled from 'styled-components';
import { fontSize } from 'styled-system';

const KeyboardShortcut = styled.kbd`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */
  ${fontSize}
  background-color: #f7f7f7;
  border-color: #cccccc;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 2px #ffffff;
  color: #333333;
  display: inline-block;
  font-weight: 700;
  line-height: 1.4;
  padding: 0.3em 0.6em 0.1em;
  text-shadow: 0 1px 0 #ffffff;
  white-space: nowrap;
`;

export const Styled = {
  KeyboardShortcut,
};
