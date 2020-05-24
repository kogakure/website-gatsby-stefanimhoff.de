import styled from 'styled-components';

import {
  borderStyle,
  borderWidth,
  fontSize,
  shadow,
} from '../../layout/tokens';

const KeyboardShortcut = styled.kbd`
  /* stylelint-disable plugin/stylelint-no-indistinguishable-colors */
  background-color: #f7f7f7;
  border-color: #cccccc;
  border-style: ${borderStyle.solid};
  border-width: ${borderWidth[1]};
  box-shadow: ${shadow.beveledKeyboard};
  color: #333333;
  display: inline-block;
  font-size: ${fontSize[2]};
  font-weight: 700;
  line-height: 1.4;
  padding: 0.3em 0.6em 0.1em;
  text-shadow: ${shadow.whiteOutline};
  white-space: nowrap;
`;

export const Styled = {
  KeyboardShortcut,
};
