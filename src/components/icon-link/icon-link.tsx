import * as React from 'react';

import { TextLink, TextLinkProps } from '../text-link';

import { Styled } from './icon-link.styles';

export type AnimationDirection = 'right' | 'down' | null;
export type IconLinkProps = {
  icon: React.ReactElement;
  animation?: AnimationDirection;
};
export type TextLinkWithIconProps = IconLinkProps & TextLinkProps;

export const IconLink: React.FC<TextLinkWithIconProps> = ({
  animation = null,
  children,
  icon,
  ...props
}) => (
  <TextLink {...props}>
    {children}
    <Styled.Icon animation={animation}>{icon}</Styled.Icon>
  </TextLink>
);
