import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import { theme } from '../../theme';

import { Header } from './Header';

afterEach(cleanup);

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
