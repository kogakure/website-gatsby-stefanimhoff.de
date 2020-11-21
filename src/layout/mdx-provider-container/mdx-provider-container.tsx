import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { shortcodes } from '.';

export type MDXProviderContainerProps = {
  children: React.ReactNode;
};

export const MDXProviderContainer = ({
  children,
}: MDXProviderContainerProps) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);
