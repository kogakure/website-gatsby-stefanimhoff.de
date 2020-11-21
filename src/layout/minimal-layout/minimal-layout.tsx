import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Main } from '../main';
import { SEO } from '..';
import type { LayoutProps } from '..';

import { Styled } from './minimal-layout.styles';

export const MinimalLayout = ({
  children,
  debug = false,
  homeTo,
  size = 'fullsize',
  variant = 'default',
}: LayoutProps) => (
  <>
    <SEO />
    <Helmet bodyAttributes={{ class: variant }} />
    <Main>
      <Styled.Header>
        <Styled.HeaderHomeLink to={homeTo} />
        <Styled.HeaderThemeToggle />
      </Styled.Header>
      {children}
    </Main>
  </>
);
