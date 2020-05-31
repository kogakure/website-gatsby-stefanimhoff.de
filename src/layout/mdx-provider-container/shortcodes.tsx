import { Blockquote } from '../../components/blockquote';
import { ColorSwatch } from '../../components/color-swatch';
import { Flag, NetflixFlag, PrimeVideoFlag } from '../../components/flag';
import { HorizontalRule } from '../../components/horizontal-rule';
import { IconLink } from '../../components/icon-link';
import { InlineCode } from '../../components/inline-code';
import { InlineQuote } from '../../components/inline-quote';
import { KeyboardShortcut } from '../../components/keyboard-shortcut';
import { Mark } from '../../components/mark';
import { MoreLink } from '../../components/more-link';
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
import { Emojify } from '../emojify';
import { EmojifyToggle } from '../emojify-toggle';
import { Row } from '../row';
import { SEO } from '../seo';

export const shortcodes = {
  BlockLink,
  Blockquote,
  ColorSwatch,
  ContentGrid,
  Emojify,
  EmojifyToggle,
  Flag,
  Headline,
  IconLink,
  InlineQuote,
  KeyboardShortcut,
  MoreLink,
  NetflixFlag,
  Paragraph,
  PrimeVideoFlag,
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
