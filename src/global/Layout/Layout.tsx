import * as React from 'react';
import { RouterProps } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { Header } from '../../components/Header';
import { theme } from '../../theme';
import { GlobalStyles } from '../GlobalStyles';

import { Styled } from './Layout.styles';

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery();
  const { title } = site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>{children}</div>
      </Styled.MainLayout>
    </ThemeProvider>
  );
};

export { Layout };
