import * as React from 'react';
/* eslint-disable @typescript-eslint/no-empty-function */
import createPersistedState from 'use-persisted-state';

export type EmojiState = {
  emojified: boolean;
  setEmojified: (emojified: boolean) => void;
};

const initialState: EmojiState = {
  emojified: false,
  setEmojified: () => {},
};

const useEmojifyState = createPersistedState('emojify');

export const EmojifyContext = React.createContext(initialState);

export const EmojifyProvider: React.FC = ({ children }) => {
  const [emojified, setEmojified] = useEmojifyState(initialState.emojified);

  return (
    <EmojifyContext.Provider value={{ emojified, setEmojified }}>
      {children}
    </EmojifyContext.Provider>
  );
};
