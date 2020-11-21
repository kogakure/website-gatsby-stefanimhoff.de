import * as React from 'react';

import { Emojify, Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { ColorSwatch } from '../../../components/color-swatch';
import { MoreLink } from '../../../components/more-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './japanese-color.styles';

export const JapaneseColor = () => (
  <Row marginBottom variant="equal" vertical="center">
    <TextBlock data-sal="slide-up" data-sal-duration="800">
      <SmallPrint>Design / Web Development</SmallPrint>
      <Headline>
        The Traditional Colors of Japan
        <Emojify emoji="⛩" />
      </Headline>
      <Paragraph>
        In 2007 I stumbled upon a Japanese book about the traditional colors of
        Japan by <strong>Nobyoshi Hamada</strong>. He listed all 250 colors with
        their color value in the appendix. I took some time to create an{' '}
        <abbr title="Adobe Swatch Exchange">ASE</abbr> file to be used with all
        common design software.
      </Paragraph>
      <Paragraph>
        With this version of the website I finally dedicate an extra section to
        the colors, listing them all with their name and color values.
      </Paragraph>
      <MoreLink to="/traditional-colors-of-japan/">
        See Traditional Colors of Japan
      </MoreLink>
    </TextBlock>
    <Styled.Colors data-sal="slide-up" data-sal-duration="800">
      <ColorSwatch color="#D75455" />
      <ColorSwatch color="#96632E" />
      <ColorSwatch color="#3A8FB7" />
      <ColorSwatch color="#006284" />
    </Styled.Colors>
  </Row>
);
