import React from 'react';

import { Paragraph } from '../../components/typography';

import { Emojify } from '.';

export default {
  component: Emojify,
  title: 'Easter Egg/Emojify',
};

export const Default = () => (
  <Paragraph>
    <Emojify emoji="🤩" />
  </Paragraph>
);

export const UnknownEmoji = () => (
  <Paragraph>
    <Emojify emoji="👩🏻‍🦽" />
  </Paragraph>
);
