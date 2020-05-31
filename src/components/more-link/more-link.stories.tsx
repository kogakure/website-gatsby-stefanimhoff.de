import React from 'react';

import { MoreLink } from '.';

export default {
  component: MoreLink,
  title: 'Text Styles/More Link',
};

export const Default = () => <MoreLink to="/" />;

export const CustomText = () => <MoreLink to="/">Custom Text</MoreLink>;
