import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Styled } from './layout.styles';

import { Header, Footer, SEO } from '.';

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
