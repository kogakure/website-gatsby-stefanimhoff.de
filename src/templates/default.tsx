import React from 'react';

import { Layout } from '../components/layout';
import { MDXProviderContainer } from '../components/mdx-provider-container';

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>{children}</MDXProviderContainer>
  </Layout>
);

export default DefaultTemplate;
