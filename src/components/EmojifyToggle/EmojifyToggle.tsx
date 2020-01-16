import * as React from 'react';

import { EmojifyContext } from '../../contexts';

const EmojifyToggle: React.FC = () => {
  const { emojified, setEmojified } = React.useContext(EmojifyContext);
  const buttonText = emojified ? '🙈' : '🐵';

  return (
    <button type="button" onClick={() => setEmojified(!emojified)}>
      {buttonText}
    </button>
  );
};

export { EmojifyToggle };
