import * as React from 'react';

import { Paragraph } from '../../../components/typography';
import { DownloadLink } from '../../../components/download-link';

import { Styled } from './introduction.styles';

export const Introduction: React.FC = () => (
  <Styled.Introduction data-sal="slide-up" data-sal-duration="800">
    <Paragraph>
      A few years ago I found by accident the book{' '}
      <cite>The Traditional Colors of Japan</cite> by{' '}
      <strong>Nobyoshi Hamada</strong>. He also wrote the sister book{' '}
      <cite>Traditional Japanese Color Palette</cite>.
    </Paragraph>
    <Paragraph>
      It’s the best book about Japanese colors I know. The book is filled with
      beautiful photography showing examples of nature, craftsmanship, and art
      applying the colors.
    </Paragraph>
    <Paragraph>
      I took the time and converted all colors in the book into an ASE (Adobe
      Swatch Exchange) file that is usable in all Graphic software. You can
      download the file or browse all colors on this page.
    </Paragraph>
    <Paragraph noMargin>
      <DownloadLink href="/downloads/traditional-colors-of-japan-rgb.zip">
        Download Color Palette
      </DownloadLink>
    </Paragraph>
  </Styled.Introduction>
);
