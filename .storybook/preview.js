import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withOptions } from '@storybook/addon-options';

import { EmojifyProvider, LocalizedDateProvider } from '../src/contexts';
import {
  EmojifyToggle,
  GlobalStyles,
  ThemeToggle,
  lightTheme,
} from '../src/layout';

import '../src/services/theme';

const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas:
    '. navigation .'
    '. main .';
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  justify-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  grid-area: navigation;
`;

const Main = styled.main`
  grid-area: main;
  width: 100%;
`;

const Decorator = (storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <EmojifyProvider>
      <LocalizedDateProvider>
        <Normalize />
        <GlobalStyles />
        <Grid>
          <Navigation>
            <ThemeToggle />
            <EmojifyToggle />
          </Navigation>
          <Main>{storyFn()}</Main>
        </Grid>
      </LocalizedDateProvider>
    </EmojifyProvider>
  </ThemeProvider>
);

addDecorator(Decorator);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

addDecorator(
  withOptions({
    name: 'stefanimhoff.de',
    url: 'https://www.stefanimhoff.de/',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  })
);

configure(
  require.context('../src/components', true, /\.stories\.tsx$/),
  module
);
