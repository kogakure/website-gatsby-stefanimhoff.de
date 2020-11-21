import React from 'react';

import { Transition } from '.';
import type { TransitionProps } from '.';

export type TransitionLayoutProps = TransitionProps & {
  children: React.ReactNode;
};

const TransitionLayout = ({ location, children }: TransitionLayoutProps) => (
  <Transition location={location}>{children}</Transition>
);

export default TransitionLayout;
