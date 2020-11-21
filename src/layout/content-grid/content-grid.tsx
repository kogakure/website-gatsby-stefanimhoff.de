import * as React from 'react';

import { LayoutSize } from '..';

import { Styled } from './content-grid.styles';

export type ContentGridProps = {
  children: React.ReactNode;
  debug?: boolean;
  rowGap?: boolean;
  size?: LayoutSize;
};

export const ContentGrid = ({
  children,
  debug = false,
  rowGap = false,
  size = 'fullsize',
  ...props
}: ContentGridProps) => (
  <Styled.ContentGrid debug={debug} rowGap={rowGap} size={size} {...props}>
    {children}
  </Styled.ContentGrid>
);
