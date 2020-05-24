import React from 'react';

import { Layout } from '../layout';
import { MDXProviderContainer } from '../layout/mdx-provider-container';

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout size="regular">
    <MDXProviderContainer>{children}</MDXProviderContainer>
  </Layout>
);

export default DefaultTemplate;
