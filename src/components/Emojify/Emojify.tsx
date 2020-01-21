import * as React from 'react';
import unicode from 'emoji-unicode-map';

import { EmojifyContext } from '../../contexts';

interface EmojifyProps {
  emoji: string;
}

const Emojify: React.FC<EmojifyProps> = ({ emoji, ...props }) => {
  const { emojified } = React.useContext(EmojifyContext);

  return emojified ? (
    <span role="img" aria-label={unicode.get(emoji) || 'emoji'} {...props}>
      {emoji}
    </span>
  ) : null;
};

export { Emojify };
