import React from 'react';

import { Layout, LayoutProps } from '../layout';

const DefaultTemplate: React.FC<LayoutProps> = ({ children }) => (
  <Layout size="narrow">{children}</Layout>
);

export default DefaultTemplate;
