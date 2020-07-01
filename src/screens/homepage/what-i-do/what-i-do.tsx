import * as React from 'react';

import { Emojify } from '../../../layout';
import { Headline, Paragraph } from '../../../components/typography';
import { MoreLink } from '../../../components/more-link';
import { TextLink } from '../../../components/text-link';

import { Styled } from './what-i-do.styles';

export const WhatIDo: React.FC = () => (
  <Styled.WhatIDo>
    <Headline>
      What I Do
      <Emojify emoji="👨🏻‍💻" />
    </Headline>
    <Styled.Text>
      <Paragraph>
        I create and build beautiful, user-centric layouts for devices of all
        sizes on the web for nearly two decades. I love bringing simplicity and
        minimalism to everything&nbsp;I&nbsp;create.
      </Paragraph>
      <Paragraph>
        I deeply care about good user experience: Writing good text, choosing
        the right photography, typography, and colours. Programming fast,
        reusable, well-tested and easy-to-maintain code or creating
        engaging&nbsp;animations.
      </Paragraph>
      <Paragraph>
        I am currently working at{' '}
        <TextLink href="https://www.xing.com/">XING</TextLink>, the biggest
        business network in Europe, working on the Design&nbsp;System.
      </Paragraph>
      <Paragraph>
        I love innovating: During multiple{' '}
        <TextLink href="https://medium.com/xing-hackweek">HackWeeks</TextLink> I
        was part of a small team creating a complete new job platform for
        freelancers. I am also a three-time winner of the{' '}
        <em>Prototyping Days</em>, a yearly two-day company-wide
        prototyping&nbsp;event.
      </Paragraph>
    </Styled.Text>
    <Paragraph noMargin>
      <MoreLink to="/projects/" aria-label="See all my projects" />
    </Paragraph>
  </Styled.WhatIDo>
);
