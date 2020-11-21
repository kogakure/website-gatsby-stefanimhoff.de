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
  children?: React.ReactNode;
  debug?: boolean;
  homeTo?: string;
  size?: LayoutSize;
  variant?: LayoutVariant;
};

export const Layout = ({
  children,
  debug = false,
  homeTo,
  size = 'fullsize',
  variant = 'default',
}: LayoutProps) => {
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
