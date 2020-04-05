import React from 'react';

import { Spacer } from '.';

export default {
  component: Spacer,
  title: 'Misc/Spacer',
};

const text = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`;
const props = {
  border: '1px dashed grey',
};

export const Default = () => (
  <Spacer {...props} padding={10}>
    {text}
  </Spacer>
);

export const Shortcut = () => (
  <Spacer {...props} p={10}>
    {text}
  </Spacer>
);

export const Top = () => (
  <Spacer {...props} paddingTop={10}>
    {text}
  </Spacer>
);

export const Bottom = () => (
  <Spacer {...props} paddingBottom={10}>
    {text}
  </Spacer>
);

export const Right = () => (
  <Spacer {...props} paddingRight={10}>
    {text}
  </Spacer>
);

export const Left = () => (
  <Spacer {...props} paddingLeft={10}>
    {text}
  </Spacer>
);

export const TopShortcut = () => (
  <Spacer {...props} pt={10}>
    {text}
  </Spacer>
);

export const BottomShortcut = () => (
  <Spacer {...props} pb={10}>
    {text}
  </Spacer>
);

export const RightShortcut = () => (
  <Spacer {...props} pr={10}>
    {text}
  </Spacer>
);

export const LeftShortcut = () => (
  <Spacer {...props} pl={10}>
    {text}
  </Spacer>
);

export const LeftRight = () => (
  <Spacer {...props} px={10}>
    {text}
  </Spacer>
);

export const TopBottom = () => (
  <Spacer {...props} py={10}>
    {text}
  </Spacer>
);
