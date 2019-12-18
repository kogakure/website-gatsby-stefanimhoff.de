import * as React from 'react';
import { RouterProps } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { useLayoutQuery } from '../../hooks/useLayoutQuery';
import { Header } from '../../components/Header';
import { light } from '../../theme';
import { GlobalStyles } from '../Styles';

import { Styled } from './Layout.styles';

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site } = useLayoutQuery();
  const { title } = site.siteMetadata;

  return (
    <ThemeProvider theme={light}>
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
