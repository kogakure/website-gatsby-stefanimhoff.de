import * as React from 'react';

import { Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe>
    <Paragraph>
      I’m <em>Stefan Imhoff</em>, a Front-End Web Developer and Designer from
      Hamburg, Germany. I love design and art, reading books, watching movies
      and TV shows, creating Sketchnotes, taking photos, and writing{' '}
      <TextLink to="/haiku/">Haiku</TextLink>.
    </Paragraph>
    <Paragraph>
      I love walking and cycling, and do{' '}
      <TextLink to="/calisthenics/">Calisthenics</TextLink> and running to fit.
      My favourite weather is thunderstorm and rain, but also warm, sunny
      weather. My favourite places are the sea and forests.
    </Paragraph>
    <Paragraph>
      When I’m inside I like reading in my roughly 1,000 books. I am also a big
      fan of movies and TV shows. I love reading about typography, architecture
      or interior design. I like to cook,{' '}
      <TextLink href="https://en.wikipedia.org/wiki/Hochzeitssuppe">
        Niedersächsische Hochzeitssuppe
      </TextLink>{' '}
      is my favourite dish.
    </Paragraph>
    <Paragraph noMargin>
      I see myself as a <TextLink to="/minimalism/">Minimalist</TextLink>, a
      Stoic, an Introvert and Japanophile. Writing is a passion of me. Besides
      writing <TextLink to="/journal/">articles</TextLink> I’ve written a{' '}
      <TextLink href="https://book.kogakure.de/">book</TextLink> and run{' '}
      <TextLink href="https://www.kogakure.de/">website</TextLink> about Ninja
      and Ninjutsu.
    </Paragraph>
  </Styled.AboutMe>
);
