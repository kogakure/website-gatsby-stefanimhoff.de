import React from 'react';

import { Column, Layout, MDXProviderContainer } from '../layout';

const RegularTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>
      <Column variant="regular">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default RegularTemplate;
