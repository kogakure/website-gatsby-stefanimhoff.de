import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { shortcodes } from '.';

export const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);
