/* eslint-disable import/no-duplicates */
import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import createPersistedState from 'use-persisted-state';
import { RouterProps } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useSiteMetadataQuery } from '../../hooks';
import { SiteMetadataQueryData } from '../../typings/SiteMetadataQueryData';
import { light, dark } from '../../theme';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';

import { GlobalStyles } from './GlobalStyles';
import { Styled } from './Layout.styles';

const useThemeState = createPersistedState('darkMode');

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useThemeState(false);
  const [theme, setTheme] = useState(darkMode ? dark : light);

  const { site }: SiteMetadataQueryData = useSiteMetadataQuery();
  const { title } = site.siteMetadata;

  useEffect(() => {
    setTheme(darkMode ? dark : light);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <SEO bodyClass="theme" />
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>
          <button onClick={() => setDarkMode(!darkMode)} type="button">
            Toggle Theme
          </button>
          {children}
        </div>
      </Styled.MainLayout>
    </ThemeProvider>
  );
};

export { Layout };
