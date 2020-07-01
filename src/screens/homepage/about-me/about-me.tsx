import * as React from 'react';

import { Emojify } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';

import { Styled } from './about-me.styles';

export const AboutMe: React.FC = () => (
  <Styled.AboutMe>
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
      <MoreLink to="/about/" aria-label="More information about me" />
    </Paragraph>
  </Styled.AboutMe>
);
