import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import DynamicComponent from './DynamicComponent';

const Title: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

const Headline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

const Subline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

const Paragraph: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Title.defaultProps = {
  as: 'h1',
  fontSize: 5,
  fontWeight: 900,
  letterSpacing: 'normal',
};

Headline.defaultProps = {
  as: 'h2',
  fontSize: 4,
  fontWeight: 900,
  letterSpacing: 'normal',
};

Subline.defaultProps = {
  as: 'h3',
  fontSize: 3,
  fontWeight: 900,
  letterSpacing: 'normal',
};

Paragraph.defaultProps = {
  as: 'p',
  fontSize: 2,
  fontWeight: 400,
  letterSpacing: 'normal',
};

export { Title, Headline, Subline, Paragraph };
