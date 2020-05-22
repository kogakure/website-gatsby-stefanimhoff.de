import * as React from 'react';

import { EmojifyContext } from '../../contexts';
import { Clickable } from '../../components/clickable';

import { Styled } from './emojify-toggle.styles';

export const EmojifyToggle: React.FC = () => {
  const { emojified, setEmojified } = React.useContext(EmojifyContext);
  const buttonText = emojified ? 'Hide Emoji' : 'Show Emoji';
  const emoji = emojified ? '🙈' : '🐵';
  const emojiText = emojified ? 'See-No-Evil Monkey' : 'Monkey Face';

  return (
    <Clickable text={buttonText} onClick={() => setEmojified(!emojified)}>
      <Styled.Emoji role="img" aria-label={emojiText}>
        {emoji}
      </Styled.Emoji>
    </Clickable>
  );
};
