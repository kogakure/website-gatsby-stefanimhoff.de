import React from 'react';

import { ArrowRight } from '../icons';

import { IconLink } from '.';

export default {
  component: IconLink,
  title: 'Text Styles/Icon Link',
};

export const Default = () => (
  <IconLink to="/" icon={<ArrowRight />}>
    Icon Link
  </IconLink>
);
