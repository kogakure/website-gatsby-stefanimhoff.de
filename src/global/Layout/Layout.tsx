/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { useState } from 'react';
import createPersistedState from 'use-persisted-state';
import { RouterProps } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useLayoutQuery } from '../../hooks';
import { Header } from '../../components/Header';
import { GlobalStyles } from '../Styles';
import { light, dark } from '../../theme';

import { Styled } from './Layout.styles';

const useThemeState = createPersistedState('darkMode');

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useThemeState(false);
  const [theme, setTheme] = useState(darkMode ? dark : light);

  const { site } = useLayoutQuery();
  const { title } = site.siteMetadata;

  const changeTheme = () => {
    setTheme(darkMode ? light : dark);
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>
          <button onClick={changeTheme} type="button">
            Toggle Theme
          </button>
          {children}
        </div>
      </Styled.MainLayout>
    </ThemeProvider>
  );
};

export { Layout };
