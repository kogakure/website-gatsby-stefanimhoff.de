import React from 'react';

import { Typography } from '../typography';

import { Emojify } from '.';

const { Paragraph } = Typography;

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
