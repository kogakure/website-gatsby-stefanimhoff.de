import * as React from 'react';

import { Styled } from './keyboard-shortcut.styles';

export const KeyboardShortcut: React.FC = ({ children, ...props }) => (
  <Styled.KeyboardShortcut {...props}>{children}</Styled.KeyboardShortcut>
);

KeyboardShortcut.defaultProps = {
  fontSize: 2,
};
