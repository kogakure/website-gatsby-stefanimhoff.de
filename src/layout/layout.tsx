import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from './header';
import { Main, MainSize } from './main';
import { Footer } from './footer';

import { SEO } from '.';

export type LayoutProps = {
  size?: MainSize;
  variant?: 'green' | 'blue' | 'brown';
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  size = 'fullsize',
  variant,
}) => (
  <>
    <SEO />
    {variant && <Helmet bodyAttributes={{ class: variant }} />}
    <Header />
    <Main size={size}>{children}</Main>
    <Footer />
  </>
);
