import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider, LocalizedDateProvider } from './src/contexts';
import { GlobalStyles } from './src/components/Layout/GlobalStyles';
import { lightTheme } from './src/themes';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <EmojifyProvider>
      <LocalizedDateProvider>
        <Normalize />
        <GlobalStyles />
        {element}
      </LocalizedDateProvider>
    </EmojifyProvider>
  </ThemeProvider>
);

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove('no-js');
  });
};
