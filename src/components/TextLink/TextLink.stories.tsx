import React from 'react';

import { TextLink } from '.';

export default {
  component: TextLink,
  title: 'Text Styles/Text Link',
};

export const HTMLLink = () => (
  <TextLink href="https://www.stefanimhoff.de">External Link</TextLink>
);

export const RouterLink = () => <TextLink to="/">Router Link</TextLink>;
