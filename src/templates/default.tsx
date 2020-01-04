import React from 'react';

import { Layout } from '../components/Layout';
import { MDXProviderContainer } from '../components/MDXProviderContainer';

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProviderContainer>{children}</MDXProviderContainer>
  </Layout>
);

export default DefaultTemplate;
