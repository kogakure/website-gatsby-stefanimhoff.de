import React from 'react';

import { Paragraph } from '../../components/typography';
import { EmojifyToggle } from '../emojify-toggle';

import { Emojify } from '.';

export default {
  component: Emojify,
  title: 'Misc/Emojify',
};

export const Default = () => (
  <>
    <Paragraph>
      Click me ➜<EmojifyToggle />
    </Paragraph>
    <Emojify emoji="🤩" />
  </>
);

export const UnknownEmoji = () => (
  <>
    <Paragraph>
      Click me ➜<EmojifyToggle />
    </Paragraph>
    <Emojify emoji="👩🏻‍🦽" />
  </>
);
