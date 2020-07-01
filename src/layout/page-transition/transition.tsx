import * as CSS from 'csstype';
import React from 'react';
import { WindowLocation } from '@reach/router';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

type TransitionStylesProps = {
  [key in TransitionStatus]: CSS.Properties;
};

const timeout = 300;
const transitionStyles: Partial<TransitionStylesProps> = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

export type TransitionProps = {
  location?: WindowLocation;
};

export const Transition: React.FC<TransitionProps> = ({
  children,
  location,
}) => (
  <TransitionGroup>
    <ReactTransition
      key={location && location.pathname}
      timeout={{ enter: timeout, exit: timeout }}
    >
      {(status: TransitionStatus) => (
        <div
          style={{
            ...transitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);
