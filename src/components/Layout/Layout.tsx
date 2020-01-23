import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadataQuery } from '../../hooks';
import { SiteMetadataQueryData } from '../../typings/SiteMetadataQueryData';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { ThemeToggle } from '../../components/ThemeToggle';
import { EmojifyToggle } from '../../components/EmojifyToggle';

import { Styled } from './Layout.styles';

interface LayoutProps {
  variant?: 'green' | 'blue' | 'brown';
}

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
