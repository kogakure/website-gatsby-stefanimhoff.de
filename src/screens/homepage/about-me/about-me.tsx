import * as React from 'react';

import { Emojify } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe
    data-sal="slide-up"
    data-sal-duration="800"
    data-sal-delay="300"
  >
    <Headline>
      About Me
      <Emojify emoji="💁🏻‍♂️" />
    </Headline>
    <Paragraph>
      I’m a Front-End Web Developer and Designer from Hamburg, Germany. I love
      design and art, reading books, creating Sketchnotes, taking photos, and
      writing Haiku.
    </Paragraph>
    <Paragraph noMargin>
      <MoreLink to="/about/">Read more about me</MoreLink>
    </Paragraph>
  </Styled.AboutMe>
);
