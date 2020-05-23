import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { EmojifyProvider, LocalizedDateProvider } from '../contexts';

const customRender = (
  node: React.ReactElement,
  options?: RenderOptions
): RenderResult => {
  const rendered = render(
    <EmojifyProvider>
      <LocalizedDateProvider>{node}</LocalizedDateProvider>
    </EmojifyProvider>,
    options
  );

  return {
    ...rendered,
    rerender: (ui: React.ReactElement, rerenderOptions?: RenderOptions) =>
      customRender(ui, { container: rendered.container, ...options }),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
