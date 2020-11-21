import * as React from 'react';

import { TextLink } from '../text-link';
import type { TextLinkProps } from '../text-link';

import { Styled } from './icon-link.styles';

export type AnimationDirection = 'right' | 'down' | null;
export type IconLinkProps = TextLinkProps & {
  icon: React.ReactElement;
  animation?: AnimationDirection;
};

export const IconLink = ({
  animation = null,
  children,
  icon,
  ...props
}: IconLinkProps) => (
  <TextLink {...props}>
    {children}
    <Styled.Icon $animation={animation}>{icon}</Styled.Icon>
  </TextLink>
);
