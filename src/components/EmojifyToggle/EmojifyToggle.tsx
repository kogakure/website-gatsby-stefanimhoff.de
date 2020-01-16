import * as React from 'react';

import { EmojifyContext } from '../../contexts';

const EmojifyToggle: React.FC = () => {
  const { emojified, toggleEmojifyValue } = React.useContext(EmojifyContext);
  const buttonImage = emojified ? '🙈' : '🐵';
  const buttonText = emojified ? 'Hide Emoji' : 'Show Emoji';

  return (
    <button type="button" onClick={toggleEmojifyValue}>
      <span role="img" aria-label={buttonText}>
        {buttonImage}
      </span>
    </button>
  );
};

export { EmojifyToggle };
