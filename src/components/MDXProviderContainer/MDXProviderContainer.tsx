import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Blockquote } from '../Blockquote';
import { ColorSwatch } from '../ColorSwatch';
import { Emojify } from '../Emojify';
import { HorizontalRule } from '../HorizontalRule';
import { InlineCode } from '../InlineCode';
import { InlineQuote } from '../InlineQuote';
import { KeyboardShortcut } from '../KeyboardShortcut';
import { OrderedList } from '../OrderedList';
import { Pullquote } from '../Pullquote';
import { RubyAnnotation } from '../RubyAnnotation';
import { SEO } from '../SEO';
import { Sample } from '../Sample';
import { Spacer } from '../Spacer';
import { Spoiler } from '../Spoiler';
import { Table } from '../Table';
import { TextLink, BlockLink } from '../TextLink';
import { Typography } from '../Typography';
import { UnorderedList } from '../UnorderedList';
import { Variable } from '../Variable';

const { Title, Headline, Subline, Paragraph } = Typography;

const shortcodes = {
  BlockLink,
  Blockquote,
  ColorSwatch,
  Emojify,
  Headline,
  InlineQuote,
  KeyboardShortcut,
  Paragraph,
  Pullquote,
  RubyAnnotation,
  SEO,
  Sample,
  Spacer,
  Spoiler,
  Subline,
  TextLink,
  Title,
  Variable,
  a: TextLink,
  blockquote: Blockquote,
  h1: Title,
  h2: Headline,
  h3: Subline,
  h4: Subline,
  h5: Subline,
  h6: Subline,
  hr: HorizontalRule,
  inlineCode: InlineCode,
  ol: OrderedList,
  p: Paragraph,
  q: InlineQuote,
  table: Table,
  ul: UnorderedList,
};

const MDXProviderContainer: React.FC = ({ children }) => (
  <MDXProvider components={shortcodes}>{children}</MDXProvider>
);

export { MDXProviderContainer };
