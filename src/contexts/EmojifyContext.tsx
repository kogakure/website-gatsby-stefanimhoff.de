/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

const initialState = {
  emojified: false,
  setEmojified: (emojified: boolean) => {},
};

const EmojifyContext = React.createContext(initialState);

const EmojifyProvider: React.FC = ({ children }) => {
  const [emojified, setEmojified] = useState(false);

  return (
    <EmojifyContext.Provider value={{ emojified, setEmojified }}>
      {children}
    </EmojifyContext.Provider>
  );
};

export { EmojifyContext, EmojifyProvider };
