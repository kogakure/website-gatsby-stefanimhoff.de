import React from 'react';

import { Verse } from '.';

export default {
  component: Verse,
  title: 'Quotations/Verse',
};

export const Default = () => (
  <Verse>
    <p>
      God guard me from those thoughts men think
      <br />
      In the mind alone;
      <br />
      He that sings a lasting song
      <br />
      Thinks in a marrow bone.
    </p>
  </Verse>
);

export const Center = () => (
  <Verse variant="center">
    <p>
      God guard me from those thoughts men think
      <br />
      In the mind alone;
      <br />
      He that sings a lasting song
      <br />
      Thinks in a marrow bone.
    </p>
  </Verse>
);

export const Left = () => (
  <Verse variant="left">
    <p>
      God guard me from those thoughts men think
      <br />
      In the mind alone;
      <br />
      He that sings a lasting song
      <br />
      Thinks in a marrow bone.
    </p>
  </Verse>
);
