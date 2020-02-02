import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';

import { ColorSwatch } from '../ColorSwatch';
import { Emojify } from '../Emojify';
import { SEO } from '../SEO';
import { Spoiler } from '../Spoiler';
import { TextLink, BlockLink } from '../TextLink';
import { Typography } from '../Typography';

const { Title, Headline, Subline, Paragraph, InlineCode } = Typography;

const shortcodes = {
  BlockLink,
  ColorSwatch,
  Emojify,
  Headline,
  Link,
  Paragraph,
  SEO,
  Spoiler,
  Subline,
  TextLink,
  Title,
  a: TextLink,
  h1: Title,
  h2: Headline,
  h3: Subline,
  h4: Subline,
  h5: Subline,
  h6: Subline,
  inlineCode: InlineCode,
  p: Paragraph,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
