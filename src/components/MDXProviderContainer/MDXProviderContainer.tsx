import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Demo } from '../Demo';

const shortcodes = {
  Demo,
  h2: Demo,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
