import styled from 'styled-components';
import type { GatsbyImageProps } from 'gatsby-image';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const ImageContainer = styled.div`
  grid-column: 1 / -5;
  grid-row: 2;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -9;
  }
`;

const CoverImage = styled(Image)<GatsbyImageProps>`
  border-left-width: 0;
`;

export const Styled = {
  CoverImage,
  ImageContainer,
};
