import * as React from 'react';
import type { GatsbyImageProps } from 'gatsby-image';

import { Styled } from './image.styles';

export const Image = ({ ...props }: GatsbyImageProps) => (
  <Styled.Container>
    <Styled.Image {...props} />
  </Styled.Container>
);
