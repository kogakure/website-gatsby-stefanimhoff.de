import * as React from 'react';

import { Styled } from './KeyboardShortcut.styles';

const KeyboardShortcut: React.FC = ({ children, ...props }) => (
  <Styled.KeyboardShortcut {...props}>{children}</Styled.KeyboardShortcut>
);

KeyboardShortcut.defaultProps = {
  fontSize: 2,
};

export { KeyboardShortcut };
