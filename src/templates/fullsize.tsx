import React from 'react';

import { Column, Layout, LayoutProps, MDXProviderContainer } from '../layout';

const FullsizeTemplate: React.FC<LayoutProps> = ({ variant, children }) => (
  <Layout variant={variant}>
    <MDXProviderContainer>
      <Column variant="fullsize">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default FullsizeTemplate;
