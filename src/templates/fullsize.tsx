import React from 'react';

import { Column, Layout, MDXProviderContainer } from '../layout';

const FullsizeTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>
      <Column variant="fullsize">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default FullsizeTemplate;
