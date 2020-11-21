import * as React from 'react';

import { Styled } from './typography.styles';

export type TypographyProps = {
  children: React.ReactNode;
  noMargin?: boolean;
};
export type StyledTypographyProps = TypographyProps;

export const Title = ({
  children,
  ...props
}: TypographyProps & React.ComponentProps<typeof Styled.Title>) => (
  <Styled.Title {...props}>{children}</Styled.Title>
);

export const Headline = ({
  children,
  ...props
}: TypographyProps & React.ComponentProps<typeof Styled.Headline>) => (
  <Styled.Headline {...props}>{children}</Styled.Headline>
);

export const Subheadline = ({
  children,
  ...props
}: TypographyProps & React.ComponentProps<typeof Styled.Subheadline>) => (
  <Styled.Subheadline {...props}>{children}</Styled.Subheadline>
);

export const SubSubheadline = ({
  children,
  ...props
}: TypographyProps & React.ComponentProps<typeof Styled.SubSubheadline>) => (
  <Styled.SubSubheadline {...props}>{children}</Styled.SubSubheadline>
);

export const Paragraph = ({
  children,
  ...props
}: TypographyProps & React.ComponentProps<typeof Styled.Paragraph>) => (
  <Styled.Paragraph {...props}>{children}</Styled.Paragraph>
);
