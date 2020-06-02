import React from 'react';
import { Normalize } from 'styled-normalize';

import { EmojifyProvider, LocalizedDateProvider } from './src/contexts';
import { GlobalStyles } from './src/layout';

const sourceCodeInfo = `👋 I see you’re interested in the source code of this site? 👨🏻‍💻 I build it with Gatsby, React, TypeScript and Styled Components. You can find it here:

👉 https://github.com/kogakure/website-gatsby-stefanimhoff.de
`;

// TODO: #84 Move Normalize and GlobalStyles to wrapPageElement
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
    // eslint-disable-next-line no-console
    console.info(sourceCodeInfo);
  });
};
