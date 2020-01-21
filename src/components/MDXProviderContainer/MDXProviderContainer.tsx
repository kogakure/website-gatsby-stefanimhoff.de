import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import { SEO } from '../SEO';
import { Emojify } from '../Emojify';
import { Spoiler } from '../Spoiler';
import { ColorSwatch } from '../ColorSwatch';

const shortcodes = {
  ColorSwatch,
  Emojify,
  Link,
  SEO,
  Spoiler,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
