import React from 'react';

import { Transition, TransitionProps } from '.';

const TransitionLayout: React.FC<TransitionProps> = ({
  location,
  children,
}) => <Transition location={location}>{children}</Transition>;

export default TransitionLayout;
