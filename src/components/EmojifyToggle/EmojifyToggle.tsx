import * as React from 'react';

import { EmojifyContext } from '../../contexts';

const EmojifyToggle: React.FC = () => {
  const { emojified, setEmojified } = React.useContext(EmojifyContext);
  const buttonImage = emojified ? '🙈' : '🐵';
  const buttonText = emojified ? 'Hide Emoji' : 'Show Emoji';

  return (
    <button type="button" onClick={() => setEmojified(!emojified)}>
      <span role="img" aria-label={buttonText}>
        {buttonImage}
      </span>
    </button>
  );
};

export { EmojifyToggle };
