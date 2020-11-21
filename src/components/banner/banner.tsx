import * as React from 'react';

import { Styled } from './banner.styles';

export type BannerProps = {
  children?: React.ReactNode;
};

export const Banner = ({ children, ...props }: BannerProps) => (
  <Styled.Banner {...props}>{children}</Styled.Banner>
);
