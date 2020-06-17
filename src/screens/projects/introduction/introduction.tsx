import * as React from 'react';

import { Paragraph } from '../../../components/typography';
import { TextLink } from '../../../components/text-link';

import { Styled } from './introduction.styles';

export const Introduction: React.FC = () => (
  <Styled.Introduction>
    <Paragraph>
      I’m a <em>Frontend Developer</em> by profession. But I worked in previous
      jobs also in Design, Editing, or 3D Animation. I even created Flash
      Animations and Multimedia CD-ROMs when this was still a thing.
    </Paragraph>
    <Paragraph>
      I follow the concept of the{' '}
      <TextLink href="https://simple.wikipedia.org/wiki/Renaissance_man">
        Renaissance man
      </TextLink>{' '}
      and like to try out as many different professions as possible.
    </Paragraph>
    <Paragraph>
      These are some of the projects I created over the last years.
    </Paragraph>
  </Styled.Introduction>
);