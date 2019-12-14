import * as React from 'react';
import { RouterProps } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from '../styles/theme';

import { Header } from './Header';
import { Styled } from './Layout.styles';

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery();
  const { title } = site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>{children}</div>
      </Styled.MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
