import styled from 'styled-components';
import type { GatsbyImageProps } from 'gatsby-image';

import { mediaQuery } from '../../../layout/tokens';
import { Image } from '../../../components/image';

const HaikuImageContainer = styled.div`
  grid-column: 1 / -3;
  grid-row: 3;

  @media (${mediaQuery.tablet}) {
    grid-column: 1 / -4;
  }
`;

const HaikuImage = styled(Image)<GatsbyImageProps>`
  border-left-width: 0;
`;

export const Styled = {
  HaikuImage,
  HaikuImageContainer,
};
