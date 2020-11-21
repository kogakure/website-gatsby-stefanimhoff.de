/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import createPersistedState from 'use-persisted-state';

export type LocalizedDateLanguage = 'en' | 'de' | 'ja';
export type LocalizedDateState = {
  localizedDateLanguage: LocalizedDateLanguage;
  setLocalizedDateLanguage: (localizedDate: LocalizedDateLanguage) => void;
};

export type LocalizedDateProviderProps = {
  children: React.ReactNode;
};

const initialState: LocalizedDateState = {
  localizedDateLanguage: 'en',
  setLocalizedDateLanguage: () => {},
};

const useLocalizedDateState = createPersistedState('localizedDate');

export const LocalizedDateContext = React.createContext(initialState);

export const LocalizedDateProvider = ({
  children,
}: LocalizedDateProviderProps) => {
  const [
    localizedDateLanguage,
    setLocalizedDateLanguage,
  ] = useLocalizedDateState(initialState.localizedDateLanguage);

  return (
    <LocalizedDateContext.Provider
      value={{ localizedDateLanguage, setLocalizedDateLanguage }}
    >
      {children}
    </LocalizedDateContext.Provider>
  );
};
