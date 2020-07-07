import * as React from 'react';

import { Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './introduction.styles';

export const Introduction: React.FC = () => (
  <Styled.Introduction
    data-sal="slide-up"
    data-sal-duration="800"
    data-sal-delay="300"
  >
    <Paragraph>
      Writing is a passion for me. I’ve written a huge collection of articles
      about{' '}
      <TextLink href="https://www.kogakure.de/">
        Ninja&nbsp;&amp;&nbsp;Ninjutsu
      </TextLink>{' '}
      that I later converted into a{' '}
      <TextLink href="https://book.kogakure.de/">book</TextLink>. The online
      publishing platform <cite>Medium</cite> selected{' '}
      <TextLink to="/attention/">one of my articles</TextLink> as a
      recommendation of the day.
    </Paragraph>
    <Paragraph>
      I am writing about code, design, productivity, self-improvement, films,
      and books in this Journal and publish a monthly article with
      recommendations.
    </Paragraph>
  </Styled.Introduction>
);
