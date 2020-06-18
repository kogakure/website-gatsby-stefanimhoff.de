import React from 'react';

import { TextLink } from '.';

export default {
  component: TextLink,
  title: 'Text Styles/Text Link',
};

export const HTMLLink = () => (
  <TextLink href="https://www.stefanimhoff.de">External Link</TextLink>
);

export const HTMLLinkBlock = () => (
  <TextLink block href="https://www.stefanimhoff.de">
    External Link
  </TextLink>
);

export const RouterLink = () => <TextLink to="/">Router Link</TextLink>;

export const RouterLinkBlock = () => (
  <TextLink block to="/">
    Router Link
  </TextLink>
);
