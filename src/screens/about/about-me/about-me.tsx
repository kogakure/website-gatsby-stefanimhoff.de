import * as React from 'react';

import { Emojify } from '../../../layout';
import { Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe>
    <Paragraph>
      I’m <em>Stefan Imhoff</em>, a Front-End Web Developer and Designer from
      Hamburg, Germany. I love
      <Emojify emoji="🎨" />
      design and art,
      <Emojify emoji="📚" />
      reading books,
      <Emojify emoji="📺" />
      watching movies and TV shows,
      <Emojify emoji="✍️" />
      creating Sketchnotes,
      <Emojify emoji="📸" />
      taking photos, and
      <Emojify emoji="🖋" />
      writing <TextLink to="/haiku/">Haiku</TextLink>. I consider myself as a
      <Emojify emoji="⬜️" />
      <TextLink to="/minimalism/">Minimalist</TextLink>, a{' '}
      <Emojify emoji="🤔" />
      Stoic, an
      <Emojify emoji="🎧" />
      Introvert and
      <Emojify emoji="⛩" />
      Japanophile.
    </Paragraph>
    <Paragraph noMargin>
      Writing is a passion of me: Besides writing{' '}
      <TextLink to="/journal/">articles</TextLink> I wrote a{' '}
      <TextLink href="https://book.kogakure.de/">book</TextLink> about Ninja and
      Ninjutsu—a topic that I know way too much about.
    </Paragraph>
  </Styled.AboutMe>
);
