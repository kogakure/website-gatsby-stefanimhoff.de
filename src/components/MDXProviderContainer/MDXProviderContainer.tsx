import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import { SEO } from '../SEO';
import { Emojify } from '../Emojify';
import { Spoiler } from '../Spoiler';
import { ColorSwatch } from '../ColorSwatch';
import { Typography } from '../Typography';
import { TextLink, BlockLink } from '../TextLink';

const { Title, Headline, Subline, Paragraph, InlineCode } = Typography;

const shortcodes = {
  ColorSwatch,
  Emojify,
  Link,
  SEO,
  Spoiler,
  Title,
  Headline,
  Subline,
  Paragraph,
  TextLink,
  BlockLink,
  h1: Title,
  h2: Headline,
  h3: Subline,
  h4: Subline,
  h5: Subline,
  h6: Subline,
  p: Paragraph,
  inlineCode: InlineCode,
  a: TextLink,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
