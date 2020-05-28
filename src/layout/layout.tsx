import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useLayoutQuery } from '../hooks';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { SEO } from '.';

export type LayoutProps = {
  variant?: 'green' | 'blue' | 'brown';
};

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  const {
    allNavigationYaml: { nodes },
  } = useLayoutQuery();

  return (
    <>
      <SEO />
      {variant && <Helmet bodyAttributes={{ class: variant }} />}
      <Header navigation={nodes} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
