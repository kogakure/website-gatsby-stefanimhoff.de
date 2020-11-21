import * as React from 'react';
import type { GatsbyImageProps } from 'gatsby-image';

import { Styled } from './cover-image.styles';

export type CoverImageProps = GatsbyImageProps;

export const CoverImage = ({ ...props }: CoverImageProps) => (
  <Styled.CoverImageContainer>
    <Styled.CoverImage {...props} />
  </Styled.CoverImageContainer>
);
