import * as React from 'react';

import { EmojifyContext } from '../../contexts';

import { Styled } from './emojify-toggle.styles';

export const EmojifyToggle = () => {
  const { emojified, setEmojified } = React.useContext(EmojifyContext);
  const buttonText = emojified ? 'Hide Emoji' : 'Show Emoji';
  const emoji = emojified ? '🙈' : '🐵';

  return (
    <Styled.Button
      type="button"
      aria-label={buttonText}
      onClick={() => setEmojified(!emojified)}
    >
      <Styled.Emoji role="img" aria-hidden="true">
        {emoji}
      </Styled.Emoji>
    </Styled.Button>
  );
};
