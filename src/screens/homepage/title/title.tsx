import * as React from 'react';

import { Emojify } from '../../../layout/emojify';
import {
  Title as TitleComponent,
  Paragraph,
} from '../../../components/typography';

import { Styled } from './title.styles';

export const Title = () => (
  <Styled.Title>
    <TitleComponent noMargin>Stefan Imhoff</TitleComponent>
    <Paragraph noMargin>
      <Emojify emoji="👨🏻‍💻" />
      Front-End Web Developer /<Emojify emoji="🎨" />
      Designer /<Emojify emoji="⬜️" />
      Minimalist /<Emojify emoji="🎧" />
      Introvert /<Emojify emoji="⛩" />
      Japanophile
    </Paragraph>
  </Styled.Title>
);
