import * as React from 'react';

import { Styled, variants } from './verse.styles';

export type VerseVariants = keyof typeof variants;
export type VerseProps = {
  children: React.ReactNode;
  variant?: VerseVariants;
};

export const Verse = ({
  variant = 'center',
  children,
  ...props
}: VerseProps) => (
  <Styled.Verse variant={variant} {...props}>
    <Styled.Preformatted variant={variant}>{children}</Styled.Preformatted>
  </Styled.Verse>
);
