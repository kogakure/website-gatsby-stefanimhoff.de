import * as React from 'react';

import { StyledSystemProps } from '../../typings/StyleSystem';

import DynamicComponent from './DynamicComponent';

const Title: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Title.defaultProps = {
  as: 'h1',
  fontSize: 6,
  fontWeight: 900,
  letterSpacing: 'normal',
  marginTop: 5,
  marginBottom: 13,
  lineHeight: 1,
};

const Headline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Headline.defaultProps = {
  as: 'h2',
  fontSize: 5,
  fontWeight: 900,
  letterSpacing: 'normal',
  marginTop: 0,
  marginBottom: 11,
  lineHeight: 1,
};

const Subline: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Subline.defaultProps = {
  as: 'h3',
  fontSize: 4,
  fontWeight: 900,
  letterSpacing: 'normal',
  marginTop: 0,
  marginBottom: 10,
  lineHeight: 1,
};

const Paragraph: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

Paragraph.defaultProps = {
  as: 'p',
  fontSize: 3,
  fontWeight: 400,
  letterSpacing: 'normal',
  marginTop: 0,
  marginBottom: 12,
  lineHeight: 2,
};

const InlineCode: React.FC<StyledSystemProps> = ({ children, ...props }) => (
  <DynamicComponent {...props}>{children}</DynamicComponent>
);

InlineCode.defaultProps = {
  as: 'code',
};

export { Title, Headline, Subline, Paragraph, InlineCode };
