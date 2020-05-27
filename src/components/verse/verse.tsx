import * as React from 'react';

import { Styled, variants } from './verse.styles';

export type VerseVariants = keyof typeof variants;
export type VerseProps = {
  variant?: VerseVariants;
};

export const Verse: React.FC<VerseProps> = ({
  variant = 'center',
  children,
  ...props
}) => (
  <Styled.Verse variant={variant} {...props}>
    <Styled.Preformatted variant={variant}>{children}</Styled.Preformatted>
  </Styled.Verse>
);
