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

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.remove('no-js');
  });
};
