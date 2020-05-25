import React from 'react';

import { Column, Layout, MDXProviderContainer } from '../layout';

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>
      <Column variant="regular">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default DefaultTemplate;
