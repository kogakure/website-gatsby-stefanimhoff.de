import * as React from 'react';
import unicode from 'emoji-unicode-map';

interface EmojifyProps {
  emoji: string;
}

const Emojify: React.FC<EmojifyProps> = ({ emoji }) => (
  <span role="img" aria-label={unicode.get(emoji) || 'emoji'}>
    {emoji}
  </span>
);

export { Emojify };
