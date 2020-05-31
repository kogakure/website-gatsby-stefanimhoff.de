import * as React from 'react';

import { TextLink, TextLinkAnchorProps } from '../text-link';

import { Styled } from './icon-link.styles';

export type IconLinkProps = {
  icon: React.ReactElement;
};
export type TextLinkWithIconProps = IconLinkProps & TextLinkAnchorProps;

export const IconLink: React.FC<TextLinkWithIconProps> = ({
  children,
  icon,
  ...props
}) => (
  <TextLink {...props}>
    {children}
    <Styled.Icon>{icon}</Styled.Icon>
  </TextLink>
);
