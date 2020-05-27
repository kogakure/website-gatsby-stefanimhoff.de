import React from 'react';

import { Column, Layout, LayoutProps, MDXProviderContainer } from '../layout';

const NarrowTemplate: React.FC<LayoutProps> = ({ variant, children }) => (
  <Layout variant={variant}>
    <MDXProviderContainer>
      <Column variant="narrow">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default NarrowTemplate;
