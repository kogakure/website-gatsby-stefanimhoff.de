import React from 'react';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider, LocalizedDateProvider } from './src/contexts';
import { GlobalStyles } from './src/layout';

export const wrapRootElement = ({ element }) => (
  <EmojifyProvider>
    <LocalizedDateProvider>
      <Normalize />
      <GlobalStyles />
      {element}
    </LocalizedDateProvider>
  </EmojifyProvider>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'light no-js',
  });
};
