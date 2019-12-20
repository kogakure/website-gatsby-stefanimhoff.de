import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { ThemeProps } from '../typings/Theme';
import { light } from '../theme';

interface CustomTheme {
  theme: ThemeProps;
}

type RenderOptionsWithTheme = RenderOptions & CustomTheme;

const customRender = (
  node: React.ReactElement,
  options: RenderOptionsWithTheme = { theme: light }
): RenderResult => {
  const { theme } = options;
  const rendered = render(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
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
