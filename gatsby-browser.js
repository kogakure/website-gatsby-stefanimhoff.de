import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { GlobalStyles } from './src/components/Layout/GlobalStyles';
import { lightTheme } from './src/themes';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <>
      <Normalize />
      <GlobalStyles />
      {element}
    </>
  </ThemeProvider>
);

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.classList.remove('no-js');
  });
};
