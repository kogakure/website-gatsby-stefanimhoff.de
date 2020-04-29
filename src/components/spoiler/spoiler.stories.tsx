import React from 'react';

import { Spoiler } from '.';

export default {
  component: Spoiler,
  title: 'Misc/Spoiler',
};

export const Default = () => <Spoiler>Hidden text</Spoiler>;

export const Block = () => (
  <Spoiler block>
    <p>
      This is some <strong>text</strong>, which is <em>hidden</em>.
    </p>
    <p> And some more text</p>
  </Spoiler>
);
