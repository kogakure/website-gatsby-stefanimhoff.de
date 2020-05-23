import * as React from 'react';

import { Styled } from './verse.styles';

export const Verse: React.FC = ({ children, ...props }) => (
  <Styled.Verse {...props}>
    <Styled.Preformatted>{children}</Styled.Preformatted>
  </Styled.Verse>
);
