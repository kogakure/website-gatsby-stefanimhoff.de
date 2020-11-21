import * as React from 'react';
/* eslint-disable @typescript-eslint/no-empty-function */
import createPersistedState from 'use-persisted-state';

export type EmojiState = {
  emojified: boolean;
  setEmojified: (emojified: boolean) => void;
};

export type EmojiProviderProps = {
  children: React.ReactNode;
};

const initialState: EmojiState = {
  emojified: false,
  setEmojified: () => {},
};

const useEmojifyState = createPersistedState('emojify');

export const EmojifyContext = React.createContext(initialState);

export const EmojifyProvider = ({ children }: EmojiProviderProps) => {
  const [emojified, setEmojified] = useEmojifyState(initialState.emojified);

  return (
    <EmojifyContext.Provider value={{ emojified, setEmojified }}>
      {children}
    </EmojifyContext.Provider>
  );
};
