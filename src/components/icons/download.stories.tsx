import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Paragraph } from '../typography';

import { Download } from '.';

export default {
  title: 'Icons/Download',
} as Meta;

export const Icon = () => (
  <Paragraph>
    <Download />
  </Paragraph>
);
