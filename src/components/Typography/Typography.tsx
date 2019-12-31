import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import DynamicComponent from './DynamicComponent';

const Headline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

const SubHeadline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Headline.defaultProps = {
  as: 'h1',
  fontSize: 'xxl',
  color: 'primary',
  bg: 'background',
};

SubHeadline.defaultProps = {
  as: 'h2',
  fontSize: 'xl',
  color: 'primary',
  bg: 'background',
};

export { Headline, SubHeadline };
