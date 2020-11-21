import React from 'react';

import { Layout } from '../layout';
import type { LayoutProps } from '../layout';

const DefaultTemplate = ({ children }: LayoutProps) => (
  <Layout size="narrow">{children}</Layout>
);

export default DefaultTemplate;
