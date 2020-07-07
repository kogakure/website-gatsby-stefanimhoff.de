import * as React from 'react';

import { Paragraph } from '../../../components/typography';
import { OrderedList } from '../../../components/ordered-list';
import { RubyAnnotation } from '../../../components/ruby-annotation';

import { Styled } from './introduction.styles';

export const Introduction: React.FC = () => (
  <Styled.Introduction
    data-sal="slide-up"
    data-sal-duration="800"
    data-sal-delay="300"
  >
    <Paragraph>
      Haiku (jap. <RubyAnnotation base="俳" text="ハイ" />
      <RubyAnnotation base="句" text="ク" />) is a short form of Japanese poetry
      in three phrases, typically characterized by three qualities:
    </Paragraph>
    <OrderedList noMargin>
      <li>
        The essence of haiku is <dfn title="cutting">kiru</dfn> (cutting). This
        is often represented by the juxtaposition of two images or ideas and a{' '}
        <dfn title="cutting word">kireji</dfn> (cutting word) between them.
      </li>
      <li>
        Traditional haiku often consist of 17 syllables, in three phrases of 5,
        7, and 5.
      </li>
      <li>
        A <dfn title="seasonal reference">kigo</dfn> (seasonal reference) with
        topics as season, heaven, earth, humanity, observances, animals, or
        plants.
      </li>
    </OrderedList>
  </Styled.Introduction>
);
