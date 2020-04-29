import React from 'react';

import { InlineCode } from '.';

export default {
  component: InlineCode,
  title: 'Text Styles/Code/Inline Code',
};

export const Default = () => (
  <InlineCode>const myVar = "Hello World";</InlineCode>
);
