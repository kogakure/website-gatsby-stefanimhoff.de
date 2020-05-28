import * as React from 'react';

import { Headline, Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe>
    <Headline>About Me</Headline>
    <Paragraph>
      I’m a Front-End Web Developer and Designer based in Hamburg. I love design
      and art, creating Sketchnotes, reading books, taking photos, and writing
      Haiku. I am also a Minimalist, a Stoic, introvert and Japanophile.{' '}
    </Paragraph>
    <Paragraph noMargin>
      <TextLink to="/about/" showIcon>
        More
      </TextLink>
    </Paragraph>
  </Styled.AboutMe>
);
