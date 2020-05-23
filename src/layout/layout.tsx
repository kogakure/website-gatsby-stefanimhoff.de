import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from './header';
import { Footer } from './footer';
import { Styled } from './layout.styles';

import { SEO } from '.';

export type LayoutProps = {
  variant?: 'green' | 'blue' | 'brown';
};

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => (
  <>
    <SEO />
    {variant && <Helmet bodyAttributes={{ class: variant }} />}
    <Header />
    <Styled.Main className="main">{children}</Styled.Main>
    <Footer />
  </>
);
