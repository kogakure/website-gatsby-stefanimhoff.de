import styled, { css } from 'styled-components';

import { space } from '../../layout/tokens';

import { VerseProps } from './verse';

export const variants = {
  center: {
    blockquote: css`
      margin: ${space[10]};
    `,
    pre: css`
      margin-left: auto;
      margin-right: auto;
    `,
  },
  left: {
    blockquote: css`
      margin-bottom: ${space[10]};
      margin-left: 0;
      margin-right: 0;
      margin-top: ${space[10]};
    `,
    pre: null,
  },
};

const Verse = styled.blockquote<VerseProps>`
  ${({ variant }) => variant && variants[variant].blockquote}
  display: flex;
  font-style: italic;

  p {
    margin: 0;
  }
`;

const Preformatted = styled.pre<VerseProps>`
  ${({ variant }) => variant && variants[variant].pre}
  font-family: inherit;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Styled = {
  Preformatted,
  Verse,
};
