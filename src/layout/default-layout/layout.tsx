import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useLayoutQuery } from '../../hooks';
import { Header } from '../header';
import { Main } from '../main';
import { Footer } from '../footer';
import { Column, SEO } from '..';
import { TransitionLayout } from '../page-transition';

export type LayoutVariant = 'default' | 'green' | 'blue' | 'brown';
export type LayoutSize = 'fullsize' | 'regular' | 'narrow';

export type LayoutProps = {
  debug?: boolean;
  size?: LayoutSize;
  variant?: LayoutVariant;
  homeTo?: string;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  debug = false,
  homeTo,
  size = 'fullsize',
  variant = 'default',
}) => {
  const {
    allNavigationYaml: { nodes },
  } = useLayoutQuery();

  return (
    <TransitionLayout>
      <SEO />
      <Helmet bodyAttributes={{ class: variant }} />
      <Header navigation={nodes} homeTo={homeTo} />
      <Main>
        <Column debug={debug} size={size}>
          {children}
        </Column>
      </Main>
      <Footer />
    </TransitionLayout>
  );
};
