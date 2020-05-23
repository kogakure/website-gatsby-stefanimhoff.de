import { Blockquote } from '../../components/blockquote';
import { ColorSwatch } from '../../components/color-swatch';
import { HorizontalRule } from '../../components/horizontal-rule';
import { InlineCode } from '../../components/inline-code';
import { InlineQuote } from '../../components/inline-quote';
import { KeyboardShortcut } from '../../components/keyboard-shortcut';
import { OrderedList } from '../../components/ordered-list';
import { Pullquote } from '../../components/pullquote';
import { RubyAnnotation } from '../../components/ruby-annotation';
import { Sample } from '../../components/sample';
import { Spoiler } from '../../components/spoiler';
import { Table } from '../../components/table';
import { TextLink, BlockLink } from '../../components/text-link';
import { UnorderedList } from '../../components/unordered-list';
import { Variable } from '../../components/variable';
import { Verse } from '../../components/verse';
import { SEO } from '../seo';
import { Emojify } from '../emojify';
import {
  Headline,
  Paragraph,
  Subline,
  Title,
} from '../../components/typography';

export const shortcodes = {
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
