import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadataQuery } from '../../hooks';
import { SiteMetadataQueryData } from '../../typings/site-metadata-query-data';
import { SEO } from '../../components/seo';
import { Header } from '../../components/header';
import { ThemeToggle } from '../../components/theme-toggle';
import { EmojifyToggle } from '../../components/emojify-toggle';

import { Styled } from './layout.styles';

type LayoutProps = {
  variant?: 'green' | 'blue' | 'brown';
};

const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
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

export { Layout };
