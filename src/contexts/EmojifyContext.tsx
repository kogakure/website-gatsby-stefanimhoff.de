/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const initialState = {
  emojified: false,
  toggleEmojifyValue: () => {},
  setEmojified: (emojified: boolean) => {},
};

const EmojifyContext = React.createContext(initialState);

const EmojifyProvider: React.FC = ({ children }) => {
  const [value, setValue] = useLocalStorage('emojify', '🚫');
  const initialValue = value !== '🚫';
  const [emojified, setEmojified] = useState(initialValue);

  const toggleEmojifyValue = () => {
    setEmojified(!emojified);
    setValue(emojified ? '🚫' : '✅');
  };

  return (
    <EmojifyContext.Provider
      value={{ emojified, setEmojified, toggleEmojifyValue }}
    >
      {children}
    </EmojifyContext.Provider>
  );
};

export { EmojifyContext, EmojifyProvider };
