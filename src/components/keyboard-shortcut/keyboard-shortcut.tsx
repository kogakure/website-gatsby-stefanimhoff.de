import * as React from 'react';

import { Styled } from './keyboard-shortcut.styles';

export type KeyboardShortcutProps = {
  children: React.ReactNode;
};

export const KeyboardShortcut = ({
  children,
  ...props
}: KeyboardShortcutProps) => (
  <Styled.KeyboardShortcut {...props}>{children}</Styled.KeyboardShortcut>
);
