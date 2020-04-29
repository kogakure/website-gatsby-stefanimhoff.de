import React from 'react';

import { InlineQuote } from '.';

export default {
  component: InlineQuote,
  title: 'Quotations/InlineQuote',
};

export const Default = () => (
  <p>
    Peter said{' '}
    <InlineQuote lang="en">She has to hand this over immediatly</InlineQuote>{' '}
    and was quite angry.
  </p>
);

export const Nested = () => (
  <p>
    Luke continued,{' '}
    <InlineQuote lang="en">
      And then she called him a{' '}
      <InlineQuote>scruffy-looking nerf-herder!</InlineQuote> I think I’ve got a
      chance!
    </InlineQuote>{' '}
    The poor naive fool …
  </p>
);

export const GermanNested = () => (
  <p>
    Luke führte weiter aus,{' '}
    <InlineQuote lang="de">
      Und sie nannte ihn einen{' '}
      <InlineQuote>total blöd-aussehenen Idioten!</InlineQuote> Ich denke ich
      habe eine Chance!
    </InlineQuote>{' '}
    Dieser arme Idiot …
  </p>
);

export const JapaneseNested = () => (
  <p>
    彼女は
    <InlineQuote lang="ja">
      日本語に猫は<InlineQuote>にゃん</InlineQuote>と鳴く
    </InlineQuote>
    と言った。
  </p>
);
