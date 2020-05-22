import * as React from 'react';
import unicode from 'emoji-unicode-map';

import { EmojifyContext } from '../../contexts';

import { Styled } from './emojify.styles';

export type EmojifyProps = {
  emoji: string;
};

export const Emojify: React.FC<EmojifyProps> = ({ emoji, ...props }) => {
  const { emojified } = React.useContext(EmojifyContext);

  return emojified ? (
    <Styled.Emoji
      role="img"
      aria-label={unicode.get(emoji) || 'emoji'}
      {...props}
    >
      {emoji}
    </Styled.Emoji>
  ) : null;
};
