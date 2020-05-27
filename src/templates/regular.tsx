import React from 'react';

import { Column, Layout, LayoutProps, MDXProviderContainer } from '../layout';

const RegularTemplate: React.FC<LayoutProps> = ({ variant, children }) => (
  <Layout variant={variant}>
    <MDXProviderContainer>
      <Column variant="regular">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default RegularTemplate;
