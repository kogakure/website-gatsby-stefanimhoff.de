import * as React from 'react';
import unicode from 'emoji-unicode-map';

import { EmojifyContext } from '../../contexts';

import { Styled } from './emojify.styles';

export type EmojifyProps = {
  emoji: string;
};

export const Emojify: React.FC<EmojifyProps> = ({ emoji, ...props }) => {
  const { emojified } = React.useContext(EmojifyContext);
  const emojiText = unicode.get(emoji);
  const emojiLabel =
    emojiText === undefined ? 'emoji' : String(emojiText.replace('_', ' '));

  return emojified ? (
    <Styled.Emoji role="img" aria-label={emojiLabel} {...props}>
      {' '}
      {emoji}{' '}
    </Styled.Emoji>
  ) : (
    <span> </span>
  );
};
