import React from 'react';

import { Layout } from '../layout';
import { MDXProviderContainer } from '../layout/mdx-provider-container';

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>{children}</MDXProviderContainer>
  </Layout>
);

export default DefaultTemplate;
