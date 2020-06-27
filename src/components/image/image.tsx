import * as React from 'react';
import { GatsbyImageProps } from 'gatsby-image';

import { Styled } from './image.styles';

export const Image: React.FC<GatsbyImageProps> = ({ ...props }) => (
  <Styled.Container>
    <Styled.Image {...props} />
  </Styled.Container>
);
