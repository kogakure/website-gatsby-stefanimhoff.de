/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import createPersistedState from 'use-persisted-state';

const useEmojifyState = createPersistedState('emojify');

const initialState = {
  emojified: false,
  setEmojified: (emojified: boolean) => {},
};

const EmojifyContext = React.createContext(initialState);

const EmojifyProvider: React.FC = ({ children }) => {
  const [emojified, setEmojified] = useEmojifyState(false);

  return (
    <EmojifyContext.Provider value={{ emojified, setEmojified }}>
      {children}
    </EmojifyContext.Provider>
  );
};

export { EmojifyContext, EmojifyProvider };