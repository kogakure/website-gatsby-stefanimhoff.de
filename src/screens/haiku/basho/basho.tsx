import * as React from 'react';

import { Paragraph, Headline } from '../../../components/typography';
import { RubyAnnotation } from '../../../components/ruby-annotation';

import { Styled } from './basho.styles';

export const Basho: React.FC = () => (
  <Styled.Basho>
    <Headline>Matsuo Bashô</Headline>
    <Paragraph noMargin>
      Matsuo Bashô (<RubyAnnotation base="松" text="まつ" />
      <RubyAnnotation base="尾" text="お" />
      <RubyAnnotation base="芭" text="バ" />
      <RubyAnnotation base="蕉" text="ショウ" />) was the most famous poet of
      the Edo period in Japan. I love his poems and highly recommend reading
      some of his work. His poems inspired me to start writing my own.
    </Paragraph>
  </Styled.Basho>
);
