import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useLayoutQuery } from '../hooks';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { Column, MDXProviderContainer, SEO } from '.';

export type LayoutVariant = 'default' | 'green' | 'blue' | 'brown';
export type LayoutSize = 'fullsize' | 'regular' | 'narrow';

export type LayoutProps = {
  debug?: boolean;
  size?: LayoutSize;
  variant?: LayoutVariant;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  debug = false,
  size = 'fullsize',
  variant = 'default',
}) => {
  const {
    allNavigationYaml: { nodes },
  } = useLayoutQuery();

  return (
    <MDXProviderContainer>
      <SEO />
      <Helmet bodyAttributes={{ class: variant }} />
      <Header navigation={nodes} />
      <Main>
        <Column debug={debug} size={size}>
          {children}
        </Column>
      </Main>
      <Footer />
    </MDXProviderContainer>
  );
};
