import * as React from 'react';

import { Styled } from './typography.styles';

export const Title: React.FC = ({ children, ...props }) => (
  <Styled.Title {...props}>{children}</Styled.Title>
);

export const Headline: React.FC = ({ children, ...props }) => (
  <Styled.Headline {...props}>{children}</Styled.Headline>
);

export const Subline: React.FC = ({ children, ...props }) => (
  <Styled.Subline {...props}>{children}</Styled.Subline>
);

export const Paragraph: React.FC = ({ children, ...props }) => (
  <Styled.Paragraph {...props}>{children}</Styled.Paragraph>
);
