import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadataQuery } from '../hooks';
import { SiteMetadataQueryData } from '../typings/site-metadata-query-data';

import { EmojifyToggle } from './emojify-toggle';
import { ThemeToggle } from './theme-toggle';
import { Header } from './header';
import { SEO } from './seo';
import { Styled } from './layout.styles';

export type LayoutProps = {
  variant?: 'green' | 'blue' | 'brown';
};

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  const { site }: SiteMetadataQueryData = useSiteMetadataQuery();
  const { title } = site.siteMetadata;

  return (
    <>
      <SEO />
      {variant && <Helmet bodyAttributes={{ class: variant }} />}
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>
          <div style={{ display: 'flex' }}>
            <ThemeToggle />
            <EmojifyToggle />
          </div>
          {children}
        </div>
      </Styled.MainLayout>
    </>
  );
};
