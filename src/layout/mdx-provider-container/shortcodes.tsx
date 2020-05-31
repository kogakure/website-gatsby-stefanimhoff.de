import { Blockquote } from '../../components/blockquote';
import { ColorSwatch } from '../../components/color-swatch';
import { Emojify } from '../emojify';
import { EmojifyToggle } from '../emojify-toggle';
import { HorizontalRule } from '../../components/horizontal-rule';
import { InlineCode } from '../../components/inline-code';
import { InlineQuote } from '../../components/inline-quote';
import { KeyboardShortcut } from '../../components/keyboard-shortcut';
import { Mark } from '../../components/mark';
import { OrderedList } from '../../components/ordered-list';
import { ProtectedEmail } from '../../components/protected-email';
import { Pullquote } from '../../components/pullquote';
import { RubyAnnotation } from '../../components/ruby-annotation';
import { Sample } from '../../components/sample';
import { Spoiler } from '../../components/spoiler';
import { Table } from '../../components/table';
import { TextLink, BlockLink } from '../../components/text-link';
import { UnorderedList } from '../../components/unordered-list';
import { Variable } from '../../components/variable';
import { Verse } from '../../components/verse';
import {
  Headline,
  Paragraph,
  Subheadline,
  SubSubheadline,
  Title,
} from '../../components/typography';
import { ContentGrid } from '../content-grid';
import { Row } from '../row';
import { SEO } from '../seo';

export const shortcodes = {
  BlockLink,
  Blockquote,
  ColorSwatch,
  ContentGrid,
  Emojify,
  EmojifyToggle,
  Headline,
  InlineQuote,
  KeyboardShortcut,
  Paragraph,
  ProtectedEmail,
  Pullquote,
  Row,
  RubyAnnotation,
  SEO,
  Sample,
  Spoiler,
  SubSubheadline,
  Subheadline,
  TextLink,
  Title,
  Variable,
  Verse,
  a: TextLink,
  blockquote: Blockquote,
  h1: Title,
  h2: Headline,
  h3: Subheadline,
  h4: SubSubheadline,
  h5: SubSubheadline,
  h6: SubSubheadline,
  hr: HorizontalRule,
  inlineCode: InlineCode,
  mark: Mark,
  ol: OrderedList,
  p: Paragraph,
  q: InlineQuote,
  table: Table,
  ul: UnorderedList,
};
