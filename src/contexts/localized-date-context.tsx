/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import createPersistedState from 'use-persisted-state';

const useLocalizedDateState = createPersistedState('localizedDate');

const initialState = {
  localizedDate: 'en',
  setLocalizedDate: (localizedDate: string) => {},
};

export const LocalizedDateContext = React.createContext(initialState);

export const LocalizedDateProvider: React.FC = ({ children }) => {
  const [localizedDate, setLocalizedDate] = useLocalizedDateState('en');

  return (
    <LocalizedDateContext.Provider value={{ localizedDate, setLocalizedDate }}>
      {children}
    </LocalizedDateContext.Provider>
  );
};
