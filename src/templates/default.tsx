import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Layout } from '../global/Layout';
import { Demo } from '../components/Demo';

const shortcodes = {
  Demo,
  h2: Demo,
};

const DefaultTemplate: React.FC = ({ children }) => (
  <Layout>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </Layout>
);

export default DefaultTemplate;
