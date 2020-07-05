import * as React from 'react';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

export const Writing: React.FC = () => (
  <Row variant="rightDown">
    <TextBlock data-sal="slide-up" data-sal-duration="800">
      <SmallPrint>Writing</SmallPrint>
      <Headline>
        Journal &amp; Blog
        <Emojify emoji="🖋" />
      </Headline>
      <Paragraph>
        I have been writing articles on this website since <strong>2007</strong>
        . The topics include programming, design, self-improvement,
        productivity, books and films. The collection has been much bigger, but
        I deleted outdated and irrelevant articles. Since <strong>2019</strong>{' '}
        I also write a monthly article with recommendations of the past month.
      </Paragraph>
      <MoreLink to="/journal/">Read Journal</MoreLink>
    </TextBlock>
    <TextBlock data-sal="slide-up" data-sal-duration="800">
      <SmallPrint>Poetry / Writing</SmallPrint>
      <Headline>
        Haiku
        <Emojify emoji="🗣" />
      </Headline>
      <Paragraph>
        I started writing Haiku poetry some years ago inspired by the works of
        the Japanese Haiku poet <strong>Matsuo Bashō</strong>. I think Haiku are
        a fun, creative way to use limitation and brevity while saying something
        meaningful.
      </Paragraph>
      <MoreLink to="/haiku/">Read Haiku</MoreLink>
    </TextBlock>
  </Row>
);
