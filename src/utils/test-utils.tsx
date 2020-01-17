import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { EmojifyProvider, LocalizedDateProvider } from '../contexts';
import { ThemeType } from '../typings/Theme';
import { lightTheme } from '../themes';

interface CustomTheme {
  theme: ThemeType;
}

type RenderOptionsWithTheme = RenderOptions & CustomTheme;

const customRender = (
  node: React.ReactElement,
  options: RenderOptionsWithTheme = { theme: lightTheme }
): RenderResult => {
  const { theme } = options;
  const rendered = render(
    <ThemeProvider theme={theme}>
      <EmojifyProvider>
        <LocalizedDateProvider>{node}</LocalizedDateProvider>
      </EmojifyProvider>
    </ThemeProvider>,
    options
  );

  return {
    ...rendered,
    rerender: (
      ui: React.ReactElement,
      rerenderOptions?: RenderOptionsWithTheme
    ) => customRender(ui, { container: rendered.container, ...options }),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
