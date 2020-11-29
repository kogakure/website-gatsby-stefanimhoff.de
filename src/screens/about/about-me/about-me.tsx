import * as React from 'react';

import { Emojify } from '../../../layout';
import { Subheadline, Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-me.styles';

export const AboutMe = () => (
  <Styled.AboutMe>
    <div data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
      <Subheadline as="h2">
        About Me
        <Emojify emoji="💁🏻‍♂️" />
      </Subheadline>
      <Paragraph>
        I’m <em>Stefan Imhoff</em>, a Front-End Web Developer, and Designer from
        Hamburg, Germany. I love design and art, reading books, watching movies
        and TV shows, creating{' '}
        <TextLink to="/sketchnotes/">Sketchnotes</TextLink>, taking photos, and
        writing <TextLink to="/haiku/">Haiku</TextLink>.
      </Paragraph>
    </div>
    <div data-sal="slide-up" data-sal-duration="800">
      <Paragraph>
        I love{' '}
        <TextLink href="https://hamburg.stefanimhoff.de/" target="_blank">
          walking and cycling
        </TextLink>
        , and do <TextLink to="/calisthenics/">Calisthenics</TextLink> to stay
        fit. My ideal weather is thunderstorms and rain, but I like also warm
        sunny weather. My favorite places are the sea and forests.
      </Paragraph>
      <Paragraph>
        When I’m inside I like reading in my roughly 1,000 books. I love reading
        about typography, architecture, or interior design. But I am also a big
        fan of movies and TV shows. I like to cook,{' '}
        <TextLink
          href="https://en.wikipedia.org/wiki/Hochzeitssuppe"
          target="_blank"
        >
          Niedersächsische Hochzeitssuppe
        </TextLink>{' '}
        is my favorite dish.
      </Paragraph>
      <Paragraph>
        I see myself as a <TextLink to="/minimalism/">Minimalist</TextLink>, a
        Stoic, an Introvert, and Japanophile. Writing is a passion for me.
        Besides writing <TextLink to="/journal/">articles</TextLink> I’ve
        written a{' '}
        <TextLink href="https://book.kogakure.de/" target="_blank">
          book
        </TextLink>{' '}
        and run a{' '}
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
