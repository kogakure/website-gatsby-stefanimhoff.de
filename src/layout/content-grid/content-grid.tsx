import * as React from 'react';

import { LayoutSize } from '../layout';

import { Styled } from './content-grid.styles';

export type ContentGridProps = {
  debug?: boolean;
  rowGap?: boolean;
  size?: LayoutSize;
};

export const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  debug = false,
  rowGap = false,
  size = 'fullsize',
  ...props
}) => (
  <Styled.ContentGrid debug={debug} rowGap={rowGap} size={size} {...props}>
    {children}
  </Styled.ContentGrid>
);
