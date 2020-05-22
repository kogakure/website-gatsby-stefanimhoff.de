import React from 'react';

import { TextLink, BlockLink } from '.';

export default {
  component: TextLink,
  title: 'Text Styles/Text Link',
};

export const HTMLLink = () => (
  <TextLink href="https://www.stefanimhoff.de">External Link</TextLink>
);

export const RouterLink = () => <TextLink to="/">Router Link</TextLink>;

export const BlockLinkHTMLLink = () => (
  <BlockLink href="https://www.stefanimhoff.de">
    BlockLink as External Link
  </BlockLink>
);

export const BlockLinkRouterLink = () => (
  <BlockLink to="/">BlockLink as Router Link</BlockLink>
);
