import React from 'react';
import { Normalize } from 'styled-normalize';
import { EmojifyProvider, LocalizedDateProvider } from '../src/contexts';
import { GlobalStyles } from '../src/layout';

import '../src/services/theme';

const AppProvider = (storyFn) => (
  <EmojifyProvider>
    <LocalizedDateProvider>
      <Normalize />
      <GlobalStyles />
      {storyFn()}
    </LocalizedDateProvider>
  </EmojifyProvider>
);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__BASE_PATH__ = '';
global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const decorators = [AppProvider];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'hsl(40,7%,90%)',
      },
      {
        name: 'dark',
        value: 'hsl(40,7%,10%)',
      },
      {
        name: 'light green',
        value: 'hsl(65, 5%, 50%)',
      },
      {
        name: 'dark green',
        value: 'hsl(65, 5%, 20%)',
      },
      {
        name: 'light brown',
        value: 'hsl(38, 10%, 55%)',
      },
      {
        name: 'dark brown',
        value: 'hsl(38, 10%, 20%)',
      },
      {
        name: 'light blue',
        value: 'hsl(220, 6%, 50%)',
      },
      {
        name: 'dark blue',
        value: 'hsl(220, 6%, 20%)',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
};
