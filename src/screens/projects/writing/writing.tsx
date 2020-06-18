import * as React from 'react';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

export const Writing: React.FC = () => (
  <Row marginBottom variant="rightDown">
    <TextBlock>
      <SmallPrint>Writing</SmallPrint>
      <Headline>Journal &amp; Blog</Headline>
      <Paragraph>
        I have been writing articles on this website since 2007. The topics
        include programming, design, self-improvement, productivity, books and
        films. The collection has been much bigger, but I deleted outdated and
        irrelevant articles. Since 2019 I also write a monthly article with
        recommendations of the past month.
      </Paragraph>
      <MoreLink block to="/journal/">
        Read Journal
      </MoreLink>
      <MoreLink block to="/index.xml">
        Subscribe to RSS Feed
      </MoreLink>
    </TextBlock>
    <TextBlock>
      <SmallPrint>Poetry / Writing</SmallPrint>
      <Headline>Haiku</Headline>
      <Paragraph>
        I started writing Haiku poetry some years ago inspired by the works of
        the Japanese Haiku poet <strong>Matsuo Bashô</strong>. I think Haiku are
        a fun, creative way to use limitation and brevity while saying something
        meaningful.
      </Paragraph>
      <MoreLink block to="/haiku/">
        Read Haiku
      </MoreLink>
    </TextBlock>
  </Row>
);
