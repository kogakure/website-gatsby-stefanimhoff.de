import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import { SEO } from '../SEO';
import { Demo } from '../Demo';
import { Emojify } from '../Emojify';
import { Spoiler } from '../Spoiler';

const shortcodes = {
  Demo,
  Emojify,
  Spoiler,
  Link,
  SEO,
  h2: Demo,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
