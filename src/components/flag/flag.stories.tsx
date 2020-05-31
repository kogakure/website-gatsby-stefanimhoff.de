import React from 'react';

import { Flag } from '.';

export default {
  component: Flag,
  title: 'Misc/Flag',
};

export const Default = () => <Flag label="default" />;

export const Linked = () => (
  <Flag label="link" href="https://www.stefanimhoff.de" />
);
