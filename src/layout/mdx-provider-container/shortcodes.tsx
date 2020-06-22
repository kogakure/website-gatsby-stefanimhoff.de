import { AmazonBook } from '../../components/amazon-book';
import { Banner } from '../../components/banner';
import { Blockquote } from '../../components/blockquote';
import { Book } from '../../components/book';
import { ColorSwatch } from '../../components/color-swatch';
import { DownloadLink } from '../../components/download-link';
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
import { TextLink } from '../../components/text-link';
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
  AmazonBook,
  Banner,
  Blockquote,
  Book,
  ColorSwatch,
  ContentGrid,
  DownloadLink,
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
  h2: Subheadline,
  h3: SubSubheadline,
  h4: SubSubheadline,
  h5: SubSubheadline,
  h6: SubSubheadline,
  hr: HorizontalRule,
  inlineCode: InlineCode,
  kbd: KeyboardShortcut,
  mark: Mark,
  ol: OrderedList,
  p: Paragraph,
  q: InlineQuote,
  samp: Sample,
  table: Table,
  ul: UnorderedList,
  var: Variable,
};
