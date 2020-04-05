import * as React from 'react';
import { MarginProps } from 'styled-system';

import { Styled } from './Verse.styles';

type VerseProps = MarginProps;

const Verse: React.FC<VerseProps> = ({ children, ...props }) => (
  <Styled.Verse {...props}>
    <Styled.Preformatted>{children}</Styled.Preformatted>
  </Styled.Verse>
);

Verse.defaultProps = {
  my: 12,
};

export { Verse };
