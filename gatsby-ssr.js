import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider, LocalizedDateProvider } from './src/contexts';
import { GlobalStyles, lightTheme } from './src/layout';

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

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'light no-js',
  });
};
