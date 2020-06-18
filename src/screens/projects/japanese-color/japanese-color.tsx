import * as React from 'react';

import { Row } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { ColorSwatch } from '../../../components/color-swatch';
import { MoreLink } from '../../../components/more-link';
import { DownloadLink } from '../../../components/download-link';
import { SmallPrint, TextBlock } from '..';

import { Styled } from './japanese-color.styles';

export const JapaneseColor: React.FC = () => (
  <Row marginBottom variant="equal" vertical="end">
    <TextBlock>
      <SmallPrint>Design / Web Development</SmallPrint>
      <Headline>The Traditional Colors of Japan</Headline>
      <Paragraph>
        In 2007 I stumbled upon a Japanese book about the traditional colors of
        Japan by <strong>Nobyoshi Hamada</strong>. He listed all 250 colors with
        their color value in the appendix. I took some time to create an{' '}
        <abbr title="Adobe Swatch Exchange">ASE</abbr> file to be used with all
        common design software.
      </Paragraph>
      <Paragraph>
        With this version of the website I finally dedicate the colors an extra
        section listing them all with their name and color values.
      </Paragraph>
      <MoreLink block to="/traditional-colors-of-japan/">
        See All Colors
      </MoreLink>
      <DownloadLink block href="/downloads/traditional-colors-of-japan-rgb.zip">
        Download Color Palette
      </DownloadLink>
    </TextBlock>
    <Styled.Colors>
      <ColorSwatch color="#f8c3cd" />
      <ColorSwatch color="#bf6766" />
      <ColorSwatch color="#a5dee4" />
    </Styled.Colors>
  </Row>
);
