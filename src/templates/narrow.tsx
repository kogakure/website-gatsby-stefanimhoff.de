import React from 'react';

import { Column, Layout, MDXProviderContainer } from '../layout';

const NarrowTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>
      <Column variant="narrow">{children}</Column>
    </MDXProviderContainer>
  </Layout>
);

export default NarrowTemplate;
