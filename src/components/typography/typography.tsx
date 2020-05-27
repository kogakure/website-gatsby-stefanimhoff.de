import * as React from 'react';

import { StyledComponentProps } from '../../typings/styled-components';

import { Styled } from './typography.styles';

export type TypographyProps = {
  noMargin?: boolean;
};
export type StyledTypographyProps = TypographyProps & StyledComponentProps;

export const Title: React.FC<StyledTypographyProps> = ({
  children,
  ...props
}) => <Styled.Title {...props}>{children}</Styled.Title>;

export const Headline: React.FC<StyledTypographyProps> = ({
  children,
  ...props
}) => <Styled.Headline {...props}>{children}</Styled.Headline>;

export const Subheadline: React.FC<StyledTypographyProps> = ({
  children,
  ...props
}) => <Styled.Subheadline {...props}>{children}</Styled.Subheadline>;

export const SubSubheadline: React.FC<StyledTypographyProps> = ({
  children,
  ...props
}) => <Styled.SubSubheadline {...props}>{children}</Styled.SubSubheadline>;

export const Paragraph: React.FC<StyledTypographyProps> = ({
  children,
  ...props
}) => <Styled.Paragraph {...props}>{children}</Styled.Paragraph>;
