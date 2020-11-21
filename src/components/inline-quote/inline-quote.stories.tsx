import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { InlineQuote } from '.';
import type { InlineQuoteProps } from '.';

export default {
  title: 'Quotations/InlineQuote',
  component: InlineQuote,
} as Meta;

const Template: Story<InlineQuoteProps> = (args) => (
  <Paragraph>
    Peter said <InlineQuote {...args} /> and was quite angry.
  </Paragraph>
);

const TemplateNested: Story<InlineQuoteProps> = (args) => (
  <Paragraph>
    Luke continued, <InlineQuote {...args} /> The poor naive fool …
  </Paragraph>
);

const TemplateGerman: Story<InlineQuoteProps> = (args) => (
  <Paragraph>
    Luke führte weiter aus, <InlineQuote {...args} /> Dieser arme Idiot …
  </Paragraph>
);

const TemplateJapanese: Story<InlineQuoteProps> = (args) => (
  <Paragraph>
    彼女は
    <InlineQuote {...args} />
    と言った。
  </Paragraph>
);

export const Default = Template.bind({});
Default.args = {
  lang: 'en',
  children: 'She has to hand this over immediatly',
};

export const Nested = TemplateNested.bind({});
Nested.args = {
  lang: 'en',
  children: (
    <>
      And then she called him a{' '}
      <InlineQuote>scruffy-looking nerf-herder!</InlineQuote> I think I’ve got a
      chance!,
    </>
  ),
};

export const GermanNested = TemplateGerman.bind({});
GermanNested.args = {
  lang: 'de',
  children: (
    <>
      Und sie nannte ihn einen{' '}
      <InlineQuote>total blöd-aussehenen Idioten!</InlineQuote> Ich denke ich
      habe eine Chance!
    </>
  ),
};

export const JapaneseNested = TemplateJapanese.bind({});
JapaneseNested.args = {
  lang: 'ja',
  children: (
    <>
      日本語に猫は<InlineQuote>にゃん</InlineQuote>と鳴く
    </>
  ),
};
