import React from 'react';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider, LocalizedDateProvider } from './src/contexts';
import { GlobalStyles } from './src/layout';

export const wrapRootElement = ({ element }) => (
  <EmojifyProvider>
    <LocalizedDateProvider>{element}</LocalizedDateProvider>
  </EmojifyProvider>
);

export const wrapPageElement = ({ element }) => (
  <>
    <Normalize />
    <GlobalStyles />
    {element}
  </>
);

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    className: 'light no-js',
  });
};
