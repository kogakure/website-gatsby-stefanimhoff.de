import React from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withOptions } from '@storybook/addon-options';

import { EmojifyProvider, LocalizedDateProvider } from '../src/contexts';
import { EmojifyToggle, GlobalStyles, ThemeToggle } from '../src/layout';

import '../src/services/theme';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Decorator = (storyFn) => (
  <EmojifyProvider>
    <LocalizedDateProvider>
      <Normalize />
      <GlobalStyles />
      <Grid>
        <Main>{storyFn()}</Main>
      </Grid>
    </LocalizedDateProvider>
  </EmojifyProvider>
);

addDecorator(Decorator);

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

global.__BASE_PATH__ = '';
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

configure(require.context('../src/', true, /\.stories\.tsx$/), module);
