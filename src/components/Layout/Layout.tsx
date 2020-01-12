import * as React from 'react';
import { RouterProps } from '@reach/router';

import { useSiteMetadataQuery } from '../../hooks';
import { SiteMetadataQueryData } from '../../typings/SiteMetadataQueryData';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { ThemeToggle } from '../../components/ThemeToggle';

import { Styled } from './Layout.styles';

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { site }: SiteMetadataQueryData = useSiteMetadataQuery();
  const { title } = site.siteMetadata;

  return (
    <>
      <SEO />
      <Header siteTitle={title} />
      <Styled.MainLayout className="main">
        <div>
          <ThemeToggle />
          {children}
        </div>
      </Styled.MainLayout>
    </>
  );
};

export { Layout };
