import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Blockquote } from '../blockquote';
import { ColorSwatch } from '../color-swatch';
import { Emojify } from '../emojify';
import { HorizontalRule } from '../horizontal-rule';
import { InlineCode } from '../inline-code';
import { InlineQuote } from '../inline-quote';
import { KeyboardShortcut } from '../keyboard-shortcut';
import { OrderedList } from '../ordered-list';
import { Pullquote } from '../pullquote';
import { RubyAnnotation } from '../ruby-annotation';
import { SEO } from '../seo';
import { Sample } from '../sample';
import { Spacer } from '../spacer';
import { Spoiler } from '../spoiler';
import { Table } from '../table';
import { TextLink, BlockLink } from '../text-link';
import { Typography } from '../typography';
import { UnorderedList } from '../unordered-list';
import { Variable } from '../variable';
import { Verse } from '../verse';

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
  Verse,
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
