import * as React from 'react';

import { Emojify } from '../../../layout';
import { Subheadline, Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe>
    <div data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
      <Subheadline as="h2">
        About Me
        <Emojify emoji="🌐" />
      </Subheadline>
      <Paragraph>
        I’m <em>Stefan Imhoff</em>, a Front-End Web Developer and Designer from
        Hamburg, Germany. I love design and art, reading books, watching movies
        and TV shows, creating{' '}
        <TextLink to="/sketchnotes/">Sketchnotes</TextLink>, taking photos, and
        writing <TextLink to="/haiku/">Haiku</TextLink>.
      </Paragraph>
    </div>
    <div data-sal="slide-up" data-sal-duration="800">
      <Paragraph>
        I love walking and cycling, and do{' '}
        <TextLink to="/calisthenics/">Calisthenics</TextLink> and running fit.
        My favourite weather is thunderstorm and rain, but I like also warm,
        sunny weather. My favourite places are the sea and forests.
      </Paragraph>
      <Paragraph>
        When I’m inside I like reading in my roughly 1,000 books. I am also a
        big fan of movies and TV shows. I love reading about typography,
        architecture or interior design. I like to cook,{' '}
        <TextLink
          href="https://en.wikipedia.org/wiki/Hochzeitssuppe"
          target="_blank"
        >
          Niedersächsische Hochzeitssuppe
        </TextLink>{' '}
        is my favourite dish.
      </Paragraph>
      <Paragraph>
        I see myself as a <TextLink to="/minimalism/">Minimalist</TextLink>, a
        Stoic, an Introvert and Japanophile. Writing is a passion of me. Besides
        writing <TextLink to="/journal/">articles</TextLink> I’ve written a{' '}
        <TextLink href="https://book.kogakure.de/" target="_blank">
          book
        </TextLink>{' '}
        and run{' '}
        <TextLink href="https://www.kogakure.de/" target="_blank">
          website
        </TextLink>{' '}
        about Ninja and Ninjutsu.
      </Paragraph>
      <Paragraph noMargin>
        See what I’m doing right <TextLink to="/now/">now</TextLink>.
      </Paragraph>
    </div>
  </Styled.AboutMe>
);
