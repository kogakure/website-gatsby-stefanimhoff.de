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

export const Netflix = () => <Flag variant="netflix" id="80014749" />;

export const PrimeVideo = () => <Flag variant="primevideo" id="B0874XF36P" />;
