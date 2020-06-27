import * as React from 'react';
import { GatsbyImageProps } from 'gatsby-image';

import { Styled } from './cover-image.styles';

export type CoverImageProps = GatsbyImageProps;

export const CoverImage: React.FC<CoverImageProps> = ({ ...props }) => (
  <Styled.CoverImageContainer>
    <Styled.CoverImage {...props} />
  </Styled.CoverImageContainer>
);
