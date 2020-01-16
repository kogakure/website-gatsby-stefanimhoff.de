import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider } from './src/contexts';
import { GlobalStyles } from './src/components/Layout/GlobalStyles';
import { lightTheme } from './src/themes';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <EmojifyProvider>
      <Normalize />
      <GlobalStyles />
      {element}
    </EmojifyProvider>
  </ThemeProvider>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'light no-js',
  });
};
